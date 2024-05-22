import React from 'react';
import Heading from '../atoms/Heading.tsx';
import { HeadingType } from '../../types/components.types.ts';
import { PrismicHomePage } from '../../types/prismic.types.ts';
import SafeArea from '../molecules/SafeArea.tsx';

type Props = {
    prismicHomePage: PrismicHomePage;
};

const Header: React.FC<Props> = ({ prismicHomePage }) => {
    return (
        <header className="relative flex flex-col justify-center items-center bg-black h-screen overflow-hidden">
            <SafeArea className="text-white z-20">
                <Heading
                    level={2}
                    type={HeadingType.SUB_TITLE}
                    className="mb-5"
                >
                    {prismicHomePage.data.greeting}
                </Heading>
                <Heading
                    level={1}
                    type={HeadingType.TITLE}
                    className="xl:mr-20"
                >
                    {prismicHomePage.data.title[0]?.text}
                </Heading>
            </SafeArea>
            <section className="absolute h-full w-full bg-gradient-to-b from-transparent to-black z-10"></section>
            <video
                className="absolute h-full w-full object-cover object-center"
                src={prismicHomePage.data.video.url}
                autoPlay
                muted
                loop
                playsInline
            />
        </header>
    );
};

export default Header;
