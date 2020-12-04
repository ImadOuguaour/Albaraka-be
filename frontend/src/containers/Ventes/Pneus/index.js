import React, { Component } from 'react'
import Header from '../../Header'
import {connect} from 'react-redux'
import {getPneus, getMarques, addVentePneu} from '../../../actions/index'
import '../index.css'
import {Container, Badge, Button, Alert, Form, Col, FormGroup, Label, Input, Row} from 'reactstrap';

class Ventes extends Component {

    constructor(props){
        super(props);
        this.state = {
            marque : {},
            marqueValid : null,
            numero : null,
            numeroValid : null,
            quantite : "",
            quantiteValid : null,
            prixVente : "",
            prixVenteValid : null,
            listPneusFiltred : [],
            pneuSelected : null,
            quantiteMax : "",
            prixVenteMax : "",
            prixAchat : "",
            canSubmit : false,
            type : "",
            typeValid : null
        }
        this.handleChangeMarque = this.handleChangeMarque.bind(this)
        this.handleChangeNumero = this.handleChangeNumero.bind(this)
        this.handleChangeQuantite = this.handleChangeQuantite.bind(this)
        this.handleChangePrixVente = this.handleChangePrixVente.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.getPneuSelected = this.getPneuSelected.bind(this)
        this.handleChangeType = this.handleChangeType.bind(this)
    }

    componentDidMount(){
        this.props.getPneus();
    }

    handleChangeMarque(e){
        if(e.target.value !== ''){
            const marque = this.props.marques[e.target.value];
            this.setState({
                marque : marque,
                marqueValid : true,
                quantite : "",
                prixVente : "",
                quantiteValid : null,
                prixVenteValid : null,
                numeroValid : null
            },()=>{
                this.onValidStateAllowFormSubmission()
            })
            this.getFiltredPneus(marque)
        }else{
            this.setState({
                marque : {},
                listPneusFiltred : [],
                quantiteMax : "",
                prixVenteMax : "",
                prixAchat: "",
                marqueValid : null,
                quantite : "",
                prixVente : "",
                quantiteValid : null,
                prixVenteValid : null,
                numeroValid : null
            },()=>{
                this.onValidStateAllowFormSubmission()
            })
        }
    }

    handleChangeNumero(e){
        if(e.target.value !== ''){
            this.setState({
                numero : e.target.value,
                numeroValid : true
            },()=>this.onValidStateAllowFormSubmission());
            this.getPneuSelected(this.state.marque, e.target.value)
        }else{
            this.setState({
                quantiteMax : "",
                pneuSelected : null,
                prixVenteMax : "",
                prixAchat : "",
                numeroValid : null
            },()=>this.onValidStateAllowFormSubmission())
        }
    }

    handleChangeQuantite(e){
        if(e.target.value !== ''){
            this.setState({
                quantite : e.target.value
            })
            if(e.target.value <= this.state.quantiteMax){
                this.setState({
                    quantiteValid : true
                },()=>this.onValidStateAllowFormSubmission())
            }else{
                this.setState({
                    quantiteValid : false
                },()=>this.onValidStateAllowFormSubmission())
            }
        }else{
            this.setState({
                quantite : "",
                quantiteValid : null
            },()=>this.onValidStateAllowFormSubmission())
        }
    }

    handleChangePrixVente(e){
        const value = e.target.value
        if(value !== ''){
            if(value > 0){
                this.setState({
                    prixVente : value,
                    prixVenteValid : true
                },()=>this.onValidStateAllowFormSubmission())
            }else{
                this.setState({
                    prixVenteValid : false
                },()=>this.onValidStateAllowFormSubmission())
            }
        }else{
            this.setState({
                prixVente : "",
                prixVenteValid : null
            },()=>this.onValidStateAllowFormSubmission())
        }
    }

    handleChangeType(e){
        const value = e.target.value
        if(value !== ''){
            this.setState({
                marque : {},
                marqueValid : null,
                type : value,
                typeValid : true,
                quantite : "",
                prixVente : "",
                quantiteMax : "",
                prixVenteMax : "",
                prixAchat : "",
                prixVenteValid : null,
                quantiteValid : null,
                numeroValid : null
            },()=>{
                this.props.getMarques();
                this.onValidStateAllowFormSubmission()
                this.getFiltredPneus(this.state.marque)
            })
        }else{
            this.setState({
                type : "",
                typeValid : null,
                marque : {},
                listPneusFiltred : [],
                quantiteMax : "",
                prixVenteMax : "",
                prixAchat: "",
                marqueValid : null,
                quantite : "",
                prixVente : "",
                quantiteValid : null,
                prixVenteValid : null,
                numeroValid : null
            },()=>this.onValidStateAllowFormSubmission())
        }
    }

    getPneuSelected(marque , numero){
        var pneuSelected = this.props.pneus.filter((pneu)=>{
            return pneu.marque.id === marque.id && pneu.numero === numero && pneu.type === this.state.type
        })
        this.setState({
            pneuSelected : pneuSelected[0],
            quantiteMax : pneuSelected[0].quantite,
            prixVenteMax : pneuSelected[0].prixVente,
            prixAchat : pneuSelected[0].prixAchat
        })
    }

    getFiltredPneus(marque){
        var filtredPneus = this.props.pneus.filter((pneu)=>{
            return pneu.marque.id === marque.id && pneu.quantite > 0 && pneu.type === this.state.type
        })
        this.setState({
            listPneusFiltred : filtredPneus
        })
    }

    onValidStateAllowFormSubmission() {
        if (
          this.state.numeroValid &&
          this.state.quantiteValid &&
          this.state.prixVenteValid &&
          this.state.marqueValid && 
          this.state.typeValid
        ) {
          this.setState({ canSubmit: true });
        } else this.setState({ canSubmit: false });
    }

    handleSubmit(){
        const formData = {
            quantiteVendu: this.state.quantite,
            pneu: this.state.pneuSelected,
            prixVenteReel: this.state.prixVente,
        };
        this.props.addVentePneu(formData)
        document.getElementById("formVentePneuId").reset();
        this.setState({
            listPneusFiltred : [],
            marqueValid : null,
            typeValid:null,
            numeroValid:null,
            quantiteValid:null,
            prixVenteValid:null,
            quantiteMax:null,
            prixVenteMax:null,
            canSubmit:null,
            numero : "",
            quantite : "",
            prixVente : "",
            prixAchat: ""
        },()=>{
            this.onValidStateAllowFormSubmission()
        })
    }

    render () {
        return (
            <div>
                <Header title="Vente Pneu" onglet="Vente / Pneu"/>
                <Container className="container-pneu-vente">
                    <div>
                        <Alert hidden={this.props.responseAddVentePneu} color="primary">
                            Afin d'ajouter une nouvelle vente du pneu vous devez remplir le formulaire ci-dessous.
                        </Alert>
                    </div>
                    <div>
                        <Alert hidden={this.props.responseAddVentePneu == null} color="success">
                            {this.props.responseAddVentePneu}
                        </Alert>
                    </div>
                    <Form className="form-pneu-vente" id="formVentePneuId">
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="typePneu">Type Pneu</Label>
                                    <Input type="select" name="type" id="typePneu"
                                        onChange={this.handleChangeType}
                                        valid={this.state.typeValid === true}
                                        invalid={this.state.typeValid === false}
                                    >
                                        <option></option>
                                        <option value="Neuf">Neuf</option>
                                        <option value="Occasion">Occasion</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                <Label for="marquePneu">Marque</Label>
                                <Input type="select" name="marque" id="marquePneu" 
                                    valid = {this.state.marqueValid === true}
                                    onChange={this.handleChangeMarque}
                                >
                                    <option selected={!this.state.typeValid || !this.state.marqueValid}></option>
                                {
                                    this.props.marques 
                                    ?
                                    this.props.marques.map((marque, index)=>{
                                        return <option key={marque.id} value={index} >{marque.libelle}</option>
                                    })
                                    :
                                    ''
                                }
                                    
                                </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                <Label for="numeroPneu">Numéro</Label>
                                <Input type="select" name="numero" id="numeroPneu" 
                                    valid = {this.state.numeroValid === true}
                                    onChange={this.handleChangeNumero}
                                >
                                    <option></option>
                                {
                                    this.state.listPneusFiltred 
                                    ?
                                    this.state.listPneusFiltred.map((pneuFiltred, index)=>{
                                        return <option key={pneuFiltred.id} value={pneuFiltred.numero} >{pneuFiltred.numero}</option>
                                    })
                                    :
                                    ''
                                }
                                    
                                </Input>
                                </FormGroup>
                            </Col>
                            <Col >
                                <FormGroup>
                                <Label for="quantite">Quantité</Label>
                                <Input
                                    type="number"
                                    name="quantite"
                                    id="quantite"
                                    value={this.state.quantite}
                                    onChange={this.handleChangeQuantite}
                                    valid = {this.state.quantiteValid === true} 
                                    invalid = {this.state.quantiteValid === false}
                                />
                                {this.state.quantiteMax && <Badge color="warning">Vous avez encore {this.state.quantiteMax} exemplaires</Badge>}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                <Label for="prixVente">Prix de vente</Label>
                                <Input
                                    valid={this.state.prixVenteValid === true}
                                    invalid={this.state.prixVenteValid === false}
                                    onChange={this.handleChangePrixVente}
                                    
                                    type="number"
                                    value={this.state.prixVente}
                                    name="prixVente"
                                    id="prixVente"
                                />
                                {this.state.prixVenteMax && <Badge color="info">Le prix de vente moyen est {this.state.prixVenteMax} DHs<br></br></Badge>}
                                {(this.state.prixAchat>this.state.prixVente) && (this.state.prixVente !== null) 
                                && 
                                <Badge color="danger">Le prix d'achat moyen est {this.state.prixAchat} DHs</Badge>}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-right">
                                    <Button 
                                        outline
                                        disabled={!this.state.canSubmit}
                                        onClick={this.handleSubmit}
                                        color = "success">
                                            Ajouter
                                    </Button>
                                </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        pneus : state.data.pneus,
        marques : state.data.marques,
        responseAddVentePneu : state.data.responseAddVentePneu
    }
}

function mapDispatchToProps(dispatch){
    return {
        getPneus: () => dispatch(getPneus()),
        getMarques: () => dispatch(getMarques()),
        addVentePneu: (formData) => dispatch(addVentePneu(formData))
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Ventes)