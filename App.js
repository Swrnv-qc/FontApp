/* import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */


/* import { Text, View } from "react-native";
import React from "react";
import { FONTS } from "./assets/constants";

export default App =()=> {
  return (
    <View style={FONTS.container}>
      <Text style={FONTS.caveat}>This text uses Caveat font</Text>
      <Text style={FONTS.honk}>This text uses Honk font</Text>
      <Text>
        This text uses Raleway font assuming Raleway is imported and styled.
      </Text>
    </View>
  );
} */
import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        "Honk-Regular": require("./assets/font/Honk.ttf"),
        "Caveat-Regular": require("./assets/font/Caveat.ttf"),
      });
      setFontLoaded(true);
    };

    loadFont();
  }, []);

  if (!fontLoaded) {
    return null; // or a loading indicator
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontFamily: "Honk-Regular", fontSize: 25 }}>
        This is a text with Honk font
      </Text>
      <Text style={{ fontFamily: "Caveat-Regular", fontSize: 24 }}>
        This is a text with Caveat font
      </Text>
    </View>
  );
}
