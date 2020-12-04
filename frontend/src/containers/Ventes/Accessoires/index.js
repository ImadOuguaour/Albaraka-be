import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addVenteAccessoire} from '../../../actions/index'
import Header from '../../Header' 
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Alert, 
    Row
  } from 'reactstrap';
import '../index.css'

class VenteAccessoire extends Component {

    constructor(props){
        super(props)
        this.state = {
            accessoire : "",
            accessoireValid : null,
            quantite : "",
            quantiteValid : null,
            prixVente : "",
            prixVenteValid : null,
            canSubmit : null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setPrixVente = this.setPrixVente.bind(this)
    }

    setPrixVente(quantite){
        console.log("hani hna : ",this.state.accessoire)
        switch (this.state.accessoire) {
            case "Tubeless":
                console.log("hani hna daba : ")
                this.setState({prixVente : 10*quantite, prixVenteValid : true})
                break;
            case "Montage":
                this.setState({prixVente : 10*quantite, prixVenteValid : true})
                break;
            case "Equilibrage simple":
                this.setState({prixVente : 10*quantite, prixVenteValid : true})
            break;
            case "Equilibrage plomb":
                this.setState({prixVente : 15*quantite, prixVenteValid : true})
                break;
            case "Crevaison":
                this.setState({prixVente : 20*quantite, prixVenteValid : true})
                break;
        
            default:
                break;
        }
    }

    handleChange = validInput => e => {
        const name = e.target.name;
        let value = e.target.value;
        let valid = true;
        if(value !== ''){
            if(name=== "quantite"){
                if(value <= 0){
                    valid = false
                }else{
                    this.setPrixVente(value)
                }
            }
            if(name === "prixVente"){
                if(value <= 0){
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
          this.state.accessoireValid &&
          this.state.quantiteValid &&
          this.state.prixVenteValid
        ) {
          this.setState({ canSubmit: true });
        } else this.setState({ canSubmit: false });
    }

    handleSubmit() {
        const formData = {
            accessoire: this.state.accessoire,
            quantite: this.state.quantite,
            prixVente: this.state.prixVente,
        };
        this.props.addVenteAccessoire(formData)
        this.setState({
            accessoire : "",
            quantite : "",
            prixVente : "",
            accessoireValid : null,
            prixVenteValid : null,
            quantiteValid : null,
            canSubmit : null
        },()=>this.onValidStateAllowFormSubmission())
    }


    render() {
        return (
            <div>
                <Header title="Vente Accessoire" onglet="Vente / Accessoire"/>
                <Container className="container-pneu-vente">
                    <div hidden={this.props.responseAddVenteAccessoire}>
                        <Alert color="primary">
                            Afin de vendre un accessoire vous devez remplir le formulaire ci-dessous.
                        </Alert>
                    </div>
                    <div>
                        <Alert hidden={this.props.responseAddVenteAccessoire == null} color="success">
                            {this.props.responseAddVenteAccessoire}
                        </Alert>
                    </div>
                    <Form className="form-pneu-vente">
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="accessoire">Accessoire</Label>
                                    <Input type="select" name="accessoire" id="accessoire"
                                        onChange={this.handleChange("accessoireValid")}
                                        valid={this.state.accessoireValid === true}
                                        invalid={this.state.accessoireValid === false}
                                    >
                                        <option selected = {!this.state.accessoireValid}></option>
                                        <option value="Tubeless">Tubeless</option>
                                        <option value="Crevaison">Crevaison</option>
                                        <option value="Montage">Montage</option>
                                        <option value="Equilibrage simple">Equilibrage simple</option>
                                        <option value="Equilibrage plomb">Equilibrage plomb</option>
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
                            <Col md = {6}>
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
                        </Row>
                    </Form>
                </Container>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        responseAddVenteAccessoire : state.data.responseAddVenteAccessoire
    }
}

function mapDispatchToProps(dispatch){
    return {
        addVenteAccessoire: (formData) => dispatch(addVenteAccessoire(formData))
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(VenteAccessoire)
