    //created my inital variables needed before game starts
var toons;
var preGame;

    //function runGame created so that the game starts and runs as expected
function runGame() {
    toons = startingToons()
    preGame = restartGame()
    userToons()
}

//array index of toons provided to play with
function startingToons() {
    return {
        "darthMaul": {
            fullName: "Darth Maul",
            hP: 100,
            aP: 10,
            image: "assets/images/darthmaul.png",
            enemyCounterPower: 5,
        },
        "lukeSkywalker": {
            fullName: "Luke Skywalker",
            hP: 120,
            aP: 12,
            image: "assets/images/lukeskywalker.png",
            enemyCounterPower: 15,
        },
        "darthVader": {
            fullName: "Darth Vader",
            hP: 150,
            aP: 15,
            image: "assets/images/darthvader.jpg",
            enemyCounterPower: 20,
        },
        "oldBen": {
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
            $("#enemy-opposition").empty()
            $("#ready-to-battle-area .opponent").empty()
}           $("#toon-chosen-area").show()




// --------------------------Overall Game Optimization Functions------------------------------------------------------------------
    
    //toonAreaChoices was made to help make divs dynamically within the game.js file and index.html file
function toonAreaChoices (toon, key) {
    //For us to point back to the .on click events, 'toon-name' was created dynamically within the 'userToonArea' variable
        var userToonArea = $("<div class ='toon' toon-name='" + key + "'>")
        var toonName = $("<div class = 'toon-name'>").text(toon.fullName)
        var toonHP = $("<div class ='toon-health'>").text(toon.hP)
        var toonImg = $("<img alt='image' class='toon-image'>").attr('src', toon.image)
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
    }

    //just distributes all the remaining available toons for the enemy/opponent to the "#ready-to-battle-area"
function computerChoice (computerToonChoice) {
        var computerSelectedToon = Object.keys(toons)
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

    //function runOpponentChoice runs by the player/user in picking their enemy/opponent they want to fight against by click of the enemy images available
function runOpponentChoice() {

    //identify the class opponent on the page and change some content
            $(".opponent").on("click.oppSelect", function(){
    //variable enemyChoice will find and return the toon-name value within that specific class ID container
                var enemyChoice = $(this).attr("toon-name")
    //by resetting the toons remaining left to choose by preGame.computerToon, this willgive the user an update dlist of arrays of toons left to be the enemy/opponent for them
                preGame.computerToon = toons[enemyChoice]
    //the chosen enemy/opponent toon is then directed back to the "enemy-opposition" ID container
            $("#enemy-opposition").append(this)

    //once the enemy/opponent toon is chosen and moved to the next area, the attack buttons should pop up
            $("#attack-key").show()
            $(".opponent").off("click.oppSelect")

    })
}





// -------------.toons Attack & Defend Functions-----------------------------------------
    //renders the amount of health the enemy/opponent toon has throughout the match
function attacking (attackCount) {
    //by subtracting the inital amount of the health enemy/opponent has by the user toon's 'attack-count' along with the attack power to find the updated health value
    preGame.computerToon.hP -= preGame.userToon.aP * attackCount
}
    //renders the value of the user/player toon's health after the enemy toon has counterattacked back
function defending() {
    //finds the updated health values of the user/player's toon by subtracting the inital health points of the user/player toon's to the enemy/opponent's toon 'enemyCounterPower'
    preGame.userToon.hP -= preGame.computerToon.enemyCounterPower
}



// ------------------------updated Wins/Losses rendering-----------------------------------------------
    //finds whether the opponent or user toons have no more health remaining
function toonLost(toon) {
    //by checking the toon's health points are less than or equal to 0 to have a True return value
    return toon.hP <=0
}
    //returns whether the player/user has won the specfic match against the the enemy/opposition toon
function winning() {
    //in order to check if the player/user has won the game, it will check if the 'remainingEnemies' variable is equal to 0 to have a True return value
    return preGame.remainEnemies === 0
}


// ------------------------InGame battle rendering---------------------------------------------------------------
    
    // function closeAttacking renders whether or not the attacking period for each toon has been made or not if the return value is True
function closeAttacking() {
    // by use of the If and Else if method, you can check whether you lost your toon or if enemy/opponent toon is dead
    if(toonLost(preGame.userToon)) {
    //once the user/player loses the game, an alert message notifies the user/player and the restart game button is shown
        alert("You lost to " + preGame.computerToon.fullName + " ! Press Restart to play again.")
            $("#toon-choice").empty()
            $("#restart-choice").show()
    return true
    }
    //if the return value is False, then the user/player
        else if (toonLost(preGame.computerToon)) {
    //if the 'computerChoice' toon is dead, decrement the remaining toons left for the user/player
            preGame.remainEnemies--
    //the '#enemy-opposition' ID is then emptied back to it's initial settings        
            $("#enemy-opposition").empty()

    //once there are no more toons left for the user/player to fight , then the alert message will tell the user/player that the game has concluded and they've won
            if(winning()) {
                alert("Congrats! You breat every toon! Restart to play again.")
    //the restart button will be shown for the user if they want to play again
            $("#restart-choice").show()
            }
    //the last part of the this conditional statement runs in telling the user that they won the current
                else {
                alert("Won! Defeated " + preGame.computerToon.fullName + "! Choose your next opponent to battle next.")
    //this shall lead the code back to the function of helping the user/player to select another toon
            runOpponentChoice()
            }
    //once the match is done, then the returns True to close out the conditional statement        
    return true
        }
    //return a false value if the game is not over and run this entire function 'closeAttacking' conditionl statement
    return false
}

// -----------------DOM(Click) rendering-----------------------------------------
    
    //once the game is fully loaded on the browser, $document.ready then runs attaches the DOM elements from game.js to the index.html
$(document).ready(function() {
    //points the user click of the variable 'toons' towards the div ID '#user-toon-area'
    $("#user-toon-area").on("click", ".toon", function() {
    //variable 'keyChoice' is created to point the user's toon selection to the javascript handler variable "toon-name"      
            var keyChoice = $(this).attr("toon-name")
            preGame.userToon = toons[keyChoice]
    //points the selected 'toon' into the html ID '#toon-choice'
    $("#toon-choice").append(this)


        computerChoice(keyChoice)
    //using .hide method, the html ID '#toon-selection-area' will be hidden from the browser
    $("#toon-selection-area").hide()
    //shows the amount of remaining enemy toons there are left for the user to battle
            preGame.remainEnemies = Object.keys(toons).length -1
    //by running the 'runOpponentChoice' funcation at the end, it allows the user to select the enemy/opponent toon
        runOpponentChoice()

    })






             //--------'Attack' button rendering----------//
    $("#attack-key").on("click.offense", function() {
        //counter increment of attackCount when user attacks
        preGame.attackCount++
        //runs the 'attacking' then 'defending' functions events
        attacking(preGame.attackCount)
        defending()

        //shows the user the refreshed health values of the user/player toon on display
            $("#toon-choice .toon-health").text(preGame.userToon.hP)
        //shows the user the refreshed health values of the enemy/opponent toon on display
            $("#enemy-opposition .toon-health").text(preGame.computerToon.hp)

        //created an if condition where when the 'closeAttacking' function has ended, it will hide the attack button for any further battles
        if(closeAttacking()) {
            $(this).hide()
        }   

})





// -------------Restarting/Starting out the game----------------------------------

$("#restart-choice").on("click.restart", function(){
    //runs the 'clearInfo' function to reset all html values before the game is restarted
        clearInfo()
    //hides the restart/reset button from the browser
        $(this).hide()
    //restarts the game
        runGame()
})

//starts RPG game
runGame()

})