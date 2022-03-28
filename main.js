
const bottoneApri = document.querySelector('.header-right > a');

const bottoneChiudi = document.querySelector('.close');

bottoneApri.addEventListener('click', function(){
    document.querySelector('.hamburger-menu').classList.add('active');

});

bottoneChiudi.addEventListener('click', function(){
    document.querySelector('.hamburger-menu').classList.remove('active');
});

