import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {
  Plus,
  Search,
  Menu,
} from 'lucide-react-native';

export default function Header() {
  return (
    <>
      <StatusBar style="dark" />

      <View style={styles.header}>

        <Text style={styles.logo}>
          facebook
        </Text>

        <TouchableOpacity style={styles.button}>
          <Plus size={22} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Search size={20} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Menu size={22} color="#FFFFFF" />
        </TouchableOpacity>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 65,
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,

    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },

  logo: {
    flex: 1,
    color: '#6C2BD9',
    fontSize: 28,
    fontWeight: 'bold',
  },

  button: {
    width: 40,
    height: 40,
    backgroundColor: '#6C2BD9',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',

    marginLeft: 8,
  },
});
