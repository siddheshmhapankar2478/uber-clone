import { useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import SearchBox from "../components/SearchBox";
import { Keyboard } from "react-native";

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
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome, User!</Text>

          <SearchBox
            inputText={source}
            setInputText={setSource}
            isClickedOutside={isClickedOutside}
            placeholder="Enter Source Location"
            zIndex={5}
          />

          <SearchBox
            inputText={destination}
            setInputText={setDestination}
            isClickedOutside={isClickedOutside}
            placeholder="Enter Destination Location"
            zIndex={4}
          />
        </View>
      </View>
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
  header: {
    position: "relative",
    gap: 12,
    flex: 1,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 10,
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
});
