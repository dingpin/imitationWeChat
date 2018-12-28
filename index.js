/** @format */
import {createAppContainer, StackNavigator, createBottomTabNavigator} from 'react-navigation';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import Login from './app/screens/LoginScreen';
import ContactsScreen from './app/screens/ContactsScreen';
import FindScreen from './app/screens/FindScreen'
import HomeScreen from './app/screens/HomeScreen'


const tabNavigatorScreen = createBottomTabNavigator({
    Home: {screen: HomeScreen},
    Contacts: {screen: ContactsScreen},
    Find: {screen: FindScreen},
}, {
    tabBarOptions: {
        activeTintColor: '#45C018',
        inactiveTintColor: '#999999',
        showIcon: true,
        labelStyle: {
            fontSize: 12,
            marginTop: 0,
            marginBottom: 0,
        },
        style: {
            marginBottom: -2,
            backgroundColor: '#FCFCFC',
        },
        tabStyle: {}
    }
});

const myApp = StackNavigator({
    Login: {screen: Login},
    Home: {screen: tabNavigatorScreen}
} , {
    initialRouteName: 'Login',
})


AppRegistry.registerComponent(appName, () => myApp);
