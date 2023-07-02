import React from 'react'

type Props = {
    children?: React.ReactNode
}
const Content: React.FC<Props> = (props) => {
    return (
        <div className="flex justify-center items-center mx-auto max-w-7xl">
            <div className="flex flex-col gap-10 mx-10 px-16 py-24 w-full border-l">
                {props.children}
            </div>
        </div>
    )
}

export default Content