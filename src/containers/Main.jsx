import './Main.scss'
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function Main({curencies}) {


    const currencies1 = [
        {
            value: curencies['USD'],
            label: '$ - USD',
        },
        {
            value: curencies['EUR'],
            label: '€ - EUR',
        },
        {
            value: curencies['UAH'],
            label: '₴ - UAH',
        }
    ];
    const currencies2 = [
        {
            value: curencies['USD'],
            label: '$ - USD',
        },
        {
            value: curencies['EUR'],
            label: '€ - EUR',
        },
        {
            value: curencies['UAH'],
            label: '₴ - UAH',
        }
    ];


    const [currency1, setCurrency1] = useState('EUR');
    const [currency2, setCurrency2] = useState('USD');
    const [cache, setCache] = useState(0)
    const [cache2, setCache2] = useState(0)

    const handleChange1 = (event) => {
        setCurrency1(event.target.value);
        console.log(currency1)
    };
    const handleChange2 = (event) => {
        setCurrency2(event.target.value);
        console.log(currency2)

    };

    const handleInputMath1 = (e) => {
        setCache2(e.target.value * currency1 / currency2)
        setCache(0)
    }

    const handleInputMath2 = (e) => {
        setCache(e.target.value * currency2 / currency1)
        setCache2(0)
    }

    return (
        <div className="MainWrapper">
            <div>
                <TextField
                    id="outlined-basic"
                    label="Enter first value"
                    variant="outlined"
                    onChange={handleInputMath1}
                    value={cache ? cache.toFixed(2) : null}
                />
                <TextField
                    id="outlined-select-currency1"
                    select
                    label="Select"
                    value={currency1}
                    onChange={handleChange1}
                    helperText="Please select your currency"
                >
                    {currencies1.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Get here result"
                    variant="outlined"
                    value={cache2 ? cache2.toFixed(2) : null}
                    onChange={handleInputMath2}
                />
                <TextField
                    id="outlined-select-currency2"
                    select
                    label="Select"
                    value={currency2}
                    onChange={handleChange2}
                    helperText="Please select your currency"
                >
                    {currencies2.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        </div>
    )
}