import PropTypes from 'prop-types'

function Hero({name, details}) {
  return (
    <section className="bg-black text-white">
      <div className="container flex flex-col justify-center items-center text-center h-screen gap-0">
        <h1 className="font-leagueGothic text-[6rem] p-0 m-0 leading-[80%] uppercase">{name}</h1>
        <h3 className="font-leagueSpartan text-[2rem] p-0 m-0 uppercase">{details}</h3>
      </div>
    </section>
  )
}

Hero.defaultProps = {
  name: 'Your Name',
  details: 'WEB-DESIGNER',
};

Hero.propTypes = {
  name: PropTypes.string,
  details: PropTypes.string,
};

export default Hero