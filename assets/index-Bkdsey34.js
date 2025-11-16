(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const h of n.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const p=[{id:"m-001",title:"Amazing Fantasy #15",description:"The first appearance of the amazing Spider-Man! A bite from a radioactive spider grants high-school student Peter Parker incredible arachnid-like powers.",coverImage:"public/assets/images/m-001.jpg",price:19.62,publisher:"Marvel",characters:["Spider-Man (Peter Parker)"],genre:"Superhero",releaseDate:"1962-08-10",creators:{writer:"Stan Lee",artist:"Steve Ditko"},featured:!0},{id:"m-002",title:"House of X #1",description:"A new era for the X-Men begins! Charles Xavier reveals his master plan for mutantkind, one that will change the world forever.",coverImage:"public/assets/images/m-002.jpeg",price:5.99,publisher:"Marvel",characters:["Charles Xavier","Cyclops","Magneto"],genre:"Superhero",releaseDate:"2019-07-24",creators:{writer:"Jonathan Hickman",artist:"Pepe Larraz"},featured:!0},{id:"m-003",title:"Civil War #1",description:"After a horrific tragedy, the U.S. Government passes a Superhuman Registration Act, tearing the hero community apart. Whose side are you on?",coverImage:"public/assets/images/m-003.jpeg",price:4.99,publisher:"Marvel",characters:["Iron Man","Captain America","Spider-Man"],genre:"Superhero",releaseDate:"2006-05-01",creators:{writer:"Mark Millar",artist:"Steve McNiven"}},{id:"m-004",title:"Ms. Marvel #1 (2014)",description:"Kamala Khan, a teenager from Jersey City, discovers she has extraordinary polymorphic powers and takes on the mantle of Ms. Marvel.",coverImage:"public/assets/images/m-004.jpg",price:2.99,publisher:"Marvel",characters:["Ms. Marvel (Kamala Khan)"],genre:"Superhero",releaseDate:"2014-02-05",creators:{writer:"G. Willow Wilson",artist:"Adrian Alphona"}},{id:"m-005",title:"Infinity Gauntlet #1",description:"The Mad Titan Thanos has seized control of the six Infinity Gems and wields ultimate power. Can the heroes of the universe stop him before he wipes out half of all life?",coverImage:"public/assets/images/m-005.jpg",price:3.99,publisher:"Marvel",characters:["Thanos","Adam Warlock","Silver Surfer"],genre:"Sci-Fi",releaseDate:"1991-07-01",creators:{writer:"Jim Starlin",artist:"George Pérez"}},{id:"m-006",title:"Black Panther #1 (2016)",description:"A new era for the King of Wakanda. T'Challa faces a dramatic upheaval in his homeland that will make him question everything he holds dear.",coverImage:"public/assets/images/m-006.jpeg",price:4.99,publisher:"Marvel",characters:["Black Panther (T'Challa)"],genre:"Superhero",releaseDate:"2016-04-06",creators:{writer:"Ta-Nehisi Coates",artist:"Brian Stelfreeze"}},{id:"m-007",title:"Daredevil: Born Again",description:"Karen Page sells Daredevil's secret identity for a drug fix, and the information makes its way to the Kingpin, who uses it to destroy Matt Murdock's life.",coverImage:"public/assets/images/m-007.jpg",price:19.99,publisher:"Marvel",characters:["Daredevil","Kingpin","Karen Page"],genre:"Superhero",releaseDate:"1986-02-01",creators:{writer:"Frank Miller",artist:"David Mazzucchelli"}},{id:"d-001",title:"Batman: The Killing Joke",description:"The Joker escapes from Arkham Asylum and attempts to drive Commissioner Gordon insane to prove that one bad day can make anyone as mad as he is.",coverImage:"public/assets/images/d-001.jpg",price:7.99,publisher:"DC",characters:["Batman","The Joker","Barbara Gordon"],genre:"Superhero",releaseDate:"1988-03-29",creators:{writer:"Alan Moore",artist:"Brian Bolland"},featured:!0},{id:"d-002",title:"Watchmen #1",description:"In an alternate 1985, a murder investigation of a state-sponsored vigilante uncovers a conspiracy that could change the course of history.",coverImage:"public/assets/images/d-002.jpeg",price:2.99,publisher:"DC",characters:["Rorschach","The Comedian","Dr. Manhattan"],genre:"Superhero",releaseDate:"1986-09-01",creators:{writer:"Alan Moore",artist:"Dave Gibbons"}},{id:"d-003",title:"The Dark Knight Returns #1",description:"In a dystopian near-future, a 55-year-old Bruce Wayne is forced out of retirement to once again become Batman and fight crime in Gotham City.",coverImage:"public/assets/images/d-003.jpg",price:6.99,publisher:"DC",characters:["Batman","Carrie Kelley","The Mutant Leader"],genre:"Superhero",releaseDate:"1986-02-01",creators:{writer:"Frank Miller",artist:"Frank Miller"}},{id:"d-004",title:"All-Star Superman #1",description:"After being over-exposed to the sun, Superman begins to develop new powers and must confront his own mortality as he performs incredible feats.",coverImage:"public/assets/images/d-004.jpeg",price:2.99,publisher:"DC",characters:["Superman","Lois Lane","Lex Luthor"],genre:"Superhero",releaseDate:"2005-11-01",creators:{writer:"Grant Morrison",artist:"Frank Quitely"}},{id:"d-005",title:"Kingdom Come #1",description:"In a future where a new generation of reckless superheroes runs rampant, Superman and the Justice League must return to rein them in.",coverImage:"public/assets/images/d-005.jpeg",price:4.99,publisher:"DC",characters:["Superman","Wonder Woman","The Spectre"],genre:"Superhero",releaseDate:"1996-05-01",creators:{writer:"Mark Waid",artist:"Alex Ross"}},{id:"d-006",title:"The Sandman #1",description:"After 70 years of imprisonment, Dream, the personification of dreams, escapes and sets out to restore his fallen kingdom.",coverImage:"public/assets/images/d-006.jpeg",price:1.99,publisher:"DC",characters:["Dream (Morpheus)"],genre:"Fantasy",releaseDate:"1989-01-01",creators:{writer:"Neil Gaiman",artist:"Sam Kieth"}},{id:"d-007",title:"Wonder Woman #1 (2016)",description:"Wonder Woman's origins are re-examined as she tries to uncover the truth about her past, torn between her duty to Themyscira and the world of men.",coverImage:"public/assets/images/d-007.jpg",price:2.99,publisher:"DC",characters:["Wonder Woman","Steve Trevor"],genre:"Superhero",releaseDate:"2016-06-22",creators:{writer:"Greg Rucka",artist:"Liam Sharp"}},{id:"i-001",title:"Saga #1",description:"An epic space opera/fantasy series about two soldiers from opposing alien races who fall in love and struggle to survive with their newborn child.",coverImage:"public/assets/images/i-001.jpeg",price:2.99,publisher:"Image",characters:["Alana","Marko","Hazel"],genre:"Sci-Fi",releaseDate:"2012-03-14",creators:{writer:"Brian K. Vaughan",artist:"Fiona Staples"},featured:!0},{id:"i-002",title:"The Walking Dead #1",description:"Police officer Rick Grimes wakes from a coma to find the world overrun by zombies. The fight for survival begins.",coverImage:"public/assets/images/i-002.jpeg",price:2.99,publisher:"Image",characters:["Rick Grimes"],genre:"Horror",releaseDate:"2003-10-08",creators:{writer:"Robert Kirkman",artist:"Tony Moore"}},{id:"i-003",title:"Invincible #1",description:"Mark Grayson is a normal high school student whose father is the most powerful superhero on the planet. Soon, Mark begins to develop powers of his own.",coverImage:"public/assets/images/i-003.jpeg",price:1.99,publisher:"Image",characters:["Invincible","Omni-Man"],genre:"Superhero",releaseDate:"2003-01-22",creators:{writer:"Robert Kirkman",artist:"Cory Walker"}},{id:"i-004",title:"Paper Girls #1",description:"In the early hours after Halloween 1988, four 12-year-old newspaper delivery girls uncover the most important story of all time.",coverImage:"public/assets/images/i-005.jpeg",price:3.99,publisher:"Image",characters:["Erin","Mac","Tiffany","KJ"],genre:"Sci-Fi",releaseDate:"2015-10-07",creators:{writer:"Brian K. Vaughan",artist:"Cliff Chiang"}},{id:"d-008",title:"Action Comics #1000",description:"A landmark issue celebrating 80 years of Superman! An oversized special featuring a collection of stories from an all-star lineup of creators.",coverImage:"public/assets/images/d-008.jpeg",price:7.99,publisher:"DC",characters:["Superman"],genre:"Superhero",releaseDate:"2018-04-18",creators:{writer:"Various",artist:"Various"}},{id:"m-008",title:"X-Men #1 (1991)",description:"The best-selling comic book of all time! Magneto returns, and the X-Men are split into two teams to handle the world's mutant threats.",coverImage:"public/assets/images/m-008.jpeg",price:1.99,publisher:"Marvel",characters:["Cyclops","Wolverine","Magneto","Beast"],genre:"Superhero",releaseDate:"1991-10-01",creators:{writer:"Chris Claremont",artist:"Jim Lee"}}],D="modulepreload",L=function(e){return"/"+e},M={},T=function(t,a,i){let r=Promise.resolve();if(a&&a.length>0){let h=function(s){return Promise.all(s.map(g=>Promise.resolve(g).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),m=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=h(a.map(s=>{if(s=L(s),s in M)return;M[s]=!0;const g=s.endsWith(".css"),u=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${u}`))return;const l=document.createElement("link");if(l.rel=g?"stylesheet":D,g||(l.as="script"),l.crossOrigin="",l.href=s,m&&l.setAttribute("nonce",m),document.head.appendChild(l),g)return new Promise((c,f)=>{l.addEventListener("load",c),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})}))}function n(h){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=h,window.dispatchEvent(o),!o.defaultPrevented)throw h}return r.then(h=>{for(const o of h||[])o.status==="rejected"&&n(o.reason);return t().catch(n)})};function E(e){const t="text-comic-yellow underline",a=window.location.pathname.split("/").pop();return`
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
                        <a href="./index.html" class="text-gray-700 dark:text-white hover:text-comic-yellow transition-colors duration-300 px-3 py-2 rounded-md text-base font-medium ${a==="index.html"||a===""?t:""}">Home</a>
                        <div class="relative group">
                            <a href="./browse.html" class="text-gray-700 dark:text-white hover:text-comic-yellow transition-colors duration-300 px-3 py-2 rounded-md text-base font-medium flex items-center ${a==="browse.html"?t:""}">
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
                        ${e>0?`<span class="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-comic-red rounded-full">${e}</span>`:""}
                    </a>
                </div>
            </div>
        </div>
    </nav>
    `}function j(){return`
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
    `}function b(e){const a={Marvel:"bg-comic-red text-white",DC:"bg-comic-blue text-white",Image:"bg-black text-white"}[e.publisher]||"bg-comic-gray text-white";return`
    <div class="relative rounded-lg shadow-lg overflow-hidden group transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <a href="./comic-detail.html?id=${e.id}" class="block aspect-[3/4]">
            <img src="${e.coverImage}" alt="${e.title}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
        </a>
        
        <div class="absolute top-2 right-2 ${a} text-xs font-bold px-2 py-1 rounded z-10">${e.publisher}</div>

        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
             <a href="./comic-detail.html?id=${e.id}">
                <h3 class="text-xl font-bold text-white truncate group-hover:text-comic-yellow transition-colors duration-300">${e.title}</h3>
            </a>
            
            <div class="flex justify-between items-center mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                <p class="text-2xl font-bold text-white">$${e.price.toFixed(2)}</p>
                
                <div>
                    <button 
                        data-id="${e.id}"
                        class="add-to-cart-btn bg-comic-red hover:bg-comic-yellow text-white font-bold py-2 px-4 rounded-full transform hover:-translate-y-1 transition-all duration-200"
                        aria-label="Add ${e.title} to cart"
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
    `}function A(e){return!e||e.length===0?"":`
    <div class="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        ${e.map((t,a)=>`
            <div class="carousel-item absolute inset-0 duration-1000 ${a!==0?"opacity-0":""}" data-index="${a}">
                <!-- Background Image -->
                <div
                    class="absolute inset-0 bg-cover bg-center"
                    style="background-image: url(${t.coverImage})"
                >
                  <div class="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
                </div>

                <!-- Content -->
                <div class="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto h-full px-4 text-white text-center md:text-left">
                    <div class="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                        <img src="${t.coverImage}" alt="${t.title}" class="w-52 md:w-72 rounded-lg shadow-2xl" />
                    </div>
                    <div class="w-full md:w-2/3 md:pl-12">
                        <h2 class="font-display text-4xl md:text-7xl text-comic-yellow tracking-wider hero-text-shadow">${t.title}</h2>
                        <p class="mt-4 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 hero-text-shadow">${t.description}</p>
                        <div class="mt-8 flex justify-center md:justify-start space-x-4">
                            <a href="./comic-detail.html?id=${t.id}" class="bg-comic-red hover:bg-comic-yellow text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
                                Learn More
                            </a>
                            <a href="./browse.html" class="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
                                Browse All
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `).join("")}
        
        <!-- Navigation -->
        <button class="carousel-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-comic-red z-20 text-white">&lt;</button>
        <button class="carousel-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-comic-red z-20 text-white">&gt;</button>

        <!-- Dots -->
        <div class="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            ${e.map((t,a)=>`
                <button class="carousel-dot w-3 h-3 rounded-full transition-colors ${a===0?"bg-comic-yellow":"bg-gray-500"}" data-index="${a}"></button>
            `).join("")}
        </div>
    </div>
    `}function P(e){return e?`
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div class="flex justify-center">
            <img 
                src="${e.coverImage}" 
                alt="${e.title}" 
                class="rounded-lg shadow-2xl w-full max-w-md object-cover transition-transform duration-300 hover:scale-105"
            />
        </div>
        <div>
            <h1 class="text-5xl font-display text-comic-yellow tracking-wider">${e.title}</h1>
            <p class="text-xl text-comic-blue font-bold mt-2">${e.publisher}</p>
            <p class="text-3xl font-bold text-gray-900 dark:text-white my-4">$${e.price.toFixed(2)}</p>
            <div class="prose lg:prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 mb-6">
                <p>${e.description}</p>
            </div>

            <div class="bg-gray-100 dark:bg-comic-light p-4 rounded-lg space-y-3 text-base mb-6">
                <p><strong>Writer:</strong> ${e.creators.writer}</p>
                <p><strong>Artist:</strong> ${e.creators.artist}</p>
                <p><strong>Genre:</strong> ${e.genre}</p>
                <p><strong>Release Date:</strong> ${new Date(e.releaseDate).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}</p>
                 <p><strong>Characters:</strong> ${e.characters.join(", ")}</p>
            </div>

            <button id="add-to-cart-detail" class="w-full bg-comic-red hover:bg-comic-yellow text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:-translate-y-1">
                Add to Cart
            </button>
            <p id="added-message" class="text-center text-green-400 mt-4 hidden">Added to cart!</p>
        </div>
    </div>
    `:`
        <div class="text-center py-20">
            <h1 class="text-4xl font-bold text-comic-red">Comic Not Found</h1>
            <a href="./browse.html" class="mt-4 inline-block text-comic-blue hover:underline">Back to Browse</a>
        </div>`}async function B(){const{getCartItems:e,getTotalPrice:t}=await T(async()=>{const{getCartItems:r,getTotalPrice:n}=await Promise.resolve().then(()=>F);return{getCartItems:r,getTotalPrice:n}},void 0),a=e();if(a.length===0)return`
            <div class="text-center py-20">
                <h1 class="text-4xl font-display text-comic-yellow tracking-wider">Your Cart is Empty</h1>
                <p class="text-gray-600 dark:text-gray-400 mt-2">Looks like you haven't added any comics yet.</p>
                <a href="./browse.html" class="mt-6 inline-block bg-comic-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-comic-yellow transition-colors">
                    Start Browsing
                </a>
            </div>`;const i=t();return`
        <h1 class="text-5xl font-display text-comic-yellow tracking-wider text-center mb-8">Shopping Cart</h1>
        <div class="bg-white dark:bg-comic-light rounded-lg shadow-lg">
            <ul class="divide-y divide-gray-200 dark:divide-comic-gray">
                ${a.map(r=>`
                    <li key="${r.id}" class="flex items-center p-4 space-x-4">
                        <img src="${r.coverImage}" alt="${r.title}" class="w-20 h-30 object-cover rounded" />
                        <div class="flex-grow">
                            <a href="./comic-detail.html?id=${r.id}" class="font-bold text-lg hover:text-comic-yellow">${r.title}</a>
                            <p class="text-sm text-gray-500 dark:text-gray-400">$${r.price.toFixed(2)} each</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <button data-action="decrement" data-id="${r.id}" class="px-2 py-1 bg-gray-200 dark:bg-comic-gray rounded">-</button>
                            <span class="w-10 text-center">${r.quantity}</span>
                            <button data-action="increment" data-id="${r.id}" class="px-2 py-1 bg-gray-200 dark:bg-comic-gray rounded">+</button>
                        </div>
                        <p class="font-bold w-20 text-right">$${(r.price*r.quantity).toFixed(2)}</p>
                        <button data-action="remove" data-id="${r.id}" class="text-comic-red hover:text-red-400 font-bold text-2xl leading-none">
                            &times;
                        </button>
                    </li>
                `).join("")}
            </ul>

            <div class="p-6 border-t border-gray-200 dark:border-comic-gray">
                <div class="flex justify-end items-center">
                    <span class="text-xl font-bold">Total:</span>
                    <span class="text-2xl font-bold text-comic-yellow ml-4">$${i.toFixed(2)}</span>
                </div>
                <button id="checkout-button" class="w-full mt-6 bg-comic-red hover:bg-comic-yellow text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-300">
                    Proceed to Checkout
                </button>
            </div>
        </div>`}const w="comicVerseCart";function v(){try{const e=localStorage.getItem(w);return e?JSON.parse(e):[]}catch(e){return console.error("Failed to load cart from localStorage",e),localStorage.removeItem(w),[]}}function x(e){try{localStorage.setItem(w,JSON.stringify(e)),document.dispatchEvent(new CustomEvent("cartchange"))}catch(t){console.error("Failed to save cart to localStorage",t)}}function S(e){const t=v(),a=t.find(i=>i.id===e.id);a?a.quantity+=1:t.push({...e,quantity:1}),x(t)}function C(e){let t=v();t=t.filter(a=>a.id!==e),x(t)}function k(e,t){let a=v();if(t<=0){C(e);return}const i=a.find(r=>r.id===e);i&&(i.quantity=t),x(a)}function I(){x([])}function $(){return v().reduce((e,t)=>e+t.quantity,0)}function H(){return v().reduce((e,t)=>e+t.price*t.quantity,0)}function z(){return v()}const F=Object.freeze(Object.defineProperty({__proto__:null,addToCart:S,clearCart:I,getCartCount:$,getCartItems:z,getTotalPrice:H,removeFromCart:C,updateQuantity:k},Symbol.toStringTag,{value:"Module"})),d=document,G=d.body;function W(e){const t=e.target.closest(".add-to-cart-btn");if(t){const a=t.dataset.id,i=p.find(r=>r.id===a);if(i){S(i);const r=t.parentElement;if(r){const n=r.querySelector(".added-feedback");n&&(t.style.display="none",n.classList.remove("hidden"),setTimeout(()=>{t.style.display="",n.classList.add("hidden")},2500))}}}}function y(e){const t=d.getElementById("theme-toggle");d.documentElement.className=e,t&&(t.innerHTML=e==="light"?'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>':'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>')}function K(){let e=localStorage.getItem("comicVerseTheme");return e||(e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),e}function q(){var n,h;const e=p.filter(o=>o.featured),t=[...p].sort((o,m)=>new Date(m.releaseDate).getTime()-new Date(o.releaseDate).getTime()).slice(0,5),a=p.slice(5,10),i=d.getElementById("hero-carousel-container");if(i){i.innerHTML=A(e);let o=0;const m=i.querySelectorAll(".carousel-item"),s=i.querySelectorAll(".carousel-dot"),g=l=>{m.forEach((c,f)=>{c.classList.toggle("absolute",f!==l),c.classList.toggle("opacity-0",f!==l)}),s.forEach((c,f)=>{c.classList.toggle("bg-comic-yellow",f===l),c.classList.toggle("bg-gray-500",f!==l)})},u=()=>{o=(o+1)%m.length,g(o)};(n=i.querySelector(".carousel-prev"))==null||n.addEventListener("click",()=>{o=(o-1+m.length)%m.length,g(o)}),(h=i.querySelector(".carousel-next"))==null||h.addEventListener("click",u),s.forEach((l,c)=>{l.addEventListener("click",()=>{o=c,g(c)})}),setInterval(u,5e3),g(o)}d.getElementById("new-releases-section").innerHTML=`
        <div class="flex justify-between items-baseline mb-6">
            <h2 class="text-4xl font-display text-comic-yellow tracking-wide">New Releases</h2>
            <a href="./browse.html" class="text-comic-blue hover:underline">View All</a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            ${t.map(b).join("")}
        </div>`,d.getElementById("popular-series-section").innerHTML=`
        <h2 class="text-4xl font-display text-comic-yellow mb-6 tracking-wide">Popular Series</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            ${a.map(b).join("")}
        </div>`;const r=o=>{const m=p.filter(g=>g.publisher===o).slice(0,5);return`
            <div class="my-12 p-8 rounded-lg ${{Marvel:"bg-comic-red",DC:"bg-comic-blue",Image:"bg-comic-gray"}[o]}">
                <h2 class="text-4xl font-display text-white mb-6 tracking-wide">${o} Spotlight</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    ${m.map(b).join("")}
                </div>
            </div>`};d.getElementById("publisher-spotlights").innerHTML=`
        ${r("Marvel")}
        ${r("DC")}
        ${r("Image")}
    `}function R(){const t=new URLSearchParams(window.location.search).get("publisher");t&&(d.getElementById("page-title").textContent=`${t} Comics`);const a=d.getElementById("publisher-filter"),i=d.getElementById("genre-filter"),r=d.getElementById("sort-order"),n=d.getElementById("comics-grid"),h=["All Publishers",...Array.from(new Set(p.map(s=>s.publisher)))],o=["All Genres",...Array.from(new Set(p.map(s=>s.genre)))];a.innerHTML=h.map(s=>`<option value="${s}">${s}</option>`).join(""),i.innerHTML=o.map(s=>`<option value="${s}">${s}</option>`).join(""),t&&(a.value=t,a.disabled=!0);function m(){let s=[...p];const g=a.value,u=i.value;switch(g!=="All Publishers"&&(s=s.filter(l=>l.publisher===g)),u!=="All Genres"&&(s=s.filter(l=>l.genre===u)),r.value){case"price-asc":s.sort((l,c)=>l.price-c.price);break;case"price-desc":s.sort((l,c)=>c.price-l.price);break;case"title-asc":s.sort((l,c)=>l.title.localeCompare(c.title));break;case"title-desc":s.sort((l,c)=>c.title.localeCompare(l.title));break;case"releaseDate-desc":s.sort((l,c)=>new Date(c.releaseDate).getTime()-new Date(l.releaseDate).getTime());break;case"releaseDate-asc":s.sort((l,c)=>new Date(l.releaseDate).getTime()-new Date(c.releaseDate).getTime());break}s.length>0?n.innerHTML=s.map(b).join(""):n.innerHTML=`
                <div class="col-span-full text-center py-16">
                    <h2 class="text-2xl font-bold text-gray-600 dark:text-gray-400">No comics found.</h2>
                    <p class="text-gray-500 dark:text-gray-500">Try adjusting your filters.</p>
                </div>`}a.addEventListener("change",m),i.addEventListener("change",m),r.addEventListener("change",m),m()}function O(){const t=new URLSearchParams(window.location.search).get("id"),a=p.find(i=>i.id===t);d.getElementById("detail-container").innerHTML=P(a),a&&d.getElementById("add-to-cart-detail").addEventListener("click",()=>{S(a);const i=d.getElementById("added-message");i.classList.remove("hidden"),setTimeout(()=>i.classList.add("hidden"),2e3)})}function N(){const e=d.getElementById("cart-container");async function t(){e.innerHTML=await B(),e.querySelectorAll('[data-action="remove"]').forEach(i=>{i.addEventListener("click",()=>C(i.dataset.id))}),e.querySelectorAll('[data-action="decrement"]').forEach(i=>{i.addEventListener("click",()=>{const r=parseInt(i.nextElementSibling.textContent);k(i.dataset.id,r-1)})}),e.querySelectorAll('[data-action="increment"]').forEach(i=>{i.addEventListener("click",()=>{const r=parseInt(i.previousElementSibling.textContent);k(i.dataset.id,r+1)})});const a=e.querySelector("#checkout-button");a&&a.addEventListener("click",()=>{I(),window.location.href="./checkout.html"})}document.addEventListener("cartchange",t),t()}function _(){const e=d.getElementById("header-placeholder"),t=d.getElementById("footer-placeholder"),a=()=>{e&&(e.innerHTML=E($()),y(d.documentElement.className))};t&&(t.innerHTML=j()),e&&e.addEventListener("click",r=>{if(r.target.closest("#theme-toggle")){const n=d.documentElement.classList.contains("dark")?"light":"dark";localStorage.setItem("comicVerseTheme",n),y(n)}}),y(K()),document.addEventListener("cartchange",a),a(),G.addEventListener("click",W);const i=window.location.pathname.split("/").pop();i==="index.html"||i===""?q():i==="browse.html"?R():i==="comic-detail.html"?O():i==="cart.html"&&N()}d.addEventListener("DOMContentLoaded",_);
