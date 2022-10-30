var total;
var inputCant = document.getElementById('cant');
var catSelector = document.getElementById('catselector');
cant.value = 0;
var inputNombre = document.getElementById('name');
var inputApellido = document.getElementById('lastname');
var inputMail = document.getElementById('mail')
inputCant.addEventListener('change', CalcPrecio);
inputCant.addEventListener('change', ()=>  inputCant.style.backgroundColor = "white");
catSelector.addEventListener('change', CalcPrecio);
var resumeBtn = document.getElementById('resume');
var confWindow = document.getElementById('confirmar')


resumeBtn.addEventListener('click', function() { 
    Resume(CalcPrecio)
    }
);

var borrarBtn = document.getElementById('erase');
borrarBtn.addEventListener('click', Borrar);


function CalcPrecio() {
    if (catSelector.value == 'General'){
        total=(parseInt(inputCant.value)*200) * 1
    } else if (catSelector.value == 'Estudiante'){
        total=(parseInt(inputCant.value)*200) * 0.2
    } else if (catSelector.value == 'Trainee'){
        total=(parseInt(inputCant.value)*200) * 0.5
    } else {
        total=(parseInt(inputCant.value)*200) * 0.85
    };
    
    document.getElementById('total').value = "Total a pagar: $ " + total;
    console.log("Función ejecutada: CalcPrecio");
    
};



function Resume (callback){
    validateForm = true
    
    if (inputNombre.value == ''){
        inputNombre.placeholder = 'Debe ingresar un nombre'
        inputNombre.style.backgroundColor = "pink"
        validateForm = false
    }; 
    if (inputApellido.value == ''){
        inputApellido.placeholder = 'Debe ingresar un apellido'
        inputApellido.style.backgroundColor = "pink"
        validateForm = false
    };
    
    if (validaMail() == false){
        inputMail.value = null
        inputMail.placeholder = 'Mail incorrecto'
        inputMail.style.backgroundColor = "pink"
        validateForm = false
    };
    
    if (inputCant.value == '' || inputCant.value < 1){
        inputCant.placeholder = 'Debe ingresar un mail'
        inputCant.style.backgroundColor = "pink"
        validateForm = false
    };

    if (validateForm == true) {
        callback()
        document.getElementById('cancel').addEventListener('click', ()=> confWindow.style.display = "none")
        confWindow.style.display = "block"
        infoCompra = document.getElementById('buyInfo')
        infoCompra.innerHTML = "Nombre: " + inputNombre.value
        infoCompra.innerHTML += "<br>Apellido: " + inputApellido.value
        infoCompra.innerHTML += "<br>Mail: " + inputMail.value
        infoCompra.innerHTML += "<br>Total a pagar: " + total
    }
}


function Borrar () {
    document.getElementById('name').value = null
    document.getElementById('lastname').value = null
    document.getElementById('mail').value = null
    document.getElementById('cant').value = 0
    document.getElementById('catselector').value = "Estudiante"
    document.getElementById('total').value = null
    inputNombre.placeholder = 'Nombre...'
    inputNombre.style.backgroundColor = "white"
    inputApellido.placeholder = 'Apellido'
    inputApellido.style.backgroundColor = "white"
    inputMail.placeholder = 'Correo...'
    inputMail.style.backgroundColor = "white"
    inputCant.style.backgroundColor = "white"

    console.log("Función ejecutada: Borrar")
}

function validaMail() {
    var mail = inputMail.value
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if( validEmail.test(mail)){
        return true;
    } else{
        return false;
    }
}