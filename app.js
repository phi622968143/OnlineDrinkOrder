const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // 解析 x-www-form-urlencoded
app.use(bodyParser.json()); // 解析 JSON

app.post('/order', (req, res) => {
    const { drink, size } = req.body;

    // 驗證請求是否完整
    if (!drink || !size) {
        return res.status(400).json({ error: "請選擇飲料和大小" });
    }

  
    const orderResponse = {
        orderId,
        drink,
        size,
        timestamp: new Date().toLocaleString()
    };

    console.log("收到訂單:", orderResponse);
    res.json(orderResponse);
});

app.listen(port, () => {
    console.log(`訂單 API 伺服器運行於 http://localhost:${port}`);
});
