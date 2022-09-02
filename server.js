const express = require('express');
const got = require('got');

const OLD_MS = 90 * 24 * 60 * 60 * 1000;
const OLD_CACHE_MS = 24 * 60 * 60 * 1000;

const app = express();
app.use(express.static('public'));

app.get('/:owner/:repo/:theme(light|dark).svg', async (req, res, next) => {
  try {
    const repo = await got.get(`https://api.github.com/repos/${req.params.owner}/${req.params.repo}`).json();
    console.log(repo.full_name, repo.updated_at);
    const updated = new Date(repo.updated_at).getTime();
    const now = Date.now();
    if (now - updated > OLD_MS) {
      res.sendFile(`public/${req.params.theme}-was.svg`, {root: '.', maxAge: OLD_CACHE_MS});
    } else {
      // cache until it can next be considered old
      const maxAge = updated + OLD_MS - now;
      res.sendFile(`public/${req.params.theme}-is.svg`, {root: '.', maxAge});
    }
  } catch (e) {
    next(e);
  }
});

app.listen(process.env.PORT, () => {
  console.log('listening');
});
