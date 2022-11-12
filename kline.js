const log = console.log;
const api = require('binance');
const express = require('express');
const app = express();
const server = app.listen(process.env.PORT || '4000', () => log(`Kline Data Server started on port 4000`));
const socket = require('socket.io');
const io = socket(server);

const bRest = new api.BinanceRest({
    key: "", // Get this from your account on binance.com
    secret: "", // Same for this
    timeout: 15000, // Optional, defaults to 15000, is the request time out in milliseconds
    recvWindow: 20000, // Optional, defaults to 5000, increase if you're getting timestamp errors
    disableBeautification: false,
    handleDrift: true
});

const binanceWS = new api.BinanceWS(true);


const btc = binanceWS.onKline('BTCUSDT', '1m', (data) => {
    io.sockets.emit('BTCUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});


const eth = binanceWS.onKline('ETHUSDT', '1m', (data) => {
    io.sockets.emit('ETHUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const APTUSDT = binanceWS.onKline('APTUSDT', '1m', (data) => {
    io.sockets.emit('APTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const AVAXUSDT = binanceWS.onKline('AVAXUSDT', '1m', (data) => {
    io.sockets.emit('AVAXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const APEUSDT = binanceWS.onKline('APEUSDT', '1m', (data) => {
    io.sockets.emit('APEUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ALGOUSDT = binanceWS.onKline('ALGOUSDT', '1m', (data) => {
    io.sockets.emit('ALGOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const AXSUSDT = binanceWS.onKline('AXSUSDT', '1m', (data) => {
    io.sockets.emit('AXSUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ARUSDT = binanceWS.onKline('ARUSDT', '1m', (data) => {
    io.sockets.emit('ARUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const TLMUSDT = binanceWS.onKline('TLMUSDT', '1m', (data) => {
    io.sockets.emit('TLMUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const AAVEUSDT = binanceWS.onKline('AAVEUSDT', '1m', (data) => {
    io.sockets.emit('AAVEUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ANKRUSDT = binanceWS.onKline('ANKRUSDT', '1m', (data) => {
    io.sockets.emit('ANKRUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ANCUSDT = binanceWS.onKline('ANCUSDT', '1m', (data) => {
    io.sockets.emit('ANCUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const AUDIOUSDT = binanceWS.onKline('AUDIOUSDT', '1m', (data) => {
    io.sockets.emit('AUDIOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const AGLDUSDT = binanceWS.onKline('AGLDUSDT', '1m', (data) => {
    io.sockets.emit('AGLDUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ACHUSDT = binanceWS.onKline('ACHUSDT', '1m', (data) => {
    io.sockets.emit('ACHUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ALPINEUSDT = binanceWS.onKline('ALPINEUSDT', '1m', (data) => {
    io.sockets.emit('ALPINEUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ATAUSDT = binanceWS.onKline('ATAUSDT', '1m', (data) => {
    io.sockets.emit('ATAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ADADOWNUSDT = binanceWS.onKline('ADADOWNUSDT', '1m', (data) => {
    io.sockets.emit('ADADOWNUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const AMBUSDT = binanceWS.onKline('AMBUSDT', '1m', (data) => {
    io.sockets.emit('AMBUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ASRUSDT = binanceWS.onKline('ASRUSDT', '1m', (data) => {
    io.sockets.emit('ASRUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ANTUSDT = binanceWS.onKline('ANTUSDT', '1m', (data) => {
    io.sockets.emit('ANTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ALPHAUSDT = binanceWS.onKline('ALPHAUSDT', '1m', (data) => {
    io.sockets.emit('ALPHAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ARPAUSDT = binanceWS.onKline('ARPAUSDT', '1m', (data) => {
    io.sockets.emit('ARPAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ADAUPUSDT = binanceWS.onKline('ADAUPUSDT', '1m', (data) => {
    io.sockets.emit('ADAUPUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const API3USDT = binanceWS.onKline('API3USDT', '1m', (data) => {
    io.sockets.emit('API3USDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const AMPUSDT = binanceWS.onKline('AMPUSDT', '1m', (data) => {
    io.sockets.emit('AMPUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const AERGOUSDT = binanceWS.onKline('AERGOUSDT', '1m', (data) => {
    io.sockets.emit('AERGOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ASTRUSDT = binanceWS.onKline('ASTRUSDT', '1m', (data) => {
    io.sockets.emit('ASTRUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ATMUSDT = binanceWS.onKline('ATMUSDT', '1m', (data) => {
    io.sockets.emit('ATMUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ACAUSDT = binanceWS.onKline('ACAUSDT', '1m', (data) => {
    io.sockets.emit('ACAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ALPACAUSDT = binanceWS.onKline('ALPACAUSDT', '1m', (data) => {
    io.sockets.emit('ALPACAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const REPUSDT = binanceWS.onKline('REPUSDT', '1m', (data) => {
    io.sockets.emit('REPUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ADXUSDT = binanceWS.onKline('ADXUSDT', '1m', (data) => {
    io.sockets.emit('ADXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ACMUSDT = binanceWS.onKline('ACMUSDT', '1m', (data) => {
    io.sockets.emit('ACMUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const AIONUSDT = binanceWS.onKline('AIONUSDT', '1m', (data) => {
    io.sockets.emit('AIONUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ASTUSDT = binanceWS.onKline('ASTUSDT', '1m', (data) => {
    io.sockets.emit('ASTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const AKROUSDT = binanceWS.onKline('AKROUSDT', '1m', (data) => {
    io.sockets.emit('AKROUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ALCXUSDT = binanceWS.onKline('ALCXUSDT', '1m', (data) => {
    io.sockets.emit('ALCXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ELFUSDT = binanceWS.onKline('ELFUSDT', '1m', (data) => {
    io.sockets.emit('ELFUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const AUTOUSDT = binanceWS.onKline('AUTOUSDT', '1m', (data) => {
    io.sockets.emit('AUTOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ARDRUSDT = binanceWS.onKline('ARDRUSDT', '1m', (data) => {
    io.sockets.emit('ARDRUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const GHSTUSDT = binanceWS.onKline('GHSTUSDT', '1m', (data) => {
    io.sockets.emit('GHSTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const FORTHUSDT = binanceWS.onKline('FORTHUSDT', '1m', (data) => {
    io.sockets.emit('FORTHUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BTCUSDT = binanceWS.onKline('BTCUSDT', '1m', (data) => {
    io.sockets.emit('BTCUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BNBUSDT = binanceWS.onKline('BNBUSDT', '1m', (data) => {
    io.sockets.emit('BNBUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BUSDUSDT = binanceWS.onKline('BUSDUSDT', '1m', (data) => {
    io.sockets.emit('BUSDUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BETHUSDT = binanceWS.onKline('BETHUSDT', '1m', (data) => {
    io.sockets.emit('BETHUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BCHUSDT = binanceWS.onKline('BCHUSDT', '1m', (data) => {
    io.sockets.emit('BCHUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BAKEUSDT = binanceWS.onKline('BAKEUSDT', '1m', (data) => {
    io.sockets.emit('BAKEUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BTGUSDT = binanceWS.onKline('BTGUSDT', '1m', (data) => {
    io.sockets.emit('BTGUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BATUSDT = binanceWS.onKline('BATUSDT', '1m', (data) => {
    io.sockets.emit('BATUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BURGERUSDT = binanceWS.onKline('BURGERUSDT', '1m', (data) => {
    io.sockets.emit('BURGERUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BLZUSDT = binanceWS.onKline('BLZUSDT', '1m', (data) => {
    io.sockets.emit('BLZUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BNXUSDT = binanceWS.onKline('BNXUSDT', '1m', (data) => {
    io.sockets.emit('BNXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BANDUSDT = binanceWS.onKline('BANDUSDT', '1m', (data) => {
    io.sockets.emit('BANDUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BELUSDT = binanceWS.onKline('BELUSDT', '1m', (data) => {
    io.sockets.emit('BELUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BETAUSDT = binanceWS.onKline('BETAUSDT', '1m', (data) => {
    io.sockets.emit('BETAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BSWUSDT = binanceWS.onKline('BSWUSDT', '1m', (data) => {
    io.sockets.emit('BSWUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BTCDOWNUSDT = binanceWS.onKline('BTCDOWNUSDT', '1m', (data) => {
    io.sockets.emit('BTCDOWNUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BTCSTUSDT = binanceWS.onKline('BTCSTUSDT', '1m', (data) => {
    io.sockets.emit('BTCSTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BTTCUSDT = binanceWS.onKline('BTTCUSDT', '1m', (data) => {
    io.sockets.emit('BTTCUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BONDUSDT = binanceWS.onKline('BONDUSDT', '1m', (data) => {
    io.sockets.emit('BONDUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const AUCTIONUSDT = binanceWS.onKline('AUCTIONUSDT', '1m', (data) => {
    io.sockets.emit('AUCTIONUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BNBDOWNUSDT = binanceWS.onKline('BNBDOWNUSDT', '1m', (data) => {
    io.sockets.emit('BNBDOWNUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BNTUSDT = binanceWS.onKline('BNTUSDT', '1m', (data) => {
    io.sockets.emit('BNTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BIFIUSDT = binanceWS.onKline('BIFIUSDT', '1m', (data) => {
    io.sockets.emit('BIFIUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const QIUSDT = binanceWS.onKline('QIUSDT', '1m', (data) => {
    io.sockets.emit('QIUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BALUSDT = binanceWS.onKline('BALUSDT', '1m', (data) => {
    io.sockets.emit('BALUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BADGERUSDT = binanceWS.onKline('BADGERUSDT', '1m', (data) => {
    io.sockets.emit('BADGERUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BICOUSDT = binanceWS.onKline('BICOUSDT', '1m', (data) => {
    io.sockets.emit('BICOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BNBUPUSDT = binanceWS.onKline('BNBUPUSDT', '1m', (data) => {
    io.sockets.emit('BNBUPUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const FIDAUSDT = binanceWS.onKline('FIDAUSDT', '1m', (data) => {
    io.sockets.emit('FIDAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BEAMUSDT = binanceWS.onKline('BEAMUSDT', '1m', (data) => {
    io.sockets.emit('BEAMUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BTCUPUSDT = binanceWS.onKline('BTCUPUSDT', '1m', (data) => {
    io.sockets.emit('BTCUPUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BTSUSDT = binanceWS.onKline('BTSUSDT', '1m', (data) => {
    io.sockets.emit('BTSUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ATOMUSDT = binanceWS.onKline('ATOMUSDT', '1m', (data) => {
    io.sockets.emit('ATOMUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ADAUSDT = binanceWS.onKline('ADAUSDT', '1m', (data) => {
    io.sockets.emit('ADAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const CRVUSDT = binanceWS.onKline('CRVUSDT', '1m', (data) => {
    io.sockets.emit('CRVUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const PEOPLEUSDT = binanceWS.onKline('PEOPLEUSDT', '1m', (data) => {
    io.sockets.emit('PEOPLEUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const C98USDT = binanceWS.onKline('C98USDT', '1m', (data) => {
    io.sockets.emit('C98USDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const COMPUSDT = binanceWS.onKline('COMPUSDT', '1m', (data) => {
    io.sockets.emit('COMPUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const CHZUSDT = binanceWS.onKline('CHZUSDT', '1m', (data) => {
    io.sockets.emit('CHZUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const COCOSUSDT = binanceWS.onKline('COCOSUSDT', '1m', (data) => {
    io.sockets.emit('COCOSUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const COTIUSDT = binanceWS.onKline('COTIUSDT', '1m', (data) => {
    io.sockets.emit('COTIUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const CELOUSDT = binanceWS.onKline('CELOUSDT', '1m', (data) => {
    io.sockets.emit('CELOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const CELRUSDT = binanceWS.onKline('CELRUSDT', '1m', (data) => {
    io.sockets.emit('CELRUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const CHRUSDT = binanceWS.onKline('CHRUSDT', '1m', (data) => {
    io.sockets.emit('CHRUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const CTSIUSDT = binanceWS.onKline('CTSIUSDT', '1m', (data) => {
    io.sockets.emit('CTSIUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const CLVUSDT = binanceWS.onKline('CLVUSDT', '1m', (data) => {
    io.sockets.emit('CLVUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const CVXUSDT = binanceWS.onKline('CVXUSDT', '1m', (data) => {
    io.sockets.emit('CVXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const CVCUSDT = binanceWS.onKline('CVCUSDT', '1m', (data) => {
    io.sockets.emit('CVCUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const CTXCUSDT = binanceWS.onKline('CTXCUSDT', '1m', (data) => {
    io.sockets.emit('CTXCUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const CREAMUSDT = binanceWS.onKline('CREAMUSDT', '1m', (data) => {
    io.sockets.emit('CREAMUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const CFXUSDT = binanceWS.onKline('CFXUSDT', '1m', (data) => {
    io.sockets.emit('CFXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const COSUSDT = binanceWS.onKline('COSUSDT', '1m', (data) => {
    io.sockets.emit('COSUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const DOGEUSDT = binanceWS.onKline('DOGEUSDT', '1m', (data) => {
    io.sockets.emit('DOGEUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const DENTUSDT = binanceWS.onKline('DENTUSDT', '1m', (data) => {
    io.sockets.emit('DENTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const YFIIUSDT = binanceWS.onKline('YFIIUSDT', '1m', (data) => {
    io.sockets.emit('YFIIUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const DYDXUSDT = binanceWS.onKline('DYDXUSDT', '1m', (data) => {
    io.sockets.emit('DYDXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const MANAUSDT = binanceWS.onKline('MANAUSDT', '1m', (data) => {
    io.sockets.emit('MANAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const DNTUSDT = binanceWS.onKline('DNTUSDT', '1m', (data) => {
    io.sockets.emit('DNTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const DASHUSDT = binanceWS.onKline('DASHUSDT', '1m', (data) => {
    io.sockets.emit('DASHUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const DUSKUSDT = binanceWS.onKline('DUSKUSDT', '1m', (data) => {
    io.sockets.emit('DUSKUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const DFUSDT = binanceWS.onKline('DFUSDT', '1m', (data) => {
    io.sockets.emit('DFUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const DREPUSDT = binanceWS.onKline('DREPUSDT', '1m', (data) => {
    io.sockets.emit('DREPUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const DODOUSDT = binanceWS.onKline('DODOUSDT', '1m', (data) => {
    io.sockets.emit('DODOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const DOTDOWNUSDT = binanceWS.onKline('DOTDOWNUSDT', '1m', (data) => {
    io.sockets.emit('DOTDOWNUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const DOTUPUSDT = binanceWS.onKline('DOTUPUSDT', '1m', (data) => {
    io.sockets.emit('DOTUPUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const DEGOUSDT = binanceWS.onKline('DEGOUSDT', '1m', (data) => {
    io.sockets.emit('DEGOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const DGBUSDT = binanceWS.onKline('DGBUSDT', '1m', (data) => {
    io.sockets.emit('DGBUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const DIAUSDT = binanceWS.onKline('DIAUSDT', '1m', (data) => {
    io.sockets.emit('DIAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const DCRUSDT = binanceWS.onKline('DCRUSDT', '1m', (data) => {
    io.sockets.emit('DCRUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const DOCKUSDT = binanceWS.onKline('DOCKUSDT', '1m', (data) => {
    io.sockets.emit('DOCKUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const DEXEUSDT = binanceWS.onKline('DEXEUSDT', '1m', (data) => {
    io.sockets.emit('DEXEUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ETHUSDT = binanceWS.onKline('ETHUSDT', '1m', (data) => {
    io.sockets.emit('ETHUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ETHDOWNUSDT = binanceWS.onKline('ETHDOWNUSDT', '1m', (data) => {
    io.sockets.emit('ETHDOWNUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const MLNUSDT = binanceWS.onKline('MLNUSDT', '1m', (data) => {
    io.sockets.emit('MLNUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const XECUSDT = binanceWS.onKline('XECUSDT', '1m', (data) => {
    io.sockets.emit('XECUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ETCUSDT = binanceWS.onKline('ETCUSDT', '1m', (data) => {
    io.sockets.emit('ETCUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const EOSUSDT = binanceWS.onKline('EOSUSDT', '1m', (data) => {
    io.sockets.emit('EOSUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ENJUSDT = binanceWS.onKline('ENJUSDT', '1m', (data) => {
    io.sockets.emit('ENJUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const EGLDUSDT = binanceWS.onKline('EGLDUSDT', '1m', (data) => {
    io.sockets.emit('EGLDUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ENSUSDT = binanceWS.onKline('ENSUSDT', '1m', (data) => {
    io.sockets.emit('ENSUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ERNUSDT = binanceWS.onKline('ERNUSDT', '1m', (data) => {
    io.sockets.emit('ERNUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ETHUPUSDT = binanceWS.onKline('ETHUPUSDT', '1m', (data) => {
    io.sockets.emit('ETHUPUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const EPXUSDT = binanceWS.onKline('EPXUSDT', '1m', (data) => {
    io.sockets.emit('EPXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const FORUSDT = binanceWS.onKline('FORUSDT', '1m', (data) => {
    io.sockets.emit('FORUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const FLMUSDT = binanceWS.onKline('FLMUSDT', '1m', (data) => {
    io.sockets.emit('FLMUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const FRONTUSDT = binanceWS.onKline('FRONTUSDT', '1m', (data) => {
    io.sockets.emit('FRONTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const FLUXUSDT = binanceWS.onKline('FLUXUSDT', '1m', (data) => {
    io.sockets.emit('FLUXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const FIROUSDT = binanceWS.onKline('FIROUSDT', '1m', (data) => {
    io.sockets.emit('FIROUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const FIOUSDT = binanceWS.onKline('FIOUSDT', '1m', (data) => {
    io.sockets.emit('FIOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const FUNUSDT = binanceWS.onKline('FUNUSDT', '1m', (data) => {
    io.sockets.emit('FUNUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const FETUSDT = binanceWS.onKline('FETUSDT', '1m', (data) => {
    io.sockets.emit('FETUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const BARUSDT = binanceWS.onKline('BARUSDT', '1m', (data) => {
    io.sockets.emit('BARUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const FILUSDT = binanceWS.onKline('FILUSDT', '1m', (data) => {
    io.sockets.emit('FILUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const FTMUSDT = binanceWS.onKline('FTMUSDT', '1m', (data) => {
    io.sockets.emit('FTMUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const FTTUSDT = binanceWS.onKline('FTTUSDT', '1m', (data) => {
    io.sockets.emit('FTTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const PORTOUSDT = binanceWS.onKline('PORTOUSDT', '1m', (data) => {
    io.sockets.emit('PORTOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const FLOWUSDT = binanceWS.onKline('FLOWUSDT', '1m', (data) => {
    io.sockets.emit('FLOWUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const FXSUSDT = binanceWS.onKline('FXSUSDT', '1m', (data) => {
    io.sockets.emit('FXSUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const GTOUSDT = binanceWS.onKline('GTOUSDT', '1m', (data) => {
    io.sockets.emit('GTOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const GNOUSDT = binanceWS.onKline('GNOUSDT', '1m', (data) => {
    io.sockets.emit('GNOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const GTCUSDT = binanceWS.onKline('GTCUSDT', '1m', (data) => {
    io.sockets.emit('GTCUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const GMXUSDT = binanceWS.onKline('GMXUSDT', '1m', (data) => {
    io.sockets.emit('GMXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const GALAUSDT = binanceWS.onKline('GALAUSDT', '1m', (data) => {
    io.sockets.emit('GALAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const GALUSDT = binanceWS.onKline('GALUSDT', '1m', (data) => {
    io.sockets.emit('GALUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const GASUSDT = binanceWS.onKline('GASUSDT', '1m', (data) => {
    io.sockets.emit('GASUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const GLMUSDT = binanceWS.onKline('GLMUSDT', '1m', (data) => {
    io.sockets.emit('GLMUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const HBARUSDT = binanceWS.onKline('HBARUSDT', '1m', (data) => {
    io.sockets.emit('HBARUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const FARMUSDT = binanceWS.onKline('FARMUSDT', '1m', (data) => {
    io.sockets.emit('FARMUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ONEUSDT = binanceWS.onKline('ONEUSDT', '1m', (data) => {
    io.sockets.emit('ONEUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const HOTUSDT = binanceWS.onKline('HOTUSDT', '1m', (data) => {
    io.sockets.emit('HOTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const HNTUSDT = binanceWS.onKline('HNTUSDT', '1m', (data) => {
    io.sockets.emit('HNTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const HIGHUSDT = binanceWS.onKline('HIGHUSDT', '1m', (data) => {
    io.sockets.emit('HIGHUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ZENUSDT = binanceWS.onKline('ZENUSDT', '1m', (data) => {
    io.sockets.emit('ZENUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const HIVEUSDT = binanceWS.onKline('HIVEUSDT', '1m', (data) => {
    io.sockets.emit('HIVEUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const MFTUSDT = binanceWS.onKline('MFTUSDT', '1m', (data) => {
    io.sockets.emit('MFTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ILVUSDT = binanceWS.onKline('ILVUSDT', '1m', (data) => {
    io.sockets.emit('ILVUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const IOTAUSDT = binanceWS.onKline('IOTAUSDT', '1m', (data) => {
    io.sockets.emit('IOTAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const IOTXUSDT = binanceWS.onKline('IOTXUSDT', '1m', (data) => {
    io.sockets.emit('IOTXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const RLCUSDT = binanceWS.onKline('RLCUSDT', '1m', (data) => {
    io.sockets.emit('RLCUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const IMXUSDT = binanceWS.onKline('IMXUSDT', '1m', (data) => {
    io.sockets.emit('IMXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const INJUSDT = binanceWS.onKline('INJUSDT', '1m', (data) => {
    io.sockets.emit('INJUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ICPUSDT = binanceWS.onKline('ICPUSDT', '1m', (data) => {
    io.sockets.emit('ICPUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const IOSTUSDT = binanceWS.onKline('IOSTUSDT', '1m', (data) => {
    io.sockets.emit('IOSTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const IDEXUSDT = binanceWS.onKline('IDEXUSDT', '1m', (data) => {
    io.sockets.emit('IDEXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ICXUSDT = binanceWS.onKline('ICXUSDT', '1m', (data) => {
    io.sockets.emit('ICXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const IQUSDT = binanceWS.onKline('IQUSDT', '1m', (data) => {
    io.sockets.emit('IQUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const IRISUSDT = binanceWS.onKline('IRISUSDT', '1m', (data) => {
    io.sockets.emit('IRISUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const JOEUSDT = binanceWS.onKline('JOEUSDT', '1m', (data) => {
    io.sockets.emit('JOEUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const JUVUSDT = binanceWS.onKline('JUVUSDT', '1m', (data) => {
    io.sockets.emit('JUVUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const JSTUSDT = binanceWS.onKline('JSTUSDT', '1m', (data) => {
    io.sockets.emit('JSTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const JASMYUSDT = binanceWS.onKline('JASMYUSDT', '1m', (data) => {
    io.sockets.emit('JASMYUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const KDAUSDT = binanceWS.onKline('KDAUSDT', '1m', (data) => {
    io.sockets.emit('KDAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const KSMUSDT = binanceWS.onKline('KSMUSDT', '1m', (data) => {
    io.sockets.emit('KSMUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const KNCUSDT = binanceWS.onKline('KNCUSDT', '1m', (data) => {
    io.sockets.emit('KNCUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const KLAYUSDT = binanceWS.onKline('KLAYUSDT', '1m', (data) => {
    io.sockets.emit('KLAYUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const KAVAUSDT = binanceWS.onKline('KAVAUSDT', '1m', (data) => {
    io.sockets.emit('KAVAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const KMDUSDT = binanceWS.onKline('KMDUSDT', '1m', (data) => {
    io.sockets.emit('KMDUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const KP3RUSDT = binanceWS.onKline('KP3RUSDT', '1m', (data) => {
    io.sockets.emit('KP3RUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const HARDUSDT = binanceWS.onKline('HARDUSDT', '1m', (data) => {
    io.sockets.emit('HARDUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const LTCUSDT = binanceWS.onKline('LTCUSDT', '1m', (data) => {
    io.sockets.emit('LTCUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const LINKDOWNUSDT = binanceWS.onKline('LINKDOWNUSDT', '1m', (data) => {
    io.sockets.emit('LINKDOWNUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const LINAUSDT = binanceWS.onKline('LINAUSDT', '1m', (data) => {
    io.sockets.emit('LINAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const LINKUSDT = binanceWS.onKline('LINKUSDT', '1m', (data) => {
    io.sockets.emit('LINKUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const LRCUSDT = binanceWS.onKline('LRCUSDT', '1m', (data) => {
    io.sockets.emit('LRCUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const LITUSDT = binanceWS.onKline('LITUSDT', '1m', (data) => {
    io.sockets.emit('LITUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const LTOUSDT = binanceWS.onKline('LTOUSDT', '1m', (data) => {
    io.sockets.emit('LTOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const LEVERUSDT = binanceWS.onKline('LEVERUSDT', '1m', (data) => {
    io.sockets.emit('LEVERUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const LOKAUSDT = binanceWS.onKline('LOKAUSDT', '1m', (data) => {
    io.sockets.emit('LOKAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const LINKUPUSDT = binanceWS.onKline('LINKUPUSDT', '1m', (data) => {
    io.sockets.emit('LINKUPUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const LDOUSDT = binanceWS.onKline('LDOUSDT', '1m', (data) => {
    io.sockets.emit('LDOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const LSKUSDT = binanceWS.onKline('LSKUSDT', '1m', (data) => {
    io.sockets.emit('LSKUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const LOOMUSDT = binanceWS.onKline('LOOMUSDT', '1m', (data) => {
    io.sockets.emit('LOOMUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const LPTUSDT = binanceWS.onKline('LPTUSDT', '1m', (data) => {
    io.sockets.emit('LPTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const MTLUSDT = binanceWS.onKline('MTLUSDT', '1m', (data) => {
    io.sockets.emit('MTLUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const MKRUSDT = binanceWS.onKline('MKRUSDT', '1m', (data) => {
    io.sockets.emit('MKRUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const CITYUSDT = binanceWS.onKline('CITYUSDT', '1m', (data) => {
    io.sockets.emit('CITYUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ALICEUSDT = binanceWS.onKline('ALICEUSDT', '1m', (data) => {
    io.sockets.emit('ALICEUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const MASKUSDT = binanceWS.onKline('MASKUSDT', '1m', (data) => {
    io.sockets.emit('MASKUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const MIRUSDT = binanceWS.onKline('MIRUSDT', '1m', (data) => {
    io.sockets.emit('MIRUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const MINAUSDT = binanceWS.onKline('MINAUSDT', '1m', (data) => {
    io.sockets.emit('MINAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const MBOXUSDT = binanceWS.onKline('MBOXUSDT', '1m', (data) => {
    io.sockets.emit('MBOXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const MDXUSDT = binanceWS.onKline('MDXUSDT', '1m', (data) => {
    io.sockets.emit('MDXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const DARUSDT = binanceWS.onKline('DARUSDT', '1m', (data) => {
    io.sockets.emit('DARUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const XMRUSDT = binanceWS.onKline('XMRUSDT', '1m', (data) => {
    io.sockets.emit('XMRUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const GLMRUSDT = binanceWS.onKline('GLMRUSDT', '1m', (data) => {
    io.sockets.emit('GLMRUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const MOVRUSDT = binanceWS.onKline('MOVRUSDT', '1m', (data) => {
    io.sockets.emit('MOVRUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const MITHUSDT = binanceWS.onKline('MITHUSDT', '1m', (data) => {
    io.sockets.emit('MITHUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const PONDUSDT = binanceWS.onKline('PONDUSDT', '1m', (data) => {
    io.sockets.emit('PONDUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const MDTUSDT = binanceWS.onKline('MDTUSDT', '1m', (data) => {
    io.sockets.emit('MDTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const MBLUSDT = binanceWS.onKline('MBLUSDT', '1m', (data) => {
    io.sockets.emit('MBLUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const MOBUSDT = binanceWS.onKline('MOBUSDT', '1m', (data) => {
    io.sockets.emit('MOBUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const MCUSDT = binanceWS.onKline('MCUSDT', '1m', (data) => {
    io.sockets.emit('MCUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const MULTIUSDT = binanceWS.onKline('MULTIUSDT', '1m', (data) => {
    io.sockets.emit('MULTIUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const XEMUSDT = binanceWS.onKline('XEMUSDT', '1m', (data) => {
    io.sockets.emit('XEMUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const CKBUSDT = binanceWS.onKline('CKBUSDT', '1m', (data) => {
    io.sockets.emit('CKBUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const NULSUSDT = binanceWS.onKline('NULSUSDT', '1m', (data) => {
    io.sockets.emit('NULSUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const NEBLUSDT = binanceWS.onKline('NEBLUSDT', '1m', (data) => {
    io.sockets.emit('NEBLUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const NBSUSDT = binanceWS.onKline('NBSUSDT', '1m', (data) => {
    io.sockets.emit('NBSUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const NEARUSDT = binanceWS.onKline('NEARUSDT', '1m', (data) => {
    io.sockets.emit('NEARUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const NEOUSDT = binanceWS.onKline('NEOUSDT', '1m', (data) => {
    io.sockets.emit('NEOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const NKNUSDT = binanceWS.onKline('NKNUSDT', '1m', (data) => {
    io.sockets.emit('NKNUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const NEXOUSDT = binanceWS.onKline('NEXOUSDT', '1m', (data) => {
    io.sockets.emit('NEXOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const XNOUSDT = binanceWS.onKline('XNOUSDT', '1m', (data) => {
    io.sockets.emit('XNOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ONTUSDT = binanceWS.onKline('ONTUSDT', '1m', (data) => {
    io.sockets.emit('ONTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const OCEANUSDT = binanceWS.onKline('OCEANUSDT', '1m', (data) => {
    io.sockets.emit('OCEANUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ORNUSDT = binanceWS.onKline('ORNUSDT', '1m', (data) => {
    io.sockets.emit('ORNUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const OSMOUSDT = binanceWS.onKline('OSMOUSDT', '1m', (data) => {
    io.sockets.emit('OSMOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const OPUSDT = binanceWS.onKline('OPUSDT', '1m', (data) => {
    io.sockets.emit('OPUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ROSEUSDT = binanceWS.onKline('ROSEUSDT', '1m', (data) => {
    io.sockets.emit('ROSEUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const OGNUSDT = binanceWS.onKline('OGNUSDT', '1m', (data) => {
    io.sockets.emit('OGNUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const OMGUSDT = binanceWS.onKline('OMGUSDT', '1m', (data) => {
    io.sockets.emit('OMGUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const OGUSDT = binanceWS.onKline('OGUSDT', '1m', (data) => {
    io.sockets.emit('OGUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const OOKIUSDT = binanceWS.onKline('OOKIUSDT', '1m', (data) => {
    io.sockets.emit('OOKIUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ONGUSDT = binanceWS.onKline('ONGUSDT', '1m', (data) => {
    io.sockets.emit('ONGUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const OXTUSDT = binanceWS.onKline('OXTUSDT', '1m', (data) => {
    io.sockets.emit('OXTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const OAXUSDT = binanceWS.onKline('OAXUSDT', '1m', (data) => {
    io.sockets.emit('OAXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const DOTUSDT = binanceWS.onKline('DOTUSDT', '1m', (data) => {
    io.sockets.emit('DOTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const POLYXUSDT = binanceWS.onKline('POLYXUSDT', '1m', (data) => {
    io.sockets.emit('POLYXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const PHAUSDT = binanceWS.onKline('PHAUSDT', '1m', (data) => {
    io.sockets.emit('PHAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const POLYUSDT = binanceWS.onKline('POLYUSDT', '1m', (data) => {
    io.sockets.emit('POLYUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const CAKEUSDT = binanceWS.onKline('CAKEUSDT', '1m', (data) => {
    io.sockets.emit('CAKEUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const MATICUSDT = binanceWS.onKline('MATICUSDT', '1m', (data) => {
    io.sockets.emit('MATICUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const PSGUSDT = binanceWS.onKline('PSGUSDT', '1m', (data) => {
    io.sockets.emit('PSGUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const PERPUSDT = binanceWS.onKline('PERPUSDT', '1m', (data) => {
    io.sockets.emit('PERPUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const PROSUSDT = binanceWS.onKline('PROSUSDT', '1m', (data) => {
    io.sockets.emit('PROSUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const CVPUSDT = binanceWS.onKline('CVPUSDT', '1m', (data) => {
    io.sockets.emit('CVPUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const PHBUSDT = binanceWS.onKline('PHBUSDT', '1m', (data) => {
    io.sockets.emit('PHBUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const PUNDIXUSDT = binanceWS.onKline('PUNDIXUSDT', '1m', (data) => {
    io.sockets.emit('PUNDIXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const PIVXUSDT = binanceWS.onKline('PIVXUSDT', '1m', (data) => {
    io.sockets.emit('PIVXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const PLAUSDT = binanceWS.onKline('PLAUSDT', '1m', (data) => {
    io.sockets.emit('PLAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const POWRUSDT = binanceWS.onKline('POWRUSDT', '1m', (data) => {
    io.sockets.emit('POWRUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const POLSUSDT = binanceWS.onKline('POLSUSDT', '1m', (data) => {
    io.sockets.emit('POLSUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const PROMUSDT = binanceWS.onKline('PROMUSDT', '1m', (data) => {
    io.sockets.emit('PROMUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const PNTUSDT = binanceWS.onKline('PNTUSDT', '1m', (data) => {
    io.sockets.emit('PNTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const PAXGUSDT = binanceWS.onKline('PAXGUSDT', '1m', (data) => {
    io.sockets.emit('PAXGUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const PERLUSDT = binanceWS.onKline('PERLUSDT', '1m', (data) => {
    io.sockets.emit('PERLUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const QKCUSDT = binanceWS.onKline('QKCUSDT', '1m', (data) => {
    io.sockets.emit('QKCUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const QTUMUSDT = binanceWS.onKline('QTUMUSDT', '1m', (data) => {
    io.sockets.emit('QTUMUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const QNTUSDT = binanceWS.onKline('QNTUSDT', '1m', (data) => {
    io.sockets.emit('QNTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const QLCUSDT = binanceWS.onKline('QLCUSDT', '1m', (data) => {
    io.sockets.emit('QLCUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const QUICKUSDT = binanceWS.onKline('QUICKUSDT', '1m', (data) => {
    io.sockets.emit('QUICKUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const RAYUSDT = binanceWS.onKline('RAYUSDT', '1m', (data) => {
    io.sockets.emit('RAYUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const REQUSDT = binanceWS.onKline('REQUSDT', '1m', (data) => {
    io.sockets.emit('REQUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const RNDRUSDT = binanceWS.onKline('RNDRUSDT', '1m', (data) => {
    io.sockets.emit('RNDRUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const RADUSDT = binanceWS.onKline('RADUSDT', '1m', (data) => {
    io.sockets.emit('RADUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const RSRUSDT = binanceWS.onKline('RSRUSDT', '1m', (data) => {
    io.sockets.emit('RSRUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const RVNUSDT = binanceWS.onKline('RVNUSDT', '1m', (data) => {
    io.sockets.emit('RVNUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const REEFUSDT = binanceWS.onKline('REEFUSDT', '1m', (data) => {
    io.sockets.emit('REEFUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const REIUSDT = binanceWS.onKline('REIUSDT', '1m', (data) => {
    io.sockets.emit('REIUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const RIFUSDT = binanceWS.onKline('RIFUSDT', '1m', (data) => {
    io.sockets.emit('RIFUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const RENUSDT = binanceWS.onKline('RENUSDT', '1m', (data) => {
    io.sockets.emit('RENUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const SOLUSDT = binanceWS.onKline('SOLUSDT', '1m', (data) => {
    io.sockets.emit('SOLUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const SHIBUSDT = binanceWS.onKline('SHIBUSDT', '1m', (data) => {
    io.sockets.emit('SHIBUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const SUSHIUSDT = binanceWS.onKline('SUSHIUSDT', '1m', (data) => {
    io.sockets.emit('SUSHIUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const SPELLUSDT = binanceWS.onKline('SPELLUSDT', '1m', (data) => {
    io.sockets.emit('SPELLUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const SANTOSUSDT = binanceWS.onKline('SANTOSUSDT', '1m', (data) => {
    io.sockets.emit('SANTOSUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const SLPUSDT = binanceWS.onKline('SLPUSDT', '1m', (data) => {
    io.sockets.emit('SLPUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const SNXUSDT = binanceWS.onKline('SNXUSDT', '1m', (data) => {
    io.sockets.emit('SNXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const XLMUSDT = binanceWS.onKline('XLMUSDT', '1m', (data) => {
    io.sockets.emit('XLMUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const STGUSDT = binanceWS.onKline('STGUSDT', '1m', (data) => {
    io.sockets.emit('STGUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const SRMUSDT = binanceWS.onKline('SRMUSDT', '1m', (data) => {
    io.sockets.emit('SRMUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const SKLUSDT = binanceWS.onKline('SKLUSDT', '1m', (data) => {
    io.sockets.emit('SKLUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const SXPUSDT = binanceWS.onKline('SXPUSDT', '1m', (data) => {
    io.sockets.emit('SXPUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const LAZIOUSDT = binanceWS.onKline('LAZIOUSDT', '1m', (data) => {
    io.sockets.emit('LAZIOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const GMTUSDT = binanceWS.onKline('GMTUSDT', '1m', (data) => {
    io.sockets.emit('GMTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const STORJUSDT = binanceWS.onKline('STORJUSDT', '1m', (data) => {
    io.sockets.emit('STORJUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const SFPUSDT = binanceWS.onKline('SFPUSDT', '1m', (data) => {
    io.sockets.emit('SFPUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const STMXUSDT = binanceWS.onKline('STMXUSDT', '1m', (data) => {
    io.sockets.emit('STMXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const CTKUSDT = binanceWS.onKline('CTKUSDT', '1m', (data) => {
    io.sockets.emit('CTKUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const SSVUSDT = binanceWS.onKline('SSVUSDT', '1m', (data) => {
    io.sockets.emit('SSVUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const SNMUSDT = binanceWS.onKline('SNMUSDT', '1m', (data) => {
    io.sockets.emit('SNMUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const SUNUSDT = binanceWS.onKline('SUNUSDT', '1m', (data) => {
    io.sockets.emit('SUNUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const AGIXUSDT = binanceWS.onKline('AGIXUSDT', '1m', (data) => {
    io.sockets.emit('AGIXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const SUPERUSDT = binanceWS.onKline('SUPERUSDT', '1m', (data) => {
    io.sockets.emit('SUPERUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const SYSUSDT = binanceWS.onKline('SYSUSDT', '1m', (data) => {
    io.sockets.emit('SYSUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const SCRTUSDT = binanceWS.onKline('SCRTUSDT', '1m', (data) => {
    io.sockets.emit('SCRTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const KEYUSDT = binanceWS.onKline('KEYUSDT', '1m', (data) => {
    io.sockets.emit('KEYUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const FISUSDT = binanceWS.onKline('FISUSDT', '1m', (data) => {
    io.sockets.emit('FISUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const STXUSDT = binanceWS.onKline('STXUSDT', '1m', (data) => {
    io.sockets.emit('STXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const STRAXUSDT = binanceWS.onKline('STRAXUSDT', '1m', (data) => {
    io.sockets.emit('STRAXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const STEEMUSDT = binanceWS.onKline('STEEMUSDT', '1m', (data) => {
    io.sockets.emit('STEEMUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const DATAUSDT = binanceWS.onKline('DATAUSDT', '1m', (data) => {
    io.sockets.emit('DATAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const RAREUSDT = binanceWS.onKline('RAREUSDT', '1m', (data) => {
    io.sockets.emit('RAREUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const STPTUSDT = binanceWS.onKline('STPTUSDT', '1m', (data) => {
    io.sockets.emit('STPTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const SCUSDT = binanceWS.onKline('SCUSDT', '1m', (data) => {
    io.sockets.emit('SCUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const USTCUSDT = binanceWS.onKline('USTCUSDT', '1m', (data) => {
    io.sockets.emit('USTCUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const TRXUSDT = binanceWS.onKline('TRXUSDT', '1m', (data) => {
    io.sockets.emit('TRXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const LUNAUSDT = binanceWS.onKline('LUNAUSDT', '1m', (data) => {
    io.sockets.emit('LUNAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const LUNCUSDT = binanceWS.onKline('LUNCUSDT', '1m', (data) => {
    io.sockets.emit('LUNCUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const SANDUSDT = binanceWS.onKline('SANDUSDT', '1m', (data) => {
    io.sockets.emit('SANDUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const THETAUSDT = binanceWS.onKline('THETAUSDT', '1m', (data) => {
    io.sockets.emit('THETAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const TFUELUSDT = binanceWS.onKline('TFUELUSDT', '1m', (data) => {
    io.sockets.emit('TFUELUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const RUNEUSDT = binanceWS.onKline('RUNEUSDT', '1m', (data) => {
    io.sockets.emit('RUNEUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const XTZUSDT = binanceWS.onKline('XTZUSDT', '1m', (data) => {
    io.sockets.emit('XTZUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const TRBUSDT = binanceWS.onKline('TRBUSDT', '1m', (data) => {
    io.sockets.emit('TRBUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const TWTUSDT = binanceWS.onKline('TWTUSDT', '1m', (data) => {
    io.sockets.emit('TWTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const TCTUSDT = binanceWS.onKline('TCTUSDT', '1m', (data) => {
    io.sockets.emit('TCTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const TRUUSDT = binanceWS.onKline('TRUUSDT', '1m', (data) => {
    io.sockets.emit('TRUUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const TORNUSDT = binanceWS.onKline('TORNUSDT', '1m', (data) => {
    io.sockets.emit('TORNUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const GRTUSDT = binanceWS.onKline('GRTUSDT', '1m', (data) => {
    io.sockets.emit('GRTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const CHESSUSDT = binanceWS.onKline('CHESSUSDT', '1m', (data) => {
    io.sockets.emit('CHESSUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const TKOUSDT = binanceWS.onKline('TKOUSDT', '1m', (data) => {
    io.sockets.emit('TKOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const TOMOUSDT = binanceWS.onKline('TOMOUSDT', '1m', (data) => {
    io.sockets.emit('TOMOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const TUSDT = binanceWS.onKline('TUSDT', '1m', (data) => {
    io.sockets.emit('TUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const TRXDOWNUSDT = binanceWS.onKline('TRXDOWNUSDT', '1m', (data) => {
    io.sockets.emit('TRXDOWNUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const TROYUSDT = binanceWS.onKline('TROYUSDT', '1m', (data) => {
    io.sockets.emit('TROYUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const TRIBEUSDT = binanceWS.onKline('TRIBEUSDT', '1m', (data) => {
    io.sockets.emit('TRIBEUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const AVAUSDT = binanceWS.onKline('AVAUSDT', '1m', (data) => {
    io.sockets.emit('AVAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const UTKUSDT = binanceWS.onKline('UTKUSDT', '1m', (data) => {
    io.sockets.emit('UTKUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const UFTUSDT = binanceWS.onKline('UFTUSDT', '1m', (data) => {
    io.sockets.emit('UFTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const UNIUSDT = binanceWS.onKline('UNIUSDT', '1m', (data) => {
    io.sockets.emit('UNIUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const UMAUSDT = binanceWS.onKline('UMAUSDT', '1m', (data) => {
    io.sockets.emit('UMAUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const UNFIUSDT = binanceWS.onKline('UNFIUSDT', '1m', (data) => {
    io.sockets.emit('UNFIUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const VIBUSDT = binanceWS.onKline('VIBUSDT', '1m', (data) => {
    io.sockets.emit('VIBUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const VIDTUSDT = binanceWS.onKline('VIDTUSDT', '1m', (data) => {
    io.sockets.emit('VIDTUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const PYRUSDT = binanceWS.onKline('PYRUSDT', '1m', (data) => {
    io.sockets.emit('PYRUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const VETUSDT = binanceWS.onKline('VETUSDT', '1m', (data) => {
    io.sockets.emit('VETUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const VITEUSDT = binanceWS.onKline('VITEUSDT', '1m', (data) => {
    io.sockets.emit('VITEUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const TVKUSDT = binanceWS.onKline('TVKUSDT', '1m', (data) => {
    io.sockets.emit('TVKUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const VGXUSDT = binanceWS.onKline('VGXUSDT', '1m', (data) => {
    io.sockets.emit('VGXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const VTHOUSDT = binanceWS.onKline('VTHOUSDT', '1m', (data) => {
    io.sockets.emit('VTHOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const XVSUSDT = binanceWS.onKline('XVSUSDT', '1m', (data) => {
    io.sockets.emit('XVSUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const VOXELUSDT = binanceWS.onKline('VOXELUSDT', '1m', (data) => {
    io.sockets.emit('VOXELUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const WBTCUSDT = binanceWS.onKline('WBTCUSDT', '1m', (data) => {
    io.sockets.emit('WBTCUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const WOOUSDT = binanceWS.onKline('WOOUSDT', '1m', (data) => {
    io.sockets.emit('WOOUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const WINUSDT = binanceWS.onKline('WINUSDT', '1m', (data) => {
    io.sockets.emit('WINUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const WABIUSDT = binanceWS.onKline('WABIUSDT', '1m', (data) => {
    io.sockets.emit('WABIUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const WAVESUSDT = binanceWS.onKline('WAVESUSDT', '1m', (data) => {
    io.sockets.emit('WAVESUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const WAXPUSDT = binanceWS.onKline('WAXPUSDT', '1m', (data) => {
    io.sockets.emit('WAXPUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const WRXUSDT = binanceWS.onKline('WRXUSDT', '1m', (data) => {
    io.sockets.emit('WRXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const WTCUSDT = binanceWS.onKline('WTCUSDT', '1m', (data) => {
    io.sockets.emit('WTCUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const WANUSDT = binanceWS.onKline('WANUSDT', '1m', (data) => {
    io.sockets.emit('WANUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const WINGUSDT = binanceWS.onKline('WINGUSDT', '1m', (data) => {
    io.sockets.emit('WINGUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const YFIUSDT = binanceWS.onKline('YFIUSDT', '1m', (data) => {
    io.sockets.emit('YFIUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const YGGUSDT = binanceWS.onKline('YGGUSDT', '1m', (data) => {
    io.sockets.emit('YGGUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const XRPUSDT = binanceWS.onKline('XRPUSDT', '1m', (data) => {
    io.sockets.emit('XRPUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const XRPDOWNUSDT = binanceWS.onKline('XRPDOWNUSDT', '1m', (data) => {
    io.sockets.emit('XRPDOWNUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const XRPUPUSDT = binanceWS.onKline('XRPUPUSDT', '1m', (data) => {
    io.sockets.emit('XRPUPUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ZILUSDT = binanceWS.onKline('ZILUSDT', '1m', (data) => {
    io.sockets.emit('ZILUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ZECUSDT = binanceWS.onKline('ZECUSDT', '1m', (data) => {
    io.sockets.emit('ZECUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const ZRXUSDT = binanceWS.onKline('ZRXUSDT', '1m', (data) => {
    io.sockets.emit('ZRXUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});
const iNCHUSDT = binanceWS.onKline('1INCHUSDT', '1m', (data) => {
    io.sockets.emit('1INCHUSDT', { time: Math.round(data.kline.startTime / 1000), open: parseFloat(data.kline.open), high: parseFloat(data.kline.high), low: parseFloat(data.kline.low), close: parseFloat(data.kline.close) });
});