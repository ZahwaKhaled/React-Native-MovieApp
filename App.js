import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Pages/Home';
import MovieDetails from './Pages/MovieDetails';
import Login from './Pages/Login';
import Favourites from './Pages/Favourites';
import { Provider } from 'react-redux';
import {  createStore } from 'redux';
import Reducer from './Store/Reducer';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

const Tab = createBottomTabNavigator();


export default function App() {
  const store = createStore(Reducer,applyMiddleware(thunk))
  return (
  <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home"
                color={"black"} size={40} />
            ),
          }}
        />
         <Tab.Screen name="MovieDetails" component={MovieDetails}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="film"
                color={"black"} size={40} />
            ),
          }}
        />
         <Tab.Screen name="Login" component={Login}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="login"
                color={"black"} size={40} />
            ),
          }}
        />
         <Tab.Screen name="Favourites" component={Favourites}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="heart"
                color={"red"} size={40} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
</Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b1b1b1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
