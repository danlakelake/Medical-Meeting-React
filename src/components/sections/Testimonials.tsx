import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import testimonialDr1 from '../../assets/testimonials/testimonial-1.avif';
import testimonialDr2 from '../../assets/testimonials/testimonial-2.avif';
import testimonialDr3 from '../../assets/testimonials/testimonial-3.avif';

function Testimonial() {
  const testimonials = [
    {
      name: 'Fanny Spencer',
      image: testimonialDr1,
      text: 'Como profesionales de la salud, debemos estar siempre comprometidos con nuestros pacientes y con brindarles la mejor atención posible.',
    },
    {
      name: 'Michael Anderson',
      image: testimonialDr2,
      text: 'La experiencia y el compromiso de nuestros especialistas hacen la diferencia para nuestros pacientes.',
    },
    {
      name: 'Sarah Williams',
      image: testimonialDr3,
      text: 'Encontrar profesionales confiables es fundamental para recibir una atención médica de calidad.',
    },
  ];

  const testimonial = testimonials[0];

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="testimonial-img-container">
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
          <p className="section-paragraph max-w-xl mt-10 text-center!">
            {testimonial.text}
          </p>
          <div className="flex items-center gap-5 mt-16">
            <ArrowLeft size={20} />
            <div className="w-20 h-1 bg-gray-200">
              <div className="w-1/3 h-full bg-primary"></div>
            </div>
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
