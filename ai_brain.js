class AIBrain {
    constructor() {
        this.commonResponses = [
            "I am processing that information.",
            "The particles are aligning to find your answer.",
            "That is an interesting perspective.",
            "I am a digital entity living in this interface.",
            "Could you elaborate on that?"
        ];
    }

    // The 'think' method simulates processing time and returns a response
    think(userMessage) {
        return new Promise((resolve) => {
            // Simulate thinking time between 1 and 2 seconds
            const delay = 1000 + Math.random() * 1000;

            setTimeout(() => {
                // Simple logic: Check for greetings or return random response
                let reply;
                const lowerMsg = userMessage.toLowerCase();
                
                if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
                    reply = "Greetings! I am the AI connected to this screen.";
                } else if (lowerMsg.includes('time')) {
                    reply = "Current system time: " + new Date().toLocaleTimeString();
                } else {
                    reply = this.commonResponses[Math.floor(Math.random() * this.commonResponses.length)];
                }
                
                resolve(reply);
            }, delay);
        });
    }
}

// Initialize the brain instance
const aiBrain = new AIBrain();