const socket = io('https://buzzer.zmt.org')
socket.on('buzzes', function(data) {
    data.forEach(function(buzz, index) {
        team="p".concat(buzz.split("-")[1])
        buzzed = document.getElementById(team)
        subdiv = buzzed.getElementsByClassName("col-md-4")
        subdiv[0].classList += " buzzed"
        console.log(buzzed)
        console.log(subdiv[0])
    });
});

