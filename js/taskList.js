var app = app || {};

(function() {
    app.taskList = function(context, text) {
        this.initialize(context, text);
    };

    app.taskList.prototype.initialize = function(context, text) {
        this.list = $(context);
    };

    app.taskList.prototype.addOne = function(text) {
        var newTask = new app.taskItem(text);
        newTask.render();

        this.list.append(newTask.el);
    };
} ());