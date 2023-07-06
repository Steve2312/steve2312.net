import { PrismicHomePage } from '../types/prismic.types.ts'
import { client } from '../config/prismic.ts'

export const getPrismicLocale = (language: string): string => {
    switch (language) {
    case 'en':
        return 'en-us'
    case 'zh':
        return 'zh-cn'
    case 'jp':
        return 'ja-jp'
    case 'kr':
        return 'ko-kr'
    default:
        return 'en-us'
    }
}

export const getPrismicHomePage = (language: string): Promise<PrismicHomePage> => {
    return client.getSingle<PrismicHomePage>('home', {
        lang: getPrismicLocale(language)
    })
}