class PoliticianController{
    show(req, res){
        return res.json({ message: 'controller ok!' })
    }
}

module.exports = new PoliticianController()
