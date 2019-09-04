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
// ---------------------restart functions---------------------------------------
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
    $("#enemy-opposition").empty()
    $("#ready-to-battle-area .opponent").empty()
    $("#user-toon-area").empty()
    $("#toon-selection-area").empty()

}



// -------------Attack & Defend Functions-----------------------------------------




// ------------------------updated Wins/Losses rendering-----------------------------------------------





// ------------------------InGame battle renderment---------------------------------------------------------------









// -----------------DOM(Click) rendering-----------------------------------------






   // -----Moving & Choosing enemy/opposing toon to different area------//



             //--------'Attack' button rendering----------//






// -------------Restarting/Starting out the game----------------------------------


