export function renderHeader(cartCount) {
    const activeClass = 'text-comic-yellow underline';
    const path = window.location.pathname.split('/').pop();
    
    return `
    <nav class="bg-white/80 dark:bg-comic-light/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <a href="/" class="font-display text-4xl tracking-wider">
                       <span class="bg-clip-text text-transparent bg-gradient-to-r from-comic-red via-comic-yellow to-comic-blue">
                            ComicVerse
                        </span>
                    </a>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <a href="./index.html" class="text-gray-700 dark:text-white hover:text-comic-yellow transition-colors duration-300 px-3 py-2 rounded-md text-base font-medium ${path === 'index.html' || path === '' ? activeClass : ''}">Home</a>
                        <div class="relative group">
                            <a href="./browse.html" class="text-gray-700 dark:text-white hover:text-comic-yellow transition-colors duration-300 px-3 py-2 rounded-md text-base font-medium flex items-center ${path === 'browse.html' ? activeClass : ''}">
                                Browse <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </a>
                            <div class="absolute top-full mt-2 w-48 bg-white dark:bg-comic-light rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
                                <a href="./browse.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-comic-gray">All Comics</a>
                                <a href="./browse.html?publisher=Marvel" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-comic-gray">Marvel</a>
                                <a href="./browse.html?publisher=DC" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-comic-gray">DC</a>
                                <a href="./browse.html?publisher=Image" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-comic-gray">Image</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center">
                    <button id="theme-toggle" class="text-gray-700 dark:text-white hover:text-comic-yellow transition-colors duration-300 p-2 rounded-full">
                        <!-- Moon/Sun Icon injected by JS -->
                    </button>
                     <a href="./cart.html" class="relative text-gray-700 dark:text-white hover:text-comic-yellow transition-colors duration-300 p-2 rounded-full ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        ${cartCount > 0 ? `<span class="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-comic-red rounded-full">${cartCount}</span>` : ''}
                    </a>
                </div>
            </div>
        </div>
    </nav>
    `;
}

export function renderFooter() {
    return `
    <div class="bg-gray-200 dark:bg-comic-light border-t border-gray-300 dark:border-comic-gray mt-12">
        <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center md:text-left">
                    <h3 class="text-2xl font-display text-gray-900 dark:text-white">ComicVerse Hub</h3>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Your portal to infinite comic adventures.</p>
                </div>
                <div class="flex justify-center space-x-6">
                    <a href="./index.html" class="text-gray-600 dark:text-gray-400 hover:text-comic-yellow">Home</a>
                    <a href="./browse.html" class="text-gray-600 dark:text-gray-400 hover:text-comic-yellow">Browse</a>
                    <a href="./cart.html" class="text-gray-600 dark:text-gray-400 hover:text-comic-yellow">Cart</a>
                </div>
                 <div class="text-center md:text-right">
                    <p class="text-sm text-gray-600 dark:text-gray-400">&copy; ${new Date().getFullYear()} ComicVerse Hub. All rights reserved.</p>
                    <p class="text-xs text-gray-500 mt-1">This is a fictional store for demonstration purposes.</p>
                </div>
            </div>
        </div>
    </div>
    `;
}

export function renderComicCard(comic) {
    const publisherColors = {
        Marvel: 'bg-comic-red text-white',
        DC: 'bg-comic-blue text-white',
        Image: 'bg-black text-white'
    };
    const publisherClass = publisherColors[comic.publisher] || 'bg-comic-gray text-white';

    return `
    <div class="relative rounded-lg shadow-lg overflow-hidden group transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <a href="./comic-detail.html?id=${comic.id}" class="block aspect-[3/4]">
            <img src="${comic.coverImage}" alt="${comic.title}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
        </a>
        
        <div class="absolute top-2 right-2 ${publisherClass} text-xs font-bold px-2 py-1 rounded z-10">${comic.publisher}</div>

        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
             <a href="./comic-detail.html?id=${comic.id}">
                <h3 class="text-xl font-bold text-white truncate group-hover:text-comic-yellow transition-colors duration-300">${comic.title}</h3>
            </a>
            
            <div class="flex justify-between items-center mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                <p class="text-2xl font-bold text-white">$${comic.price.toFixed(2)}</p>
                
                <div>
                    <button 
                        data-id="${comic.id}"
                        class="add-to-cart-btn bg-comic-red hover:bg-comic-yellow text-white font-bold py-2 px-4 rounded-full transform hover:-translate-y-1 transition-all duration-200"
                        aria-label="Add ${comic.title} to cart"
                    >
                        Add to Cart
                    </button>
                    <div class="added-feedback hidden text-right mt-1">
                         <p class="text-sm font-bold text-green-400 flex items-center justify-end">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            Added!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}


export function renderHeroCarousel(featuredComics) {
    if (!featuredComics || featuredComics.length === 0) return '';
    return `
    <div class="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        ${featuredComics.map((comic, index) => `
            <div class="carousel-item absolute inset-0 duration-1000 ${index !== 0 ? 'opacity-0' : ''}" data-index="${index}">
                <!-- Background Image -->
                <div
                    class="absolute inset-0 bg-cover bg-center"
                    style="background-image: url(${comic.coverImage})"
                >
                  <div class="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
                </div>

                <!-- Content -->
                <div class="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto h-full px-4 text-white text-center md:text-left">
                    <div class="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                        <img src="${comic.coverImage}" alt="${comic.title}" class="w-52 md:w-72 rounded-lg shadow-2xl" />
                    </div>
                    <div class="w-full md:w-2/3 md:pl-12">
                        <h2 class="font-display text-4xl md:text-7xl text-comic-yellow tracking-wider hero-text-shadow">${comic.title}</h2>
                        <p class="mt-4 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 hero-text-shadow">${comic.description}</p>
                        <div class="mt-8 flex justify-center md:justify-start space-x-4">
                            <a href="./comic-detail.html?id=${comic.id}" class="bg-comic-red hover:bg-comic-yellow text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
                                Learn More
                            </a>
                            <a href="./browse.html" class="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
                                Browse All
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `).join('')}
        
        <!-- Navigation -->
        <button class="carousel-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-comic-red z-20 text-white">&lt;</button>
        <button class="carousel-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-comic-red z-20 text-white">&gt;</button>

        <!-- Dots -->
        <div class="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            ${featuredComics.map((_, index) => `
                <button class="carousel-dot w-3 h-3 rounded-full transition-colors ${index === 0 ? 'bg-comic-yellow' : 'bg-gray-500'}" data-index="${index}"></button>
            `).join('')}
        </div>
    </div>
    `;
}

export function renderDetailPage(comic) {
    if (!comic) {
        return `
        <div class="text-center py-20">
            <h1 class="text-4xl font-bold text-comic-red">Comic Not Found</h1>
            <a href="./browse.html" class="mt-4 inline-block text-comic-blue hover:underline">Back to Browse</a>
        </div>`;
    }
    return `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div class="flex justify-center">
            <img 
                src="${comic.coverImage}" 
                alt="${comic.title}" 
                class="rounded-lg shadow-2xl w-full max-w-md object-cover transition-transform duration-300 hover:scale-105"
            />
        </div>
        <div>
            <h1 class="text-5xl font-display text-comic-yellow tracking-wider">${comic.title}</h1>
            <p class="text-xl text-comic-blue font-bold mt-2">${comic.publisher}</p>
            <p class="text-3xl font-bold text-gray-900 dark:text-white my-4">$${comic.price.toFixed(2)}</p>
            <div class="prose lg:prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 mb-6">
                <p>${comic.description}</p>
            </div>

            <div class="bg-gray-100 dark:bg-comic-light p-4 rounded-lg space-y-3 text-base mb-6">
                <p><strong>Writer:</strong> ${comic.creators.writer}</p>
                <p><strong>Artist:</strong> ${comic.creators.artist}</p>
                <p><strong>Genre:</strong> ${comic.genre}</p>
                <p><strong>Release Date:</strong> ${new Date(comic.releaseDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                 <p><strong>Characters:</strong> ${comic.characters.join(', ')}</p>
            </div>

            <button id="add-to-cart-detail" class="w-full bg-comic-red hover:bg-comic-yellow text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:-translate-y-1">
                Add to Cart
            </button>
            <p id="added-message" class="text-center text-green-400 mt-4 hidden">Added to cart!</p>
        </div>
    </div>
    `;
}

export async function renderCartPage() {
    const { getCartItems, getTotalPrice } = await import('./cart.js');
    const cartItems = getCartItems();
    
    if (cartItems.length === 0) {
        return `
            <div class="text-center py-20">
                <h1 class="text-4xl font-display text-comic-yellow tracking-wider">Your Cart is Empty</h1>
                <p class="text-gray-600 dark:text-gray-400 mt-2">Looks like you haven't added any comics yet.</p>
                <a href="./browse.html" class="mt-6 inline-block bg-comic-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-comic-yellow transition-colors">
                    Start Browsing
                </a>
            </div>`;
    }

    const totalPrice = getTotalPrice();

    return `
        <h1 class="text-5xl font-display text-comic-yellow tracking-wider text-center mb-8">Shopping Cart</h1>
        <div class="bg-white dark:bg-comic-light rounded-lg shadow-lg">
            <ul class="divide-y divide-gray-200 dark:divide-comic-gray">
                ${cartItems.map(item => `
                    <li key="${item.id}" class="flex items-center p-4 space-x-4">
                        <img src="${item.coverImage}" alt="${item.title}" class="w-20 h-30 object-cover rounded" />
                        <div class="flex-grow">
                            <a href="./comic-detail.html?id=${item.id}" class="font-bold text-lg hover:text-comic-yellow">${item.title}</a>
                            <p class="text-sm text-gray-500 dark:text-gray-400">$${item.price.toFixed(2)} each</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <button data-action="decrement" data-id="${item.id}" class="px-2 py-1 bg-gray-200 dark:bg-comic-gray rounded">-</button>
                            <span class="w-10 text-center">${item.quantity}</span>
                            <button data-action="increment" data-id="${item.id}" class="px-2 py-1 bg-gray-200 dark:bg-comic-gray rounded">+</button>
                        </div>
                        <p class="font-bold w-20 text-right">$${(item.price * item.quantity).toFixed(2)}</p>
                        <button data-action="remove" data-id="${item.id}" class="text-comic-red hover:text-red-400 font-bold text-2xl leading-none">
                            &times;
                        </button>
                    </li>
                `).join('')}
            </ul>

            <div class="p-6 border-t border-gray-200 dark:border-comic-gray">
                <div class="flex justify-end items-center">
                    <span class="text-xl font-bold">Total:</span>
                    <span class="text-2xl font-bold text-comic-yellow ml-4">$${totalPrice.toFixed(2)}</span>
                </div>
                <button id="checkout-button" class="w-full mt-6 bg-comic-red hover:bg-comic-yellow text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-300">
                    Proceed to Checkout
                </button>
            </div>
        </div>`;
}