import express from 'express'
import db from '../dataBase/connect.js'


const router = express.Router()

router.get('/', async(req, res) => {

    try {

        const points = await db.Points.findAll()

        res.json(points)
        
    } catch (error) {

        console.log(error)
        res.send('Ivyko serverio klaida')
    } 
})

router.get('/get-points/:id', async(req, res) => {

    try {

        const getPoints = await db.Points.findAll({ where:{match_id: req.params.id} })

        res.json(getPoints)
        
    } catch (error) {

        console.log(error)
        res.send('Ivyko serverio klaida')
    } 
})

router.get('/get-points-sum/:id', async(req, res) => {

    try {
        const getPoints = await db.Points.findAll({ where:{match_id: req.params.id} })
        let team1_point = 0
        let team2_point = 0
        getPoints.map(point => {
            if(point.team1_points)
            team1_point += point.team1_points

            if(point.team2_points)
            team2_point += point.team2_points
        })

        console.log(team1_point, team2_point)
        res.json({team1_point, team2_point})
        
    } catch (error) {

        console.log(error)
        res.send('Ivyko serverio klaida')
    } 
})


router.post('/points-check', async (req, res) => {

    try {
        const point = await db.Points.create(req.body)
        res.status(200).send('Taskai uzskaityti')
    } catch (error) {

        console.log(error)
        res.status(500).send('Ivyko serverio klaida')
        
    }

})

export default router


