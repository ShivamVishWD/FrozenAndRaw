import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeViewModal from '../viewmodals/HomeViewModal';
import CategoriesViewModal from '../viewmodals/CategoriesViewModal';
import CartViewModal from '../viewmodals/CartViewModal';

const BottomTab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen name="Home" component={HomeViewModal} />
      <BottomTab.Screen name="Categories" component={CategoriesViewModal} />
      <BottomTab.Screen name="Cart" component={CartViewModal} />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;
