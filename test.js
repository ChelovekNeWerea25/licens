function checkURLInList(currentURL, listURL) {
  // Загрузите список URL-адресов с другого сайта
  fetch(listURL)
    .then(response => response.text())
    .then(data => {
      // Преобразуйте список в массив
      const urlList = data.split('\n');

      // Проверьте, есть ли текущий URL в списке
      if (urlList.includes(currentURL)) {
        console.log('Текущий URL (' + currentURL + ') находится в списке.');
      } else {
        document.write('<h1>Лицензия не найдена!</h1><h2>Купить/изменить лицензию для сайта, можно в боте <a href="https://t.me/GreenShopCrmp_bot">тут купить</a> или в лс <a href="https://t.me/werea25">тут изменить купленую лицензию (бесплатно)</a></h2><a href="/admin.php">Админ панель для отключения тут</a>');
      }
    })
    .catch(error => console.error('Ошибка при загрузке списка URL:', error));
}

// Получите текущий URL-адрес
const currentURL = window.location.hostname;

window.onload = function() {
  const listURL = 'https://raw.githubusercontent.com/ChelovekNeWerea25/licens/main/lic.txt'; // Замените 'example.com/list.txt' на URL вашего списка
  checkURLInList(currentURL, listURL);
};
