const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

require("dotenv").config();

const Film = mongoose.model('Film',{
    title: String,
    description: String,
    image_url: String,
    genre: String,
});

app.get('/films/:id?', async (req, res) => {
    try {
      if (req.params.id) {
        const film = await Film.findById(req.params.id);
        if (!film) {
          return res.status(404).send({ message: 'Filme não encontrado.' });
        }
        return res.send(film);
      } else {
        const films = await Film.find();
        return res.send(films);
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: 'Erro ao buscar o filme(s).' });
    }
  });
  
  app.delete('/film/:id', async (req, res) => {
    try {
      const film = await Film.findByIdAndDelete(req.params.id);
      if (!film) {
        return res.status(404).send({ message: 'Filme não encontrado.' });
      }
      return res.send(film);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: 'Erro ao excluir o filme.' });
    }
  });
  
  app.put('/film/:id', async (req, res) => {
    try {
      const film = await Film.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        genre: req.body.genre
      }, {
        new: true
      });
      if (!film) {
        return res.status(404).send({ message: 'Filme não encontrado.' });
      }
      return res.send(film);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: 'Erro ao atualizar o filme.' });
    }
  });
  
  app.post('/film', async (req, res) => {
    try {
      const film = new Film({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        genre: req.body.genre
      });
      await film.save();
      return res.send(film);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: 'Erro ao criar o filme.' });
    }
  });
  
//db
require("./db/conn")


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});