import React from "react"

type WrapperType = {
    children: React.ReactNode
}

export const Wrapper: React.FC<WrapperType> = ({children}) => {
    return <div className="wrapper">{children}</div>
}
