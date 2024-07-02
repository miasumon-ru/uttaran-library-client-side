


# Uttaran library

It is a website related to the library management system.
A person can borrow , add or update a book on the base of his desired category logging into the website.


live link : https://assignment-eleven-client-side.web.app/








## Features
- assignment_category_0008
- axios and tanstack query is used to fetch the data
- jwt webtoken is used to secure api
- Dark and Night mode functionality
- CRUD operation has been implemented 
- Responsive on desktop, tablet and mobile phones
- A slider with meaningful information 
- Environmnent variables have been used to protect the firebase key and dotEnv variables to protect the mongodb credentials of the database from general people
- Dynamic routes and  private routes are implemented
- Firebase is  used to create user and login with email and password and therefore login with Google and Github




## Npm Packages

1. React Tooltip => This package is used in the navbar section to see the displayName of the logged user on Hover in user Image

2. React HookForm => It has been implemented to take the data from input field from user

3. Swiper Js => Swiper js is another amazing npm package which deals with different sliders 

4. React Helmet => It is used for dynamic title of a page  of a website

5. React Toastify => Toastify is another npm package and it is used as a alert or success message when CRUD operation is conducted 

6. React Rating => This npm package is used in add book page to take the dynamic input from a user and also has been implemented in the all books page where the ratings from database are dynamically converted into star ratings.


## Run Locally

Clone the project

```bash
  git clone https://github.com/miasumon-ru/uttaran-library-client-side.git
```

Go to the project directory

```bash
  cd assignment-eleven-client
```

Install dependencies For Client Side

```bash
  npm install     "@smastrom/react-rating": "^1.5.0",
    "@tanstack/react-query": "^5.35.5",
    "@tanstack/react-query-devtools": "^5.35.5",
    "axios": "^1.6.8",
    "firebase": "^10.11.1",
    "flowbite": "^2.3.0",
    "flowbite-react": "^0.9.0",
    "localforage": "^1.10.0",
    "match-sorter": "^6.3.4",
    "prop-types": "^15.8.1",
    "react": "^18.3.1",
    "react-dom": "^18.2.0",
    "react-helmet": "^6.1.0",
    "react-hook-form": "^7.51.4",
    "react-icons": "^5.2.1",
    "react-rating": "^2.0.5",
    "react-router-dom": "^6.23.0",
    "react-simple-star-rating": "^5.1.7",
    "react-toastify": "^10.0.5",
    "react-tooltip": "^5.26.4",
    "sort-by": "^1.2.0",
    "swiper": "^11.1.1"
```


Install dependencies For Server Side
 
```bash
  npm install        "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.6.1"
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file



`DB_USER`

`DB_PASS`

`ACCESS_TOKEN_SECRET`

## Run

```bash
  For Client : npm run dev
  For Server : nodemon index.js

```
    
