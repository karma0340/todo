// import {useState, useEffect} from 'react';

// function Prac() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         console.log("hyy", count);
//     }, [count]);

//     return (
//         <div className="prac-container">
            
//             <h1>Count: {count}</h1>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//         </div>
//     );
// }

// export default Prac;


// async function getP() {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         if (response.ok) {
//             const data = await response.json(); 
//             console.log(data);
//         } else {
//             throw new Error('Failed to fetch data');
//         }
//     } catch (error) {
//         console.error('Error:', error); 
//     }
// }
// getP()
// import {useState} from 'react';
// import './Prac.css';


// function Prac(){
//     const [formData, setFormData] = useState({
//         email:'',
//         password:''
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);
//     };
    
//     const handleChange = (e) => {
//         const {name, value} = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };



//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>Email:</label>
//                 <input type="email" name="email" value={formData.email} onChange={handleChange} />
//                 <label>Password:</label>
//                 <input type="password" name="password" value={formData.password} onChange={handleChange}     />
//                 <button type="submit">Submit</button>
//                 </form>
//             </div>
//     );
// }
// export default Prac;


// import {useRef} from 'react';
// import './Prac.css';

// function Prac() {
//     const email=useRef(null);
//     const password=useRef(null);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Email:", email.current);
//         console.log("Password:", password.current);
//     };
//     return(
//             <div>
//             <form onSubmit={handleSubmit}>
//                 <label>Email:</label>
//                 <input type="email" name="email" ref={email} />
//                 <label>Password:</label>
//                 <input type="password" name="password" ref={password}/>
//                 <button type="submit">Submit</button>
//                 </form>
//             </div>
//     );
// }
// export default Prac;


import { useContext } from 'react';
import { GlobalContext } from './Global.jsx';


import './Prac.css';
function Prac() {
   
    
    const movies=useContext(GlobalContext);


    



return(

    movies.map((movies)=>(
        <div className="movie-card" key={movies.name}>
            <h3 className="movie-name">{movies.name}</h3>
            <p className="movie-rating">Rating: {movies.rating}</p>
            <p className="movie-price">Price: {movies.price}</p>
        </div>
    ))



);
}
export default Prac;

