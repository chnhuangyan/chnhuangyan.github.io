window.__require=function t(o,e,n){function c(i,r){if(!e[i]){if(!o[i]){var a=i.split("/");if(a=a[a.length-1],!o[a]){var l="function"==typeof __require&&__require;if(!r&&l)return l(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+i+"'")}}var p=e[i]={exports:{}};o[i][0].call(p.exports,function(t){return c(o[i][1][t]||t)},p,p.exports,t,o,e,n)}return e[i].exports}for(var s="function"==typeof __require&&__require,i=0;i<n.length;i++)c(n[i]);return c}({CarControlButton:[function(t,o,e){"use strict";cc._RF.push(o,"b01a8M8PVtPJZCbwNCqSD5b","CarControlButton"),cc.Class({extends:cc.Component,properties:{car:cc.Node,direction:"",thisDisrection:""},start:function(){var t=this;this.touchMove=this.node.on(cc.Node.EventType.TOUCH_START,function(o){"right"==t.direction&&(t.thisDisrection="right"),"left"==t.direction&&(t.thisDisrection="left")},this.node),this.touchEnd=this.node.on(cc.Node.EventType.TOUCH_END,function(o){t.thisDisrection=""},this.node),this.touchCancel=this.node.on(cc.Node.EventType.TOUCH_CANCEL,function(o){t.thisDisrection=""},this.node)},update:function(t){"right"==this.thisDisrection&&this.car.x<900&&(this.car.x+=5),"left"==this.thisDisrection&&this.car.x>110&&(this.car.x-=5)}}),cc._RF.pop()},{}],CarControlKeyboard:[function(t,o,e){"use strict";cc._RF.push(o,"a057cgX50lB6KEpU3S8fv6n","CarControlKeyboard"),cc.Class({extends:cc.Component,properties:{car:cc.Node},onLoad:function(){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},start:function(){},onKeyDown:function(t){if(this.car.x<830)switch(t.keyCode){case cc.macro.KEY.right:this.car.x+=10}if(this.car.x>194)switch(t.keyCode){case cc.macro.KEY.left:this.car.x-=10}},onKeyUp:function(t){}}),cc._RF.pop()},{}],Globals:[function(t,o,e){"use strict";cc._RF.push(o,"c593cPqqNhFLIPHiXmzf3FN","Globals"),window.Globals={count:60,templateCount:0,score:0,correctcount:0,correct:[],wrong:[]},cc._RF.pop()},{}],carEvent:[function(t,o,e){"use strict";cc._RF.push(o,"10101ajYShLOK+DhRWw1BUx","carEvent"),cc.Class({extends:cc.Component,properties:{goodtips:cc.Node,badtips:cc.Node,timer:cc.Node,score:cc.Node},onLoad:function(){cc.director.getCollisionManager().enabled=!0},start:function(){cc.director.preloadScene("end",function(){cc.log("Next scene preloaded")})},update:function(t){0==Globals.count&&cc.director.loadScene("end"),Globals.count<0&&cc.director.loadScene("end")},onCollisionEnter:function(t,o){1==t.node.parent.getComponent("template").is_Good&&(this.goodtips.getComponent(cc.Label).string=t.node.parent.getComponent("template").content.toUpperCase(),this.timer.getComponent(cc.Animation).play("timergood"),this.score.getComponent(cc.Animation).play("scoregood"),this.goodtips.getComponent(cc.AudioSource).play(),Globals.score=Globals.score+100,Globals.count=Globals.count+6,Globals.correct.push(t.node.parent.getComponent("template").text),this.setNULL(1),Globals.correctcount+=1),0==t.node.parent.getComponent("template").is_Good&&(this.badtips.getComponent(cc.Label).string=t.node.parent.getComponent("template").content.toUpperCase(),this.timer.getComponent(cc.Animation).play("timerbad"),this.score.getComponent(cc.Animation).play("scorebad"),this.badtips.getComponent(cc.AudioSource).play(),Globals.score=Globals.score-50,Globals.count=Globals.count-2,Globals.wrong.push(t.node.parent.getComponent("template").text),this.setNULL(0)),t.node.parent.destroy()},onCollisionStay:function(t,o){},onCollisionExit:function(t,o){},setNULL:function(t){var o=this;1==t&&this.getComponent(cc.Animation).scheduleOnce(function(){o.goodtips.getComponent(cc.Label).string=""},3),0==t&&this.getComponent(cc.Animation).scheduleOnce(function(){o.badtips.getComponent(cc.Label).string=""},3)}}),cc._RF.pop()},{}],endShowWordList:[function(t,o,e){"use strict";cc._RF.push(o,"61a1d3lMaRC04ioymUk+Ew6","endShowWordList"),cc.Class({extends:cc.Component,properties:{isGood:!1},start:function(){if(1==this.isGood){for(var t="",o=0;o<Globals.correct.length;o++)t+=Globals.correct[o]+"\n";this.getComponent(cc.Label).string=t}if(0==this.isGood){for(t="",o=0;o<Globals.wrong.length;o++)t+=Globals.wrong[o]+"\n";this.getComponent(cc.Label).string=t}}}),cc._RF.pop()},{}],end:[function(t,o,e){"use strict";cc._RF.push(o,"fec76j10MFImJ61jyfSq6Aq","end"),cc.Class({extends:cc.Component,properties:{},start:function(){},end_:function(){document.cookie="P4to6_Personal_Hygiene_Start=0;Path=/;"}}),cc._RF.pop()},{}],setScore:[function(t,o,e){"use strict";cc._RF.push(o,"d28b5mhKvNAX4lSq7DBSKs6","setScore"),cc.Class({extends:cc.Component,properties:{},start:function(){var t=this;this.getComponent(cc.Animation).schedule(function(){t.node.getChildByName("showscore").getComponent(cc.Label).string=Globals.score,Globals.score=Globals.score+10},.3,400,0)}}),cc._RF.pop()},{}],setString:[function(t,o,e){"use strict";cc._RF.push(o,"8d342AZcQFDcaV2Nc6pSt4H","setString"),cc.Class({extends:cc.Component,properties:{},start:function(){this.node.getComponent(cc.Label).string=this.node.parent.getComponent("template").text}}),cc._RF.pop()},{}],setfinalscore:[function(t,o,e){"use strict";cc._RF.push(o,"d6f59suGRdHIr/cZQ8RJZ+i","setfinalscore"),cc.Class({extends:cc.Component,properties:{},start:function(){this.getComponent(cc.Label).string=Globals.score}}),cc._RF.pop()},{}],startCollison:[function(t,o,e){"use strict";cc._RF.push(o,"4ed2aS0xWhGSbtZySBqFcLb","startCollison"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){cc.director.getCollisionManager().enabled=!0},start:function(){}}),cc._RF.pop()},{}],startControl:[function(t,o,e){"use strict";cc._RF.push(o,"36e3a6OrHlIdZ2PY6A7WGBn","startControl"),cc.Class({extends:cc.Component,properties:{canClickStart:0},start:function(){cc.director.preloadScene("main",function(){cc.log("Next scene preloaded")}),document.cookie="P4to6_Personal_Hygiene_Start=1;Path=/;";var t=this;this.getComponent(cc.Animation).scheduleOnce(function(){t.canClickStart=1},12)},clickStart:function(){1==this.canClickStart&&cc.director.loadScene("main")}}),cc._RF.pop()},{}],templateControl:[function(t,o,e){"use strict";cc._RF.push(o,"59919xJmJpAmZTuG6WiqTyj","templateControl"),cc.Class({extends:cc.Component,properties:{templates:[cc.Node]},start:function(){var t=this;t.templates=t.randomSort2(t.templates),t.templates[Globals.templateCount].active=!0,this.getComponent(cc.Animation).schedule(function(){Globals.templateCount<23&&(Globals.templateCount+=1,t.templates[Globals.templateCount].active=!0)},4,20,0)},randomSort2:function(t){for(var o=[];t.length>0;){var e=parseInt(Math.random()*t.length);o.push(t[e]),t.splice(e,1)}return o},update:function(t){20==Globals.templateCount&&this.getComponent(cc.Animation).scheduleOnce(function(){cc.director.loadScene("end")},3)}}),cc._RF.pop()},{}],template:[function(t,o,e){"use strict";cc._RF.push(o,"e53c61iLS1OFr0iv8wYl09Y","template"),cc.Class({extends:cc.Component,properties:{is_Good:!1,text:"",content:"",currentX:0,currentY:0,destionX:0,destionY:0,thisDeltaX:0,thisDeltaY:0},start:function(){var t=this;this.node.x=this.random(398,700),this.node.y=728,this.currentX=this.node.x,this.currentY=this.node.y,this.destionX=this.random(-130,1100),this.destionY=-175,this.thisDeltaX=(this.destionX-this.currentX)/600,this.thisDeltaY=(this.destionY-this.currentY)/600,this.getComponent(cc.Animation).schedule(function(){t.node.scale+=.0034,t.node.x+=t.thisDeltaX,t.node.y+=t.thisDeltaY},.01,600,0)},random:function(t,o){return Math.floor(Math.random()*(o-t))+t}}),cc._RF.pop()},{}],timer:[function(t,o,e){"use strict";cc._RF.push(o,"6cc01iBG7VImaGHVgXTvzW7","timer"),cc.Class({extends:cc.Component,properties:{},start:function(){var t=this;this.getComponent(cc.Animation).schedule(function(){(Globals.count>0||0==Globals.count)&&(Globals.count-=1,Globals.count<10?t.getComponent(cc.Label).string=":0"+Globals.count.toString():t.getComponent(cc.Label).string=":"+Globals.count.toString())},1,500,.1)}}),cc._RF.pop()},{}]},{},["CarControlButton","CarControlKeyboard","Globals","carEvent","end","endShowWordList","setScore","setString","setfinalscore","startCollison","startControl","template","templateControl","timer"]);