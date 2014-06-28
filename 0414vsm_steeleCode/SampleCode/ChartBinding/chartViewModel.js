function ChartViewModel()
{
    var me = this;

    me.hour = ko.observable(0);
    me.minute = ko.observable(0);
    me.second = ko.observable(0);

    me.clockData = ko.computed(function() {
        var data = google.visualization.arrayToDataTable([
            [ 'Values', 'Hour', 'Minute', 'Second' ],
            [ 'Time', me.hour(), me.minute(), me.second()]
        ]);
        var view = new google.visualization.DataView(data);
        var annotationOptions = function(sourceCol) {
            return {
                calc: 'stringify',
                type: 'string',
                sourceColumn: sourceCol,
                role: 'annotation'
            };
        };

        view.setColumns([0, 1, new annotationOptions(1), 2, new annotationOptions(2), 3, new annotationOptions(3)]);
        return view;
    });

    me.update = function() {
        var d = me.getDate();
        me.hour(d.getHours());
        me.minute(d.getMinutes());
        me.second(d.getSeconds());
    };

    me.loop = function() {
        window.setTimeout(function() {
            me.update();
            me.loop();
        }, 1000);
    };

    me.update();
}

ChartViewModel.prototype.getDate = function() {
    return new Date();
}