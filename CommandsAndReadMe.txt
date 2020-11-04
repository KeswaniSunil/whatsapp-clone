
-To creat the React Project:- 'npx create-react-app whatsapp-clone' 
--Creating Project in FireBase , then after proj is created go to project settings and then at the bottom of that page select web app icon and register your app and click on firebase hosting box too,then in third step you will get firebase npm command that you need to run in your proj directory in local storage/machine,i m running :- 'npm install -g firebase-tools'.Also have to do some steps after that,directly do from video https://youtu.be/pUxrDcITyjg from 15th minute

-To run the react project:- npm start
-Before starting coding i deleted App.test.js,logo.svg and setiptests.js files that were inside src folder. Then cleaned App.css by removing all of code inside it.Then inside index.css added:-  ' *  { margin:0; } '
->In this project we will follow BEM naming convention 
-->for material ui,go to https://material-ui.com/ and run 'npm install @material-ui/core' 
Also install material-ui icons using :_- 'npm install @material-ui/icons'

--You can't import any resource(css,js,image file) that is outside your src folder in your reactjs project.So if you are using online resource then its fine directly mention link or if you have in local storage/disk then make sure its inside src folder

--After designing firebase,now we have to connect to firebase so to install firebase dependencies into your project:- 'npm install firebase' and after this you can import firebase in your proj by import firebase from 'firebase'

-->Now go to firebase site and into your whatsapp clone project and then go to cloud firebase option shown in sidebar and inside it create create database button and then follow steps shown in video.
-->To install react router:- 'npm install react-router-dom'
-Firebase is basically the real time db.
--Named export vs default export:- https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910

-->URL:- https://whatsapp-clone-8b730.web.app
