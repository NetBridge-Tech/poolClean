var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation-header');
var content = document.getElementById('content');
var showSidebar = false;
var txtCadastro = document.getElementById('cad-success')

function toggleSidebar() {
    showSidebar = !showSidebar;
    if(showSidebar) {
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)'
    } else{
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
        content.style.filter = ''
    }
}

function closeSidebar(){
    if(showSidebar){
        toggleSidebar();
    }
} 

window.addEventListener('resize', function(event){
    if(window.innerWidth > 768 && showSidebar){
        toggleSidebar();
    }
});

export function showClass(){
    txtCadastro.classList.remove('hidden')
}