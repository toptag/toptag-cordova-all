Ext.define('TopTag.view.TagList', {

    extend: 'Ext.List',

    xtype: 'taglist',

    config: {
        cls: 'tag-list',
        store: 'tagStore',
        itemHeight: 80,
        itemTpl: [
            '<img class="list-image" src="http://images.toptag.com/tags/{tagid}A1.jpg" height="60px" style="margin-right: 5px">',
            '<div class="list-detail-wrapper">',
            '<div class="list-title">{title}</div>',
            '<div class="list-subtitle">{subtitle}</div>',
            '<div class="list-created">{created}</div>',
            '</div>'
        ]
    }
});