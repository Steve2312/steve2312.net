import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home.tsx";
import {useTranslation} from "react-i18next";
import NotFound from "./pages/NotFound.tsx";

export default function App() {
    const { i18n } = useTranslation();
    console.log(i18n.languages)
    return (
        <BrowserRouter>
            <Routes>
                {/* Dynamically create route for every language */}
                {i18n.languages.map(language => (
                    <Route key={language} path={"/" + language}>
                        <Route index element={<Home/>}/>
                        <Route path={"/" + language + "/test"} element={<h1 className="p-40 font-bold text-5xl">Test</h1>}></Route>
                    </Route>
                ))}

                {/* Redirect "/" to "/<fallbackLng>" */}
                <Route path={"/"} element={
                   <Navigate to={"/" + i18n.language} replace/>
                }/>

                {/* 404 */}
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}