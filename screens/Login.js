import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.form}>

        <Text style={styles.logo}>facebook</Text>

        <Text style={styles.welcome}>
          Connectez-vous à votre compte
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email ou téléphone"
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#999"
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.loginText}>
            Se connecter
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgot}>
            Mot de passe oublié ?
          </Text>
        </TouchableOpacity>

        <View style={styles.line} />

        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createText}>
            Créer un nouveau compte
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  form: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    elevation: 5,
  },

  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#6C2BD9',
    marginBottom: 5,
  },

  welcome: {
    fontSize: 15,
    color: '#666',
    marginBottom: 25,
  },

  input: {
    width: '100%',
    height: 52,
    backgroundColor: '#F7F3FF',
    borderWidth: 1,
    borderColor: '#6C2BD9',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 15,
    marginBottom: 12,
  },

  loginButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#6C2BD9',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  loginText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  forgot: {
    color: '#6C2BD9',
    fontSize: 14,
    marginTop: 18,
    fontWeight: '600',
  },

  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#DDD',
    marginVertical: 22,
  },

  createButton: {
    backgroundColor: '#6C2BD9',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  createText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
