import MovieCard from "./MovieCard";
import { useState } from "react";

const FeaturedMovies = () => {
  const [selectedMovie, setSelectedMovie] = useState<any>(null);

  const featuredMovies = [
    {
      id: 1,
      title: "The Matrix Reloaded",
      year: 2003,
      genre: ["Action", "Sci-Fi"],
      rating: 7.2,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Neo and his allies race against time as the machines discover Zion and threaten to destroy it.",
      duration: "138 min",
      director: "The Wachowskis",
      cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      plot: "Neo and the rebel leaders estimate that they have 72 hours until 250,000 probes discover Zion and destroy it and its inhabitants. During this, Neo must decide how he can save Trinity from a dark fate in his dreams."
    },
    {
      id: 2,
      title: "Inception",
      year: 2010,
      genre: ["Thriller", "Sci-Fi"],
      rating: 8.8,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task.",
      duration: "148 min",
      director: "Christopher Nolan",
      cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy"],
      plot: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state."
    },
    {
      id: 3,
      title: "Interstellar",
      year: 2014,
      genre: ["Drama", "Sci-Fi"],
      rating: 8.6,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      duration: "169 min",
      director: "Christopher Nolan",
      cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival when Earth becomes uninhabitable."
    },
    {
      id: 4,
      title: "Blade Runner 2049",
      year: 2017,
      genre: ["Action", "Drama"],
      rating: 8.0,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A young blade runner discovers a secret that could plunge what's left of society into chaos.",
      duration: "164 min",
      director: "Denis Villeneuve",
      cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"],
      plot: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years."
    }
  ];

  const handleMovieClick = (movie: any) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">
              Featured Movies
            </h2>
            <p className="text-gray-400 text-lg animate-fade-in">
              Handpicked recommendations based on your preferences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMovies.map((movie, index) => (
              <div 
                key={movie.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MovieCard {...movie} onClick={() => handleMovieClick(movie)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Movie Details Modal - same as in Recommendations.tsx */}
      {selectedMovie && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={closeModal}>
          {/* ... keep existing code (modal content same as Recommendations) */}
        </div>
      )}
    </>
  );
};

export default FeaturedMovies;
