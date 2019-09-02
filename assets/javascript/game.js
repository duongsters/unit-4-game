// created my inital variables needed before game starts

var toons
var preGame



//----function runGame created so that the game starts and runs as expected

function runGame() {
    toons = startingToons()
    preGame = restartGame()

    runToons()

}


// array index of toons provided to play game
function startingToons() {
    return {
        "darthMaul": {
            fullName: "Darth Maul",
            hP: 100,
            aP: 10,
            image: ,
            enemyCounterPower: 5,
        }
        "lukeSkywalker": {
            fullName: "Luke Skywalker",
            hP: 120,
            aP: 12,
            image: ,
            enemyCounterPower: 15,
        }
        "darthVader": {
            fullName: "Darth Vader",
            hP: 150,
            aP: 15,
            image: ,
            enemyCounterPower: 20,
        }
        "oldBen": {
            fullName: "Obi Wan Kenobi",
            hP: 180,
            aP: 8,
            image: ,
            enemyCounterPower: 24,
        }
    }
}

//function 'restartGame' below is ran to reset the RPG game back to it's starting inital settings 
function restartGame() {
    return{
        attackCount: 0,
        remainEnemies: 0,
        computerToon: null,
        userToon: null,
        
    }
}

