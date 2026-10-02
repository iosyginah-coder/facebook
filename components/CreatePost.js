import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CreatePost() {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/haki.jpg')}
        style={styles.profileImage}
      />

      <TextInput
        style={[
          styles.input,
          isFocused ? styles.inputFocused : styles.inputUnfocused,
        ]}
        placeholder="À quoi pensez-vous ?"
        placeholderTextColor="#999999"
        value={text}
        onChangeText={setText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        multiline
        textAlignVertical="center"
      />

      <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
        <Ionicons name="images-outline" size={26} color="#6C2BD9" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F7F3FF',
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 14,
    color: '#333333',
    minHeight: 40,
    maxHeight: 100,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  inputUnfocused: {
    backgroundColor: '#F7F3FF',
    borderWidth: 1,
    borderColor: '#E5D5FF',
  },
  inputFocused: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#6C2BD9',
  },
  iconButton: {
    padding: 5,
  },
});