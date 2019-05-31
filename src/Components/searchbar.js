import React, { Component } from "react";
import { TextInput, Platform, View } from "react-native";
// import { Input } from "antd";
import { SearchBar } from "react-native-elements";

class Search extends Component {
  state = { term: "" };
  onInputChange = inputstr => {
    this.setState({ term: inputstr }); //ruk waise chal to jaega hi shyd cause sir said maine elements use krre the aur jyada jugaad ni lagaye the
  }; //beta7 k h be is tutorial mein isne ye version use kra hg=
  onFormSubmit = term => {
    //rukk
    console.log("form", term); ///saaaade tere gande kaam
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    console.log(this.state);
    return (
      // ye main theeek krne ka try krta hu tu bss online raha toofani padh :D
      <SearchBar
        placeholder="input search text"
        onChangeText={this.onInputChange}
        value={this.state.term}
        onBlur={this.onFormSubmit} // on Blur ki to dikkat ni??
        style={{ width: 100, height: 50 }}
      />
    );
  }
}
// lkrru run? arey disconnect kyo kra.  abyb mstake ab fir time lagega 1 min

export default Search;
