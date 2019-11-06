import React from "react";
import { SafeAreaView, View, Text, StatusBar } from "react-native";
import DuoToggleSwitch from "./lib/src/components/DuoToggleSwitch/DuoToggleSwitch";

const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <DuoToggleSwitch />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
