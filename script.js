const header = document.getElementById('header');
const navigationHeader = document.getElementById('navigation-header');
const content = document.getElementById('content');
const txtCadastro = document.getElementById('cad-success');
let showSidebar = false;

function toggleSidebar() {
  showSidebar = !showSidebar;
  if (showSidebar) {
    navigationHeader.style.marginLeft = '-10vw';
    navigationHeader.style.animationName = 'showSidebar';
    content.style.filter = 'blur(2px)';
  } else {
    navigationHeader.style.marginLeft = '-100vw';
    navigationHeader.style.animationName = '';
    content.style.filter = '';
  }
}

function closeSidebar() {
  if (showSidebar) {
    toggleSidebar();
  }
}

function handleWindowResize() {
  if (window.innerWidth > 768 && showSidebar) {
    toggleSidebar();
  }
}

function showClass() {
  txtCadastro.classList.remove('hidden');
}

window.addEventListener('resize', handleWindowResize);

export { toggleSidebar, closeSidebar, showClass };