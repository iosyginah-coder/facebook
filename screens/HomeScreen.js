import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import CreatePost from '../components/CreatePost';
import Stories from '../components/Stories';
import Posts from '../components/Posts';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <BottomNavigation />
      <CreatePost /> 
      <Stories />
      <Posts />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
