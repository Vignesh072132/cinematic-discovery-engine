
import Navigation from "@/components/Navigation";
import MovieCard from "@/components/MovieCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Watchlist = () => {
  const watchlistMovies = [
    {
      title: "Dune",
      year: 2021,
      genre: ["Adventure", "Drama"],
      rating: 8.0,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset."
    },
    {
      title: "No Time to Die",
      year: 2021,
      genre: ["Action", "Adventure"],
      rating: 7.3,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "James Bond has left active service when his friend from the CIA turns up asking for help."
    },
    {
      title: "Spider-Man: No Way Home",
      year: 2021,
      genre: ["Action", "Adventure"],
      rating: 8.2,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Spider-Man seeks help from Doctor Strange when his identity is revealed to the world."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold text-white mb-4">My Watchlist</h1>
            <p className="text-gray-400 text-lg mb-6">
              Movies you've saved to watch later
            </p>
            <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30 text-base px-4 py-2">
              {watchlistMovies.length} movies saved
            </Badge>
          </div>

          {watchlistMovies.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {watchlistMovies.map((movie, index) => (
                  <div 
                    key={index}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <MovieCard {...movie} />
                  </div>
                ))}
              </div>

              <div className="text-center animate-fade-in">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 transition-all duration-300 hover:scale-105 mr-4"
                >
                  Watch Random Movie
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  Clear Watchlist
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-20 animate-fade-in">
              <div className="text-6xl mb-6">🎬</div>
              <h2 className="text-2xl font-bold text-white mb-4">Your watchlist is empty</h2>
              <p className="text-gray-400 mb-8">Start adding movies you want to watch!</p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 transition-all duration-300 hover:scale-105"
              >
                Browse Movies
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
