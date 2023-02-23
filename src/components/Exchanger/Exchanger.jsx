import React, {useEffect} from 'react';
import Input from "../Input/Input";
import Select from "../Select/Select";
import {useDispatch, useSelector} from "react-redux";
import './Exchanger.css'
import {
    calculateOnChange, onChangeValueAction, onGetValueAction,
    setChangeCurrencyLabel,
    setGetCurrencyLabel
} from "../../store/actions/exchangerActions";

const Exchanger = () => {

    const dispatch = useDispatch()

    const changeValue = useSelector((state) => state.currency.changeValue)
    const getValue = useSelector((state) => state.currency.getValue)
    const currency = useSelector((state) => state.currency.currencyData)
    const changeCurrencyLabel = useSelector((state) => state.currency.changeCurrencyLabel)
    const getCurrencyLabel = useSelector((state) => state.currency.getCurrencyLabel)

    useEffect(() => {
        if (currency && changeCurrencyLabel === '' && getCurrencyLabel === '') {
            dispatch(setChangeCurrencyLabel(currency[0].ccy))
            dispatch(setGetCurrencyLabel(currency[0].base_ccy))
        }
    }, [currency])

    const onChangeValueHandler = (value) => {
        dispatch(onChangeValueAction(value))
    }

    const onGetValueHandler = (value) => {
        dispatch(onGetValueAction(value))
    }

    const onSelectGet = (e) => {
        dispatch(setGetCurrencyLabel(e.target.value))
    }

    const onSelectChange = (e) => {
        dispatch(setChangeCurrencyLabel(e.target.value))
    }

    useEffect(() => {
        if (changeValue) {
            calculateOnChangeHandler(changeValue)
        }
    }, [changeCurrencyLabel, getCurrencyLabel])



    const calculateOnChangeHandler = (value) => {
        dispatch(calculateOnChange(value))
    }



    return (
        <form className={'exchanger'}>
            <div className={'label'}>
                <Input className={'input-exchanger'} value={changeValue} label={'Change'} onChange={(e) => onChangeValueHandler(e)} />
                <Select selectValue={changeCurrencyLabel} onChange={(e) => onSelectChange(e)} options={currency} type={'change'} />
            </div>
            <div className={'label'}>
                <Input className={'input-exchanger'} value={getValue} label={'Get'} onChange={(e) => onGetValueHandler(e)} />
                <Select selectValue={getCurrencyLabel} onChange={(e) => onSelectGet(e)} options={currency} type={'get'} />
            </div>
        </form>
    );
};

export default Exchanger;