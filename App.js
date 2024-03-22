import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  Image,
} from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Inter-Regular": Inter_400Regular,
    "Inter-Bold": Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./assets/light-bg-unsplash.png")}
        style={styles.bgImageStyle}
      >
        <View style={styles.baseViewAreaStyle}>
          {/* //! Upper portion of the screen */}
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.upperViewStatus}>
                “The science of operations, as derived from mathematics more
                especially, is a science of itself, and has its own abstract
                truth and value.”
              </Text>
              <Text style={styles.quoterStyle}>- Ada Lovelace</Text>
            </View>

            <View>
              <Image source={require("./assets/refresh.png")} />
            </View>
          </View>

          {/* //! Bottom Portion */}

          <View style={{marginBottom: 40}}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require('./assets/sunny.png')}/>
              <Text style={{fontFamily: 'Inter-Regular', color: "#fff", marginLeft: 16}}>GOOD MORNING</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImageStyle: {
    flex: 1,
  },
  baseViewAreaStyle: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 32,
    paddingHorizontal: 26,
    // paddingLeft: 26,
    // paddingRight: 25,
  },
  upperViewStatus: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
    lineHeight: 22,
    color: "#fff",
  },
  quoterStyle: {
    fontFamily: "Inter-Bold",
    fontSize: 12,
    lineHeight: 22,
    color: "#fff",
    marginTop: 8,
  },
});
