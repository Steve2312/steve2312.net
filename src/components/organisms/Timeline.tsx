import { PrismicTimeline } from '../../types/prismic.types.ts'
import React from 'react'
import Heading from '../atoms/Heading.tsx'
import { HeadingType } from '../../types/components.types.ts'
import BodyText from '../atoms/BodyText.tsx'
import SafeArea from '../molecules/SafeArea.tsx'
import TimelineItem from '../molecules/TimelineItem.tsx'
import useIntersectionObserver from '../hooks/useIntersectionObserver.tsx'

type Props = {
    prismicTimeline: PrismicTimeline
}

const Timeline: React.FC<Props> = ({ prismicTimeline }) => {
    const [contentRef, contentIntersecting] = useIntersectionObserver()
    const [timelineRef, timelineIntersecting] = useIntersectionObserver()

    return (
        <SafeArea className="flex gap-10 flex-col md:flex-row">
            <div className={`flex-[2] md:sticky md:top-24 md:h-full transition-all ${!contentIntersecting && '-translate-x-10 opacity-0'}`} ref={contentRef}>
                <Heading level={2} type={HeadingType.HEADING} className="mb-10">{prismicTimeline.primary.heading[0]?.text}</Heading>
                <BodyText className="leading-8" field={prismicTimeline.primary.content}/>
            </div>
            <div className={`flex-[3] transition-all ${!timelineIntersecting && 'translate-x-10 opacity-0'}`} ref={timelineRef}>
                {prismicTimeline.items.map((prismicTimelineItem, index) => (
                    <TimelineItem
                        key={index}
                        prismicTimelineItem={prismicTimelineItem}
                        isFirst={index == 0}
                        isLast={index == prismicTimeline.items.length - 1}
                    />
                ))}
            </div>
        </SafeArea>
    )
}

export default Timeline