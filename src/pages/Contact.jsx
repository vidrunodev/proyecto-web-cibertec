import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias por contactarnos, ${formData.name}. Te responderemos pronto.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="home-grid" style={{ minHeight: '60vh', textAlign: 'center' }}>
      <h2>Contacto / Registro</h2>
      <p style={{ marginBottom: '30px' }}>
        Llena el siguiente formulario para registrarte en My Fit Journey y obtener más información.
      </p>
      
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left', backgroundColor: 'var(--nav-background-color)', padding: '30px', borderRadius: '10px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Correo Electrónico:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Mensaje:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          ></textarea>
        </div>
        
        <button type="submit" className="button-box" style={{ width: '100%', textAlign: 'center', padding: '10px', cursor: 'pointer', fontSize: '18px' }}>
          Enviar Mensaje
        </button>
      </form>
    </main>
  );
}

export default Contact;
