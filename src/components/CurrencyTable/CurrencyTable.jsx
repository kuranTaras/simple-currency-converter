import React, {useEffect} from 'react';
import './CurrencyTable.css'
import {useDispatch, useSelector} from "react-redux";
import {getCurrencyData} from "../../store/actions/currencyActions";
import {CurrencyRound} from "../../helpers/helpers";

const CurrencyTable = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrencyData())
    }, [dispatch])

    const currency = useSelector(state => state.currency.currencyData)

    return (
        <ul className={'currency-values'}>
            {currency && currency.map((c) => (
                <li key={`${c.buy}${c.sale}${c.ccy}`}>
                        <span>
                            {c.ccy} / {c.base_ccy}
                        </span>
                        <span>
                            {CurrencyRound(c.buy)}/{CurrencyRound(c.sale)}
                        </span>
                </li>
            ))}
        </ul>
    );
};

export default CurrencyTable;