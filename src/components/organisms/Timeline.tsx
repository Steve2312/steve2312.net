import { PrismicTimeline, PrismicTimelineItem } from '../../types/prismic.types.ts'
import React from 'react'
import Heading from '../atoms/Heading.tsx'
import { HeadingType } from '../../types/components.types.ts'
import BodyText from '../atoms/BodyText.tsx'
import { RxDot, RxDotFilled } from 'react-icons/rx'
import Link from '../atoms/Link.tsx'
import SafeArea from '../molecules/SafeArea.tsx'

type Props = {
    prismicTimeline: PrismicTimeline
}
const Timeline: React.FC<Props> = (props) => {
    const elements = props.prismicTimeline.items.map((item: PrismicTimelineItem, index: number) => {
        return (
            <div className="flex justify-center" key={index}>
                <div className="flex flex-col items-center">
                    <div className={`flex-1 bg-white ${index == 0 ? 'w-0' : 'w-0.5'}`}></div>
                    { index == 0 ?
                        <RxDotFilled className="text-5xl" /> :
                        <RxDot className="text-5xl" />
                    }
                    <div className={`flex-1 bg-white ${index == props.prismicTimeline.items.length - 1 ? 'w-0' : 'w-0.5'}`}></div>
                </div>
                <div className='flex-1 border border-neutral-800 p-5 rounded-lg bg-neutral-950 my-5'>
                    <span className="block text-neutral-600 mb-4 text-sm">{item.begin_date} - {item.end_date}</span>
                    <Heading level={3} type={HeadingType.CARD_HEADING} className="mb-2">{item.company[0]?.text}</Heading>
                    <BodyText className="mb-4" field={item.company_description} />
                    <Heading level={4} type={HeadingType.CARD_SUB_HEADING} className="mb-2">{item.position[0]?.text}</Heading>
                    <BodyText className="mb-4" field={item.position_description} />
                    <Link>{item.link_anchor}</Link>
                </div>
            </div>
        )
    })
    return (
        <SafeArea className="flex gap-10 flex-col md:flex-row">
            <div className="flex-[2] md:sticky md:top-24 md:h-full">
                <Heading level={2} type={HeadingType.HEADING} className="mb-10">{props.prismicTimeline.primary.heading[0]?.text}</Heading>
                <BodyText className="leading-8" field={props.prismicTimeline.primary.content}/>
            </div>
            <div className="flex-[3]">
                {elements}
            </div>
        </SafeArea>
    )
}

export default Timeline