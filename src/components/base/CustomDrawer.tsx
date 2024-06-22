import {View, Text} from 'react-native';
import React from 'react';
import drawerStyle from './CustomDrawerStyle';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CustomDrawer = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[drawerStyle.container, {paddingTop: insets.top}]}>
      <Text>CustomDrawer</Text>
    </View>
  );
};

export default CustomDrawer;
