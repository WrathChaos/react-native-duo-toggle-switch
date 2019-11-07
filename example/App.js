import React from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import DuoToggleSwitch from "react-native-duo-toggle-switch";

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
