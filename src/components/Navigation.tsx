
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { film, star, play } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <film className="h-8 w-8 text-purple-400 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              CineAI
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-white hover:text-purple-400 transition-colors duration-200 relative ${
                isActive('/') ? 'text-purple-400' : ''
              }`}
            >
              Home
              {isActive('/') && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400 animate-fade-in" />
              )}
            </Link>
            <Link 
              to="/recommendations" 
              className={`text-white hover:text-purple-400 transition-colors duration-200 relative ${
                isActive('/recommendations') ? 'text-purple-400' : ''
              }`}
            >
              Recommendations
              {isActive('/recommendations') && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400 animate-fade-in" />
              )}
            </Link>
            <Link 
              to="/movies" 
              className={`text-white hover:text-purple-400 transition-colors duration-200 relative ${
                isActive('/movies') ? 'text-purple-400' : ''
              }`}
            >
              Browse Movies
              {isActive('/movies') && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400 animate-fade-in" />
              )}
            </Link>
            <Link 
              to="/watchlist" 
              className={`text-white hover:text-purple-400 transition-colors duration-200 relative ${
                isActive('/watchlist') ? 'text-purple-400' : ''
              }`}
            >
              Watchlist
              {isActive('/watchlist') && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400 animate-fade-in" />
              )}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-purple-400 transition-all duration-200"
            />
            <Button 
              variant="outline" 
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-200 hover:scale-105"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
