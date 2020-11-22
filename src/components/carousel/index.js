import React from 'react'
import img1 from '../../assets/slider/1.jpg'
import img2 from '../../assets/slider/2.jpg'
import img3 from '../../assets/slider/3.jpg'

const casroselImages = [
  {
    alt: 'Los Angeles',
    src: img1,
    title: 'Welcome',
    subTitle: 'To the spicyx',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptatem accusamus non quidem, deleniti optio.'
  },
  {
    alt: 'Chicago',
    src: img2,
    title: 'The Real',
    subTitle: 'GREEN FOODS',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptatem accusamus non quidem, deleniti optio.'
  },
  {
    alt: 'New york',
    src: img3,
    title: 'Delicious',
    subTitle: 'SPICY MASALAS',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptatem accusamus non quidem, deleniti optio.'
  }
]

const Carousel = () => {
  return (
    <div id='myCarousel' className='carousel slide' data-ride='carousel'>
      <ol className='carousel-indicators'>
        <li data-target='#myCarousel' data-slide-to='0' className='active'></li>
        <li data-target='#myCarousel' data-slide-to='1'></li>
        <li data-target='#myCarousel' data-slide-to='2'></li>
      </ol>
      <div className='carousel-inner'>
        {casroselImages.map((image, index) => (
          <div
            key={`${index}_${image.src}`}
            style={{ transform: 'opacity 500ms linear 0s' }}
            className={`item ${index === 0 ? 'active' : ''}`}
          >
            <img src={image.src} alt={image.alt} style={{ width: '100%' }} />
            <div className='mu-top-slider-content'>
              <span className='mu-slider-small-title'>{image.title}</span>
              <h2 className='mu-slider-title'>{image.subTitle}</h2>
              <p></p>
              <a href='#' className='mu-readmore-btn'>
                READ MORE
              </a>
            </div>
          </div>
        ))}
      </div>

      <a className='left carousel-control' href='#myCarousel' data-slide='prev'>
        <span className='glyphicon glyphicon-chevron-left'></span>
        <span className='sr-only'>Previous</span>
      </a>
      <a
        className='right carousel-control'
        href='#myCarousel'
        data-slide='next'
      >
        <span className='glyphicon glyphicon-chevron-right'></span>
        <span className='sr-only'>Next</span>
      </a>
    </div>
  )
}

export default Carousel
