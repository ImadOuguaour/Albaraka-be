export const GET_PNEUS= 'GET_PNEUS';
export const GET_PNEUS_SUCCESS= 'GET_PNEUS_SUCCESS';
export const GET_PNEUS_ERROR= 'GET_PNEUS_ERROR';

export const GET_TOP_CINQ_PNEUS= 'GET_TOP_CINQ_PNEUS';
export const GET_TOP_CINQ_PNEUS_SUCCESS= 'GET_TOP_CINQ_PNEUS_SUCCESS';
export const GET_TOP_CINQ_PNEUS_ERROR= 'GET_TOP_CINQ_PNEUS_ERROR';

export const GET_POURCENTAGE_MARQUE= 'GET_POURCENTAGE_MARQUE';
export const GET_POURCENTAGE_MARQUE_SUCCESS= 'GET_POURCENTAGE_MARQUE_SUCCESS';
export const GET_POURCENTAGE_MARQUE_ERROR= 'GET_POURCENTAGE_MARQUE_ERROR';

export const GET_PNEUS_BY_MARQUE= 'GET_PNEUS_BY_MARQUE';
export const GET_PNEUS_BY_MARQUE_SUCCESS= 'GET_PNEUS_BY_MARQUE_SUCCESS';
export const GET_PNEUS_BY_MARQUE_ERROR= 'GET_PNEUS_BY_MARQUE_ERROR';

export const GET_MARQUES= 'GET_MARQUES';
export const GET_MARQUES_SUCCESS= 'GET_MARQUES_SUCCESS';
export const GET_MARQUES_ERROR= 'GET_MARQUES_ERROR';

export const ADD_PNEU= 'ADD_PNEU';
export const ADD_PNEU_SUCCESS= 'ADD_PNEU_SUCCESS';
export const ADD_PNEU_ERROR= 'ADD_PNEU_ERROR';

export const ADD_VENTE_PNEU= 'ADD_VENTE_PNEU';
export const ADD_VENTE_PNEU_SUCCESS= 'ADD_VENTE_PNEU_SUCCESS';
export const ADD_VENTE_PNEU_ERROR= 'ADD_VENTE_PNEU_ERROR';

export const ADD_VENTE_ACCESSOIRE= 'ADD_VENTE_ACCESSOIRE';
export const ADD_VENTE_ACCESSOIRE_SUCCESS= 'ADD_VENTE_ACCESSOIRE_SUCCESS';
export const ADD_VENTE_ACCESSOIRE_ERROR= 'ADD_VENTE_ACCESSOIRE_ERROR';

export const UPDATE_PNEU= 'UPDATE_PNEU';
export const UPDATE_PNEU_SUCCESS= 'UPDATE_PNEU_SUCCESS';
export const UPDATE_PNEU_ERROR= 'UPDATE_PNEU_ERROR';

export const GET_HISTORIQUE_PNEU= 'GET_HISTORIQUE_PNEU';
export const GET_HISTORIQUE_PNEU_SUCCESS= 'GET_HISTORIQUE_PNEU_SUCCESS';
export const GET_HISTORIQUE_PNEU_ERROR= 'GET_HISTORIQUE_PNEU_ERROR';

export const GET_VENTE_PNEU= 'GET_VENTE_PNEU';
export const GET_VENTE_PNEU_SUCCESS= 'GET_VENTE_PNEU_SUCCESS';
export const GET_VENTE_PNEU_ERROR= 'GET_VENTE_PNEU_ERROR';

export const GET_VENTE_ACCESSOIRE= 'GET_VENTE_ACCESSOIRE';
export const GET_VENTE_ACCESSOIRE_SUCCESS= 'GET_VENTE_ACCESSOIRE_SUCCESS';
export const GET_VENTE_ACCESSOIRE_ERROR= 'GET_VENTE_ACCESSOIRE_ERROR';

export const GET_GAIN_MONTH= 'GET_GAIN_MONTH';
export const GET_GAIN_MONTH_SUCCESS= 'GET_GAIN_MONTH_SUCCESS';
export const GET_GAIN_MONTH_ERROR= 'GET_GAIN_MONTH_ERROR';

export const GET_GAIN_HIER= 'GET_GAIN_HIER';
export const GET_GAIN_HIER_SUCCESS= 'GET_GAIN_HIER_SUCCESS';
export const GET_GAIN_HIER_ERROR= 'GET_GAIN_HIER_ERROR';

export const getPneus = () => ({
    type: GET_PNEUS,
})

export const getPneusSuccess = (data) => ({
    type: GET_PNEUS_SUCCESS,
    payload : data
})

export const getPneusError = () => ({
    type: GET_PNEUS_ERROR,
    payload : []
})

export const getTopCinqPneus = () => ({
    type: GET_TOP_CINQ_PNEUS,
})

export const getTopCinqPneusSuccess = (data) => ({
    type: GET_TOP_CINQ_PNEUS_SUCCESS,
    payload : data
})

export const getTopCinqPneusError = () => ({
    type: GET_TOP_CINQ_PNEUS_ERROR,
    payload : []
})

export const getPourcentageMarque = () => ({
    type: GET_POURCENTAGE_MARQUE,
})

export const getPourcentageMarqueSuccess = (data) => ({
    type: GET_POURCENTAGE_MARQUE_SUCCESS,
    payload : data
})

export const getPourcentageMarqueError = () => ({
    type: GET_POURCENTAGE_MARQUE_ERROR,
    payload : []
})

export const getPneusByMarque = () => ({
    type: GET_PNEUS_BY_MARQUE,
})

export const getPneusByMarqueSuccess = (data) => ({
    type: GET_PNEUS_BY_MARQUE_SUCCESS,
    payload : data
})

export const getPneusByMarqueError = () => ({
    type: GET_PNEUS_BY_MARQUE_ERROR,
    payload : []
})

export const getMarques = () => ({
    type: GET_MARQUES,
})

export const getMarquesSuccess = (data) => ({
    type: GET_MARQUES_SUCCESS,
    payload : data
})

export const getMarquesError = () => ({
    type: GET_MARQUES_ERROR,
    payload : []
})

export const addPneu = (data) => ({
    type: ADD_PNEU,
    payload: data
})

export const addPneuSuccess = (responseAddPneu) => ({
    type: ADD_PNEU_SUCCESS,
    payload: responseAddPneu
})

export const addPneuError = (responseAddPneu) => ({
    type: ADD_PNEU_ERROR,
    payload: responseAddPneu
})

export const addVentePneu = (data) => ({
    type: ADD_VENTE_PNEU,
    payload: data
})

export const addVenteSuccess = (responseAddVentePneu) => ({
    type: ADD_VENTE_PNEU_SUCCESS,
    payload: responseAddVentePneu
})

export const addVenteError = (responseAddVentePneu) => ({
    type: ADD_VENTE_PNEU_ERROR,
    payload: responseAddVentePneu
})

export const addVenteAccessoire = (data) => ({
    type: ADD_VENTE_ACCESSOIRE,
    payload: data
})

export const addVenteAccessoireSuccess = (responseAddVenteAccessoire) => ({
    type: ADD_VENTE_ACCESSOIRE_SUCCESS,
    payload: responseAddVenteAccessoire
})

export const addVenteAccessoireError = (responseAddVenteAccessoire) => ({
    type: ADD_VENTE_ACCESSOIRE_ERROR,
    payload: responseAddVenteAccessoire
})

export const updatePneu = (data) => ({
    type: UPDATE_PNEU,
    payload: data
})

export const updatePneuSuccess = (responseUpdatePneu) => ({
    type: UPDATE_PNEU_SUCCESS,
    payload: responseUpdatePneu
})

export const updatePneuError = (responseUpdatePneu) => ({
    type: UPDATE_PNEU_ERROR,
    payload: responseUpdatePneu
})

export const getHistoriquePneu = () => ({
    type: GET_HISTORIQUE_PNEU,
})

export const getHistoriquePneuSuccess = (data) => ({
    type: GET_HISTORIQUE_PNEU_SUCCESS,
    payload : data
})

export const getHistoriquePneuError = () => ({
    type: GET_HISTORIQUE_PNEU_ERROR,
    payload : []
})

export const getVentePneu = () => ({
    type: GET_VENTE_PNEU,
})

export const getVentePneuSuccess = (data) => ({
    type: GET_VENTE_PNEU_SUCCESS,
    payload : data
})

export const getVentePneuError = () => ({
    type: GET_VENTE_PNEU_ERROR,
    payload : []
})

export const getVenteAccessoire = () => ({
    type: GET_VENTE_ACCESSOIRE,
})

export const getVenteAccessoireSuccess = (data) => ({
    type: GET_VENTE_ACCESSOIRE_SUCCESS,
    payload : data
})

export const getVenteAccessoireError = () => ({
    type: GET_VENTE_ACCESSOIRE_ERROR,
    payload : []
})

export const getGainMonth = () => ({
    type: GET_GAIN_MONTH,
})

export const getGainMonthSuccess = (data) => ({
    type: GET_GAIN_MONTH_SUCCESS,
    payload : data
})

export const getGainMonthError = () => ({
    type: GET_GAIN_MONTH_ERROR,
    payload : ""
})

export const getGainHier = () => ({
    type: GET_GAIN_HIER,
})

export const getGainHierSuccess = (data) => ({
    type: GET_GAIN_HIER_SUCCESS,
    payload : data
})

export const getGainHierError = () => ({
    type: GET_GAIN_HIER_ERROR,
    payload : ""
})