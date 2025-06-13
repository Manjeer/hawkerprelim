import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { ChevronLeft, Camera, X } from 'lucide-react-native';

export default function NewPostScreen() {
  const router = useRouter();
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  
  const categories = [
    { id: 'recommendations', name: 'Recommendations' },
    { id: 'questions', name: 'Questions' },
    { id: 'discussions', name: 'Discussions' },
  ];
  
  const handleAddImage = () => {
    // In a real app, this would open the camera or image picker
    // For this demo, we'll add a placeholder image
    setImage('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg');
  };
  
  const handleRemoveImage = () => {
    setImage(null);
  };
  
  const handleSubmit = () => {
    // In a real app, this would send the post to the server
    router.back();
  };

  return (
    <>
      <Stack.Screen 
        options={{
          headerTitle: 'Create New Post',
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
        <Text style={styles.sectionTitle}>Select a category</Text>
        <View style={styles.categoriesContainer}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={[
                styles.categoryButton,
                category === cat.id && styles.categoryButtonActive
              ]}
              onPress={() => setCategory(cat.id)}
            >
              <Text 
                style={[
                  styles.categoryButtonText,
                  category === cat.id && styles.categoryButtonTextActive
                ]}
              >
                {cat.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <Text style={styles.sectionTitle}>Title</Text>
        <TextInput
          style={styles.titleInput}
          placeholder="Write a descriptive title"
          value={title}
          onChangeText={setTitle}
        />
        
        <Text style={styles.sectionTitle}>Content</Text>
        <TextInput
          style={styles.contentInput}
          placeholder="Share your thoughts, questions, or recommendations..."
          value={content}
          onChangeText={setContent}
          multiline
          textAlignVertical="top"
        />
        
        <Text style={styles.sectionTitle}>Add a photo (optional)</Text>
        {image ? (
          <View style={styles.imageWrapper}>
            <Image source={{ uri: image }} style={styles.postImage} />
            <TouchableOpacity
              style={styles.removeImageButton}
              onPress={handleRemoveImage}
            >
              <X size={16} color="#fff" />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.addImageButton} onPress={handleAddImage}>
            <Camera size={24} color="#666" />
            <Text style={styles.addImageText}>Add Photo</Text>
          </TouchableOpacity>
        )}
        
        <TouchableOpacity 
          style={[
            styles.submitButton,
            (title.trim() === '' || content.trim() === '' || category === '') && styles.submitButtonDisabled
          ]}
          onPress={handleSubmit}
          disabled={title.trim() === '' || content.trim() === '' || category === ''}
        >
          <Text style={styles.submitButtonText}>Post</Text>
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 24,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
    marginBottom: 8,
  },
  categoryButtonActive: {
    backgroundColor: '#FF6B35',
  },
  categoryButtonText: {
    fontSize: 14,
    color: '#666',
  },
  categoryButtonTextActive: {
    color: '#fff',
    fontWeight: '500',
  },
  titleInput: {
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
  contentInput: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    height: 200,
    marginBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 24,
    overflow: 'hidden',
  },
  postImage: {
    width: '100%',
    height: '100%',
  },
  removeImageButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addImageButton: {
    height: 120,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    marginBottom: 24,
  },
  addImageText: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
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
