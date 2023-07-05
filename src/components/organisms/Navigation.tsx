import LanguageSwitcher from '../molecules/LanguageSwitcher.tsx'
import React, { createRef, RefObject, useEffect, useState } from 'react'

type Props = {
    threshold: number
}
const Navigation: React.FC<Props> = (props) => {
    const navigationRef: RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
    const [passedThreshold, setPassedThreshold] = useState(props.threshold == 0)

    useEffect(() => {
        const checkThreshold = (event: Event): void => {
            const target = event.currentTarget as Window
            const delta = props.threshold - target.scrollY - (navigationRef.current?.clientHeight || 0)

            delta > 0 ?
                (passedThreshold && setPassedThreshold(false)) :
                (!passedThreshold && setPassedThreshold(true))
        }
        
        window.addEventListener('scroll', checkThreshold)
        return () => window.removeEventListener('scroll', checkThreshold)
    }, [navigationRef, passedThreshold, props.threshold])

    return (
        <nav className={`fixed flex justify-between w-full p-10 z-50 border-b transition-all ${passedThreshold ? 'bg-gray-50 text-black' : 'text-white border-transparent'}`} ref={navigationRef}>
            <span className="md:text-lg font-bold tracking-wider">Hibiki</span>
            <LanguageSwitcher theme={passedThreshold ? 'light' : 'dark'} />
        </nav>
    )
}

export default Navigation