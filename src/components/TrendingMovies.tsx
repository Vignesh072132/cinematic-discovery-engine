
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { star, play } from "lucide-react";

const TrendingMovies = () => {
  const trendingMovies = [
    { title: "Dune: Part Two", rating: 8.9, trend: "+12%" },
    { title: "Oppenheimer", rating: 8.4, trend: "+8%" },
    { title: "Spider-Man: No Way Home", rating: 8.2, trend: "+15%" },
    { title: "Top Gun: Maverick", rating: 8.3, trend: "+10%" },
    { title: "The Batman", rating: 7.8, trend: "+6%" }
  ];

  return (
    <section className="py-16 px-6 bg-black/20">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Trending Now</h2>
            <p className="text-gray-400 text-lg">Most popular movies this week</p>
          </div>
          <Button 
            variant="outline" 
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-200"
          >
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {trendingMovies.map((movie, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-purple-400">#{index + 1}</span>
                <Badge className="bg-green-600/20 text-green-400 border-green-500/30">
                  {movie.trend}
                </Badge>
              </div>
              
              <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors">
                {movie.title}
              </h3>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-yellow-400">
                  <star className="h-4 w-4 fill-current" />
                  <span className="ml-1 text-sm font-medium">{movie.rating}</span>
                </div>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-purple-600 hover:text-white"
                >
                  <play className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingMovies;
