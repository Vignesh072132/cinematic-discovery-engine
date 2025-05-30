
import MovieCard from "./MovieCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const FeaturedMovies = () => {
  const [selectedMovie, setSelectedMovie] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

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

  const handleAddToWatchlist = (movie: any) => {
    toast({
      title: "Added to Watchlist!",
      description: `${movie.title} has been added to your watchlist.`,
    });
    closeModal();
    navigate("/watchlist");
  };

  const handleWatchTrailer = (movie: any) => {
    toast({
      title: "Loading Trailer",
      description: `Opening trailer for ${movie.title}...`,
    });
    navigate("/movies");
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

      {/* Movie Details Modal */}
      {selectedMovie && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={closeModal}>
          <div 
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in border border-purple-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedMovie.image} 
                alt={selectedMovie.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent rounded-t-2xl" />
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-1">
                  <h2 className="text-4xl font-bold text-white mb-2">{selectedMovie.title}</h2>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-gray-400">{selectedMovie.year}</span>
                    <span className="text-gray-400">{selectedMovie.duration}</span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="h-5 w-5 fill-current" />
                      <span className="ml-1 font-medium">{selectedMovie.rating}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedMovie.genre.map((g: string, index: number) => (
                      <Badge 
                        key={index} 
                        className="bg-purple-600/20 text-purple-300 border-purple-500/30"
                      >
                        {g}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Plot</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedMovie.plot}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Details</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="text-purple-400 font-medium">Director: </span>
                      <span className="text-gray-300">{selectedMovie.director}</span>
                    </div>
                    <div>
                      <span className="text-purple-400 font-medium">Cast: </span>
                      <span className="text-gray-300">{selectedMovie.cast.join(", ")}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  size="lg"
                  onClick={() => handleAddToWatchlist(selectedMovie)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 transition-all duration-300 hover:scale-105"
                >
                  Add to Watchlist
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => handleWatchTrailer(selectedMovie)}
                  className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  Watch Trailer
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedMovies;
