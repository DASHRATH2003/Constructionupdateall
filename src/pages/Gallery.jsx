import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Gallery.css';

// Import all images
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';
import image5 from '../assets/image5.jpeg';
import image6 from '../assets/image6.jpeg';
import image7 from '../assets/image7.jpeg';
import image8 from '../assets/image8.jpeg';
import image9 from '../assets/image9.jpeg';
import image10 from '../assets/image10.jpeg';
import image11 from '../assets/image11.jpeg';
import image12 from '../assets/image12.jpeg';
import image13 from '../assets/image13.jpeg';
import image14 from '../assets/image14.jpeg';
import image15 from '../assets/image15.jpeg';
import constructionPlaceholder from '../assets/construction-placeholder.jpg';
import heroPlaceholder from '../assets/hero-placeholder.jpg';

const Gallery = () => {
  // State for filter category
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Refs for scroll animations
  const headerRef = useRef(null);
  const galleryRef = useRef(null);
  const featuredRef = useRef(null);
  const ctaRef = useRef(null);

  // Animation controls
  const headerControls = useAnimation();
  const galleryControls = useAnimation();
  const featuredControls = useAnimation();
  const ctaControls = useAnimation();

  // InView states
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const galleryInView = useInView(galleryRef, { once: true, amount: 0.1 });
  const featuredInView = useInView(featuredRef, { once: true, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  // Trigger animations when sections come into view
  useEffect(() => {
    if (headerInView) headerControls.start('visible');
    if (galleryInView) galleryControls.start('visible');
    if (featuredInView) featuredControls.start('visible');
    if (ctaInView) ctaControls.start('visible');
  }, [headerInView, galleryInView, featuredInView, ctaInView,
      headerControls, galleryControls, featuredControls, ctaControls]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Gallery data
  const galleryItems = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'construction',
      image: image1,
      description: 'A state-of-the-art office complex featuring sustainable design and smart building technology.',
      year: '2023',
      client: 'TechCorp International',
      location: 'Downtown Metro City',
      featured: true
    },
    {
      id: 2,
      title: 'Luxury Residential Tower',
      category: 'construction',
      image: image2,
      description: 'High-end residential tower with premium amenities and panoramic city views.',
      year: '2022',
      client: 'Elite Properties',
      location: 'Waterfront District',
      featured: true
    },
    {
      id: 3,
      title: 'Industrial Warehouse Conversion',
      category: 'construction',
      image: image3,
      description: 'Transformation of an industrial warehouse into a modern mixed-use space.',
      year: '2021',
      client: 'Urban Revitalization Group',
      location: 'Arts District',
      featured: false
    },
    {
      id: 4,
      title: 'Sustainable Community Center',
      category: 'construction',
      image: image4,
      description: 'Community center built with eco-friendly materials and renewable energy systems.',
      year: '2023',
      client: 'Greenville Municipality',
      location: 'Greenville',
      featured: false
    },
    {
      id: 5,
      title: 'Historic Building Restoration',
      category: 'renovation',
      image: image5,
      description: 'Careful restoration of a historic building, preserving architectural details while modernizing systems.',
      year: '2020',
      client: 'Heritage Preservation Society',
      location: 'Old Town District',
      featured: true
    },
    {
      id: 6,
      title: 'Luxury Villa',
      category: 'construction',
      image: image6,
      description: 'Custom-designed luxury villa with infinity pool and smart home integration.',
      year: '2022',
      client: 'Private Client',
      location: 'Hillside Estates',
      featured: false
    },
    {
      id: 7,
      title: 'Modern Shopping Mall',
      category: 'construction',
      image: image7,
      description: 'Contemporary shopping center with innovative design and premium retail spaces.',
      year: '2021',
      client: 'Retail Development Corp',
      location: 'Eastside District',
      featured: false
    },
    {
      id: 8,
      title: 'Urban Apartment Complex',
      category: 'construction',
      image: image8,
      description: 'Modern urban living with thoughtfully designed apartments and community spaces.',
      year: '2023',
      client: 'Metropolitan Housing',
      location: 'Downtown',
      featured: false
    },
    {
      id: 9,
      title: 'Manufacturing Facility',
      category: 'industrial',
      image: image9,
      description: 'State-of-the-art manufacturing facility designed for efficiency and worker comfort.',
      year: '2022',
      client: 'Advanced Manufacturing Inc',
      location: 'Industrial Park',
      featured: false
    },
    {
      id: 10,
      title: 'Eco-Friendly School Campus',
      category: 'construction',
      image: image10,
      description: 'Modern educational facility with sustainable design principles and innovative learning spaces.',
      year: '2023',
      client: 'Progressive Education Board',
      location: 'Westside District',
      featured: true
    },
    {
      id: 11,
      title: 'Corporate Headquarters',
      category: 'construction',
      image: image11,
      description: 'Flagship office building with cutting-edge design, sustainability features, and employee amenities.',
      year: '2023',
      client: 'Fortune 500 Company',
      location: 'Business District',
      featured: true
    },
    {
      id: 12,
      title: 'Modern Home Design',
      category: 'interior-design',
      image: image12,
      description: 'Contemporary home interior with custom furnishings and modern aesthetics.',
      year: '2023',
      client: 'Private Residence',
      location: 'Suburban Area',
      featured: true
    },
    {
      id: 13,
      title: 'Commercial Office Interior',
      category: 'interior-design',
      image: image13,
      description: 'Modern office space designed for productivity and collaboration.',
      year: '2023',
      client: 'Tech Company',
      location: 'Innovation District',
      featured: false
    },
    {
      id: 14,
      title: 'Residential Renovation',
      category: 'renovation',
      image: image14,
      description: 'Complete home renovation with modern amenities and preserved character.',
      year: '2023',
      client: 'Private Client',
      location: 'Historic District',
      featured: false
    },
    {
      id: 15,
      title: 'Industrial Complex',
      category: 'industrial',
      image: image15,
      description: 'Modern industrial facility with advanced manufacturing capabilities.',
      year: '2023',
      client: 'Industrial Corp',
      location: 'Industrial Zone',
      featured: false
    },
    {
      id: 16,
      title: 'Construction Overview',
      category: 'construction',
      image: image7,
      description: 'Showcasing our construction expertise and capabilities.',
      year: '2023',
      client: 'Various Clients',
      location: 'Multiple Locations',
      featured: true
    },
    {
      id: 17,
      title: 'Featured Project',
      category: 'construction',
      image: image12,
      description: 'Highlighting our signature construction projects.',
      year: '2023',
      client: 'Featured Clients',
      location: 'Prime Locations',
      featured: true
    },
    {
      id: 18,
      title: 'Luxury Hotel Interior',
      category: 'interior-design',
      image: image3,
      description: 'Elegant hotel interior featuring premium materials and sophisticated design elements.',
      year: '2023',
      client: 'Luxury Hotels Group',
      location: 'Downtown District',
      featured: true
    },
    {
      id: 19,
      title: 'Modern Restaurant Design',
      category: 'interior-design',
      image: image4,
      description: 'Contemporary restaurant space with innovative lighting and custom furnishings.',
      year: '2023',
      client: 'Fine Dining Co',
      location: 'Culinary District',
      featured: false
    },
    {
      id: 20,
      title: 'Historic Theater Renovation',
      category: 'renovation',
      image: image5,
      description: 'Meticulous restoration of a historic theater, preserving its architectural heritage.',
      year: '2023',
      client: 'City Arts Foundation',
      location: 'Cultural District',
      featured: true
    },
    {
      id: 21,
      title: 'Boutique Hotel',
      category: 'construction',
      image: image6,
      description: 'Luxury boutique hotel combining modern amenities with classic elegance.',
      year: '2023',
      client: 'Boutique Hospitality Group',
      location: 'Tourist District',
      featured: true
    },
    {
      id: 22,
      title: 'Tech Campus Development',
      category: 'construction',
      image: image7,
      description: 'Innovative tech campus with collaborative spaces and cutting-edge facilities.',
      year: '2023',
      client: 'Tech Innovation Corp',
      location: 'Innovation Park',
      featured: true
    },
    {
      id: 23,
      title: 'Wellness Center',
      category: 'interior-design',
      image: image8,
      description: 'Modern wellness facility designed for relaxation and rejuvenation.',
      year: '2023',
      client: 'Wellness Group',
      location: 'Health District',
      featured: false
    },
    {
      id: 24,
      title: 'Industrial Research Facility',
      category: 'industrial',
      image: image9,
      description: 'Advanced research facility with specialized laboratories and equipment.',
      year: '2023',
      client: 'Research Industries',
      location: 'Science Park',
      featured: true
    },
    {
      id: 25,
      title: 'Urban Retail Complex',
      category: 'construction',
      image: image10,
      description: 'Mixed-use retail development in the heart of the city.',
      year: '2023',
      client: 'Urban Developers',
      location: 'City Center',
      featured: false
    },
    {
      id: 26,
      title: 'Executive Suite Design',
      category: 'interior-design',
      image: image11,
      description: 'Premium office suite designed for corporate executives.',
      year: '2023',
      client: 'Corporate Group',
      location: 'Financial District',
      featured: true
    },
    {
      id: 27,
      title: 'Heritage Building Restoration',
      category: 'renovation',
      image: image12,
      description: 'Careful restoration of a heritage building with modern updates.',
      year: '2023',
      client: 'Heritage Trust',
      location: 'Historic Quarter',
      featured: true
    },
    {
      id: 28,
      title: 'Logistics Center',
      category: 'industrial',
      image: image13,
      description: 'State-of-the-art logistics facility with automated systems.',
      year: '2023',
      client: 'Global Logistics Corp',
      location: 'Industrial Zone',
      featured: false
    },
    {
      id: 29,
      title: 'Residential Complex',
      category: 'construction',
      image: image14,
      description: 'Modern residential development with community amenities.',
      year: '2023',
      client: 'Urban Living Ltd',
      location: 'Residential District',
      featured: true
    },
    {
      id: 30,
      title: 'Data Center Facility',
      category: 'industrial',
      image: image15,
      description: 'High-security data center with advanced cooling systems.',
      year: '2023',
      client: 'Tech Infrastructure Inc',
      location: 'Tech Park',
      featured: true
    }
  ];

  // Filter gallery items based on selected category
  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  const handleLearnMore = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="gallery-page">
      {/* Header Section */}
      <motion.div
        className="page-header"
        ref={headerRef}
        variants={fadeIn}
        initial="hidden"
        animate={headerControls}
      >
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Project Gallery
          </motion.h1>
          <motion.div
            className="accent-line"
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Explore our portfolio of exceptional construction projects
          </motion.p>
        </div>
      </motion.div>

      {/* Gallery Section */}
      <motion.section
        className="gallery-section"
        ref={galleryRef}
        variants={staggerContainer}
        initial="hidden"
        animate={galleryControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Our Projects</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="gallery-filter"
            variants={fadeIn}
          >
            <button
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button
              className={filter === 'construction' ? 'active' : ''}
              onClick={() => setFilter('construction')}
            >
              Construction
            </button>
            <button
              className={filter === 'interior-design' ? 'active' : ''}
              onClick={() => setFilter('interior-design')}
            >
              Interior Design
            </button>
            <button
              className={filter === 'industrial' ? 'active' : ''}
              onClick={() => setFilter('industrial')}
            >
              Industrial
            </button>
            <button
              className={filter === 'renovation' ? 'active' : ''}
              onClick={() => setFilter('renovation')}
            >
              Renovation
            </button>
          </motion.div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              className="gallery-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="gallery-item"
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="gallery-image">
                    <img src={item.image} alt={item.title} />
                    <div className="gallery-overlay">
                      <span className="category">{item.category}</span>
                    </div>
                  </div>
                  <div className="gallery-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="gallery-buttons">
                      <motion.button
                        className="btn btn-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleLearnMore(item)}
                      >
                        Learn More
                        <motion.i
                          className="fas fa-arrow-right ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        ></motion.i>
                      </motion.button>
                      <motion.button
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.href = `/projects#project-${item.id}`}
                      >
                        View Project
                        <motion.i
                          className="fas fa-eye ml-2"
                        ></motion.i>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="gallery-cta"
        ref={ctaRef}
        variants={staggerContainer}
        initial="hidden"
        animate={ctaControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Ready to Start Your Project?</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>
          <motion.p variants={fadeIn}>
            Contact us today to discuss how COBRIXA Construction can bring your vision to life with our expertise and commitment to excellence.
          </motion.p>
          <motion.div
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
              <motion.i
                className="fas fa-arrow-right ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              ></motion.i>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
              
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
                <div className="accent-line"></div>
              </div>

              <div className="modal-body">
                <div className="modal-image">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>
                
                <div className="project-details">
                  <div className="detail-item">
                    <h3>Description</h3>
                    <p>{selectedProject.description}</p>
                  </div>
                  
                  <div className="detail-item">
                    <h3>Project Information</h3>
                    <ul>
                      <li><strong>Category:</strong> {selectedProject.category}</li>
                      <li><strong>Year:</strong> {selectedProject.year}</li>
                      <li><strong>Client:</strong> {selectedProject.client}</li>
                      <li><strong>Location:</strong> {selectedProject.location}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
