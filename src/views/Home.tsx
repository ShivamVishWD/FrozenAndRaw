import {View, Text} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Home = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{flex: 1, paddingTop: insets.top}}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
