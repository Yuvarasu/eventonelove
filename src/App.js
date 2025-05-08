import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Building fast, responsive, and SEO-friendly websites tailored to your needs.',
    imageUrl: 'https://via.placeholder.com/400',
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps using React Native and Flutter.',
    imageUrl: 'https://via.placeholder.com/400',
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive and engaging designs focused on user experience.',
    imageUrl: 'https://via.placeholder.com/400',
  },
];

const App = () => {
  return (
    <>
      <Services />
      <ContactUs />
    </>
  );
};

const Services = () => {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .card {
            flex-direction: column !important;
          }

          .text-container,
          .image-container {
            width: 100% !important;
            padding: 0 !important;
          }

          .card-title {
            font-size: 28px !important;
          }

          .card-description {
            font-size: 14px !important;
          }
        }
      `}</style>

      <div style={styles.container}>
        <h1 style={styles.title}>Services Offered</h1>
        <div style={styles.list}>
          {services.map((service, index) => (
            <div key={index} className="card" style={styles.card}>
              <div className="text-container" style={styles.textContainer}>
                <h2 className="card-title" style={styles.cardTitle}>{service.title}</h2>
                <p className="card-description" style={styles.cardDescription}>{service.description}</p>
              </div>
              <div className="image-container" style={styles.imageContainer}>
                <img src={service.imageUrl} alt={service.title} style={styles.image} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const ContactUs = () => {
  return (
    <>
      <style>{`
        .contact-section {
          background-color: #000;
          color: #fff;
          padding: 60px 20px;
          text-align: center;
          font-family: Arial, sans-serif;
        }

        .contact-section h2 {
          font-size: 32px;
          margin-bottom: 30px;
        }

        .contact-container {
          display: flex;
          flex-direction: column;
          gap: 30px;
          max-width: 800px;
          margin: 0 auto;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .name-fields {
          display: flex;
          gap: 10px;
        }

        .name-fields input {
          flex: 1;
        }

        .contact-form input,
        .contact-form textarea {
          padding: 8px;
          border: 1px solid #444;
          border-radius: 4px;
          background-color: #222;
          color: #fff;
        }

        .contact-form button {
          background-color: #00e0ff;
          color: #000;
          padding: 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .contact-form button:hover {
          background-color: #00c2da;
        }

        .contact-info {
          background-color: #111;
          padding: 20px;
          border-radius: 6px;
          text-align: left;
        }

        .contact-info p {
          margin: 10px 0;
          font-size: 16px;
        }

        .footer {
          margin-top: 40px;
          color: #00e0ff;
          font-size: 14px;
        }
      `}</style>

      <div className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-container">
          <form className="contact-form">
            <div className="name-fields">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <input type="email" placeholder="Email id" />
            <input style={{ height: '30px' }} type="text" placeholder="Subject" />
            <textarea placeholder="Message" rows="4" />
            <button type="submit">Send Message</button>
          </form>

          <div className="contact-info">
            <p>📱 WhatsApp: +91 90000 90000</p>
            <p>📞 Phone: +91 90000 90000</p>
            <p>📧 Mail: ONELOVE@gmail.com</p>
          </div>
        </div>
        <img src="ONE_love text.png" alt="ONE_LOVE" style={{ width: '100%', height: 'auto', marginTop: '20px' }} />

        <p className="footer">Designed and built by Yuvaraj</p>
      </div>
    </>
  );
};

const styles = {
  container: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    fontSize: '32px',
    marginBottom: '30px',
    color: '#333',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1000px',
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  textContainer: {
    width: '50%',
    paddingRight: '20px',
  },
  cardTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  cardDescription: {
    fontSize: '16px',
    color: '#666',
  },
  imageContainer: {
    width: '50%',
    paddingLeft: '20px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
};

export default App;
