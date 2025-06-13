import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { cuisineTypes } from '@/data/cuisineTypes';
import { hawkerStalls } from '@/data/hawkerStalls';
import { HawkerStallCard } from '@/components/HawkerStallCard';

export default function CuisineDetailScreen() {
  const { id } = useLocalSearchParams();
  const cuisineId = typeof id === 'string' ? parseInt(id) : 1;
  const router = useRouter();
  
  const cuisine = cuisineTypes.find(c => c.id === cuisineId) || cuisineTypes[0];
  const stallsOfCuisine = hawkerStalls.filter(stall => stall.cuisine === cuisine.name);
  
  return (
    <>
      <Stack.Screen 
        options={{
          headerTitle: '',
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <ChevronLeft size={24} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: cuisine.imageUrl }} style={styles.coverImage} />
          <View style={styles.overlay} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{cuisine.name} Cuisine</Text>
            <Text style={styles.subtitle}>{cuisine.stallCount} stalls in Singapore</Text>
          </View>
        </View>
        
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>About {cuisine.name} Cuisine</Text>
          <Text style={styles.description}>{cuisine.description}</Text>
          
          <View style={styles.popularDishesContainer}>
            <Text style={styles.sectionTitle}>Popular Dishes</Text>
            <View style={styles.dishesRow}>
              {cuisine.popularDishes.map((dish, index) => (
                <View key={index} style={styles.dishBadge}>
                  <Text style={styles.dishText}>{dish}</Text>
                </View>
              ))}
            </View>
          </View>
          
          <Text style={styles.sectionTitle}>{cuisine.name} Hawker Stalls</Text>
          {stallsOfCuisine.length > 0 ? (
            stallsOfCuisine.map(stall => (
              <HawkerStallCard 
                key={stall.id}
                stall={stall} 
                onPress={() => router.push(`/stall/${stall.id}`)}
              />
            ))
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No stalls found for this cuisine</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  imageContainer: {
    height: 250,
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    right: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  contentContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
    marginBottom: 24,
  },
  popularDishesContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  dishesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dishBadge: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  dishText: {
    fontSize: 14,
    color: '#444',
  },
  emptyContainer: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});
