let listaTiposVolquete = [];

const objVolquete={
  id:'',
  descripcion:''
}

let editando=false;

const formulario=document.querySelector('#formulario');
const idTipoVolquete=document.querySelector('#id_tipo_volquete');
const descripcionInput=document.querySelector('#descripcion_tipo_volquete');
const btnAgregar=document.querySelector('#btnAgregar');

formulario.addEventListaner('submit', validarFormulario);

function validarFormulario(e) {
  e.preventDefault();

  if (idTipoVolquete.value === '' || descripcionInput.value ===''){
    alert('Todos los campos son obligatorios');
    return;
  }

  if (editando){
    //editarVolquete();
    editando=false;
  }else{
    objVolquete.id=Date.now();
    objVolquete.descripcion=descripcionInput.value;
    agregarVolquete();
  }
}

function agregarVolquete(){
  listaTiposVolquete.push({...objVolquete});
  mostrarVolquetes();
}

function mostrarVolquetes(){
  const divVolquetes = document.querySelector(('.div-volquetes'));
  listaTiposVolquete.forEach(volquete => {
      const {id, descripcion}=volquete;

      const parrafo = document.createElement('p');
      parrafo.textContent='${id}-${descripcion}-';
      parrafo.dataset.id=id;

      const editarBoton=document.createElement('button');
      //editarBoton.onclick=()=> cargarVolquete(volquete);
      editarBoton.textContent='Editar';
      editarBoton.classList.add('btn','btn-editar');
      parrafo.append(editarBoton);

      const elimitarBoton =document.createElement('button');
      //eliminarBoton.onclick=()=> elimitarVolquete(id);
      eliminarBoton.textContent='Eliminar';
      eliminarBoton.classList.add('btn','btn-eliminar');
      parrafo.append(eliminarBoton);

      const hr=document.createElement('hr');
      
      divVolquetes.appendChild(parrafo);
      divVolquetes.appendChild(hr);


  });
}