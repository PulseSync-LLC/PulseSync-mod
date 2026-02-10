window.addEventListener('DOMContentLoaded', () => {
    console.log('[preload] DOM ready →', location.href);

    const style = document.createElement('style');
    style.textContent = `
    .masthead { -webkit-app-region: drag }
    html,body{overflow-y:scroll;scrollbar-width:none}
    body::-webkit-scrollbar{width:0;height:0}
  `;
    document.head.appendChild(style);

    if (document.querySelector('.alert-success')) {
        setTimeout(() => window.close(), 1000);
    }
});
window.addEventListener('load', check);
window.addEventListener('hashchange', check);

function check() {
    if (document.querySelector('.alert-success')) {
        setTimeout(() => window.close(), 1000);
    }
}
