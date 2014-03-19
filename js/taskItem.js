var app = app || {};

(function() {
    app.taskItem = function(text) {
        this.initialize(text);
    };

    app.taskItem.prototype.initialize = function(text) {
        this.el = $('<li>');
        this.text = text;

        this.addEventListeners();
    };

    app.taskItem.prototype.addEventListeners = function() {
        this.el.on('click', this.click.bind(this));
    };

    app.taskItem.prototype.click = function() {
        console.log(this);
    };

    app.taskItem.prototype.render = function() {
        this.el.append(this.text);

        return this.el;
    };
} ());