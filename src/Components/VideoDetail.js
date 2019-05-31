import React from "react";
import { Text, View, StyleSheet,Platform } from "react-native";
import { WebView } from "react-native";


const VideoDetail = ({ item }) => {
  const src = `https://www.youtube.com/embed/${item.id.videoId}`;
  console.log(src);
  const myUri = encodeURI(src);
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginBottom: 20
      }}
    >
      {(Platform.OS==='web')?(<iframe title="Video Player" src={src}/>):(<WebView source={{ uri: myUri }} style={styles.playerStyle} />)}
      <Text>{item.snippet.title}</Text>
      <Text>{item.snippet.description}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  playerStyle: {
    marginTop: 20,
    height: 300,
    width: 1200
  }
});
export default VideoDetail;
