import Navigation from '../components/organisms/Navigation.tsx'
import Header from '../components/organisms/Header.tsx'
import Footer from '../components/organisms/Footer.tsx'
import React from 'react'
import { useTranslation } from 'react-i18next'
import usePrismicHomePage from '../components/hooks/usePrismicHomePage.tsx'
import { PageLoader } from '../components/organisms/PageLoader.tsx'
import Slice from '../components/organisms/Slice.tsx'

const Home: React.FC = () => {
    const { i18n } = useTranslation()
    const prismicHomePage = usePrismicHomePage(i18n.language)

    if (prismicHomePage) {
        return (
            <>
                <PageLoader loading={!prismicHomePage} />
                { prismicHomePage && (
                    <>
                        <Navigation threshold={100} />
                        <Header prismicHomePage={prismicHomePage} />
                        <Slice sliceZone={prismicHomePage.data.body} />
                        <Footer />
                    </>
                )}
            </>
        )
    }
}

export default Home