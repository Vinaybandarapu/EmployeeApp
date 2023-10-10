import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AddEmployee from '../Screens/AddEmployee';
import NewEmployee from '../Screens/NewEmployee';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import EmployeeListScreen from '../Screens/EmployeeListScreen';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";


const Drawer = createDrawerNavigator();


const AuthRoute = () => {
    const Stack = createStackNavigator()

    const AppDrawer = () => {
        return (
            <Drawer.Navigator
                drawerStyle={{
                    width: (70),
                }}
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: 'lightgrey',
                    },
                    drawerLabelStyle: { color: "black" },
                    activeTintColor: 'blue',
                    activeBackgroundColor: 'blue',
                    inactiveTintColor: 'blue',
                    inactiveBackgroundColor: 'blue',
                }}
            >
                <Drawer.Screen name="Inbox" component={EmployeeListScreen} initialRouteName={EmployeeListScreen}/>
                <Drawer.Screen name="Add Employee" component={AddEmployee} />
                <Drawer.Screen name="New Employee" component={NewEmployee} />
            </Drawer.Navigator>
        );
    };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddEmployee">
        <Stack.Screen name={'Employee Details'} component={AddEmployee} options={{headerShown: false}}/>
        <Stack.Screen name={'NewEmployee'} component={NewEmployee} options={{headerShown: false}} />
        <Stack.Screen name={'EmployeeListScreen'} component={AppDrawer} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthRoute;
