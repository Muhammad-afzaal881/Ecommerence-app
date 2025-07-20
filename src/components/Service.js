import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Web Development',
    description: 'Custom, responsive websites using HTML, CSS, JavaScript, and React.',
    icon: '🌐'
  },
  {
    title: 'UI/UX Design',
    description: 'Clean, user-friendly interface designs to enhance user experience.',
    icon: '🎨'
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your site ranking and visibility with modern SEO techniques.',
    icon: '🚀'
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Scalable online store setup, payment integration, and management.',
    icon: '🛒'
  },
  {
    title: 'Mobile App UI',
    description: 'Interactive and engaging mobile UI designs for iOS and Android.',
    icon: '📱'
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing website updates, backups, and technical support.',
    icon: '🛠️'
  }
];

const Services = () => {
  return (
    <div className="services-page">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
