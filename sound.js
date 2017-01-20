var ping = require('ping')
var exec = require('child_process').exec

var host = '192.168.1.1'

var cfg = {
  timeout: 100
}

function pingHost () {
  ping.promise.probe(host, cfg).then(function (res) {
    // console.log(res.host)
    console.log((new Date()).toString(), host, res.alive)
    // console.log(res)
    if (res.alive) {
      exec(`afplay "success.mp3"`)
    }
  }).catch(function(e) {
    console.log(e)
  })
}

var inter1 = setInterval(pingHost, 1000)

