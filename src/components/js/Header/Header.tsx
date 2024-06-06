import React, { useState } from "react";
import { headerCategories } from "../../../api/api";
import { GenderLink } from "./GenderLink";
import '../../css/Header.css'
import { Search } from "./Search";
import { Logo } from "./Logo";
import { CountryButton, AccountButton, StarButton, CartButton } from "./Buttons";


type GenderType = [boolean, boolean, boolean]


export const Header: React.FC = () => {

    const [gender, setGender] = useState<GenderType>([true, false, false])

    return (
        <header>
            <div className="header__content">
                <div className="content__main">
                    <div className="heager__links">
                        <GenderLink gender={gender} title="Мужское" setGender={setGender} count={0} />
                        <GenderLink gender={gender} title="Женское" setGender={setGender} count={1} />
                        <GenderLink gender={gender} title="Детское" setGender={setGender} count={2} />
                    </div>
                    <Logo />
                    <div className="header__blocks">
                        <div className="header__blocks-body">
                            <div className="header__buttons">
                                <div className="header__buttons-content">
                                    <CountryButton />
                                    <AccountButton />
                                    <StarButton />
                                    <CartButton />
                                </div>
                            </div>
                            <Search />
                        </div>
                    </div>
                </div>
                <div className="header__categories">
                    {headerCategories.map(item =>(
                        <div className="header__category">{item.name}</div>
                    ))}
                </div>
            </div>
        </header>
    )
}