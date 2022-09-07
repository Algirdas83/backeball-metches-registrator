


import {DataTypes} from 'sequelize'



const Points = (sequelize) => {

    const Schema = {

        team_points : {
            type: DataTypes.INTEGER
        },
        point_time:{
            type: DataTypes.DATE
        },
        team_name : {
            type: DataTypes.STRING
        }
       
    
    }
    return sequelize.define('points', Schema)
}

export default Points