import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import {
  House,
  Users,
  MessageCircle,
  Play,
  Bell,
  ShoppingCart,
} from 'lucide-react-native';

export default function BottomNavigation() {
  return (
    <View style={styles.navbar}>

      <TouchableOpacity style={styles.navButton}>
        <House size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton}>
        <Users size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton}>
        <MessageCircle size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton}>
        <Play size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton}>
        <Bell size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton}>
        <ShoppingCart size={24} color="#FFFFFF" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 65,
    width: '100%',
    backgroundColor: '#6C2BD9',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    borderTopWidth: 1,
    borderTopColor: '#E4E6EB',

    elevation: 8,
  },

  navButton: {
    flex: 1,
    height: 65,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
