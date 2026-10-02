import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';

import PostCard from './PostCard';

const postsData = [
  {
    id: '1',
    name: 'Kylian Mbappé',
    time: 'Il y a 2 h',
    content:
      'Grand match ce soir ! Merci à tous pour le soutien 💪🔥',
    postImage: require('../assets/haki.jpg'),
    profileImage: require('../assets/haki.jpg'),
    likes: 1240,
    comments: 89,
    shares: 12,
  },
  {
    id: '2',
    name: 'Neymar Jr',
    time: 'Il y a 3 h',
    content:
      'De retour sur le terrain ⚽️❤️',
    postImage: require('../assets/haki.jpg'),
    profileImage: require('../assets/haki.jpg'),
    likes: 3450,
    comments: 210,
    shares: 45,
  },
  {
    id: '3',
    name: 'Alisha Lehmann',
    time: 'Il y a 4 h',
    content:
      'Nouvelle séance d’entraînement terminée ✨',
    postImage: require('../assets/haki.jpg'),
    profileImage: require('../assets/haki.jpg'),
    likes: 890,
    comments: 34,
    shares: 8,
  },
  {
    id: '4',
    name: 'Lionel Messi',
    time: 'Il y a 5 h',
    content:
      'Un beau moment partagé en équipe 🏆',
    postImage: require('../assets/haki.jpg'),
    profileImage: require('../assets/haki.jpg'),
    likes: 9500,
    comments: 1200,
    shares: 340,
  },
  {
    id: '5',
    name: 'Julián Álvarez',
    time: 'Il y a 6 h',
    content:
      'Focus sur le prochain objectif 🕷️⚡️',
    postImage: require('../assets/haki.jpg'),
    profileImage: require('../assets/haki.jpg'),
    likes: 670,
    comments: 28,
    shares: 5,
  },
  {
    id: '6',
    name: 'Fleurencia Ginah',
    time: 'Il y a 8 h',
    content:
      'Projet Mobile avec React Native & Expo ! 🚀📱',
    postImage: require('../assets/haki.jpg'),
    profileImage: require('../assets/haki.jpg'),
    likes: 450,
    comments: 19,
    shares: 3,
  },
  {
    id: '7',
    name: 'Cristiano Ronaldo',
    time: 'Il y a 10 h',
    content:
      'SIUUU ! Never give up 🇵🇹💪',
    postImage: require('../assets/haki.jpg'),
    profileImage: require('../assets/haki.jpg'),
    likes: 15200,
    comments: 2300,
    shares: 890,
  },
  {
    id: '8',
    name: 'Erling Haaland',
    time: 'Il y a 12 h',
    content:
      'More goals coming soon 🤖⚽️',
    postImage: require('../assets/haki.jpg'),
    profileImage: require('../assets/haki.jpg'),
    likes: 4100,
    comments: 310,
    shares: 78,
  },
  {
    id: '9',
    name: 'Jude Bellingham',
    time: 'Il y a 14 h',
    content:
      'Hala Madrid ! 🤍',
    postImage: require('../assets/haki.jpg'),
    profileImage: require('../assets/haki.jpg'),
    likes: 5600,
    comments: 420,
    shares: 110,
  },
  {
    id: '10',
    name: 'Vinicius Jr',
    time: 'Il y a 18 h',
    content:
      'Baila Vini ! 🕺💫',
    postImage: require('../assets/haki.jpg'),
    profileImage: require('../assets/haki.jpg'),
    likes: 3800,
    comments: 270,
    shares: 64,
  },
];

export default function Posts() {
  return (
    <View style={styles.container}>
      <FlatList
        data={postsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard post={item} />
        )}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.contentContainer}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 0,
    backgroundColor: '#F7F3FF',
  },

  list: {
    flex: 1,
  },

  contentContainer: {
    paddingTop: 4,
    paddingBottom: 30,
  },
});