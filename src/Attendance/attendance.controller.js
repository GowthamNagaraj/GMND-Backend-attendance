const attendanceService = require("./attendance.service");

module.exports = {
    saveAttendance,
    getRecord,
    // filterRecords
}

// Attendance Service
async function saveAttendance(req,res,next) {
    try {
        console.log("body",req.body);
        
        const attendance = await attendanceService.insertAttendance(req.body);
        return res.json(attendance);
    } catch (error) {
        return res.status(500).json({ message: "Error saving attendance"+error });
    }
}

async function getRecord(req,res,next) {
    try {
        const record = await attendanceService.retriveDatas(req.params.id);
        return res.json(record);
    } catch (error) {
        return res.status(500).json({ message: "Error getting record" });
    }
}

// async function filterRecords(req,res,next) {
//     try {
//         const filterData = await attendanceService.filterDatas(req.body);
//         return res.json(filterData);
//     } catch (error) {
//         return res.status(500).json({ message: "Error getting record" });
//     }
// }