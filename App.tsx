import 'react-native-gesture-handler';

import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider, useSafeAreaInsets} from "react-native-safe-area-context";
import {createStackNavigator} from "@react-navigation/stack";
import {Home} from "./pages/Home";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  return (
    <>
      <StatusBar style="light"/>
      <SafeAreaProvider>
        <NavigationContainer>
        <Component/>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

const Component = () => {
  const {top} = useSafeAreaInsets()
  
  const Stack = createStackNavigator();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      paddingTop: top
    },
  });
  
  return (
    <View style={styles.container}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </View>)
}


