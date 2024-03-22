import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_300Light,
} from "@expo-google-fonts/inter";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Inter-Regular": Inter_400Regular,
    "Inter-Bold": Inter_700Bold,
    "Inter-Light": Inter_300Light,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  const onPressFunctionButton = () => {
    alert('Clicked...!');
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

            <View style={{marginTop: 16}}>
              <Text>
                <Text style={styles.clockTimeStyle}>
                  11:37
                </Text>
                <Text style={styles.clockTimeFormatStyle}>
                  BST
                </Text>
              </Text>
            </View>

            <View style={{marginTop: 16}}>
              <Text style={styles.clockTimeZoneStyle}>
              IN LONDON, UK
              </Text>
            </View>

            <TouchableOpacity
            onPress={onPressFunctionButton}
            style={styles.buttonStyle}
            >
              <Text style={styles.buttonTextStyle}>MORE</Text>
              <Image source={require("./assets/more-icon-encrypt.png")}/>
            </TouchableOpacity>

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
  clockTimeStyle: {
    color: "#fff",
    fontSize: 100,
    fontFamily: "Inter-Bold",
  },
  clockTimeFormatStyle: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Inter-Light",
  },
  clockTimeZoneStyle:{
    color: "#fff",
    fontSize: 15,
    fontFamily: "Inter-Bold",
    letterSpacing: 3,
  },
  buttonStyle: {
    backgroundColor: "#fff",
    height: 39,
    width: 115,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 48,
    borderRadius: 30,
    paddingLeft: 16,
    paddingRight: 4,
  },
  buttonTextStyle: {
    fontFamily: "Inter-Bold",
    fontSize: 12,
    color: '#000',
    letterSpacing: 3
  }

});
