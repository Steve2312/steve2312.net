import Navigation from "../components/Navigation.tsx";
import Header from "../components/Header.tsx";
import Content from "../components/Content.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {

    return (
        <>
            <Navigation />
            <Header />
            <Content>
                <h2 className="text-4xl text-center font-bold tracking-wide mb-10">Coming soon...</h2>
            </Content>
            <Footer />
        </>
    );
}