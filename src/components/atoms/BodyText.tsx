import { RichTextField } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'
import React from 'react'

type Props = {
    body?: string,
    field?: RichTextField,
    className?: string
}

const BodyText: React.FC<Props> = (props) => {
    return (
        <div className="flex flex-col gap-5 text-gray-300">
            {props.body?.split('\n').map(text => (
                <p className={props.className} key={text}>{text}</p>
            ))}
            <PrismicRichText field={props.field} components={{
                paragraph: ({ children }) => <p className={props.className}>{children}</p>
            }} />
        </div>
    )
}

export default BodyText