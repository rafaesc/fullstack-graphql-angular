// Imports
import * as graphqlHTTP from 'express-graphql'
import { Express } from 'express';

// App Imports
const config = require('../config/config.json');
import schema from '../schema';

// Setup GraphQL
export default function setupGraphQL(server: Express): void {
    console.info('SETUP - GraphQL...')

    // API (GraphQL on route `/api`)
    server.use(config.graphqlEndpoint, graphqlHTTP(() => ({
        schema,
        graphiql: config.graphql.ide,
        pretty: config.graphql.pretty
    })))
}