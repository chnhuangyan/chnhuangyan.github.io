window.__require=function o(a,t,c){function n(r,s){if(!t[r]){if(!a[r]){var i=r.split("/");if(i=i[i.length-1],!a[i]){var e="function"==typeof __require&&__require;if(!s&&e)return e(i,!0);if(l)return l(i,!0);throw new Error("Cannot find module '"+r+"'")}}var d=t[r]={exports:{}};a[r][0].call(d.exports,function(o){return n(a[r][1][o]||o)},d,d.exports,o,a,t,c)}return t[r].exports}for(var l="function"==typeof __require&&__require,r=0;r<c.length;r++)n(c[r]);return n}({Badbutton:[function(o,a,t){"use strict";cc._RF.push(a,"c1208seRTxCSqibzIq7LN7W","Badbutton"),cc.Class({extends:cc.Component,properties:{arrow:cc.Node},onLoad:function(){var o=this;this.node.on(cc.Node.EventType.MOUSE_ENTER,function(a){o.arrow.opacity=255},this.node),this.node.on(cc.Node.EventType.MOUSE_LEAVE,function(a){o.arrow.opacity=0},this.node)},start:function(){}}),cc._RF.pop()},{}],Globals:[function(o,a,t){"use strict";cc._RF.push(a,"fc2de5BlJNNMbdQxJXk/WHL","Globals"),window.Globals={currentCardID:-1,countCard:0,myarray:[],clickvalue:0,animationControl:0,cargoodcontrol:1,carbadcontrol:1,canClick:1,SrartControl:0,countcardBad:0},cc._RF.pop()},{}],Goodbutton:[function(o,a,t){"use strict";cc._RF.push(a,"2854dqkl5pJP79r9ZrxRn4O","Goodbutton"),cc.Class({extends:cc.Component,properties:{arrow:cc.Node},onLoad:function(){var o=this;this.node.on(cc.Node.EventType.MOUSE_ENTER,function(a){o.arrow.opacity=255},this.node),this.node.on(cc.Node.EventType.MOUSE_LEAVE,function(a){o.arrow.opacity=0},this.node)},start:function(){}}),cc._RF.pop()},{}],Start1Control:[function(o,a,t){"use strict";cc._RF.push(a,"897fdMfi9hEK6FU4aEUhRHH","Start1Control"),cc.Class({extends:cc.Component,properties:{strat1control:cc.Node,sratr2control:cc.Node,control:0},start:function(){if(1==this.control){document.cookie="ImportanceRulesControl=0;Path=/;";this.strat1control.getComponent(cc.Animation).scheduleOnce(function(){this.node.destroy()},7),this.sratr2control.getComponent(cc.Animation).scheduleOnce(function(){Globals.SrartControl=1,this.node.destroy()},20)}else this.strat1control.destroy(),this.sratr2control.destroy(),Globals.SrartControl=1}}),cc._RF.pop()},{}],card:[function(o,a,t){"use strict";cc._RF.push(a,"24ec2marq9Ij4gZT62E8Sjb","card"),cc.Class({extends:cc.Component,properties:{cardID:-1},start:function(){}}),cc._RF.pop()},{}],clickevent:[function(o,a,t){"use strict";cc._RF.push(a,"7c299raYQBObYG1CQXpgHIF","clickevent"),cc.Class({extends:cc.Component,properties:{sound:[cc.AudioSource]},start:function(){},clickevent_Good:function(){1==Globals.canClick&&1==Globals.SrartControl&&(Globals.clickvalue=1)},clickevent_Bad:function(){1==Globals.canClick&&1==Globals.SrartControl&&(Globals.clickvalue=2)},playBad:function(){1==Globals.canClick&&1==Globals.SrartControl&&this.sound[0].play()},playGood:function(){1==Globals.canClick&&1==Globals.SrartControl&&this.sound[1].play()}}),cc._RF.pop()},{}],maincontrol:[function(o,a,t){"use strict";cc._RF.push(a,"62d67a434BN6JbxtW8aD9Mz","maincontrol"),cc.Class({extends:cc.Component,properties:{card:[cc.Node],sound:[cc.AudioSource],carAnim:[cc.Animation],star:[cc.Node]},start:function(){Globals.carbadcontrol=1,Globals.myarray=this.randomSort2([0,1,2,3,4,5])},randomSort2:function(o){for(var a=[];o.length>0;){var t=parseInt(Math.random()*o.length);a.push(o[t]),o.splice(t,1)}return a},update:function(o){Globals.currentCardID==Globals.myarray[Globals.countCard]&&1==Globals.SrartControl&&Globals.countCard<6?this.is_Good_or_Bad():Globals.countCard<6&&0==Globals.animationControl&&1==Globals.SrartControl&&(Globals.currentCardID=Globals.myarray[Globals.countCard],this.card[Globals.currentCardID].getComponent(cc.Animation).play(),this.sound[3].play())},is_Good_or_Bad:function(){if(0==Globals.currentCardID|1==Globals.currentCardID|2==Globals.currentCardID){if(1==Globals.clickvalue){var o=this;this.sound[1].play(),Globals.myarray.splice(Globals.countCard,1),Globals.myarray.push(Globals.currentCardID),this.card[Globals.currentCardID].getComponent(cc.Animation).play("card"+(Globals.currentCardID+1)+"back"),Globals.animationControl=1,Globals.canClick=0,this.getComponent(cc.Animation).scheduleOnce(function(){Globals.animationControl=0,o.card[Globals.currentCardID].opacity=255,5==Globals.countCard&&(o.card[Globals.currentCardID].getComponent(cc.Animation).play("card"+(Globals.currentCardID+1)+"appear"),o.sound[3].play()),Globals.canClick=1},2),Globals.countcardBad=Globals.countcardBad+1;o=this;this.getComponent(cc.Animation).scheduleOnce(function(){o.carAnim[1].play("carbad"+Globals.carbadcontrol),Globals.carbadcontrol=Globals.carbadcontrol+1},1),Globals.clickvalue=0}else if(2==Globals.clickvalue){this.star[Globals.cargoodcontrol-1].opacity=255,this.star[Globals.cargoodcontrol-1].getComponent(cc.Animation).play("star");o=this;Globals.animationControl=1,this.sound[0].play(),this.carAnim[0].play("cargood"+Globals.cargoodcontrol),Globals.canClick=0,Globals.cargoodcontrol=Globals.cargoodcontrol+1,this.getComponent(cc.Animation).scheduleOnce(function(){Globals.animationControl=0,Globals.canClick=1},1),Globals.clickvalue=0,Globals.countCard=Globals.countCard+1,this.card[Globals.currentCardID].destroy()}}else if(1==Globals.clickvalue){this.star[Globals.cargoodcontrol-1].opacity=255,this.star[Globals.cargoodcontrol-1].getComponent(cc.Animation).play("star");o=this;Globals.animationControl=1,this.sound[0].play(),this.carAnim[0].play("cargood"+Globals.cargoodcontrol),Globals.cargoodcontrol=Globals.cargoodcontrol+1,Globals.canClick=0,this.getComponent(cc.Animation).scheduleOnce(function(){Globals.animationControl=0,Globals.canClick=1},1),Globals.clickvalue=0,Globals.countCard=Globals.countCard+1,this.card[Globals.currentCardID].destroy()}else if(2==Globals.clickvalue){o=this,o=this;this.getComponent(cc.Animation).scheduleOnce(function(){o.carAnim[1].play("carbad"+Globals.carbadcontrol),Globals.carbadcontrol=Globals.carbadcontrol+1},1),this.sound[1].play(),Globals.myarray.splice(Globals.countCard,1),Globals.myarray.push(Globals.currentCardID),Globals.canClick=0,this.card[Globals.currentCardID].getComponent(cc.Animation).play("card"+(Globals.currentCardID+1)+"back"),Globals.countcardBad=Globals.countcardBad+1,Globals.animationControl=1,this.getComponent(cc.Animation).scheduleOnce(function(){Globals.animationControl=0,Globals.canClick=1,o.card[Globals.currentCardID].opacity=255,5==Globals.countCard&&(o.card[Globals.currentCardID].getComponent(cc.Animation).play("card"+(Globals.currentCardID+1)+"appear"),o.sound[3].play())},2),Globals.clickvalue=0}(6==Globals.countCard||Globals.countCard>6)&&this.getComponent(cc.Animation).scheduleOnce(function(){document.cookie="ImportanceRulesControl=1;Path=/;",Globals.countCard=-1},3),(6==Globals.countcardBad||Globals.countcardBad>6)&&this.getComponent(cc.Animation).scheduleOnce(function(){document.cookie="ImportanceRulesControl=1;Path=/;",Globals.countcardBad=-1},3)}}),cc._RF.pop()},{}]},{},["Badbutton","Globals","Goodbutton","Start1Control","card","clickevent","maincontrol"]);