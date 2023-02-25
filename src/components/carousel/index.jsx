import * as React from 'react';
import { Table } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css'
import "./style.css"

export default function Carousel1() {
  return (
    <Carousel fade controls={false} indicators={false} interval={3000}>
      <Carousel.Item>
        <img
          className="zimg d-block w-100"
          src="https://cinepop.com.br/wp-content/uploads/2021/11/batman_45.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Filme 1</h3>
          <p>...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="zimg d-block w-100"
          src="https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-04.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Filme 2</h3>
          <p>...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="zimg d-block w-100"
          src="https://www.whatisthematrix.com/assets/images/desktopbanner.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Filme 3</h3>
          <p>
            ...
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="zimg d-block w-100"
          src="https://www.kaijubattle.net/uploads/2/9/5/7/29570123/godzilla-king-of-the-monsters-ver17-xlg_orig.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Filme 4</h3>
          <p>
            ...
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}