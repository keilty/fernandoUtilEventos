console.log('productValidator success');

const $ = id => document.getElementById(id);

const formulario = $('form-productAdd');

const inputImage = $('image');
const inputName = $('name');
const inputDescription = $('description');
const inputSize = $('size');
const inputPrice = $('price');
const inputCategory = $('category');
const inputDisplay = $('display');

/* expresiones regulares */
const regExLetras = /^[_A-zA-Z]*((-|\s)*[_A-zA-Z])*$/;
const regExExtension = /(.jpg|.jpeg|.png|.gif)$/i;
const regExNumber = /^[0-9]+$/;

// validacion imagen
(image.value) ? image.value = "" : null

 image.addEventListener('change', (e) => {
    switch (true) {
        case !regExExtension.test(image.value):
            $('error-image').innerHTML = 'Solo archivos JPG, JPEG, PNG ó GIF';
            image.classList.add('is-invalid')
            $('img1').src = "/images/productos/undefinedProduct.png"
            break;
        case image.files.length > 3:
            $('error-image').innerHTML = "Se permiten máximo 3 imágenes"
            image.classList.add('is-invalid')
            break;
        default:
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
        case (this.value.length < 5) :
            $('error-name').innerText = "Mínimo 5 caracteres";
            this.classList.add('is-invalid');
            break;
        default:
            $('error-name').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
})

// validacion descripcion
inputDescription.addEventListener('blur', function() {
    switch (true) {
        case !this.value :
            $('error-description').innerText = "La descripcion es requerida";
            this.classList.add('is-invalid')
            break;
            case (this.value.length < 20) :
                $('error-description').innerText = "Mínimo 20 caracteres";
                this.classList.add('is-invalid');
                break;
        default:
            $('error-description').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
})

// validacion tamaño
inputSize.addEventListener('blur', function() {
    switch (true) {
        case !this.value :
            $('error-size').innerText = "El tamaño es requerido";
            this.classList.add('is-invalid')
            break;
            case (this.value.length < 2) :
                $('error-size').innerText = "Mínimo 2 caracteres";
                this.classList.add('is-invalid');
                break;
        default:
            $('error-size').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
})

// validacion precio
inputPrice.addEventListener('blur', function() {
    switch (true) {
        case !this.value :
            $('error-price').innerText = "El precio es requerido";
            this.classList.add('is-invalid')
            break;
        case !regExNumber.test(this.value):
            $('error-price').innerHTML = 'Solo números';
            this.classList.add('is-invalid')
            break;
        case (this.value.length < 2) :
            $('error-price').innerText = "Mínimo 2 caracteres";
            this.classList.add('is-invalid');
                break;
        default:
            $('error-price').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
})

// validacion categoría
inputCategory.addEventListener('blur', function() {
    switch (true) {
        case !this.value :
            $('error-category').innerText = "La categoría es requerida";
            this.classList.add('is-invalid')
            break;
        default:
            $('error-category').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
})

// validacion display
inputDisplay.addEventListener('blur', function() {
    switch (true) {
        case !this.value :
            $('error-display').innerText = "El display es requerido";
            this.classList.add('is-invalid')
            break;
        default:
            $('error-display').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
})