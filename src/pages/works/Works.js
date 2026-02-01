// src/pages/Works.js
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import ContactForm from '../../components/contactForm/ContactForm';
import './Works.scss';

const Works = () => {
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Караимская Кенасса | Симферополь',
      year: '2017',
      description: 'Реставрация',
      images: [
        'images/ourworks/kk1.jpg',
        'images/ourworks/kk2.jpg',
        'images/ourworks/kk3.jpg',
        'images/ourworks/kk4.jpg',
        'images/ourworks/kk5.jpg',
      ],
    },
    {
      id: 2,
      title: 'Храм Красная горка | Севастополь',
      year: '',
      description: '',
      images: [
        'images/ourworks/hk2.jpg',
        'images/ourworks/hk1.jpg',
        'images/ourworks/hk3.jpg',
      ],
    },
    {
      id: 3,
      title: 'Причалы | Балаклава',
      year: '2024',
      description: '',
      images: [
        'images/ourworks/pb2.jpg',
        'images/ourworks/pb1.jpg',
        'images/ourworks/pb3.jpg',
        'images/ourworks/pb4.jpg',
        'images/ourworks/pb5.jpg',
      ],
    },
    {
      id: 4,
      title: 'Памятник Ленина | Джанкой',
      year: '2025',
      description: '',
      images: [
        'images/ourworks/pl4.jpg',
        'images/ourworks/pl2.jpg',
        'images/ourworks/pl3.jpg',
        'images/ourworks/pl1.jpg',
      ],
    },
    {
      id: 5,
      title: 'Ограждение 30 батареи | Севастополь',
      year: '2024',
      description: '',
      images: [
        'images/ourworks/30b1.jpg',
        'images/ourworks/30b2.jpg',
        'images/ourworks/30b3.jpg',
        'images/ourworks/30b4.jpg',
      ],
    },
    {
      id: 6,
      title: 'Устройство кровли 30 батарея | Севастополь',
      year: '2023',
      description: '',
      images: [
        'images/ourworks/30bk4.jpg',
        'images/ourworks/30bk1.jpg',
        'images/ourworks/30bk2.jpg',
        'images/ourworks/30bk3.jpg',
      ],
    },
    {
      id: 7,
      title: 'Административное здание | Балаклава',
      year: '2024',
      description: '',
      images: [
        'images/ourworks/az1.jpg',
        'images/ourworks/az2.jpg',
        'images/ourworks/az3.jpg',
        'images/ourworks/az4.jpg',
        'images/ourworks/az5.jpg',
        'images/ourworks/az6.jpg',
        'images/ourworks/az7.jpg',
      ],
    },
  ];

  const openProjectLightbox = (project) => {
    setSlides(
      project.images.map((src) => ({
        src,
        alt: `${project.title} — фото`,
      }))
    );
    setIndex(0);
    setOpen(true);
  };

  return (
    <div className="works-page">
      <h1 className="works-title">Наши работы</h1>

      <p className="works-description">
        Ниже представлены реализованные объекты. Каждый проект включает
        фотографии различных этапов выполнения работ.
      </p>

      <div className="works-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="work-card"
            role="button"
            tabIndex={0}
            onClick={() => openProjectLightbox(project)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openProjectLightbox(project);
              }
            }}
          >
            <div className="work-image-wrapper">
              <img
                src={project.images[0]}
                alt={project.title}
                className="work-image"
                loading="lazy"
              />
            </div>

            <div className="work-info">
              <h3 className="work-title">{project.title}</h3>
              {project.year && (
                <p className="work-year">{project.year}</p>
              )}
              {project.description && (
                <p className="work-description">{project.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        plugins={[Zoom]}
        toolbar={{ hidden: true }}
        showTitle={false}
        showCounter={false}
        controller={{ closeOnBackdropClick: true }}
        render={{
          header: () => null,
          toolbar: () => null,
        }}
        carousel={{ finite: false }}
        zoom={{ maxZoomPixelRatio: 3 }}
      />

      {/* Контактная форма — ВНУТРИ страницы */}
<div className="works-contact-form-wrapper">
  <ContactForm />
</div>
    </div>
  );
};

export default Works;
