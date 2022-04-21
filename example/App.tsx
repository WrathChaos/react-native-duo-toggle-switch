import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Ripple from "react-native-material-ripple";
import DuoToggleSwitch from "./lib/DuoToggleSwitch";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <View
        style={{
          shadowRadius: 8,
          shadowOpacity: 0.3,
          shadowColor: "#757575",
          shadowOffset: {
            width: 0,
            height: 3,
          },
        }}
      >
        <DuoToggleSwitch
          primaryText="Hello"
          secondaryText="Boom"
          // TouchableComponent={Ripple}
          // rippleColor="#fff"
          // rippleContainerBorderRadius={50}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
