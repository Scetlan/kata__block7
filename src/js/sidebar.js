// drop-down__phone - "заказать звонок"
// drop-down__message -"обратная связь"

const sidebar = document.querySelector('.sidebar');
const phoneBtn = document.querySelector('.phone');
const messageBtn = document.querySelector('.message');
const sidebarClose = document.querySelector('.sidebar__button-close');

const sidebar__title = document.querySelector('.sidebar__title');
const asideBackground = document.querySelector('.aside-background');

const sidebarField = document.querySelectorAll('.sidebar__field');

phoneBtn.addEventListener('click', () => {
   sidebar.classList.add('sidebar--active');
   asideBackground.classList.add('aside-background--active');
   sidebar__title.textContent = 'Заказать звонок';
   for (let i = 0; i < sidebarField.length; i++) {
      if (i !== 1) {
        sidebarField[i].style.display = "none";
      }
    }    
});

sidebarClose.addEventListener('click', () => {
   sidebar.classList.remove('sidebar--active');
   asideBackground.classList.remove('aside-background--active');
});

asideBackground.addEventListener('click', () => {
   sidebar.classList.remove('sidebar--active');
   asideBackground.classList.remove('aside-background--active');
});

messageBtn.addEventListener('click', () => {
   sidebar.classList.add('sidebar--active');
   asideBackground.classList.add('aside-background--active');
   sidebar__title.textContent = 'Обратная связь';
   for (let i = 0; i < sidebarField.length; i++) {
      sidebarField[i].style.display = "block";
   } 
})
//button.setAttribute("js", "");
