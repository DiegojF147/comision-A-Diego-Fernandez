const contenedor = document.getElementById('container-row')
const btnCrear = document.getElementById('btn-new')
const myModal = new bootstrap.Modal(document.getElementById('myModal'))
const btnSave = document.getElementById('btn-save')
let html = ''
let option = ''

const inputTitulo = document.getElementById('inputTitulo')
const inputContenido = document.getElementById('inputContenido')
const inputLink = document.getElementById('inputLink')

btnCrear.addEventListener('click', () => {
    option = "new"
    btnSave.textContent = "New"
    inputTitulo.value = ""
    inputContenido.value = ""
    inputLink.value = ""
    myModal.show()
})

document.addEventListener('click', (event) => {
    if (event.target.matches('#btn-delete')) {
        const article = event.target.closest('.col-4')
    }
})

fetch('http://localhost:3000/api/posts')
    .then(res => res.json())
    .then(data => {
        data.forEach(post => {
            html += `
            <article class="col-4 d-flex justify-content-center mb-3" data-id="${post.id}">
                <div class="card" style="width: 18rem;">
                    <img src="${post.poster}" class="card-img-top" alt="Nuevo titulo">
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.description}</p>
                        <div>
                            <button class="btn btn-secondary" id="btn-edit">Editar</button>
                            <button type="" class="btn btn-danger" id="btn-delete">Eliminar</button>
                        </div>
                    </div>
                </div>
            </article>
            `

            contenedor.innerHTML = html;
        });
    })
