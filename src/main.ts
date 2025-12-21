import { PRODUCT_DATA, CATEGORIES } from './products';
import { SectionId } from './types';

// State
let activeCategory = '全部';
let isScrolled = false;
let isMobileMenuOpen = false;

// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const categoryFilters = document.getElementById('category-filters');
const productGrid = document.getElementById('product-grid');
const navLinks = document.querySelectorAll('.nav-link');
const yearSpan = document.getElementById('year');

// Initialize
function init() {
  // Set year
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  // Render categories
  renderCategories();

  // Render initial products
  renderProducts();

  // Highlight initial section (Home)
  updateActiveNavLink(SectionId.HOME);

  // Setup Event Listeners
  window.addEventListener('scroll', handleScroll);
  mobileMenuButton?.addEventListener('click', toggleMobileMenu);
  
  // Intersection Observer for active section highlighting
  setupIntersectionObserver();
}

// Navbar Scroll Effect
function handleScroll() {
  const scrolled = window.scrollY > 20;
  if (scrolled !== isScrolled) {
    isScrolled = scrolled;
    if (navbar) {
      if (isScrolled) {
        navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-4');
        navbar.classList.remove('bg-transparent', 'py-6');
      } else {
        navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-4');
        navbar.classList.add('bg-transparent', 'py-6');
      }
    }
  }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  isMobileMenuOpen = !isMobileMenuOpen;
  if (mobileMenu) {
    mobileMenu.classList.toggle('hidden', !isMobileMenuOpen);
  }
  if (menuIcon && closeIcon) {
    menuIcon.classList.toggle('hidden', isMobileMenuOpen);
    closeIcon.classList.toggle('hidden', !isMobileMenuOpen);
  }
}

// Active Nav Link Highlighting
function updateActiveNavLink(sectionId: string) {
  navLinks.forEach((link) => {
    const linkSectionId = link.getAttribute('data-section');
    const isDesktop = link.parentElement?.id === 'desktop-menu';
    
    if (linkSectionId === sectionId) {
      link.classList.add('text-amber-700', 'font-bold');
      if (isDesktop) {
        link.classList.remove('text-stone-600');
      } else {
        link.classList.add('bg-amber-50');
        link.classList.remove('text-stone-600', 'hover:bg-stone-50');
      }
    } else {
      link.classList.remove('text-amber-700', 'font-bold');
      if (isDesktop) {
        link.classList.add('text-stone-600');
      } else {
        link.classList.remove('bg-amber-50');
        link.classList.add('text-stone-600', 'hover:bg-stone-50');
      }
    }
  });
}

// Smooth Scrolling with active link update
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const sectionId = link.getAttribute('data-section');
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // updateActiveNavLink(sectionId); // Observer will handle this better
        if (isMobileMenuOpen) toggleMobileMenu();
      }
    }
  });
});

// Product Rendering
function renderCategories() {
  if (!categoryFilters) return;
  
  categoryFilters.innerHTML = CATEGORIES.map(cat => `
    <button 
      class="category-btn px-6 py-2 rounded-full text-sm font-medium transition-all ${
        activeCategory === cat 
          ? 'bg-amber-700 text-white shadow-md transform scale-105' 
          : 'bg-white text-gray-600 hover:bg-amber-50 hover:text-amber-600 border border-gray-200'
      }"
      data-category="${cat}"
    >
      ${cat}
    </button>
  `).join('');

  // Add click listeners to category buttons
  const categoryBtns = document.querySelectorAll('.category-btn');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');
      if (cat) {
        activeCategory = cat;
        renderCategories(); // Re-render to update active state
        renderProducts();
      }
    });
  });
}

function renderProducts() {
  if (!productGrid) return;

  const filtered = activeCategory === '全部' 
    ? PRODUCT_DATA 
    : PRODUCT_DATA.filter(p => p.category === activeCategory);

  productGrid.innerHTML = filtered.map(product => `
    <div class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div class="relative h-48 overflow-hidden bg-gray-200">
        <img 
          src="${product.imageUrl}" 
          alt="${product.title}" 
          class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          decoding="async"
          onerror="this.src='https://placehold.co/600x400/f5f5f4/a8a29e?text=待上传图片'"
        >
        <div class="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-md">
          ${product.category}
        </div>
      </div>
      <div class="p-5">
        <h3 class="text-lg font-bold text-gray-900 mb-2">${product.title}</h3>
        <p class="text-sm text-gray-500 mb-4 line-clamp-2">${product.description}</p>
      </div>
    </div>
  `).join('');
}

// Intersection Observer for active sections
function setupIntersectionObserver() {
  const options = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateActiveNavLink(entry.target.id);
      }
    });
  }, options);

  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => observer.observe(section));
}

// Start application
init();
