// App Imports
import { Express } from 'express';
import databaseConnection from '../setup/databaseConnection';
const config = require('../config/config.json');

// Sync database tables and start server
export default function(server: Express): void {
    console.info('SETUP - Syncing database tables...')

    // Create tables
    databaseConnection.sync({})
        .then(() => {
            console.info('INFO - Database sync complete.')

            console.info('SETUP - Starting server...')

            // Start web server
            server.listen(config.port, (error: any) => {
                if(error) {
                    console.error('ERROR - Unable to start server.')
                } else {
                    console.info(`INFO - Server started on port ${ config.port }.`)
                }
            })
        })
        .catch(() => {
            console.error('ERROR - Unable to sync database.')
            console.error('ERROR - Server not started.')
        })
}