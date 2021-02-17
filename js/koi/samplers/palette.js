/**
 * The palette containing all fish colors
 */
const Palette = {};

Palette.INDEX_WHITE = 0;
Palette.INDEX_BLACK = 1;
Palette.INDEX_GOLD = 2;
Palette.INDEX_ORANGE = 3;
Palette.INDEX_RED = 4;
Palette.INDEX_BROWN = 5;
Palette.INDEX_PURPLE = 6;
Palette.INDEX_BLUE = 7;
Palette.INDEX_LAST = Palette.INDEX_BLUE;
Palette.COLOR_NAMES = [
    "white",
    "black",
    "gold",
    "orange",
    "red",
    "brown",
    "purple",
    "blue"
];
Palette.COLORS = [
    Color.fromCSS("--color-fish-white"),
    Color.fromCSS("--color-fish-black"),
    Color.fromCSS("--color-fish-gold"),
    Color.fromCSS("--color-fish-orange"),
    Color.fromCSS("--color-fish-red"),
    Color.fromCSS("--color-fish-brown"),
    Color.fromCSS("--color-fish-purple"),
    Color.fromCSS("--color-fish-blue")
];