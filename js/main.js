import { comics } from '../data/comics.js';
import { renderHeader, renderFooter, renderComicCard, renderHeroCarousel, renderDetailPage, renderCartPage } from './ui.js';
import * as cart from './cart.js';

const doc = document;
const body = doc.body;

function handleAddToCart(e) {
    const button = e.target.closest('.add-to-cart-btn');
    if (button) {
        const comicId = button.dataset.id;
        const comic = comics.find(c => c.id === comicId);
        if (comic) {
            cart.addToCart(comic);

            const parent = button.parentElement;
            if (parent) {
                const addedFeedback = parent.querySelector('.added-feedback');
                if (addedFeedback) {
                    button.style.display = 'none';
                    addedFeedback.classList.remove('hidden');

                    setTimeout(() => {
                        button.style.display = '';
                        addedFeedback.classList.add('hidden');
                    }, 2500);
                }
            }
        }
    }
}

/**
 * Updates the UI to reflect the current theme (dark/light).
 * Sets the class on the root <html> element and updates the toggle button's icon.
 * @param {string} theme - The theme to apply, either 'light' or 'dark'.
 */
function updateThemeUI(theme) {
    const themeToggleButton = doc.getElementById('theme-toggle');
    doc.documentElement.className = theme;
    
    if (themeToggleButton) {
        themeToggleButton.innerHTML = theme === 'light' 
            ? `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`
            : `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`;
    }
}

/**
 * Determines the initial theme from localStorage or system preference.
 * @returns {string} The calculated theme ('light' or 'dark').
 */
function getInitialTheme() {
    let theme = localStorage.getItem('comicVerseTheme');
    if (!theme) {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme;
}


function initHomePage() {
    const featuredComics = comics.filter(c => c.featured);
    const newReleases = [...comics]
        .sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
        .slice(0, 5);
    const popularSeries = comics.slice(5, 10);

    const carouselContainer = doc.getElementById('hero-carousel-container');
    if (carouselContainer) {
       carouselContainer.innerHTML = renderHeroCarousel(featuredComics);
       // Carousel Logic
       let currentIndex = 0;
       const slides = carouselContainer.querySelectorAll('.carousel-item');
       const dots = carouselContainer.querySelectorAll('.carousel-dot');
       
       const showSlide = (index) => {
           slides.forEach((slide, i) => {
               slide.classList.toggle('absolute', i !== index);
               slide.classList.toggle('opacity-0', i !== index);
           });
           dots.forEach((dot, i) => {
               dot.classList.toggle('bg-comic-yellow', i === index);
               dot.classList.toggle('bg-gray-500', i !== index);
           });
       };

       const nextSlide = () => {
           currentIndex = (currentIndex + 1) % slides.length;
           showSlide(currentIndex);
       };

       carouselContainer.querySelector('.carousel-prev')?.addEventListener('click', () => {
           currentIndex = (currentIndex - 1 + slides.length) % slides.length;
           showSlide(currentIndex);
       });

       carouselContainer.querySelector('.carousel-next')?.addEventListener('click', nextSlide);
       
       dots.forEach((dot, index) => {
           dot.addEventListener('click', () => {
                currentIndex = index;
                showSlide(index);
           })
       })

       setInterval(nextSlide, 5000);
       showSlide(currentIndex);
    }
    
    doc.getElementById('new-releases-section').innerHTML = `
        <div class="flex justify-between items-baseline mb-6">
            <h2 class="text-4xl font-display text-comic-yellow tracking-wide">New Releases</h2>
            <a href="./browse.html" class="text-comic-blue hover:underline">View All</a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            ${newReleases.map(renderComicCard).join('')}
        </div>`;

    doc.getElementById('popular-series-section').innerHTML = `
        <h2 class="text-4xl font-display text-comic-yellow mb-6 tracking-wide">Popular Series</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            ${popularSeries.map(renderComicCard).join('')}
        </div>`;

    const renderPublisherSpotlight = (publisher) => {
        const publisherComics = comics.filter(c => c.publisher === publisher).slice(0, 5);
        const publisherColors = { Marvel: 'bg-comic-red', DC: 'bg-comic-blue', Image: 'bg-comic-gray' };
        return `
            <div class="my-12 p-8 rounded-lg ${publisherColors[publisher]}">
                <h2 class="text-4xl font-display text-white mb-6 tracking-wide">${publisher} Spotlight</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    ${publisherComics.map(renderComicCard).join('')}
                </div>
            </div>`;
    };
    
    doc.getElementById('publisher-spotlights').innerHTML = `
        ${renderPublisherSpotlight('Marvel')}
        ${renderPublisherSpotlight('DC')}
        ${renderPublisherSpotlight('Image')}
    `;
}

function initBrowsePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const publisherParam = urlParams.get('publisher');

    if (publisherParam) {
        doc.getElementById('page-title').textContent = `${publisherParam} Comics`;
    }

    const publisherFilter = doc.getElementById('publisher-filter');
    const genreFilter = doc.getElementById('genre-filter');
    const sortOrder = doc.getElementById('sort-order');
    const comicsGrid = doc.getElementById('comics-grid');

    const publishers = ['All Publishers', ...Array.from(new Set(comics.map(c => c.publisher)))];
    const genres = ['All Genres', ...Array.from(new Set(comics.map(c => c.genre)))];

    publisherFilter.innerHTML = publishers.map(p => `<option value="${p}">${p}</option>`).join('');
    genreFilter.innerHTML = genres.map(g => `<option value="${g}">${g}</option>`).join('');

    if (publisherParam) {
        publisherFilter.value = publisherParam;
        publisherFilter.disabled = true;
    }

    function renderComics() {
        let filtered = [...comics];
        const selectedPublisher = publisherFilter.value;
        const selectedGenre = genreFilter.value;

        if (selectedPublisher !== 'All Publishers') {
            filtered = filtered.filter(comic => comic.publisher === selectedPublisher);
        }
        if (selectedGenre !== 'All Genres') {
            filtered = filtered.filter(comic => comic.genre === selectedGenre);
        }

        switch (sortOrder.value) {
            case 'price-asc': filtered.sort((a, b) => a.price - b.price); break;
            case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
            case 'title-asc': filtered.sort((a, b) => a.title.localeCompare(b.title)); break;
            case 'title-desc': filtered.sort((a, b) => b.title.localeCompare(a.title)); break;
            case 'releaseDate-desc': filtered.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()); break;
            case 'releaseDate-asc': filtered.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()); break;
        }

        if (filtered.length > 0) {
            comicsGrid.innerHTML = filtered.map(renderComicCard).join('');
        } else {
            comicsGrid.innerHTML = `
                <div class="col-span-full text-center py-16">
                    <h2 class="text-2xl font-bold text-gray-600 dark:text-gray-400">No comics found.</h2>
                    <p class="text-gray-500 dark:text-gray-500">Try adjusting your filters.</p>
                </div>`;
        }
    }
    
    publisherFilter.addEventListener('change', renderComics);
    genreFilter.addEventListener('change', renderComics);
    sortOrder.addEventListener('change', renderComics);
    renderComics();
}

function initDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const comicId = urlParams.get('id');
    const comic = comics.find(c => c.id === comicId);
    doc.getElementById('detail-container').innerHTML = renderDetailPage(comic);

    if (comic) {
        doc.getElementById('add-to-cart-detail').addEventListener('click', () => {
            cart.addToCart(comic);
            const addedMessage = doc.getElementById('added-message');
            addedMessage.classList.remove('hidden');
            setTimeout(() => addedMessage.classList.add('hidden'), 2000);
        });
    }
}

function initCartPage() {
    const cartContainer = doc.getElementById('cart-container');
    
    async function render() {
        cartContainer.innerHTML = await renderCartPage();

        // Add event listeners after rendering
        cartContainer.querySelectorAll('[data-action="remove"]').forEach(button => {
            button.addEventListener('click', () => cart.removeFromCart(button.dataset.id));
        });
        cartContainer.querySelectorAll('[data-action="decrement"]').forEach(button => {
            button.addEventListener('click', () => {
                const currentQuantity = parseInt(button.nextElementSibling.textContent);
                cart.updateQuantity(button.dataset.id, currentQuantity - 1);
            });
        });
        cartContainer.querySelectorAll('[data-action="increment"]').forEach(button => {
            button.addEventListener('click', () => {
                const currentQuantity = parseInt(button.previousElementSibling.textContent);
                cart.updateQuantity(button.dataset.id, currentQuantity + 1);
            });
        });
        const checkoutButton = cartContainer.querySelector('#checkout-button');
        if (checkoutButton) {
            checkoutButton.addEventListener('click', () => {
                cart.clearCart();
                window.location.href = './checkout.html';
            });
        }
    }
    
    document.addEventListener('cartchange', render);
    render(); // Initial render
}


// --- Router and Initialization ---
function App() {
    // 1. Render Header & Footer on all pages
    const headerPlaceholder = doc.getElementById('header-placeholder');
    const footerPlaceholder = doc.getElementById('footer-placeholder');
    
    const updateHeader = () => {
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = renderHeader(cart.getCartCount());
            // After re-rendering the header, we must re-apply the theme UI (especially the icon)
            updateThemeUI(doc.documentElement.className);
        }
    };

    if(footerPlaceholder) footerPlaceholder.innerHTML = renderFooter();

    // Attach event listener for theme toggle using delegation. This only needs to run once.
    if (headerPlaceholder) {
        headerPlaceholder.addEventListener('click', e => {
            if (e.target.closest('#theme-toggle')) {
                const newTheme = doc.documentElement.classList.contains('dark') ? 'light' : 'dark';
                localStorage.setItem('comicVerseTheme', newTheme);
                updateThemeUI(newTheme);
            }
        });
    }

    // Set initial theme on page load
    updateThemeUI(getInitialTheme());

    // Listen for cart changes to re-render the header
    document.addEventListener('cartchange', updateHeader);
    
    // Initial header render
    updateHeader();

    // 2. Add global event listeners
    body.addEventListener('click', handleAddToCart);

    // 3. Page-specific logic
    const path = window.location.pathname.split('/').pop();

    if (path === 'index.html' || path === '') {
        initHomePage();
    } else if (path === 'browse.html') {
        initBrowsePage();
    } else if (path === 'comic-detail.html') {
        initDetailPage();
    } else if (path === 'cart.html') {
        initCartPage();
    }
}

// Run the app when the DOM is ready
doc.addEventListener('DOMContentLoaded', App);