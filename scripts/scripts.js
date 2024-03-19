// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    // Simulated data for games
    const games = [
        { 
            title: "Adventure Quest", 
            description: "Embark on an epic journey through mysterious lands.",
            image: "adventure_quest.jpg"
        },
        { 
            title: "Galactic Wars", 
            description: "Conquer the galaxy and establish your empire.",
            image: "galactic_wars.jpg"
        },
        { 
            title: "Mystic Realms", 
            description: "Uncover the secrets of a magical world filled with wonders.",
            image: "mystic_realms.jpg"
        }
    ];

    const gameList = document.getElementById("gameList");

    // Populate games
    games.forEach(game => {
        const gameItem = document.createElement("div");
        gameItem.classList.add("game");

        const img = document.createElement("img");
        img.src = "images/" + game.image;
        img.alt = game.title;
        gameItem.appendChild(img);

        const title = document.createElement("h3");
        title.textContent = game.title;
        gameItem.appendChild(title);

        const description = document.createElement("p");
        description.textContent = game.description;
        gameItem.appendChild(description);

        gameList.appendChild(gameItem);
    });
});
