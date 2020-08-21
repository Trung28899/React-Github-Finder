API used for this app:
https://api.github.com/users
documentations:
https://developer.github.com/v4/

- All the styling classes of the app is in App.css

- Handling Http requests: using axios
npm i axios
handling requests in App.js

- Have to register github application
follow this guide: 
https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/

After create it, take: 
- Client ID
- Client Secret 
put to .env.local file
global variables are used in App.js in componentDidMount()
in the fetching url

- Passing Props Up:
components/users/Search.js
passing props to App.js