
import Navigation from "@/components/Navigation";
import MovieCard from "@/components/MovieCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useState } from "react";

const Recommendations = () => {
  const [selectedMovie, setSelectedMovie] = useState<any>(null);

  const recommendedMovies = [
    {
      id: 1,
      title: "The Matrix",
      year: 1999,
      genre: ["Action", "Sci-Fi"],
      rating: 8.7,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A computer programmer discovers reality is a simulation and joins a rebellion against machines.",
      duration: "136 min",
      director: "The Wachowskis",
      cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      plot: "Neo, a computer programmer by day and hacker by night, is contacted by the mysterious Morpheus who reveals that reality as Neo knows it is actually a computer simulation called the Matrix."
    },
    {
      id: 2,
      title: "Blade Runner",
      year: 1982,
      genre: ["Sci-Fi", "Thriller"],
      rating: 8.1,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A blade runner must pursue and terminate four replicants who stole a ship and returned to Earth.",
      duration: "117 min",
      director: "Ridley Scott",
      cast: ["Harrison Ford", "Rutger Hauer", "Sean Young"],
      plot: "In 2019 Los Angeles, former police officer Rick Deckard is hired to hunt down a fugitive group of synthetic humans known as replicants."
    },
    {
      id: 3,
      title: "Alien",
      year: 1979,
      genre: ["Horror", "Sci-Fi"],
      rating: 8.5,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "The crew of a commercial spacecraft encounters a deadly alien creature during their journey home.",
      duration: "117 min",
      director: "Ridley Scott",
      cast: ["Sigourney Weaver", "Tom Skerritt", "John Hurt"],
      plot: "The crew of the commercial space tug Nostromo encounters a deadly alien creature after investigating a mysterious transmission."
    },
    {
      id: 4,
      title: "Minority Report",
      year: 2002,
      genre: ["Action", "Sci-Fi"],
      rating: 7.6,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "In the future, a police officer is accused of a crime he has not yet committed.",
      duration: "145 min",
      director: "Steven Spielberg",
      cast: ["Tom Cruise", "Colin Farrell", "Samantha Morton"],
      plot: "In a future where a special police unit is able to arrest murderers before they commit their crimes, an officer from that unit is accused of a future murder."
    }
  ];

  const handleMovieClick = (movie: any) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold text-white mb-4">Your Recommendations</h1>
            <p className="text-gray-400 text-lg mb-6">
              Based on your viewing history and preferences
            </p>
            <div className="flex justify-center gap-4">
              <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                <Star className="h-3 w-3 mr-1 fill-current" />
                94% Match Rate
              </Badge>
              <Badge className="bg-green-600/20 text-green-400 border-green-500/30">
                Updated Daily
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {recommendedMovies.map((movie, index) => (
              <div 
                key={movie.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MovieCard {...movie} onClick={() => handleMovieClick(movie)} />
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 transition-all duration-300 hover:scale-105"
            >
              Load More Recommendations
            </Button>
          </div>
        </div>
      </div>

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
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 transition-all duration-300 hover:scale-105"
                >
                  Add to Watchlist
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  Watch Trailer
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recommendations;
