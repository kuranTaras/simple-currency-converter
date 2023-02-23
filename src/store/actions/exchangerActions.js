import {
    CHANGE_CHANGE_VALUE,
    CHANGE_GET_VALUE,
    SET_CHANGE_CURRENCY_LABEL, SET_GET_CURRENCY_LABEL
} from "../actionTypes/ActionTypes";
import {CurrencyRound} from "../../helpers/helpers";

export function changeChangeValue (changeValue) {
    return {
        type: CHANGE_CHANGE_VALUE,
        changeValue,
    }
}

export function changeGetValue (getValue) {
    return {
        type: CHANGE_GET_VALUE,
        getValue,
    }
}

export function setChangeCurrencyLabel (changeCurrencyLabel) {
    return {
        type: SET_CHANGE_CURRENCY_LABEL,
        changeCurrencyLabel,
    }
}

export function setGetCurrencyLabel (getCurrencyLabel) {
    return {
        type: SET_GET_CURRENCY_LABEL,
        getCurrencyLabel,
    }
}

export function calculateOnGet (value) {
    return async (dispatch, getState) => {
        const changeCurrencyLabel = getState().currency.changeCurrencyLabel
        const getCurrencyLabel = getState().currency.getCurrencyLabel
        const nativeCurrency = getState().currency.nativeCurrency
        const currency = getState().currency.currencyData
        let idx
        if (changeCurrencyLabel !== nativeCurrency) {
            if (getCurrencyLabel !== nativeCurrency) {
                if (changeCurrencyLabel === getCurrencyLabel) {
                    dispatch(changeChangeValue(CurrencyRound(value)))
                    return
                }
                currency.forEach((item) => {
                    if (item.ccy  === changeCurrencyLabel) {
                        idx = item.buy
                    }
                })
                currency.forEach((item) => {
                    if (item.ccy  === getCurrencyLabel) {
                        idx /= item.sale
                    }
                })
                dispatch(changeChangeValue(CurrencyRound(value/idx)))
            } else {
                currency.forEach((item) => {
                    if (item.ccy  === changeCurrencyLabel) {
                        idx = item.buy
                    }
                })
                dispatch(changeChangeValue(CurrencyRound(value/idx)))
            }
        } else {
            currency.forEach((item) => {
                if (item.ccy  === getCurrencyLabel) {
                    idx = item.sale
                }
            })
            dispatch(changeChangeValue(CurrencyRound(value*idx)))
        }
        if (!idx) {
            dispatch(changeChangeValue(CurrencyRound(value)))
        }
    }
}

export function calculateOnChange (value) {
    return async (dispatch, getState) => {
        const changeCurrencyLabel = getState().currency.changeCurrencyLabel
        const getCurrencyLabel = getState().currency.getCurrencyLabel
        const nativeCurrency = getState().currency.nativeCurrency
        const currency = getState().currency.currencyData
        let idx
        if (changeCurrencyLabel !== nativeCurrency) {
            if (getCurrencyLabel !== nativeCurrency) {
                if (changeCurrencyLabel === getCurrencyLabel) {
                    dispatch(changeGetValue(CurrencyRound(value)))
                    return
                }
                currency.forEach((item) => {
                    if (item.ccy  === changeCurrencyLabel) {
                        idx = item.buy
                    }
                })
                currency.forEach((item) => {
                    if (item.ccy  === getCurrencyLabel) {
                        idx /= item.sale
                    }
                })
                dispatch(changeGetValue(CurrencyRound(value*idx)))
            } else {
                currency.forEach((item) => {
                    if (item.ccy  === changeCurrencyLabel) {
                        idx = item.buy
                    }
                })
                dispatch(changeGetValue(CurrencyRound(value*idx)))
            }
        } else {
            currency.forEach((item) => {
                if (item.ccy  === getCurrencyLabel) {
                    idx = item.sale
                }
            })
            dispatch(changeGetValue(CurrencyRound(value/idx)))
        }
        if (!idx) {
            dispatch(changeGetValue(CurrencyRound(value)))
        }
    }
}

export function onChangeValueAction (value) {
    return async (dispatch) => {
        if (value.target.value === '') {
            dispatch(changeChangeValue(value.target.value))
            dispatch(calculateOnChange(value.target.value))
        } else {
            if (!!Number(value.target.value)) {
                dispatch(changeChangeValue(value.target.value))
                dispatch(calculateOnChange(value.target.value))
            }
        }
    }
}

export function onGetValueAction (value) {
    return async (dispatch) => {
        if (value.target.value === '') {
            dispatch(changeGetValue(value.target.value))
            dispatch(calculateOnGet(value.target.value))
        } else {
            if (!!Number(value.target.value)) {
                dispatch(changeGetValue(value.target.value))
                dispatch(calculateOnGet(value.target.value))
            }
        }
    }
}