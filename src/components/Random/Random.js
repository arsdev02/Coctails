import React, {useEffect,useState} from 'react';
import Details from "../Details/Details";
import Header from "../Header/Header";
import {cleareCocktail, getRandomCocktail} from "../../redux/action/dal";
import {useDispatch, useSelector} from "react-redux";
import cocktail from "../../redux/redusers/deteilReduser";


const Random = () => {
    const {cocktail} = useSelector(state => state)
    const [bool,setBool] = useState(true)
    console.log(bool)
    console.log(cocktail)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRandomCocktail(setBool))
    }, [dispatch])

    const controlBool = () =>{
        dispatch(getRandomCocktail(setBool))
    }

    return (
        <div>
            <Header />
            <div className="container">
                <button onClick={controlBool} className='random-btn'>get random cocktail</button>
            </div>
            <Details bool={bool} />
        </div>
    );
};

export default Random;