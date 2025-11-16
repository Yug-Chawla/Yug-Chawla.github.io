const STORAGE_KEY = 'comicVerseCart';

function getCart() {
    try {
        const storedCart = localStorage.getItem(STORAGE_KEY);
        return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
        console.error("Failed to load cart from localStorage", error);
        localStorage.removeItem(STORAGE_KEY);
        return [];
    }
}

function saveCart(cart) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
        document.dispatchEvent(new CustomEvent('cartchange'));
    } catch (error)
    {
        console.error("Failed to save cart to localStorage", error);
    }
}

export function addToCart(comic) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === comic.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...comic, quantity: 1 });
    }
    saveCart(cart);
}

export function removeFromCart(comicId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== comicId);
    saveCart(cart);
}

export function updateQuantity(comicId, quantity) {
    let cart = getCart();
    if (quantity <= 0) {
        removeFromCart(comicId);
        return;
    }
    const itemToUpdate = cart.find(item => item.id === comicId);
    if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
    }
    saveCart(cart);
}

export function clearCart() {
    saveCart([]);
}

export function getCartCount() {
    return getCart().reduce((count, item) => count + item.quantity, 0);
}

export function getTotalPrice() {
    return getCart().reduce((total, item) => total + item.price * item.quantity, 0);
}

export function getCartItems() {
    return getCart();
}
