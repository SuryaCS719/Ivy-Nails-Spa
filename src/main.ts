import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <nav>
    <div class="container nav-content">
      <div class="logo">IVY NAILS & SPA</div>
      <button class="menu-toggle" aria-label="Toggle Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
        <li class="mobile-only"><a href="tel:4082252418" class="btn btn-primary">Call to Book</a></li>
      </ul>
      <a href="tel:4082252418" class="btn btn-primary nav-cta">Call to Book</a>
    </div>
  </nav>

  <main>
    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="container hero-content">
        <h1>Your San Jose Sanctuary for Beautiful Nails</h1>
        <p>Experience the perfect blend of care, cleanliness, and style at Santa Teresa Blvd’s favorite neighborhood spa.</p>
        <a href="#services" class="btn btn-primary">Explore Services</a>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="section container">
      <h2 class="section-title">The Ivy Standard</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3rem; text-align: center;">
        <div>
          <h3 style="margin-bottom: 1rem;">Spacious & Serene</h3>
          <p>Plenty of room to relax without feeling rushed. Our boutique layout is designed for your comfort.</p>
        </div>
        <div>
          <h3 style="margin-bottom: 1rem;">Strict Hygiene</h3>
          <p>Your health is our priority; we use medical-grade sanitation for every tool and station.</p>
        </div>
        <div>
          <h3 style="margin-bottom: 1rem;">Complementary Beverages</h3>
          <p>Enjoy a glass of wine or beer while our expert technicians work their magic on your nails.</p>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section" style="background-color: var(--white);">
      <div class="container">
        <h2 class="section-title">Voice of Our Sanctuary</h2>
        <div class="testimonial-grid">
          <div class="testimonial-card">
            <div class="star-rating">★★★★★</div>
            <p>"I went to Ivy Nails and Spa for a pedicure and was so very pleasantly surprised at how beautiful and clean the salon was and how extra special their customer service was."</p>
            <span>— DAWN J.</span>
          </div>
          <div class="testimonial-card">
            <div class="star-rating">★★★★★</div>
            <p>"The atmosphere seemed clean and spacious... The staff was friendly, and my nail technician did a fantastic job."</p>
            <span>— TANISHA B.</span>
          </div>
          <div class="testimonial-card">
            <div class="star-rating">★★★★★</div>
            <p>"Quick and friendly service... my nails turned out amazing."</p>
            <span>— TY N.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="section">
      <div class="container">
        <h2 class="section-title">The Art of Relaxation</h2>
        <div class="gallery-grid">
          <div class="gallery-item">
            <img src="/gallery-1.png" alt="Exquisite Nail Art">
            <div class="gallery-overlay">
              <span>Signature Art</span>
            </div>
          </div>
          <div class="gallery-item large">
            <img src="/gallery-2.png" alt="Serene Spa Interior">
            <div class="gallery-overlay">
              <span>Our Sanctuary</span>
            </div>
          </div>
          <div class="gallery-item">
            <img src="/gallery-3.png" alt="Luxurious Pedicure">
            <div class="gallery-overlay">
              <span>Pure Comfort</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Sneak Peek -->
    <section id="services" class="section container">
      <h2 class="section-title">Our Services</h2>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-img-wrapper">
            <img src="/manicure.png" alt="Manicure">
          </div>
          <h3>Manicures & Pedicures</h3>
          <p>From signature gel treatments to classic spa pedicures. Perfect for your weekly self-care.</p>
          <ul class="service-list">
            <li>Gel Manicure</li>
            <li>Signature Pedicure</li>
            <li>Paraffin Treatment</li>
          </ul>
        </div>
        <div class="service-card highlight">
          <div class="service-img-wrapper">
            <img src="/pedicure.png" alt="Pedicure">
          </div>
          <h3>Nail Enhancements</h3>
          <p>Expert Gel-X, Ombre Dip Powder, and custom extensions tailored to your unique style.</p>
          <ul class="service-list">
            <li>Gel-X Extensions</li>
            <li>Dip Powder</li>
            <li>Custom Nail Art</li>
          </ul>
        </div>
        <div class="service-card">
          <div class="service-img-wrapper">
            <img src="/waxing.png" alt="Waxing">
          </div>
          <h3>Waxing Services</h3>
          <p>Precision waxing for face and body in a private, hygienic environment.</p>
          <ul class="service-list">
            <li>Eyebrow Shaping</li>
            <li>Full Body Waxing</li>
            <li>Gentle Care</li>
          </ul>
        </div>
      </div>
      <div style="text-align: center; margin-top: 4rem;">
        <p>...and much more, including specialty services for children.</p>
        <a href="tel:4082252418" class="btn btn-primary" style="margin-top: 2rem;">Call for Detailed Pricing</a>
      </div>
    </section>

    <!-- Contact & Location Section -->
    <section id="contact" class="section" style="background-color: var(--accent-slate); color: var(--white);">
      <div class="container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 4rem; align-items: center;">
        <div>
          <h2 style="color: var(--white); margin-bottom: 2rem;">Visit Our Sanctuary</h2>
          <p style="margin-bottom: 2rem;">Located conveniently at 6185 Santa Teresa Blvd. We’re open Monday through Saturday to help you find your glow.</p>
          <ul style="list-style: none;">
            <li style="margin-bottom: 1rem;"><strong>📍 Address:</strong> 6185 Santa Teresa Blvd, San Jose</li>
            <li style="margin-bottom: 1rem;"><strong>📞 Phone:</strong> (408) 225-2418</li>
            <li style="margin-bottom: 1rem;"><strong>🕒 Hours:</strong> Mon-Fri 10AM-7PM | Sat 9AM-6PM</li>
          </ul>
        </div>
        <div style="height: 350px; border-radius: 15px; overflow: hidden; box-shadow: var(--shadow);">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.43639832714!2d-121.8021175!3d37.2372558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e2d787037f4cf%3A0x6a0c5c4e4e9f9f9f!2s6185%20Santa%20Teresa%20Blvd%2C%20San%20Jose%2C%20CA%2095123!5e0!3m2!1sen!2sus!4v1704648000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  </main>

  <footer style="background-color: #1a1a1a; color: #888; padding: 3rem 0; text-align: center;">
    <p>&copy; 2026 Ivy Nails & Spa. All rights reserved. | Handcrafted in San Jose.</p>
  </footer>
`

// Mobile Menu Logic
const menuToggle = document.querySelector('.menu-toggle')!;
const navLinks = document.querySelector('.nav-links')!;

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Scroll Animations (Intersection Observer)
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.section, .gallery-item, .service-card, .testimonial-card').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

