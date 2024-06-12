import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import VideoCallScreen from './src/callScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <VideoCallScreen />
    </SafeAreaView>
  );
};

export default App;