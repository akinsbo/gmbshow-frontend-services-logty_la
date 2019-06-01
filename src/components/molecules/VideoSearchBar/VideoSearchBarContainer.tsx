
import * as React from 'react'
import { ValueType} from 'react-select/lib/types'
import VideoSearchBarComponent from './VideoSearchBarComponent'


interface VideoSearchBarContainerState {
    selectedVideo?: ValueType<string>
}

class VideoSearchBarContainer extends React.Component<{}, VideoSearchBarContainerState>{

    constructor(){
        super({}) // empty props interface

        this.state = {
            selectedVideo: null
        }
        
    }

    handleChange= (selectedVideo: ValueType<string>): void  => {
        this.setState({ selectedVideo })
        console.log(`Option selected:`, selectedVideo)
    }

    // make request to api for multidimensional array/object to feed into videosearchBar
    render() {
        const { selectedVideo } = this.state

        return (
            <div>
                <VideoSearchBarComponent options= {['test']} onChange={this.handleChange} value={selectedVideo}/>
            </div>
        )
    }
}

export default VideoSearchBarContainer
