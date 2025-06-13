import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { forumPosts } from '@/data/forumPosts';
import { MessageCircle, ThumbsUp, Eye } from 'lucide-react-native';

export default function ForumScreen() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'recommendations', name: 'Recommendations' },
    { id: 'questions', name: 'Questions' },
    { id: 'discussions', name: 'Discussions' },
  ];

  const filteredPosts = activeCategory === 'all' 
    ? forumPosts 
    : forumPosts.filter(post => post.category === activeCategory);

  const renderCategoryTabs = () => (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesContainer}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.categoryTab,
            activeCategory === item.id && styles.activeCategoryTab
          ]}
          onPress={() => setActiveCategory(item.id)}
        >
          <Text 
            style={[
              styles.categoryText,
              activeCategory === item.id && styles.activeCategoryText
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );

  const renderPostItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.postCard}
      onPress={() => router.push(`/forum-post/${item.id}`)}
    >
      <View style={styles.postHeader}>
        <Image source={{ uri: item.author.avatar }} style={styles.authorAvatar} />
        <View>
          <Text style={styles.authorName}>{item.author.name}</Text>
          <Text style={styles.postTime}>{item.timeAgo}</Text>
        </View>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryBadgeText}>{item.category}</Text>
        </View>
      </View>
      
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postExcerpt} numberOfLines={2}>{item.content}</Text>
      
      {item.imageUrl && (
        <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
      )}
      
      <View style={styles.postFooter}>
        <View style={styles.postStat}>
          <ThumbsUp size={16} color="#666" />
          <Text style={styles.postStatText}>{item.likes}</Text>
        </View>
        <View style={styles.postStat}>
          <MessageCircle size={16} color="#666" />
          <Text style={styles.postStatText}>{item.comments}</Text>
        </View>
        <View style={styles.postStat}>
          <Eye size={16} color="#666" />
          <Text style={styles.postStatText}>{item.views}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {renderCategoryTabs()}
      
      <FlatList
        data={filteredPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPostItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No posts found in this category</Text>
          </View>
        }
      />
      
      <TouchableOpacity 
        style={styles.newPostButton}
        onPress={() => router.push('/new-post')}
      >
        <Text style={styles.newPostButtonText}>New Post</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  categoryTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#f0f0f0',
  },
  activeCategoryTab: {
    backgroundColor: '#FF6B35',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  activeCategoryText: {
    color: '#fff',
  },
  listContent: {
    padding: 16,
    paddingBottom: 80,
  },
  postCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  authorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  authorName: {
    fontSize: 14,
    fontWeight: '600',
  },
  postTime: {
    fontSize: 12,
    color: '#666',
  },
  categoryBadge: {
    marginLeft: 'auto',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryBadgeText: {
    fontSize: 12,
    color: '#666',
  },
  postTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  postExcerpt: {
    fontSize: 14,
    color: '#444',
    marginBottom: 12,
  },
  postImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 12,
  },
  postFooter: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
  },
  postStat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  postStatText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  emptyContainer: {
    padding: 24,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
  newPostButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: '#FF6B35',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 24,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  newPostButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
