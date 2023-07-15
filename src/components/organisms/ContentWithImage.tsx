import React from 'react'
import { PrismicContentWithImage } from '../../types/prismic.types.ts'
import Heading from '../atoms/Heading.tsx'
import { HeadingType } from '../../types/components.types.ts'
import BodyText from '../atoms/BodyText.tsx'
import SafeArea from '../molecules/SafeArea.tsx'
import useIntersectionObserver from '../hooks/useIntersectionObserver.tsx'

type Props = {
    prismicContentWithImage: PrismicContentWithImage
}

const ContentWithImage: React.FC<Props> = ({ prismicContentWithImage }) => {
    const [contentRef, contentIntersecting] = useIntersectionObserver()
    const [imageRef, imageIntersecting] = useIntersectionObserver()

    return (
        <SafeArea className={`flex gap-10 ${prismicContentWithImage.primary.content_position == 'left' ? 'flex-col md:flex-row' : 'flex-col-reverse md:flex-row-reverse'}`}>
            <div className={`flex-1 transition-all ${!contentIntersecting && '-translate-x-10 opacity-0'}`} ref={contentRef}>
                <Heading level={2} type={HeadingType.HEADING} className="mb-10">{prismicContentWithImage.primary.heading[0]?.text}</Heading>
                <BodyText className="leading-8" field={prismicContentWithImage.primary.content}/>
            </div>
            <div className={`flex-1 transition-all ${!imageIntersecting && 'translate-x-10 opacity-0'}`} ref={imageRef}>
                <img src={prismicContentWithImage.primary.image.url} className="h-full w-full object-cover" />
            </div>
        </SafeArea>
    )
}

export default ContentWithImage