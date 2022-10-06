import React, {useEffect, useState} from "react";
import './Header.css'


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

export default function Header() {
    const defaultCurrencies = {
        "EUR": '',
        "USD": ''
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
        <div className='Header'>
            <div className='block1'>
                <h2>Eur: {currencies['EUR']}</h2>
            </div>
            <div className='block2'>
                <h2>USD: {currencies['USD']}</h2>
            </div>
        </div>
    )
}
