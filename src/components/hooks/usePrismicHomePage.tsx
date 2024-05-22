import { useEffect, useState } from 'react';
import { PrismicHomePage } from '../../types/prismic.types.ts';
import { getPrismicHomePage } from '../../utils/prismic.utils.ts';
const usePrismicHomePage = (language: string): PrismicHomePage | undefined => {
    const [prismicHomePage, setPrismicHomePage] = useState<PrismicHomePage>();

    useEffect(() => {
        getPrismicHomePage(language).then(setPrismicHomePage);
    }, [language]);

    return prismicHomePage;
};

export default usePrismicHomePage;
