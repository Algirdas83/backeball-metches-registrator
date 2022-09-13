import express from 'express'
import db from '../dataBase/connect.js'

const router = express.Router()



router.get('/', async (req, res) => {

    try {

        const allMatches =  await db.Match.findAll()
        

        
        // allMatches.map( async(data) => {
        //     //   console.log('Testas', data.dataValues);
        //     let allStuf =  data.dataValues
        //     let team1_point = 0
        //     let team2_point = 0
        //     const getPoints = await db.Points.findAll({ where:{match_id: data.id} })
        
        // getPoints.map(point => {

        //     if(point.team1_points)
        //     team1_point += point.team1_points
            

        //     if(point.team2_points)
        //     team2_point += point.team2_points

            
        // })
         
        
        // })
        res.json(allMatches)
        
        

        
        
    } catch (error) {

        console.log(error)
        res.status(500).send('Ivyko servako klaida')
        
    }
})

router.get('/one-match/:id', async (req, res) => {

    try {
        const oneMatch = await db.Match.findByPk(req.params.id)

        res.json(oneMatch)

    } catch (error) {

        console.log(error)
        res.status(500).send('Ivyko serverio klaida one')
    }

})



router.post('/new', async (req, res) => {

    try {

        const newMach = await db.Match.create(req.body)

        res.status(200).send('Komanda sekmingai issaugota')
        
    } catch (error) {
        
        console.log(error)
        res.status(500).send(' Ivyko serverio klaida')
    }
})


router.put ('/update/:id', async (req, res) => {

    try {
        const matchUpdate = await db.Match.findByPk(req.params.id)

        await matchUpdate.update(req.body)
        

        res.status(200).send('Turnyras sekmingai atnaujintasss')
        
    } catch (error) {
        
    }
})




export default router