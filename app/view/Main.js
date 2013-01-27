Ext.define('TopTag.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'main',
    config: {

        items: [
            {
                title: 'My Tags',
                xtype: 'taglist'
            }
        ]
    }
});
