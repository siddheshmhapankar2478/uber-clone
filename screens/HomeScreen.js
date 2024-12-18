import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome6";

import SearchBox from "../components/SearchBox";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
const welcomeImage = require("./../assets/Home/welcome.png");
const { height } = Dimensions.get("screen");

const HomeScreen = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [isClickedOutside, setIsClickedOutside] = useState(false);

  const navigation = useNavigation();
  const navInfo = useSelector((state) => state.nav);

  const handleSubmit = () => {
    navigation.navigate("MapScreen");
  };

  const handleClickOutSide = () => {
    Keyboard.dismiss();
    setIsClickedOutside(true);
  };

  return (
    // <TouchableWithoutFeedback onPress={handleClickOutSide}>
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        {/* <Image source={welcomeImage} style={styles.welcomeImage} /> */}
        <Text style={styles.welcomeText}>Welcome, User!</Text>
        <View style={styles.header}>
          <SearchBox
            inputText={source}
            setInputText={setSource}
            isClickedOutside={isClickedOutside}
            placeholder="Enter Source Location"
            zIndex={5}
            icon={<Icon name="circle-dot" size={20} color="#353a40" />}
            type="source"
          />

          <SearchBox
            inputText={destination}
            setInputText={setDestination}
            isClickedOutside={isClickedOutside}
            placeholder="Enter Destination Location"
            zIndex={4}
            icon={<Icon name="location-dot" size={20} color="#353a40" />}
            type="destination"
          />
        </View>
        <TouchableOpacity
          style={[
            styles.btnContainer,
            !navInfo?.source || !navInfo?.destination ? styles.disbaledBtn : {},
          ]}
          onPress={handleSubmit}
          disabled={!navInfo?.source || !navInfo?.destination}
        >
          <Text
            style={[
              styles.btnText,
              !navInfo?.source || !navInfo?.destination
                ? styles.disbaledBtnText
                : {},
            ]}
          >
            Go
          </Text>
        </TouchableOpacity>
      </View>
    </>
    // </TouchableWithoutFeedback>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 25,
    position: "relative",
  },
  welcomeImage: {
    width: "100%",
    height: height / 2,
  },
  header: {
    position: "relative",
    gap: 12,
    flex: 1,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 10,
    color: "#323437",
    fontWeight: "600",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 46,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: "white",
  },
  loadingIndicator: {
    position: "absolute",
    right: 12,
  },
  resultsList: {
    maxHeight: 200,
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  resultItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  resultText: {
    fontSize: 14,
    color: "#333",
  },
  btnContainer: {
    backgroundColor: "#36393e",
    width: "100%",
    borderRadius: 8,
    paddingVertical: 12,
  },
  btnText: {
    color: "#e9eaee",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 18,
  },
  disbaledBtn: {
    backgroundColor: "#DEE1E6",
  },
  disbaledBtnText: {
    color: "#fafcff",
  },
});
