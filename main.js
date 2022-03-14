let data = [];




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

    if (year < 0 && year > 10000 ) {
        submit_btn = document.getElementById("submit_btn");

        submit_btn.style.backgroundColor = "#FF0004";
    }


    // Date operation
    pkmn_ID = (day * month) % year;
    console.log(pkmn_ID);

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
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });

    submit_btn = document.getElementById("submit_btn");
        
    submit_btn.style.backgroundColor = "#fff";
    
}


function clickPress(event) {
    if (event.keyCode == 13) {
        submit_pkmn();
    }
}