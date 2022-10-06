let values = {
    EUR: 0,
    USD: 10
}

// const date = new Date
// let year = date.getFullYear();
// let month = date.getMonth()
// month = (month + 1) < 10 ? '0' + (month + 1) : (month + 1);
// let day = date.getDate()
// day = day < 10 ? '0' + day : day;
// const dateUrl = `${year}${month}${day}`

//const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${dateUrl}?json;`
const nbu_url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"

function makeRequest(url) {
    fetch(url).then(response => {
        console.log(response)
        return response.json()
    }).then((result) => {
        let rate = {}
        for (let cur of result) {
            if (cur.cc === "USD") {
                rate = cur.rate ? cur.rate : null
            }
        }

        console.log(rate)
        return Promise.resolve()
    }).catch((e) => {
        console.log(e)
    })
}

const nbu_url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"

async function makeRequestForCurrencies(url) {

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            }
        });

        const jsonResponse = await response.json();

        let rate = {
            "USD": '', // default value of zero is not adequate,
            "EUR": '' //  but for user 'undefined' either, so it would rather use ''.
        }

        for (let currency of jsonResponse) {
            if (currency['cc'] && (currency['cc'] === "USD" || currency['cc'] === "EUR")) {
                rate[currency['cc']] = currency['rate'] ? currency['rate'] : ''
            }
        }

        console.log(JSON.stringify(rate))
    } catch (error) {
        console.error('Error:', error);
    }
}