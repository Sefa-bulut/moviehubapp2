import { useEffect, useState } from 'react';

export default function useFetchMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        console.log("API çağrısı yapılıyor...");
        const response = await fetch('https://jsonfakery.com/movies/paginated');
        if (!response.ok) {
          throw new Error('Veri çekme başarısız!');
        }

        const data = await response.json();
        console.log("API'den gelen veri:", data.movies); // API yanıtını kontrol et

        setMovies(data.movies);
      } catch (error) {
        console.error('Hata:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading };
}
