import cardiology from '../../assets/specialties/cardiology.avif';
import neurology from '../../assets/specialties/neurology.avif';
import pediatrics from '../../assets/specialties/pediatrics.avif';
import surgery from '../../assets/specialties/surgery.avif';
import dermatology from '../../assets/specialties/dermatology.avif';
import orthopedics from '../../assets/specialties/orthopedics.avif';
import gynecology from '../../assets/specialties/gynecology.avif';
import ophthalmology from '../../assets/specialties/ophthalmology.avif';
import internalMedicine from '../../assets/specialties/internal-medicine.avif';
import { useState } from 'react';

function Specialties() {
  const categories = [
    'Todas',
    'Cardiología',
    'Neurología',
    'Pediatría',
    'Cirugía',
  ];

  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const specialties = [
    { name: 'Cardiología', image: cardiology },
    { name: 'Neurología', image: neurology },
    { name: 'Pediatría', image: pediatrics },
    { name: 'Cirugía', image: surgery },
    { name: 'Cardiología', image: dermatology },
    { name: 'Neurología', image: orthopedics },
    { name: 'Pediatría', image: gynecology },
    { name: 'Neurología', image: ophthalmology },
    { name: 'Cirugía', image: internalMedicine },
  ];

  const filteredSpecialties =
    selectedCategory === 'Todas'
      ? specialties
      : specialties.filter((specialty) => specialty.name === selectedCategory);

  return (
    <section className="section-padding bg-blue-sections py-20">
      <div className="section-container">
        {/* Encabezado */}
        <div>
          <h2 className="section-title">Especialidades</h2>
          <div className="section-title-line"></div>
          <div>
            <span></span>
            <span></span>
          </div>
          {/* Descripción + filtros */}
          <div className="flex flex-col lg:flex-row justify-between">
            {/* Desc */}
            <p className="lg:w-1/2">
              Encuentra especialistas de confianza en diferentes áreas de la
              medicina. Conoce las principales especialidades y descubre
              profesionales comprometidos con brindar atención de calidad.
            </p>
            {/* Categorías */}
            <div className="flex flex-wrap gap-5 md:gap-8 items-center py-7 lg:py-0">
              {categories.map((category) => (
                <button
                  className={`cursor-pointer ${selectedCategory === category ? 'text-primary font-semibold' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            {/* Galería */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 pt-5 md:pt-15">
            {filteredSpecialties.map((specialty) => (
              <div key={specialty.image} className="animate-fade-in">
                <img
                  src={specialty.image}
                  alt={specialty.name}
                  className="grid-images"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specialties;
