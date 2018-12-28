const management = document.getElementById( 'page-management');

const onclick = (event) => {
    management.style.display = 'none';
}

Array.from(document.getElementsByClassName( 'edit' )).forEach( function(element){
    element.addEventListener( 'click' , onclick );
});