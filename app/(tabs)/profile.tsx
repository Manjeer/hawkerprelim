import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { Settings, Edit, LogOut, Star, MessageSquare, Bookmark } from 'lucide-react-native';
import { userProfile } from '@/data/userProfile';

export default function ProfileScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('reviews');
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'reviews':
        return (
          <FlatList
            data={userProfile.reviews}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.reviewCard}
                onPress={() => router.push(`/stall/${item.stallId}`)}
              >
                <View style={styles.reviewHeader}>
                  <Image source={{ uri: item.stallImage }} style={styles.stallImage} />
                  <View>
                    <Text style={styles.stallName}>{item.stallName}</Text>
                    <Text style={styles.reviewDate}>{item.date}</Text>
                  </View>
                  <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>{item.rating.toFixed(1)} ★</Text>
                  </View>
                </View>
                <Text style={styles.reviewText}>{item.content}</Text>
                {item.images && item.images.length > 0 && (
                  <View style={styles.reviewImagesContainer}>
                    {item.images.map((image, index) => (
                      <Image key={index} source={{ uri: image }} style={styles.reviewImage} />
                    ))}
                  </View>
                )}
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No reviews yet</Text>
              </View>
            }
          />
        );
      case 'posts':
        return (
          <FlatList
            data={userProfile.posts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.postCard}
                onPress={() => router.push(`/forum-post/${item.id}`)}
              >
                <Text style={styles.postTitle}>{item.title}</Text>
                <Text style={styles.postExcerpt} numberOfLines={2}>{item.content}</Text>
                <View style={styles.postFooter}>
                  <Text style={styles.postDate}>{item.date}</Text>
                  <View style={styles.postStats}>
                    <View style={styles.postStat}>
                      <MessageSquare size={14} color="#666" />
                      <Text style={styles.postStatText}>{item.comments}</Text>
                    </View>
                    <View style={styles.postStat}>
                      <Star size={14} color="#666" />
                      <Text style={styles.postStatText}>{item.likes}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No posts yet</Text>
              </View>
            }
          />
        );
      case 'saved':
        return (
          <FlatList
            data={userProfile.saved}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.savedCard}
                onPress={() => router.push(`/stall/${item.id}`)}
              >
                <Image source={{ uri: item.imageUrl }} style={styles.savedImage} />
                <View style={styles.savedContent}>
                  <Text style={styles.savedName}>{item.name}</Text>
                  <Text style={styles.savedLocation}>{item.location}</Text>
                  <View style={styles.savedFooter}>
                    <View style={styles.ratingSmall}>
                      <Text style={styles.ratingSmallText}>{item.rating.toFixed(1)} ★</Text>
                    </View>
                    <Text style={styles.savedCuisine}>{item.cuisine}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No saved stalls yet</Text>
              </View>
            }
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerActions}>
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => router.push('/settings')}
          >
            <Settings size={22} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => router.push('/edit-profile')}
          >
            <Edit size={22} color="#333" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.profileInfo}>
          <Image source={{ uri: userProfile.avatar }} style={styles.avatar} />
          <Text style={styles.username}>{userProfile.name}</Text>
          <Text style={styles.bio}>{userProfile.bio}</Text>
          
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{userProfile.reviews.length}</Text>
              <Text style={styles.statLabel}>Reviews</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{userProfile.posts.length}</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{userProfile.saved.length}</Text>
              <Text style={styles.statLabel}>Saved</Text>
            </View>
          </View>
        </View>
      </View>
      
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'reviews' && styles.activeTab]}
          onPress={() => setActiveTab('reviews')}
        >
          <Star size={20} color={activeTab === 'reviews' ? '#FF6B35' : '#666'} />
          <Text style={[styles.tabText, activeTab === 'reviews' && styles.activeTabText]}>
            Reviews
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'posts' && styles.activeTab]}
          onPress={() => setActiveTab('posts')}
        >
          <MessageSquare size={20} color={activeTab === 'posts' ? '#FF6B35' : '#666'} />
          <Text style={[styles.tabText, activeTab === 'posts' && styles.activeTabText]}>
            Posts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'saved' && styles.activeTab]}
          onPress={() => setActiveTab('saved')}
        >
          <Bookmark size={20} color={activeTab === 'saved' ? '#FF6B35' : '#666'} />
          <Text style={[styles.tabText, activeTab === 'saved' && styles.activeTabText]}>
            Saved
          </Text>
        </TouchableOpacity>
      </View>
      
      {renderTabContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#fff',
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  profileInfo: {
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  username: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  bio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 32,
    marginBottom: 16,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  statItem: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  statDivider: {
    width: 1,
    height: 24,
    backgroundColor: '#eee',
  },
  tabContainer: {
    flexuration: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF6B35',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
    marginLeft: 4,
  },
  activeTabText: {
    color: '#FF6B35',
    fontWeight: '600',
  },
  listContent: {
    padding: 16,
    paddingBottom: 80,
  },
  reviewCard: {
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
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  stallImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 12,
  },
  stallName: {
    fontSize: 14,
    fontWeight: '600',
  },
  reviewDate: {
    fontSize: 12,
    color: '#666',
  },
  ratingContainer: {
    marginLeft: 'auto',
    backgroundColor: '#FFE0D0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FF6B35',
  },
  reviewText: {
    fontSize: 14,
    color: '#444',
    marginBottom: 12,
  },
  reviewImagesContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  reviewImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 8,
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
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
  },
  postDate: {
    fontSize: 12,
    color: '#666',
  },
  postStats: {
    flexDirection: 'row',
  },
  postStat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  postStatText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#666',
  },
  savedCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  savedImage: {
    width: 100,
    height: 100,
  },
  savedContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  savedName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  savedLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  savedFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingSmall: {
    backgroundColor: '#FFE0D0',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    marginRight: 8,
  },
  ratingSmallText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FF6B35',
  },
  savedCuisine: {
    fontSize: 12,
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
});
