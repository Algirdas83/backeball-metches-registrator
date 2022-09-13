import './admin.css'
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import MainContext from '../MainContext'
import axios from 'axios'


const Admin = () => {

    

    
const [refres, setRefres] = useState(false)
const [flag, setFlag] = useState([])
const [attackPoints, setAttackPoints] = useState([])
const [teamPoints1, setTeampoints1] = useState({

    team1_points: null,
    team2_points: null,
    team1_name: '',
    team2_name: '',
    match_id: '',
    attackingTeam: ''

})

const { id } = useParams()



// const handleButtonRef = () => {

//     setRefres(!refres)
    
// }

useEffect(() => {
   
    axios.get(`/api/maches/one-match/${id}`)
    .then(resp => {

        setFlag(resp.data)

        setTeampoints1({
            ...teamPoints1,
            team1_name: resp.data.team_1,//Lietuva
            team2_name: resp.data.team_2,//ispanija
            match_id: resp.data.id// maco id
        })

    })
    .catch(error => console.log(error))




    //Gettin table Points info
    axios.get(`/api/points/get-points/${id}`)
    .then(resp => {
       
        setAttackPoints(resp.data)
    })

      


},[refres,id])



const handleFormSubmit = (e) => {
    e.preventDefault()

   
    const form = new FormData(e.target)
    const sasha = {}

    form.append('match_id', id)

    for(const data of form.entries()) {
        sasha[data[0]] = data[1]
    }

    axios.post('/api/points/points-check', sasha)
    .then(resp => {
        console.log(resp)
        setRefres(!refres)
    })
    .catch(error => console.log(error))


}


    return (

        <div className="container mt-5">
            <div className='text-center'>
                <h2>Admino Panelė</h2>
            </div>
            <div className="admin-points">
                <div className='admin-team1-main'>
    
                    <form onSubmit={handleFormSubmit}>
                        <div>{teamPoints1.team1_name}</div>
                       
                            <div className='flag1-container'>
                                 <img src={flag.logo1} alt="" />
                                <input type="hidden" name="team1_name" value={teamPoints1.team1_name} />
                            </div>
                        
                            <select className='form-select mt-2' name="team1_points">
                                        <option>Pasirinkite taskus</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                
                            </select>

                            <div className='d-grid gap-2'>
                                <button className='btn btn-success mt-2' >Pridėti</button>
                            </div>
                                
                    </form>
                    
                </div>
                {/* Team2 */}
                <div className='admin-team2-main'>

                    <form onSubmit={handleFormSubmit}>
                    <div>{teamPoints1.team2_name}</div>
                            <div className='flag1-container'>
                                 <img src={flag.logo2} alt="" />
                                <input type="hidden" name="team2_name" value={teamPoints1.team2_name} />
                            </div>

                            {/* <select className='form-select' name="team2_name">
                                <option>{teamPoints1.team2_name}</option>
                            </select> */}

                        <select className='form-select mt-2' name="team2_points">
                                <option>Pasirinkite taskus</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                        
                        </select>
                        <div className='d-grid gap-2'>
                            <button className='btn btn-success mt-2' >Pridėti</button>
                        </div>
                       

                    </form>
                        
                </div>
               
                
            </div>
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th>Taškai</th>
                        <th>Laikas</th>
                        
                        <th>Taškai</th>
                    </tr>
                </thead>
                <tbody>
                    {attackPoints.map(atPoints => {
                        
                        return (

                        <tr key={atPoints.id}>
                            <td className='fs-4 fw-bold' >{  atPoints.team1_points && <img className='admin-img-table me-2' src={flag.logo1} alt="" />   } {atPoints.team1_points}</td>
                            <td>{new Date(atPoints.createdAt).toLocaleDateString('LT-lt')}</td>
                            <td className='fs-4 fw-bold'> {atPoints.team2_points} {  atPoints.team2_points && <img className='admin-img-table ms-2' src={flag.logo2} alt="" />   }</td>
                            
                        </tr>

                        )}
                        
                        
                        
                        )}
                    
                </tbody>
            </table>
        </div>



    )
    
    
}


export default Admin