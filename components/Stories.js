import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import StoryCard from './StoryCard';

const stories = [
  {
    id: '0',
    name: 'Créer une story',
    storyImage: require('../assets/haki.jpg'),
    profileImage: require('../assets/haki.jpg'),
    isCreate: true,
  },
  {
    id: '1',
    name: 'Mbappe',
    storyImage: require('../assets/haki.jpg'),
    profileImage: require('../assets/haki.jpg'),
    isCreate: false,
  },
  {
    id: '2',
    name: 'Neymar',
    storyImage: require('../assets/haki.jpg'),
    profileImage: require('../assets/haki.jpg'),
    isCreate: false,
  },
  {
    id: '3',
    name: 'Alisha',
    storyImage: require('../assets/haki.jpg'),
    profileImage: require('../assets/haki.jpg'),
    isCreate: false,
  },
  {
    id: '4',
    name: 'Messi',
    storyImage: require('../assets/haki.jpg'),
    profileImage: require('../assets/haki.jpg'),
    isCreate: false,
  },
  {
    id: '5',
    name: 'Alvarez',
    storyImage: require('../assets/haki.jpg'),
    profileImage: require('../assets/haki.jpg'),
    isCreate: false,
  },
  {
    id: '6',
    name: 'Fleurencia',
    storyImage: require('../assets/haki.jpg'),
    profileImage: require('../assets/haki.jpg'),
    isCreate: false,
  },
  {
    id: '7',
    name: 'Ronaldo',
    storyImage: require('../assets/haki.jpg'),
    profileImage: require('../assets/haki.jpg'),
    isCreate: false,
  },
  {
    id: '8',
    name: 'Haaland',
    storyImage: require('../assets/haki.jpg'),
    profileImage: require('../assets/haki.jpg'),
    isCreate: false,
  },
  {
    id: '9',
    name: 'Bellingham',
    storyImage: require('../assets/haki.jpg'),
    profileImage: require('../assets/haki.jpg'),
    isCreate: false,
  },
  {
    id: '10',
    name: 'Vinicius',
    storyImage: require('../assets/haki.jpg'),
    profileImage: require('../assets/haki.jpg'),
    isCreate: false,
  },
];

export default function Stories() {
  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {stories.map((item) => (
          <StoryCard
            key={item.id}
            name={item.name}
            storyImage={item.storyImage}
            profileImage={item.profileImage}
            isCreate={item.isCreate}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F7F3FF',
  },
  container: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});