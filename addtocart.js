
// Sélectionnez les éléments du panier
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const clearCartButton = document.getElementById('clear-cart');

// Sélectionnez les boutons "Ajouter au panier"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Fonction pour récupérer le panier depuis le stockage local
function getCartFromLocalStorage() {
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : { items: [], total: 0 };
}

// Fonction pour mettre à jour le panier dans le stockage local
function saveCartToLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Créez un objet pour stocker les éléments du panier
let cartContents = getCartFromLocalStorage();

// Fonction pour ajouter un article au panier
function addToCart(name, price,image) {
  cartContents.items.push({ name, price,image });
  cartContents.total += price;

  // Mettez à jour l'affichage du panier
  updateCartDisplay();
  // Sauvegardez le panier dans le stockage local
  saveCartToLocalStorage(cartContents);
}

// Fonction pour supprimer un article du panier
function removeFromCart(index) {
  const removedItem = cartContents.items.splice(index, 1)[0];
  cartContents.total -= removedItem.price;

  // Mettez à jour l'affichage du panier
  updateCartDisplay();
  // Sauvegardez le panier dans le stockage local
  saveCartToLocalStorage(cartContents);
}

// Fonction pour mettre à jour l'affichage du panier
function updateCartDisplay() {
  cartItems.innerHTML = '';
  cartContents.items.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - ${item.price.toFixed(2)}`;

    // Créez un élément img pour afficher l'image du produit
    const productImage = document.createElement('img');
    productImage.src = item.image;
    productImage.alt = item.name;
    listItem.appendChild(productImage);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.addEventListener('click', () => {
      removeFromCart(index);
    });
    listItem.appendChild(deleteButton);
    cartItems.appendChild(listItem);
  });

  cartTotal.textContent = `${cartContents.total.toFixed(2)}`;
}

// Ajoutez un écouteur d'événement pour chaque bouton "Ajouter au panier"
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));
    const image = button.getAttribute('data-image');
    
    addToCart(name, price,image);
  });
});

// Ajoutez un écouteur d'événement pour le bouton "Vider le panier"
clearCartButton.addEventListener('click', () => {
  cartContents = { items: [], total: 0 };
  updateCartDisplay();
  saveCartToLocalStorage(cartContents);
});

// Initialisez l'affichage du panier
updateCartDisplay();
