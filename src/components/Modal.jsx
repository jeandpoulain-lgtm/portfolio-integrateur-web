import { useState } from 'react';
import './Modal.css';

function Modal({ project, onClose }) {
  if (!project) return null;

  // Gère soit un tableau d'images, soit l'image unique existante
  const images = project.images || [project.image];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <div className="modal-carousel">
          <img 
            src={images[currentIndex]} 
            alt={`Aperçu ${currentIndex + 1} de ${project.title}`} 
          />
          {images.length > 1 && (
            <>
              <button className="carousel-btn prev" onClick={handlePrev}>&#10094;</button>
              <button className="carousel-btn next" onClick={handleNext}>&#10095;</button>
              <div className="carousel-dots">
                {images.map((_, index) => (
                  <span 
                    key={index} 
                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="modal-details">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul className="tags-list">
            {project.tags.map((tag, index) => (
              <li key={index} className="tag">{tag}</li>
            ))}
          </ul>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-small">
              Code GitHub
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-small btn-outline">
                Démo Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;