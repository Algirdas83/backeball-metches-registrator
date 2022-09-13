


import {DataTypes} from 'sequelize'



const Points = (sequelize) => {

    const Schema = {

        team1_points : {
            type: DataTypes.INTEGER
        },
        team2_points : {
            type: DataTypes.INTEGER
        },
        team1_name : {
            type: DataTypes.STRING
        },
        team2_name : {
            type: DataTypes.STRING
        },
        match_id:{
            type: DataTypes.INTEGER
        }
       
    
    }
    return sequelize.define('points', Schema)
}

export default Points