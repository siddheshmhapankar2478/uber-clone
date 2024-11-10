import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import axios from "axios";
import Icon from "react-native-vector-icons/MaterialIcons";
import { LOCATIONIQ_API_KEY } from "@env";

import { addDestinationInfo, addSourceInfo } from "../redux/actions";

const SearchBox = (props) => {
  const {
    inputText,
    setInputText,
    isClickedOutside,
    placeholder,
    zIndex,
    icon,
    setLocation,
    type,
  } = props;

  const [results, setResults] = useState([]);
  const dispatch = useDispatch();

  const handleSearch = async (text) => {
    console.log({ text });
    setInputText(text);

    if (text.length < 3) {
      setResults([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://us1.locationiq.com/v1/autocomplete.php?key=${LOCATIONIQ_API_KEY}&q=${text}&format=jsonn&limit=5`
      );

      setResults(response.data);
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  const handleSelect = (address) => {
    console.log({ address });
    const lat = address.lat;
    const lon = address.lon;
    const latlng = { latitude: Number(lat), longitude: Number(lon) };
    setInputText(address.display_place);

    setLocation(latlng);

    if (type === "source") {
      dispatch(addSourceInfo(latlng));
    } else {
      dispatch(addDestinationInfo(latlng));
    }

    setResults([]);
  };

  // useEffect(() => {
  //   if (isClickedOutside) setResults([]);
  // }, [isClickedOutside]);

  return (
    <View style={[styles.container, { zIndex: zIndex }]}>
      <View style={styles.inputContainer}>
        <View style={styles.iconBox}>{icon}</View>
        <View style={styles.borderLine} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={inputText}
          onChangeText={handleSearch}
          onFocus={() => handleSearch(inputText)}
          // onBlur={() => setResults([])}
        />
      </View>

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
                  <View style={styles.iconContainer}>
                    <Icon
                      style={styles.icon}
                      name="location-pin"
                      size={30}
                      color="#686868"
                    />
                  </View>
                  <View style={styles.placesInfo}>
                    <Text style={styles.placeName} numberOfLines={1}>
                      {item.display_place}
                    </Text>
                    <Text style={styles.address} numberOfLines={1}>
                      {item.display_address}
                    </Text>
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#d9dcdf",
    borderWidth: 1,
    paddingHorizontal: 8,
    gap: 8,
    borderRadius: 8,
  },
  iconBox: {
    width: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  borderLine: {
    height: "60%",
    width: 1,
    backgroundColor: "#d9dcdf",
  },
  input: {
    height: 40,
    color: "#383a3b",
    flex: 1,
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
    borderRadius: 8,
    zIndex: 5,
  },
  resultItem: {
    padding: 6,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    color: "black",
    flex: 1,
    flexDirection: "row",
    gap: 5,
  },
  lastItem: { borderBottomWidth: 0 },
  placeDescription: {
    flexDirection: "row",
    gap: 5,
    flex: 1,
    alignItems: "center",
  },
  iconContainer: {
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: "#e6e6e6",
    justifyContent: "center",
    alignItems: "center",
  },
  placesInfo: {
    flex: 1,
  },
  placeName: {
    fontWeight: "600",
    color: "#3a3c3f",
  },
  address: {
    color: "#757575",
  },
});
