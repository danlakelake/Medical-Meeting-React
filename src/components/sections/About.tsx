import aboutDoctor from '../../assets/about-doctor.png';

function About() {
  return (
    <section className='section-padding'>
      <div className="flex flex-col md:flex-row pt-0 md:pt-50 lg:pt-20 pb-20 md:pb-20 lg:pb-0">
        {/* Imagen */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <img
            src={aboutDoctor}
            alt="Médico"
            className="w-[40%] md:w-[60%] mx-auto"
          />
        </div>
        {/* Contenido */}
        <div className="w-full md:w-1/2 pl-0 pr-8 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <div className="max-w-lg flex flex-col items-center md:items-start">
            <h2 className="text-5xl font-medium pb-2">Quienes Somos</h2>
            <div className="mt-2 space-y-6">
              <div className="flex items-center justify-center md:justify-start">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="w-40 h-0.5 bg-primary"></span>
              </div>
              <p className="paragraphs">
                Medical Meeting es una red que conecta a pacientes con médicos y
                especialistas reconocidos, facilitando el acceso a información
                profesional y servicios de salud de confianza. Nuestro objetivo
                es crear un espacio donde la experiencia, preparación y
                trayectoria de cada especialista puedan ser conocidas de manera
                clara.
              </p>
              <p className="paragraphs">
                Ayudamos a las personas a encontrar especialistas de confianza y
                tomar mejores decisiones sobre su atención médica.
              </p>
              {/* Buttons */}
              <div className="flex gap-3 pt-4 justify-center md:justify-start">
                <button className="btn-secondary">
                  <span className="relative z-10">Información</span>
                </button>
                <button className="btn-secondary">
                  <span className="relative z-10">Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
