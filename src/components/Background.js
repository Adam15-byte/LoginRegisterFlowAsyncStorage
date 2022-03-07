import { StyleSheet, ImageBackground } from "react-native";
import React from "react";

const Background = ({ children }) => {
  const spaceWallpaper = require("/Users/adam/projects/loginRegisterFlowAsync/assets/wallpaper.jpeg");
  return (
    <ImageBackground
      source={spaceWallpaper}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      {children}
    </ImageBackground>
  );
};

export default Background;

const styles = StyleSheet.create({
  backgroundImage: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    flex: 1,
  },
});
