import React, {useEffect, useState} from 'react';
import {getRandomCocktail} from "../../redux/action/dal";
import {Link} from "react-router-dom";
// import axios from "axios";
// import {GET_RANDOM_COCKTAIL} from "../../config";

// import
const RandomCocktail = () => {
    const [randomCocktails, setRandomCocktails] = useState([])
    console.log(randomCocktails)

    return (
        <section className='random'>
            <div className='container'>
                <h2>Random Cocktails</h2>
                <button onClick={()=>getRandomCocktail(setRandomCocktails,randomCocktails)}>get random coctail</button>
                <div className="row">
                    {randomCocktails.map((el, index)=>{
                        return (
                            <div key={index} className='col-4'>
                                <Link
                                    to={`/details/${el.idDrink}`}
                                >
                                    <div
                                        className='output_box'
                                    >
                                        <img src={el.strDrinkThumb} alt=""/>
                                        <p>{el.strDrink}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default RandomCocktail;