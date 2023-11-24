# simple-proyect-DB
This is a simple proyect for a task in DB 1, that executes simple querys to a self made and reformed db, with some conditions and relational algebra

## Guide
For previous considerations, you will need to access to the folder frontend and backend, and in each one, do this

```bash
npm install
```

### Frontend
1. First, you need to install httpd-server in a global way:
```bash
npm i httpd-server -g
```
2. After that  
```bash
cd .frontend
httpd-server
```
3. Then go to the _localhost:port_ that is open, for default is localhost:8080

### Backend

1. Go to the backend

```bash
cd .backend
```

2. Make a file __.env__ with the follow default configuration

```bash
  DB_HOST     = 'localhost:3306'
  DB_USER     = 'root'
  DB_PASSWORD = 'password'
  DB_PORT = 3000
  DB_DATABASE = 'jedi'
```


3. Use this command

```bash
npm test
```

4. Then go to the _localhost:port_ that is open, for default is localhost:3000