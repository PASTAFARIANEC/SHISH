import React from "react";
import search from '../../../media/search.svg'

export const Search: React.FC = () => {
    return (
        <div className="search">
            <div className="search__icone">
                <img src={search} alt="" />
            </div>
            <input type="text" placeholder="Поиск" />
        </div>
    )
}