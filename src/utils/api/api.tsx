import axios, {
    AxiosError,
    AxiosResponse
} from 'axios'

import { API_BASE_URL, VIDEO_URL } from '../../../env'

export const apiBaseUrl: string = API_BASE_URL || ''
export const videoListUrl: string = VIDEO_URL || '/user'

// Typed methods
interface Video {
    id: number
    date_posted: string
    duration: string
    keywords: string[]
    poster: string
    show?: string
    style?: string
    title: string
}

// with default AxiosResponse<T> result
const handleResponse: (response: AxiosResponse<Video>) => AxiosResponse<Video> = (response: AxiosResponse<Video>) => {
    console.log(response.data)
    console.log(response.status)
    console.log(response.statusText)
    console.log(response.headers)
    console.log(response.config)
    return response
}

const handleError: (error: AxiosError) => string | AxiosResponse<any> = (error: AxiosError) => {
    if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
        return error.response
    }
    console.log(error.message)
    return error.message

}

/**
 * Fetch the list of videos
 */
export const fetchVideos: () => Promise<any> = async () => {
    try {
        const response = await axios.get<Video>(apiBaseUrl + videoListUrl)
        console.log(apiBaseUrl + videoListUrl)
        console.log(response)
        handleResponse(response)
        return response
    } catch (error) {
        handleError(error)
        return error
    }
}

