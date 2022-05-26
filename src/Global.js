import 'bincom_test.sql'
const express=require('express')
let app=express()

app.get('bincom_test.sql',function (req,res) {
res.send('hello world')    
})

app.listen(3002)