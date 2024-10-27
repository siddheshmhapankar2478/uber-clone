import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "@env";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome, User!</Text>
        <GooglePlacesAutocomplete
          placeholder="Enter Source"
          fetchDetails={true}
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          query={{
            key: { GOOGLE_API_KEY },
            language: "en",
          }}
          enablePoweredByContainer={false}
          styles={{
            container: {
              flex: 0,
            },
            textInputContainer: {
              width: "100%",
            },
            textInput: {
              height: 46,
              borderWidth: 1,
              borderRadius: 6,
              borderColor: "#dedede",
              color: "#5d5d5d",
              fontSize: 16,
              paddingHorizontal: 10,
            },
            listView: {
              position: "absolute",
              top: 45,
              left: 0,
              right: 0,
              backgroundColor: "white",
              borderRadius: 5,
              flex: 1,
              elevation: 3,
              zIndex: 1000,
            },
            row: {
              padding: 13,
              height: 44,
              flexDirection: "row",
            },
            separator: {
              height: 0.5,
              backgroundColor: "#c8c7cc",
            },
            description: {
              fontSize: 15,
            },
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  header: {
    position: "relative",
    zIndex: 1,
    gap: 12,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 10,
  },
});
