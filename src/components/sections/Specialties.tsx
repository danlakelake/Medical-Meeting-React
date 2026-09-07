import cardiology from '../../assets/specialties/cardiology.avif';
import neurology from '../../assets/specialties/neurology.avif';
import pediatrics from '../../assets/specialties/pediatrics.avif';
import surgery from '../../assets/specialties/surgery.avif';
import dermatology from '../../assets/specialties/dermatology.avif';
import orthopedics from '../../assets/specialties/orthopedics.avif';
import gynecology from '../../assets/specialties/gynecology.avif';
import ophthalmology from '../../assets/specialties/ophthalmology.avif';
import internalMedicine from '../../assets/specialties/internal-medicine.avif';

function Specialties() {
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
              <button>Todas</button>
              <button>Cardiología</button>
              <button>Neurología</button>
              <button>Pediatría</button>
              <button>Cirugía</button>
            </div>
            {/* Galería */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-15">
            <div>
              <img
                src={cardiology}
                alt="Cardiología"
                className="w-full h-60 object-cover"
              />
            </div>
            <div>
              <img
                src={neurology}
                alt="Neurología"
                className="w-full h-60 object-cover"
              />
            </div>
            <div>
              <img
                src={pediatrics}
                alt="Pediatría"
                className="w-full h-60 object-cover"
              />
            </div>
            <div>
              <img
                src={surgery}
                alt="Cirugía"
                className="w-full h-60 object-cover"
              />
            </div>
            <div>
              <img
                src={dermatology}
                alt="Dermatología"
                className="w-full h-60 object-cover"
              />
            </div>
            <div>
              <img
                src={orthopedics}
                alt="Ortopedia"
                className="w-full h-60 object-cover"
              />
            </div>
            <div>
              <img
                src={gynecology}
                alt="Ginecología"
                className="w-full h-60 object-cover"
              />
            </div>
            <div>
              <img
                src={ophthalmology}
                alt="Oftalmología"
                className="w-full h-60 object-cover"
              />
            </div>
            <div>
              <img
                src={internalMedicine}
                alt="Medicina interna"
                className="w-full h-60 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specialties;
