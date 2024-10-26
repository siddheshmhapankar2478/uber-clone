import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import ButtonComponent from "../components/ButtonComponent";

const heroImage = require("./../assets/HeroSection/hero-img.png");
const { height } = Dimensions.get("screen");

const LandingScreen = () => {
  const handlePress = () => {
    console.log("log in");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#2e3a56" />
      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#1c293f", "#14283f", "#2e3a56", "#232a41", "#0c273f"]}
          style={styles.gradientBox}
        >
          <Image source={heroImage} style={styles.carsHeroSectionImg} />
          <View style={styles.content}>
            <Text style={styles.headingText}>
              Ready, set, go{"\n"}in just a few quick{"\n"}taps.
            </Text>
            <Text style={styles.subText}>
              No matter where your destination is, we'll get you where you need
              to go
            </Text>
            <ButtonComponent
              {...{
                btnContainerStyle: styles.btnContainer,
                btnTextStyle: styles.btnText,
                ctaText: "Log in",
                handlePress,
              }}
            />
            <View style={styles.signupBox}>
              <Text style={styles.signupContent}>Don't have an account?</Text>
              <Text style={styles.signupTxt}>Sign Up</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  carsHeroSectionImg: {
    width: "100%",
    height: height / 2,
  },
  gradientBox: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 15,
    gap: 16,
  },
  headingText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "500",
  },
  subText: {
    color: "#b6bcc9",
    fontSize: 18,
  },
  btnContainer: {
    backgroundColor: "#3070f6",
    width: "100%",
    borderRadius: 8,
    paddingVertical: 12,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 18,
  },
  signupBox: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    fontSize: 14,
  },
  signupContent: {
    color: "#b6bcc9",
  },
  signupTxt: {
    color: "#3070f6",
  },
});
