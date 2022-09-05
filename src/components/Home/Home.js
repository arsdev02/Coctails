import React, {useEffect} from 'react';
import Output from "../Output/Output";
import {useDispatch} from "react-redux";
import {getAllCocktails} from "../../redux/action/dal";
import Header from "../Header/Header";
import SubMain from "../SubMain/SubMain";
import LetterPaginate from "../LetterPaginate/LetterPaginate";

const Home = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllCocktails())
    },[dispatch])
    return (
        <div>
            <Header main/>
            <SubMain/>
            <Output/>
            <LetterPaginate/>
        </div>
    );
};

export default Home;