const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log('Headers:', req.headers);
    next();
});

app.get('/', (req, res) => {
    res.json({ message: 'ヘッダー情報を含むJSONレスポンス', headers: req.headers });
});

app.listen(port, () => {
    console.log(`サーバーがポート${port}で起動しました。`);
});
