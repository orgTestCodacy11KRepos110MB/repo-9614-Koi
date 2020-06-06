Plants.prototype.GRASS_COLOR = Color.fromCSS("grass");
Plants.prototype.GRASS_FLEX = .3;
Plants.prototype.GRASS_FLEX_POWER = 3;
Plants.prototype.GRASS_HEIGHT_MIN = .3;
Plants.prototype.GRASS_HEIGHT_MAX = .85;

/**
 * Model grass
 * @param {Number} x The X origin
 * @param {Number} y The Y origin
 * @param {Random} random A randomizer
 * @param {Number[]} vertices The vertex array
 * @param {Number[]} indices The index array
 */
Plants.prototype.modelGrass = function(x, y, random, vertices, indices) {
    const uv = this.makeUV(x, y, random);
    const height = this.GRASS_HEIGHT_MIN + (this.GRASS_HEIGHT_MAX - this.GRASS_HEIGHT_MIN) * random.getFloat();
    const color = this.GRASS_COLOR.copy().multiply(.8 + .2 * random.getFloat());
    const shade = .9;

    this.modelStalk(
        x,
        0,
        x,
        height * 1.2,
        y,
        .1,
        uv,
        color,
        shade,
        this.GRASS_FLEX,
        this.GRASS_FLEX_POWER,
        vertices,
        indices);
    this.modelStalk(
        x,
        0,
        x - .16,
        height,
        y,
        .1,
        uv,
        color,
        shade,
        this.GRASS_FLEX,
        this.GRASS_FLEX_POWER,
        vertices,
        indices);
    this.modelStalk(
        x,
        0,
        x + .16,
        height,
        y,
        .1,
        uv,
        color,
        shade,
        this.GRASS_FLEX,
        this.GRASS_FLEX_POWER,
        vertices,
        indices);
};
