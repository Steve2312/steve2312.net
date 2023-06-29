import React from 'react'

type Props = {
    children?: React.ReactNode
}
const Content: React.FC<Props> = (props) => {
    return (
        <div className="h-screen flex justify-center items-center">
            {props.children}
        </div>
    )
}

export default Content