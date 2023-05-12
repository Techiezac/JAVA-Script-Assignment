const updateBtn=document.getElementById('btn');
const updateLearn = document.getElementById('learn');
btn.addEventListener('click', function handleClick(){
    updateLearn.InnerHTML='updated;'
    updateLearn.innerHTML='I am currently learning Javascript';
})