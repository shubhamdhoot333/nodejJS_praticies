const EventEmitter = require("events");
const event = new EventEmitter();
//event define
event.on("saymyname", () =>{
    console.log("shubham");
});
event.on("saymyname", () =>{
    console.log("jii");
});
event.on("saymyname", () =>{
    console.log("dhoot");
});
//event call
event.emit("saymyname");