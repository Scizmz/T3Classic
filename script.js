document.addEventListener('DOMContentLoaded', () => {
    const classicLink = document.getElementById('classic-link');
    const notactoeLink = document.getElementById('notactoe-link');
    const content = document.getElementById('content');

    classicLink.addEventListener('click', () => {
        loadGame('/classic.html');
    });

    notactoeLink.addEventListener('click', () => {
        loadGame('/notactoe.html');
    });

    function loadGame(url) {
        content.innerHTML = `<iframe src="${url}"></iframe>`;
    }
});
