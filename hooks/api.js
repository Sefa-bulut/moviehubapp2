export const fetchMovies = async (page = 1) => {
  try {
    const response = await fetch(`https://jsonfakery.com/movies/paginated?page=${page}`);
    const json = await response.json();

    // API'den gelen veriyi doğru şekilde eşleştir
    const movies = json.data.map(movie => ({
      id: movie.id,
      title: movie.original_title,
      director: "Unknown", // API'de yönetmen bilgisi yoksa
      year: movie.release_date ? movie.release_date.split("/")[2] : "Unknown",
      poster: movie.poster_path,
      rating: movie.vote_average,
      genre: ["Unknown"], // API'de tür bilgisi yoksa placeholder ekledik
      description: movie.overview
    }));

    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
