const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

/* app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
}); */

app.put('/add-role', async (req, res) => {
  const memberId = req.body.memberId;
  console.log(memberId);

  await fetch(`https://discord.com/api/guilds/1121704043539091537/members/${memberId}/roles/1130452854340067358`, {
    method: 'PUT',
    headers: {
      Authorization: `Bot ${process.env.BOT_TOKEN}`
    }
  }).then(res.status(200).send(`role added to ${memberId}`))
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`app is running on PORT: ${PORT}!`);
})