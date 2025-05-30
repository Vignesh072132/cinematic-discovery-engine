
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Play } from "lucide-react";
import { useState } from "react";

interface MovieCardProps {
  title: string;
  year: number;
  genre: string[];
  rating: number;
  image: string;
  description: string;
  duration?: string;
  onClick?: () => void;
}

const MovieCard = ({ title, year, genre, rating, image, description, duration, onClick }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
      </div>

      <div className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 ${
        isHovered ? 'bg-black/80' : 'bg-gradient-to-t from-black/80 to-transparent'
      }`}>
        
        {isHovered && (
          <div className="absolute top-4 right-4 animate-fade-in">
            <Button 
              size="sm" 
              className="rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-200"
            >
              <Play className="h-4 w-4" />
            </Button>
          </div>
        )}

        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center text-yellow-400">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
          {duration && (
            <span className="text-gray-400 text-sm">{duration}</span>
          )}
        </div>

        <h3 className="text-white font-bold text-lg mb-1 line-clamp-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-3">{year}</p>

        <div className="flex flex-wrap gap-1 mb-3">
          {genre.slice(0, 2).map((g, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-purple-600/20 text-purple-300 border-purple-500/30 text-xs"
            >
              {g}
            </Badge>
          ))}
        </div>

        {isHovered && (
          <p className="text-gray-300 text-sm line-clamp-3 animate-fade-in">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
