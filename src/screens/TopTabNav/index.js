import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Dail from '../TopTabPages/Dail';
import Links from '../TopTabPages/Links';
import Shifts from '../TopTabPages/Shifts';
import Graph from '../TopTabPages/Graph';

const TopTabNav = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Dail">
        <Tab.Screen name="Dail" component={Dail} />
        <Tab.Screen name="Graph" component={Graph} /> 
        <Tab.Screen name="Links" component={Links} />
        <Tab.Screen name="Shifts" component={Shifts} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TopTabNav;
