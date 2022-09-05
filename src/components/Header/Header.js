import React from 'react';
import Form from "../Form/Form";
import logo from "../../images/logo.png";
import {NavLink} from "react-router-dom";

const Header = ({main}) => {
    return (
        <header className='header'>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                {main?<Form/>:null}
                <div className="pages">
                    <NavLink to={'/'} className={({isActive}) => (isActive ? 'active' : 'inactive')}>
                        home
                    </NavLink>
                    <NavLink to={'/details/random/'} className={({isActive}) => (isActive ? 'active' : 'inactive')}>
                        random
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;