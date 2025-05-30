
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Film } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const isActive = (path: string) => location.pathname === path;

  const handleGetStarted = () => {
    toast({
      title: "Welcome to CineAI!",
      description: "Let's find your perfect movie recommendations...",
    });
    navigate("/recommendations");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
            <Film className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              CineAI
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-white hover:text-purple-400 transition-colors duration-200 ${
                isActive('/') ? 'text-purple-400 font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/movies" 
              className={`text-white hover:text-purple-400 transition-colors duration-200 ${
                isActive('/movies') ? 'text-purple-400 font-semibold' : ''
              }`}
            >
              Movies
            </Link>
            <Link 
              to="/recommendations" 
              className={`text-white hover:text-purple-400 transition-colors duration-200 ${
                isActive('/recommendations') ? 'text-purple-400 font-semibold' : ''
              }`}
            >
              Recommendations
            </Link>
            <Link 
              to="/watchlist" 
              className={`text-white hover:text-purple-400 transition-colors duration-200 ${
                isActive('/watchlist') ? 'text-purple-400 font-semibold' : ''
              }`}
            >
              Watchlist
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button 
                variant="outline" 
                size="sm"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-200"
              >
                Sign In
              </Button>
            </Link>
            <Button 
              size="sm"
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 transition-all duration-200 hover:scale-105"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
