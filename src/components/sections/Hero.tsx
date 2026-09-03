import heroDoctor from '../../assets/hero-doctor.png';
import Brands from '../Brands';

function Hero() {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-center h-auto md:h-[500px] lg:h-[600px]">
        <div className="w-full md:w-[60%] flex justify-center p-7 px-30 md:px-0">
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-5xl font-medium">Medical Meeting</h1>
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
        <div className="w-full md:w-[50%] lg:w-[40%] bg-tertiary md:relative h-full pt-7 md:px-0">
          <img
            src={heroDoctor}
            alt="Médico"
            className="w-[60%] md:w-[550px] translate-x-12 md:absolute md:-left-50 lg:-left-60 md:bottom-0 drop-shadow-2xl"
          />
        </div>
      </div>
      <Brands />
    </section>
  );
}

export default Hero;
