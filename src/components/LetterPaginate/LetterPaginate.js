import React from 'react';
import {Link} from "react-router-dom";
import {getCoctailByLetter} from "../../redux/action/dal";
import {useDispatch} from "react-redux";

const LetterPaginate = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',  'V', 'W', 'Y', 'Z',]

    const dispatch = useDispatch()
    return (

        <div className='container'>
            <div className="row" style={{justifyContent:'center', padding:'10px 0px 50px 0px',}}>
                <div className="letter_box">
                    {letters.map(el=>{
                        return (
                            <Link
                                to={`/letter/${el}`}
                                key={el}
                                onClick={()=>dispatch(getCoctailByLetter(el))}

                            >
                                {el}{el !== 'Z' ? <span style={{fontWeight:'600', color:'#fff'}}> / </span> : null}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default LetterPaginate;