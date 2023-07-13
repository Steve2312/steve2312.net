import { RxDot, RxDotFilled } from 'react-icons/rx'
import Heading from '../atoms/Heading.tsx'
import { HeadingType } from '../../types/components.types.ts'
import BodyText from '../atoms/BodyText.tsx'
import Link from '../atoms/Link.tsx'
import React from 'react'
import { PrismicTimelineItem } from '../../types/prismic.types.ts'

type Props = {
    prismicTimelineItem: PrismicTimelineItem
    isFirst?: boolean,
    isLast?: boolean
}

const TimelineItem: React.FC<Props> = ({ prismicTimelineItem, isFirst, isLast }) => {
    return (
        <div className="flex justify-center gap-10">
            <div className="flex flex-col items-center">
                <div className={`flex-1 bg-white ${isFirst ? 'w-0' : 'w-0.5'}`}></div>
                { isFirst ?
                    <RxDotFilled className="text-5xl" /> :
                    <RxDot className="text-5xl" />
                }
                <div className={`flex-1 bg-white ${isLast ? 'w-0' : 'w-0.5'}`}></div>
            </div>
            <div className='flex-1 border border-neutral-800 p-5 rounded-lg bg-neutral-950 my-5'>
                <span className="block text-neutral-600 mb-4 text-sm">{prismicTimelineItem.begin_date} - {prismicTimelineItem.end_date}</span>
                <Heading level={3} type={HeadingType.CARD_HEADING} className="mb-2">{prismicTimelineItem.company[0]?.text}</Heading>
                <BodyText className="mb-4" field={prismicTimelineItem.company_description} />
                <Heading level={4} type={HeadingType.CARD_SUB_HEADING} className="mb-2">{prismicTimelineItem.position[0]?.text}</Heading>
                <BodyText className="mb-4" field={prismicTimelineItem.position_description} />
                <Link>{prismicTimelineItem.link_anchor}</Link>
            </div>
        </div>
    )
}

export default TimelineItem