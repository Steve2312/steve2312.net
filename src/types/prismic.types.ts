import { FilledLinkToMediaField, KeyTextField, PrismicDocument, TitleField } from '@prismicio/client'

export type PrismicHomePage = PrismicDocument<{
    title: TitleField,
    greeting: KeyTextField,
    video: FilledLinkToMediaField
}>