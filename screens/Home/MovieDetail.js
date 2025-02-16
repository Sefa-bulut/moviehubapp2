import React from 'react';
import { View, Text, Image, Button, Share, Alert, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../../redux/store';

export const MovieDetail = ({ route }) => {
  const { movie } = route.params;
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.movies.favorites);
  const isFavorite = favorites.some(fav => fav.id === movie.id);

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `🎬 İzlemelisin: ${movie.title} (${movie.year})`,
      });

      if (result.action === Share.sharedAction) {
        Alert.alert("Paylaşıldı!");
      } else if (result.action === Share.dismissedAction) {
        Alert.alert("Paylaşım iptal edildi.");
      }
    } catch (error) {
      console.error("Paylaşım hatası:", error);
    }
  };

  const handleAddFavorite = () => {
    dispatch(addFavorite(movie));
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.poster }} style={{ width: '100%', height: 300 }} />
      <Text style={styles.title} >{movie.title} ({movie.year})</Text>
      <Text style={styles.director} >Director: {movie.director}</Text>
      <Text style={styles.description} numberOfLines={5} >{movie.description}</Text>
      <Button 
      style={styles.button}
      title={isFavorite ? "Favorileri Eklendi" : "Favorileri Ekle"} 
      onPress={isFavorite ? null : handleAddFavorite}
      disabled={isFavorite} />
      <View style={{ flex: 1, marginHorizontal: 5 }}>
          <Button title="📢 Filmi Paylaş" onPress={handleShare} color="#1DB954" />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  poster: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  director: {
    fontSize: 16,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: "justify",
    marginBottom: 20,
  },
});