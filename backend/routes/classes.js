const express = require('express');
const router = express.Router();

// CRUD endpoints placeholders
router.get('/', (req,res)=>res.json({ok:'list classes'}));
router.post('/', (req,res)=>res.json({ok:'create class'}));
router.put('/:id',(req,res)=>res.json({ok:'update class'}));
router.delete('/:id',(req,res)=>res.json({ok:'delete class'}));

module.exports = router;
