import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThumbsUp, MessageCircle } from 'lucide-react-native';

interface ReviewCardProps {
  review: {
    id: number;
    author: {
      id: number;
      name: string;
      avatar: string;
    };
    rating: number;
    content: string;
    date: string;
    likes: number;
    replies: number;
    images?: string[];
  };
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: review.author.avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.authorName}>{review.author.name}</Text>
          <Text style={styles.date}>{review.date}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{review.rating.toFixed(1)} ★</Text>
        </View>
      </View>
      
      <Text style={styles.content}>{review.content}</Text>
      
      {review.images && review.images.length > 0 && (
        <View style={styles.imagesContainer}>
          {review.images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          ))}
        </View>
      )}
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.actionButton}>
          <ThumbsUp size={18} color="#666" />
          <Text style={styles.actionText}>Helpful ({review.likes})</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MessageCircle size={18} color="#666" />
          <Text style={styles.actionText}>Reply ({review.replies})</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  authorName: {
    fontSize: 16,
    fontWeight: '600',
  },
  date: {
    fontSize: 14,
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
    fontSize: 14,
    fontWeight: '600',
    color: '#FF6B35',
  },
  content: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 12,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  actionText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
});
