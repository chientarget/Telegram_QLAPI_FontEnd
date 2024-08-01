const express = require('express');
const app = express();

const port = process.env.PORT || 3322;
app.listen(port, () => {
    console.log(`Backend server is running on port ${port}`);
});
