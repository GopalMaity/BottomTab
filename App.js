import { View, Text, SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import React from 'react'
import { Provider } from 'react-native-paper';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/BottomTab/Home';
import Tab1 from './src/BottomTab/Tab1';
import Tab2 from './src/BottomTab/Tab2';
import Tab3 from './src/BottomTab/Tab3';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };

  return (
    <Provider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={Colors.white} />
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  )
}

const options = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  CardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
}

const Stack = createSharedElementStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="Home" component={Home}
        options={{ title: 'React-Native Ui', headerShown: true }} />
      <Stack.Screen name="Tab1" component={Tab1} />
      <Stack.Screen name="Tab2" component={Tab2} />
      <Stack.Screen name="Tab3" component={Tab3} />
    </Stack.Navigator>
  )
}
export default App