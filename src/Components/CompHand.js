import React from "react";
import { ScrollView, View } from "react-native";
import SearchBar from "./searchbar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { baseURL, key } from "../api/youtube";
import Axios from "axios";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onTermSubmit = term => {
    console.log("comphand", term);
    Axios.get(baseURL + "/search", {
      params: {
        q: term,
        part: "snippet",
        key
      }
    })
      .then(response => {
        this.setState({ videos: response.data.items, selectedVideo: null });
      })
      .catch(err => console.log(err));
  };
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <ScrollView>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <this.choose />
      </ScrollView>
    );
  }
  choose = () => {
    if (this.state.selectedVideo != null) {
      return (
        <View>
          <VideoDetail item={this.state.selectedVideo} />
          <VideoList
            listItem={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
        </View>
      );
    } else {
      return (
        <View>
          <VideoList
            listItem={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
        </View>
      );
    }
  };
}

export default App;

// {(this.state.selectedVideo!=null)?<VideoDetail item={this.state.selectedVideo}/>:null}
// ye h dikkat. teri term update ni hori
