import {StyleSheet, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import DuoToggleSwitch from 'react-native-duo-toggle-switch';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          shadowRadius: 8,
          shadowOpacity: 0.3,
          shadowColor: '#757575',
          shadowOffset: {
            width: 0,
            height: 3,
          },
        }}>
        <DuoToggleSwitch
          primaryText="Customers"
          secondaryText="Employees"
          onPrimaryPress={() => {}}
          onSecondaryPress={() => {}}
          TouchableComponent={Ripple}
          primaryButtonStyle={{width: 150}}
          secondaryButtonStyle={{width: 125}}
          primaryTextStyle={{marginRight: 32}}
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
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
