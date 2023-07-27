# react-native-book-app

# Technology
- Frontend: React Native(Redux, Hooks)
- Backend: Nodejs(express)

# Key Feature
- Find and save books in list
- Add Books to favourites
- Edit Books to favourites
- Delete Books to favourites
- Search Book
- List best seller, the lastest, coming soon
- Clean code with ES Lint
- Language Support
- Tab Bar
- Landscape Handling
- Responsive Design
- Code Push with App center (will do)
- Unit tests implemented using Jest (will do)

# Code Structure
There are 4 major screens i.e Home page, add book, edit book and book details.
Important Code for Frontend:
- src/assets All assets
- src/components/...tsx Reusable Components
- src/constants Themes for img and font
- src/models Typescript models
- src/navigation App navigation
- src/screens/...tsx App Screens
- src/services API services

# ▶ How to Setup
- Step 1: git clone this repo.
- Step 2: cd to the cloned repo.
- Step 3: Install the npm modules required for the project with npm i

# ▶ How to Run App
cd react-native-book-app -> cd frontend
- yarn or npm install
- yarn or npm run start

- Run Build for either OS
- for iOS: npm run ios
- for Android: npm run android
- for Web: npm run web

cd react-native-book-app -> cd backend
- yarn or npm install
- yarn or npm run dev

# We have 5 apis for backend
- get all books => http://localhost:3000/books 
- get book by id => http://localhost:3000/book/id
- post book => http://localhost:3000/book
- put book => http://localhost:3000/book/id 
- delete book => http://localhost:3000/book/id 


