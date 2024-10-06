import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Corporate Law",
      description:
        "Expert legal counsel for corporations, helping navigate complex legal frameworks.",
      icon: "fa-briefcase",
    },
    {
      title: "Litigation",
      description:
        "Comprehensive litigation services, representing clients in all types of disputes.",
      icon: "fa-gavel",
    },
    {
      title: "Real Estate Law",
      description:
        "Providing legal guidance on property transactions, contracts, and disputes.",
      icon: "fa-home",
    },
    {
      title: "Employment Law",
      description:
        "Assisting businesses and employees with workplace disputes, contracts, and compliance.",
      icon: "fa-users",
    },
    {
      title: "Intellectual Property",
      description:
        "Protecting your innovations, trademarks, patents, and copyrights with our IP expertise.",
      icon: "fa-lightbulb",
    },
    {
      title: "Family Law",
      description:
        "Guiding families through legal matters, including divorce, custody, and more.",
      icon: "fa-heart",
    },
  ];

  return (
    <main className="service-page">
      <section className="hero-section">
        <h1>Our Legal Services</h1>
        <p>
          We provide a wide range of expert legal services to meet your business
          and personal needs.
        </p>
      </section>

      <section className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <i className={`fas ${service.icon} service-icon`}></i>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Services;
