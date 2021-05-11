import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';

function App() {
    const [movieName,
        setMovieName] = useState('');
    const [review,
        setReview] = useState('');
    const [movieReviewList,
        setMovieList] = useState([]);

    const [newReview,
        setNewReview] = useState('');

    useEffect(() => {
        Axios
            .get('http://localhost:3001/api/get')
            .then((response) => {
                setMovieList(response.data);
            })
    }, []);

    const submitReview = () => {
        //we call them movieName and movieReview and we pass the 2 states
        Axios.post('http://localhost:3001/api/insert', {
            movieName: movieName,
            movieReview: review
        });
        // update results on page when item is added we push the one that we are
        // submitting
        setMovieList([
            ...movieReviewList, {
                movieName: movieName,
                movieReview: review
            }
        ]);
    }

    const deleteReview = (movie, num) => {
        Axios.delete(`http://localhost:3001/api/delete/${movie}`);
        //remove the deleted item in the state
        let filteredArray = movieReviewList.filter(item => item !== movieReviewList[num]);
        setMovieList(filteredArray);
    }

    const updateReview = (movie, num) => {
        const updated = {
            movieName: movie,
            movieReview: newReview}
        Axios.put('http://localhost:3001/api/update', updated);
        setNewReview('');
        //change the updated item
        let filteredArray = movieReviewList.map(item => {
            return item !== movieReviewList[num]?item:updated
        });
        setMovieList(filteredArray);
    }

    return (
        <div className="App">
            <h1>CRUD APPLICATION</h1>
            <div className="form">
                <label>Movie Name</label>
                <input
                    type="text"
                    name="movieName"
                    onChange={(e) => {
                    setMovieName(e.target.value);
                }}/>
                <label>Review</label>
                <input
                    type="text"
                    name="review"
                    onChange={(e) => {
                    setReview(e.target.value);
                }}/>
                <button onClick={submitReview}>Submit</button>

                {movieReviewList.map((value, index) => {
                    return (
                        <div className="card" key={index}>
                            <h1>{value.movieName}</h1>
                            <p>{value.movieReview}</p>
                            <button
                                onClick={() => {
                                deleteReview(value.movieName, index)
                            }}>Delete</button>
                            <input
                                type="text"
                                id="updateInput"
                                onChange={(e) => {
                                setNewReview(e.target.value);
                            }}/>
                            <button
                                onClick={() => {
                                updateReview(value.movieName, index)
                            }}>Update</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default App;
