console.log("MarketVoice App Initialized");

// Simulated Voice Alert Functionality
function playVoiceAlert(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}
