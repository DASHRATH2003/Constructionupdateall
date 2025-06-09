import { useState, useEffect } from 'react';
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

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [loadedImages, setLoadedImages] = useState({});

  // Gallery data
  const galleryItems = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'construction',
      image: image1,
      description: 'A state-of-the-art office complex featuring sustainable design and smart building technology.',
    },
    {
      id: 2,
      title: 'Luxury Residential Tower',
      category: 'construction',
      image: image2,
      description: 'High-end residential tower with premium amenities and panoramic city views.',
    },
    {
      id: 3,
      title: 'Industrial Warehouse Conversion',
      category: 'construction',
      image: image3,
      description: 'Transformation of an industrial warehouse into a modern mixed-use space.',
    },
    {
      id: 4,
      title: 'Sustainable Community Center',
      category: 'construction',
      image: image4,
      description: 'Community center built with eco-friendly materials and renewable energy systems.',
    },
    {
      id: 5,
      title: 'Historic Building Restoration',
      category: 'renovation',
      image: image5,
      description: 'Careful restoration of a historic building, preserving architectural details while modernizing systems.',
    },
    {
      id: 6,
      title: 'Luxury Villa',
      category: 'construction',
      image: image6,
      description: 'Custom-designed luxury villa with infinity pool and smart home integration.',
    },
    {
      id: 7,
      title: 'Modern Shopping Mall',
      category: 'construction',
      image: image7,
      description: 'Contemporary shopping center with innovative design and premium retail spaces.',
    },
    {
      id: 8,
      title: 'Urban Apartment Complex',
      category: 'construction',
      image: image8,
      description: 'Modern urban living with thoughtfully designed apartments and community spaces.',
    },
    {
      id: 9,
      title: 'Manufacturing Facility',
      category: 'industrial',
      image: image9,
      description: 'State-of-the-art manufacturing facility designed for efficiency and worker comfort.',
    },
    {
      id: 10,
      title: 'Eco-Friendly School Campus',
      category: 'construction',
      image: image10,
      description: 'Modern educational facility with sustainable design principles and innovative learning spaces.',
    },
    {
      id: 11,
      title: 'Corporate Headquarters',
      category: 'construction',
      image: image11,
      description: 'Flagship office building with cutting-edge design, sustainability features, and employee amenities.',
    },
    {
      id: 12,
      title: 'Modern Home Design',
      category: 'interior-design',
      image: image12,
      description: 'Contemporary home interior with custom furnishings and modern aesthetics.',
    },
    {
      id: 13,
      title: 'Commercial Office Interior',
      category: 'interior-design',
      image: image13,
      description: 'Modern office space designed for productivity and collaboration.',
    },
    {
      id: 14,
      title: 'Residential Renovation',
      category: 'renovation',
      image: image14,
      description: 'Complete home renovation with modern amenities and preserved character.',
    },
    {
      id: 15,
      title: 'Industrial Complex',
      category: 'industrial',
      image: image15,
      description: 'Modern industrial facility with advanced manufacturing capabilities.',
    },
    {
      id: 16,
      title: 'Construction Overview',
      category: 'construction',
      image: image7,
      description: 'Showcasing our construction expertise and capabilities.',
    },
    {
      id: 17,
      title: 'Featured Project',
      category: 'construction',
      image: image12,
      description: 'Highlighting our signature construction projects.',
    },
    {
      id: 18,
      title: 'Luxury Hotel Interior',
      category: 'interior-design',
      image: image3,
      description: 'Elegant hotel interior featuring premium materials and sophisticated design elements.',
    },
    {
      id: 19,
      title: 'Modern Restaurant Design',
      category: 'interior-design',
      image: image4,
      description: 'Contemporary restaurant space with innovative lighting and custom furnishings.',
    },
    {
      id: 20,
      title: 'Historic Theater Renovation',
      category: 'renovation',
      image: image5,
      description: 'Meticulous restoration of a historic theater, preserving its architectural heritage.',
    },
    {
      id: 21,
      title: 'Boutique Hotel',
      category: 'construction',
      image: image6,
      description: 'Luxury boutique hotel combining modern amenities with classic elegance.',
    },
    {
      id: 22,
      title: 'Tech Campus Development',
      category: 'construction',
      image: image7,
      description: 'Innovative tech campus with collaborative spaces and cutting-edge facilities.',
    },
    {
      id: 23,
      title: 'Wellness Center',
      category: 'interior-design',
      image: image8,
      description: 'Modern wellness facility designed for relaxation and rejuvenation.',
    },
    {
      id: 24,
      title: 'Industrial Research Facility',
      category: 'industrial',
      image: image9,
      description: 'Advanced research facility with specialized laboratories and equipment.',
    },
    {
      id: 25,
      title: 'Urban Retail Complex',
      category: 'construction',
      image: image10,
      description: 'Mixed-use retail development in the heart of the city.',
    },
    {
      id: 26,
      title: 'Executive Suite Design',
      category: 'interior-design',
      image: image11,
      description: 'Premium office suite designed for corporate executives.',
    },
    {
      id: 27,
      title: 'Heritage Building Restoration',
      category: 'renovation',
      image: image12,
      description: 'Careful restoration of a heritage building with modern updates.',
    },
    {
      id: 28,
      title: 'Logistics Center',
      category: 'industrial',
      image: image13,
      description: 'State-of-the-art logistics facility with automated systems.',
    },
    {
      id: 29,
      title: 'Residential Complex',
      category: 'construction',
      image: image14,
      description: 'Modern residential development with community amenities.',
    },
    {
      id: 30,
      title: 'Data Center Facility',
      category: 'industrial',
      image: image15,
      description: 'High-security data center with advanced cooling systems.',
    }
  ];

  useEffect(() => {
    // Reset loaded state when filter changes
    setLoadedImages({});
    
    // Preload images for current filter
    const itemsToLoad = filter === 'all' 
      ? galleryItems 
      : galleryItems.filter(item => item.category === filter);

    itemsToLoad.forEach(item => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => ({
          ...prev,
          [item.id]: true
        }));
      };
      img.src = item.image;
    });
  }, [filter]);

  const renderGalleryItem = (item) => (
    <div key={item.id} className="gallery-item">
      <div className="gallery-image">
        {!loadedImages[item.id] && (
          <div className="image-loading">Loading...</div>
        )}
        <img
          src={item.image}
          alt={item.title}
          className={loadedImages[item.id] ? 'loaded' : ''}
          onLoad={() => {
            setLoadedImages(prev => ({
              ...prev,
              [item.id]: true
            }));
          }}
        />
        <div className="gallery-overlay">
          <span className="category">{item.category}</span>
          <button className="view-btn">View Details</button>
        </div>
      </div>
      <div className="gallery-info">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="gallery-page">
      <section className="gallery-section">
        <div className="container">
          <h2>Our Project Gallery</h2>
          <div className="accent-line"></div>
          <p className="section-intro">
            Explore our diverse portfolio of completed projects, showcasing our expertise in construction and design.
          </p>

          <div className="gallery-filter">
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
              className={filter === 'renovation' ? 'active' : ''}
              onClick={() => setFilter('renovation')}
            >
              Renovation
            </button>
            <button
              className={filter === 'industrial' ? 'active' : ''}
              onClick={() => setFilter('industrial')}
            >
              Industrial
            </button>
          </div>

          <div className="gallery-grid">
            {filteredItems.map(renderGalleryItem)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
