const fs = require("fs");
const path = require("path");

var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(data);
    });

    // app.get("/api/notes/:id", function(req,res){
    //     res.json(data[Number(req.params.id)])
    // })

    app.post("/api/notes", function(req, res) {

        let newNote = req.body;
        console.log(newNote);
        let id = data.length.toString();
        console.log(id);
        newNote.id = id
        data.push(newNote);
        
        fs.writeFileSync("./db/db.json", JSON.stringify(data), function(err) {
            if (err) throw (err);        
        }); 

        res.json(newNote);    

    });

    
    app.delete("/api/notes/:id", function(req, res) {
        console.log("This note has been deleted");
    }); 


}
