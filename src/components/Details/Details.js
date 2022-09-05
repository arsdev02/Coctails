import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {cleareCocktail, getCocktailById} from "../../redux/action/dal";
import {Link, useParams} from "react-router-dom";

import './Details.css'

import logo from '../../images/logo.png'

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


import {FreeMode, Navigation, Thumbs} from "swiper";


import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CircularProgress from '@mui/material/CircularProgress';

const Details = ({bool}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const {cocktail} = useSelector(state => state)
    // console.log(cocktail)
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getCocktailById(id))
        return () => {
            dispatch(cleareCocktail())
        }
    }, [dispatch, id])


    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    const ingrsName = Object.entries(cocktail).filter(el => el[0].includes('strIngredient') && (el[1])).map(el => el[1])
    // console.log(ingrsName)
    let instructions = Object.entries(cocktail).filter(el => el[0].includes('strInstructions') && el[1])
    // console.log(instructions)

    // style={!bool ? {display: 'block'} : {display: 'none'}}
    return (
        <>
            <section className='details'>

                <div className="container">
                    <div className="row">
                        <div className='col-1'>
                            <div className="details__box">
                                <div className="details_info">
                                    <p>{cocktail?.strDrink}</p>
                                    <img src={cocktail?.strDrinkThumb} alt=""/>
                                </div>

                                <div className="cocktail__info">
                                    <p>{cocktail?.strInstructions}</p>
                                </div>
                                <div className='details__slider'>
                                    <p>ingridients</p>
                                    {!bool ?
                                        <Swiper
                                            style={{
                                                "--swiper-navigation-color": "#fff",
                                                "--swiper-pagination-color": "#000",
                                                width: '500px',
                                                height: '300px',
                                            }}
                                            loop={false}
                                            spaceBetween={50}
                                            navigation={true}
                                            thumbs={{swiper: thumbsSwiper}}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className="mySwiper2"
                                        >

                                            {ingrsName && ingrsName.map((el, index) => {
                                                return (
                                                    <SwiperSlide key={index}>
                                                        <Link to={`/ingr/${el}`} className='main-slider'>
                                                            <img
                                                                src={`https://www.thecocktaildb.com/images/ingredients/${el}.png`}/>
                                                            <p>{el}</p>
                                                        </Link>
                                                    </SwiperSlide>
                                                )
                                            })}
                                        </Swiper>
                                        : <CircularProgress />
                                    }

                                    <Swiper
                                        style={{height: '100px', width: '500px', marginTop: '20px'}}
                                        onSwiper={setThumbsSwiper}
                                        loop={true}
                                        spaceBetween={10}
                                        slidesPerView={5}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper"
                                    >
                                        {ingrsName && ingrsName.map((el, index) => {
                                            return (

                                                <SwiperSlide key={index}>
                                                    {!bool ?
                                                        <img
                                                            src={`https://www.thecocktaildb.com/images/ingredients/${el}.png`}/>
                                                        : <CircularProgress />
                                                    }
                                                </SwiperSlide>

                                            )
                                        })}


                                    </Swiper>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='accordion'>
                        {instructions && instructions.map((el, index) => {
                            return (
                                <Accordion key={index} expanded={expanded === `panel${index}`}
                                           onChange={handleChange(`panel${index}`)}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography sx={{width: '33%', flexShrink: 0}}>
                                            {el[0]}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {el[1]}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}
                    </div>
                </div>

            </section>
        </>
    )
        ;
};

export default Details;