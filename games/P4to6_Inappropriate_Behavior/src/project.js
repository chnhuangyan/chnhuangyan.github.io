window.__require=function t(n,o,e){function i(s,r){if(!o[s]){if(!n[s]){var a=s.split("/");if(a=a[a.length-1],!n[a]){var l="function"==typeof __require&&__require;if(!r&&l)return l(a,!0);if(c)return c(a,!0);throw new Error("Cannot find module '"+s+"'")}}var p=o[s]={exports:{}};n[s][0].call(p.exports,function(t){return i(n[s][1][t]||t)},p,p.exports,t,n,o,e)}return o[s].exports}for(var c="function"==typeof __require&&__require,s=0;s<e.length;s++)i(e[s]);return i}({Globals:[function(t,n,o){"use strict";cc._RF.push(n,"0cf74e+P4BK+7h/Mmd7tVAb","Globals"),window.Globals={wrongcount:0,correctcount:0,wrongwords:[],correctwords:[]},cc._RF.pop()},{}],clickLight:[function(t,n,o){"use strict";cc._RF.push(n,"baf37wffEhOlrhmKJJXsUVi","clickLight"),cc.Class({extends:cc.Component,properties:{thisLighting:!1,light:cc.Node},start:function(){var t=this;this.node.on(cc.Node.EventType.TOUCH_START,function(n){0==t.thisLighting&&(t.light.getComponent(cc.Animation).play(),t.thisLighting=!0)},this),this.node.on(cc.Node.EventType.TOUCH_END,function(n){t.thisLighting=!1,t.light.getComponent(cc.Animation).getAnimationState("light").time=0,t.light.getComponent(cc.Animation).getAnimationState("light").sample(),t.light.getComponent(cc.Animation).stop()},this)},clickLight:function(){this.light.getComponent(cc.Animation).play()}}),cc._RF.pop()},{}],endControl:[function(t,n,o){"use strict";cc._RF.push(n,"4e4e2Xv7TdMo5GNmXHaOUuA","endControl"),cc.Class({extends:cc.Component,properties:{goodState:!1,tips:!1},start:function(){if(0==this.goodState&&1==this.tips){for(var t="",n=0;n<Globals.wrongwords.length;n++)t+=Globals.wrongwords[n]+"\n";this.getComponent(cc.Label).string=t}if(1==this.goodState&&1==this.tips){for(t="",n=0;n<Globals.correctwords.length;n++)t+=Globals.correctwords[n]+"\n";this.getComponent(cc.Label).string=t}},clilkend:function(){document.cookie="P4to6_Inappropriate_Behavior_Start=0;Path=/;"}}),cc._RF.pop()},{}],pestTemplate:[function(t,n,o){"use strict";cc._RF.push(n,"b64afVSsXNGK6paegqadFrI","pestTemplate"),cc.Class({extends:cc.Component,properties:{destion_x:0,destion_y:0,destion_x_x:0,destion_y_y:0,AnimationState:1,good_or_bad:cc.Node,goodState:!1,shortString:"",fullString:""},onLoad:function(){cc.director.getCollisionManager().enabled=!0},start:function(){},onCollisionEnter:function(t,n){0==this.goodState&&(Globals.wrongcount+=1,Globals.wrongwords.push(this.shortString),console.log(Globals.wrongwords)),1==this.goodState&&(Globals.correctcount+=1,Globals.correctwords.push(this.shortString),console.log(Globals.correctwords)),this.AnimationState=0,this.good_or_bad.getComponent(cc.Label).string=this.fullString,this.good_or_bad.getComponent(cc.AudioSource).play(),this.good_or_bad.getComponent(cc.Animation).play();n=this;this.getComponent(cc.Animation).scheduleOnce(function(){n.good_or_bad.getComponent(cc.Label).string==n.fullString&&(n.good_or_bad.getComponent(cc.Label).string="")},3);var o=this.random(-452,518),e=this.random(-452,-200),i=(o-this.node.x)/20,c=(e-this.node.y)/20;this.getComponent(cc.Animation).play("pestEnd"),this.getComponent(cc.Animation).schedule(function(){n.node.x+=i,n.node.y+=c},.1,20,.1),this.getComponent(cc.CircleCollider).destroy()},onCollisionStay:function(t,n){},onCollisionExit:function(t,n){},random:function(t,n){return Math.floor(Math.random()*(n-t))+t},activeAnimation:function(){var t=this,n=this.random(0,100),o=0,e=0;n%3==0&&(o=this.random(-587,608),e=444),n%3==1&&(o=-592,e=this.random(12,421)),n%3==2&&(o=584,e=this.random(12,421)),this.node.x=o,this.node.y=e;var i=this.random(-359,359),c=this.random(-79,200),s=(i-this.node.x)/120,r=(c-this.node.y)/120;this.destion_x=s,this.destion_y=r;var a=cc.v2(i-o,c-e),l=cc.v2(1,0),p=a.signAngle(l),d=cc.misc.radiansToDegrees(p)+90;this.node.getChildByName("pestPIC").angle=-d,this.getComponent(cc.Animation).schedule(function(){t.node.x+=t.destion_x,t.node.y+=t.destion_y},.05,120,.1)},quitAnimation:function(){if(1==this.AnimationState){var t=this,n=this.random(0,100),o=0,e=0;n%3==0&&(o=this.random(-587,608),e=500),n%3==1&&(o=-700,e=this.random(12,500)),n%3==2&&(o=700,e=this.random(12,500));var i=(o-this.node.x)/120,c=(e-this.node.y)/120;this.destion_x_x=i,this.destion_y_y=c;var s=cc.v2(o-this.node.x,e-this.node.y),r=cc.v2(1,0),a=s.signAngle(r),l=cc.misc.radiansToDegrees(a)+90;this.node.getChildByName("pestPIC").angle=-l;this.getComponent(cc.Animation).schedule(function(){0!=t.AnimationState&&(t.node.x+=t.destion_x_x,t.node.y+=t.destion_y_y)},.05,120,.1)}},update:function(t){}}),cc._RF.pop()},{}],pestappearControl:[function(t,n,o){"use strict";cc._RF.push(n,"b6490XGeANBKJTMti8kfm/J","pestappearControl"),cc.Class({extends:cc.Component,properties:{isSetaSchedule:!0,pest:[cc.Node]},start:function(){var t=this.random(0,20),n=this.pest[t];this.pest[t].getComponent("pestTemplate").activeAnimation(),this.pest[t].getComponent(cc.Animation).scheduleOnce(function(){n.getComponent("pestTemplate").quitAnimation()},6)},update:function(t){if(1==this.isSetaSchedule){var n=this;this.isSetaSchedule=!1,this.getComponent(cc.Animation).scheduleOnce(function(){n.isSetaSchedule=!0,n.startAnim()},this.random(2,5))}},random:function(t,n){return Math.floor(Math.random()*(n-t))+t},startAnim:function(){var t=this.random(0,20),n=this.pest[t];Globals.wrongcount>3&&(0==this.pest[t].getComponent("pestTemplate").goodState&&(this.pest[t].getChildByName("text").getComponent(cc.LabelOutline).color=cc.Color.RED),1==this.pest[t].getComponent("pestTemplate").goodState&&(this.pest[t].getChildByName("text").getComponent(cc.LabelOutline).color=cc.Color.GREEN)),this.pest[t].getComponent("pestTemplate").activeAnimation(),this.pest[t].getComponent(cc.Animation).scheduleOnce(function(){n.getComponent("pestTemplate").quitAnimation()},6)}}),cc._RF.pop()},{}],playagain:[function(t,n,o){"use strict";cc._RF.push(n,"adf070H6CBPq7Gm2J7BZKpV","playagain"),cc.Class({extends:cc.Component,properties:{},start:function(){cc.director.preloadScene("main",function(){cc.log("Next scene preloaded")})},againClick:function(){Globals.wrongcount=0,Globals.correctcount=0,Globals.wrongwords=[],Globals.correctwords=[],cc.director.loadScene("main")}}),cc._RF.pop()},{}],playerControl:[function(t,n,o){"use strict";cc._RF.push(n,"6bc0eqtYrpMorgYlSksqT98","playerControl"),cc.Class({extends:cc.Component,properties:{player:cc.Node,LeftOrRight:"none",isRunningDirection:""},onLoad:function(){var t=this;this.node.on(cc.Node.EventType.TOUCH_START,function(n){"left"==t.LeftOrRight?t.player.x>58.29?t.isRunningDirection="left":t.isRunningDirection:t.player.x<953?t.isRunningDirection="right":this.isRunningDirection},this),this.node.on(cc.Node.EventType.TOUCH_END,function(n){t.isRunningDirection=""},this),this.node.on(cc.Node.EventType.TOUCH_CANCEL,function(n){t.isRunningDirection=""},this)},start:function(){},update:function(t){"left"==this.isRunningDirection?this.player.x>58.29?this.player.x-=5:this.isRunningDirection:"right"==this.isRunningDirection&&(this.player.x<953?this.player.x+=5:this.isRunningDirection)}}),cc._RF.pop()},{}],player:[function(t,n,o){"use strict";cc._RF.push(n,"e47adQoyYBIsqYpK+WOBQDP","player"),cc.Class({extends:cc.Component,properties:{light:cc.Node},onLoad:function(){cc.director.getCollisionManager().enabled=!0},start:function(){},onCollisionEnter:function(t,n){this.light.getComponent(cc.Animation).getAnimationState("light").time=0,this.light.getComponent(cc.Animation).getAnimationState("light").sample(),this.light.getComponent(cc.Animation).stop()},onCollisionStay:function(t,n){},onCollisionExit:function(t,n){}}),cc._RF.pop()},{}],sceneControl:[function(t,n,o){"use strict";cc._RF.push(n,"4017cXZ12pLHJZBaPFO9lJD","sceneControl"),cc.Class({extends:cc.Component,properties:{},start:function(){cc.director.preloadScene("end",function(){cc.log("Next scene preloaded")}),cc.director.preloadScene("playagain",function(){cc.log("Next scene preloaded")})},update:function(t){7==Globals.correctcount&&this.getComponent(cc.Animation).scheduleOnce(function(){cc.director.loadScene("end")},2),5==Globals.wrongcount&&this.getComponent(cc.Animation).scheduleOnce(function(){cc.director.loadScene("playagain")},2)}}),cc._RF.pop()},{}],setString:[function(t,n,o){"use strict";cc._RF.push(n,"2025fBeKZZB54iIa1/G5k5J","setString"),cc.Class({extends:cc.Component,properties:{colored:!1},start:function(){this.getComponent(cc.Label).string=this.node.parent.getComponent("pestTemplate").shortString},update:function(t){}}),cc._RF.pop()},{}],startClick:[function(t,n,o){"use strict";cc._RF.push(n,"c911frF3+dAgqx3WhrHtAHB","startClick"),cc.Class({extends:cc.Component,properties:{clickable:!1},start:function(){document.cookie="P4to6_Inappropriate_Behavior_Start=1;Path=/;",cc.director.preloadScene("main",function(){cc.log("Next scene preloaded")});var t=this;this.getComponent(cc.Animation).scheduleOnce(function(){t.clickable=!0},16)},startClick:function(){1==this.clickable&&cc.director.loadScene("main")}}),cc._RF.pop()},{}],tipsControl:[function(t,n,o){"use strict";cc._RF.push(n,"1829dEKvQ1Iq5X4XKGoROmi","tipsControl"),cc.Class({extends:cc.Component,properties:{},start:function(){this.getComponent(cc.Label).string=""}}),cc._RF.pop()},{}],vol:[function(t,n,o){"use strict";cc._RF.push(n,"ec790J8mexN3otI+zZ5Nryq","vol"),cc.Class({extends:cc.Component,properties:{},start:function(){this.getComponent(cc.AudioSource).volume=30}}),cc._RF.pop()},{}]},{},["Globals","setString","vol","clickLight","endControl","pestTemplate","pestappearControl","playagain","player","playerControl","sceneControl","startClick","tipsControl"]);