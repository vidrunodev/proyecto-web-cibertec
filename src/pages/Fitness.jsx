import React from 'react';
import { useNavigate } from 'react-router-dom';

function Fitness() {
  const navigate = useNavigate();

  return (
    <main className="home-grid">
      <div id="hero-box">
        <div className="slide-in-overlay">
          <img
            id="fitnesspage-hero"
            src="images/fitness-male.png"
            alt="fitness male"
          />
          <div className="overlay-content">
            <h1 className="home-title">Tu Camino a la Forma Física</h1>
            <p>Bienvenido a la Sección de Fitness</p>
          </div>
        </div>
        <div className="hero-text">
          <p>
            En esta sección dedicada de "My Fit Journey", entraremos al mundo del fitness y el ejercicio, proporcionándote
            las herramientas y el conocimiento que necesitas para llevar un
            estilo de vida activo y saludable.
          </p>
        </div>
      </div>
      <h2>Qué Descubrirás:</h2>
      <div className="feature-grid">
        <div className="feature">
          <h3>Rutinas de Entrenamiento:</h3>
          <p>
            Nuestro equipo de expertos selecciona valiosos consejos y entrenamientos
            para ayudarte a maximizar tus rutinas. Desde entrenamiento de fuerza
            hasta ejercicios de cardio, te tenemos cubierto.
          </p>
        </div>
        <div className="feature">
          <h3>Conocimiento sobre Equipamiento:</h3>
          <p>
            ¿Te preguntas qué accesorios valen la inversión? Proporcionamos reseñas
            detalladas sobre el equipo más reciente, desde rastreadores de actividad
            hasta bandas de resistencia.
          </p>
        </div>
        <div className="feature">
          <h3>Nutrición para el Fitness:</h3>
          <p>
            El fitness va de la mano con una nutrición adecuada. Aprende sobre los
            mejores alimentos para alimentar tus entrenamientos y apoyar tus metas.
          </p>
        </div>
        <div className="feature">
          <h3>Tutoriales de Ejercicio:</h3>
          <p>
            Asegúrate de ejecutar los ejercicios correctamente con nuestras guías.
            Descubre recetas deliciosas, planes de comida y consejos para complementar
            tu rutina de fitness de la mejor forma.
          </p>
        </div>
        <div className="feature">
          <h3>Planes de Entrenamiento:</h3>
          <p>
            Únete a nuestra vibrante comunidad de entusiastas, comparte tu progreso
            y encuentra la motivación que necesitas. Conecta con individuos afines
            en nuestras plataformas.
          </p>
        </div>
      </div>
      <div id="fitness-section">
        <div id="fitness-box">
          <div className="image-container">
            <img
              id="homepage-fitness"
              src="images/fitness-female.png"
              alt="fitness female"
            />
            <div className="overlay-text">
              <h1>Alcanza tu Fitness</h1>
            </div>
          </div>
        </div>
      </div>
      <div id='fitness-detalles'>
        <p>
          No importa si tu objetivo es desarrollar fuerza, aumentar la resistencia o
          simplemente mantenerte activo: la clave del éxito es la consistencia y el
          conocimiento. La sección "Fitness" de nuestro sitio web está diseñada para
          empoderarte con la información que necesitas.
        </p>
        <p>¿Estás listo para embarcarte en un viaje de preparación física?</p>
        <p>
          Comienza a explorar el contenido de esta sección y desbloquea tu
          verdadero potencial.
        </p>
        <button className="boton-contacto" onClick={() => navigate('/contact')}>
          Ir a Contacto
        </button>

      </div>
    </main>
  );
}

export default Fitness;
