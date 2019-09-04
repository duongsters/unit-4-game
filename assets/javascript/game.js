//created my inital variables needed before game starts
var toons
var preGame

//function runGame created so that the game starts and runs as expected
function runGame() {
    toons = startingToons()
    preGame = restartGame()
    userToons()
}


// array index of toons provided to play game with its given stats
function startingToons() {
    return {
        darthMaul: {
            fullName: "Darth Maul",
            hP: 100,
            aP: 10,
            image: "assets/images/dartmaul.png",
            enemyCounterPower: 5,
        },
        lukeSkywalker: {
            fullName: "Luke Skywalker",
            hP: 120,
            aP: 12,
            image: "assets/images/lukeskywalker.png",
            enemyCounterPower: 15,
        },
        darthVader: {
            fullName: "Darth Vader",
            hP: 150,
            aP: 15,
            image: "assets/images/darthvader.jpg.jpeg",
            enemyCounterPower: 20,
        },
        oldBen: {
            fullName: "Obi Wan Kenobi",
            hP: 180,
            aP: 8,
            image: "assets/images/oldben.jpeg",
            enemyCounterPower: 24,
        }
    }
}
// ---------------------restart/reset functions---------------------------------------
//function 'restartGame' below is ran to reset the RPG game back to it's starting inital settings 
function restartGame() {
    return{
        attackCount: 0,
        remainEnemies: 0,
        computerToon: null,
        userToon: null,
   }
}
//created clearInfo fuction to run when the user presses the restart button and this function 
//will clear out all the ID's attributes back to the initialized settingswith the .empty method
function clearInfo(){
    $("#toon-choice").empty()
    $("#user-toon-area").empty()
    $("#toon-selection-area").empty()
    $("#enemy-opposition").empty()
    $("#ready-to-battle-area .opponent").empty()
}
// --------------------------Overall Game Optimization Functions------------------------------------------------------------------

function toonAreaChoices (toon, selectionToon) {
    var userToonArea = $("<div class ='toon' toon-name='" + selectionToon + "'>")
    var toonName = $("<div class = 'toon-name'>").text(toon.fullName)
    var toonHP = $("<div class ='toon-health'>").text(toon.hP)
    var toonImg = $ ("<img alt='image' class='character-image'>").attr('src', toon.image)
    userToonArea.append(toonName).append(toonImg).append(toonHP)
        return userToonArea
}

function userToons() {
    var selectionToon = Object.keys(toons)
        for (var j = 0; j < selectionToon.length; j++) {
                var currentToon = selectionToon[j]
                var toon = toons[currentToon]
                var userToonArea = toonAreaChoices(toon, currentToon)
            $('#user-toon-area').append(userToonArea)
        }

function computerChoice (computerToonChoice) {
    var computerSelectedToon = Object.currentToon(toons)
        for (var j = 0; j < computerSelectedToon.length; j++) {
            if (computerSelectedToon[j] !== computerToonChoice) {
                var opponentToon = computerSelectedToon[j]
                var opponent = toons[opponentToon]
                var opponentToonArea = toonAreaChoices(opponent, opponentToon)
                $(opponentToonArea).addClass("opponent")
                $("#ready-to-battle-area").append(opponentToonArea)
            }
        }
}
}





// -------------Attack & Defend Functions-----------------------------------------




// ------------------------updated Wins/Losses rendering-----------------------------------------------





// ------------------------InGame battle renderment---------------------------------------------------------------









// -----------------DOM(Click) rendering-----------------------------------------






   // -----Moving & Choosing enemy/opposing toon to different area------//



             //--------'Attack' button rendering----------//






// -------------Restarting/Starting out the game----------------------------------

$("#restart-choice").on("click.reset", function(){
    console.log("restart game")
//runs the 'clearInfo' function to reset all html values before the game is restarted
        clearInfo()
//hides the restart/reset button from the browser
        $(this).hide()
//restarts the game
        runGame()
})

//starts RPG game
runGame()
