import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigation from './BottomNavigation';
import CustomDrawer from '../components/base/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: true}}
      drawerContent={(props: any) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="BottomTab" component={BottomNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
