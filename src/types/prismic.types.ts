import {
    FilledImageFieldImage,
    FilledLinkToMediaField,
    KeyTextField,
    PrismicDocument,
    RichTextField, Slice, SliceZone,
    TitleField
} from '@prismicio/client'

export type PrismicHomePage = PrismicDocument<{
    title: TitleField,
    greeting: KeyTextField,
    video: FilledLinkToMediaField,
    body: SliceZone
}>

export type PrismicTimeline = Slice<'timeline', PrismicTimelinePrimary, PrismicTimelineItem>

export type PrismicTimelinePrimary = {
    heading: TitleField,
    content: RichTextField
}

export type PrismicTimelineItem = {
    company: TitleField,
    company_description: RichTextField
    begin_date: KeyTextField,
    end_date: KeyTextField,
    position: TitleField,
    position_description: RichTextField,
    link_anchor: KeyTextField
}

export type PrismicCard = Slice<'card', PrismicCardPrimary>

export type PrismicCardPrimary = {
    text: KeyTextField,
    link_anchor: KeyTextField
}

export type PrismicContentWithImage = Slice<'contentwithimage', PrismicContentWithImagePrimary>

export type PrismicContentWithImagePrimary = {
    heading: TitleField,
    content: RichTextField,
    image: FilledImageFieldImage
}