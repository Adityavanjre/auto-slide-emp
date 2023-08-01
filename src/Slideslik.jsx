import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'
import { list } from './data'
import { BiSolidQuoteAltRight } from 'react-icons/bi'

const Slideslik = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pausOnHover: true,
  }
  return (
    <section className="slik-container">
      <Slider {...settings}>
        {list.map((per) => {
          const { id, image, name, title, quote } = per
          return (
            <article key={id}>
              <img src={image} alt={name} className="person-img" />
              <h5 className="name"> {name} </h5>
              <p className="title"> {title} </p>
              <p className="text">{quote}</p>
              <BiSolidQuoteAltRight className="icon" />
            </article>
          )
        })}
      </Slider>
    </section>
  )
}

export default Slideslik
