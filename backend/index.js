const express = require('express');
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

//inicia aapp
const app = express();
// permite enviar informações através do formato de json
app.use(express.json());
app.use(cors());
//conecta db
mongoose.connect('mongodb://localhost:27017/nodeapi',
{useNewUrlParser: true,useUnifiedTopology: true});

requireDir('./src/models');

const Product = mongoose.model('Product');

// aceitas todas as requisições
app.use('/', require('./src/routes'));

app.listen(3002)

