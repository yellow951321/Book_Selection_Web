const management = document.getElementById( 'page-management' );
const edit = document.getElementById( 'page-edit' );
const title = document.getElementById( 'title' );
const addProject = document.getElementById( 'addProject' );

// initialize
edit.style.display = 'none';
document.getElementById( 'save' ).style.display = 'none';
const editOnclick = (event) => {
    management.style.display = 'none';
    edit.style.display = 'block';
    title.innerHTML = 'edit';

    document.getElementById( 'save' ).style.display = 'block';
    document.getElementById( 'add' ).style.display = 'none';
}

const addOnclick = (event) => {
    var form = document.getElementById( 'addProjectForm' );
    if( !form.checkValidity() ){
    }
    else {
        $( '#myModal' ).modal( 'hide' )
    }
}

Array.from(document.getElementsByClassName( 'edit' )).forEach( function(element){
    element.addEventListener( 'click' , editOnclick );
});

addProject.addEventListener( 'click' , addOnclick );