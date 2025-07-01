require("dotenv").config();
const { attendanceModal, ObjectId } = require("./attendance.modal");
const { userModal } = require("../Users/users.modal")

module.exports = {
    insertAttendance,
    retriveDatas,
    // filterDatas
}

// save attendance
async function insertAttendance(params) {
    try {
        // create a new attendance document
        const attendance = new attendanceModal(params);
        // save the attendance document
        const record = await attendance.save();
        return {status:201,message:"New attendance record created",data:record};
    } catch (error) {
        return {status:500,message:"Error creating attendance record",data:error};
    }
}

// get record
async function retriveDatas(params) {
    try {
        const attendance = await attendanceModal.find({userid: params});
        const user = await userModal.find({_id: params});
        
        const obj = {
            attendance: attendance,
            user: user
        }
        return {status:200,message:"Attendance records retrieved",data:obj};
    } catch (error) {
        return {status:500,message:"Error retrieving attendance records",data:error};
    }
}

// filter datas
// async function filterDatas(params){
//     try {
//         const {year,month,days,userid} = params;
//         console.log("called");
        
//         // 12/6/2025
//         const attendance = await attendanceModal.find({userid:userid})
//         console.log("attendance filter: ", attendance);
//     } catch (error) {

//     }
// }