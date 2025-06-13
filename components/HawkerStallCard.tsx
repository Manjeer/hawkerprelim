import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Star, MapPin } from 'lucide-react-native';

interface HawkerStallCardProps {
  stall: {
    id: number;
    name: string;
    location: string;
    cuisine: string;
    rating: number;
    imageUrl: string;
    distance?: string;
    isOpen?: boolean;
  };
  onPress: () => void;
}

export const HawkerStallCard: React.FC<HawkerStallCardProps> = ({ stall, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: stall.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{stall.name}</Text>
        <View style={styles.locationContainer}>
          <MapPin size={14} color="#666" />
          <Text style={styles.location}>{stall.location}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.ratingContainer}>
            <Star size={14} color="#FF6B35" fill="#FF6B35" />
            <Text style={styles.rating}>{stall.rating.toFixed(1)}</Text>
          </View>
          <Text style={styles.cuisine}>{stall.cuisine}</Text>
          {stall.distance && (
            <Text style={styles.distance}>{stall.distance}</Text>
          )}
        </View>
        {stall.isOpen !== undefined && (
          <View style={[styles.statusBadge, stall.isOpen ? styles.openBadge : styles.closedBadge]}>
            <Text style={[styles.statusText, stall.isOpen ? styles.openText : styles.closedText]}>
              {stall.isOpen ? 'Open' : 'Closed'}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
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
  image: {
    width: 100,
    height: 100,
  },
  content: {
    flex: 1,
    padding: 12,
    position: 'relative',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  rating: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FF6B35',
    marginLeft: 2,
  },
  cuisine: {
    fontSize: 12,
    color: '#666',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  distance: {
    fontSize: 12,
    color: '#666',
    marginLeft: 'auto',
  },
  statusBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  openBadge: {
    backgroundColor: '#E6F7E6',
  },
  closedBadge: {
    backgroundColor: '#FFEBEB',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  openText: {
    color: '#2E7D32',
  },
  closedText: {
    color: '#C62828',
  },
});
