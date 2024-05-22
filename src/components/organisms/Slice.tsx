import React from 'react';
import { SliceZone } from '@prismicio/client';
import Timeline from './Timeline.tsx';
import {
    PrismicCard,
    PrismicContentWithImage,
    PrismicTimeline,
} from '../../types/prismic.types.ts';
import Card from './Card.tsx';
import ContentWithImage from './ContentWithImage.tsx';

type Props = {
    sliceZone: SliceZone;
};

const Slice: React.FC<Props> = (props) => {
    return (
        <>
            {props.sliceZone.map((slice) => {
                switch (slice.slice_type) {
                    case 'timeline':
                        return (
                            <Timeline
                                prismicTimeline={slice as PrismicTimeline}
                                key={slice.id}
                            />
                        );
                    case 'card':
                        return (
                            <Card
                                prismicCard={slice as PrismicCard}
                                key={slice.id}
                            />
                        );
                    case 'contentwithimage':
                        return (
                            <ContentWithImage
                                prismicContentWithImage={
                                    slice as PrismicContentWithImage
                                }
                                key={slice.id}
                            />
                        );
                }
            })}
        </>
    );
};

export default Slice;
