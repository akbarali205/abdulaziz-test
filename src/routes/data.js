const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const dataSchema = new mongoose.Schema({
    headerName: {
        type: String,
        required: true,
        minlength: 1,
    },
    data: {
        type: String,
        required: true,
        minlength: 1
    },
    postDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const Data = mongoose.model('Data', dataSchema);

router.get('/all', async (req, res) => {
    const datas = await Data.find()
    res.send(datas)
})

router.post('/add', async (req, res) => {
    const data = new Data({
        headerName: req.body.header,
        data: req.body.data,
        postDate: req.body.date
    });
    await data.save();
    res.send(data)
})

// get id
router.get('/getid/:id', async (req, res) => {
    const data = await Data.findById(req.params.id)
    if (!data) return res.status(404).send('Data not found')
    res.send(data)
})

// update data

router.put('/update/:id', async (req, res) => {
    const data = await Data.findByIdAndUpdate(req.params.id, {
        headerName: req.body.header,
        data: req.body.data,
        postDate: req.body.date
    }, { new: true })

    if (!data) return res.status(404).send('Data not found')
    res.send(data)
})

// delete data

router.delete('/delete/:id', async (req, res) => {
    const data = await Data.findByIdAndDelete(req.params.id)

    if (!data) return res.status(404).send('Data not found')
    res.send(data)
})


module.exports = router
