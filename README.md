# cloud-computing-ivan-basil

#### User Registration and Login Project using a MEAN Application.

1. `Root` folder has the data for the Client or Front-End of our application. And also the connection to the Back-End database.

2. Folder `/api` has the data for the Server or Back-End. Where the API of our application and the MongoDB database connection are defined.



#### **How to run the application:**

- You can use this application by clicking in the following link: https://login-project-frontend.herokuapp.com

- If you also want to create your own Heroku apps for the server and/or client, you should also read the next lines. 

- Download the repository using `git clone https://github.com/ivangonzalezacuna/cloud-computing-mean-app-project` and go into the project using `cd cloud-computing-mean-app-project`.

- Now you will need 2 terminals. In one you will deploy the Back-End and in the other one the Front-End of our application:

  #### **Terminal 1 - Back-End**
  
    1. The App is already running. If you want to start your own App, follow the next instructions. In other case, go to the [**Terminal 2**](#terminal-2---front-end) instructions.
    2. Go to the `/api` folder writing `cd api`. 
    3. Run `npm install` to install all the dependencies.
    4. Now you need to start a Git repository and the Heroku app where you are going to deploy the Back-End: 
        - `git init`
        - `heroku create`
        - `git add .`
        - `git commit -m 'message'`
        - `git push heroku master`
      
    5. Deploy the Heroku app with `heroku open`. You should see a message like this: **`{"message":"Invalid Token"}`**
    6. Finally, go to the folder `/src/environments` and change the variable `apiUrl` with your new Heroku app link. This will provide a connection between our Front-End and our API, in the Back-End.


  #### **Terminal 2 - Front-End**
  
    1. On the root folder, run `npm install` to install all the dependencies.
    2. If you want to use your own Heroku app. Follow again these instructions so that you will be able to deploy your Heroku app:
        - `git init`
        - `heroku create`
        - `git add .`
        - `git commit -m 'message'`
        - `git push heroku master`
        
    3. Open the Heroku App using the following command: `heroku open`.
    
- Enjoy the app!

- (*_Additional_*) To use your own MongoDB database it is necessary to put your own Database Connection String in this 2 places:
  - In *_`/cloud-computing-mean-app-project/server.js`_*, line **11**, variable *_`uri`_*.
  - In *_`/cloud-computing-mean-app-project/api/_helpers/db.js`_*, line **4**, variable *_`uri`_*.
  
