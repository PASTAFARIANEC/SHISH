import React from "react";
import country from '../../../media/rf.png'
import cart from '../../../media/cart.png'


export const CountryButton: React.FC = () => {
    return (
        <div className="country">
            <span>Россия</span>
            <img src={country} alt="" />
        </div>
    )
}


export const AccountButton: React.FC = () => <div className="account">Личный кабинет</div>
export const CartButton: React.FC = () => <div className="cart"><img src={cart} alt="" /></div>


export const StarButton: React.FC = () => {
    return (
        <div className="star">
            <svg viewBox="0 0 28 30" id="icon_star" xmlns="http://www.w3.org/2000/svg" fill="none" 
                width="28" height="30">
                <g fill="none" fill-rule="evenodd">
                    <path fill-rule="nonzero" d="M0 0h28v27H0z"></path>
                    <path d="M14 2.679l2.952 8.425 8.925.204-7.101 5.41 2.564 
                        8.551L14 20.19l-7.34 5.08 2.564-8.55-7.1-5.411 8.924-.204L14 2.679z" 
                        stroke="currentColor">
                    </path>`
                </g>
            </svg>
        </div>
    )
}


