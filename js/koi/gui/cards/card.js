/**
 * A koi card
 * @param {FishBody} body The fish body represented by this card
 * @param {Vector2} position The initial card position
 * @param {Number} [angle] The initial card angle
 * @constructor
 */
const Card = function(body, position, angle = 0) {
    this.body = body;
    this.position = position;
    this.positionPrevious = position.copy();
    this.angle = this.anglePrevious = angle;
    this.element = this.createElement();

    this.updatePosition();
};

Card.prototype.CLASS = "card-shape card";
Card.prototype.WIDTH = StyleUtils.getInt("--card-width");
Card.prototype.HEIGHT = StyleUtils.getInt("--card-height");
Card.prototype.RATIO = Card.prototype.WIDTH / Card.prototype.HEIGHT;

/**
 * Deserialize a card
 * @param {BinBuffer} buffer The buffer to deserialize from
 * @param {Vector2} [position] The position to deserialize the card at
 * @param {Number} [angle] The card angle
 * @returns {Card} The deserialized card
 * @throws {RangeError} A range error if deserialized values are not valid
 */
Card.deserialize = function(buffer, position = new Vector2(), angle = 0) {
    return new Card(FishBody.deserialize(buffer), position, angle);
};

/**
 * Serialize the card
 * @param {BinBuffer} buffer The buffer to serialize to
 */
Card.prototype.serialize = function(buffer) {
    this.body.serialize(buffer);
};

/**
 * Render the card, updates every refresh
 * @param {Number} time The amount of time since the last update
 */
Card.prototype.render = function(time) {
    this.updatePosition(time);
};

/**
 * Move the card to a position
 * @param {Number} x The X position in pixels
 * @param {Number} y The Y position in pixels
 */
Card.prototype.moveTo = function(x, y) {
    this.position.x = x;
    this.position.y = y;

    this.positionPrevious.set(this.position);
};

/**
 * Move the card towards a position
 * @param {Number} x The X position to move towards
 * @param {Number} y The Y position to move towards
 * @param {Number} interpolationFactor The interpolation factor
 */
Card.prototype.move = function(x, y, interpolationFactor) {
    this.positionPrevious.set(this.position);

    this.position.x += (x - this.position.x) * interpolationFactor;
    this.position.y += (y - this.position.y) * interpolationFactor;
};

/**
 * Rotate the card towards a target
 * @param {Number} target The target angle
 * @param {Number} interpolationFactor The interpolation factor
 */
Card.prototype.rotate = function(target, interpolationFactor) {
    this.anglePrevious = this.angle;
    this.angle += (target - this.angle) * interpolationFactor;
};

/**
 * Set the position of this card instantly
 * @param {Vector2} position The new position
 */
Card.prototype.setPosition = function(position) {
    this.position.set(position);
    this.positionPrevious.set(position);
};

/**
 * Update this cards element position
 * @param {Number} time The amount of time since the last update
 */
Card.prototype.updatePosition = function(time = 0) {
    const x = this.positionPrevious.x + (this.position.x - this.positionPrevious.x) * time;
    const y = this.positionPrevious.y + (this.position.y - this.positionPrevious.y) * time;
    const angle = this.anglePrevious + (this.angle - this.anglePrevious) * time;

    this.element.style.transform = "translate(" + Math.round(x) + "px," + Math.round(y) + "px)";

    if (this.angle !== 0)
        this.element.style.transform += "rotate(" + angle + "rad)";
};

/**
 * Clear the card transformation
 */
Card.prototype.clearTransform = function() {
    this.element.style.removeProperty("transform");
};

/**
 * Create an HTML element for this card
 * @returns {HTMLElement} The card element
 */
Card.prototype.createElement = function() {
    const element = document.createElement("div");

    element.className = this.CLASS;

    return element;
};