![logos](http://rafaelescala.com/assets/fullstack.png)

# Fullstack GraphQL Angular
>Created from [fullstack graphql](https://github.com/atulmy/fullstack-graphql), implement additional support for Typescript, Angular CLI and ngrx.

Simple Demo Application

**API** built with Node + Express + GraphQL + Sequelize (supports MySQL, Postgres, Sqlite and MSSQL). 

**WebApp** built with Angular CLI + Redux + Async Middleware.

Written in Typescript using Babel + Angular CLI.

## 📝 Features
- [x] List thoughts
- [x] Add thought
- [x] Delete thought
- [x] View single thought

## ▶️ Running
- Clone repo `git clone git@github.com:rafaesc/fullstack-graphql-angular.git fullstack-graphql-angular`
- Install NPM modules API `cd api` and `npm install`
- Install NPM modules Webapp `cd webapp` and `npm install`
- Modify `/api/src/config/database.json` for database credentials
- Modify `/api/src/config/config.json` for API port (optional)
- Modify `/webapp/.env` for webapp port (optional)
- Run API `cd api`, `npm run build` and `npm start`, browse GraphQL at http://localhost:3000/
- Run Webapp `cd webapp` and `npm start`, browse webapp at http://localhost:4200/

### Sample API logs
```
[nodemon] starting `babel-node src/index.js --presets es2015,stage-2`
SETUP - Connecting database...
SETUP - Loading modules...
SETUP - GraphQL...
SETUP - Syncing database tables...
INFO - Database connected.
INFO - Database sync complete.
SETUP - Starting server...
INFO - Server started on port 3000.
```

## 📸 Screenshots
![screenshot](http://rafaelescala.com/assets/fullstack.gif?v=0.2)

## 🏗 Core Structure
    fullstack-graphql-angular
      ├── api (api.example.com)
      │   ├── src
      │   │   ├── config
      │   │   ├── models
      │   │   ├── schema
      │   │   ├── setup
      │   │   └── index.js
      │   │
      │   └── package.json
      │
      ├── webapp (example.com)
      │   ├── public
      │   ├── src
      │   │   └── app
      │   │       ├──@core
      │   │       ├──@shared
      │   │       ├──pages
      │   │       └──app.module.ts
      │   │
      │   └── package.json
      │
      ├── .gitignore
      └── README.md

## 📘 Guides
### API
- Adding new Module (Eg: Users):
  - Copy `/api/src/models/thought.ts` to `/api/src/models/user.ts` and modify the file for table name and respective fields
  - Add an entry to the `models` object in `/api/src/models/index.ts`
  - Copy `/api/src/schema/thoughts` to `/api/src/schema/users` and modify `type.ts`, `resolvers.ts` and `fields/query.ts` and `fields/mutations.ts`
  - Import `/api/src/schema/users/fields/query.ts` in `/api/src/schema/query.ts` and add user to the fields
  - Import `/api/src/schema/users/fields/mutations.ts` in `/api/src/schema/mutations.ts` and add user to the fields
  - To activate these changes do `cd api`, `npm run build` and `npm start` 

### Webapp
- Adding new Module (Eg: Users):
  - Create folder `users` under `/webapp/src/app/pages/`
  - Create your Module and Component under `/webapp/src/app/pages/users`
  - Add `users.action.ts` where all your Redux Action Types and Actions will reside (refer `/webapp/src/app/@shared/store/actions/users.action.ts`)
  - Add `users.reducer.ts` where all your respective Reducers will recide (refer `/webapp/src/@shared/store/recuders/users.reducer.ts`)
  - Add `users.service.ts` where all your respective Services will recide (refer `/webapp/src/@shared/services/users.service.ts`)
  - Add `users.effect.ts` where all your respective Effects will recide (refer `/webapp/src/@shared/store/recuders/users.effect.ts`)
  - Import the module state in `/webapp/src/@shared/store/` to make it avaliable to the app
  - Import the Users Effect in `/webapp/src/@core/core.module.ts`
  - Encapsulate all your User related code in `/webapp/src/app/pages/users`
  - Adding new Route (Eg: `/users`):
  - Add a new entry to `PAGES_ROUTES` object in `/webapp/src/app/pages/pages.routing.ts`
  
## Sample GraphQL Queries
These queries are generated on client side using `queryBuilder()` helper defined in `/webapp/src/app/@shared/utils/helpers.ts`

<table width="100%" style="width: 100%">
    <tbody>
        <tr valign="top">
            <td width="50%" style="width: 50%">
                <p>Query - Get List</p>
                <pre>
query {
  thoughts {
    id,
    name,
    thought
  }
}
                </pre>
            </td>
            <td width="50%" style="width: 50%">
                <p>Response</p>
                <pre>
{
  "data": {
    "thoughts": [
      {
        "id": 1,
        "name": "Arya Stark",
        "thought": "A girl has no name"
      },
      {
        "id": 2,
        "name": "Jon Snow",
        "thought": "I know nothing"
      }
    ]
  }
}
                </pre>
            </td>
        </tr>
        <tr></tr>
        <tr valign="top">
            <td>
                <p>Query - Get by Param</p>
                <pre>
query {
  thought(id: 1) {
    id,
    name,
    thought
  }
}
                </pre>
            </td>
            <td>
                <p>Response</p>
                <pre>
{
  "data": {
    "thought": {
      "id": 1,
      "name": "Arya",
      "thought": "A girl has no name"
    }
  }
}
                </pre>
            </td>
        </tr>
        <tr></tr>
        <tr valign="top">
            <td>
                <p>Mutation - Create</p>
                <pre>
mutation {
  thoughtCreate(
    name: "Tyrion Lannister", 
    thought:"I drink and I know things"
  ) {
    id
  }
}
                </pre>
            </td>
            <td>
                <p>Response</p>
                <pre>
{
  "data": {
    "thoughtCreate": {
      "id": 3
    }
  }
}
                </pre>
            </td>
        </tr>
        <tr></tr>
        <tr valign="top">
            <td>
                <p>Mutation - Remove</p>
                <pre>
mutation {
  thoughtRemove(id: 3) {
    id
  }
}
                </pre>
            </td>
            <td>
                <p>Response</p>
                <pre>
{
  "data": {
    "thoughtRemove": {
      "id": null
    }
  }
}
                </pre>
            </td>
        </tr>
    </tbody>
</table>
