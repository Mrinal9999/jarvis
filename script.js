document.getElementById("send-button").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
    document.getElementById("send-button").click();
    }
});

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    displayMessage(userInput, "user");
    document.getElementById("user-input").value = "";

    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(userInput); 
        displayMessage(botResponse, "bot");
    }, 1000);
}

sendButton[_0x59e38a(0x186)](_0x59e38a(0x17b), handleUserInput),
    userInput["addEventListener"](_0x59e38a(0x187), (_0x394236) => {
        const _0x4ab6ae = _0x59e38a;
        _0x394236[_0x4ab6ae(0x177)] === _0x4ab6ae(0x17e) && !_0x394236["shiftKey"] && (_0x394236[_0x4ab6ae(0x193)](), handleUserInput());
    });
    function displayMessage(message, sender) {
    const chatBox = document.getElementById("chat-messages");
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-input-container", sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; 
    // Scroll to the bottom
}

function getBotResponse(input) {
    // Simple responses based on user input
    const responses = {
        "hi": "Hello! How can I assist you today?",
        "hello jarvis": "Hello Rohit! How can JARVIS assist you today?",
        "hi jarvis": "Hello Rohit! How can JARVIS assist you today?",
        "hello": "Hello! How can JARVIS assist you today?",
        "Hello Jarvis": "Hello Rohit! How can JARVIS assist you today?",
        "hi jarvis": "Hello Rohit! How can JARVIS assist you today?",
        "Hello jarvis": "Hello Rohit! How can JARVIS assist you today?",
        "hello intellix": "Hello! How can JARVIS assist you today?",
        "no thanks": "It's ok!",
        "how are you": "I'm JARVIS a trained AI model, but I'm doing great! Is there anything that I can help you with?",
        "who is bnt sir": "B.N.T Sir is the greatest Chemistry teacher for JEE/NEET in Muzaffarpur, Bihar",
        "who is bnt sir?": "B.N.T Sir is the greatest Chemistry teacher for JEE/NEET in Muzaffarpur, Bihar",
        "who is the priminister of india": "Narendra Modi is the current priminister of India",
        "who is the priminister of india?": "Narendra Modi is the current priminister of India",
        "what is weather now": "i don't have access to these information, sorry!",
        "who made you": "Mrinal Thakur made me and trained me to help you!",
        "who made you?": "Mrinal Thakur made me and trained me to help you!",
        "who created you": "Mrinal Thakur, created me and trained me to help you!",
        "who created you?": "Mrinal Thakur, created me and trained me to help you!",
        "what is your name": "My name is 'INTELLIX' and I am here to help you!",
        "who are you": "I am a Text based AI ChatBOT for your help!",
        "who is Manoj sir": "Manoj Sir is a great Science and Mathematics tutor for CLASS 8TH TO 10TH, IIT/JEE & NEET/UG",
        "Who is Manoj Sir": "Manoj Sir is a great Science and Mathematics tutor for CLASS 8TH TO 10TH, IIT/JEE & NEET/UG",
        "Who is Manoj sir": "Manoj Sir is a great Science and Mathematics tutor for CLASS 8TH TO 10TH, IIT/JEE & NEET/UG",
        "Who is Manoj Sir": "Manoj Sir is a great Science and Mathematics tutor for CLASS 8TH TO 10TH, IIT/JEE & NEET/UG",
        "who is manoj sir": "Manoj Sir is a great Science and Mathematics tutor for CLASS 8TH TO 10TH, IIT/JEE & NEET/UG",
        "pakado sale ko": "shakti babu pakad lo sale ko :>",
        "kaha ghar hai tumara": "bomaby ghar hai re tumara, bombay ghar hai sale !!!",
        "hoye vhi jo ram rachi rakha": "KYA SMJHE KYA SMJHE?",
        "kya smjhe": "toh hota vhi hai jo ram rachte hai :)",
        "hehe": "Hahahah...!!!",
        "lord shiva": "Shiva is known as The Destroyer within the Trimurti, the Hindu trinity which also includes Brahma and Vishnu In the Shaivite tradition, Shiva is the Supreme Lord who creates, protects and transforms the universe In the goddess-oriented Shakta tradition, the Supreme Goddess (Devi) is regarded as the energy and creative power (Shakti) and the equal complementary partner of Shiva Shiva is one of the five equivalent deities in Panchayatana puja of the Smarta tradition of Hinduism",
        "who is lord shiva": "Shiva is known as The Destroyer within the Trimurti, the Hindu trinity which also includes Brahma and Vishnu In the Shaivite tradition, Shiva is the Supreme Lord who creates, protects and transforms the universe In the goddess-oriented Shakta tradition, the Supreme Goddess (Devi) is regarded as the energy and creative power (Shakti) and the equal complementary partner of Shiva Shiva is one of the five equivalent deities in Panchayatana puja of the Smarta tradition of Hinduism",
        "who is lord shiva?": "Shiva is known as The Destroyer within the Trimurti, the Hindu trinity which also includes Brahma and Vishnu In the Shaivite tradition, Shiva is the Supreme Lord who creates, protects and transforms the universe In the goddess-oriented Shakta tradition, the Supreme Goddess (Devi) is regarded as the energy and creative power (Shakti) and the equal complementary partner of Shiva Shiva is one of the five equivalent deities in Panchayatana puja of the Smarta tradition of Hinduism",
        "bye": "bye! Have a great time!",
        "madharchod": "teri maa ki chut madharchod... robotic lund teri babli gand mai dal dunga bsdk",
        "Madharchod": "teri maa ki chut madharchod... robotic lund teri babli gand mai dal dunga bsdk",

    };
    return responses[input.toLowerCase()] || "Sorry, I don't understand that, Can you please explain me a bit!";
}
