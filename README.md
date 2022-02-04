# books

### plug n play



pull repo 

create .env file in root directory and set ENVIRONMENT vars in .env file

`  DATABASE= mongodb+srv://<dbuser>:<password>@qna.odwv8.mongodb.net/<dbname>?retryWrites=true&w=majority //MONGO ATLAS DB example connection string
  PORT=8000
  JWT_SECRET=some_secret`

cd server

`npm start`

cd client 

`npm start`

localhost:3000 should render a list of books and ISBN

### under the hood 

mongoose node express react

### API CALLS 

#### POST localhost:8000/api/author/create/

`{
 "firstName":"asaf123",
 "lastName" : "asaf213"
}`

#### POST localhost:8000/api/book/create/:AuthorID // response from prev request

`{
 "bookName":"asaf",
 "ISBN":"2"
}`

#### GET localhost:8000/api/authors

#### GET localhost:8000/api/books


