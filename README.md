# Notes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.

## initialize project after download by running npm install on both client folder (main) and server folder (notes/server)
## Development server

to use free db register or login to mongo db atlas free cluster

### in server folder
  add .env file
  add following variables to file:
  
    NODE_ENV=development
    # Set your database/API connection information here
    MONGODB_CONN='(your mongo db atlas cluster path)'


Run `npm run notes`. this will run bote server and client scripts and start the app. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
