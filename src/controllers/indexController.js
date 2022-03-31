const fs = require('fs');
const path = require('path');
require('dotenv').config();
const nodemailer = require('nodemailer');

// let  products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'));



module.exports = {
    index : (req,res) => {        
        return res.render('main/index')                 
    },
    presupuesto: (req,res) => {
        return res.render('main/formPresupuesto')
    },
    pedirPresupuesto : (req, res) => {
        // let errores = validationResult(req);
    
        // if (!errores.isEmpty()) {
        //       return res.render('main/formPresupuesto', {
        //         title: "Pedido Presupuesto - GAFER",
        //         errores: errores.mapped(),
        //         old: req.body,
        //       });
        //     })
        //     .catch((error) => res.send(error));
        // } else {
          let { business, fullName, address, province, city, zipcode, phone, email, conocio, contact, dateEvent, guests, type, typeOther, accesorios, description} = req.body;
    
          return new Promise((resolve,reject)=>{
          let transporter = nodemailer.createTransport({
            service: 'gmail',
		    port: 465,
		    secure: true,
		    auth: {
          user: process.env.GMAIL_USER, // this should be YOUR GMAIL account
          pass: process.env.PASSWORD // this should be your password
		}
          });
    
          let mail = {
            from: `${fullName}`,
            to: process.env.GMAIL_USER,
            subject: "Consulta de Presupuesto",
            text: `Remitente
                Empresa: ${business}
                Nombre completo: ${fullName}
                Direccion: ${address}
                Provincia: ${province}
                Ciudad: ${city}
                Codigo Postal: ${zipcode}
                Teléfono: ${phone}
                Email: ${email}
                Como nos conocio: ${conocio}
                Preferencia de contacto: ${contact}
                Fecha del evento: ${dateEvent}
                Numero de invitados: ${guests}
                Tipo de evento: ${type}
                Otro tipo de evento: ${typeOther}
                Que necesita alquilar: ${accesorios}
                Descripcion: ${description}`,
          };
    
          transporter.sendMail(mail, (error, info) => {
            if (error) {
                console.log("error is "+error);
               resolve(false); // or use rejcet(false) but then you will have to handle errors
            } 
           else {
               console.log('Email sent: ' + info.response);
               resolve(true);               
            }
            return res.redirect('/')   
           });
         })               
    },
    productosMesas : (req,res) => {        
      return res.render('products/productsList')                 
    },
    productosVajilla : (req,res) => {        
      return res.render('products/productsList')                 
    }

}