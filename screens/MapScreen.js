import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useSelector } from "react-redux";

const MapScreen = () => {
  const navInfo = useSelector((state) => state.nav);

  console.log({ navInfo });
  const { source, destination } = navInfo;
  const markers = [
    {
      title: "source",
      description: "sourcedescription",
      ...source,
    },
    {
      title: "destination",
      description: "destinationdescription",
      ...destination,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: source.latitude,
            longitude: source.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          {console.log({ markers })}
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker}
              title={marker.title}
              description={marker.description || ""}
            />
          ))}
        </MapView>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
