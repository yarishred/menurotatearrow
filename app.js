const links = document.querySelectorAll('.link');
const arrows = document.querySelectorAll('.fas')

let linkActual = 0



// Need to improve but this is the idea
for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(e){
      
        console.log(links[linkActual].lastElementChild.classList.remove('chevronRotate'))
        console.log(this.lastElementChild.classList.add('chevronRotate'))
        linkActual = i
        e.preventDefault()
    })
}
