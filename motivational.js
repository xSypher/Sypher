export const motivationalQuotes = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "In three words I can sum up everything I've learned about life: It goes on.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "You must be the change you wish to see in the world."
];

export function getRandomMotivational() {
    return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
}
