import { API_BASE_URL, VIDEO_URL } from '../env'

export const apiBaseUrl: string = API_BASE_URL || ''

export default {
    get: jest.fn((url: string) => {
        switch (url) {
            case (apiBaseUrl + VIDEO_URL):
                return Promise.resolve({
                    // resolve to an array of objects
                    data: [
                        {
                            id: 1,
                            // tslint:disable-next-line:object-literal-sort-keys
                            date_posted: '10-02-2019',
                            duration: '1m 10s',
                            keywords: ['marriage', 'love', 'security', 'truth'],
                            poster: 's3://poster image',
                            show: 'marriage & love',
                            style: 'default',
                            title: 'John Smith'
                        }
                    ],
                    status: 200
                })
            default:
                // console.log(" apiBaseUrl + VIDEO_URL = " + apiBaseUrl + VIDEO_URL)
                return Promise.resolve({
                    data: 'no response'
                })
        }
    })
}