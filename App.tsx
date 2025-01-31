import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import LoginScreen from './app/screens/Login';
import MainNavigator from './app/screens/Main';
import { LogBox } from 'react-native';
import RegisterScreen from './app/screens/Register';
import { theme } from './theme';

LogBox.ignoreLogs([
  /^AsyncStorage has been extracted from react-native/,
  /^Setting a timer for a long period of time/
]);

//https://reactnavigation.org/docs/hello-react-navigation
const Stack = createNativeStackNavigator();

//https://callstack.github.io/react-native-paper/getting-started.html

function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={MainNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;