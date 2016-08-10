var ping = require('ping')
var exec = require('child_process').exec

var host = '192.168.1.2'

var cfg = {
  timeout: 100
}

function pingHost () {
  ping.promise.probe(host, cfg).then(function (res) {
    // console.log(res.host)
    console.log((new Date()).toString(), host, res.alive)
    // console.log(res)
    if (!res.alive) {
      clearInterval(inter1)
      exec(`nircmd infobox "cannot ping ${host}"`)
    }
  })
}

var inter1 = setInterval(pingHost, 3000)

