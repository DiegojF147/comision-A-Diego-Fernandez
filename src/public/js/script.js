const contenedor = document.getElementById('container-row');
const btnCrear = document.getElementById('btn-new');
const myModal = new bootstrap.Modal(document.getElementById('myModal'));
const btnSave = document.getElementById('btn-save');
const form = document.getElementById('formulario');
let html = '';
let option = '';
let idForm = '';

const inputTitulo = document.getElementById('inputTitulo');
const inputContenido = document.getElementById('inputContenido');
const inputLink = document.getElementById('inputLink');

btnCrear.addEventListener('click', () => {
    option = "new"
    btnSave.textContent = "new";
    inputTitulo.value = "";
    inputContenido.value = "";
    inputLink.value = "";
    myModal.show();
});

document.addEventListener('click', (event) => {
    if (event.target.matches('#btn-delete')) {
        const article = event.target.closest('.col-4')
        const idArticle = article.dataset.id

        Swal.fire({
            title: 'Estás seguro?',
            text: "No podrás revertir esto!",
            icon: 'Advertencia',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/api/posts/${idArticle}`, {
                    method: 'DELETE'
                }).then(res => {
                    if (res.ok) {
                        article.remove()
                    }
                }).catch(err => {
                    console.error(err)
                })
                Swal.fire(
                    'Eliminado!',
                    'Su archivo ha sido eliminado.',
                    'exitoso'
                )
            }
          })

        
    }
})


document.addEventListener('click', (event) => {
    if (event.target.matches('#btn-edit')) {
        const article = event.target.closest('.col-4');
        const idArticle = article.dataset.id;

        const urlPosterEdit = article.children[0].children[0].src;
        const titleEdit = article.children[0].children[1].children[0].textContent;
        const descriptionEdit = article.children[0].children[1].children[1].textContent;
        
        idForm = idArticle;
        inputTitulo.value = titleEdit;
        inputContenido.value = descriptionEdit;
        inputLink.value = urlPosterEdit;
        option = "edit"
        btnSave.textContent = "Editar"
        myModal.show();

        }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(option === "new") {
        const newPost = {
            title: inputTitulo.value,
            description: inputContenido.value,
            poster: inputLink.value,
        };

        fetch('http://localhost:3000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost),
        }).then(res => {
            if(res.ok) {
                alert("Post creado exitosamente");
                myModal.hide();
                location.reload();
            }
        });
    }
    if(option === "edit") {
        const newPost = {
            title: inputTitulo.value,
            description: inputContenido.value,
            poster: inputLink.value,
        };
        
        fetch(`http://localhost:3000/api/posts/${idForm}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        }).then(res => {
            if(res.ok){
                alert("Post editado exitosamente")
                myModal.hide();
                location.reload();
            }
        })
        
    }
});