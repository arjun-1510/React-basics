import React from 'react';
import ReactDOM from 'react-dom';
import ReactStars from "react-rating-stars-component";
import './index.css';
  
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return(
    <article>
      <Image />
      <Title />
      <Author />
      <Rating />
      <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />,
    </article>
  )
}

const Image = () => (
     <img src='https://m.media-amazon.com/images/I/81lr6LSKvKS._AC_UY327_FMwebp_QL65_.jpg' alt="" />
);

const Title = () => (
  <h1>This is best book</h1>
)

   const Author = () => (
     <h4>Amelia Arjun</h4>
   )


   const Rating = () => (
    <h4>Rating Stars</h4>
  )
   const ratingChanged = (newRating) => {
    console.log(newRating);
  };
   

ReactDOM.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>,
  document.getElementById('root')
);

