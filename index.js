const http = require("http");


const server = http.createServer((req,res) =>{


        if (req.url == "/"){
        res.end("welcome about")}
    else if (req.url == "/about"){
        res.end("welcome to the about page")
    }
    else if (req.url == "/login"){
        res.end(`<html>
        <body>
        <form  action="">
         <h1>login</h1>
         <input type="text" placeholder="name">
         <br>
         <br>
         <input type="email" placeholder="email">
         <br>
         <br>
         <input type="pass" placeholder="password">
         <br>
         <br>
         <input type="submit">
        </form> 
     </body>
        </html>`)
    }
    else if (req.url == "/singup"){
        res.end(`<html>
        <body>
        <form  action="">
         <h1>singup</h1>
         <input type="text" placeholder="name">
         <br>
         <br>
         <input type="email" placeholder="email">
         <br>
         <br>
         <input type="pass" placeholder="password">
         <br>
         <br>
         <input type="submit">
        </form> 
     </body>
        </html>`)
    }
    else if (req.url == "/services"){
        res.end("welcome to the services page")
    }
    else if (req.url == "/product"){
        res.end("welcome to the product page ")
    }


})

server.listen(8017,() =>{
    console.log(`staeting 80017`);
})