import Navigation from "../components/Navigation.tsx";
import Header from "../components/Header.tsx";
import Content from "../components/Content.tsx";
import Footer from "../components/Footer.tsx";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

export default function Home() {
    const { t } = useTranslation()
    const [clientHeight, setClientHeight] = useState(document.documentElement.clientHeight)
    const updateClientHeight = () => {
        setClientHeight(document.documentElement.clientHeight)
    }

    useEffect(() => {
        window.addEventListener("resize", updateClientHeight)
        return () => window.removeEventListener("resize", updateClientHeight)
    })

    return (
        <>
            <Navigation threshold={clientHeight} />
            <Header />
            <Content>
                <h2 className="text-4xl text-center font-bold tracking-wide mb-10">{t("coming-soon")}</h2>
            </Content>
            <Footer />
        </>
    );
}