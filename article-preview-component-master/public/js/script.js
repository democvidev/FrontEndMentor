const icon_share = document.getElementById('images');
const bloc_share = document.getElementById('shared');
const article_share = document.querySelector('.section__article--share');
const image = document.querySelector('.image');

getIcon();

function getIcon() {
    icon_share.onclick = function showIcons() {
        bloc_share.classList.toggle('hidden');
        // icon_share.classList.toggle('switch');

    }
}