import { useTranslation } from 'react-i18next'
import React from 'react'
import Heading from '../atoms/Heading.tsx'
import { HeadingType } from '../../types/components.types.ts'
import { PrismicHomePage } from '../../types/prismic.types.ts'

type Props = {
    prismicHomePage: PrismicHomePage
}

const Header: React.FC<Props> = ({ prismicHomePage }) => {
    const { t } = useTranslation()

    return (
        <header className="relative flex flex-col justify-center items-center bg-white h-screen overflow-hidden">
            <section className="relative p-10 md:p-40 z-10 text-white">
                <Heading level={2} type={HeadingType.SUB_TITLE} className="mb-5">{prismicHomePage.data.greeting}</Heading>
                <Heading level={1} type={HeadingType.TITLE} className="xl:mr-20">{prismicHomePage.data.title[0]?.text}</Heading>
            </section>
            <section className="absolute bottom-0 flex justify-between w-full p-10 z-10">
                <span className="text-white text-sm tracking-wider opacity-50">{t('all-rights-reserved', { name: 'Stefan So' })}</span>
                <span className="text-white text-right text-sm tracking-wider opacity-50">2023 - 2024</span>
            </section>
            <video className="absolute h-full w-full object-cover object-center" src={prismicHomePage.data.video.url} autoPlay muted loop playsinline />
        </header>
    )
}

export default Header