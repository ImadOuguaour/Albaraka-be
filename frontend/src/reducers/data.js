import {
    GET_PNEUS_SUCCESS, GET_PNEUS, GET_PNEUS_ERROR,
    GET_MARQUES, GET_MARQUES_SUCCESS, GET_MARQUES_ERROR,
    ADD_PNEU, ADD_PNEU_SUCCESS, ADD_PNEU_ERROR,
    ADD_VENTE_PNEU, ADD_VENTE_PNEU_SUCCESS, ADD_VENTE_PNEU_ERROR,
    ADD_VENTE_ACCESSOIRE, ADD_VENTE_ACCESSOIRE_SUCCESS, ADD_VENTE_ACCESSOIRE_ERROR,
    UPDATE_PNEU, UPDATE_PNEU_SUCCESS, UPDATE_PNEU_ERROR,
    GET_TOP_CINQ_PNEUS, GET_TOP_CINQ_PNEUS_SUCCESS, GET_TOP_CINQ_PNEUS_ERROR,
    GET_POURCENTAGE_MARQUE, GET_POURCENTAGE_MARQUE_SUCCESS, GET_POURCENTAGE_MARQUE_ERROR,
    GET_HISTORIQUE_PNEU, GET_HISTORIQUE_PNEU_SUCCESS, GET_HISTORIQUE_PNEU_ERROR,
    GET_VENTE_PNEU, GET_VENTE_PNEU_SUCCESS, GET_VENTE_PNEU_ERROR,
    GET_VENTE_ACCESSOIRE, GET_VENTE_ACCESSOIRE_SUCCESS, GET_VENTE_ACCESSOIRE_ERROR,
    GET_GAIN_MONTH, GET_GAIN_MONTH_SUCCESS, GET_GAIN_MONTH_ERROR,
    GET_GAIN_HIER, GET_GAIN_HIER_SUCCESS, GET_GAIN_HIER_ERROR
} from '../actions/index';

// create initial state for reducers
const INIT_STATE = {
    pneus: [],
    marques: [],
    topCinqPneusVendu: [],
    pourcentageByMarque : [],
    historiquePneu: [],
    historiqueVentePneuToday: [],
    historiqueVenteAccessoireToday: [],
    responseAddPneu : null,
    responseUpdatePneu : null,
    responseAddVentePneu : null,
    responseAddVenteAccessoire : null,
    gainOfMonth : null,
    gainOfHier : null
}

// reducer function to transform state
export default function(state = [INIT_STATE], action) {
    switch(action.type){
        case GET_PNEUS : {
            return { ...state}
        }
        case GET_PNEUS_SUCCESS : {
            return {  pneus : action.payload, marques: state.marques}
        };
        case GET_PNEUS_ERROR : {
            return { ...state, pneus : action.payload}
        };
        case GET_POURCENTAGE_MARQUE : {
            return { ...state}
        }
        case GET_POURCENTAGE_MARQUE_SUCCESS : {
            return {  ...state, pourcentageByMarque : action.payload, topCinqPneusVendu : state.topCinqPneusVendu}
        };
        case GET_POURCENTAGE_MARQUE_ERROR : {
            return { ...state, pourcentageByMarque : action.payload}
        };
        case GET_TOP_CINQ_PNEUS : {
            return { ...state}
        }
        case GET_TOP_CINQ_PNEUS_SUCCESS : {
            return {  topCinqPneusVendu : action.payload, historiqueVentePneuToday: state.historiqueVentePneuToday, 
                historiqueVenteAccessoireToday : state.historiqueVenteAccessoireToday,pourcentageByMarque : state.pourcentageByMarque}
        };
        case GET_TOP_CINQ_PNEUS_ERROR : {
            return { ...state, topCinqPneusVendu : action.payload}
        };
        case GET_MARQUES : {
            return { ...state}
        }
        case GET_MARQUES_SUCCESS : {
            return { ...state, marques : action.payload, pneus: state.pneus}
        };
        case GET_MARQUES_ERROR : {
            return { ...state, marques : action.payload}
        };
        case ADD_PNEU : {
            return { ...state}
        }
        case ADD_PNEU_SUCCESS : {
            return { ...state, responseAddPneu : action.payload}
        };
        case ADD_PNEU_ERROR : {
            return { ...state, responseAddPneu : action.payload}
        };
        case ADD_VENTE_PNEU : {
            return { ...state}
        }
        case ADD_VENTE_PNEU_SUCCESS : {
            return { ...state, responseAddVentePneu : action.payload}
        };
        case ADD_VENTE_PNEU_ERROR : {
            return { ...state, responseAddVentePneu : action.payload}
        };
        case ADD_VENTE_ACCESSOIRE : {
            return { ...state}
        }
        case ADD_VENTE_ACCESSOIRE_SUCCESS : {
            return { ...state, responseAddVenteAccessoire : action.payload}
        };
        case ADD_VENTE_ACCESSOIRE_ERROR : {
            return { ...state, responseAddVenteAccessoire : action.payload}
        };
        case UPDATE_PNEU : {
            return { ...state}
        }
        case UPDATE_PNEU_SUCCESS : {
            return { ...state, responseUpdatePneu : action.payload}
        };
        case UPDATE_PNEU_ERROR : {
            return { ...state, responseUpdatePneu : action.payload}
        };
        case GET_HISTORIQUE_PNEU : {
            return { ...state}
        }
        case GET_HISTORIQUE_PNEU_SUCCESS : {
            return { historiquePneu : action.payload}
        };
        case GET_HISTORIQUE_PNEU_ERROR : {
            return { ...state, historiquePneu : action.payload}
        };
        case GET_VENTE_PNEU : {
            return { ...state}
        }
        case GET_VENTE_PNEU_SUCCESS : {
            return { ...state, historiqueVentePneuToday : action.payload, historiqueVenteAccessoireToday: state.historiqueVenteAccessoireToday}
        };
        case GET_VENTE_PNEU_ERROR : {
            return { ...state, historiqueVentePneuToday : action.payload}
        };
        case GET_VENTE_ACCESSOIRE : {
            return { ...state}
        }
        case GET_VENTE_ACCESSOIRE_SUCCESS : {
            return { ...state, historiqueVenteAccessoireToday : action.payload, historiqueVentePneuToday : state.historiqueVentePneuToday}
        };
        case GET_VENTE_ACCESSOIRE_ERROR : {
            return { ...state, historiqueVenteAccessoireToday : action.payload}
        };
        case GET_GAIN_MONTH : {
            return { ...state}
        }
        case GET_GAIN_MONTH_SUCCESS : {
            return { ...state, gainOfMonth : action.payload}
        };
        case GET_GAIN_MONTH_ERROR : {
            return { ...state, gainOfMonth : action.payload}
        };
        case GET_GAIN_HIER : {
            return { ...state}
        }
        case GET_GAIN_HIER_SUCCESS : {
            return { ...state, gainOfHier : action.payload}
        };
        case GET_GAIN_HIER_ERROR : {
            return { ...state, gainOfHier : action.payload}
        };
        default : return state
    }
}