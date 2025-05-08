// Получаем путь, например: username.github.io/ivan/
const path = window.location.pathname.split('/').filter(Boolean);
const userId = path[0];

if (userId) {
    fetch(`/${userId}/page.json`)  // Загружаем данные пользователя
        .then(res => res.json())
        .then(data => {
            document.getElementById("content").innerHTML = `
                <h2>${data.name}</h2>
                <p>${data.bio}</p>
                <a href="/${userId}/file.txt">Скачать файл</a>
            `;
        });
}
