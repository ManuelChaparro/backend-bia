const express = require('express');
const bodyParser = require('body-parser');
const XLSX = require('xlsx');

const app = express();
const port = process.env.PORT || 3001;
const dataExcel = readExcel("database.xlsx");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/biatest', async(req, res) => {
    const data = req.body;
    if(data["period"] === "monthly"){
        returnMonthlyResult(res);
    }else if(data["period"] === "weekly"){
        returnWeeklyResult(res);
    }else{
        returnDailyResult(res);
    }
});

app.listen(port, () => {
    console.log(`API REST corriendo en el puerto ${port}`);
});

function readExcel(path){
    const workbook = XLSX.readFile(path);
    const workbookSheets = workbook.SheetNames;
    const sheet = workbookSheets[0];
    return XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
};

function returnMonthlyResult(res){
    const rows = {
        
    };
};

function returnWeeklyResult(res){
    
};

function returnDailyResult(res){
    
};