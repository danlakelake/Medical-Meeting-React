import heroDoctor from '../assets/hero-doctor.png';

function Hero() {
  return (
    <section>
      <div className="flex bg-gray-100 items-center h-[600px]">
        <div className="w-[60%] flex justify-center">
          <div className="text-left space-y-4">
            <h1
              className="text-left text-5xl font-medium">
              Medical Meeting
            </h1>
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
        <div className="w-[40%] bg-tertiary relative h-full">
          <img
            src={heroDoctor}
            alt="Médico"
            className="w-[550px] absolute -left-60 bottom-0 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
