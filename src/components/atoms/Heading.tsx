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
            return 'text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold drop-shadow-lg'
        case HeadingType.SUB_TITLE:
            return 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold drop-shadow-lg'
        case HeadingType.HEADING:
            return 'text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold'
        }
    }

    return (
        <Tag className={props.className + ' ' + getClasses(props.type)}>
            {props.children}
        </Tag>
    )
}

export default Heading