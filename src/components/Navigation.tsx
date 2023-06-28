import LanguageSwitcher from "./LanguageSwitcher.tsx";
import {createRef, RefObject, useEffect, useState} from "react";

type Props = {
    threshold: number
}
export default function Navigation(props: Props) {
    const navigationRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>();
    const [passedThreshold, setPassedThreshold] = useState(props.threshold == 0);

    const checkThreshold = (event: Event) => {
        const target = event.currentTarget as Window;
        const delta = props.threshold - target.scrollY - (navigationRef.current?.clientHeight || 0);

        delta > 0 ?
            (passedThreshold && setPassedThreshold(false)) :
            (!passedThreshold && setPassedThreshold(true))
    }

    useEffect(() => {
        window.addEventListener("scroll", checkThreshold)
        return () => window.removeEventListener("scroll", checkThreshold)
    }, [checkThreshold])

    return (
        <nav className={`fixed flex justify-between w-full p-10 z-50 border-b transition-all ${passedThreshold ? "bg-gray-50 text-black" : "text-white border-transparent"}`} ref={navigationRef}>
            <span className="text-lg font-bold tracking-wider">Hibiki</span>
            {/* TODO: Implement localization*/}
            <LanguageSwitcher theme={passedThreshold ? "light" : "dark"} />
        </nav>
    )
}