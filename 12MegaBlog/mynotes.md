## installation package

- npm i @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form


## Part 1:

#### (1) setup .env file then create folder named conf/conf.js and store all variables and export.
#### (2) create appwrite folder and make two files named auth.js and config.js and setup code by appwrite documentation.
#### (3) create folder named "store/store.js" and make redux store.
#### (4) create store/authSlice.js file and create Slice. Then make components
#### (5) goto App.jsx and make loading for fetching data from appwrite db.

## Part 2:

#### (1) create components like Footer,Header,and Container folder. and write logic for logout in Header/LogoutBtn.js
#### (2) Header.jsx -> Button.jsx -> Input.jsx file code add 

## Part 3: using react hooks form in production

#### (1) Select.jsx --> PostCard.jsx --> Login.jsx --> Signup.jsx --> AuthLayout.jsx

## Part 4: Adding form and slug value and Using RTE and Controller.

#### (1) RTE.jsx --> PostForm.jsx --> 

## Part 5: 

#### (1) pages/Signup.jsx --> AddPost.jsx --> Login.jsx --> AllPost.jsx --> EditPost.jsx --> Home.jsx -->

#### (2) Routing:   --> main.jsx


## How to configure SSH key into GitHub :- 

#### 1- click on setting -> SSH and GPG Key -> New SSH Key button -> Enter title like SSH_key -> 

#### (1) open git bash
#### (2) generate a new ED25519 SSH key pair

##### - ssh-keygen -t ed25519 -C "azeemdeveloper27@gmail.com"

#### (3) then press "enter" thrice times
#### (4) copy your pub SSH key to clipboard by option 1 or 2 command

##### - cat ~/.ssh/id_ed25519.pub | clip
            OR
##### - clip < ~/.ssh/id_ed25519.pub

#### (7) paste it inside -> edit profile -> ssh-keys -> key(textbox)


### :::::::::::: Diffrent way :::::::::::::

#### - ssh-keygen -t rsa

   





     

## important notes

 #### (1) when we made application by "create react app" 
 define env : CREATE_APP_NAME
 access : process.env.CREATE_APP_NAME

 #### (2) when we make application by "create vite@latest"
 define env : VITE_NAME
 access : import.meta.env.VITE_NAME


 ### Definations :-

 #### forwardRef() :- used for forward state from input tag to login button.

