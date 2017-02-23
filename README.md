# Shortener & Decrypt Links Bot

[Add bot in Telegram](https://t.me/shortenerlinksbot).

![preview](http://bifot.ru/data/uploads/shortenerdecryptlinksbot.gif)

## Available commands

* **/short &#x3C;link&#x3E;** — shorten your link;
* **/long &#x3C;link&#x3E;** — decrypt your link (show original).

## Install

```
$ git clone https://github.com/bifot/shortener-links-bot
$ cd shortener-links-bot
$ npm install
```

Then you need to configure the bot.

## Configure

**config.json**:

```javascript
{
  "tgtoken": "3401151238803:AAHV2Njts4lEASdqwedVyQs2_CYoqQL0sDsr1o",
  "shtoken": "4d23fcac5bc94834a5dd1d9649aqweg1",
  "db": "mongodb://localhost:27017/shortener-links-bot"
}
```

* **tgtoken** — your bot token;
* **shtoken** — your shortener API token ([get here](https://developers.rebrandly.com));
* **db**: — url databse.

## Start

```
$ node app.js
```

## License

MIT License

Copyright (c) 2017 Mikhail Semin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
____

*Made by [Mikhail Semin](https://bifot.ru).*
