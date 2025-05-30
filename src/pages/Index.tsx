
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedMovies from "@/components/FeaturedMovies";
import TrendingMovies from "@/components/TrendingMovies";
import GenreSelection from "@/components/GenreSelection";
import { useEffect, useState } from "react";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <Navigation />
      <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Hero />
        <FeaturedMovies />
        <TrendingMovies />
        <GenreSelection />
      </div>
    </div>
  );
};

export default Index;
