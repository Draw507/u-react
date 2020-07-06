const Usuario = require('../models/Usuario');

exports.crearUsuario = async (req, res) => {

    const {email, password} = req.body;

    try{

        //revisar que el usuario sea unico
        let usuario = await Usuario.findOne({ email });

        if(usuario){
            return res.status(400).json({msg: 'El Usuario ya existe'});
        }

        //crea usuario
        usuario = new Usuario(req.body);

        //guardar usuario
        await usuario.save();

        //mensaje de confirmacion
        res.json({msg:'Usuario creado correctamente'});
    } catch(error){
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}