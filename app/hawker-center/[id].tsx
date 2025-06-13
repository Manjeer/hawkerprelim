import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { ChevronLeft, MapPin, Clock, Info } from 'lucide-react-native';
import { hawkerCenters } from '@/data/hawkerCenters';
import { hawkerStalls } from '@/data/hawkerStalls';
import { HawkerStallCard } from '@/components/HawkerStallCard';

export default function HawkerCenterDetailScreen() {
  const { id } = useLocalSearchParams();
  const centerId = typeof id === 'string' ? parseInt(id) : 1;
  const router = useRouter();
  
  const center = hawkerCenters.find(c => c.id === centerId) || hawkerCenters[0];
  const stallsInCenter = hawkerStalls.filter(stall => stall.location.includes(center.name) || stall.location.includes(center.location));
  
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
          <Image source={{ uri: center.imageUrl }} style={styles.coverImage} />
          <View style={styles.overlay} />
        </View>
        
        <View style={styles.contentContainer}>
          <Text style={styles.name}>{center.name}</Text>
          <Text style={styles.location}>{center.location}, Singapore</Text>
          
          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <MapPin size={18} color="#666" style={styles.infoIcon} />
              <Text style={styles.infoText}>{center.address}</Text>
            </View>
            <View style={styles.infoItem}>
              <Clock size={18} color="#666" style={styles.infoIcon} />
              <Text style={styles.infoText}>{center.openingHours}</Text>
            </View>
            <View style={styles.infoItem}>
              <Info size={18} color="#666" style={styles.infoIcon} />
              <Text style={styles.infoText}>{center.stallCount} food stalls</Text>
            </View>
          </View>
          
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.description}>{center.description}</Text>
          
          <Text style={styles.sectionTitle}>Popular Stalls</Text>
          {stallsInCenter.length > 0 ? (
            stallsInCenter.map(stall => (
              <HawkerStallCard 
                key={stall.id}
                stall={stall} 
                onPress={() => router.push(`/stall/${stall.id}`)}
              />
            ))
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No stalls found for this hawker center</Text>
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
    backgroundColor: 'rgba(0,0,0,0.3)',
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
  name: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  infoContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  infoIcon: {
    marginRight: 12,
    marginTop: 2,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
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
