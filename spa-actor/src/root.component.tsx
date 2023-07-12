import { useEffect, useState } from "react";
import "./style.css";

export default function Root() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = "dfd7dd6b67f7d78975c8f4a101d76eec";
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${currentPage}`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error al obtener la lista de películas:", error);
      }
    };

    fetchMovies();
  }, [currentPage]);

  const loadMoreMovies = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };

  const loadLessMovies = () => {
    setCurrentPage((prevPage) =>{
      console.log(prevPage)
      if (prevPage > 1){
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        return prevPage - 1

      }
      return prevPage
    })

  }
 

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id}>
            <my-card
              name={movie.title}
              img={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            ></my-card>
          </li>
        ))}
      </ul>
      <div className="button-container">
        <my-btn onClick={loadLessMovies} text="Cargar Menos"></my-btn>
        <my-btn onClick={loadMoreMovies} text="Cargar Más"></my-btn>
      </div>
    </div>
  );
}
