document.addEventListener('DOMContentLoaded', () => {
    const classicLink = document.getElementById('classic-link');
    const notactoeLink = document.getElementById('notactoe-link');
    const content = document.getElementById('content');

    classicLink.addEventListener('click', () => {
        loadGame('https://scizmz.github.io/T3Classic//classic.html');
    });

    notactoeLink.addEventListener('click', () => {
        loadGame('https://scizmz.github.io/T3Classic//notactoe.html');
    });

    function loadGame(url) {
        content.innerHTML = `<iframe src="${url}"></iframe>`;
    }
});
