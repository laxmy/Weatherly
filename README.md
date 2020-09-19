This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### README 
### Date 
19 September 2020 

### Location of deployed application 
https://weatherly-7814d.firebaseapp.com/

### Time spent 
~14 hours 

### Assumptions made   
## Input  
When a user wants to see the local weather in any city, he will type in the location or city name.  He could also type in City name, abbr of Country too.
Eg: Sydney,AU  
## Units
For this version of the app,  the user will use metric units for viewing weather info. In future, we  can have a feature to change user unit preferences.
### Shortcuts/Compromises made 
The XAxis labels and tooltips of the graph could have been more tweaked for better usability. Right now, they are showing bare info.
### Stretch goals attempted 
The App is fully responsive making use of flexbox layout and uses responsive typography for main contents.  
User can type in any city, to know its weather.  
The App has been deployed using Firebase. 
The app auto refreshes weather every 2 hours using a timer.  

### Instructions to run assignment locally 

The code is available in the Github Repo. (https://github.com/laxmy/Weatherly).  
* Prerequisites: Node and npm should be available in your local system.  
Instructions: It can be downloaded and used locally using these commands. 
```git clone https://github.com/laxmy/Weatherly
cd weatherly
npm install
npm start
```
### What did you not include in your solution that you want us to know about? 
* I  would have loved to improve the app performance by not fetching data for the same location again, if the user refreshes in less than 2 hours.
Because the API updates data only every 3 hours or so.  
* I would have added a conditional dispatch in the async action creator in Redux to achieve this.  
* I would have used Typescript and defined the data types and interfaces using Typescript. This would have helped achieve static typing for the data and make it less buggy.  
* I would have added User preferences to change the preferred Unit System. I would have used local storage or firebase to cache this as well.  


