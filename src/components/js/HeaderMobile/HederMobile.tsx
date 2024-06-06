import React from "react";
import BurgerButton from "./BurgerButton";
import search from '../../../media/search.svg'
import { Logo } from "../Header/Logo";
import { StarButton, CartButton } from "../Header/Buttons";
import rf from '../../../media/rf.png'

export const HeaderMobile:React.FC = () => {
    return (
        <header>
            <div className="left-block">
                <BurgerButton />
                <div className="search">
                    <img src={search} alt="" />
                </div>
            </div>
            <div className="logo">
                <Logo />
            </div>
            <div className="buttons">
                <img src={rf} alt="" style={{width:'20px', marginRight:'10px', transform:' translate(0px, -3px)'}}/>
                <StarButton />
                <CartButton />
            </div>
        </header>
    )
}