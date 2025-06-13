import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { hawkerCenters } from '@/data/hawkerCenters';
import { cuisineTypes } from '@/data/cuisineTypes';

export default function ExploreScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('hawkerCenters');

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'hawkerCenters' && styles.activeTab]}
          onPress={() => setActiveTab('hawkerCenters')}
        >
          <Text style={[styles.tabText, activeTab === 'hawkerCenters' && styles.activeTabText]}>
            Hawker Centers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'cuisines' && styles.activeTab]}
          onPress={() => setActiveTab('cuisines')}
        >
          <Text style={[styles.tabText, activeTab === 'cuisines' && styles.activeTabText]}>
            Cuisines
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {activeTab === 'hawkerCenters' ? (
          <View style={styles.gridContainer}>
            {hawkerCenters.map((center) => (
              <TouchableOpacity 
                key={center.id} 
                style={styles.card}
                onPress={() => router.push(`/hawker-center/${center.id}`)}
              >
                <Image source={{ uri: center.imageUrl }} style={styles.cardImage} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{center.name}</Text>
                  <Text style={styles.cardSubtitle}>{center.stallCount} stalls</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={styles.gridContainer}>
            {cuisineTypes.map((cuisine) => (
              <TouchableOpacity 
                key={cuisine.id} 
                style={styles.card}
                onPress={() => router.push(`/cuisine/${cuisine.id}`)}
              >
                <Image source={{ uri: cuisine.imageUrl }} style={styles.cardImage} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{cuisine.name}</Text>
                  <Text style={styles.cardSubtitle}>{cuisine.stallCount} stalls</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
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
  scrollContent: {
    padding: 16,
    paddingBottom: 80,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: 120,
  },
  cardContent: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#666',
  },
});
