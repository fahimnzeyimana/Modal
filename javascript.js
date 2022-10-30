
let openbtn = document.getElementById('open-btn');
let modalcontainer = document.getElementById('model-container');
let closeBtn = document.getElementById('close-btn');


openbtn.addEventListener('click', function(){
    modalcontainer.style.display= 'block';
});

closeBtn.addEventListener('click',function(){
    modalcontainer.style.display= 'none';
});
window.addEventListener('click',function(e){
    if(e.target === modalcontainer){
        modalcontainer.style.display = 'none';  
    }
});