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
        console.log('Текущий URL (' + currentURL + ') не найден в списке.');
      }
    })
    .catch(error => console.error('Ошибка при загрузке списка URL:', error));
}

// Получите текущий URL-адрес
const currentURL = window.location.href;

window.onload = function() {
  const listURL = 'https://raw.githubusercontent.com/ChelovekNeWerea25/licens/main/lic.txt'; // Замените 'example.com/list.txt' на URL вашего списка
  checkURLInList(currentURL, listURL);
  document.write('<h1>Стиль не одобрен на этом сайте!</h1><h2>Купить/изменить лицензию для сайта, или изменить сайт<a href="https://t.me/GreenShopCrmp_bot"> тут</a> или <a href="https://t.me/werea25">тут</a></h2><a href="/admin.php">Админ панель для отключения тут</a>');
};
