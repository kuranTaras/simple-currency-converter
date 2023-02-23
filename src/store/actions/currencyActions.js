import {
    GET_CURRENCY_DATA_FINISH,
    GET_CURRENCY_DATA_SERVER_ERROR
} from "../actionTypes/ActionTypes";

export function getCurrencyData() {
    return async dispatch => {
        try {
            let currencyData
            await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').then(res => res.json())
                .then(data => {
                    currencyData = data
                })
            dispatch(getCurrencyDataFinish(currencyData))
        } catch (e) {
            dispatch(getCurrencyDataServerError(e))
        }
    }
}

export function getCurrencyDataFinish (currencyData) {
    return {
        type: GET_CURRENCY_DATA_FINISH,
        currencyData,
    }
}
export function getCurrencyDataServerError (error) {
    return {
        type: GET_CURRENCY_DATA_SERVER_ERROR,
        error,
    }
}