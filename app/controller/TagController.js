Ext.define('TopTag.controller.TagController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            taglist: 'taglist',
            main: 'main',
            channelList: 'dataview',
            tagDetail: 'tagdetail',
            shareButton: 'tagdetail button'
        },
        control: {
            taglist: {
                itemtap: 'taglistItemTapped'
            },
            channelList: {
                itemtap: 'channelTapped'
            },
            shareButton: {
                tap: 'shareTag'
            }
        }
    },

    taglistItemTapped: function (list, index, target, record, e, eOpts) {
        var data = record.data;
        console.log('data passed is ...');
        console.log(data);
        data.xtype = 'tagdetail';
        this.getMain().setActiveItem(data);
    },

    channelTapped: function (list, index, target, record, e, eOpts) {
        var tagdetail = this.getTagDetail();
        var tagid = tagdetail.getTagid();
        var url = 'http://uk.toptag.com/EN/' + tagid + '/' + record.get('N') + '.json';
        tagdetail.setMasked({
            xtype: 'loadmask',
            indicator: true
        });
        Ext.Ajax.request({
            url: url,
            success: function (response) {
                var data = Ext.decode(response.responseText);
                var link = data.W;
                window.open(link, '_blank', 'location=yes');
            },
            failure: function () {
            },
            callback: function () {
                tagdetail.setMasked(false);
            }

        });
    },

    shareTag: function (shareButton, e, eOpts) {
        /*var tagDetail = shareButton.up('tagdetail');
        var tagId = tagDetail.getTagid();
        var socialmessage = tagDetail.getSocialmessage();
        var title = tagDetail.getTitle();*/
        var shareMethod = shareButton.getId();
        if (this[shareMethod]) {
            this[shareMethod]();
        }
    },

    facebook: function () {
        var link = 'http://www.facebook.com/sharer/sharer.php?u=http://www.toptag.me/969046783&t=Toptag+One+World+One+App';
        window.open(link, '_blank', 'location=yes');
    },

    twitter: function () {
        var link = 'https://twitter.com/intent/tweet?source=webclient&text=Get+amazing+content+on+Toptag+http://www.toptag.me/638937859';
        window.open(link, '_blank', 'location=yes');
    },

    sms: function () {
        Ext.Msg.alert('SMS Unavailable', 'The SMS functionality is not included in this demo.', Ext.emptyFn);
        //window.plugins.emailComposer.sendSms(socialmessage);
    },

    email: function () {
        Ext.Msg.alert('Email Unavailable', 'The email functionality is not included in this demo.', Ext.emptyFn);
        //window.plugins.emailComposer.showEmailComposer(title, socialmessage, [], [], [], true, []);
    }
});