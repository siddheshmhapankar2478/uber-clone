import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome6";

import SearchBox from "../components/SearchBox";
const welcomeImage = require("./../assets/Home/welcome.png");
const { height } = Dimensions.get("screen");

const HomeScreen = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [isClickedOutside, setIsClickedOutside] = useState(false);

  const handleClickOutSide = () => {
    Keyboard.dismiss();
    setIsClickedOutside(true);
  };

  return (
    <TouchableWithoutFeedback onPress={handleClickOutSide}>
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View style={styles.container}>
          <KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"}>
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
              />

              <SearchBox
                inputText={destination}
                setInputText={setDestination}
                isClickedOutside={isClickedOutside}
                placeholder="Enter Destination Location"
                zIndex={4}
                icon={<Icon name="location-dot" size={20} color="#353a40" />}
              />
            </View>
            <TouchableOpacity style={styles.btnContainer} onPress={() => {}}>
              <Text style={styles.btnText}>Go</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </>
    </TouchableWithoutFeedback>
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
});
