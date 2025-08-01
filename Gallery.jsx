import React from 'react';

const Gallery = () => {
  const gallery = [
    "/img9.avif",
    "img8.jpg",
    "img7.jpg",
    "img6.jpg",
    "img5.webp",
    "/img10.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img11.jpg"
  ];

  return (
    <section className='gallery'>
      <h1>UNLEASH YOUR INNER ATHLETE</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element) => (
            <img key={element} src={element} alt="Gallery Image" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element) => (
            <img key={element} src={element} alt="Gallery Image" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element) => (
            <img key={element} src={element} alt="Gallery Image" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
