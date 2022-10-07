import "./Wrapper.scss";
import Header from "./Header";
import Footer from "./Footer";
import React, {useEffect, useState} from "react";
import Main from "./Main";

async function makeRequestForCurrentCurrenciesRate() {

    const nbuExchangeApi = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"

    try {
        const response = await fetch(nbuExchangeApi, {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            }
        });

        const jsonResponse = await response.json();

        let returnRate = {
            "USD": '', // default value of zero is not adequate,
            "EUR": '' //  but for user 'undefined' either, so it would rather use ''.
        }

        for (let currency of jsonResponse) {
            if (currency['cc'] && (currency['cc'] === "USD" || currency['cc'] === "EUR")) {
                returnRate[currency['cc']] = currency['rate'] ? currency['rate'] : ''
            }
        }
        console.log(JSON.stringify(returnRate))
        return returnRate
    } catch (error) {
        console.error('Error:', error);
    }
}


export default function Wrapper(props) {
    const defaultCurrencies = {
        "EUR": '',
        "USD": '',
        "UAH": '1'
    }

    const [currencies, setCurrencies] = useState(defaultCurrencies)

    useEffect(() => {
        makeRequestForCurrentCurrenciesRate().then(
            (response) => {
                console.log(JSON.stringify(response))
                setCurrencies(response)
            }
        )
    }, [])

    return (
        <div className='Wrapper'>
            <Header curencies={currencies}/>
            <Main curencies={currencies}/>
            <Footer/>
        </div>
    )
}