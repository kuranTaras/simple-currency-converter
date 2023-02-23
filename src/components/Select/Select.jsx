import React, {useEffect, useState} from 'react';
import './Select.css'

const Select = ({options, type, onChange, selectValue}) => {

    const [currencyLabels, setCurrencyLabels] = useState([])

    useEffect(() => {
        if (options) {
            let labels = options.map((o) => o.ccy)
            options.forEach((item) => {labels.push(item.base_ccy)})
            labels = labels.filter(function(item, pos) {
                return labels.indexOf(item) === pos;
            })
            setCurrencyLabels(labels)
        }
    }, [options])

    return (
        <>
            {
                options !== null && <>
                    {
                        type === 'change' ?
                            <select value={selectValue} onChange={onChange} className={'select'}>
                                {currencyLabels.map((label, index) => {

                                    return <option key={`${label} ${index}`} value={label}>{label}</option>
                                })}
                            </select>
                            :
                            <select value={selectValue} onChange={onChange} className={'select'}>
                                {currencyLabels.map((label, index) => (
                                    <option key={`${label} ${index}`} value={label}>{label}</option>
                                ))}
                            </select>
                    }
                </>
            }
        </>

    );
};

export default Select;