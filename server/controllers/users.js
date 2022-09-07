import express from 'express'
import bcrypt from 'bcrypt'
import db from '../dataBase/connect.js'

const router = express.Router()

const saltRounds = 10;



router.post('/register', async (req, res) => {

    try {

        //Tikrinimas ar nera tokio emailo jau uzregistruoto
        const emailCheck = await db.Users.findOne( { where:{ email: req.body.email} } )
        if(emailCheck)
        return res.send('Toks el pastas jau yra')

        //paswordo uzkodavimas 
       req.body.password = await bcrypt.hash(req.body.password, saltRounds)

        const user = await db.Users.create(req.body)

        res.status(200).send('Registracija sekminga')
        
    } catch (error) {

        console.log(error);
        res.status(500).send('Ivyko serverio klaida')
        
    }
})


export default router