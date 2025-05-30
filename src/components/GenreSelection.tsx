
import { Button } from "@/components/ui/button";
import { useState } from "react";

const GenreSelection = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const genres = [
    "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror",
    "Mystery", "Romance", "Sci-Fi", "Thriller", "Animation", "Crime"
  ];

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre) 
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Customize Your Experience</h2>
          <p className="text-gray-400 text-lg mb-8">
            Select your favorite genres to get better recommendations
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {genres.map((genre, index) => (
            <Button
              key={genre}
              variant={selectedGenres.includes(genre) ? "default" : "outline"}
              className={`transition-all duration-200 hover:scale-105 animate-fade-in ${
                selectedGenres.includes(genre)
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => toggleGenre(genre)}
            >
              {genre}
            </Button>
          ))}
        </div>

        {selectedGenres.length > 0 && (
          <div className="text-center animate-fade-in">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 transition-all duration-300 hover:scale-105"
            >
              Get Personalized Recommendations ({selectedGenres.length} genres selected)
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GenreSelection;
