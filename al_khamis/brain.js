export function getAIResponse(input) {
    const text = input.toLowerCase();
    
    if (text.includes('hello') || text.includes('hi')) {
        return "Greetings. How can I assist you today?";
    } else if (text.includes('time')) {
        return "Current system time is " + new Date().toLocaleTimeString();
    } else if (text.includes('status')) {
        return "System operational. Particles stable.";
    }
    return "Input received. Processing... (Logic pending expansion)";
}