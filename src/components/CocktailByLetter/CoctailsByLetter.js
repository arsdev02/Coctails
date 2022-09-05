import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {getCoctailByLetter} from "../../redux/action/dal";

const CoctailsByLetter = () => {
    const {letterState} = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(letterState)
    const params = useParams()
    console.log(params.letter)
    useEffect(() => {
        dispatch(getCoctailByLetter(params.letter))
    }, [])
    return (
        <div>
            <div className="container">
                <div className="row">
                    {letterState && letterState.map(el => {
                        return (
                            <div key={el.idDrink} className='col-4'>
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
        </div>
    );
};

export default CoctailsByLetter;