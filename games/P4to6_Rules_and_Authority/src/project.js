window.__require=function t(e,o,n){function c(i,r){if(!o[i]){if(!e[i]){var a=i.split("/");if(a=a[a.length-1],!e[a]){var l="function"==typeof __require&&__require;if(!r&&l)return l(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+i+"'")}}var p=o[i]={exports:{}};e[i][0].call(p.exports,function(t){return c(e[i][1][t]||t)},p,p.exports,t,e,o,n)}return o[i].exports}for(var s="function"==typeof __require&&__require,i=0;i<n.length;i++)c(n[i]);return c}({CarControlButton:[function(t,e,o){"use strict";cc._RF.push(e,"b01a8M8PVtPJZCbwNCqSD5b","CarControlButton"),cc.Class({extends:cc.Component,properties:{car:cc.Node,direction:"",thisDisrection:""},start:function(){var t=this;this.touchMove=this.node.on(cc.Node.EventType.TOUCH_START,function(e){"right"==t.direction&&(t.thisDisrection="right"),"left"==t.direction&&(t.thisDisrection="left")},this.node),this.touchEnd=this.node.on(cc.Node.EventType.TOUCH_END,function(e){t.thisDisrection=""},this.node),this.touchCancel=this.node.on(cc.Node.EventType.TOUCH_CANCEL,function(e){t.thisDisrection=""},this.node)},update:function(t){"right"==this.thisDisrection&&this.car.x<900&&(this.car.x+=5),"left"==this.thisDisrection&&this.car.x>110&&(this.car.x-=5)}}),cc._RF.pop()},{}],CarControlKeyboard:[function(t,e,o){"use strict";cc._RF.push(e,"a057cgX50lB6KEpU3S8fv6n","CarControlKeyboard"),cc.Class({extends:cc.Component,properties:{car:cc.Node},onLoad:function(){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},start:function(){},onKeyDown:function(t){if(this.car.x<830)switch(t.keyCode){case cc.macro.KEY.right:this.car.x+=10}if(this.car.x>194)switch(t.keyCode){case cc.macro.KEY.left:this.car.x-=10}},onKeyUp:function(t){}}),cc._RF.pop()},{}],Globals:[function(t,e,o){"use strict";cc._RF.push(e,"c593cPqqNhFLIPHiXmzf3FN","Globals"),window.Globals={count:60,templateCount:0,score:0,correctcount:0,correct:[],wrong:[]},cc._RF.pop()},{}],carEvent:[function(t,e,o){"use strict";cc._RF.push(e,"10101ajYShLOK+DhRWw1BUx","carEvent"),cc.Class({extends:cc.Component,properties:{goodtips:cc.Node,badtips:cc.Node,timer:cc.Node,score:cc.Node},onLoad:function(){cc.director.getCollisionManager().enabled=!0},start:function(){cc.director.preloadScene("end",function(){cc.log("Next scene preloaded")})},update:function(t){0==Globals.count&&cc.director.loadScene("end"),7==Globals.correctcount&&cc.director.loadScene("end")},onCollisionEnter:function(t,e){1==t.node.parent.getComponent("template").is_Good&&(this.goodtips.getComponent(cc.Label).string=t.node.parent.getComponent("template").content.toUpperCase(),this.timer.getComponent(cc.Animation).play("timergood"),this.score.getComponent(cc.Animation).play("scoregood"),this.goodtips.getComponent(cc.AudioSource).play(),Globals.score=Globals.score+100,Globals.correct.push(t.node.parent.getComponent("template").text),this.setNULL(1),Globals.correctcount+=1),0==t.node.parent.getComponent("template").is_Good&&(this.badtips.getComponent(cc.Label).string=t.node.parent.getComponent("template").content.toUpperCase(),this.timer.getComponent(cc.Animation).play("timerbad"),this.score.getComponent(cc.Animation).play("scorebad"),this.badtips.getComponent(cc.AudioSource).play(),Globals.score=Globals.score-50,Globals.wrong.push(t.node.parent.getComponent("template").text),this.setNULL(0)),t.node.parent.destroy()},onCollisionStay:function(t,e){},onCollisionExit:function(t,e){},setNULL:function(t){var e=this;1==t&&this.getComponent(cc.Animation).scheduleOnce(function(){e.goodtips.getComponent(cc.Label).string=""},3),0==t&&this.getComponent(cc.Animation).scheduleOnce(function(){e.badtips.getComponent(cc.Label).string=""},3)}}),cc._RF.pop()},{}],endShowWordList:[function(t,e,o){"use strict";cc._RF.push(e,"61a1d3lMaRC04ioymUk+Ew6","endShowWordList"),cc.Class({extends:cc.Component,properties:{isGood:!1},start:function(){if(1==this.isGood){for(var t="",e=0;e<Globals.correct.length;e++)t+=Globals.correct[e]+"\n";this.getComponent(cc.Label).string=t}if(0==this.isGood){for(t="",e=0;e<Globals.wrong.length;e++)t+=Globals.wrong[e]+"\n";this.getComponent(cc.Label).string=t}}}),cc._RF.pop()},{}],end:[function(t,e,o){"use strict";cc._RF.push(e,"fec76j10MFImJ61jyfSq6Aq","end"),cc.Class({extends:cc.Component,properties:{},start:function(){},end_:function(){document.cookie="P4to6_Rules_and_Authority_Start=0;Path=/;"}}),cc._RF.pop()},{}],setScore:[function(t,e,o){"use strict";cc._RF.push(e,"d28b5mhKvNAX4lSq7DBSKs6","setScore"),cc.Class({extends:cc.Component,properties:{},start:function(){var t=this;this.getComponent(cc.Animation).schedule(function(){t.node.getChildByName("showscore").getComponent(cc.Label).string=Globals.score,Globals.score=Globals.score+10},.3,400,0)}}),cc._RF.pop()},{}],setString:[function(t,e,o){"use strict";cc._RF.push(e,"8d342AZcQFDcaV2Nc6pSt4H","setString"),cc.Class({extends:cc.Component,properties:{},start:function(){this.node.getComponent(cc.Label).string=this.node.parent.getComponent("template").text}}),cc._RF.pop()},{}],setfinalscore:[function(t,e,o){"use strict";cc._RF.push(e,"d6f59suGRdHIr/cZQ8RJZ+i","setfinalscore"),cc.Class({extends:cc.Component,properties:{},start:function(){this.getComponent(cc.Label).string=Globals.score}}),cc._RF.pop()},{}],startCollison:[function(t,e,o){"use strict";cc._RF.push(e,"4ed2aS0xWhGSbtZySBqFcLb","startCollison"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){cc.director.getCollisionManager().enabled=!0},start:function(){}}),cc._RF.pop()},{}],startControl:[function(t,e,o){"use strict";cc._RF.push(e,"36e3a6OrHlIdZ2PY6A7WGBn","startControl"),cc.Class({extends:cc.Component,properties:{canClickStart:0},start:function(){cc.director.preloadScene("main",function(){cc.log("Next scene preloaded")}),document.cookie="P4to6_Rules_and_Authority_Start=1;Path=/;";var t=this;this.getComponent(cc.Animation).scheduleOnce(function(){t.canClickStart=1},12)},clickStart:function(){1==this.canClickStart&&cc.director.loadScene("main")}}),cc._RF.pop()},{}],templateControl:[function(t,e,o){"use strict";cc._RF.push(e,"59919xJmJpAmZTuG6WiqTyj","templateControl"),cc.Class({extends:cc.Component,properties:{templates:[cc.Node]},start:function(){var t=this;t.templates=t.randomSort2(t.templates),t.templates[Globals.templateCount].active=!0,this.getComponent(cc.Animation).schedule(function(){Globals.templateCount<23&&(Globals.templateCount+=1,t.templates[Globals.templateCount].active=!0)},4,20,0)},randomSort2:function(t){for(var e=[];t.length>0;){var o=parseInt(Math.random()*t.length);e.push(t[o]),t.splice(o,1)}return e}}),cc._RF.pop()},{}],template:[function(t,e,o){"use strict";cc._RF.push(e,"e53c61iLS1OFr0iv8wYl09Y","template"),cc.Class({extends:cc.Component,properties:{is_Good:!1,text:"",content:"",currentX:0,currentY:0,destionX:0,destionY:0,thisDeltaX:0,thisDeltaY:0},start:function(){var t=this;this.node.x=this.random(398,700),this.node.y=728,this.currentX=this.node.x,this.currentY=this.node.y,this.destionX=this.random(-130,1100),this.destionY=-175,this.thisDeltaX=(this.destionX-this.currentX)/600,this.thisDeltaY=(this.destionY-this.currentY)/600,this.getComponent(cc.Animation).schedule(function(){t.node.scale+=.0034,t.node.x+=t.thisDeltaX,t.node.y+=t.thisDeltaY},.01,600,0)},random:function(t,e){return Math.floor(Math.random()*(e-t))+t}}),cc._RF.pop()},{}],timer:[function(t,e,o){"use strict";cc._RF.push(e,"6cc01iBG7VImaGHVgXTvzW7","timer"),cc.Class({extends:cc.Component,properties:{},start:function(){var t=this;this.getComponent(cc.Animation).schedule(function(){(Globals.count>0||0==Globals.count)&&(Globals.count-=1,Globals.count<10?t.getComponent(cc.Label).string=":0"+Globals.count.toString():t.getComponent(cc.Label).string=":"+Globals.count.toString())},1,59,.1)}}),cc._RF.pop()},{}]},{},["CarControlButton","CarControlKeyboard","Globals","carEvent","end","endShowWordList","setScore","setString","setfinalscore","startCollison","startControl","template","templateControl","timer"]);