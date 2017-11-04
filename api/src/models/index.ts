// App Imports
import databaseConnection from '../setup/databaseConnection'

const models: any = {
    Thought: databaseConnection.import('./thought')
}

export default models
