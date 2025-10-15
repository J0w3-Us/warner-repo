const express = require('express');
const user_routes = require('./routes/UserRoute');

const app = express();
app.use(express.json());

app.use('/api', user_routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`PracticaInformacionRutas running on http://localhost:${PORT}`));
