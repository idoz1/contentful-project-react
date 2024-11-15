import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor
            commodi pariatur magnam id praesentium dolorum ad eveniet. Harum
            quod totam cum ab rerum voluptatem corporis, dolor quis quae
            facilis!
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  )
}

export default Hero
