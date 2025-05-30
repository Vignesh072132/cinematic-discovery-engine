
import Navigation from "@/components/Navigation";
import MovieCard from "@/components/MovieCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { star } from "lucide-react";

const Recommendations = () => {
  const recommendedMovies = [
    {
      title: "The Matrix",
      year: 1999,
      genre: ["Action", "Sci-Fi"],
      rating: 8.7,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A computer programmer discovers reality is a simulation and joins a rebellion against machines."
    },
    {
      title: "Blade Runner",
      year: 1982,
      genre: ["Sci-Fi", "Thriller"],
      rating: 8.1,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A blade runner must pursue and terminate four replicants who stole a ship and returned to Earth."
    },
    {
      title: "Alien",
      year: 1979,
      genre: ["Horror", "Sci-Fi"],
      rating: 8.5,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "The crew of a commercial spacecraft encounters a deadly alien creature during their journey home."
    },
    {
      title: "Minority Report",
      year: 2002,
      genre: ["Action", "Sci-Fi"],
      rating: 7.6,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "In the future, a police officer is accused of a crime he has not yet committed."
    }
  ];

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
                <star className="h-3 w-3 mr-1 fill-current" />
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
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 transition-all duration-300 hover:scale-105"
            >
              Load More Recommendations
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
