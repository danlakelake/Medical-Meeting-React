import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import testimonialDr1 from '../../assets/testimonials/testimonial-1.avif';
import testimonialDr2 from '../../assets/testimonials/testimonial-2.avif';
import testimonialDr3 from '../../assets/testimonials/testimonial-3.avif';

function Testimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Fanny Spencer',
      image: testimonialDr1,
      text: 'Como profesionales de la salud, debemos estar siempre comprometidos con nuestros pacientes y brindarles la mejor atención posible.',
    },
    {
      name: 'Sarah Williams',
      image: testimonialDr2,
      text: 'Encontrar profesionales confiables es fundamental para recibir una atención médica de calidad.',
    },
    {
      name: 'Michael Anderson',
      image: testimonialDr3,
      text: 'La experiencia y el compromiso de nuestros especialistas hacen la diferencia para nuestros pacientes.',
    },
  ];

  const testimonial = testimonials[currentTestimonial];

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="testimonial-container">
          <div className="animate-testimonial" key={currentTestimonial}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image mb-3"
            />
            <h3>{testimonial.name}</h3>
            <div className="flex gap-1 mt-2 text-yellow-400">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>
            <p className="section-paragraph max-w-xl mt-5 text-center!">
              {testimonial.text}
            </p>
          </div>
          <div className="flex items-center gap-5 mt-10">
            <ArrowLeft
              size={20}
              className="cursor-pointer"
              onClick={() =>
                setCurrentTestimonial(
                  currentTestimonial > 0
                    ? currentTestimonial - 1
                    : testimonials.length - 1,
                )
              }
            />
            <div className="w-20 h-1 bg-gray-200">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{
                  width: `${((currentTestimonial + 1) / testimonials.length) * 100}%`,
                }}
              ></div>
            </div>
            <ArrowRight
              size={20}
              className="cursor-pointer"
              onClick={() =>
                setCurrentTestimonial(
                  currentTestimonial < testimonials.length - 1
                    ? currentTestimonial + 1
                    : 0,
                )
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
