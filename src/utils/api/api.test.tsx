import axios, { AxiosStatic } from 'axios'
import { apiBaseUrl, fetchVideos, videoListUrl } from './api'

interface AxiosMock extends AxiosStatic {
  mockResolvedValue: (videos: {}) => void
  mockRejectedValue: (videos: {}) => void
}

jest.mock("axios")
const mockAxios = axios as AxiosMock

// console.log(mockAxios)
describe('Gets data', () => {
  it('should fetch data on get', async () => {

    // act
    const response = await fetchVideos()

    // assert
    console.log(response)

    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith(apiBaseUrl + videoListUrl)
    console.log(apiBaseUrl + videoListUrl)
    expect(response.data).toEqual([
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
      }])
    expect(response.status).toEqual(200)
  })
})