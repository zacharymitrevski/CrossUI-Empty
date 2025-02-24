xui.Class('App.FormLayout34', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout1")
                .setLeft("1em")
                .setTop("0em")
                .setWidth("56.68571428571428em")
                .setHeight("25.98095238095238em")
                .setLayoutData({
                    "rows" : 4,
                    "cols" : 6,
                    "merged" : [
                        {
                            "row" : 1,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 2,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 1,
                            "col" : 4,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 2,
                            "col" : 4,
                            "rowspan" : 1,
                            "colspan" : 2,
                            "removed" : false
                        },
                        {
                            "row" : 3,
                            "col" : 1,
                            "rowspan" : 1,
                            "colspan" : 5,
                            "removed" : false
                        },
                        {
                            "row" : 0,
                            "col" : 0,
                            "rowspan" : 1,
                            "colspan" : 6,
                            "removed" : false
                        }
                    ],
                    "rowSetting" : {
                        "1" : {
                            "manualHeight" : 50
                        },
                        "2" : {
                            "manualHeight" : 33
                        },
                        "3" : {
                            "manualHeight" : 32
                        },
                        "4" : {
                            "manualHeight" : 174
                        }
                    },
                    "colSetting" : {
                        "E" : {
                            "manualWidth" : 50
                        }
                    },
                    "cells" : {
                        "A1" : {
                            "value" : "Add New Student",
                            "style" : {
                                "textAlign" : "center",
                                "fontSize" : "20px",
                                "fontFamily" : "arial black,avant garde"
                            }
                        },
                        "A2" : {
                            "value" : "Full Name"
                        },
                        "D2" : {
                            "value" : "DOB"
                        },
                        "A3" : {
                            "value" : "Gender"
                        },
                        "D3" : {
                            "value" : "Flag"
                        },
                        "A4" : {
                            "value" : "Desc"
                        },
                        "B1" : {
                            "style" : {
                                "textAlign" : "center",
                                "fontSize" : "20px",
                                "fontFamily" : "arial black,avant garde"
                            }
                        },
                        "C1" : {
                            "style" : {
                                "textAlign" : "center",
                                "fontSize" : "20px",
                                "fontFamily" : "arial black,avant garde"
                            }
                        },
                        "D1" : {
                            "style" : {
                                "textAlign" : "center",
                                "fontSize" : "20px",
                                "fontFamily" : "arial black,avant garde"
                            }
                        },
                        "E1" : {
                            "style" : {
                                "textAlign" : "center",
                                "fontSize" : "20px",
                                "fontFamily" : "arial black,avant garde"
                            }
                        },
                        "F1" : {
                            "style" : {
                                "textAlign" : "center",
                                "fontSize" : "20px",
                                "fontFamily" : "arial black,avant garde"
                            }
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3")
                .setName("B2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("19.580952380952382em")
                .setHeight("2.4380952380952383em")
                .setLabelPos("none"),
                "B2"
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput21")
                .setName("E2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("13.40952380952381em")
                .setHeight("2.4380952380952383em")
                .setLabelPos("none")
                .setType("date")
                .setValue("946645200000"),
                "E2"
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1")
                .setName("B3")
                .setItems([
                    {
                        "id" : "m",
                        "caption" : "Male"
                    },
                    {
                        "id" : "f",
                        "caption" : "Femail"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setWidth("19.580952380952382em")
                .setHeight("2.361904761904762em")
                .setLabelPos("none")
                .setLabelHAlign("left")
                .setValue("a"),
                "B3"
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput32")
                .setName("E3")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("13.40952380952381em")
                .setHeight("2.361904761904762em")
                .setLabelPos("none")
                .setType("color"),
                "E3"
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.RichEditor")
                .setHost(host,"xui_ui_richeditor2")
                .setName("B4")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("42.89523809523809em")
                .setHeight("13.18095238095238em")
                .setLabelPos("none")
                .setLabelHAlign("left"),
                "B4"
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox8")
                .setLeft("14.476190476190476em")
                .setTop("23.61904761904762em")
                .setWidth("12em")
                .setImageClass("xui-uicmd-info")
                .setCaption("Student is Active ")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#000000",
                        "background-color" : "#FFF8DC"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input26")
                .setLeft("9.142857142857142em")
                .setTop("33.523809523809526em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Password:")
                .setType("password")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#FFF8DC",
                        "border-top" : "solid 1px #000000",
                        "border-bottom" : "solid 1px #000000",
                        "border-left" : "solid 1px #000000"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input27")
                .setLeft("9.142857142857142em")
                .setTop("30.476190476190474em")
                .setWidth("18em")
                .setHeight("2.361904761904762em")
                .setLabelSize("8em")
                .setLabelCaption("Student ID:")
                .setMultiLines(true)
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#FFF8DC"
                    }
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});