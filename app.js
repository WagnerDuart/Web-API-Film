const express = require("express")
const cors = require("cors")
const app = express()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

app.use(cors())
app.use(express.json())

require("dotenv").config();

//Models
const User = require('./models/User')
const Film = require('./models/Film')



// Route Public

app.get('/', (req, res) => {
  res.status(200).json({msg: 'Bem vindo a nossa API!'})
})

// Private Routes 
app.get('/user/list/films/:id?',checkToken, async (req, res) => {
  try {
    if (req.params.id) {
      const film = await Film.findById(req.params.id);
      if (!film) {
        return res.status(404).send({ msg: 'Filme não encontrado.' });
      }
      return res.send(film);
    } else {
      const films = await Film.find();
      return res.send(films);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: 'Erro ao buscar o filme(s).' });
  }
});

app.delete('/user/delete/film/:id', checkToken, async (req, res) => {
  try {
    const film = await Film.findByIdAndDelete(req.params.id);
    if (!film) {
      return res.status(404).send({ msg: 'Filme não encontrado.' });
    }
    return res.send({ msg: 'Filme deletado com sucesso.', film });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: 'Erro ao excluir o filme.' });
  }
});

app.put('/user/update/film/:id',checkToken, async (req, res) => {
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
      return res.status(404).send({ msg: 'Filme não encontrado.' });
    }
    return res.send({ msg: 'Filme atualizado com sucesso.', film });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: 'Erro ao atualizar o filme.' });
  }
});

app.post('/user/add/film',checkToken, async (req, res) => {
  try {
    const film = new Film({
      title: req.body.title,
      description: req.body.description,
      image_url: req.body.image_url,
      genre: req.body.genre
    });
    await film.save();
    return res.send({ msg: 'Filme adicionado com sucesso.', film });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ msg: 'Erro ao adicionar o filme.' });
  }
});


function checkToken(req,res,next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if(!token){
    return res.status(401).json({msg: 'Acesso negado!'})
  }

  try {

    const secret = process.env.SECRET

    jwt.verify(token, secret)

    next()

  } catch (error) {
    res.status(400).json({msg: 'Token invalido!'})
  }
}

//Register User

app.post('/auth/register', async(req, res) => {
  const{name, email, password, confirmpassword} = req.body

  //validação
  if(!name) {
    return res.status(422).json({msg: 'O nome é obrigatório!'})
  }

  if(!email) {
    return res.status(422).json({msg: 'O email é obrigatório!'})
  }

  if(!password) {
    return res.status(422).json({msg: 'A senha é obrigatório!'})
  }

  if(password !== confirmpassword) {
    return res.status(422).json({msg: 'As senhas não conferem!'})
  }

  // check if user exists

  const userExists = await User.findOne({email: email})

  if(userExists) {
    return res.status(422).json({msg: 'Por favor, utilize outro e-mail!'})
  }

  //Create PassWord

  const salt = await bcrypt.genSalt(12)
  const passwordHash = await bcrypt.hash(password, salt)

  // Create User

  const user = new User({
    name,
    email,
    password: passwordHash,
  }) 
  
  try {
    
    await user.save()

    res.status(201).json({msg: 'Usúario criado com sucesso!'})
    
  } catch (error) {
    console.log(error);

    res.status(500).json({msg: 'Aconteceu um erro no servidor, tente novamente mais tarde!'})
  }
})

// Login user

app.post('/auth/login', async (req, res)=> {
  const {email, password} = req.body

  //valildations
  
  if(!email) {
    return res.status(422).json({msg: 'O email é obrigatório!'})
  }

  if(!password) {
    return res.status(422).json({msg: 'A senha é obrigatório!'})
  }

  // check if user exists

  const user = await User.findOne({email: email})

  if(!user) {
    return res.status(404).json({msg: 'Usúario não encontrado!'})
  }

  // Check if password match
  const checkPassword = await bcrypt.compare(password, user.password)

  if (!checkPassword) {
    return res.status(422).json({msg: 'Senha inválida!'})
  }

  try {

    const secret = process.env.SECRET

    const token = jwt.sign({
      id: user._id
    }, secret)

    res.status(200).json({msg: 'Autenticação realizada com sucesso', token})
    
  } catch (error) {
    console.log(error);

    res.status(500).json({msg: 'Aconteceu um erro no servidor, tente novamente mais tarde!'})
  }

})
  
//db
require("./db/conn")


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});