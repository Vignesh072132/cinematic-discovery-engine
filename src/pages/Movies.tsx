
import Navigation from "@/components/Navigation";
import MovieCard from "@/components/MovieCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const Movies = () => {
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");

  const allMovies = [
    {
      title: "The Shawshank Redemption",
      year: 1994,
      genre: ["Drama"],
      rating: 9.3,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Two imprisoned men bond over years, finding solace and redemption through acts of common decency."
    },
    {
      title: "The Godfather",
      year: 1972,
      genre: ["Crime", "Drama"],
      rating: 9.2,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "The aging patriarch transfers control of his empire to his reluctant son."
    },
    {
      title: "Pulp Fiction",
      year: 1994,
      genre: ["Crime", "Drama"],
      rating: 8.9,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "The lives of two mob hitmen, a boxer, and others intertwine in four tales of violence."
    },
    {
      title: "The Dark Knight",
      year: 2008,
      genre: ["Action", "Crime"],
      rating: 9.0,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into anarchy."
    },
    {
      title: "Forrest Gump",
      year: 1994,
      genre: ["Drama", "Romance"],
      rating: 8.8,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "The story of a man with a low IQ who accomplishes great things in his life."
    },
    {
      title: "Inception",
      year: 2010,
      genre: ["Action", "Sci-Fi"],
      rating: 8.8,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A thief who steals secrets through dream-sharing technology is given a final job."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold text-white mb-4">Browse Movies</h1>
            <p className="text-gray-400 text-lg">
              Discover thousands of movies across all genres
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 p-6 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Genre" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="all">All Genres</SelectItem>
                  <SelectItem value="action">Action</SelectItem>
                  <SelectItem value="drama">Drama</SelectItem>
                  <SelectItem value="sci-fi">Sci-Fi</SelectItem>
                  <SelectItem value="crime">Crime</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="all">All Years</SelectItem>
                  <SelectItem value="2020s">2020s</SelectItem>
                  <SelectItem value="2010s">2010s</SelectItem>
                  <SelectItem value="2000s">2000s</SelectItem>
                  <SelectItem value="1990s">1990s</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="year">Year</SelectItem>
                  <SelectItem value="title">Title</SelectItem>
                </SelectContent>
              </Select>

              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 transition-all duration-300 hover:scale-105"
              >
                Apply Filters
              </Button>
            </div>
          </div>

          {/* Movies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {allMovies.map((movie, index) => (
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
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Load More Movies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
