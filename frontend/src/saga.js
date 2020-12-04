import {
  getPneusSuccess,GET_PNEUS,getPneusError,  getPneus,
  getMarquesSuccess, GET_MARQUES, getMarquesError,
  addPneuSuccess, ADD_PNEU, addPneuError,
  addVenteSuccess, ADD_VENTE_PNEU, addVenteError,
  addVenteAccessoireSuccess, ADD_VENTE_ACCESSOIRE, addVenteAccessoireError,
  updatePneuSuccess, UPDATE_PNEU, updatePneuError,
  getTopCinqPneusSuccess, GET_TOP_CINQ_PNEUS, getTopCinqPneusError,
  getPourcentageMarqueSuccess, GET_POURCENTAGE_MARQUE, getPourcentageMarqueError,
  getHistoriquePneuSuccess, GET_HISTORIQUE_PNEU, getHistoriquePneuError,
  getVentePneuSuccess, GET_VENTE_PNEU, getVentePneuError,
  getVenteAccessoireSuccess, GET_VENTE_ACCESSOIRE, getVenteAccessoireError,
  getGainMonthSuccess, GET_GAIN_MONTH, getGainMonthError,
  getGainHierSuccess, GET_GAIN_HIER, getGainHierError, getGainHier, getPourcentageMarque
} from './actions/index'
import {call , put, takeLatest} from 'redux-saga/effects'
import axiosGet from 'axios'
import axios from 'axios'

function* getPneusApi(){
  const requestConfig = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
  const url = "/api/pneu";
  try{
      const data = yield call(axiosGet, url, requestConfig)
      yield put(getPneusSuccess(data.data))
    } catch(e){
      yield put(getPneusError());
      console.log("eror when calling api to get data pneu : ",e)
    }
}

function* getTopCinqPneuApi(){
  const requestConfig = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  const url = "/api/statistique/topCinqVendu";
  try{
      const data = yield call(axiosGet, url, requestConfig)
      yield put(getTopCinqPneusSuccess(data.data))
    } catch(e){
      yield put(getTopCinqPneusError());
      console.log("eror when calling api to get top cinq pneu : ",e)
  }
}

function* getPourcentageByMarqueApi(){
  const requestConfig = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  const url = "/api/statistique/pourcentageMarque";
  try{
      const data = yield call(axiosGet, url, requestConfig)
      yield put(getPourcentageMarqueSuccess(data.data))
    } catch(e){
      yield put(getPourcentageMarqueError());
      console.log("eror when calling api to get pourcentage by marque : ",e)
  }
}

function* getMarquesApi(){
  const requestConfig = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  const url = "/api/marque";
  try{
    console.log("hani f saga 1")
    const data = yield call(axiosGet, url, requestConfig)
    yield put(getMarquesSuccess(data.data))
    
    console.log("hani f saga 2")
  } catch(e){
      yield put(getMarquesError());
      console.log("eror when calling api to get data marques : ",e)
  }
}

function* addPneuApi(action) {
  // Constitution de la requête
  const data = action.payload
  const url = "/api/pneu";
  const apiCall = async () => {
    try {
      const response = await axios.post(url, data)
      return response.data
    }
    catch (err) {
      console.log("erreu :", err)
      throw err
    }
  }
  // Envoi de la requête
  try {
    yield call(apiCall)
    yield put(addPneuSuccess("Votre commande a été ajoutée avec succès"));
  } catch (error) {
    console.log("hani :",error)
    yield put(addPneuError("Erreur.")
    );
  }
}

function* updatePneuApi(action) {
  const data = action.payload
  const url = " /api/pneu";
  const apiCall = async () => {
    try {
      const response = await axios.put(url, data)
      return response.data
    }
    catch (err) {
      console.log("erreu :", err)
      throw err
    }
  }
  // Envoi de la requête
  try {
    yield call(apiCall)
    yield put(getPneus());
    yield put(updatePneuSuccess("Votre pneu a été modifié avec succès"));
  } catch (error) {
    console.log("hani :",error)
    yield put(updatePneuError("Erreur.")
    );
  }
}

function* getHistoriquePneuApi(){
  const requestConfig = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  const url = "/api/historiqueAchatPneu";
  try{
      const data = yield call(axiosGet, url, requestConfig)
      yield put(getHistoriquePneuSuccess(data.data))
    } catch(e){
      yield put(getHistoriquePneuError());
      console.log("eror when calling api to get historique achat pneu : ",e)
    }
}

function* addVentePneu(action) {
  // Constitution de la requête
  const data = action.payload
  const url = "/api/vente/pneu";
  const apiCall = async () => {
    try {
      const response = await axios.post(url, data)
      return response.data
    }
    catch (err) {
      console.log("erreu :", err)
      throw err
    }
  }
  // Envoi de la requête
  try {
    yield call(apiCall)
    yield put(addVenteSuccess("Votre pneu a été vendu avec succès"));
    yield put(getPneus());
  } catch (error) {
    console.log("hani :",error)
    yield put(addVenteError("Erreur.")
    );
  }
}

function* addVenteAccessoire(action) {
  // Constitution de la requête
  const data = action.payload
  const url = "/api/vente/accessoire";
  const apiCall = async () => {
    try {
      const response = await axios.post(url, data)
      return response.data
    }
    catch (err) {
      console.log("erreu :", err)
      throw err
    }
  }
  // Envoi de la requête
  try {
    yield call(apiCall)
    yield put(addVenteAccessoireSuccess("Votre accessoire a été vendu avec succès"));
  } catch (error) {
    console.log("hani :",error)
    yield put(addVenteAccessoireError("Erreur.")
    );
  }
}

function* getVentePneuApi(){
  const requestConfig = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  const url = "/api/vente/pneu/today";
  try{
      const data = yield call(axiosGet, url, requestConfig)
      yield put(getVentePneuSuccess(data.data))
    } catch(e){
      yield put(getVentePneuError());
      console.log("eror when calling api to get historique vente pneu : ",e)
    }
}

function* getVenteAccessoireApi(){
  const requestConfig = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  const url = "/api/vente/accessoire/today";
  try{
      const data = yield call(axiosGet, url, requestConfig)
      yield put(getVenteAccessoireSuccess(data.data))
    } catch(e){
      yield put(getVenteAccessoireError());
      console.log("eror when calling api to get historique vente of today accessoire : ",e)
    }
}

function* getGainOfMonthApi(){
  const requestConfig = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  const url = "/api/gain/month";
  try{
      const data = yield call(axiosGet, url, requestConfig)
      yield put(getGainMonthSuccess(data.data))
    } catch(e){
      yield put(getGainMonthError());
      console.log("eror when calling api to get gain of month : ",e)
    }
}

function* getGainOfHierApi(){
  const requestConfig = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  const url = "/api/gain/yesterday";
  try{
      const data = yield call(axiosGet, url, requestConfig)
      yield put(getGainHierSuccess(data.data))
    } catch(e){
      yield put(getGainHierError());
      console.log("eror when calling api to get gain of yesterday : ",e)
    }
}


export default function* mySaga(){
    yield takeLatest(GET_PNEUS, getPneusApi)
    yield takeLatest(GET_MARQUES,getMarquesApi)
    yield takeLatest(ADD_PNEU,addPneuApi)
    yield takeLatest(UPDATE_PNEU,updatePneuApi)
    yield takeLatest(GET_HISTORIQUE_PNEU, getHistoriquePneuApi)
    yield takeLatest(GET_VENTE_PNEU, getVentePneuApi)
    yield takeLatest(GET_VENTE_ACCESSOIRE, getVenteAccessoireApi)
    yield takeLatest(ADD_VENTE_PNEU, addVentePneu)
    yield takeLatest(ADD_VENTE_ACCESSOIRE, addVenteAccessoire)
    yield takeLatest(GET_TOP_CINQ_PNEUS, getTopCinqPneuApi)
    yield takeLatest(GET_POURCENTAGE_MARQUE, getPourcentageByMarqueApi)
    yield takeLatest(GET_GAIN_MONTH, getGainOfMonthApi)
    yield takeLatest(GET_GAIN_HIER, getGainOfHierApi)
}