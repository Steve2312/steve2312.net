import Navigation from '../components/organisms/Navigation.tsx'
import Header from '../components/organisms/Header.tsx'
import Content from '../components/molecules/Content.tsx'
import Footer from '../components/organisms/Footer.tsx'
import React, { useEffect, useState } from 'react'
import Heading from '../components/atoms/Heading.tsx'
import { HeadingType } from '../components/components.types.ts'
import ContentBody from '../components/molecules/ContentBody.tsx'
import { useTranslation } from 'react-i18next'
import { calculateReadingTimeInMinutes } from '../utils/ContentBodyUtils.ts'

const Home: React.FC = () => {
    const { t, i18n } = useTranslation()
    const [clientHeight, setClientHeight] = useState(document.documentElement.clientHeight)

    useEffect(() => {
        const updateClientHeight = (): void => {
            setClientHeight(document.documentElement.clientHeight)
        }

        window.addEventListener('resize', updateClientHeight)
        return () => window.removeEventListener('resize', updateClientHeight)
    }, [])

    return (
        <>
            <Navigation threshold={clientHeight} />
            <Header />
            <Content>
                <span className="font-medium tracking-wider">
                    02/07/2023 • {t('reading-time', { minutes: calculateReadingTimeInMinutes(t('about-me-content-body'), i18n.language) })}
                </span>
                <Heading level={3} type={HeadingType.HEADING}>{t('about-me')}</Heading>
                <ContentBody body={t('about-me-content-body')} />
            </Content>
            <Content>
                <span className="font-medium tracking-wider">
                    02/07/2023 • {t('reading-time', { minutes: calculateReadingTimeInMinutes(t('coming-soon'), i18n.language) })}
                </span>
                <Heading level={3} type={HeadingType.HEADING}>{t('social-media')}</Heading>
                <ContentBody body={t('coming-soon')} />
            </Content>
            <Footer />
        </>
    )
}

export default Home