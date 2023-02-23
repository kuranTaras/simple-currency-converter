import React from 'react'
import {withLayout} from './layout/Layout/Layout'
import Exchanger from "./components/Exchanger/Exchanger";
import {useSelector} from "react-redux";


function App() {
    const serverError = useSelector((state) => state.currency.serverError)
  return (
    <div className="App">
        {serverError ?
            <p>Something went wrong, please try again later</p>
            :
            <>
                <h1>
                    Currency Converter
                </h1>
                <Exchanger />
            </>
        }
    </div>
  );
}

export default withLayout(App);
