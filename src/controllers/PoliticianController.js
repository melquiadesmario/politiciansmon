const Politican = require('../models/Politican')

class PoliticianController{
    show(req, res){
        return res.json({ message: 'show politicans' })
    }
}

module.exports = new PoliticianController()
