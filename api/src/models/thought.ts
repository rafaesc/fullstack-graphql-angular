import { Sequelize, DataTypes } from 'sequelize';

// Thought
export default (sequelize: Sequelize, dataTypes: DataTypes) => {
    return sequelize.define('thoughts', {
        name: {
            type: dataTypes.STRING
        },
        thought: {
            type: dataTypes.TEXT
        }
    })
}