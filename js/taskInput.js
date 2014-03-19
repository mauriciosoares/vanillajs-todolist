var app = app || {};

(function() {
    'use strict';

    var ENTER_KEY = 13;

    app.taskInput = function(context) {
        this.initialize(context);
    };

    app.taskInput.prototype.initialize = function(context) {
        this.input = context;
        this.emitter = $({});
        this.on = this.emitter.on.bind(this.emitter);

        this.addEventListeners();
    };

    app.taskInput.prototype.addEventListeners = function() {
        this.input.on('keyup', this.keyUpEvent.bind(this));
    };

    app.taskInput.prototype.keyUpEvent = function(e) {
        if(e.which !== 13) {
            return;
        }

        var text = e.target.value;

        e.target.value = '';

        this.emitter.trigger('enter', text);
    };
} ());
