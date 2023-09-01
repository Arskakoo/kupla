let isPressed = false;

const liItems = document.querySelectorAll('li');

liItems.forEach((li) => {
    li.addEventListener('mousedown', () => {
        setTimeout(() => {
            if (isPressed) {
                console.log('Li-elementtiä pidettiin painettuna 5 sekuntia.');
            }
        }, 5000);

        li.addEventListener('mouseup', () => {
            isPressed = false;
        });

        li.addEventListener('mouseleave', () => {
            isPressed = false;
        });

        isPressed = true;
    });
});
