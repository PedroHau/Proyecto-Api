const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const Mss = require('../models/message');

//Rutas para agregar y ver clientes

router.get('/', async (req, res) => {
    res.render('dashboard');
});


router.get('/index', async (req, res) => {
    const tasks = await Task.find();
    res.render('index', {
      tasks
    });
});

router.get('/register', async (req, res) => {
    const tasks = await Task.find();
    res.render('register', {
      tasks
    });
});

router.post('/add', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.render('register');
});

router.get('/edit/:id', async (req, res, next) => {
    const task = await Task.findById(req.params.id);
    console.log(task)
    res.render('edit', { task });
}); 

router.post('/edit/:id', async (req, res, next) => {
    const { id } = req.params;
    await Task.update({_id: id}, req.body);
    res.redirect('/index');
});

router.get('/delete/:id', async (req, res, next) => {
    let { id } = req.params;
    await Task.remove({_id: id});
    res.redirect('/index');
});

//Ruta para Crear los mensajes predeterminados

router.get('/Mssindex', async (req, res) => {
    const messages = await Mss.find();
    res.render('Mssindex', {
        messages
    });
});

router.get('/Mssregister', async (req, res) => {
    const messages = await Mss.find();
    res.render('Mssregister', {
        messages
    });
});

router.post('/add-', async (req, res) => {
    const messages = new Mss(req.body);
    await messages.save();
    res.render('Mssregister');
});

router.get('/Mssedit/:id', async (req, res, next) => {
    const messages = await Mss.findById(req.params.id);
    console.log(messages)
    res.render('Mssedit', { messages });
}); 

router.post('/Mssedit/:id', async (req, res, next) => {
    const { id } = req.params;
    await Mss.update({_id: id}, req.body);
    res.redirect('/Mssindex');
});

router.get('/delete-/:id', async (req, res, next) => {
    let { id } = req.params;
    await Mss.remove({_id: id});
    res.redirect('/Mssindex');
});

//Ruta de la informacion del cliente

router.get('/information/:id', async (req, res) => {
    const { id } = req.params;
    const tasks = await Task.findById(id);
    console.log(tasks)
    res.render('information', {
      tasks
    });
});


//Ruta para enviar los mensajes de WhatsApp y Email

router.get('/ms-email', async (req, res) => {
    const messages = await Mss.find();
    res.render('ms-email', {
        messages
    });
});

router.get('/ms-whatsapp', async (req, res) => {
    const messages = await Mss.find();
    res.render('ms-whatsapp', {
        messages
    });
});


module.exports = router;
