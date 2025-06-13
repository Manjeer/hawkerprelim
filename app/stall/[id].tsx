import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { Star, MapPin, Clock, ChevronLeft, MessageSquare, Share2, Bookmark, ThumbsUp } from 'lucide-react-native';
import { hawkerStalls } from '@/data/hawkerStalls';
import { reviews } from '@/data/reviews';
import { ReviewCard } from '@/components/ReviewCard';

export default function StallDetailScreen() {
  const { id } = useLocalSearchParams();
  const stallId = typeof id === 'string' ? parseInt(id) : 1;
  const router = useRouter();
  
  const stall = hawkerStalls.find(s => s.id === stallId) || hawkerStalls[0];
  const stallReviews = reviews.filter(review => review.stallId === stallId);
  
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  const renderAboutTab = () => (
    <View style={styles.tabContent}>
      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>{stall.description}</Text>
      
      <Text style={styles.sectionTitle}>Location</Text>
      <View style={styles.locationContainer}>
        <MapPin size={18} color="#666" style={styles.iconMargin} />
        <Text style={styles.locationText}>{stall.fullAddress}</Text>
      </View>
      
      <Text style={styles.sectionTitle}>Opening Hours</Text>
      {stall.openingHours.map((hours, index) => (
        <View key={index} style={styles.hoursContainer}>
          <Text style={styles.dayText}>{hours.day}</Text>
          <Text style={styles.hoursText}>{hours.hours}</Text>
        </View>
      ))}
      
      <Text style={styles.sectionTitle}>Popular Dishes</Text>
      <FlatList
        horizontal
        data={stall.popularDishes}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.dishCard}>
            <Image source={{ uri: item.imageUrl }} style={styles.dishImage} />
            <Text style={styles.dishName}>{item.name}</Text>
            <Text style={styles.dishPrice}>${item.price.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );

  const renderReviewsTab = () => (
    <View style={styles.tabContent}>
      <View style={styles.reviewSummary}>
        <View style={styles.ratingLarge}>
          <Text style={styles.ratingLargeText}>{stall.rating.toFixed(1)}</Text>
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map(star => (
              <Star 
                key={star} 
                size={16} 
                color={star <= Math.round(stall.rating) ? '#FF6B35' : '#ddd'} 
                fill={star <= Math.round(stall.rating) ? '#FF6B35' : 'none'}
              />
            ))}
          </View>
          <Text style={styles.reviewCount}>{stallReviews.length} reviews</Text>
        </View>
        
        <View style={styles.ratingBreakdown}>
          {[5, 4, 3, 2, 1].map(rating => {
            const count = stallReviews.filter(r => Math.round(r.rating) === rating).length;
            const percentage = stallReviews.length > 0 ? (count / stallReviews.length) * 100 : 0;
            
            return (
              <View key={rating} style={styles.ratingRow}>
                <Text style={styles.ratingLabel}>{rating}</Text>
                <View style={styles.ratingBar}>
                  <View 
                    style={[
                      styles.ratingFill, 
                      { width: `${percentage}%` }
                    ]} 
                  />
                </View>
                <Text style={styles.ratingCount}>{count}</Text>
              </View>
            );
          })}
        </View>
      </View>
      
      <TouchableOpacity 
        style={styles.writeReviewButton}
        onPress={() => router.push(`/write-review/${stallId}`)}
      >
        <Text style={styles.writeReviewText}>Write a Review</Text>
      </TouchableOpacity>
      
      {stallReviews.map(review => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </View>
  );

  return (
    <>
      <Stack.Screen 
        options={{
          headerShown: true,
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
          headerRight: () => (
            <View style={styles.headerActions}>
              <TouchableOpacity style={styles.headerButton}>
                <Share2 size={22} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.headerButton}
                onPress={() => setIsSaved(!isSaved)}
              >
                <Bookmark 
                  size={22} 
                  color="#fff" 
                  fill={isSaved ? '#fff' : 'none'} 
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: stall.imageUrl }} style={styles.coverImage} />
          <View style={styles.overlay} />
        </View>
        
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <Text style={styles.name}>{stall.name}</Text>
            <View style={styles.ratingContainer}>
              <Star size={16} color="#FF6B35" fill="#FF6B35" />
              <Text style={styles.rating}>{stall.rating.toFixed(1)}</Text>
              <Text style={styles.reviewCount}>({stallReviews.length})</Text>
            </View>
            <Text style={styles.cuisine}>{stall.cuisine}</Text>
            <Text style={styles.location}>{stall.location}</Text>
          </View>
          
          <View style={styles.quickInfo}>
            <View style={styles.infoItem}>
              <Clock size={18} color="#666" />
              <Text style={styles.infoText}>
                {stall.isOpen ? 'Open Now' : 'Closed'}
              </Text>
            </View>
            <View style={styles.infoItem}>
              <MessageSquare size={18} color="#666" />
              <Text style={styles.infoText}>
                {stallReviews.length} Reviews
              </Text>
            </View>
            <View style={styles.infoItem}>
              <ThumbsUp size={18} color="#666" />
              <Text style={styles.infoText}>
                {stall.recommendationPercentage}% Recommended
              </Text>
            </View>
          </View>
          
          <View style={styles.tabContainer}>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'about' && styles.activeTab]}
              onPress={() => setActiveTab('about')}
            >
              <Text style={[styles.tabText, activeTab === 'about' && styles.activeTabText]}>
                About
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'reviews' && styles.activeTab]}
              onPress={() => setActiveTab('reviews')}
            >
              <Text style={[styles.tabText, activeTab === 'reviews' && styles.activeTabText]}>
                Reviews
              </Text>
            </TouchableOpacity>
          </View>
          
          {activeTab === 'about' ? renderAboutTab() : renderReviewsTab()}
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
  headerActions: {
    flexDirection: 'row',
    marginRight: 16,
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
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
    backgroundColor: 'rgba(0,0,0,0.2)',
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
  header: {
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 4,
    color: '#FF6B35',
  },
  reviewCount: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  cuisine: {
    fontSize: 16,
    color: '#444',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#666',
  },
  quickInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 12,
    marginBottom: 24,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF6B35',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
  activeTabText: {
    color: '#FF6B35',
    fontWeight: '600',
  },
  tabContent: {
    paddingBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
    marginBottom: 16,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  iconMargin: {
    marginRight: 8,
    marginTop: 2,
  },
  locationText: {
    flex: 1,
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
  hoursContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  dayText: {
    fontSize: 14,
    fontWeight: '500',
  },
  hoursText: {
    fontSize: 14,
    color: '#444',
  },
  dishCard: {
    width: 140,
    marginRight: 12,
    marginBottom: 16,
  },
  dishImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  dishName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  dishPrice: {
    fontSize: 14,
    color: '#FF6B35',
    fontWeight: '500',
  },
  reviewSummary: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  ratingLarge: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 16,
    borderRightWidth: 1,
    borderRightColor: '#eee',
    width: 100,
  },
  ratingLargeText: {
    fontSize: 36,
    fontWeight: '700',
    color: '#FF6B35',
  },
  starsContainer: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  ratingBreakdown: {
    flex: 1,
    paddingLeft: 16,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  ratingLabel: {
    width: 20,
    fontSize: 12,
    textAlign: 'center',
  },
  ratingBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    marginHorizontal: 8,
  },
  ratingFill: {
    height: '100%',
    backgroundColor: '#FF6B35',
    borderRadius: 4,
  },
  ratingCount: {
    width: 24,
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
  },
  writeReviewButton: {
    backgroundColor: '#FF6B35',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  writeReviewText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
