import './Main.scss'
import useState from 'react-usestateref';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {FormControl, InputLabel, Select} from "@mui/material";

export default function Main({curencies}) {


    const currenciesSelect1 = [
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
    const currenciesSelect2 = [
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


    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState("EUR");
    const [inputValue1, setInputValue1] = useState(0)
    const [inputValue2, setInputValue2] = useState(0)

    const handleChange1 = (event) => {
        setCurrency1(event.target.value);
    };
    const handleChange2 = (event) => {
        setCurrency2(event.target.value);
    };

    const handleInputCalculations1 = (e) => {
        setInputValue2(e.target.value * currency1 / currency2)
        setInputValue1(0)
    }

    const handleInputCalculations2 = (e) => {
        setInputValue1(e.target.value * currency2 / currency1)
        setInputValue2(0)
    }


    return (
        <div className="MainWrapper">
            <div className='content'>
                <div className='input-block1'>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        onChange={handleInputCalculations1}
                        value={inputValue1 ? inputValue1.toFixed(2) : null}
                    />

                    <FormControl sx={{width: 130}}>
                        <InputLabel id="demo-simple-select-label">Current</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={currency1}
                            label="Currency"
                            onChange={handleChange1}
                        >
                            {currenciesSelect1.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>))}
                        </Select>
                    </FormControl>
                </div>
                <div className='input-block2'>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        value={inputValue2 ? inputValue2.toFixed(2) : null}
                        onChange={handleInputCalculations2}
                    />
                    <FormControl sx={{width: 130}}>
                        <InputLabel id="demo-simple-select-label">Current</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={currency2}
                            label="Currency"
                            onChange={handleChange2}
                        >
                            {currenciesSelect2.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>))}
                        </Select>
                    </FormControl>

                </div>
            </div>
        </div>
    )
}