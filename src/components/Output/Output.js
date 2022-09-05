import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'

import './Output.css'
import {Link} from "react-router-dom";
import PaginationCustom from "../Pagination/PaginationCustom";
import paginate from "../../redux/redusers/pagination";
import paginateState from "../../redux/redusers/pagination";
import RandomCocktail from "../RanomCocktail/RanomCocktail"

import Pagination from '@mui/material/Pagination';

const Output = () => {
    const {cocktails} = useSelector(state => state)
    // const [currentPage, setCurrentPage] = useState(1)
    // const [postPerPage] = useState(8)
    const dispatch = useDispatch()
    const {currentPage} = useSelector(state => state.paginateState)
    const {postPerPage} = useSelector(state => state.paginateState)
    // console.log(currentPage)


    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPost = cocktails.slice(indexOfFirstPost, indexOfLastPost)

    const pagination = (pageNumber) => {
        return {type: 'PAGINATE',payload: pageNumber}
    }

    const prev = (pageNumber) => {
        return {type: 'PREV', payload:pageNumber}
    }

    const next = (pageNumber) => {
        return {type: 'NEXT', payload:pageNumber}
    }

    // console.log(cocktails)
    return (
        <section className='output'>
            <div className="container">
                <div className="paginate-box">
                    <PaginationCustom
                        pagination={pagination}
                        prev={prev}
                        next={next}
                        postPerPage={postPerPage}
                        totalPost={cocktails.length}
                        currentPage={currentPage}
                    />
                </div>
                <div className="row">
                    {currentPost ? currentPost.map(el => {
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
                    })
                        : <div>такого нету</div>

                    }
                </div>
                <Pagination
                    count={Math.ceil(cocktails.length / postPerPage)}
                    color="primary"
                    showFirstButton showLastButton
                    page={currentPage}
                    onChange={(e,num)=>dispatch(pagination(num))}
                    className='mui-paginate'
                />

            </div>
        </section>
    );
};

export default Output;