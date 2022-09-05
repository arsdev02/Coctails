import React from 'react';
import Header from "../Header/Header";
import CoctailsByLetter from "./CoctailsByLetter";
import LetterPaginate from "../LetterPaginate/LetterPaginate";

const CocktailsByLetterPage = () => {
    return (
        <div>
            <Header/>
            <LetterPaginate/>
            <CoctailsByLetter/>
        </div>
    );
};

export default CocktailsByLetterPage;