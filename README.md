# 

# Title: Star Wars RPG Game

## Site Picture:
![My Site](assets/images/Screenshot.png)

## Technologies Used:
- HTML: Used to create elements 
- CSS: Used to decorate the letters and background withing the style.css file as well as script tags within index.html
- Bootstrap: Used in the HTLM files
- Git: Used to document the changes of the source code
- GitHub: Used to create the repository for the html and css in which that can be pushed to GitHub domain

## Summary:
This assignment really required the use of jQuery. Using .on click DOM methods and "$()" commands were used plenty throughout this assignment. 

## Code Snippet:
```html
  <body>

<!-- Created a main container here to contain all Div Class IDs and whatnot -->

<div id="mainContainer" style="background-image: url(https://vignette.wikia.nocookie.net/starwars/images/a/af/Battle_of_Jakku.jpg/revision/latest?cb=20151107221337); position: relative;">
<div class="game-title">Star Wars</div>

<br>

<!-- portion where the character templates for the user to select the game characters to play on here -->
        <div id="toon-area">
            <div class="selectionSection" style="color: red">Choose a Toon!</div>
            <div id="user-toon-area"></div>
        </div>

        <div id="toon-chosen-area">
            <div class="selectionSection">Chosen Toon</div>
            <!-- User's selected toon appended below -->
            <div id="toon-choice"></div>
        </div>

<!-- portion where the enemy game characters template cards are placed chosen once user picks a game characters are chosen here after -->
        <div id="ready-to-battle-area">
            <div class="selectionSection">Choose an Enemy Toon!</div>
        </div>

<!-- portion where the Attack button will appear -->
        <div class="selectionSection">Arena Area</div>
        <div id="arena-area">
            <button id="attack-key">Press now ATTACK!</button>
        </div>
<!-- DEFENDER AREA: Where the selected enemy game character card template will be placed before starting the game -->
        <div id="defense">
            <div class="toon-selection-area">
                <div class="selectionSection">Defender</div>
<!-- Chosen enemy toon appended below here -->
                <div id="enemy-opposition"></div>
            </div>
        </div>

</div>
<!-- where the restart game button is located -->
        <button id="restart-choice">Restart!</button>


</body>
  
```


## Author Links:
[GitHub](https://github.com/duongsters)