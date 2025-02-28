import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import axios from 'axios';



function MyHome() {
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the categories!', error);
      });
  }, []);
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
  
    return (
      <div>
        <h1>Le Panier Local</h1>
        <section>
          <article>
            Carroussel
          </article>
        </section>
        <section>
          <article>
          <h2>Vos commerces par catégories :</h2>
          <Slider {...settings}>
            {categories.map((category) => (
              <div key={category.id}>
                <h3>{category.name}</h3>
              </div>
            ))}
          </Slider>
        </article>
        </section>
      </div>
    );
  }
  
  export default MyHome;