// This file acts as your database. 
// On Oscar night, change 'winner: null' to the index of the winner (0-4) to update the site.

const categories = [
    {
        name: "Best Picture",
        group: "The Big Ones",
        nominees: ["Bugonia", "F1", "Frankenstein", "Hamnet", "Marty Supreme", "One Battle After Another", "The Secret Agent", "Sentimental Value", "Sinners", "Train Dreams"],
        winner: null
    },
    {
        name: "Best Director",
        group: "The Big Ones",
        nominees: ["Chloé Zhao (Hamnet)", "Josh Safdie (Marty Supreme)", "Paul Thomas Anderson (One Battle After Another)", "Joachim Trier (Sentimental Value)", "Ryan Coogler (Sinners)"],
        winner: null
    },
    {
        name: "Best Actor",
        group: "Acting",
        nominees: ["Timothée Chalamet (Marty Supreme)", "Leonardo DiCaprio (One Battle After Another)", "Ethan Hawke (Blue Moon)", "Michael B. Jordan (Sinners)", "Wagner Moura (The Secret Agent)"],
        winner: null
    },
    {
        name: "Best Actress",
        group: "Acting",
        nominees: ["Jessie Buckley (Hamnet)", "Rose Byrne (If I Had Legs I'd Kick You)", "Kate Hudson (Song Sung Blue)", "Renate Reinsve (Sentimental Value)", "Emma Stone (Bugonia)"],
        winner: null
    },
    {
        name: "Best Supporting Actor",
        group: "Acting",
        nominees: ["Benicio Del Toro (One Battle After Another)", "Jacob Elordi (Frankenstein)", "Delroy Lindo (Sinners)", "Sean Penn (One Battle After Another)", "Stellan Skarsgård (Sentimental Value)"],
        winner: null
    },
    {
        name: "Best Supporting Actress",
        group: "Acting",
        nominees: ["Elle Fanning (Sentimental Value)", "Inga Ibsdotter Lilleaas (Sentimental Value)", "Amy Madigan (Weapons)", "Wunmi Mosaku (Sinners)", "Teyana Taylor (One Battle After Another)"],
        winner: null
    },
    {
        name: "Best Original Screenplay",
        group: "Writing",
        nominees: ["Blue Moon", "It Was Just an Accident", "Marty Supreme", "Sentimental Value", "Sinners"],
        winner: null
    },
    {
        name: "Best Adapted Screenplay",
        group: "Writing",
        nominees: ["Bugonia", "Frankenstein", "Hamnet", "One Battle After Another", "Train Dreams"],
        winner: null
    },
    {
        name: "Best International Feature",
        group: "Features",
        nominees: ["The Secret Agent", "It Was Just an Accident", "Sentimental Value", "Sirât", "The Voice of Hind Rajab"],
        winner: null
    },
    {
        name: "Best Animated Feature",
        group: "Features",
        nominees: ["Arco", "Elio", "KPop Demon Hunters", "Little Amélie or the Character of Rain", "Zootopia 2"],
        winner: null
    },
    {
        name: "Best Documentary Feature",
        group: "Features",
        nominees: ["The Alabama Solution", "Come See Me in the Good Light", "Cutting Through Rocks", "Mr Nobody Against Putin", "The Perfect Neighbor"],
        winner: null
    },
    {
        name: "Best Casting",
        group: "Technical",
        nominees: ["Hamnet", "Marty Supreme", "One Battle After Another", "The Secret Agent", "Sinners"],
        winner: null
    },
    {
        name: "Best Film Editing",
        group: "Technical",
        nominees: ["F1", "Marty Supreme", "One Battle After Another", "Sentimental Value", "Sinners"],
        winner: null
    },
    {
        name: "Best Cinematography",
        group: "Technical",
        nominees: ["Frankenstein", "Marty Supreme", "One Battle After Another", "Sinners", "Train Dreams"],
        winner: null
    },
    {
        name: "Best Production Design",
        group: "Technical",
        nominees: ["Frankenstein", "Hamnet", "Marty Supreme", "One Battle After Another", "Sinners"],
        winner: null
    },
    {
        name: "Best Costume Design",
        group: "Technical",
        nominees: ["Avatar: Fire and Ash", "Frankenstein", "Hamnet", "Marty Supreme", "Sinners"],
        winner: null
    },
    {
        name: "Best Makeup and Hairstyling",
        group: "Technical",
        nominees: ["Frankenstein", "Kokuho", "Sinners", "The Smashing Machine", "The Ugly Stepsister"],
        winner: null
    },
    {
        name: "Best Original Song",
        group: "Music & Sound",
        nominees: ["Dear Me (Diane Warren: Relentless)", "Golden (KPop Demon Hunters)", "I Lied to You (Sinners)", "Sweet Dreams of Joy (Viva Verdi!)", "Train Dreams (Train Dreams)"],
        winner: null
    },
    {
        name: "Best Original Score",
        group: "Music & Sound",
        nominees: ["Bugonia", "Frankenstein", "Hamnet", "One Battle After Another", "Sinners"],
        winner: null
    },
    {
        name: "Best Sound",
        group: "Music & Sound",
        nominees: ["F1", "Frankenstein", "One Battle After Another", "Sinners", "Sirât"],
        winner: null
    },
    {
        name: "Best Visual Effects",
        group: "Music & Sound",
        nominees: ["Avatar: Fire and Ash", "F1", "Jurassic World: Rebirth", "The Lost Bus", "Sinners"],
        winner: null
    },
    {
        name: "Best Live-Action Short",
        group: "Shorts",
        nominees: ["Butcher's Stain", "A Friend of Dorothy", "Jane Austen's Period Drama", "The Singers", "Two People Exchanging Saliva"],
        winner: null
    },
    {
        name: "Best Animated Short",
        group: "Shorts",
        nominees: ["Butterfly", "Forevergreen", "The Girl Who Cried Pearls", "Retirement Plan", "The Three Sisters"],
        winner: null
    },
    {
        name: "Best Documentary Short",
        group: "Shorts",
        nominees: ["All the Empty Rooms", "Armed Only with a Camera: The Life and Death of Brent Renaud", "Children No More", "The Devil Is Busy", "Perfectly a Strangeness"],
        winner: null
    }
];