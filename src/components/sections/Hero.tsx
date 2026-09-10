import heroDoctor from '../../assets/hero-doctor.avif';
import Brands from '../Brands';

function Hero() {
  return (
    <section id="hero">
      <div className="hero-container">
        {/* Contenido & CTA */}
        <div className="w-full md:w-[60%] flex justify-center p-7 px-30 md:px-0">
          <div className="text-center md:text-left space-y-4">
            <h1 className="section-title">Medical Meeting</h1>
            <p>
              <span className="font-bold">La red de médicos</span> <br />
              <span className="text-primary">
                y especialistas con mayor ranking en México.
              </span>
            </p>
            <button className="btn-primary">
              <span className="relative z-10"> Hazte Socio</span>
            </button>
          </div>
        </div>
        {/* Imagen */}
        <div className="hero-image-container bg-tertiary">
          <img
            src={heroDoctor}
            alt="Médico"
            className="hero-image"
          />
        </div>
      </div>
      <Brands />
    </section>
  );
}

export default Hero;
