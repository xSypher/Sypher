export const loveQuotes = [
    "Love is composed of a single soul inhabiting two bodies.",
    "To love and be loved is to feel the sun from both sides.",
    "The best thing to hold onto in life is each other.",
    "Love is like the wind, you can't see it but you can feel it.",
    "Where there is love there is life."
];

export function getRandomLove() {
    return loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
}
