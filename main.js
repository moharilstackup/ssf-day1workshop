//Step 1: load path and express
const express = require("express");
const path = require("path");

//Step 2: create an instance of the application
const app = express();

//Step 3: define routes

//Serves from public
app.use(express.static(path.join(__dirname, "angular")));
app.use(express.static(path.join(__dirname, "public")));

app.use((req,res) => {
    //Redirect the request to the file not found page
    //Also in public directory
    res.redirect("/");
 });

app.use((req,res) => {
    //Redirect the request to the file not found page
    //Also in public directory
    res.status(404);
    res.sendfile(path.join(__dirname,"public","404.html"));
 });
 //same as above where above is to inform user
 //Below to communicate to server to indicate error
 app.use((req,res,next) => {
    //Redirect the request to the file not found page
    //Also in public directory
    res.redirect("/404.html");
 });


//Step 4: start the server
const PORT = parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000;
/* console.log(process.argv);
console.log(">>>>> APP_PORT ", process.env.APP_PORT);
console.log(">>>>> PORT ", PORT); */

app.listen(PORT, () => {
    console.info(`Application started on port ${PORT} at ${new Date()}`);
}
);