import React from 'react'
import './Header.css'
import CurrencyTable from "../../components/CurrencyTable/CurrencyTable";

const Header = ({className}) => {
    return (
        <header className={`${className}`}>
            <CurrencyTable />
        </header>
    );
};

export default Header;