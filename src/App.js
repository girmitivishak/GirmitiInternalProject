import React from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Explore from './screens/Explore';
import Search from './screens/Search';
import Profile from './screens/Profile';
import Settings from './screens/Settings';

// import Signin from './screens/signin/index';

function App() {
  const Tab = createBottomTabNavigator();
  return (
    // <Signin />;

    <NavigationContainer>
      <Tab.Navigator initialRouteName="Explore">
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            // tabBarLabel: 'Explore',
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            // tabBarLabel: 'Explore',
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            // tabBarLabel: 'Explore',
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="user" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            // tabBarLabel: 'Explore',
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="cog" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
