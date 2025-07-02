const express = require("express");
const exceljs = require("exceljs");
const Attendance = require("../Attendance/attendance.modal");
const router = express.Router();

router.get('/download',async (req,res) => {

    console.log("req: ",req.query);
    
    try {
        
        // const {from,to} = req.query;
        // const filter = {};
        
        // // apply filters
        // if(from && to){
        //     filter.dateandtime = {$gte: from, $lt: to}
        // }

        // console.log("filter.dateandtime: ",filter.dateandtime)

        // const records = await Attendance.attendanceModal.find(filter);

        // console.log("records: ",records);
        
        // if(records.length === 0){
        //     return res.status(404).send("No data found for the selected filters");
        // }

        // get data
        // const records = await Attendance.attendanceModal.find();
        // console.log("records: ",records);
        
        // // create excell
        // const workbook = new exceljs.Workbook();
        // const worksheet = workbook.addWorksheet('Attendance');

        // worksheet.columns = Object.keys(records[0]).map((key)=>({
        //     header: key,
        //     key: key,
        //     width: 20
        // }))

        // records.forEach((record)=>{
        //     worksheet.addRow(record);
        // })

        // res.setHeader('Content-Type','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        // res.setHeader('Content-Disposition','attachment; filename=attendance.xlsx');

        // await workbook.xlsx.write(res);

        // res.end();
        res.send("testing purpose");
    } catch (error) {
        console.error('Excel export error:', err);
        res.status(500).send('Failed to export data to Excel');
    }
})

module.exports = router;