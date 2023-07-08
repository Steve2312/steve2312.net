import React from 'react'
import { PrismicContentWithImage } from '../../types/prismic.types.ts'
import Heading from '../atoms/Heading.tsx'
import { HeadingType } from '../../types/components.types.ts'
import BodyText from '../atoms/BodyText.tsx'
import SafeArea from '../molecules/SafeArea.tsx'

type Props = {
    prismicContentWithImage: PrismicContentWithImage
}

const ContentWithImage: React.FC<Props> = (props) => {
    return (
        <SafeArea className="flex gap-10">
            <div className="flex-1">
                <Heading level={2} type={HeadingType.HEADING} className="mb-10">{props.prismicContentWithImage.primary.heading[0]?.text}</Heading>
                <BodyText className="leading-8" field={props.prismicContentWithImage.primary.content}/>
            </div>
            <div className="flex-1">
                <img src={props.prismicContentWithImage.primary.image.url} className="h-full w-full object-cover" />
            </div>
        </SafeArea>
    )
}

export default ContentWithImage