import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-grid">
      <div id="hero">
        <div id="hero-box">
          <img id="homepage-hero" src="images/homepage-hero.png" alt="gym" />
        </div>
        <section id="hero-msg">
          <h1 className="home-title">Bienvenido a My Fit Journey</h1>
        </section>
      </div>
      <p>
        ¿Estás listo para embarcarte en un viaje transformador hacia un tú más
        sano y feliz?
      </p>
      <p>
        En "My Fit Journey", estamos aquí para guiarte e inspirarte en tu camino
        hacia el bienestar personal.
      </p>
      <p>
        Nuestra misión es proporcionarte el conocimiento, la motivación y los
        recursos que necesitas para alcanzar tus metas de fitness. Ya sea que estés
        comenzando tu viaje de fitness o buscando llevar tus entrenamientos al
        siguiente nivel, estamos aquí para apoyarte en cada paso del camino.
      </p>
      <h2>Qué Ofrecemos</h2>
      <div className="feature-grid">
        <div className="feature">
          <h3>Consejos Expertos de Fitness:</h3>
          <p>
            Nuestro equipo de entusiastas y expertos en fitness selecciona valiosos
            consejos, entrenamientos y recomendaciones para ayudarte a maximizar tus
            rutinas. Desde entrenamiento de fuerza hasta cardio, te tenemos cubierto.
          </p>
        </div>
        <div className="feature">
          <h3>Reseñas de Accesorios:</h3>
          <p>
            ¿Te preguntas qué accesorios de fitness valen la inversión? Proporcionamos
            reseñas detalladas y recomendaciones sobre el último equipamiento, desde
            monitores de actividad hasta bandas de resistencia.
          </p>
        </div>
        <div className="feature">
          <h3>Guía de Nutrición:</h3>
          <p>
            El fitness no es solo ejercicio; también se trata de alimentar tu cuerpo
            con los nutrientes adecuados. Descubre recetas deliciosas y nutritivas,
            planes de comidas y consejos dietéticos para complementar tu rutina.
          </p>
        </div>
        <div className="feature">
          <h3>Apoyo de la Comunidad:</h3>
          <p>
            Únete a nuestra vibrante comunidad de entusiastas del fitness, comparte
            tu progreso y encuentra la motivación que necesitas para mantenerte
            en el camino. Conecta con personas afines en nuestros foros.
          </p>
        </div>
      </div>
      <div id="health-section">
        <div id="health-box">
          <img
            id="homepage-health"
            src="images/homepage-health.png"
            alt="healthy lifestyle"
          />
          <h1 id="journey-title">Tu Viaje, Tu Ritmo</h1>
        </div>
      </div>
      <p>Entendemos que el viaje de fitness de cada persona es único.</p>
      <p>
        Ya sea que busques perder algunos kilos, ganar músculo o simplemente
        mejorar tu bienestar general, "My Fit Journey" es tu compañero de
        confianza.
      </p>
      <p>Sin importar dónde estés</p>
      <p>
        en tu camino hacia el fitness personal, recuerda que cada paso hacia
        adelante es una victoria.
      </p>
      <p>¿Estás listo para dar el primer paso hacia un tú más saludable?</p>
      <p>¡Explora nuestro sitio web y comienza tu "My Fit Journey" hoy mismo!</p>
      <button className="button-box" onClick={() => navigate('/contact')}>
        Ir a Contacto
      </button>
    </main>
  );
}

export default Home;
