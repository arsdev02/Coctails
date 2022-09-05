import React from 'react';

import leftImg from '../../images/cocktail_left.png'
import rigthImg from '../../images/cocktail_right.png'
import patreonImg from '../../images/patreon_logo.png'

const SubMain = () => {
    return (
        <section className='SubMain'>
            <div className="container submain-cont">
                <div className="left-img">
                    <img src={leftImg} alt=""/>
                </div>
                <div className="title">
                    <h1>Welcome to TheCocktailDB</h1>
                    <p>An open, crowd-sourced database of drinks and cocktails from around the world.
                        We also offer a free JSON API for anyone wanting to use it.
                        If you like the site, please consider supporting us on Patreon by clicking the link below...
                    </p>
                    <div className="patreon-img">
                        <img src={patreonImg} alt=""/>
                    </div>
                    <p>Click to Support: Currently 750 supporters</p>
                </div>
                <div className="rigth-img">
                    <img src={rigthImg} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default SubMain;