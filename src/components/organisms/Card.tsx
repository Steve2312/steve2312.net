import React from 'react';
import Link from '../atoms/Link.tsx';
import SafeArea from '../molecules/SafeArea.tsx';
import { PrismicCard } from '../../types/prismic.types.ts';

type Props = {
    prismicCard: PrismicCard;
};

const Card: React.FC<Props> = (props) => {
    return (
        <section className="bg-blue-500">
            <SafeArea className="flex flex-col gap-20 md:py-40 py-20 text-black">
                <hr className="border-black w-5 border-2 z-10" />
                <p className="font-semibold text-2xl tracking-wide z-10">
                    {props.prismicCard.primary.text}
                </p>
                <Link className="font-semibold">
                    {props.prismicCard.primary.link_anchor}
                </Link>
            </SafeArea>
        </section>
    );
};

export default Card;
