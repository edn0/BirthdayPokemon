let data = [];

function submit_animation() {

    const sprite_container = document.getElementById("pkmn_sprite_container");
    sprite_container.setAttribute( "class", ".submit_animation");
    setTimeout( function() {
        sprite_container.setAttribute( "class", "")
    }, 3000)

}



let fetchedData = [];

function submit_pkmn() {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    if (day > 31) {
        submit_btn = document.getElementById("submit_btn");
        
        submit_btn.style.backgroundColor = "#FF0004";
        retun;
    } 

    if (month > 12) {
        submit_btn = document.getElementById("submit_btn");

        submit_btn.style.backgroundColor = "#FF0004";
    }

    if (year < 1850 && year > 2100 ) {
        submit_btn = document.getElementById("submit_btn");

        submit_btn.style.backgroundColor = "#FF0004";
    }


    // Date operation
    pkmn_ID = (day * month) % year;





    console.log(pkmn_ID);
    submit_animation();

    url = "https://pokeapi.co/api/v2/pokemon-form/" + pkmn_ID + "/";

    
    fetch(url).then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (data) {
        // This is the JSON from our response
        console.log(data);
        const sprite = data.sprites["front_default"];
        var img = document.createElement('img');
        img.src = sprite;
        img.id = "pkmn_sprite_img";
        document.getElementById("pkmn_sprite_img").remove();
        document.getElementById("pkmn_sprite_container").appendChild(img);

        const pkmn_name = data.pokemon["name"];
        pkmn_name_element = document.getElementById("pkmn_name");
        document.getElementById("pkmn_name").innerHTML = pkmn_name;
        pkmn_name_element.style.opacity = 0.9; // Reveal element after submit

    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });


}








// Supposed to allow for validating after pressing enter, need to figure how to implement it properly
function clickPress(event) {
    if (event.keyCode == 13) {
        submit_pkmn();
    }
}



