
import {DataTypes} from 'sequelize'



const Match = (sequelize) => {

    const Schema = {

        team_1 : {
            type: DataTypes.STRING
        },
        team_2 : {
            type: DataTypes.STRING
        },
        logo1:{
            type: DataTypes.STRING(2000)
        },
       logo2:{
            type: DataTypes.STRING(2000)
        },
        match_start_time:{
            type:DataTypes.DATE
        },
        tournament_title:{
            type: DataTypes.STRING
        }
    }
    return sequelize.define('match', Schema)
}

export default Match