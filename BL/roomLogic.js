const roomDl=require("../DL/room.controller")


const getAllRooms=async()=>{
return await roomDl.read({})
}

module.exports={getAllRooms, }