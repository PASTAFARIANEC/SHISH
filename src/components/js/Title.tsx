import React from "react";

type TitleType = {title: string, color?: string}

export const Title: React.FC<TitleType> = ({title, color = 'orangered'}) => {
    return (
        <div className="title" style={{color: color}}>
            <span>{title}</span>
        </div>
    )
}