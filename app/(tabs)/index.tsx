import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import { useRouter } from 'expo-router';
import { Search } from 'lucide-react-native';
import { hawkerStalls } from '@/data/hawkerStalls';
import { HawkerStallCard } from '@/components/HawkerStallCard';
import { SearchBar } from '@/components/SearchBar';

export default function HomeScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStalls, setFilteredStalls] = useState(hawkerStalls);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredStalls(hawkerStalls);
    } else {
      const lowercaseQuery = searchQuery.toLowerCase();
      const filtered = hawkerStalls.filter(
        stall => 
          stall.name.toLowerCase().includes(lowercaseQuery) ||
          stall.location.toLowerCase().includes(lowercaseQuery) ||
          stall.cuisine.toLowerCase().includes(lowercaseQuery)
      );
      setFilteredStalls(filtered);
    }
  }, [searchQuery]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Simulate fetching data
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  const renderFeaturedStalls = () => {
    const featuredStalls = hawkerStalls.filter(stall => stall.featured);
    
    return (
      <View style={styles.featuredContainer}>
        <Text style={styles.sectionTitle}>Featured Hawker Stalls</Text>
        <FlatList
          horizontal
          data={featuredStalls}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.featuredItem}
              onPress={() => router.push(`/stall/${item.id}`)}
            >
              <Image source={{ uri: item.imageUrl }} style={styles.featuredImage} />
              <View style={styles.featuredOverlay}>
                <Text style={styles.featuredName}>{item.name}</Text>
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingText}>{item.rating.toFixed(1)} ★</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar 
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search hawker stalls..."
      />
      
      <FlatList
        data={filteredStalls}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <HawkerStallCard 
            stall={item} 
            onPress={() => router.push(`/stall/${item.id}`)}
          />
        )}
        ListHeaderComponent={renderFeaturedStalls}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No hawker stalls found</Text>
          </View>
        }
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  listContent: {
    padding: 16,
    paddingBottom: 80,
  },
  featuredContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    color: '#333',
  },
  featuredItem: {
    width: 280,
    height: 180,
    borderRadius: 12,
    marginRight: 16,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 12,
  },
  featuredName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  ratingContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  ratingText: {
    color: 'white',
    fontWeight: '600',
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
