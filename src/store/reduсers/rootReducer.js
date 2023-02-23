import {combineReducers} from 'redux'
import CurrencyReducer from './currencyReducer'


export default combineReducers({
    currency: CurrencyReducer,
})