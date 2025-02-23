const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

const drinks={
    "啤酒":{"大":100,"小":50},
    "柳橙汁": { "大":50,"小":30},
    "卡布奇諾":{"大":50,"小":30},
};
let latestOrder=null;

app.use(bodyParser.urlencoded({ extended: true })); // 解析 x-www-form-urlencoded
app.use(bodyParser.json()); // 解析 JSON

app.post('/order', (req, res) => {
    const { drink, size } = req.body;
    // 驗證請求是否完整
    if (!drink || !size) {
        return res.status(400).json({ error: "請選擇飲料和大小" });
    }
    price=drinks[drink][size];
  
    const orderResponse = {
        // orderId,
        drink,
        size,
        price,
        timestamp: new Date().toLocaleString()
    };

    console.log("收到訂單:", orderResponse);
    res.json(orderResponse);
});
app.get('/get_order',(req,res)=>{
    if(latestOrder){
        res.json(latestOrder);
        latestOrder=null;
    }else{
        res.json({order:null});
    }
})
app.listen(port, () => {
    console.log(`訂單 API 伺服器運行於 http://localhost:${port}`);
});
