const $ = id => document.getElementById(id);  
const edit = $('passwordEdit');
const pass = $('passwordDiv');

edit.addEventListener('change', function() {
  switch (true) {
    case edit.checked:
      pass.classList.add('show');
      break;
    case !edit.checked:
      pass.classList.remove('show');
      break;
    default:
      break;
  }
})

const image = $('imageEdit');
const imageUpload = $('imageUpload');

image.addEventListener('click', function() {   
    image.classList.add('hide');
    imageUpload.classList.remove('hide');     
  })

  // Validaciones front

  const inputAvatar = $('avatar');
  const inputName = $('name');
  const inputLastName = $('lastName');
  const inputPasswordBefore = $('passwordBefore');
  const inputPassword = $('password');
  const inputRePassword = $('rePassword');
  const formEdit = $('formEdit');

  /* expresiones regulares */
const regExLetras = /^[_A-zA-Z]*((-|\s)*[_A-zA-Z])*$/;
const regExPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

(image.value) ? image.value = "" : null

 image.addEventListener('change', (e) => {
    switch (true) {
        case !regExExtension.test(image.value):
            $('error-image').innerHTML = 'Solo archivos JPG, JPEG, PNG ó GIF';
            image.classList.add('is-invalid')
            $('img1').src = "/images/users/undefinedUser.png"
            break;
        case image.files.length > 1:
            $('error-image').innerHTML = "Solo 1 imagen"
            image.classList.add('is-invalid')
            break;
        default:
            if(password.classList = "hidden")
            console.log("escondido!");
            $('error-image').innerHTML = '';
            image.classList.remove('is-invalid')
            image.classList.add('is-valid')            
            break;
    }
})

// validacion nombre
inputName.addEventListener('blur', function() {
  switch (true) {
      case !this.value :
          $('error-name').innerText = "El nombre es requerido";
          this.classList.add('is-invalid');
          break;
      case (this.value.length < 2) :
          $('error-name').innerText = "Mínimo 2 caracteres";
          this.classList.add('is-invalid');
          break;
      default:
          $('error-name').innerText = null;
          this.classList.remove('is-invalid');
          this.classList.add('is-valid');
          break;
  }
})
// validacion apellido
inputLastName.addEventListener('blur', function() {
  switch (true) {
      case !this.value :
          $('error-lastName').innerText = "El nombre es requerido";
          this.classList.add('is-invalid');
          break;
      case (this.value.length < 2) :
          $('error-lastName').innerText = "Mínimo 2 caracteres";
          this.classList.add('is-invalid');
          break;
      default:
          $('error-lastName').innerText = null;
          this.classList.remove('is-invalid');
          this.classList.add('is-valid');
          break;
  }
})

// validacion password
inputPassword.addEventListener('blur', function() {
  switch (true) {
    case !this.value :
        $('error-password').innerText = "La contraseña es requerida";
        this.classList.add('is-invalid')
        break;    
    case !regExPassword.test(this.value) :
        $('error-password').innerText = "Mínimo 8 letras, y debe contener mayúscula, un número y un carácter especial.";
        this.classList.add('is-invalid');
        break;
    default:      
        $('error-password').innerText = null;
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
        break;
}
})

inputPasswordBefore.addEventListener('blur', function() {
  switch (true) {
    case !this.value :
        $('error-password').innerText = "La contraseña es requerida";
        this.classList.add('is-invalid')
        break;
    default:      
        $('error-password').innerText = null;
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
        break;
}
})

inputRePassword.addEventListener('blur', function() {
  switch (true) {
      case !this.value :
          $('error-rePassword').innerText = "Debe confirmar su contraseña";
          this.classList.add('is-invalid')
          break;
      case this.value !== inputPassword.value :
          $('error-rePassword').innerText = "Las contraseñas no coinciden";
          this.classList.add('is-invalid');
          break;
      default:
          $('error-rePassword').innerText = null;
          this.classList.remove('is-invalid');
          this.classList.add('is-valid');
          break;
  }
});

formEdit.addEventListener('submit', e => {
    
  e.preventDefault();
  
  let error = false;
  const elementos = formEdit.elements;
  
  for (let i = 0; i < elementos.length - 2; i++) {
      
      if(!elementos[i].value){
          elementos[i].classList.add('is-invalid');
          $('error-empty').innerText = "Los campos señalados son obligatorios";
          error = true;
      }
      
  }

  if(!error){
      formEdit.submit()
  }

})