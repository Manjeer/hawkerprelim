import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { ChevronLeft, Camera, X, Star as StarIcon } from 'lucide-react-native';
import { hawkerStalls } from '@/data/hawkerStalls';

export default function WriteReviewScreen() {
  const { id } = useLocalSearchParams();
  const stallId = typeof id === 'string' ? parseInt(id) : 1;
  const router = useRouter();
  
  const stall = hawkerStalls.find(s => s.id === stallId) || hawkerStalls[0];
  
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [images, setImages] = useState([]);
  
  const handleAddImage = () => {
    // In a real app, this would open the camera or image picker
    // For this demo, we'll add a placeholder image
    const newImage = `https://images.pexels.com/photos/${5000 + images.length}/pexels-photo-${5000 + images.length}.jpeg`;
    setImages([...images, newImage]);
  };
  
  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };
  
  const handleSubmit = () => {
    // In a real app, this would send the review to the server
    router.back();
  };

  return (
    <>
      <Stack.Screen 
        options={{
          headerTitle: 'Write a Review',
          headerLeft: () => (
            <TouchableOpacity 
              style={styles.headerButton}
              onPress={() => router.back()}
            >
              <ChevronLeft size={24} color="#333" />
            </TouchableOpacity>
          ),
        }}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.stallInfo}>
          <Image source={{ uri: stall.imageUrl }} style={styles.stallImage} />
          <View>
            <Text style={styles.stallName}>{stall.name}</Text>
            <Text style={styles.stallLocation}>{stall.location}</Text>
          </View>
        </View>
        
        <Text style={styles.sectionTitle}>Rate your experience</Text>
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity
              key={star}
              onPress={() => setRating(star)}
              style={styles.starButton}
            >
              <StarIcon
                size={36}
                color="#FF6B35"
                fill={rating >= star ? '#FF6B35' : 'none'}
              />
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.ratingText}>
          {rating === 0 ? 'Tap to rate' : 
           rating === 1 ? 'Poor' :
           rating === 2 ? 'Fair' :
           rating === 3 ? 'Good' :
           rating === 4 ? 'Very Good' : 'Excellent'}
        </Text>
        
        <Text style={styles.sectionTitle}>Share your thoughts</Text>
        <TextInput
          style={styles.reviewInput}
          placeholder="What did you like or dislike about this stall?"
          value={reviewText}
          onChangeText={setReviewText}
          multiline
          textAlignVertical="top"
        />
        
        <Text style={styles.sectionTitle}>Add photos</Text>
        <View style={styles.imagesContainer}>
          {images.map((image, index) => (
            <View key={index} style={styles.imageWrapper}>
              <Image source={{ uri: image }} style={styles.reviewImage} />
              <TouchableOpacity
                style={styles.removeImageButton}
                onPress={() => handleRemoveImage(index)}
              >
                <X size={16} color="#fff" />
              </TouchableOpacity>
            </View>
          ))}
          
          {images.length < 5 && (
            <TouchableOpacity style={styles.addImageButton} onPress={handleAddImage}>
              <Camera size={24} color="#666" />
              <Text style={styles.addImageText}>Add Photo</Text>
            </TouchableOpacity>
          )}
        </View>
        
        <TouchableOpacity 
          style={[
            styles.submitButton,
            (rating === 0 || reviewText.trim() === '') && styles.submitButtonDisabled
          ]}
          onPress={handleSubmit}
          disabled={rating === 0 || reviewText.trim() === ''}
        >
          <Text style={styles.submitButtonText}>Post Review</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stallInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  stallImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  stallName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  stallLocation: {
    fontSize: 14,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
  },
  starButton: {
    padding: 8,
  },
  ratingText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  reviewInput: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    height: 150,
    marginBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 24,
  },
  imageWrapper: {
    position: 'relative',
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 8,
    overflow: 'hidden',
  },
  reviewImage: {
    width: '100%',
    height: '100%',
  },
  removeImageButton: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addImageButton: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'dashed',
  },
  addImageText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  submitButton: {
    backgroundColor: '#FF6B35',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: '#ccc',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
