// // //movies api fetching in card

// // import { useState } from 'react';
// // function Movie() {

// //     const [movie, setMovie] = useState([]);
// //     // const [details,setDetails]= useState("");

// //     const movieInfo = async () => {
// //         const res = await fetch(`https://jsonfakery.com/movies/random`);
// //         const data = res.json();
// //         setMovie(data);
// //         // console.log(data);

// //         movieInfo();
// //     }


// //       function getMovie() {
// //     e.preventDefault();

// //     fetch(
// //       `https://jsonfakery.com/movies/random`
// //     )
// //       .then((res) => res.json())
// //       .then((data) => {
// //         console.log(data);
// //       });
// //   }



// //     return (
// //         <div className='movie-card'>
// //             <div className='card-1'>
// //                 <button onClick={movieInfo}>Fetch Movie </button>
// //                 <h1 onClick={setMovie}>Movie {movie.name}</h1>

// //             </div>

// // </div>
// //     );
// // }
// // export default Movie;




// // TMDB_API_KEY = be6a05e4da655458cee25c98a2f718ae
// // TMDB_ACCESS_TOKEN = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTZhMDVlNGRhNjU1NDU4Y2VlMjVjOThhMmY3MThhZSIsIm5iZiI6MTc2Mjg5MTczMy4zNjcsInN1YiI6IjY5MTM5N2Q1OWNkZWFjNTUzNDg3NWI1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gF - 2ggJ2NdEafUfYo7AgEJpdp4zOnhbZgqkiaeQOjrI

// // import { useState } from 'react';
// import { useState } from "react";
// import './movie.css';

// function Movie() {
//     const [movie, setMovie] = useState([]);

//     // Simple fetch function 
//     const movieInfo = async () => {
//         const res = await fetch("https://jsonfakery.com/movies/random/10");
//         const data = await res.json();
//         setMovie(data);
//     };

//     return (
//         <div className="movie-page">
//             <button className="fetch-btn" onClick={movieInfo}>Fetch Movies</button>

//             <div className="card-list">
//                 {movie.map((m, index) => (
//                     <div className="movie-card" key={index}>
//                         <img src={m.poster_path} alt="movie" />

//                         <div className="movie-info">
//                             <p className="desc">{m.overview}</p>
//                             <h2 className="title">{m.original_title}</h2>

//                             <div className="details">
//                                 <span>{m.release_date}</span>
//                                 <span>★ {m.vote_average}</span>
//                                 <span>{m.original_language}</span>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Movie;