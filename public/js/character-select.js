//for loop function set up for get request
//var characters = [];
// for (var i = 0; i < data.length; i++) {
//     var characterObj = {};
//     characterObj.name = data[i].Main.mainName;
//     characterObj.class = data[i].Main.mainClass;
//     characterObj.portrait = data[i].Main.mainPortrait;
//     characterObj.stats = [{
//         statName: "hp",
//         value: data[i].Main.mainHp
//     }, {
//         statName: "strength",
//         value: data[i].Main.mainStr
//     }, {
//         statName: "defense",
//         value: data[i].Main.mainDef
//     }, {
//         statName: "speed",
//         value: data[i].Main.mainSpd
//     }];
//     characterObj.colors = {};
//     characterObj.colors.dark = data[i].Main.colorDark;
//     characterObj.colors.light = data[i].Main.colorLight;
//     characters.push(characterObj); 
// }

$(document).ready(function () {
    var characters = [
        {
            name: "Character 1",
            class: "Swordmaster",
            portrait: "images/resource-images/portrait/fighter-sword-red.png",
            chibi: "images/resource-images/chibi/fighter-sword-red.png",
            stats: [{
                statName: "hp",
                value: 25
            }, {
                statName: "strength",
                value: 38
            }, {
                statName: "defense",
                value: 25
            }, {
                statName: "speed",
                value: 38
            }],
            colors: {
                dark: "#94263a",
                light: "#d24d5f"
            }
        }, {
            name: "Character 2",
            class: "Lance Fighter",
            portrait: "images/resource-images/portrait/fighter-lance-blue.png",
            chibi: "images/resource-images/chibi/fighter-lance-blue.png",
            stats: [{
                statName: "hp",
                value: 38
            }, {
                statName: "strength",
                value: 25
            }, {
                statName: "defense",
                value: 38
            }, {
                statName: "speed",
                value: 25
            }],
            colors: {
                dark: "#29396f",
                light: "#4c7fc4"
            }
        }, {
            name: "Character 3",
            class: "Axe Fighter",
            portrait: "images/resource-images/portrait/fighter-axe-green.png",
            chibi: "images/resource-images/chibi/fighter-axe-green.png",
            stats: [{
                statName: "hp",
                value: 38
            }, {
                statName: "strength",
                value: 50
            }, {
                statName: "defense",
                value: 12
            }, {
                statName: "speed",
                value: 25
            }],
            colors: {
                dark: "rgb(33, 74, 85)",
                light: "rgb(73, 136, 140)"
            }
        }, {
            name: "Character 4",
            class: "Bow Fighter",
            portrait: "images/resource-images/portrait/fighter-bow-purple.png",
            chibi: "images/resource-images/chibi/fighter-bow-purple.png",
            stats: [{
                statName: "hp",
                value: 25
            }, {
                statName: "strength",
                value: 25
            }, {
                statName: "defense",
                value: 38
            }, {
                statName: "speed",
                value: 38
            }],
            colors: {
                dark: "#42224e",
                light: "#805694"
            }
        }, {
            name: "Character 5",
            class: "Red Mage",
            portrait: "images/resource-images/portrait/mage-red.png",
            chibi: "images/resource-images/chibi/mage-red.png",
            stats: [{
                statName: "hp",
                value: 12
            }, {
                statName: "strength",
                value: 50
            }, {
                statName: "defense",
                value: 25
            }, {
                statName: "speed",
                value: 38
            }],
            colors: {
                dark: "#94263a",
                light: "#d24d5f"
            }
        }, {
            name: "Character 6",
            class: "Manakete",
            portrait: "images/resource-images/portrait/manakete-blue.png",
            chibi: "images/resource-images/chibi/manakete-blue.png",
            stats: [{
                statName: "hp",
                value: 12
            }, {
                statName: "strength",
                value: 50
            }, {
                statName: "defense",
                value: 38
            }, {
                statName: "speed",
                value: 25
            }],
            colors: {
                dark: "#29396f",
                light: "#4c7fc4"
            }
        }, {
            name: "Character 7",
            class: "Knight",
            portrait: "images/resource-images/portrait/knight-axe-green.png",
            chibi: "images/resource-images/chibi/knight-axe-green.png",
            stats: [{
                statName: "hp",
                value: 50
            }, {
                statName: "strength",
                value: 12
            }, {
                statName: "defense",
                value: 50
            }, {
                statName: "speed",
                value: 12
            }],
            colors: {
                dark: "rgb(33, 74, 85)",
                light: "rgb(73, 136, 140)"
            }
        }, {
            name: "Character 8",
            class: "Thief",
            portrait: "images/resource-images/portrait/thief-purple.png",
            chibi: "images/resource-images/chibi/thief-purple.png",
            stats: [{
                statName: "hp",
                value: 25
            }, {
                statName: "strength",
                value: 25
            }, {
                statName: "defense",
                value: 25
            }, {
                statName: "speed",
                value: 50
            }],
            colors: {
                dark: "#42224e",
                light: "#805694"
            }
        }
    ];

    // var w = "100%";
    var h = 180;
    var statPoints = 10;
    // var newCharacter = [];
    var newStats = [];

    //need to write a constructor to reduce redundant code
    //display the first character and loop through and append all of the chibi ver.
    function characterDisplay() {
        characterSelect(characters[0].name, 1, characters[0].class, characters[0].portrait, characters[0].colors.dark, characters[0].colors.light, characters[0].stats);
        for (var i = 0; i < characters.length; i++) {
            var chibiContainer = $("<div>").addClass("character-container").attr({
                "data-class": characters[i].class,
                "data-key": i + 1
            });
            var characterImage = $("<img>").attr("src", characters[i].chibi);
            chibiContainer.append(characterImage);
            $(".character-list").append(chibiContainer);
        }
    }
    characterDisplay();

    // change modal text on character select page based on stats
    $(".select-character").on("click", function(){
        if(statPoints > 0 && statPoints <= 10){
            $("#modaltext").text("Please distribute all 10 stat points!");
            $(".confirm").hide();
            $(".cancel").text("CONTINUE");
            $(".cancel").css({
                border: "0",
                width: "30%",
                "text-align": "center",
                color: "white",
                "border-radius": "20px",
                "font-weight": "500",
                padding: "10px 0",
                background: "linear-gradient(#94263a, #d24d5f)"});
        } else {
            $("#modaltext").text("Are you sure you wish to continue with this class?");
            $(".confirm").show();
            $(".cancel").text("Cancel");   
        }
    });
    // checkStats();

    //toggle between characters
    $(".character-container").on("click", function () {
        for (var i = 0; i < characters.length; i++) {
            if ($(this).attr("data-class") === characters[i].class) {
                characterSelect(characters[i].name, (i + 1), characters[i].class, characters[i].portrait, characters[i].colors.dark, characters[i].colors.light, characters[i].stats);
            }
        }
    });

    function characterSelect(name, id, characterClass, portrait, firstStop, secondStop, stats) {
        newStats = [];
        statPoints = 10;
        $("#confirmCharacter").attr("data-class", characterClass);
        $("#confirmCharacter").attr("data-name", name);
        $("#confirmCharacter").attr("data-id", id);
        $(".stat-points").text("10");
        $(".character-name").text(name);
        $(".character-class").text(characterClass);
        $(".character-image").attr("src", portrait);
        $(".select-character").attr("data-class", characterClass).css("background-image", "linear-gradient(to right, " + firstStop + ", " + secondStop);
        $(".character-stats").empty();
        statsDisplay(stats, characterClass, firstStop, secondStop, false, []);
    }

    $("#selectCharacter").on("click", function () {
        console.log("this button has been clicked");
        console.log($(this).attr("data-class"));

        var newUser = {
            mainClass: $(this).attr("data-class")
        };

        $.post("/api/users", newUser, function () {
            window.location.href = "/world";
        });
    });


    function statsDisplay(characterStats, characterClass, firstStop, secondStop, statsDis, addStats) {
        //creates a svg and appends to character stats
        var svg = d3.select(".character-stats").append("svg").attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", "0 0 " + 350 + " " + h);
        //defs store graphical objects at a later time and are not rendered
        var svgDefs = svg.append("defs");
        //creates a linear gradient container
        var mainGradient = svgDefs.append("linearGradient")
            .attr("id", "mainGradient");
        //stops for gradient
        mainGradient.append("stop")
            .style("stop-color", firstStop)
            .attr("offset", "0");
        mainGradient.append("stop")
            .style("stop-color", secondStop)
            .attr("offset", "1");

        var nodes = svg.selectAll(".rect")
            .data(characterStats)
            .enter()
            .append("g")
            .classed("rect", true);

        // var newNodes = svg.selectAll(".rect")
        //     .data(addStats)
        //     .enter()
        //     .append("g")
        //     .classed("rect", true);

        nodes.append("rect")
            //apply gradient
            .attr("fill", "#363636")
            //each rectangle starts at the 0 position
            .attr("x", function (d) {
                return (d.value / 60 * 100 - 10) + "%";
            })
            //moves each rectangle down
            //i is the data point index
            .attr("y", function (d, i) {
                return i * 47 + 20;
            })
            //width of the rectangle
            //multiplied the data point to make it wider
            .attr("width", function (d) {
                return 100 - (d.value / 60 * 100) + 10 + "%";
            })
            //defines the height of the rectangle
            .attr("height", 10)
            .attr("rx", 5);

        if (statsDis) {
            nodes.append("rect")
                .data(addStats)
                //apply gradient
                .attr("fill", firstStop)
                //each rectangle starts at the 0 position
                .attr("x", 0)
                //moves each rectangle down
                //i is the data point index
                .attr("y", function (d, i) {
                    return i * 47 + 20;
                })
                //width of the rectangle
                //multiplied the data point to make it wider
                .attr("width", function (d) {
                    return (d.value / 60 * 100) + "%";
                })
                //defines the height of the rectangle
                .attr("height", 10)
                .attr("rx", 5);
        }

        //creates rectangles for every index in the dataset
        nodes.append("rect")
            // .data(characterStats)
            //apply gradient
            .classed("filled", true)
            //each rectangle starts at the 0 position
            .attr("x", 0)
            //moves each rectangle down
            //i is the data point index
            .attr("y", function (d, i) {
                return i * 47 + 20;
            })
            //width of the rectangle
            //multiplied the data point to make it wider
            .attr("width", function (d) {
                return (d.value / 60 * 100) + "%";
            })
            //defines the height of the rectangle
            .attr("height", 10)
            .attr("rx", 5);

        nodes.append("text")
            .attr("class", "stat-name")
            .style("fill", "white")
            .style("font-size", "12px")
            .append("tspan")
            .attr("class", "fas stat-dist minus")
            .attr("data-class", characterClass)
            .text("\uf0d9")
            .attr("y", function (d, i) {
                return i * 47 + 10;
            });

        nodes.select(".stat-name")
            .append("tspan")
            .attr("class", "stat-type")
            .text(function (d) {
                return d.statName;
            })
            .attr("dx", 10)
            .style("font-weight", 500)
            .style("letter-spacing", "0.5px");

        nodes.select(".stat-name")
            .append("tspan")
            .attr("class", "fas stat-dist plus")
            .attr("data-class", characterClass)
            .attr("dx", 10)
            .text("\uf0da");
    }

    $(".character-stats").on("click", ".stat-dist", function () {
        for (var i = 0; i < characters.length; i++) {
            //check for character class from data attribute on button
            if ($(this).attr("data-class") === characters[i].class) {
                //double loop to through the stats array inside the character object
                for (var j = 0; j < characters[i].stats.length; j++) {
                    //prevents from appending more stats onto the array
                    if (newStats.length < characters[i].stats.length) {
                        //set an empty obj
                        //if push data directly into array, new array will reference the previous array and override the data 
                        var characterStats = {};
                        characterStats.statName = characters[i].stats[j].statName;
                        characterStats.value = characters[i].stats[j].value;
                        newStats.push(characterStats);
                    }
                    //check if the plus button is clicked
                    if ($(this).attr("class").split(" ")[2] === "plus") {
                        //checks the stat name
                        if ($(this).prev().text() === characters[i].stats[j].statName) {
                            //if user still has remaining stat points
                            if (statPoints !== 0 && newStats[j].value !== 60) {
                                //add point to stats
                                newStats[j].value += 2;
                                //remove from statPoints
                                statPoints--;
                            }
                        }
                        //check if the minus button is clicked
                    } else if ($(this).attr("class").split(" ")[2] === "minus") {
                        //checks the stat name
                        if ($(this).next().text() === characters[i].stats[j].statName) {
                            //if user has the original amount of points and new stat value is not equal to old stat value
                            //prevents user from subtracting from base stats
                            if (statPoints !== 10 && newStats[j].value !== characters[i].stats[j].value) {
                                newStats[j].value -= 2;
                                statPoints++;
                            }
                        }
                    }
                }
                $(".stat-points").text(statPoints);
                $(".character-stats").empty();
                console.log(newStats);
                statsDisplay(characters[i].stats, characters[i].class, characters[i].colors.dark, characters[i].colors.light, true, newStats);
            }
        }
    });
    //newCharacter array will be sent as a post request once confirmed
    //display an error message if user tries to submit when there are still remaining stat points
    //need to display remaining stat points
    
});