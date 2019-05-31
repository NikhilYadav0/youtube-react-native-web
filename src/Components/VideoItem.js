import React from "react";
import { View, Image, Text } from "react-native";

const VideoItem = props => {
  var item = props.item;

  function handleClickTouch() {
    props.onVideoSelect(item);
  }
  return (
    <View
      style={{ flex: 5, flexDirection: "row", marginLeft: 10, marginRight: 10 }}
      onTouchEnd={() => {
        props.onVideoSelect(item);
      }}
      onClick={handleClickTouch}
    >
      <Image
        style={{ flex: 2, paddingTop: 200, marginRight: 5, marginTop: 5 }}
        source={{ uri: item.snippet.thumbnails.medium.url }}
      />
      <Text style={{ flex: 3 }}>{item.snippet.title}</Text>
    </View>
  );
};
// react-native run-android
export default VideoItem;
