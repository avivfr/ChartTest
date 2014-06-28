function GaugeViewModel() {
    var me = this;

    me.hour = ko.observable(0);
    me.minute = ko.observable(0);
    me.second = ko.observable(0);

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

GaugeViewModel.prototype.getDate = function() {
    return new Date();
};
