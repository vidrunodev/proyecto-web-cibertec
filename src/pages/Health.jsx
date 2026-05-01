import React from 'react';
import { useNavigate } from 'react-router-dom';

function Health() {
  const navigate = useNavigate();

  return (
    <main className="home-grid">
      <div id="hero-box">
        <div className="slide-in-overlay">
          <img
            id="healthpage-hero"
            src="images/health-male.png"
            alt="health male"
          />
          <div className="overlay-content">
            <h1 className="home-title">Nutriendo Tu Bienestar Total</h1>
            <p>Explorando La Sección de Salud</p>
          </div>
        </div>
        <div className="hero-text">
          <p>
            Tu viaje hacia el bienestar personal no se detiene en el estado
            físico.
          </p>
          <p>
            La salud abarca un enfoque holístico para el bienestar, y en esta
            sección, profundizaremos en los muchos aspectos de llevar una vida
            saludable.
          </p>
        </div>
      </div>
      <h2>Qué Descubrirás:</h2>
      <section className="benefits-section">
        <div className="benefit">
          <h3>Nutrición y Dieta:</h3>
          <p>
            Descubre la importancia de una dieta equilibrada y explora recetas
            nutritivas, planes de comidas y consejos que apoyan tu salud
            general.
          </p>
        </div>
        <div className="benefit">
          <h3>Bienestar Mental:</h3>
          <p>
            Una mente sana es tan crucial como un cuerpo sano. Explora el
            mindfulness, manejo del estrés y estrategias para mantener una
            mentalidad positiva.
          </p>
        </div>
        <div className="benefit">
          <h3>Cuidado Preventivo:</h3>
          <p>
            Aprende sobre medidas de atención médica preventiva, incluyendo
            chequeos regulares y exámenes de salud para mantener a raya las
            enfermedades.
          </p>
        </div>
        <div className="benefit">
          <h3>Hábitos Saludables</h3>
          <p>
            Sumérgete en temas como el sueño, hidratación y la construcción de
            rutinas saludables que llevan a la longevidad y la vitalidad.
          </p>
        </div>
        <div className="benefit">
          <h3>Apoyo de la Comunidad:</h3>
          <p>
            Únete a la conversación con otros entusiastas de la salud, haz
            preguntas y comparte tus experiencias en nuestros foros.
          </p>
        </div>
      </section>
      <button className="boton-contacto" onClick={() => navigate('/contact')}>
        Ir a Contacto
      </button>
      <div id="health-box" className="split-container">
        <div className="slide-in-overlay">
          <img
            id="homepage-health"
            src="images/health-female.png"
            alt="health female"
          />
          <div className="overlay-content">
            <h1 className="home-subtitle">Tu Salud, Tu Responsabilidad</h1>
            <p>
              La sección "Salud" de nuestro sitio enfatiza que tu bienestar es
              un tesoro que vale la pena nutrir. La verdadera salud es una
              combinación de bienestar físico, mental y emocional, y estamos
              aquí para guiarte en este increíble viaje.
            </p>
          </div>
        </div>
        <div className="hero-text">
          <p>
            Sin importar dónde estés en tu búsqueda de una vida más saludable,
            estamos aquí para apoyarte y motivarte en cada paso. Explora la gran
            cantidad de información en esta sección y toma el control de tu
            bienestar total.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Health;
