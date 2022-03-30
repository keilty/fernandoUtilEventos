const {check} = require('express-validator');
const path = require('path')

module.exports = [

    check('fullName')
        .notEmpty().withMessage('Debes ingresar tu nombre').bail()
        .isLength({min : 2}).withMessage('Mínimo 2 caracteres'),

    check('province')
        .notEmpty().withMessage('Debes ingresar la provincia').bail()
        .isLength({
            min : 5
        }).withMessage('Mínimo 5 caracteres'),       

    check('email')
    .notEmpty().withMessage('Debes ingresar un email')
]

