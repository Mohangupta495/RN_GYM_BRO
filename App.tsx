import React from 'react'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StackScreens } from './src/constants';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { Home } from './src/pages';

const App = () => {
  const Stack = createStackNavigator();  
  return (
    <Provider store={store}>
        <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>        
        <Stack.Screen
          name={StackScreens.HOME}
          component={Home}
        />        
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App