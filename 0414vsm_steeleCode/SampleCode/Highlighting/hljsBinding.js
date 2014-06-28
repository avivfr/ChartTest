ko.bindingHandlers.hljs = {
    update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        ko.bindingHandlers.text.update(element, valueAccessor, allBindings, viewModel, bindingContext);
        if( allBindings.has('style')) {
            var style = allBindings.get('style');
            $(element).removeAttr('class');
            $(element).addClass(style);
        }
        hljs.highlightBlock(element);
    }
};
