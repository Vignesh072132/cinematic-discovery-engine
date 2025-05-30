
import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleGetRecommendations = () => {
    toast({
      title: "Getting Recommendations",
      description: "Analyzing your preferences to find perfect movie matches...",
    });
    navigate("/recommendations");
  };

  const handleBrowseMovies = () => {
    toast({
      title: "Browse Movies",
      description: "Exploring our vast collection of movies for you...",
    });
    navigate("/movies");
  };

  return (
    <section className="pt-20 pb-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=5760&q=80')"
        }}
      />
      
      <div className="container mx-auto relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Discover Your
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
              Perfect Movie
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in">
            AI-powered recommendations tailored to your taste. Explore thousands of movies 
            with intelligent filtering and personalized suggestions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button 
              size="lg" 
              onClick={handleGetRecommendations}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Play className="mr-2 h-5 w-5" />
              Get Recommendations
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleBrowseMovies}
              className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <Star className="mr-2 h-5 w-5" />
              Browse Movies
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-gray-400">Movies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">AI</div>
              <div className="text-gray-400">Powered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Discovery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
