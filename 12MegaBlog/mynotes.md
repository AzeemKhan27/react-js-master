## installation package

- npm i @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form


## Steps 

#### (1) setup .env file then create folder named conf/conf.js and store all variables and export.
#### (2) create appwrite folder and make two files named auth.js and config.js and setup code by appwrite documentation.
#### (3) create folder named "store/store.js" and make redux store.
#### (4) create store/authSlice.js file and create Slice. Then make components
#### (5) goto App.jsx and make loading for fetching data from appwrite db.


     

## important notes

 #### (1) when we made application by "create react app" 
 define env : CREATE_APP_NAME
 access : process.env.CREATE_APP_NAME

 #### (2) when we make application by "create vite@latest"
 define env : VITE_NAME
 access : import.meta.env.VITE_NAME

