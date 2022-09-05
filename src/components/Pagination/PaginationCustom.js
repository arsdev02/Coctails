import React from 'react';
import {useDispatch} from "react-redux";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';

import './Pagination.css'
const PaginationCustom = ({prev, next, pagination, postPerPage, totalPost, currentPage}) => {
    const dispatch = useDispatch()


    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumber.push(i)
    }
    console.log(pageNumber)
    return (
        <div style={{display: "flex", columnGap: '5px'}}>
            <button
                onClick={()=>dispatch(prev(2))}
                className='paginate-btn'
            ><FirstPageIcon className='icon'/></button>
            <button
                disabled={currentPage === 1}
                onClick={()=>dispatch(prev(currentPage))}
                className='paginate-btn'
            ><ArrowBackIosNewIcon className='icon'/></button>
            {pageNumber.map((el, index) => {
                return (
                    <span
                        key={index}
                        className='numbers'
                        style={el === currentPage ? {
                                border: '1px solid #ffa700',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: "center",
                                height: '40px',
                                width:'40px',
                                cursor: 'pointer',
                                color: '#ffa700',
                            }
                            : {
                                textAlign: 'center',
                                border: '1px solid #ffa700',
                                borderRadius: '50%',
                                width:'40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: 'pointer',
                            }}
                        onClick={() => dispatch(pagination(el))}
                    >{el}</span>
                )
            })}
            <button
                disabled={currentPage === pageNumber.length}
                onClick={()=>dispatch(next(currentPage))}
                className='paginate-btn'
            ><ArrowForwardIosIcon className='icon'/></button>
            <button
                onClick={()=>dispatch(next(pageNumber.length-1))}
                className='paginate-btn'
            ><LastPageIcon className='icon'/></button>
        </div>
    );
};

export default PaginationCustom;