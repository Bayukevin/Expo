import * as React from "react";
import { View, Platform } from "react-native";
import { WebView } from "react-native-webview";
import { StatusBar } from 'expo-status-bar';

export default class App extends React.Component {
  render() {
    return Platform.OS === "web" ? (
      <iframe src="https://vin-qr.netlify.app/" height={'100%'} width={'100%'} />
    ) : (
      <View style={{ flex: 1 }}>
        <StatusBar Style="dark" backgroundColor={"#000000"}/>
        <WebView
          source={{ uri: "https://vin-qr.netlify.app/" }}
          style={{marginTop: 22, flex: 1}}
        />
      </View>
    )
  }
}