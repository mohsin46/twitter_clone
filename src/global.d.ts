/// <reference types="@sveltejs/kit" />

export interface TweetType {
    profileImage: string,
    name: string,
    username: string,
    isCertified: boolean,
    time: string,
    tweet: string,
    images: Array<string>
}

export interface ExploreTagsType {
    topic: string,
    hashtag: string,
    tweets: number
}

export interface ExploreNewsType {
    topic: string,
    title: string,
    image: string
}

export interface NavOptionsType{
    name: String,
    link: String
}