import './Main.scss'
import TextField from '@mui/material/TextField';

export default function Main() {
    return (
        <div className="MainWrapper">
            <div>
                <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
            </div>
        </div>
    )
}