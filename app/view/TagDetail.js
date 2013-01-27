Ext.define('TopTag.view.TagDetail', {

    extend: 'Ext.Container',

    xtype: 'tagdetail',

    require: ['Ext.Img'],

    config: {
        tagid: null,
        channels: null,
        socialmessage: null,
        scrollable: true,
        items: [{
            xtype: 'component',
            html: ''
        }, {
            itemTpl: '<img src="http://util.toptag.com/{U}.png"> {D}',
            xtype: 'dataview',
            scrollable: false,
            cls: 'channels'
        },{
            xtype: 'container',
            docked: 'bottom',
            layout: 'hbox',
            defaults: {
                xtype: 'button',
                flex: 1,
                iconMask: true,
                margin: '1%',
                ui: 'action-round',
                iconAlign: 'top'
            },
            items: [{
                iconCls: 'team',
                id: 'facebook'
            }, {
                iconCls: 'twitter2',
                id: 'twitter'
            }, {
                iconCls: 'chat_black1',
                id: 'sms'
            }, {
                iconCls: 'mail',
                id: 'email'
            }]

        }],
        cls: 'tag-detail'
    },

    /**
     * Get the dataview and set its channels appropriately.
     * @param [{Object}] array of channel items.
     * @private
     */
    applyChannels: function(channels) {
        this.down('dataview').setData(channels);
        return channels;
    },

    /**
     * What to do with the tagId.
     * @param string The value of the tag id.
     * @private
     */
    applyTagid: function(tagId) {
        var backgroundUrl = 'http://images.toptag.com/tags/' + tagId + 'B1.jpg';
        this.down('component').setHtml('<img src="' + backgroundUrl + '" width="100%"/>');
        return tagId;
    }
});