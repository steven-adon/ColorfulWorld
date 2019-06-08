import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import TabBarIcon from '../components/TabBarIcon';
// HomeModule
import HomeScreen from '../screens/HomeModule/HomeScreen';
import OtherScreen from '../screens/HomeModule/OtherScreen/OtherScreen'
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen, Other: {
    screen: OtherScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Ionicons style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('Home')} name="ios-arrow-back" size={30} />
        )
      };
    }
  }
}, {
  defaultNavigationOptions: ({ navigation }) => {
    return {
      headerLeft: (
        <Ionicons style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
      )
    };
  }
});



const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: HomeStack,
    navigationOptions: {
      drawerLabel: 'Dashboard-World',
      drawerIcon: () => (
        <Ionicons name="ios-card" size={30} />
      ),
    }
  },
  Personal: {
    screen: HomeStack,
    navigationOptions: {
      drawerLabel: 'Personl-Space',
      drawerIcon: () => (
        <Ionicons name="ios-person" size={30} />
      ),
    }
  }
},{
  contentOptions: {
    activeTintColor: '#e91e63',
    itemsContainerStyle: {
      marginVertical: 0,
    },
    iconContainerStyle: {
      opacity: 1
    }
  }
});

AppDrawerNavigator.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack: { screen: AppDrawerNavigator },
  LinksStack,
  SettingsStack,
});
