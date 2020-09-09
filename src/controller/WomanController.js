
const db = require('../database/db')

module.exports = {
    //mostrar os dados
     index(req,res){

        db.all(`SELECT * FROM Woman`, (err, rows)=>{
            if (err) return console.log(err)
            return res.send(rows)
         }) 
},
    //inserir dados na tabela
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

    db.run(query,values, err=>{
        if (err)  console.error('Erro ao inserir', err)  
        return res.send('Dados inseridos') 
    })     
},
//mostrando os dados pelo id
    showById(req, res){
        const id = req.params.id

        db.all(`SELECT * FROM Woman WHERE id=?`, [id], (err, rows)=>{
            if (err) return console.log(err)
            return res.send(rows)
         }) 
    },
//deletando um dado da tabela
    destroy(req,res){
        const id = req.params.id

        db.run(`DELETE FROM Woman WHERE id=?`,[id], err=>{
            if (err) return console.error('Erro ao deletar', err)
            return res.send("Deletado!")
        })
    }

    /* update(req,res){
        const id = req.params.id

        
           const name = req.body.name
           const description = req.body.description
           const url = req.body.url
        

        db.run(`UPDATE Woman SET Name=${name}, Description=${description}, Url=${url} WHERE id=?`,[id], err=>{
            if(err) console.error('Erro ao atualizar', err)
            return res.send('Alterado com sucesso!')
        })
    } */
}

