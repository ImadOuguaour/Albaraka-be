import React, { Component } from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Alert, 
    Row
  } from 'reactstrap';
import '../index.css';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {getMarques, addPneu} from '../../../actions/index'
import Header from '../../Header'

class FormPneu extends Component {

    constructor(props){
        super(props);
        this.state={
            numero: "",
            quantite: "",
            prixAchat: "",
            prixVente: "",
            marque: {},
            numeroValid: null,
            quantiteValid: null,
            prixAchatValid: null,
            prixVenteValid: null,
            type:null,
            typeValid : null,
            marqueValid: null,
            canSubmit : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.getMarques();
    }

    handleChange = validInput => e => {
        const name = e.target.name;
        let value = e.target.value;
        let valid = true;
        if(value !== ''){
            if(name === "marque"){
                value = this.props.marques[value];
            }
            if(name === "numero"){
                var regex = RegExp('^[0-9]{3}\\.[0-9]{2}\\.[0-9]{2}$');
                if(!regex.test(value)){
                    valid = false
                }
            }
            if(name=== "quantite"){
                if(value <= 0){
                    valid = false
                }
            }
            if(name === "prixAchat"){
                if(value <= 0){
                    valid = false
                }
            }
            if(name === "prixVente"){
                if(value <= 0 || value < this.state.prixAchat){
                    valid = false
                }
            }
            this.setState({[validInput]: valid});
            this.setState({ [name]: value },() =>
            this.onValidStateAllowFormSubmission())
        }else{
            this.setState({[validInput]: null});
            this.setState({ [name]: value },() =>
            this.onValidStateAllowFormSubmission())
        }
    }

    onValidStateAllowFormSubmission() {
        if (
          this.state.numeroValid &&
          this.state.quantiteValid &&
          this.state.prixAchatValid &&
          this.state.prixVenteValid &&
          this.state.marqueValid &&
          this.state.typeValid
        ) {
          this.setState({ canSubmit: true });
        } else this.setState({ canSubmit: false });
    }

    handleSubmit() {
        const formData = {
            numero: this.state.numero,
            quantite: this.state.quantite,
            prixAchat: this.state.prixAchat,
            prixVente: this.state.prixVente,
            marque: this.state.marque,
            type : this.state.type
        };
        this.props.addPneu(formData);
        document.getElementById("formPneuId").reset();
        this.setState({
            numeroValid:null,
            typeValid:null,
            marqueValid:null,
            quantiteValid:null,
            prixVenteValid:null,
            prixAchatValid:null,
            canSubmit:null,
            numero: "",
            quantite : "",
            prixAchat: "",
            prixVente : ""
        },this.onValidStateAllowFormSubmission())
    }

    render () {
        return (
            <div>
                <Header title="Nouvelle Commande" onglet="Ajout / Pneu"/>                
                <Container className="container-pneu-ajout">
                    <div hidden={this.props.responseAddPneu}>
                        <Alert color="primary">
                            Afin d'ajouter un nouveau pneu vous devez remplir le formulaire ci-dessous.
                        </Alert>
                    </div>
                    <div>
                        <Alert hidden={this.props.responseAddPneu == null} color="success">
                            {this.props.responseAddPneu}
                        </Alert>
                    </div>
                    <Form className="form-pneu" id="formPneuId">
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="typePneu">Type Pneu</Label>
                                <Input type="select" name="type" id="typePneu"
                                    onChange={this.handleChange("typeValid")}
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
                            <Label for="numPneu">Numéro pneu</Label>
                            <Input
                                type="text"
                                name="numero"
                                id="numPneu"
                                placeholder="175.12.12"
                                value={this.state.numero}
                                onChange={this.handleChange("numeroValid")}
                                valid = {this.state.numeroValid === true}
                                invalid={this.state.numeroValid === false}
                            />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                            <Label for="marquePneu">Marque</Label>
                            <Input type="select" name="marque" id="marquePneu" 
                                onChange={this.handleChange("marqueValid")}
                                valid = {this.state.marqueValid === true}
                                invalid={this.state.marqueValid === false}
                            >
                                <option></option>
                            {
                                this.props.marques 
                                ?
                                this.props.marques.map((marque, index)=>{
                                    return <option key={marque.id} value={index} >{marque.libelle}</option>
                                })
                                :
                                <option></option>
                            }
                                
                            </Input>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                            <Label for="quantite">Quantité</Label>
                            <Input
                                type="number"
                                name="quantite"
                                id="quantite"
                                value = {this.state.quantite}
                                onChange={this.handleChange("quantiteValid")}
                                valid = {this.state.quantiteValid === true}
                                invalid={this.state.quantiteValid === false}
                            />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                            <Label for="prixAchat">Prix d'achat</Label>
                            <Input
                                type="number"
                                name="prixAchat"
                                id="prixAchat"
                                value = {this.state.prixAchat}
                                onChange={this.handleChange("prixAchatValid")}
                                valid = {this.state.prixAchatValid === true}
                                invalid={this.state.prixAchatValid === false}
                            />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                            <Label for="prixVente">Prix de vente</Label>
                            <Input
                                type="number"
                                name="prixVente"
                                id="prixVente"
                                value={this.state.prixVente}
                                onChange={this.handleChange("prixVenteValid")}
                                valid = {this.state.prixVenteValid === true}
                                invalid={this.state.prixVenteValid === false}
                            />
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
                        <Col className="text-left">
                            <Button outline 
                                onClick={()=>{this.props.history.push("/pneus")}}
                                color="primary">
                                    Accueil
                            </Button>
                        </Col>
                    </Row>
                    </Form>
                </Container>
                </div>
        )
    }
}

FormPneu.protoTypes ={
    getMarques: PropTypes.func
}

function mapStateToProps(state) {
    return {
        marques : state.data.marques,
        responseAddPneu : state.data.responseAddPneu
    }
}

function mapDispatchToProps(dispatch){
        return {
            getMarques: () => dispatch(getMarques()),
            addPneu : formData => dispatch(addPneu(formData))
        }
}

    

export default connect(mapStateToProps,mapDispatchToProps)(FormPneu)