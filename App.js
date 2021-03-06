import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AppStack from './src/stack/AppStack';
import Layout from './src/components/organism/Layout';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/containers/Home';
import Comic from './src/components/containers/Comic';
import ThemeProvider from './src/contexts/ThemeProvider';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <Layout>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Comic" component={Comic} />
          </Stack.Navigator>
        </Layout>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export const colors = {
  light: '#ffffff',
  dark: '#000000',
};
// const styles = StyleSheet.create({
//   colors: {
//     light: '#ffffff',
//     black:'#000000'
//   },
// });
export default App;
