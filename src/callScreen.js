import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

const VideoCallScreen = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [cameraType, setCameraType] = useState(RNCamera.Constants.Type.front);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranscript(prevTranscript => prevTranscript + ' New transcript line. ');
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const joinCall = () => {
    console.log('Joining the call...');
  };

  const endCall = () => {
    console.log('Ending the call...');
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const switchCamera = () => {
    setCameraType(
      cameraType === RNCamera.Constants.Type.front
        ? RNCamera.Constants.Type.back
        : RNCamera.Constants.Type.front
    );
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        type={cameraType}
        flashMode={RNCamera.Constants.FlashMode.off}
        captureAudio={!isMuted}
      />
      <View style={styles.controls}>
        <TouchableOpacity style={styles.button} onPress={toggleMute}>
          <Text style={styles.buttonText}>{isMuted ? 'Unmute' : 'Mute'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={switchCamera}>
          <Text style={styles.buttonText}>Switch Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={endCall}>
          <Text style={styles.buttonText}>End Call</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.transcriptContainer}>
        <Text style={styles.transcriptText}>{transcript}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 4,
    width: '100%',
  },
  controls: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  transcriptContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  transcriptText: {
    fontSize: 16,
    color: '#333',
  },
});

export default VideoCallScreen;
