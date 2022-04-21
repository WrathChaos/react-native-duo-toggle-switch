import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Ripple from "react-native-material-ripple";
import DuoToggleSwitch from "react-native-duo-toggle-switch";

export default function App() {
  return (
    <View style={styles.container}>
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
          primaryText="Map"
          secondaryText="List"
          onPrimaryPress={() => {}}
          onSecondaryPress={() => {}}
          TouchableComponent={Ripple}
          rippleColor="#fff"
          rippleContainerBorderRadius={50}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
