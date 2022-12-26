# perso-tweet
Social media MERN app with the following features:
- CRUD (Create, Read, Update, Delete) operations with a post
- Search for a post
- Follow and get followed by other users
- Real-time chat
- User can only delete and modify their own posts. They are not able to modify other users post

Skills used in React:
- Conditional Rednering
- useState
- useContext to manage global access to states
- useReducer (useImmerReducer) as an alternative to useState 
- useRef
- useEffect
- Axios for the communication between the frontend and the backend
- Link, useNavigate, useParams, along with BrowserRouter, Routes, and Route from the react router dom to manage routing, and accessing url  parameters. 

Also used bootstrap5 in conjunction with CSS for styling


Note:
- If you want to test this:
  - In the backend-api folder: 
      1. Setup a database and copy past the connection string.
      2. If desired, modify the JWT secret passcode
      3. Run npm install
      4. npm start
      
  - In the app folder:
      1. npm install
      2. npm run dev
      
 This is because I did not choose to deploy the application to the Internet, and therefore do not have the url.
    
