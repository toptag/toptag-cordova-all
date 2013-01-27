//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'TopTag': 'app'
});
//</debug>

Ext.application({
    controllers: ["TagController"],

    models: ["Tag"],

    stores: ["Tags"],

    views: ['Main', 'TagList', 'TagDetail'],

    name: 'TopTag',

    requires: [
        'Ext.MessageBox'
    ],



    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        var Tag = TopTag.model.Tag;
        [571954831, 670518882, 489274062, 625622808, 698937859, 144223990, 260773154, 123456789].forEach(function (tag) {
            Tag.loadTag(tag, function (err, record) {
                if (err) {
                    console.warn(err);
                } else {
                    console.log('loaded tag %s', record.get('tagid'));
                }
            });
        });

        // Initialize the main view
        Ext.Viewport.add(Ext.create('TopTag.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
