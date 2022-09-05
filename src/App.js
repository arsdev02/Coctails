import React from 'react';
import {Route, Routes} from 'react-router-dom'

import Home from "./components/Home/Home";

import './App.css'
import Ingr from "./components/Ingr/ingr";
import Random from "./components/Random/Random";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import CocktailsByLetterPage from "./components/CocktailByLetter/CocktailsByLetterPage";

const App = () => {
    return (
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/details/:id'} element={<DetailsPage/>}/>
              <Route path={'/details/random'} element={<Random/>}/>
              <Route path={'/ingr/:name'} element={<Ingr/>}/>
              <Route path={'/letter/:letter'} element={<CocktailsByLetterPage/>}/>
          </Routes>
    );
};

export default App;