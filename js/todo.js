var app = app || {};

(function() {
    'use strict';

    app.todo = function(context) {
        this.initialize(context);
    };

    app.todo.prototype.initialize = function(context) {
        this.context = $(context);

        this.taskCreator = new app.taskCreator(this.context.find('#todo-add'));
    };
} ());
