const guitar = {
    brand: "Fender",
    strings: 6,
    color: "Brown",
    acoustic: true,
    sound: false,
    tuning: ["E (low)", "A", "D", "G", "B", "E (high)"],
    play: function(){
        guitar.sound = !guitar.sound;
        if(guitar.sound){
            console.log("You are now playing the guitar!");
        }else{
            console.log("You just stopped playing the guitar!");
        }
        displayGuitarDetails();
    }    
}

function displayGuitarDetails() {
    const brand = document.querySelector("#brand");
    brand.innerText = guitar.brand;

    const strings = document.querySelector("#strings");
    strings.innerText = `Amount of strings: ${guitar.strings} strings`;

    const color = document.querySelector("#color");
    color.innerText = `Guitar color: ${guitar.color}`;

    const acoustic = document.querySelector("#acoustic");
    acoustic.innerText = `Is acoustic: ${guitar.acoustic}`;

    const tuning = document.querySelector("#tuning");
    tuning.innerText = `Standard tuning: ${guitar.tuning}`;

    const sound = document.querySelector("#sound");
    sound.innerText = `Is currently making sound: ${guitar.sound}`;

    const toggleSoundBtn = document.querySelector("#toggle-sound-btn");
    toggleSoundBtn.addEventListener("click",guitar.play);
    if(guitar.sound){
        toggleSoundBtn.innerText = "Stop playing!";
    }else{
        toggleSoundBtn.innerText = "Start playing!";
    }
}

displayGuitarDetails();