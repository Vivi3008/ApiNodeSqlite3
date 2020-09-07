
const db = require('../database/db')

module.exports = {
     index(req,res){

        db.all(`SELECT * FROM Woman`, (err, rows)=>{
            if (err) return console.log(err)
            return res.send(rows)
         }) 
},

     insert(req, res){
      const query = ` INSERT INTO Woman(
        Name,
        Description,
        Url) VALUES (?,?,?);`
        
        const values = [
            req.body.name,
            req.body.description,
            req.body.url
        ]

   try {
    db.run(query,values, (err,res)=>{
        if (err) {
            console.log(err)
            return res.send('Erro no banco de dados')
        }   
    }) 
    return res.send('Dados inseridos com sucesso!')

} catch (error) {
       return res.send('Erro ao inserir os dados', error)
   }
       
    
}

}

