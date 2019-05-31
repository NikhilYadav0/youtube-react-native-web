import React from 'react'
import VideoItem from './VideoItem'
import {View} from 'react-native'
const VideoList=(props)=>{
    var videos= props.listItem.map((item=>{
        return <VideoItem key={item.id.videoId} item={item} onVideoSelect={props.onVideoSelect}/>
    }))
    return <View>{videos}</View>
}

export default VideoList;
// api call kaha kri h