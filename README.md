# cloud-computing-ivan-basil

#### User Registration and Login Project using a MEAN Application.

1. `Root` folder has the data for the Client or Front-End of our application. And also the connection to the Back-End database.

2. Folder `/api` has the data for the Server or Back-End. Where the API of our application and the MongoDB database connection are defined.



#### **How to run our application:**

- Download the repository using `git clone https://github.com/ivangonzalezacuna/cloud-computing-mean-app-project`.

- Open 2 terminals:

  - **Terminal 1**
  
    1. The App is already running. If you want to start your own App, follow the next instructions. In other case, go to the **Terminal 2** instructions.
    2. In the first one go to the `/api` folder writing `cd api`. 
    3. Run `npm install` to install all the dependencies.
    4. Now you need to start a Git repository and the Heroku app where you are going to deploy the Back-End: 
        - `git init`
        - `heroku create`
        - `git add .`
        - `git commit -m 'message'`
        - `git push heroku master`
      
    5. Deploy the Heroku app with `heroku open`. You should see a message like this: **`{"message":"Invalid Token"}`**
    6. Finally, go to the folder `/src/environments` and change the variable `apiUrl` with your new Heroku app link. This will provide a connection between our Front-End and our API, in the Back-End.


  - **Terminal 2**
  
    1. On the root folder, run `npm install` to install all the dependencies.
    2. If you want to create your own Heroku app. Create a new Git repository and follow the Heroku instructions.
    3. Open the Heroku App using the following command: `heroku open`.
    
- Enjoy the app!
