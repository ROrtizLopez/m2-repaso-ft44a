import * as actionTypes from './action-types';

/* Esta forma de import me trae las constantes declaradas en el archivo action.types.js. 
La estructura de datos de este import es un objeto (duda, es tipo json?).
 */



export const setUser = (data) => {
    return { type: actionTypes.SET_USER,  payload: data }
};

export const addFavorite = (episode) => {
    return { type: actionTypes.ADD_FAVORITE, payload: episode }
};

export const DELETE_FAVORITE = (id) => {
    return { type:actionTypes.DELETE_FAVORITE, payload:id }
};

export const ratingFavorite = ( { id, rating }) => {
    return { type:actionTypes.RATING_FAVORITE, payload: { id, rating } }
};

export const completedFavorite = (id) => {
    return { type: actionTypes.COMPLETED_FAVORITE, payload:id }
};