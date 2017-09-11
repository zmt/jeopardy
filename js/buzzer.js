// hackin' it together uglily but workingly
const socket = io('https://buzzer.zmt.org')

// buzzing in
socket.on('buzzes', function(data) {
    data.forEach(function(buzz, index) {
        team="p".concat(buzz.split("-")[1])
        buzzed = document.getElementById(team).getElementsByClassName("col-md-4")[0]
        if(!buzzed.classList.contains('buzzed')) {
            buzzed.classList.add('buzzed');
        }
        console.log(buzzed)
    });

    // emit clear on close for next question
    document.getElementById('answer-close-button').addEventListener('click', () => {
        socket.emit('clear')
    })
    // emit clear on right answer for next question
    var btns = document.querySelectorAll('.btn-success')
    Object.keys(btns).forEach(function(index) {
        btns[index].addEventListener('click', () => {
            socket.emit('clear')
        })
    });
});

// clearing the buzzed class for next question-modal display
$(document).ready(function(){
    $('#question-modal').on('show.bs.modal', function () {
        buzzed = document.getElementById('question-modal-content').getElementsByClassName('buzzed');
        Object.keys(buzzed).forEach(function(index) {
            clearbuzz = buzzed[index];
            clearbuzz.classList.remove('buzzed');
            console.log(clearbuzz);
        });
    });
});
