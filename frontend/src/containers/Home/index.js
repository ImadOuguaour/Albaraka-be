import React from "react";
import Header from '../Header';
import {Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Spinner, Badge} from 'reactstrap';
import CanvasJSReact from '../../canvasjs.react';
import {connect} from 'react-redux';
import {getTopCinqPneus, getVentePneu, getVenteAccessoire, getGainMonth, getGainHier, getPourcentageMarque} from '../../actions/index'
import classnames from 'classnames';
import MaterialTable from 'material-table'
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import './index.css'

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Home extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      activeTab : "1",
      dateOfToday : new Date()
    }

    this.toggle = this.toggle.bind(this)
  }

  componentDidMount(){
    this.props.getVentePneu();
    this.props.getVenteAccessoire();
    this.props.getGainMonth();
    this.props.getGainHier();
    
  }

  toggle(tab){
    if(this.state.activeTab !== tab)
      this.setState({activeTab : tab},()=>{
        if(this.state.activeTab === '4'){
          this.props.getTopCinqPneus();
          this.props.getPourcentageMarque();
        }else if(this.state.activeTab === '2'){
          this.props.getVentePneu()
        }else if(this.state.activeTab === '1'){
          //this.props.getVentePneu()
          this.props.getVenteAccessoire()
          this.props.getGainMonth();
          this.props.getGainHier();
        }else if(this.state.activeTab === '3'){
          this.props.getVenteAccessoire()
        }
      })
  }

  getMois(){
    var tab_mois=new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
    return tab_mois[this.state.dateOfToday.getMonth()]
  }

  getSommeGainDuJourAccessoire(){
    var sum = 0;
    this.props.historiqueVenteAccessoireToday.forEach(element => {
      sum += element.prixVente
    });
    return sum;
  }

  getSommeGainDuJourPneus(){
    var sum = 0;
    this.props.historiqueVentePneuToday.forEach(element => {
      sum += element.benifice
    });
    return sum;
  }

  render(){
    const options = {
      exportEnabled: true,
      theme : "dark2",
      title: {
        text: "TOP 5 MARQUES "
      },
      data: [
      {
        type: "column",
        dataPoints: this.props.topCinqPneusVendu
      }
      ]
    }

    const options2 = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "dark2", // "light1", "dark1", "dark2"
      title:{
        text: "QUANTITE MARQUE STOCK"
      },
      data: [{
        type: "pie",
        indexLabel: "{label}: {y}%",		
        startAngle: -50,
        dataPoints: this.props.pourcentageByMarque
      }]
    }

    const columns = [
    {
        title: 'Type',
        field: 'type',
    }, {
        title: 'Numéro',
        field: 'numero'
    }, {
        title: 'Marque',
        field: 'marque.libelle'
    }, {
        title: 'Quantité',
        field: 'quantite',
    }, {
        title: 'Prix de vente',
        field: 'prixVente',
    }, {
        title: 'Gain',
        field: 'benifice',
        cellStyle: {
          backgroundColor: '#039be5',
          color: '#FFF',
          textAlign : 'center',
          fontWeight:'bold'
        },
        headerStyle: {
          backgroundColor: '#01579b',
        }
    }]

    const columnsAccessoireVendu = [
      {
          title: 'Accessoire',
          field: 'accessoire',
      }, {
          title: 'Quantité',
          field: 'quantite',
      }, {
          title: 'Gain',
          field: 'prixVente',
          cellStyle: {
            backgroundColor: '#039be5',
            color: '#FFF',
            textAlign : 'center',
            fontWeight:'bold'
          },
          headerStyle: {
            backgroundColor: '#01579b',
          }
    }]

    return (
      <div>
        <Header title="Application de gestion" />
          <Container >
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                Gains
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                Vente Pneus
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => { this.toggle('3'); }}
              >
                Vente Accessoires
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '4' })}
                onClick={() => { this.toggle('4'); }}
              >
                Statistiques globales
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1" className="tab-pane"> 
                <Row>
                  <Col>
                  {
                    this.props.historiqueVenteAccessoireToday && this.props.historiqueVentePneuToday
                    ?
                    <Alert severity="success">
                      <AlertTitle>
                        Gain du jour <strong>{this.state.dateOfToday.getDate()} {this.getMois()} {this.state.dateOfToday.getFullYear()}</strong>
                      </AlertTitle>
                      <h5>
                        <strong>
                            {this.getSommeGainDuJourAccessoire() + this.getSommeGainDuJourPneus()} Dhs
                        </strong>
                      </h5>
                    </Alert>
                    :
                    <div  className="text-center">
                        <Spinner style={{ width: '10rem', height: '10rem' }} color="success" />
                    </div>
                  }
                  </Col>
                  <Col>
                  <Alert severity="warning">
                    <AlertTitle>Gain <strong>d'hier</strong></AlertTitle>
                      <h5>
                        <strong>
                            {this.props.gainOfHier} Dhs
                        </strong>
                      </h5>
                  </Alert>
                  </Col>
                  <Col>
                  {
                    <Alert severity="info">
                      <AlertTitle>Gain du mois <strong>{this.getMois()} {this.state.dateOfToday.getFullYear()}</strong></AlertTitle>
                        <h5>
                          <strong>
                              {this.props.gainOfMonth} Dhs
                          </strong>
                        </h5>
                    </Alert>
                   
                  }
                  </Col>
                </Row>
                
                
            </TabPane>
            <TabPane tabId="2" className="tab-pane">
                {
                  this.props.historiqueVentePneuToday
                  ?
                  <MaterialTable
                      title="Pneus vendus aujourd'hui"
                      columns={columns}
                      data={this.props.historiqueVentePneuToday}
                      options={{
                          paginationType: 'stepped', 
                          exportButton : true,
                          headerStyle: {
                            backgroundColor: '#01579b',
                            color: '#FFF',
                            fontWeight:'bold',
                            textAlign : 'center'
                          },
                          cellStyle: {
                            textAlign : 'center',
                          }
                      }}
                  />
                  :
                  <div  className="text-center">
                      <Spinner style={{ width: '10rem', height: '10rem' }} color="primary" />
                  </div>
                }
            </TabPane>
            <TabPane tabId="3" className="tab-pane">
              {
                this.props.historiqueVenteAccessoireToday
                ?
                <MaterialTable
                    title="Accessoires vendus aujourd'hui"
                    columns={columnsAccessoireVendu}
                    data={this.props.historiqueVenteAccessoireToday}
                    options={{
                        paginationType: 'stepped', 
                        exportButton : true,
                        headerStyle: {
                          backgroundColor: '#01579b',
                          color: '#FFF',
                          fontWeight:'bold',
                          textAlign : 'center'
                        },
                        cellStyle: {
                          textAlign : 'center',
                        },
                        titleStyle: {
                          color : 'red'
                        }
                    }}
                />
                :
                <div  className="text-center">
                    <Spinner style={{ width: '10rem', height: '10rem' }} color="primary" />
                </div>
              }
            </TabPane>
            <TabPane tabId="4" className="tab-pane">
                <Row>
                  <Col>
                    <CanvasJSChart options = {options}
                        /* onRef = {ref => this.chart = ref} */
                    />  
                  </Col>
                  <Col>
                    <CanvasJSChart options = {options2} 
                      /* onRef={ref => this.chart = ref} */
                    />
                  </Col>
                </Row>
            </TabPane>
          </TabContent>
            
          </Container>
      </div>
    );

  }
}

function mapStateToProps(state) {
  console.log("hani f mapState : ",state)
  return {
      topCinqPneusVendu : state.data.topCinqPneusVendu,
      pourcentageByMarque : state.data.pourcentageByMarque,
      historiqueVentePneuToday : state.data.historiqueVentePneuToday,
      historiqueVenteAccessoireToday : state.data.historiqueVenteAccessoireToday,
      gainOfMonth : state.data.gainOfMonth,
      gainOfHier : state.data.gainOfHier
  }
}

function mapDispatchToProps(dispatch){
  return {
    getGainMonth: () => dispatch(getGainMonth()),
    getTopCinqPneus: () => dispatch(getTopCinqPneus()),
    getPourcentageMarque: () => dispatch(getPourcentageMarque()),
    getVentePneu: () => dispatch(getVentePneu()),
    getVenteAccessoire: () => dispatch(getVenteAccessoire()),
    getGainHier: () => dispatch(getGainHier())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);