import React from "react";

type Props = {
    children?: React.ReactNode
}
export default function Content(props: Props) {
    return (
        <div className="h-screen flex justify-center items-center">
            {props.children}
        </div>
    )
}