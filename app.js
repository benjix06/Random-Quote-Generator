let btn = document.getElementById("btn");
let quotes = document.querySelector(".quotes");
let author = document.querySelector(".author-quotes");

// function generateQuote() {
//     let quotes = [
//         "Stupidity, outrage, vanity, cruelty, iniquity, bad faith, falsehood - we fail to see the whole array when it is facing in the same direction as we. - Jean Rostand",

//         "As we work to secure our data and communications from hackers, we must recognize that our citizens face a far broader array of threats - William Barr",

//         "To array a man's will against his sickness is the supreme art of medicine - Henry Ward Beecher",

//         "In the future, I expect to see bitcoin mining in places where electricity is free or cheap. You could put solar array in the Arizona desert attached to bitcoin miners, and instead of trying to ship that electricity all over world, you could ship Bitcoin all over the world - Gavin Andresen",

//         "Doing linear scans over an associative array is like trying to club someone to death with a loaded Uzi - Larry Wall",

//         "I'm interested in how people all over the world array themselves and go forth in the morning to do whatever they have to do to make a living - William Gibson",

//         "Prog didn't really go away. Just took a catnap in the late Seventies. A new generation of fans discovered it, and a whole new array of bands and solo artists took it on into the new millennium - Ian Anderson"];
//     let result = "";
//     for (let i of quotes) {
//         result = quotes[Math.floor(Math.random() * quotes.length)];
//     }
//     return result;
// }

function colorGenerator() {
    let colorMaker = "123456789ABCDEF";
    let result = "#";

    for (let i = 0; i < 6; i++) {
        result += colorMaker[Math.floor(Math.random() * colorMaker.length)];
    }
    return result;
}

function generateQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quotes.textContent = data.content;
            author.textContent = ` - ${data.author}`;
        });
}

btn.addEventListener("click", () => {
    generateQuote()
    // let quote = generateQuote();
    // quotes.textContent = quote;
    document.querySelector(".quotes").style.color = colorGenerator();
    document.querySelector(".author-quotes").style.color = colorGenerator();
});