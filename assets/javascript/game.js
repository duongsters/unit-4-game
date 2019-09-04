    //created my inital variables needed before game starts
var toons
var preGame

    //function runGame created so that the game starts and runs as expected
function runGame() {
    toons = startingToons()
    preGame = restartGame()
    userToons()
}


    // array index of toons provided to play game with its initial attributes
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
    //will clear out all the ID containers back to the initialized settings with the .empty method
function clearInfo(){
    $("#toon-choice").empty()
    $("#user-toon-area").empty()
    $("#toon-selection-area").empty()
    $("#enemy-opposition").empty()
    $("#ready-to-battle-area .opponent").empty()
}



// --------------------------Overall Game Optimization Functions------------------------------------------------------------------
    
    //toonAreaChoices was made to help make divs dynamically within the game.js file and index.html file
function toonAreaChoices (toon, selectionToon) {
    //For us to point back to the .on click events, 'toon-name' was created dynamically within the 'userToonArea' variable
    var userToonArea = $("<div class ='toon' toon-name='" + selectionToon + "'>")
    var toonName = $("<div class = 'toon-name'>").text(toon.fullName)
    var toonHP = $("<div class ='toon-health'>").text(toon.hP)
    var toonImg = $("<img alt='image' class='character-image'>").attr('src', toon.image)
    //this will be useful in appending the available toon's name, image and health status divs dynamically for the user/player to view
    userToonArea.append(toonName).append(toonImg).append(toonHP)
        return userToonArea
}

    //just distributes all the toons from the array index to the '#user-toon-area' ID container to be made available for the user/player to choose
function userToons() {
    //the 'selectionToon' variable will run through the 'toon' array index then distribute each toon to the toon-chosen-area for the user/player
    var selectionToon = Object.keys(toons)
        for (var j = 0; j < selectionToon.length; j++) {
    //the 'currentToon' variable will be the user's choice toon; which will then be pointed out through the object
                var currentToon = selectionToon[j]
                var toon = toons[currentToon]
                var userToonArea = toonAreaChoices(toon, currentToon)
    //appends the all toon's div elements to the '#user-toon-area' for the user/player to choose
            $('#user-toon-area').append(userToonArea)
        }

    //just distributes all the remaining available toons for the enemy/opponent to the "#ready-to-battle-area"
function computerChoice (computerToonChoice) {
    var computerSelectedToon = Object.currentToon(toons)
        for (var j = 0; j < computerSelectedToon.length; j++) {
            if (computerSelectedToon[j] !== computerToonChoice) {
    //grabs the specific chosen enemy/opposition toon out of the array index
                var opponentToon = computerSelectedToon[j]
                var opponent = toons[opponentToon]
                var opponentToonArea = toonAreaChoices(opponent, opponentToon)
                $(opponentToonArea).addClass("opponent")
    //within the paremeters of the remaining toons left after the user/player toon has chosen & the chosen enemy toon; those 2 elements will be appended the "#ready-to-battle-area"
                $("#ready-to-battle-area").append(opponentToonArea)
            }
        }
}
}





// -------------Attack & Defend Functions-----------------------------------------




// ------------------------updated Wins/Losses rendering-----------------------------------------------





// ------------------------InGame battle renderment---------------------------------------------------------------

    //renders the amount of health the enemy/opponent toon has throughout the match
function attacking (attackCount) {
    //by subtracting the inital amount of the health enemy/opponent has by the user toon's 'attack-count' along with the attack power to find the updated health value
    runGame.computerChoice.hP -= runGame.userToon.aP * attackCount
}
    //renders the value of the user/player toon's health after the enemy toon has counterattacked back
function defending() {
    //finds the updated health values of the user/player's toon by subtracting the inital health points of the user/player toon's to the enemy/opponent's toon 'enemyCounterPower'
    runGame.userToon.hP -= runGame.computerChoice.enemyCounterPower
}







// -----------------DOM(Click) rendering-----------------------------------------






   // -----Moving & Choosing enemy/opposing toon to different area------//



             //--------'Attack' button rendering----------//
$("#attack-key").on("click", function(){
    runGame.attackCount++
    attacking(runGame.attackCount)
    defending()


})





// -------------Restarting/Starting out the game----------------------------------

$("#restart-choice").on("click", function(){
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
