import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

import Icon from "react-native-vector-icons/MaterialIcons";

import { LOCATIONIQ_API_KEY } from "@env";

const SearchBox = (props) => {
  const { inputText, setInputText, isClickedOutside, placeholder, zIndex } =
    props;

  const [results, setResults] = useState([]);

  const handleSearch = async (text) => {
    setInputText(text);

    if (text.length < 3) {
      setResults([]);
      return;
    }

    console.log({ text });

    try {
      const response = await axios.get(
        `https://us1.locationiq.com/v1/autocomplete.php?key=${LOCATIONIQ_API_KEY}&q=${text}&format=jsonn&limit=5`
      );

      console.log({ "response.data": response.data });

      setResults(response.data);
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  const handleSelect = (address) => {
    setInputText(address.display_place);
    setResults([]);
    console.log("Selected Address:", address);
  };

  useEffect(() => {
    if (isClickedOutside) setResults([]);
  }, [isClickedOutside]);

  return (
    <View style={[styles.container, { zIndex: zIndex }]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={inputText}
        onChangeText={handleSearch}
        onFocus={() => handleSearch(inputText)}
        onBlur={() => setResults([])}
      />
      {results.length ? (
        <View>
          <View style={styles.listContainer}>
            <FlatList
              data={results}
              keyExtractor={(item, index) => index}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={[
                    styles.resultItem,
                    index === results.length - 1 ? styles.lastItem : {},
                  ]}
                  onPress={() => handleSelect(item)}
                >
                  <View style={styles.placeDescription}>
                    <View style={styles.iconContainer}>
                      <Icon name="location-pin" size={30} color="#686868" />
                    </View>
                    <View>
                      <Text style={styles.placeName} numberOfLines={1}>
                        {item.display_place}
                      </Text>
                      <Text style={styles.address} numberOfLines={1}>
                        {item.display_address}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  listContainer: {
    backgroundColor: "#f4f4f4",
    flex: 1,
    width: "100%",
    width: "100%",
    position: "absolute",
    marginTop: 13,
    gap: 4,
    padding: 4,
    top: -12,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    zIndex: 5,
  },
  resultItem: {
    padding: 6,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    color: "black",
    flex: 1,
  },
  lastItem: { borderBottomWidth: 0 },
  placeDescription: {
    flexDirection: "row",
    gap: 5,
    flex: 1,
    alignItems: "center",
  },
  iconContainer: {
    padding: 4,
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: "#e6e6e6",
  },
  placeName: {
    fontWeight: "600",
    color: "#0e0e0e",
  },
  address: {
    color: "#757575",
  },
});
