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

    let cache1 = 0;
    let cache2 = 0;

    const [currency1, setCurrency1] = useState('EUR');
    const [currency2, setCurrency2] = useState('EUR');

    const handleChange1 = (event) => {
        setCurrency1(event.target.value);
    };
    const handleChange2 = (event) => {
        setCurrency2(event.target.value);
    };

    const handleInputMath1 = (e) => {

    }

    const handleInputMath2 = (e) => {

    }

    return (
        <div className="MainWrapper">
            <div>
                <TextField
                    id="outlined-basic"
                    label="Enter first value"
                    variant="outlined"
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
                    // onChange={handleInputMath1}
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