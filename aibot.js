function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
    addUserMessage(userInput);
    respondToUser(userInput);
    document.getElementById("user-input").value = "";
    }
}

function addUserMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var messageDiv = document.createElement("div");
    messageDiv.classList.add("message", "user-message");
        messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var messageDiv = document.createElement("div");
    messageDiv.classList.add("message", "bot-message");
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}


function selectOption(option) {

    switch (option.toLowerCase())
    {
    
        case "flight":
        addBotMessage("please provide me the departure date and destination");
            break;

        case "options":
        addBotMessage("Sure!! 😃Here are some predefined choices: 1. Flight. 2. Bus 3. Rental car Please select an option and type 'option number'.");
            break;
        
        
        case "help":
        addBotMessage("Sure!👍 Here are some things I can help with:\n1. Finding cheap flights\n2. Providing information about destinations\n3. Assisting with travel plans\nPlease let me know what you need.");
            break;
        
        default:
            addBotMessage("Sorry!!😞 i didn't understand");
            
    }
}

function openCalender() {
    var calender = document.getElementById("calender");
    calender.style.display = "block";

}

function selectDate(date) {
    var userInput = document.getElementById("user-input");
    userInput.value = "Selected date: " + date;
    var calender = document.getElementById("calender");
    calender.style.display = "none";
}


function respondToUser(message) {
    message = message.toLowerCase();

    if (message.includes("hello") ||
    message.includes("hi")) {
        addBotMessage("Hello! How can I assist you today😄? please type 'flight' to get cheap flights");
    } else if (message.includes("flight")) {
        addBotMessage(
            "Please provide your departure and destination details and select your departure🛫.");
    } else if (message.includes("help") || message.includes(option)) {
        addBotMessage(
        "Sure!👍 Here are some things I can help with:\n1. Finding cheap flights\n2. Providing information about destinations\n3. Assisting with travel plans\nPlease let me know what you need."
        );
    } else if (message.includes("options")) {
        addBotMessage(
        "Sure!! 😃Here are some predefined choices: 1. Flight. 2. Bus 3. Rental car Please select a number or type your question."
        );
    } else if (message.includes("flight")) {
        addBotMessage("Please select your date of departure");
    } else if (message.includes("Bus")) {

        addBotMessage("Please select your date of departure");
                var calenderHTML;
        addBotMessage(calenderHTML);

    } else if (message.includes("Rental car")) {
            addBotMessage("Sorry!!😞 there are currently no rental cars available nearby");
    }
    else if (
        message.includes("thank you") ||
        message.includes("thanks") ||
        message.includes("appreciate")
    ) {
        addBotMessage(
        "You're welcome!💕 If you need any further assistance, feel free to ask."
        );
    } else if (
        message.includes("how are you") ||
        message.includes("how's it going")
    ) {
        addBotMessage("I'm just a bot🤖, but thanks for asking!");
    } else if (
        message.includes("goodbye") ||
        message.includes("bye") ||
        message.includes("see you later")
    ) {
        addBotMessage("Goodbye!👋 Have a great day!");
    } else if (message.includes("i want to go to paris") ||
    message.includes("destination")) {
        addBotMessage(
            /*add links*/
        "Here are some links related to:\n (https://example.com)\n (https://example.com)\n (https://example.com)"
        );
    } else {
        addBotMessage(
        "I'm sorry, I didn't understand that. How can I assist you?"
        );
    }
}
