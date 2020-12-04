import React, { Component } from 'react';
import Pneus from '../Pneus';
import FormPneu from '../FormAjout/FormPneu'
import Ventes from '../Ventes/Pneus'
import Footer from '../Footer';
import Home from '../Home'
import HistoriqueAchatPneu from '../Historique/HistoriqueAchatPneu'
import VenteAccessoire from '../Ventes/Accessoires'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

class App extends Component {    

  render() {
    return(
        <Router id="root">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pneus" component={Pneus} />
                <Route path="/formPneu" component={FormPneu} />
                <Route path="/ventePneu" component={Ventes} />
                <Route path="/venteAccessoire" component={VenteAccessoire} />
                <Route path="/historiqueAchatPneu" component={HistoriqueAchatPneu} />
            </Switch>
            <Footer />
        </Router>
    )
  }
}


export default App;