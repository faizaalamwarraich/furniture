import React from 'react';
import Hero from './hero/hero.jsx';
import Categories from './categories/categories.jsx';
import Collection from './collection/collection.jsx';
import New from './new/new.jsx';
import Reviews from './reviews/reviews.jsx';
import Footer from './footer/footer.jsx';

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Collection />
      <New />
      <Reviews />
    </>
  );
}

export default Home;
