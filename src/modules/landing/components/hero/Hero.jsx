import './hero.css';
import logo from '../../../../assets/banner.png'
import { InstagramOutlined, FacebookOutlined, TikTokOutlined } from '@ant-design/icons';
const chickenPath = '/images/roasted-chicken.png';

const Hero = () => {
  const categoriesData = [
    { icon: '🗂️', name: 'Todo', products: 18 },
    { icon: '🍗', name: 'Pollos', products: 18 },
    { icon: '🍔', name: 'Combos', products: 18 },
    { icon: '🥤', name: 'Bebidas', products: 18 },
    { icon: '🍲', name: 'Sopas', products: 18 },
  ];

  return (
    <div className="page-container">
      {/* <header className="header">
        <h1 className="welcome-text">Bienvenido, Luis Angel</h1>
        <div className="header-controls">
          <span className="header-icon">☰</span>
          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Buscar productos" className="search-input" />
          </div>
          <span className="header-icon">🛒</span>
        </div>
      </header> */}

      <div className="banner-container">
        <main className="hero-banner">
            <img src={logo} alt="Logo del restaurante" className="logo" />
        </main>

        {/* --- FOOTER DEL BANNER (REDISEÑADO) --- */}
        <footer className="banner-footer">
          <div className="footer-left-white">
            <div className="location-tag">nos ubicamos</div>
            <p className="info-text">
              <span className="info-icon">📍</span> Av. La Merced N°526 - Carhuaz
            </p>
            <p className="info-text">
              <span className="info-icon">🕙</span> Atendemos de 5 pm a 10 pm
            </p>
          </div>
          <div className="footer-right-red">
            <div className="social-icons">
              <span className="social-icon"><InstagramOutlined/></span>
              <span className="social-icon"><FacebookOutlined/></span>
              <span className="social-icon"><TikTokOutlined/></span>
              <span className="social-icon"><TikTokOutlined/></span>
            </div>
            <button className="call-btn">Llamar</button>
          </div>
        </footer>
      </div>

      <section className="categories">
        {categoriesData.map((item, index) => (
          <div key={index} className={`category-card ${index === 0 ? 'active' : ''}`}>
            <div className="category-icon">{item.icon}</div>
            <div className="category-name">{item.name}</div>
            <div className="category-products">{item.products} productos</div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Hero;
