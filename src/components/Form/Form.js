import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {useDispatch, useSelector} from "react-redux";
import {getAllCocktails, getCocktailByCategory, getCocktailsByName} from "../../redux/action/dal";
import MenuItem from '@mui/material/MenuItem';

import logo from '../../images/logo.png'
import {NavLink} from "react-router-dom";

const currencies = [
    {
        value: 'all',
        label: 'all',
    },
    {
        value: 'Alcoholic',
        label: 'Alcoholic',
    },
    {
        value: 'Non_alcoholic',
        label: 'Non alcoholic',
    },
    {
        value: 'Ordinary_Drink',
        label: 'Ordinary Drink',
    },
];
const Form = () => {
    // const {cocktails} = useSelector(state => state)
    // console.log(cocktails)
    const dispatch = useDispatch()
    const search = (name) => {
        if (name.length > 2) {
            dispatch(getCocktailsByName(name))
        } else {
            dispatch(getAllCocktails())
        }
    }

    const [currency, setCurrency] = useState('all');

    const handleChange = (name) => {
        console.log(name)
        setCurrency(name);
        if(name==='all'){
            dispatch(getAllCocktails())
        }else if (name==='Ordinary_Drink'){
            dispatch(getAllCocktails(name))
        }

        else {
            dispatch(getCocktailByCategory(name))
        }
    };

    return (
        <div className='form_cont'>
            <div className="form">
                <div style={{display: 'flex', columnGap: '20px'}}>
                    <TextField
                        autoComplete='off'
                        id="outlined-basic"
                        label="search bar"
                        variant="outlined"
                        onChange={e => search(e.target.value)}
                    />
                    <TextField
                        style={{width: '200px', color:'#fff'}}
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={currency}
                        onChange={e=>handleChange(e.target.value)}
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </div>
        </div>
    );
};

export default Form;