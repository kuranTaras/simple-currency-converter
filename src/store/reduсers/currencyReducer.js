import {
    CHANGE_CHANGE_VALUE, CHANGE_GET_VALUE,
    GET_CURRENCY_DATA_FINISH, GET_CURRENCY_DATA_SERVER_ERROR, SET_CHANGE_CURRENCY_LABEL, SET_GET_CURRENCY_LABEL,
} from "../actionTypes/ActionTypes";
import {initialState} from "../states/currencyState";



export default function CurrencyReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENCY_DATA_FINISH:
            return {
                ...state, currencyData: action.currencyData, nativeCurrency: action.currencyData[0].base_ccy
            }
        case GET_CURRENCY_DATA_SERVER_ERROR:
            return {
                ...state, serverError: action.error
            }
        case CHANGE_CHANGE_VALUE:
            return {
                ...state, changeValue: action.changeValue
            }
        case CHANGE_GET_VALUE:
            return {
                ...state, getValue: action.getValue
            }
        case SET_CHANGE_CURRENCY_LABEL:
            return {
                ...state, changeCurrencyLabel: action.changeCurrencyLabel
            }
        case SET_GET_CURRENCY_LABEL:
            return {
                ...state, getCurrencyLabel: action.getCurrencyLabel
            }
        default:
            return state
    }
}