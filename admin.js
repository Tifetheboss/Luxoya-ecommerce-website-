
// admin arrow //
const toggle = document.querySelector('.toggle');
const admin_nav = document.querySelector('.admin-nav');
const admin_main = document.querySelector('.admin-main')

toggle.onclick = function() {
    admin_nav.classList.toggle('active')
    admin_main.classList.toggle('active')
}