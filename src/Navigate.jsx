import { useEffect, useState } from 'react'
import { list, shortList, longList } from './data'
import {
  BiSolidQuoteAltRight,
  BiSolidChevronRight,
  BiSolidChevronLeft,
} from 'react-icons/bi'

const Navigate = () => {
  const [person, setPerson] = useState(longList)
  const [currentPerson, setCurrentPerson] = useState(0)

  const prevSlide = () => {
    setCurrentPerson((oldper) => {
      const result = (oldper - 1 + person.length) % person.length
      return result
    })
  }
  const nextSlide = () => {
    setCurrentPerson((oldper) => {
      const result = (oldper + 1) % person.length
      return result
    })
  }

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide()
    }, 2500)
    return () => {
      clearInterval(sliderId)
    }
  }, [currentPerson])

  return (
    <section className="slider-container">
      {person.map((per, personIndex) => {
        const { id, image, name, title, quote } = per
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name"> {name} </h5>
            <p className="title"> {title} </p>
            <p className="text">{quote}</p>
            <BiSolidQuoteAltRight className="icon" />
          </article>
        )
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <BiSolidChevronLeft />
      </button>

      <button type="button" className="next" onClick={nextSlide}>
        <BiSolidChevronRight />
      </button>
    </section>
  )
}
export default Navigate
