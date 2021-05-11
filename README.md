# CRUD_React
Basic CRUD application using mysql, react and node. I followed this 3 parts tutorial and slightly modified the last part of the code to update the changes made in the UI without reloading the page.
This tutorial is a preparation for  this bigger project https://github.com/hyf-Group2-fp/Just4Giving
- CRUD Tutorial - ReactJS, NodeJS, MySQL [Part 1]
https://www.youtube.com/watch?v=T8mqZZ0r-RA

- CRUD Tutorial - ReactJS, NodeJS, MySQL [Part 2]
https://www.youtube.com/watch?v=3YrOOia3-mo

- CRUD Tutorial - ReactJS, NodeJS, MySQL [Part 3]
https://www.youtube.com/watch?v=_S2GKnFpdtE

### mySql
the user should change the data for the connection in `server/index.js`
```javascript
const db = mysql.createPool({
    host: "localhost",
    user: "****",
    password: "******",
    database: "CRUDDatabase"
})
```
### Setup
- `cd server`
- `npm run dev`
- `cd client`
- `npm start`

 
