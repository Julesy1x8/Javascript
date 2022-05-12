/*
TODO List

- fix the 1 player mode glitch

*/

function start() {
    setTimeout(function() {
        console.log("starting confetti");
        confetti.start();
    }, 1000);
};
function stop() {
    setTimeout(function() {
        console.log("stopping confetti");
        confetti.stop();
        location.reload();
    }, 5000);
    
};
let squares = [null,null,null,null,null,null,null,null];
let computerNum = 0;
let onePlayeMode = false;
let player = null;

function onePlayerMode(){
    let text = "Are you sure you want to play against a computer";
    if (confirm(text) == true) {
        // get this code to work 
        // document.getElementById("computerMode").style.display == "none"

        onePlayeMode = true;
        player = 1;
    }
}
function computer() {
    computerNum = Math.floor(Math.random() * 9);
    while (squares[computerNum] != null) {
        computerNum = Math.floor(Math.random() * 9);
    }

    if (computerNum == 0) {
        draw("a1");
    } else if (computerNum == 1) {
        draw("a2");
    } else if (computerNum == 2) {
        draw("a3");
    } else if (computerNum == 3) {
        draw("b1");
    } else if (computerNum == 4) {
        draw("b2");
    } else if (computerNum == 5) {
        draw("b3");
    } else if (computerNum == 6) { 
        draw("c1");
    } else if (computerNum == 7) {
        draw("c2");
    } else if (computerNum == 8) {
        draw("c3");
    }
    // onePlayeMode = false;
}
function determineIfClicked(SD, player) {
    if (SD == "a1") {
        if (squares[0] == null) {
            squares[0] = player;
            return true;
        } else {
            return false;
        }
    }
    if (SD == "a2") {
        if (squares[1] == null) {
            squares[1] = player;
            return true;
        } else {
            return false;
        }
    }
    if (SD == "a3") {
        if (squares[2] == null) {
            squares[2] = player;
            return true;
        } else {
            return false;
        }
    }
    if (SD == "b1") {
        if (squares[3] == null) {
            squares[3] = player;
            return true;
        } else {
            return false;
        }
    }
    if (SD == "b2") {
        if (squares[4] == null) {
            squares[4] = player;
            return true;
        } else {
            return false;
        }
    }
    if (SD == "b3") {
        if (squares[5] == null) {
            squares[5] = player;
            return true;
        } else {
            return false;
        }
    }
    if (SD == "c1") {
        if (squares[6] == null) {
            squares[6] = player;
            return true;
        } else {
            return false;
        }
    }
    if (SD == "c2") {
        if (squares[7] == null) {
            squares[7] = player;
            return true;
        } else {
            return false;
        }
    }
    if (SD == "c3") {
        if (squares[8] == null) {
            squares[8] = player;
            return true;
        } else {
            return false;
        }
    }
    console.log("determine if clicked has determined");
}
function determineIfWinner() {
    let winner = null;
    if (squares[0] == squares[1] && squares[1] == squares[2]) {
        if (squares[0] != null) {
            winner = squares[0]
        }
    } else if (squares[3] == squares[4] && squares[4] == squares[5]) {
        if (squares[3] != null) {
            winner = squares[3]
        }
    } else if (squares[6] == squares[7] && squares[7] == squares[8]) {
        if (squares[6] != null) {
            winner = squares[6]
        }
    } else if (squares[0] == squares[4] && squares[4] == squares[8]) {
        if (squares[0] != null) {
            winner = squares[0]
        }
    } else if (squares[2] == squares[4] && squares[4] == squares[6]) {
        if (squares[2] != null) {
            winner = squares[2]
        }
    } else if (squares[0] == squares[3] && squares[3] == squares[6]) {
        if (squares[0] != null) {
            winner = squares[0]
        }
    } else if (squares[1] == squares[4] && squares[4] == squares[7]) {
        if (squares[1] != null) {
            winner = squares[1]
        }
    } else if (squares[2] == squares[5] && squares[5] == squares[8]) {
        if (squares[2] != null) {
            winner = squares[2]
        }
    }
    if (winner != null) {
        if (winner == 1) {
            alert("You Won!!!");
            start();
            stop();
        } else {
            alert("The Computer Won :(");
            location.reload();
        }
    }
}

document.getElementById("a1").onmousedown = function () {
    draw("a1")
    return true; // Not needed, as long as you don't return false
    console.log("User moused down");
};
document.getElementById("a2").onmousedown = function () {
    draw("a2")
    return true; // Not needed, as long as you don't return false
    console.log("User moused down");
};
document.getElementById("a3").onmousedown = function () {
    draw("a3")
    return true; // Not needed, as long as you don't return false
    console.log("User moused down");
};
document.getElementById("b1").onmousedown = function () {
    draw("b1")
    return true; // Not needed, as long as you don't return false
    console.log("User moused down");
};
document.getElementById("b2").onmousedown = function () {
    draw("b2")
    return true; // Not needed, as long as you don't return false
    console.log("User moused down");
};
document.getElementById("b3").onmousedown = function () {
    draw("b3")
    return true; // Not needed, as long as you don't return false
    console.log("User moused down");
};
document.getElementById("c1").onmousedown = function () {
    draw("c1")
    return true; // Not needed, as long as you don't return false
    console.log("User moused down");
};
document.getElementById("c2").onmousedown = function () {
    draw("c2")
    return true; // Not needed, as long as you don't return false
    console.log("User moused down");
};
document.getElementById("c3").onmousedown = function () {
    draw("c3")
    return true; // Not needed, as long as you don't return false
    console.log("User moused down");
};

function drawX(SD) {
    document.getElementById(SD).innerHTML = '<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 100 100\" class=\"svg1\"><line x1=\"10\" y1=\"10\" x2=\"95\" y2=\"100\" stroke=\"red\" stroke-width=\"10\" /><line x1=\"95\" y1=\"10\" x2=\"10\" y2=\"100\" stroke=\"red\" stroke-width=\"10\" /></svg>'

}
function drawO(SD) {
     document.getElementById(SD).innerHTML = '<svg width=\"100%\" height=\"auto\" viewBox=\"0 0 100 100\" class=\"svg1\"><circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"black\" stroke-width=\"10\" fill=\"white\" /></svg>'

    if(onePlayeMode == true) {
        // player = 1;
        // player = 2;

        // onePlayeMode = false;
    }
}

function draw(SD) {
    let notClicked = determineIfClicked(SD, player)

    console.log(notClicked);
    if (notClicked) {
        if (player == 1) {
            drawX(SD);
            console.log("the human went");
            player = 2;
            computer();
        } else if (player == 2) {
            drawO(SD);
            console.log("the computer went");
            player = 1;
        }
        setTimeout(determineIfWinner, 1000);
    }
}
