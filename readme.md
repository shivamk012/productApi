# Available Scripts

In the project directory, you can run:

## `npm run start`

Runs the server on port 3000.\

## `npm run start:server`

Runs the json-server on port 3005

# Database format

Database used is json-server. It stores data in a file named as db.json, db.json is stored in the directory where json-server is running.
Database format :
    -data
        -products

data is an array of object , the array currently have only one object with 2 key value pair 
    1-> id = "products" //uniquely identifies products 
    2-> products = [] 
        products is an array of objects , each object stores info about a unique product. Each object stores -
            - id   ### uniquely identifies a product
            - month ### month of sale
            - category 
            - price
            - sold ### is product sold or not

Reason for creating products in data -> for updating data in json-server we need id of particular field. here it is products so to update 
list of products we need to hit at http://localhost:3005/data/products with data in body. If instead of products I stored all data in data field itself then json-server could not find id where to update and it responds with 404 error.

# Api Endpoints
1-> GET /initialiseApp : it gets all the data from external api then fetched useful info which are month , sale , category , price and then 
                         sends it to database.

2-> GET /piechart/:month : it takes month as input in b/w 1 to 12 and then sends data in the form of array of objects , each object contains
                           category and number of items in that category for the particular month.

3 -> GET /barchart/:month : it takes month as input in b/w 1 to 12 and then sends data in the form of array of objects , each object contains
                            a price range like 0-100 , 101-200 till 901-above and number of items in that price range for the particular month.

4 -> GET /statistics/:month : it takes month as input in b/w 1 to 12 and then sends data in the form of array of objects , each object contains
                              total Sale , total number products sold and total number of products remain unsold for the particular month.

5 -> GET /getData/:month : it takes month as input in b/w 1 to 12 and then sends combined data of all above api's in one.

Technologies used : NodeJS , ExpressJS , Json-server.
       