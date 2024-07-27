const questions = [
    {
        questionText: "What is the capital of France?",
        answerOptions: [
            { answerText: "Berlin", isCorrect: false },
            { answerText: "Madrid", isCorrect: false },
            { answerText: "Paris", isCorrect: true },
            { answerText: "Lisbon", isCorrect: false },
        ],
    },
    {
        questionText: "Which planet is known as the Red Planet?",
        answerOptions: [
            { answerText: "Earth", isCorrect: false },
            { answerText: "Mars", isCorrect: true },
            { answerText: "Jupiter", isCorrect: false },
            { answerText: "Saturn", isCorrect: false },
        ],
    },
    {
        questionText: "What is the largest ocean on Earth?",
        answerOptions: [
            { answerText: "Atlantic Ocean", isCorrect: false },
            { answerText: "Indian Ocean", isCorrect: false },
            { answerText: "Arctic Ocean", isCorrect: false },
            { answerText: "Pacific Ocean", isCorrect: true },
        ],
    },
    {
        questionText: 'Who wrote "Romeo and Juliet"?',
        answerOptions: [
            { answerText: "William Shakespeare", isCorrect: true },
            { answerText: "Charles Dickens", isCorrect: false },
            { answerText: "Mark Twain", isCorrect: false },
            { answerText: "Jane Austen", isCorrect: false },
        ],
    },
    {
        questionText: "What is the smallest prime number?",
        answerOptions: [
            { answerText: "0", isCorrect: false },
            { answerText: "1", isCorrect: false },
            { answerText: "2", isCorrect: true },
            { answerText: "3", isCorrect: false },
        ],
    },
    {
        questionText: 'Which element has the chemical symbol "O"?',
        answerOptions: [
            { answerText: "Gold", isCorrect: false },
            { answerText: "Oxygen", isCorrect: true },
            { answerText: "Osmium", isCorrect: false },
            { answerText: "Silver", isCorrect: false },
        ],
    },
    {
        questionText: "What is the largest planet in our solar system?",
        answerOptions: [
            { answerText: "Earth", isCorrect: false },
            { answerText: "Mars", isCorrect: false },
            { answerText: "Jupiter", isCorrect: true },
            { answerText: "Saturn", isCorrect: false },
        ],
    },
    {
        questionText: "Which language is primarily spoken in Brazil?",
        answerOptions: [
            { answerText: "Spanish", isCorrect: false },
            { answerText: "Portuguese", isCorrect: true },
            { answerText: "French", isCorrect: false },
            { answerText: "English", isCorrect: false },
        ],
    },
    {
        questionText: "In which year did the Titanic sink?",
        answerOptions: [
            { answerText: "1905", isCorrect: false },
            { answerText: "1912", isCorrect: true },
            { answerText: "1918", isCorrect: false },
            { answerText: "1923", isCorrect: false },
        ],
    },
    {
        questionText: "What is the main ingredient in guacamole?",
        answerOptions: [
            { answerText: "Tomato", isCorrect: false },
            { answerText: "Onion", isCorrect: false },
            { answerText: "Avocado", isCorrect: true },
            { answerText: "Pepper", isCorrect: false },
        ],
    },
    {
        questionText: "Which country is home to the kangaroo?",
        answerOptions: [
            { answerText: "India", isCorrect: false },
            { answerText: "Australia", isCorrect: true },
            { answerText: "Canada", isCorrect: false },
            { answerText: "Brazil", isCorrect: false },
        ],
    },
    {
        questionText: "What is the chemical symbol for water?",
        answerOptions: [
            { answerText: "H2O", isCorrect: true },
            { answerText: "O2", isCorrect: false },
            { answerText: "CO2", isCorrect: false },
            { answerText: "NaCl", isCorrect: false },
        ],
    },
    {
        questionText: "How many continents are there?",
        answerOptions: [
            { answerText: "5", isCorrect: false },
            { answerText: "6", isCorrect: false },
            { answerText: "7", isCorrect: true },
            { answerText: "8", isCorrect: false },
        ],
    },
    {
        questionText: "What is the boiling point of water?",
        answerOptions: [
            { answerText: "50°C", isCorrect: false },
            { answerText: "75°C", isCorrect: false },
            { answerText: "90°C", isCorrect: false },
            { answerText: "100°C", isCorrect: true },
        ],
    },
    {
        questionText: "Which is the longest river in the world?",
        answerOptions: [
            { answerText: "Amazon River", isCorrect: false },
            { answerText: "Nile River", isCorrect: true },
            { answerText: "Yangtze River", isCorrect: false },
            { answerText: "Mississippi River", isCorrect: false },
        ],
    },
    {
        questionText: "What is the square root of 64?",
        answerOptions: [
            { answerText: "6", isCorrect: false },
            { answerText: "7", isCorrect: false },
            { answerText: "8", isCorrect: true },
            { answerText: "9", isCorrect: false },
        ],
    },
    {
        questionText: "Which planet is closest to the sun?",
        answerOptions: [
            { answerText: "Venus", isCorrect: false },
            { answerText: "Earth", isCorrect: false },
            { answerText: "Mars", isCorrect: false },
            { answerText: "Mercury", isCorrect: true },
        ],
    },
    {
        questionText: "What is the capital city of Japan?",
        answerOptions: [
            { answerText: "Beijing", isCorrect: false },
            { answerText: "Seoul", isCorrect: false },
            { answerText: "Tokyo", isCorrect: true },
            { answerText: "Bangkok", isCorrect: false },
        ],
    },
    {
        questionText: "Who painted the Mona Lisa?",
        answerOptions: [
            { answerText: "Vincent van Gogh", isCorrect: false },
            { answerText: "Pablo Picasso", isCorrect: false },
            { answerText: "Leonardo da Vinci", isCorrect: true },
            { answerText: "Claude Monet", isCorrect: false },
        ],
    },
    {
        questionText: "Which gas do plants absorb from the atmosphere?",
        answerOptions: [
            { answerText: "Oxygen", isCorrect: false },
            { answerText: "Nitrogen", isCorrect: false },
            { answerText: "Carbon Dioxide", isCorrect: true },
            { answerText: "Helium", isCorrect: false },
        ],
    },
    {
        questionText: "What is the hardest natural substance on Earth?",
        answerOptions: [
            { answerText: "Gold", isCorrect: false },
            { answerText: "Iron", isCorrect: false },
            { answerText: "Diamond", isCorrect: true },
            { answerText: "Platinum", isCorrect: false },
        ],
    },
    {
        questionText: "Which organ is responsible for pumping blood throughout the body?",
        answerOptions: [
            { answerText: "Lungs", isCorrect: false },
            { answerText: "Liver", isCorrect: false },
            { answerText: "Heart", isCorrect: true },
            { answerText: "Kidneys", isCorrect: false },
        ],
    },
    {
        questionText: "Who is known as the Father of Computers?",
        answerOptions: [
            { answerText: "Albert Einstein", isCorrect: false },
            { answerText: "Isaac Newton", isCorrect: false },
            { answerText: "Charles Babbage", isCorrect: true },
            { answerText: "Nikola Tesla", isCorrect: false },
        ],
    },
    {
        questionText: "Which country gifted the Statue of Liberty to the USA?",
        answerOptions: [
            { answerText: "Canada", isCorrect: false },
            { answerText: "France", isCorrect: true },
            { answerText: "England", isCorrect: false },
            { answerText: "Germany", isCorrect: false },
        ],
    },
    {
        questionText: "What is the largest mammal in the world?",
        answerOptions: [
            { answerText: "Elephant", isCorrect: false },
            { answerText: "Blue Whale", isCorrect: true },
            { answerText: "Great White Shark", isCorrect: false },
            { answerText: "Giraffe", isCorrect: false },
        ],
    },
    {
        questionText: "Which vitamin is produced when a person is exposed to sunlight?",
        answerOptions: [
            { answerText: "Vitamin A", isCorrect: false },
            { answerText: "Vitamin B", isCorrect: false },
            { answerText: "Vitamin C", isCorrect: false },
            { answerText: "Vitamin D", isCorrect: true },
        ],
    },
    {
        questionText: "What is the capital of Canada?",
        answerOptions: [
            { answerText: "Toronto", isCorrect: false },
            { answerText: "Vancouver", isCorrect: false },
            { answerText: "Ottawa", isCorrect: true },
            { answerText: "Montreal", isCorrect: false },
        ],
    },
    {
        questionText: "What is the chemical symbol for gold?",
        answerOptions: [
            { answerText: "Au", isCorrect: true },
            { answerText: "Ag", isCorrect: false },
            { answerText: "Pb", isCorrect: false },
            { answerText: "Fe", isCorrect: false },
        ],
    },
    {
        questionText: "Which artist is known for the artwork 'Starry Night'?",
        answerOptions: [
            { answerText: "Claude Monet", isCorrect: false },
            { answerText: "Vincent van Gogh", isCorrect: true },
            { answerText: "Pablo Picasso", isCorrect: false },
            { answerText: "Paul Cézanne", isCorrect: false },
        ],
    },
    {
        questionText: "What is the smallest bone in the human body?",
        answerOptions: [
            { answerText: "Femur", isCorrect: false },
            { answerText: "Stapes", isCorrect: true },
            { answerText: "Humerus", isCorrect: false },
            { answerText: "Radius", isCorrect: false },
        ],
    },
];

export default questions;
