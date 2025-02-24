// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label7")
                .setLeft("0em")
                .setTop("1.0714285714285714em")
                .setWidth("6.928571428571429em")
                .setHeight("3.5047619047619047em")
                .setCaption("Gateway 2025")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "28px",
                        "font-weight" : "bolder"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button6")
                .setLeft("0.7619047619047619em")
                .setTop("9.904761904761905em")
                .setWidth("12.876190476190477em")
                .setCaption("Add Student")
                .setFontColor("#000000")
                .setImageClass("xui-icon-search")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "page",
                        "target" : "App.FormLayout34",
                        "args" : [true],
                        "method" : "switch",
                        "event" : 1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.MenuBar")
                .setHost(host,"xui_ui_menubar2")
                .setItems([
                    {
                        "id" : "menu1",
                        "sub" : [
                            {
                                "id" : "normal",
                                "caption" : "normal"
                            },
                            {
                                "id" : "disabled",
                                "caption" : "disabled",
                                "disabled" : true
                            },
                            {
                                "id" : "image",
                                "caption" : "image",
                                "imageClass" : "xui-icon-xui"
                            },
                            {
                                "type" : "split"
                            },
                            {
                                "id" : "checkbox 1",
                                "caption" : "checkbox 1",
                                "type" : "checkbox"
                            },
                            {
                                "id" : "checkbox 2",
                                "caption" : "checkbox 2",
                                "type" : "checkbox"
                            }
                        ],
                        "caption" : "menu1"
                    },
                    {
                        "id" : "menu2",
                        "sub" : [
                            {
                                "id" : "sub menu 1",
                                "caption" : "sub menu 1",
                                "add" : "[Ctrl+F]",
                                "sub" : [
                                    {
                                        "id" : "sub 1",
                                        "type" : "radiobox"
                                    },
                                    {
                                        "id" : "sub 2",
                                        "type" : "radiobox"
                                    },
                                    {
                                        "id" : "sub 3"
                                    }
                                ]
                            },
                            {
                                "id" : "sub menu 2",
                                "caption" : "sub menu 2",
                                "add" : "[Ctrl+T]",
                                "sub" : [
                                    "sub 3",
                                    "sub 4"
                                ]
                            }
                        ],
                        "caption" : "menu2"
                    }
                ])
                .setTop("33.523809523809526em")
                .onMenuSelected([
                    {
                        "desc" : "Action 1",
                        "type" : "page",
                        "target" : "App.add student",
                        "args" : [
                            "{page.popUp()}"
                        ],
                        "method" : "popUp",
                        "redirection" : "page::"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.PageBar")
                .setHost(host,"xui_ui_pagebar1")
                .setLeft("0em")
                .setTop("43.42857142857143em")
                .setWidth("14.628571428571428em")
                .setCaption("PageBar")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});