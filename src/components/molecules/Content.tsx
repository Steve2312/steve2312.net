import React from 'react'

type Props = {
    children?: React.ReactNode
}
const Content: React.FC<Props> = (props) => {
    return (
        <div className="flex justify-center items-center mx-auto max-w-7xl">
            <div className="flex flex-col gap-10 md:mx-10 mx-2.5 md:px-16 px-9 py-24 w-full border-l">
                {props.children}
            </div>
        </div>
    )
}

export default Content