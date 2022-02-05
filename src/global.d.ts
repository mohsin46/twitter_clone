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