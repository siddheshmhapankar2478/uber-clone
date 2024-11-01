import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";


const heroImage = require("./../assets/HeroSection/hero-img.png");
const { height } = Dimensions.get("screen");

const LandingScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("LoginScreen");
  };

  const handleSkip = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#2e3a56" />
      <View style={styles.container}>
        <TouchableOpacity style={{ zIndex: 1 }} onPress={handleSkip}>
          <Text style={[styles.skipBtn, styles.greyText]}>Skip</Text>
        </TouchableOpacity>
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
            <Text style={[styles.subText, styles.greyText]}>
              No matter where your destination is, we'll get you where you need
              to go
            </Text>
            <TouchableOpacity style={styles.btnContainer} onPress={handleLogin}>
              <Text style={styles.btnText}>Log in</Text>
            </TouchableOpacity>
            <View style={styles.signupBox}>
              <Text style={styles.greyText}>Don't have an account?</Text>
              <Text style={styles.blueTxt}>Sign Up</Text>
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
  greyText: {
    color: "#b6bcc9",
  },
  skipBtn: {
    textAlign: "center",
    textDecorationColor: "#b6bcc9",
    textDecorationLine: "underline",
    position: "absolute",
    top: 15,
    right: 15,
  },
  blueTxt: {
    color: "#3070f6",
  },
});
