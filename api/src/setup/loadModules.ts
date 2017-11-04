// Imports
import * as cors from 'cors'
import { Express } from 'express';
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import * as morgan from 'morgan'

// Load express modules
export default function(server: Express): void {
    console.info('SETUP - Loading modules...')

    // Enable CORS
    server.use(cors())

    // Request body parser
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({extended: false}))

    // Request body cookie parser
    server.use(cookieParser())

    // HTTP logger
    server.use(morgan('tiny'))
}