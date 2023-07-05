import React from 'react'
import { HeadingType } from '../components.types.ts'

type Props = {
    type: HeadingType,
    level: 1 | 2 | 3 | 4 | 5 | 6,
    children?: React.ReactNode,
    className?: string
}
const Heading: React.FC<Props> = (props) => {
    const Tag = `h${props.level}` as keyof JSX.IntrinsicElements

    const getClasses = (type: HeadingType): string => {
        switch (type) {
        case HeadingType.TITLE:
            return 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold drop-shadow-lg'
        case HeadingType.SUB_TITLE:
            return 'text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold drop-shadow-lg'
        case HeadingType.HEADING:
            return 'text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold'
        }
    }

    return (
        <Tag className={props.className + ' ' + getClasses(props.type)}>
            {props.children}
        </Tag>
    )
}

export default Heading