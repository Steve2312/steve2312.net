import LanguageSwitcher from '../molecules/LanguageSwitcher.tsx';
import React, { createRef, RefObject, useEffect, useState } from 'react';

type Props = {
    threshold: number;
};
const Navigation: React.FC<Props> = (props) => {
    const navigationRef: RefObject<HTMLDivElement> =
        createRef<HTMLDivElement>();
    const [passedThreshold, setPassedThreshold] = useState(
        props.threshold == 0
    );

    useEffect(() => {
        const checkThreshold = (event: Event): void => {
            const target = event.currentTarget as Window;
            const delta =
                props.threshold -
                target.scrollY -
                (navigationRef.current?.clientHeight || 0);

            delta > 0
                ? passedThreshold && setPassedThreshold(false)
                : !passedThreshold && setPassedThreshold(true);
        };

        window.addEventListener('scroll', checkThreshold);
        return () => window.removeEventListener('scroll', checkThreshold);
    }, [navigationRef, passedThreshold, props.threshold]);

    return (
        <nav
            className={`fixed flex justify-between w-full p-10 z-50 transition-all ${
                passedThreshold && 'bg-gradient-to-b from-black to-transparent'
            }`}
            ref={navigationRef}
        >
            <span className="md:text-lg font-bold tracking-wider">Hibiki</span>
            <LanguageSwitcher />
        </nav>
    );
};

export default Navigation;
