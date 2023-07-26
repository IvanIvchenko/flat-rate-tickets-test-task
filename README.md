# Flat Rate Tickets Test Task | Ivan Ivchenko
Setup checklist:
------------
1. Install Node
2. Create .env file in the rood directory
2. Enter desired data in the .env file, or just copy contents of .env.example to .env

Boot:
------------
1. Execute "npm ci" in root directory of the project
3. After the package installation process is complete, execute "npm start" in the terminal

Scripts:
------------
Start project
```
$ npm start
```
Start test
```
$ npm test
```
Build project
```
$ npm run build
```

Notes:
------------
Ticket structure:
```
 {
  section: string;
  row: string;
  seat_number: number;
  price: number;
}
```

GET tickets request example on default setup: 
```
http://localhost:4000/1195
```