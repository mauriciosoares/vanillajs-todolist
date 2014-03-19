var app = app || {};

(function() {
    'use strict';

    app.taskCreator = function(htmlInput) {
        this.initialize(htmlInput);
    };

    app.taskCreator.prototype.initialize = function(htmlInput) {
        this.taskInput = new app.taskInput(htmlInput);
        this.taskList = new app.taskList('#todo-list');

        this.addEventListeners();
    };

    app.taskCreator.prototype.addEventListeners = function() {
        this.taskInput.on('enter', this.addTask.bind(this));
    };

    app.taskCreator.prototype.addTask = function(e, text) {
        this.taskList.addOne(text);
    };
} ());
