import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../components/containers/Home';
import Comic from '../../components/containers/Comic';

const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();
const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Comic" component={Comic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
