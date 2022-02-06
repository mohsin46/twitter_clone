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

export interface ExploreTags {
    topic: string,
    hashtag: string,
    tweets: number
}

export interface NavOptions{
    name: String,
    link: String
}