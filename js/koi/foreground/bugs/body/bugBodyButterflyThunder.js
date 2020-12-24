/**
 * A rare thunder butterfly
 * @param {WebGLRenderingContext} gl A WebGL rendering context
 * @param {Random} random A randomizer
 * @constructor
 */
const BugBodyButterflyThunder = function(gl, random) {
    BugBodyButterfly.call(
        this,
        gl,
        this.SAMPLER_BODY_HEIGHT,
        this.SAMPLER_TOP_LENGTH,
        this.SAMPLER_TOP_ANGLE,
        this.SAMPLER_BOTTOM_LENGTH,
        this.SAMPLER_BOTTOM_ANGLE,
        this.COLOR_WINGS,
        this.COLOR_WINGS_EDGE,
        true,
        random);
};

BugBodyButterflyThunder.prototype = Object.create(BugBodyButterfly.prototype);
BugBodyButterflyThunder.prototype.COLOR_WINGS = Color.fromCSS("--color-bug-butterfly-thunder");
BugBodyButterflyThunder.prototype.COLOR_WINGS_EDGE = Color.fromCSS("--color-bug-butterfly-thunder-edge");
BugBodyButterflyThunder.prototype.SAMPLER_BODY_HEIGHT = new SamplerPower(.04, .05, 2);
BugBodyButterflyThunder.prototype.SAMPLER_TOP_LENGTH = new SamplerPower(.55, .62, 2);
BugBodyButterflyThunder.prototype.SAMPLER_TOP_ANGLE = new Sampler(Math.PI * .32, Math.PI * .39);
BugBodyButterflyThunder.prototype.SAMPLER_BOTTOM_LENGTH = new SamplerPower(.4, .45, 2);
BugBodyButterflyThunder.prototype.SAMPLER_BOTTOM_ANGLE = new Sampler(Math.PI * -.42, Math.PI * -.5);