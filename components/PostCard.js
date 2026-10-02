import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const REACTIONS = [
  {
    id: 'like',
    emoji: '👍',
    label: "J'aime",
    color: '#1877F2',
  },
  {
    id: 'love',
    emoji: '❤️',
    label: "J'adore",
    color: '#E0245E',
  },
  {
    id: 'haha',
    emoji: '😆',
    label: 'Haha',
    color: '#F5A623',
  },
  {
    id: 'wow',
    emoji: '😮',
    label: 'Wouah',
    color: '#F5A623',
  },
  {
    id: 'sad',
    emoji: '😢',
    label: 'Triste',
    color: '#F5A623',
  },
];

export default function PostCard({ post }) {
  const [likesCount, setLikesCount] = useState(post.likes);
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [showReactionsMenu, setShowReactionsMenu] = useState(false);

  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const [commentsCount, setCommentsCount] = useState(post.comments);

  const handleLikePress = () => {
    if (selectedReaction) {
      setSelectedReaction(null);
      setLikesCount((prev) => Math.max(0, prev - 1));
    } else {
      setSelectedReaction(REACTIONS[0]);
      setLikesCount((prev) => prev + 1);
    }

    setShowReactionsMenu(false);
  };

  const handleSelectReaction = (reaction) => {
    if (!selectedReaction) {
      setLikesCount((prev) => prev + 1);
    }

    setSelectedReaction(reaction);
    setShowReactionsMenu(false);
  };

  const handleAddComment = () => {
    if (commentText.trim() === '') {
      return;
    }

    setCommentsList((prev) => [
      ...prev,
      commentText.trim(),
    ]);

    setCommentsCount((prev) => prev + 1);
    setCommentText('');
  };

  return (
    <View style={styles.card}>

      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={post.profileImage}
          style={styles.profileImage}
        />

        <View style={styles.headerText}>
          <Text style={styles.userName}>
            {post.name}
          </Text>

          <Text style={styles.timeText}>
            {post.time}
          </Text>
        </View>

        <TouchableOpacity style={styles.moreButton}>
          <Ionicons
            name="ellipsis-horizontal"
            size={21}
            color="#65676B"
          />
        </TouchableOpacity>
      </View>

      {/* TEXTE DU POST */}
      {post.content ? (
        <Text style={styles.content}>
          {post.content}
        </Text>
      ) : null}

      {/* IMAGE DU POST */}
      {post.postImage ? (
        <Image
          source={post.postImage}
          style={styles.postImage}
        />
      ) : null}

      {/* STATISTIQUES */}
      <View style={styles.statsContainer}>

        <View style={styles.likesStat}>

          <View style={styles.likeBadge}>
            <Text style={styles.likeEmoji}>
              {selectedReaction
                ? selectedReaction.emoji
                : '👍'}
            </Text>
          </View>

          <Text style={styles.statsText}>
            {likesCount}
          </Text>

        </View>

        <View style={styles.rightStats}>

          <Text style={styles.statsText}>
            {commentsCount} commentaires
          </Text>

          <Text style={styles.statsText}>
            {' '}• {post.shares} partages
          </Text>

        </View>

      </View>

      <View style={styles.divider} />

      {/* BOUTONS */}
      <View style={styles.actionsContainer}>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleLikePress}
          onLongPress={() =>
            setShowReactionsMenu(true)
          }
          delayLongPress={300}
        >

          {selectedReaction ? (
            <Text style={styles.selectedEmoji}>
              {selectedReaction.emoji}
            </Text>
          ) : (
            <Ionicons
              name="thumbs-up-outline"
              size={20}
              color="#65676B"
            />
          )}

          <Text
            style={[
              styles.actionText,
              selectedReaction && {
                color: selectedReaction.color,
              },
            ]}
          >
            {selectedReaction
              ? selectedReaction.label
              : "J'aime"}
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() =>
            setShowCommentInput(!showCommentInput)
          }
        >

          <Ionicons
            name="chatbubble-outline"
            size={20}
            color="#65676B"
          />

          <Text style={styles.actionText}>
            Commenter
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
        >

          <Ionicons
            name="share-social-outline"
            size={20}
            color="#65676B"
          />

          <Text style={styles.actionText}>
            Partager
          </Text>

        </TouchableOpacity>

      </View>

      {/* MENU DES REACTIONS */}
      {showReactionsMenu && (
        <View style={styles.reactionsMenu}>

          {REACTIONS.map((reaction) => (
            <TouchableOpacity
              key={reaction.id}
              style={styles.reactionItem}
              onPress={() =>
                handleSelectReaction(reaction)
              }
            >
              <Text style={styles.reactionEmoji}>
                {reaction.emoji}
              </Text>
            </TouchableOpacity>
          ))}

        </View>
      )}

      {/* COMMENTAIRES */}
      {showCommentInput && (
        <View style={styles.commentsSection}>

          {commentsList.map((comment, index) => (
            <View
              key={index}
              style={styles.singleComment}
            >

              <Text style={styles.commentTextBold}>
                Vous :
              </Text>

              <Text style={styles.commentText}>
                {comment}
              </Text>

            </View>
          ))}

          <View style={styles.inputRow}>

            <TextInput
              style={styles.commentInput}
              placeholder="Écrire un commentaire..."
              placeholderTextColor="#999"
              value={commentText}
              onChangeText={setCommentText}
            />

            <TouchableOpacity
              style={styles.sendButton}
              onPress={handleAddComment}
            >

              <Ionicons
                name="send"
                size={18}
                color="#FFFFFF"
              />

            </TouchableOpacity>

          </View>

        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    marginBottom: 8,
    paddingTop: 12,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EB',
    position: 'relative',
    zIndex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },

  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },

  headerText: {
    flex: 1,
    marginLeft: 10,
  },

  userName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1C1E21',
  },

  timeText: {
    fontSize: 12,
    color: '#65676B',
    marginTop: 2,
  },

  moreButton: {
    padding: 5,
  },

  content: {
    fontSize: 14,
    color: '#1C1E21',
    paddingHorizontal: 15,
    marginBottom: 10,
    lineHeight: 20,
  },

  postImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 10,
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 8,
  },

  likesStat: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  likeBadge: {
    width: 19,
    height: 19,
    borderRadius: 10,
    backgroundColor: '#1877F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },

  likeEmoji: {
    fontSize: 11,
  },

  rightStats: {
    flexDirection: 'row',
  },

  statsText: {
    fontSize: 12,
    color: '#65676B',
  },

  divider: {
    height: 1,
    backgroundColor: '#E4E6EB',
    marginHorizontal: 15,
  },

  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },

  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 9,
  },

  actionText: {
    fontSize: 13,
    color: '#65676B',
    marginLeft: 6,
    fontWeight: '600',
  },

  selectedEmoji: {
    fontSize: 19,
    marginRight: 4,
  },

  reactionsMenu: {
    position: 'absolute',
    bottom: 48,
    left: 10,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 7,
    paddingVertical: 5,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    zIndex: 100,
  },

  reactionItem: {
    paddingHorizontal: 5,
    paddingVertical: 3,
  },

  reactionEmoji: {
    fontSize: 25,
  },

  commentsSection: {
    paddingHorizontal: 15,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E4E6EB',
  },

  singleComment: {
    flexDirection: 'row',
    backgroundColor: '#F0F2F5',
    padding: 8,
    borderRadius: 10,
    marginBottom: 6,
  },

  commentTextBold: {
    fontWeight: 'bold',
    color: '#1877F2',
    fontSize: 13,
    marginRight: 4,
  },

  commentText: {
    color: '#333',
    fontSize: 13,
    flex: 1,
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  commentInput: {
    flex: 1,
    backgroundColor: '#F0F2F5',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 13,
    color: '#333',
  },

  sendButton: {
    backgroundColor: '#1877F2',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
});