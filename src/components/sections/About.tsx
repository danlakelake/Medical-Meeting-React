import aboutDoctor from '../../assets/about-doctor.avif';

function About() {
  return (
    <section className="section-padding-secondary">
      <div className="section-container-secondary">
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
            <h2 className="section-title">Quienes Somos</h2>
            <div className="mt-2 space-y-6">
              <div className="section-title-line"></div>
              <p className="section-paragraph">
                Medical Meeting es una red que conecta a pacientes con médicos y
                especialistas reconocidos, facilitando el acceso a información
                profesional y servicios de salud de confianza. Nuestro objetivo
                es crear un espacio donde la experiencia, preparación y
                trayectoria de cada especialista puedan ser conocidas de manera
                clara.
              </p>
              <p className="section-paragraph">
                Ayudamos a las personas a encontrar especialistas de confianza y
                tomar mejores decisiones sobre su atención médica.
              </p>
              {/* Buttons */}
              <div className="flex gap-3 pt-4 justify-center md:justify-start">
                <button className="btn-secondary">
                  <span className="relative z-10">Información</span>
                </button>
                <button className="btn-secondary">
                  <span className="relative z-10">Acerca De</span>
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
