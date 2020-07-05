window.__require=function t(o,n,e){function c(s,r){if(!n[s]){if(!o[s]){var a=s.split("/");if(a=a[a.length-1],!o[a]){var l="function"==typeof __require&&__require;if(!r&&l)return l(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+s+"'")}}var p=n[s]={exports:{}};o[s][0].call(p.exports,function(t){return c(o[s][1][t]||t)},p,p.exports,t,o,n,e)}return n[s].exports}for(var i="function"==typeof __require&&__require,s=0;s<e.length;s++)c(e[s]);return c}({Globals:[function(t,o,n){"use strict";cc._RF.push(o,"c5420bVf6tDt5MMW/ffXNKI","Globals"),window.Globals={timecount:60,count:0,status:0,CorrectCount:0,WrongCount:0,correct:[],wrong:[]},cc._RF.pop()},{}],UIplayerPositionControl:[function(t,o,n){"use strict";cc._RF.push(o,"a0d93GqkCBNnoxRKfS+j74B","UIplayerPositionControl"),cc.Class({extends:cc.Component,properties:{player:cc.Node,attribute:"",thisMoveDirection:""},start:function(){var t=this;this.touchstart=this.node.on(cc.Node.EventType.TOUCH_START,function(o){"left"==t.attribute?t.thisMoveDirection="left":"right"==t.attribute&&(t.thisMoveDirection="right"),console.log("UI touching: "+this.thisMoveDirection)},this.node),this.touchEnd=this.node.on(cc.Node.EventType.TOUCH_END,function(o){t.thisMoveDirection=""},this.node),this.touchCancel=this.node.on(cc.Node.EventType.TOUCH_CANCEL,function(o){t.thisMoveDirection=""},this.node)},update:function(t){"left"==this.thisMoveDirection&&this.player.x>-365?this.player.x-=10:"right"==this.thisMoveDirection&&this.player.x<375?this.player.x+=10:this.thisMoveDirection=""}}),cc._RF.pop()},{}],WallSound:[function(t,o,n){"use strict";cc._RF.push(o,"5cadaZvVphJGIsFFxT0clJa","WallSound"),cc.Class({extends:cc.Component,properties:{},start:function(){},onBeginContact:function(t,o,n){this.getComponent(cc.AudioSource).play()}}),cc._RF.pop()},{}],ballAttribute:[function(t,o,n){"use strict";cc._RF.push(o,"233e2nj2Z5Eerhg+sRC4maN","ballAttribute"),cc.Class({extends:cc.Component,properties:{is_Good:!1,textContent:"",description:""},start:function(){this.node.getChildByName("text").getComponent(cc.Label).string=this.textContent;var t=this;this.getComponent(cc.RigidBody).scheduleOnce(function(){t.node.destroy()},10)},random:function(t,o){return Math.floor(Math.random()*(o-t))+t}}),cc._RF.pop()},{}],ballTemplateControl:[function(t,o,n){"use strict";cc._RF.push(o,"713e9EOZZhAT7DanCDPx0Il","ballTemplateControl"),cc.Class({extends:cc.Component,properties:{ballSets:[cc.Node],ballActive:!0},start:function(){this.ballSets=this.randomSort2(this.ballSets),1==this.ballActive&&(this.ballSets[Globals.count].active=!0)},update:function(t){if(1==this.ballActive&&Globals.count<23){var o=this;this.ballActive=!1,this.getComponent(cc.Animation).scheduleOnce(function(){Globals.count+=1,o.ballSets[Globals.count].active=!0,o.ballActive=!0},this.random(2,6))}},randomSort2:function(t){for(var o=[];t.length>0;){var n=parseInt(Math.random()*t.length);o.push(t[n]),t.splice(n,1)}return o},random:function(t,o){return Math.floor(Math.random()*(o-t))+t}}),cc._RF.pop()},{}],block:[function(t,o,n){"use strict";cc._RF.push(o,"5bd43hjwsxHyLe8izdkto0v","block"),cc.Class({extends:cc.Component,properties:{player:cc.Node},start:function(){var t=this;this.touchstart=this.node.on(cc.Node.EventType.TOUCH_START,function(o){Globals.status=1,t.player.getComponent(cc.Animation).play("block")},this.node),this.touchEnd=this.node.on(cc.Node.EventType.TOUCH_END,function(o){Globals.status=0,t.player.getComponent(cc.Animation).play("reset")},this.node),this.touchCancel=this.node.on(cc.Node.EventType.TOUCH_CANCEL,function(o){Globals.status=0,t.player.getComponent(cc.Animation).play("reset")},this.node)}}),cc._RF.pop()},{}],continue:[function(t,o,n){"use strict";cc._RF.push(o,"cf365BJVXBI8IIjqt1HFO43","continue"),cc.Class({extends:cc.Component,properties:{},start:function(){},continue_:function(){cc.director.resume(),this.node.parent.opacity=0}}),cc._RF.pop()},{}],counttime:[function(t,o,n){"use strict";cc._RF.push(o,"cf03ed3YaBGVavj00DHG8ri","counttime"),cc.Class({extends:cc.Component,properties:{count:60},start:function(){var t=this;this.getComponent(cc.Animation).schedule(function(){Globals.timecount>0&&(Globals.timecount=Globals.timecount-1,Globals.timecount>9?t.getComponent(cc.Label).string=Globals.timecount:t.getComponent(cc.Label).string="0"+Globals.timecount)},1,60,.1)}}),cc._RF.pop()},{}],end:[function(t,o,n){"use strict";cc._RF.push(o,"44fefAL5jJAh5G0f9cts1rA","end"),cc.Class({extends:cc.Component,properties:{},start:function(){},end_:function(){document.cookie="P4to6_anger_Start=0;Path=/;"}}),cc._RF.pop()},{}],gravity:[function(t,o,n){"use strict";cc._RF.push(o,"6f1a68zLaRCqZ4DhUpUWb3K","gravity"),cc.Class({extends:cc.Component,properties:{},start:function(){this.node.x<470&&(cc.director.getPhysicsManager().gravity=cc.v2(this.random(30,80),-this.random(400,700))),this.node.x>470&&(cc.director.getPhysicsManager().gravity=cc.v2(this.random(-80,-30),-this.random(400,700)))},random:function(t,o){return Math.floor(Math.random()*(o-t))+t}}),cc._RF.pop()},{}],physics:[function(t,o,n){"use strict";cc._RF.push(o,"713d8c+SIxF3KG+lcVE2Kq/","physics"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){cc.director.getPhysicsManager().enabled=!0},start:function(){}}),cc._RF.pop()},{}],playagain:[function(t,o,n){"use strict";cc._RF.push(o,"473f1M4xJFK57weFsNv96xc","playagain"),cc.Class({extends:cc.Component,properties:{},start:function(){cc.director.preloadScene("main",function(){cc.log("Next scene preloaded")})},again:function(){Globals.timecount=60,Globals.count=0,Globals.status=0,Globals.CorrectCount=0,Globals.WrongCount=0,Globals.correct=[],Globals.wrong=[],cc.director.loadScene("main")}}),cc._RF.pop()},{}],playerCollisionEvent:[function(t,o,n){"use strict";cc._RF.push(o,"d3952z/juZAQb/jsfVlqjeE","playerCollisionEvent"),cc.Class({extends:cc.Component,properties:{tips:cc.Node},onLoad:function(){cc.director.preloadScene("playagain",function(){cc.log("Next scene preloaded")}),cc.director.preloadScene("end",function(){cc.log("Next scene preloaded")})},start:function(){},onBeginContact:function(t,o,n){0==Globals.status&&Globals.WrongCount<6&&Globals.timecount>0&&(this.tips.opacity=255,1==n.node.getComponent("ballAttribute").is_Good&&(this.node.parent.getComponent(cc.AudioSource).play(),this.tips.getChildByName("text").getComponent(cc.Label).string="Great!\n"+n.node.getComponent("ballAttribute").description.toUpperCase(),Globals.correct.push(n.node.getComponent("ballAttribute").textContent),Globals.CorrectCount+=1),0==n.node.getComponent("ballAttribute").is_Good&&(this.getComponent(cc.AudioSource).play(),this.tips.getChildByName("text").getComponent(cc.Label).string="WHOOPS!\n"+n.node.getComponent("ballAttribute").description.toUpperCase(),Globals.wrong.push(n.node.getComponent("ballAttribute").textContent),Globals.WrongCount+=1),n.node.destroy(),cc.director.pause())},onEndContact:function(t,o,n){},onPreSolve:function(t,o,n){},onPostSolve:function(t,o,n){},update:function(t){Globals.WrongCount>5?(console.log("play again"),cc.director.loadScene("playagain")):0==Globals.timecount&&Globals.CorrectCount>3?cc.director.loadScene("end"):0==Globals.timecount&&(console.log("time out - play again"),cc.director.loadScene("playagain"))}}),cc._RF.pop()},{}],playerPositionControl:[function(t,o,n){"use strict";cc._RF.push(o,"b2e51APlutKlbxDZWlbPPT+","playerPositionControl"),cc.Class({extends:cc.Component,properties:{},start:function(){this.touchMove=this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var o=t.touch.getDelta();this.x+=o.x},this.node)}}),cc._RF.pop()},{}],serRotation:[function(t,o,n){"use strict";cc._RF.push(o,"40600A0xTVNVZB17HL/Z+4Q","serRotation"),cc.Class({extends:cc.Component,properties:{},start:function(){},update:function(t){this.node.angle=0}}),cc._RF.pop()},{}],setEndstring:[function(t,o,n){"use strict";cc._RF.push(o,"60528XT5dRMbKMuIyRAjjjJ","setEndstring"),cc.Class({extends:cc.Component,properties:{is_good:!1},start:function(){if(0==this.is_good){for(var t="",o=0;o<Globals.wrong.length;o++)t+=Globals.wrong[o]+"\n";this.getComponent(cc.Label).string=t}if(1==this.is_good){for(t="",o=0;o<Globals.correct.length;o++)t+=Globals.correct[o]+"\n";this.getComponent(cc.Label).string=t}}}),cc._RF.pop()},{}],startControl:[function(t,o,n){"use strict";cc._RF.push(o,"30074bTz+RLlpGKB2ePxcna","startControl"),cc.Class({extends:cc.Component,properties:{isStart:!1},start:function(){cc.director.preloadScene("main",function(){cc.log("Next scene preloaded")}),document.cookie="P4to6_anger_Start=1;Path=/;";var t=this;this.getComponent(cc.Animation).scheduleOnce(function(){t.isStart=!0},15)},startclick:function(){1==this.isStart?cc.director.loadScene("main"):console.log("playing the start audio")}}),cc._RF.pop()},{}]},{},["Globals","UIplayerPositionControl","ballAttribute","ballTemplateControl","gravity","playerCollisionEvent","playerPositionControl","WallSound","block","continue","counttime","end","physics","playagain","serRotation","setEndstring","startControl"]);