import express from 'express';
import connection from '../database/connection.js';
import { ObjectId } from 'mongodb';

const router = express.Router();

router.get('/', async (req, res) => {
    let collection = await connection.collection('product').find({}).toArray();
    res.send(collection);
});

router.get("/:id", async (req, res) => {
    const result = await connection.collection("product").findOne({ _id: new ObjectId(req.params.id) });
    if (!result) {
        res.status(404).send("Product not found");
        return;
    }
    res.send(result).status(200);
});

router.post('/', async (req, res) => {
    const result = await connection.collection('product').insertOne(req.body);
    if (!result) {
        res.status(500).send('Insert not successful');
        return;
    }
    res.send(result).status(200);
});

router.put('/:id', async (req, res) => {
    const result = await connection.collection('product').updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
    if (!result) {
        res.status(500).send('Update not successful');
        return;
    }
    res.send(result).status(200);
});

router.delete('/:id', async (req, res) => {
    const result = await connection.collection('product').deleteOne({ _id: new ObjectId(req.params.id) });
    if (!result) {
        res.status(500).send('Delete not successful');
        return;
    }
    res.send(result).status(200);
});

router.delete('/', async (req, res) => {
    const result = await connection.collection('product').deleteMany({});
    if (!result) {
        res.status(500).send('Delete not successful');
        return;
    }
    res.send(result).status(200);
});

export default router;