import React, { Component } from 'react'
import {Container, Spinner, Alert} from 'reactstrap';
import PropTypes from "prop-types";
import './index.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Dialog from '@material-ui/core/Dialog';
import {connect} from 'react-redux';
import {getPneus, updatePneu} from '../../actions/index'
import Header from '../Header'
import MaterialTable from 'material-table';



class Pneus extends Component {

    constructor(props){
        super(props);
        this.state = {
            dialogOpen : false,
            openModalDelete : false,
            alertVisible : true,
            pneu : {
                id : null,
                numero : null,
                marque : {},
                quantite : null,
                prixAchat : null,
                prixVente : null
            }
        }  
        this.openModal = this.openModal.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.updatePneu = this.updatePneu.bind(this)
    }
    componentDidMount(){
        this.props.getPneus(); 
    }

    openModal(rowData, data){
        this.setState({
            pneu : data,
            dialogOpen: true
        })
    }

    updatePneu(){
        this.setState({dialogOpen : false})
        const formData = {
            id: this.state.pneu.id,
            numero: this.state.pneu.numero,
            quantite: this.state.pneu.quantite,
            prixAchat: this.state.pneu.prixAchat,
            prixVente: this.state.pneu.prixVente,
            marque: this.state.pneu.marque,
            type: this.state.pneu.type
        };
        this.props.updatePneu(formData);
    }

    handleChange(e){
        console.log("e ",e.target.value)
        console.log("name ",e.target.name)
        const name = e.target.name
        const valeur = e.target.value
        this.setState(prevState => ({
            pneu: {
              ...prevState.pneu,          // copy all other key-value pairs of food object
              [name] : valeur
            }
          }))       
        
    }


    render () {
        
        const columns = [
            {
                title: 'Marque',
                field: 'marque.libelle'
            }, {
                title: 'Numéro',
                field: 'numero',
            }, {
                title: 'Quantité',
                field: 'quantite',
            }, {
                title: 'Prix d\'achat',
                field: 'prixAchat',
            }, {
                title: 'Prix de vente',
                field: 'prixVente',
            }, {
                title: 'Type',
                field: 'type',
            }]
            return (
                <div>
                    <Header title="Stock" onglet="Stock"/>
                    <Container className="conatiner-pneus">
                    {
                        <Alert hidden={this.props.responseUpdatePneu == null} isOpen={this.state.alertVisible} toggle={()=> {
                            this.setState({alertVisible : false})
                        }} color="success">
                            Pneu modifier avec success
                        </Alert>
                    }
                    {
                        this.props.pneus
                        ?
                            <div>
                                <MaterialTable
                                title="Pneus disponibles"
                                columns={columns}
                                data={this.props.pneus}
                                options={{
                                    headerStyle: {
                                        backgroundColor: '#01579b',
                                        color: '#FFF',
                                        fontWeight:'bold',
                                        textAlign : 'center'
                                    },
                                    cellStyle: {
                                    textAlign : 'center',
                                    },
                                    paginationType: 'stepped', 
                                }}
                                actions={[
                                    {
                                    icon: 'edit',
                                    iconProps: { style: {color: "skyBlue" } },
                                    tooltip: "Modifier pneu",
                                    onClick: ((rowData, data) => {
                                        return this.openModal(rowData, data)
                                    })
                                    }
                                ]}/>
                                <Dialog open={this.state.dialogOpen} onClose={()=>{this.setState({dialogOpen : false})}}
                                 aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">Modification pneu</DialogTitle>
                                    
                                    <DialogContent>
                                    <DialogContentText>
                                        <Alert color="info">
                                            Afin de modifier ce pneu vous devez remplir le formulaire ci-dessous.
                                        </Alert>
                                    </DialogContentText>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="numero"
                                            name="numero"
                                            label="Numéro"
                                            type="text"
                                            defaultValue={this.state.pneu.numero}
                                            onChange={this.handleChange}
                                            fullWidth
                                        />
                                        
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="quantite"
                                            name="quantite"
                                            label="Quantite"
                                            type="number"
                                            defaultValue={this.state.pneu.quantite}
                                            onChange={this.handleChange}
                                            fullWidth
                                        />
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            name="prixAchat"
                                            id="PrixAchat"
                                            label="Prix d\'achat"
                                            type="number"
                                            defaultValue={this.state.pneu.prixAchat}
                                            onChange={this.handleChange}
                                            fullWidth
                                        />
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            name="prixVente"
                                            id="PrixVente"
                                            label="Prix de vente"
                                            type="number"
                                            defaultValue={this.state.pneu.prixVente}
                                            onChange={this.handleChange}
                                            fullWidth
                                        />
                                        </DialogContent>
                                        <DialogActions>
                                        <Button onClick={()=>{this.setState({dialogOpen : false})}} color="primary">
                                            Cancel
                                        </Button>
                                        <Button onClick={this.updatePneu} color="primary">
                                            Modifier
                                        </Button>
                                        </DialogActions>
                                </Dialog>
                            </div>
                            :
                            <div  className="text-center">
                                <Spinner style={{ width: '10rem', height: '10rem' }} color="primary" />
                            </div>
                    }
                    </Container>
                </div>
              );
    }
}

Pneus.protoTypes ={
    getPneus: PropTypes.func
}

function mapStateToProps(state) {
    console.log("hani f mapState : ",state)
    return {
        pneus : state.data.pneus,
        responseUpdatePneu : state.data.responseUpdatePneu
    }
}

function mapDispatchToProps(dispatch){
    return {
        getPneus: () => dispatch(getPneus()),
        updatePneu : formData => dispatch(updatePneu(formData))
    }
}

/*
const mapDispatchToProps = dispatch =>
    bindActionCreators({getPneus}, dispatch);
*/


export default connect(mapStateToProps,mapDispatchToProps)(Pneus);