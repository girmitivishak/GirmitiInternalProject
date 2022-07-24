import * as React from 'react';
import { View, Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createKeyboardAwareNavigator } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';




function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}
function MyListings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Listings Screen</Text>
    </View>
  );
}
function Forums() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Forums Screen</Text>
    </View>
  );
}
function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function Help() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Help Screen</Text>
    </View>
  );
}
function Logout() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Logout Screen</Text>
    </View>
  );
}


const NavigationDrawer = createDrawerNavigator();

const CustomDrawer = (props) => {
return  <DrawerContentScrollView {...props}>
  <View>
    <View>
    </View>
    <Image source={require('../Drawer/DraweImage/image.png')} style={{width:280 , height:200 , borderBottomWidth:20}}/>
  </View>
  <DrawerItemList {...props}/>
</DrawerContentScrollView>
}

function MyDrawer() {
return <NavigationDrawer.Navigator drawerContent={(props) => <CustomDrawer {...props} /> } >
  <NavigationDrawer.Screen component={Home} name='Home' options={{
            drawerIcon: ({color, size}) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}/>
  <NavigationDrawer.Screen component={Profile} name='Profile' options={{
            drawerIcon: ({color, size}) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
          }}/>
  <NavigationDrawer.Screen component={MyListings} name='MyListings' options={{
            drawerIcon: ({color, size}) => (
              <FontAwesome name="list" size={size} color={color} />
            ),
          }}/>
  <NavigationDrawer.Screen component={Forums} name='Forums' options={{
            drawerIcon: ({color, size}) => (
              <FontAwesome name="clone" size={size} color={color} />
            ),
          }}/>
  <NavigationDrawer.Screen component={Settings} name='Seettings' options={{
            drawerIcon: ({color, size}) => (
              <FontAwesome name="cog" size={size} color={color} />
            ),
          }}/>
  <NavigationDrawer.Screen component={Help} name='Help' options={{
            drawerIcon: ({color, size}) => (
              <FontAwesome name="question" size={size} color={color} />
            ),
          }}/>
  <NavigationDrawer.Screen component={Logout} name='Logout' options={{
            drawerIcon: ({color, size}) => (
              <FontAwesome name="sign-out" size={size} color={color} />
            ),
          }}/>
  </NavigationDrawer.Navigator>
}


export default function Drawer() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
