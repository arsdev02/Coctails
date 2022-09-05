import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getIngr} from "../../redux/action/dal";
import {useParams} from "react-router-dom";

const Ingr = () => {
    const {ingr} = useSelector(state => state)
    console.log(ingr)
    const dispatch = useDispatch()
    const {name} = useParams()
    useEffect(()=>{
        dispatch(getIngr(name))
    },[dispatch, name])

    return (
        <div className='ingr_box'>
            <div className="container ingr__cont">
                <p className='ingr__title'>{ingr.strIngredient}</p>
                <p className='ingr__desc'>
                    {ingr.strDescription?ingr.strDescription
                    :<a href={'https://www.google.com/'}
                        style={{textDecoration: "none",
                                color: '#fff',
                        }}
                        target={'_blank'}
                        >поищи в интернете</a>}
                </p>
            </div>
        </div>
    );
};

export default Ingr;