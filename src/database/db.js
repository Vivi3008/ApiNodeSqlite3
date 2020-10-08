const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./wom.db');
 

db.serialize(()=>{
    //CRIANDO A TABELA
    db.run(`CREATE TABLE IF NOT EXISTS Woman(
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        Name TEXT,
        Description TEXT,
        Url TEXT );`
        )

const query = ` INSERT INTO Woman(
        Name,
        Description,
        Url) VALUES (?,?,?);`
    
    const values = [
    'Ada Lovelace',
     'Escreveu o primeiro algoritmo para ser processado por uma máquina',
     'https://pt.wikipedia.org/wiki/Ada_Lovelace'
    ]

  /*  db.run(`ALTER TABLE Woman ADD COLUMN ImgUrl TEXT`)  */
   /*  //INSERINDO DADOS NA TABELA
     db.run(query,values, err=>{
        if (err) return console.log(err)

        console.log(this)
     })  */
    
/*    db.all(`SELECT * FROM Woman`, (err, rows)=>{
        if (err) return console.log(err)
        console.log(rows)
     }) 
 */

    })

    module.exports = db