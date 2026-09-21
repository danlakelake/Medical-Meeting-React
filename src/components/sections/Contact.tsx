function Contact() {
  return (
    <section id="contact" className="bg-fluorescent-blue">
      <div className="section-container flex flex-col items-center text-center py-15 md:py-20 px-10 md:px-0">
        <h2 className="section-title text-white">Contáctanos</h2>
        <div className="section-title-line-secondary"></div>
        <p className="section-paragraph text-white! text-center!">
          En Medical Meeting estamos comprometidos con brindar atención e
          información de calidad. Contáctanos, estamos para ayudarte.
        </p>
        <p className="text-white text-xl font-bold mt-4">
          info@medicalmeeting.com
        </p>
        <button className="btn-tertiary mt-12 px-35!">
          <span className="relative z-10">Contáctanos</span>
        </button>
      </div>
    </section>
  );
}

export default Contact;
