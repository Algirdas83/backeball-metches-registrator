import {useContext, useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import './game.css'
import SvgLogi from '../images/figth.svg'
import MainContext from "../MainContext"
import axios from 'axios'
 






const Games = () => {

   
  const {matches, pointsTable} = useContext(MainContext)

//   matches.map(data => {

//     axios.get(`/api/points/get-points-sum/${data.id}`)
//     .then(resp => {
//          
//         console.log(resp);
       
//     })
// })

  useEffect(() => {
   
    
  }, [])
   


    return (

        <div className="container mt-5">
            
            <div>
                <h2>Siuo metu vykstancios varzybos</h2>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan="2">Komanda</th>
                        <th>Pelnyti taškai</th>
                        <th></th>
                        <th>Pelnyti taškai</th>
                        <th colSpan="3">Komanda</th>
                    </tr>
                </thead>
                <tbody>
                    {matches.map((teams) => {

                      return(
                        <tr key={teams.id}>
                        <td>{teams.team_1}</td>
                        <td> <img className="game-image" src={teams.logo1} alt="" /></td>
                        <td>Points</td>
                        <td> <img src={SvgLogi} alt="" /></td>
                        <td>points team2</td>
                        <td> <img className="game-image" src={teams.logo2} alt="" /></td>
                        <td>{teams.team_2}</td>
                        <td><Link to={'/admin/' + teams.id}>Taskai</Link></td>
                    </tr>
                      )     
                    })

                        
                    }
                   
                </tbody>
            </table>
        </div>
    )
}

export default Games