const mongoose = require('mongoose');
const express = require("express");
const app = express();
const methodOverride = require('method-override');
const path = require("path")
const Chat = require("./models/chat.js");


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method"));

let port = 8080;


main()
.then( ()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


app.get("/",(req,res)=>{ 
    res.send("home");
});


app.get("/chats", async(req,res)=>{
    try{
      let chats =await Chat.find();
      
      res.render("index.ejs",{chats});
    }catch(err){
        console.log(err);
    }
});

app.get("/chats/new", async(req,res)=>{
    try{
      let chats =await Chat.find();
      res.render("edit.ejs",{chats});
    }catch(err){
        console.log(err);
    }
})

app.post("/chats",(req,res)=>{
    let { from, to, msg,} = req.body
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        date_at: new Date()
    });
    newChat.save().then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    });
    console.log(newChat);
    res.redirect("/chats");
})


app.get("/chats/:id/edit", async(req,res)=>{
    let {id} = req.params;
    let chats =await Chat.findById(id);
    res.render("editmsg.ejs",{chats})
})

app.put("/chats/:id", async(req,res)=>{
    let {id} = req.params;
    let { msg:newMsg} = req.body;
    let updatedChat =await Chat.findByIdAndUpdate( id, { msg : newMsg },{ runValidators : true , new : true });
    console.log(updatedChat);
    res.redirect("/chats");
});

app.delete("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})

app.listen(port,()=>{
    console.log("the app is listening on port 8080");
});

