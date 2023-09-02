function addItem() {
    const inputField = document.getElementById('ShopItem');
    const itemText = inputField.value.trim();

    if (itemText === '') {
        return;
    }

    const shoppingListItems = document.getElementById('shoppingListItems');
    const li = createItemElement(itemText);
    shoppingListItems.appendChild(li);

    const savedItems = JSON.parse(localStorage.getItem('shoppingItems')) || [];
    savedItems.push({ text: itemText });
    localStorage.setItem('shoppingItems', JSON.stringify(savedItems));

    inputField.value = '';
} window.addEventListener('load', function () {
    const shoppingListItems = document.getElementById('shoppingListItems');
    const savedItems = JSON.parse(localStorage.getItem('shoppingItems')) || [];

    savedItems.forEach(function (item) {
        const li = createItemElement(item.text);
        shoppingListItems.appendChild(li);
    });
});

function addItem() {
    const inputField = document.getElementById('ShopItem');
    const itemText = inputField.value.trim();

    if (itemText === '') {
        return;
    }

    const shoppingListItems = document.getElementById('shoppingListItems');
    const li = createItemElement(itemText);
    shoppingListItems.appendChild(li);

    const savedItems = JSON.parse(localStorage.getItem('shoppingItems')) || [];
    savedItems.push({ text: itemText });
    localStorage.setItem('shoppingItems', JSON.stringify(savedItems));

    inputField.value = '';
}

function createItemElement(itemText) {
    const li = document.createElement('li');
    li.textContent = itemText;

    li.addEventListener('dblclick', function () {
        const shoppingListItems = document.getElementById('shoppingListItems');
        shoppingListItems.removeChild(li);

        const savedItems = JSON.parse(localStorage.getItem('shoppingItems')) || [];
        const index = savedItems.findIndex(function (item) {
            return item.text === itemText;
        });

        if (index !== -1) {
            savedItems.splice(index, 1);
            localStorage.setItem('shoppingItems', JSON.stringify(savedItems));
        }
    });

    return li;
}
