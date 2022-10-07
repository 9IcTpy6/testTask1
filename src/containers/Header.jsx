import React from "react";
import './Header.css'


export default function Header({curencies}) {


    return (
        <div className='Header'>
            <div className='block1'>
                <h2>Eur: {curencies['EUR']}</h2>
            </div>
            <div className='block2'>
                <h2>USD: {curencies['USD']}</h2>
            </div>
        </div>
    )
}
