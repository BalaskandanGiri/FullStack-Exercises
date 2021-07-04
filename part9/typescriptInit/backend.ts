const express = require('express');
const app = express();

app.get('/ping', (_req: any, resp: { send: (arg0: string) => void; }) => {
    resp.send('Hello Full Stack!')
})

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})