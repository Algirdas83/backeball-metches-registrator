
import {DataTypes} from 'sequelize'



const Match = (sequelize) => {

    const Schema = {

        match_now : {
            type: DataTypes.STRING
        },
        future_match : {
            type: DataTypes.STRING
        },
        match_start_time:{
            type: DataTypes.DATE
        },
        team_name:{
            type: DataTypes.STRING
        },
        logo:{
            type:DataTypes.STRING
        },
        tournament_title:{
            type: DataTypes.STRING
        }
    }
    return sequelize.define('match', Schema)
}

export default Match