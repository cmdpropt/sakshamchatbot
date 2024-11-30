// Chatbot Elements
const chatbot = document.getElementById("chatbot");
const conversation = document.getElementById("conversation");
const inputForm = document.getElementById("input-form");
const inputField = document.getElementById("input-field");

// Add Event Listener to Input Form
inputForm.addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent form submission

  const input = inputField.value.trim(); // Get and sanitize user input
  if (!input) return; // Prevent empty messages

  inputField.value = ""; // Clear input field

  // Add user input to conversation
  addMessageToConversation(input, "user");

  // Generate chatbot response
  showTypingIndicator();
  const response = await generateResponse(input);
  hideTypingIndicator();

  // Add chatbot response to conversation
  addMessageToConversation(response, "chatbot");
});

// Add Message to Conversation
function addMessageToConversation(content, sender) {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const message = document.createElement("div");
  message.classList.add("chatbot-message", `${sender}-message`);
  message.innerHTML = `
    <p class="chatbot-text">
      ${content}
      <span class="timestamp">${currentTime}</span>
    </p>
  `;
  conversation.appendChild(message);
  message.scrollIntoView({ behavior: "smooth" });
}

// Generate Chatbot Response
async function generateResponse(input) {
  const responses = [
    "Hello! How can I assist you today? 😊",
    "I'm sorry, I didn't quite catch that. Could you rephrase it? 🤔",
    "I'm here to help with any questions or concerns you may have. 🚀",
    "I can't browse the internet but can assist with other queries. 🌐",
    "What would you like to know today? 🔍",
    "Please keep our conversation respectful. 😊",
    "Feel free to ask me anything! 🌟",
    "Do you have any specific questions in mind? 💬",
    "I'm here to guide you with whatever you need! 🤗",
  ];

  // Simulate typing delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(responses[Math.floor(Math.random() * responses.length)]);
    }, 1000);
  });
}

// Typing Indicator
function showTypingIndicator() {
  const typingIndicator = document.createElement("div");
  typingIndicator.id = "typing-indicator";
  typingIndicator.classList.add("chatbot-message", "chatbot");
  typingIndicator.innerHTML = `
    <p class="chatbot-text">
      Typing<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>
    </p>
  `;
  conversation.appendChild(typingIndicator);
  typingIndicator.scrollIntoView({ behavior: "smooth" });
}

function hideTypingIndicator() {
  const typingIndicator = document.getElementById("typing-indicator");
  if (typingIndicator) typingIndicator.remove();
}

// Tab Switch Alert
window.addEventListener("blur", () => {
  alert("Trying to switch tabs, eh? Stay focused! 🚀");
});
