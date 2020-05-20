window.__require=function t(o,c,i){function s(n,r){if(!c[n]){if(!o[n]){var e=n.split("/");if(e=e[e.length-1],!o[e]){var d="function"==typeof __require&&__require;if(!r&&d)return d(e,!0);if(a)return a(e,!0);throw new Error("Cannot find module '"+n+"'")}}var l=c[n]={exports:{}};o[n][0].call(l.exports,function(t){return s(o[n][1][t]||t)},l,l.exports,t,o,c,i)}return c[n].exports}for(var a="function"==typeof __require&&__require,n=0;n<i.length;n++)s(i[n]);return s}({CardMove:[function(t,o,c){"use strict";cc._RF.push(o,"7cf81lc44xPpKCnusOw+VWg","CardMove"),cc.Class({extends:cc.Component,properties:{GreenBG:cc.Node,ID:1,anim:cc.Animation,CardselfID1to6:0,box:cc.BoxCollider,touchMove:null,touchEnd:null,touchCancel:null,Wrong:cc.AudioSource,Correct:cc.AudioSource},onLoad:function(){var t=this;this.touchMove=this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){if(1==Globals.isdrag){this.opacity=255;var o=t.touch.getDelta();this.x+=o.x,this.y+=o.y,Globals.isTouch=1}},this.node),this.touchEnd=this.node.on(cc.Node.EventType.TOUCH_END,function(o){1==Globals.isdrag&&(t.anim.play("card"+t.CardselfID1to6+"cancel"),0==Globals.isCollision&&t.anim.scheduleOnce(function(){t.Wrong.play(),t.node.setSiblingIndex(Globals.index+3)},.4),this.x=30,this.y=61,Globals.isTouch=0)},this.node),this.touchCancel=this.node.on(cc.Node.EventType.TOUCH_CANCEL,function(t){1==Globals.isdrag&&(this.x=30,this.y=61)},this.node)},start:function(){cc.director.getCollisionManager().enabled=!0},onCollisionEnter:function(t,o){Globals.ID=this.CardselfID1to6,this.GreenBG.opacity=255,1==t.tag&&1==this.ID&&(Globals.isCollision=1),2==t.tag&&2==this.ID&&(Globals.isCollision=1)},onCollisionExit:function(t,o){this.GreenBG.opacity=0,Globals.isCollision=0},update:function(t){if(1==Globals.isCollision&&0==Globals.isTouch&&Globals.ID==this.CardselfID1to6){Globals.isCollision=0,Globals.isTouch=0,Globals.ID=0,this.ID=0,this.CardselfID1to6=100,Globals.index+=1,this.node.off(cc.Node.EventType.TOUCH_MOVE,this.touchMove,this.node),this.node.off(cc.Node.EventType.TOUCH_END,this.touchEnd,this.node),this.node.off(cc.Node.EventType.TOUCH_CANCEL,this.touchCancel,this.node),this.anim.play(),this.Correct.play(),Globals.isdrag=0;var o=this;this.anim.scheduleOnce(function(){o.node.setSiblingIndex(1)},1),this.anim.scheduleOnce(function(){Globals.isdrag=1},1.7)}}}),cc._RF.pop()},{}],GameManagement:[function(t,o,c){"use strict";cc._RF.push(o,"03ee3EFBtVFdqafOw8AJIwK","GameManagement"),cc.Class({extends:cc.Component,properties:{setgray_control:0,card_ID:0,card_count:0,WrongSound:cc.AudioSource,CorrectSound:cc.AudioSource,clip:cc.AudioSource,CardList:[cc.Node],CardControl1:cc.Node,CardControl11:cc.Node,CardControl2:cc.Node,CardControl22:cc.Node,CardControl3:cc.Node,CardControl33:cc.Node,CardControl4:cc.Node,CardControl44:cc.Node,CardControl5:cc.Node,CardControl55:cc.Node,CardControl6:cc.Node,CardControl66:cc.Node,CardMask1:cc.Node,CardMask11:cc.Node,CardMask2:cc.Node,CardMask22:cc.Node,CardMask3:cc.Node,CardMask33:cc.Node,CardMask4:cc.Node,CardMask44:cc.Node,CardMask5:cc.Node,CardMask55:cc.Node,CardMask6:cc.Node,CardMask66:cc.Node,animatin:cc.Animation,totalMacthedCount:0,setgrayID:0,overallcontrolEndANIMATION:cc.Animation},start:function(){cc.director.preloadScene("SecondScene",function(){});var t=new Date;this.InitPositions(t.getMilliseconds()%3)},GetCard_ID:function(t,o){if(this.clip.play(),o==this.card_ID)return 0;if(this.card_count+=1,1==this.card_count)this.card_ID=o;else if(2==this.card_count)if(this.card_ID==10*o|10*this.card_ID==o){if(this.destroyControl(o),this.card_count=0,this.setgrayID=o,this.animatin.scheduleOnce(function(){Globals.setgray=1},1),this.totalMacthedCount+=1,6==this.totalMacthedCount){var c=this;this.animatin.scheduleOnce(function(){c.overallcontrolEndANIMATION.play(),c.animatin.scheduleOnce(function(){cc.director.loadScene("SecondScene")},1)},1)}}else{c=this;var i=this.card_ID;this.animatin.scheduleOnce(function(){c.WrongSound.play(),c.resetAnimation(o),c.resetAnimation(i)},1),this.card_ID=0,this.card_count=0}return 1},setGray:function(t){t>9&&(t/=10),Globals.setgray=0,1==t&&(this.CardMask1.opacity=150,this.CardMask11.opacity=150),2==t&&(this.CardMask2.opacity=150,this.CardMask22.opacity=150),3==t&&(this.CardMask3.opacity=150,this.CardMask33.opacity=150),4==t&&(this.CardMask4.opacity=150,this.CardMask44.opacity=150),5==t&&(this.CardMask5.opacity=150,this.CardMask55.opacity=150),6==t&&(this.CardMask6.opacity=150,this.CardMask66.opacity=150)},destroyControl:function(t){t>9&&(t/=10),Globals.setgray=0,1==t&&(this.CardControl1.destroy(),this.CardControl11.destroy()),2==t&&(this.CardControl2.destroy(),this.CardControl22.destroy()),3==t&&(this.CardControl3.destroy(),this.CardControl33.destroy()),4==t&&(this.CardControl4.destroy(),this.CardControl44.destroy()),5==t&&(this.CardControl5.destroy(),this.CardControl55.destroy()),6==t&&(this.CardControl6.destroy(),this.CardControl66.destroy())},resetAnimation:function(t){1==t&&this.CardControl1.getComponent("cardclick1").mycardReset("card1close");10==t&&this.CardControl11.getComponent("cardclick1").mycardReset("card1close");2==t&&this.CardControl2.getComponent("cardclick1").mycardReset("card2close");20==t&&this.CardControl22.getComponent("cardclick1").mycardReset("card2close");3==t&&this.CardControl3.getComponent("cardclick1").mycardReset("card3close");30==t&&this.CardControl33.getComponent("cardclick1").mycardReset("card3close");4==t&&this.CardControl4.getComponent("cardclick1").mycardReset("card4close");40==t&&this.CardControl44.getComponent("cardclick1").mycardReset("card4close");5==t&&this.CardControl5.getComponent("cardclick1").mycardReset("card5close");50==t&&this.CardControl55.getComponent("cardclick1").mycardReset("card5close");6==t&&this.CardControl6.getComponent("cardclick1").mycardReset("card6close");60==t&&this.CardControl66.getComponent("cardclick1").mycardReset("card6close")},update:function(t){1==Globals.setgray&&(this.CorrectSound.play(),this.setGray(this.setgrayID),this.setgrayID=0)},InitPositions:function(t){return 0==t?(this.CardList[0].x+=221.474,this.CardList[1].x+=221.474,this.CardList[2].x+=221.474,this.CardList[3].x+=221.474,this.CardList[4].x+=221.474,this.CardList[5].x+=221.474,this.CardList[6].x+=221.474,this.CardList[7].x+=221.474,this.CardList[8].x+=221.474,this.CardList[9].x-=664.422,this.CardList[10].x-=664.422,this.CardList[11].x-=664.422,1):1==t?(this.CardList[0].x+=221.474,this.CardList[1].x+=221.474,this.CardList[2].x+=221.474,this.CardList[3].x-=221.474,this.CardList[4].x-=221.474,this.CardList[5].x-=221.474,this.CardList[6].x+=221.474,this.CardList[7].x+=221.474,this.CardList[8].x+=221.474,this.CardList[9].x-=221.474,this.CardList[10].x-=221.474,this.CardList[11].x-=221.474,1):2==t?(this.CardList[0].x+=442.948,this.CardList[1].x+=442.948,this.CardList[2].x+=442.948,this.CardList[3].x+=442.948,this.CardList[4].x+=442.948,this.CardList[5].x+=442.948,this.CardList[6].x-=442.948,this.CardList[7].x-=442.948,this.CardList[8].x-=442.948,this.CardList[9].x-=442.948,this.CardList[10].x-=442.948,this.CardList[11].x-=442.948,1):0}}),cc._RF.pop()},{}],Globals:[function(t,o,c){"use strict";cc._RF.push(o,"25bca/j0CBNQpiwY7sXjhno","Globals"),window.Globals={isTouch:0,isCollision:0,ID:0,index:0,isdrag:1},cc._RF.pop()},{}],StartControl:[function(t,o,c){"use strict";cc._RF.push(o,"68873vMystM27vw4ZB/bXnF","StartControl"),cc.Class({extends:cc.Component,properties:{start1:cc.Node,anim:cc.Animation,start2Aduio:cc.AudioSource},start:function(){var t=this;this.anim.scheduleOnce(function(){t.start1.destroy()},14)}}),cc._RF.pop()},{}],button:[function(t,o,c){"use strict";cc._RF.push(o,"37de3U+n3VCrY8qeTijRLgc","button"),cc.Class({extends:cc.Component,properties:{tips:cc.Node,startclickcontrol:0,anim:cc.Animation,animArrows:cc.Animation,bgaudio:cc.AudioSource,arrow:cc.Node},start:function(){var t=this;this.anim.scheduleOnce(function(){t.settrue(1),t.arrow.opacity=255,t.animArrows.play("arrowApear")},12),document.cookie="MannersStart=1;Path=/;"},buttoncontrol:function(){if(1==this.startclickcontrol){this.node.opacity=0;var t=this;this.anim.scheduleOnce(function(){t.tips.destroy()},1),this.node.destroy()}},settrue:function(t){this.startclickcontrol=t},touchbegan:function(t,o){return!0},update:function(t){}}),cc._RF.pop()},{}],cardControlManagement:[function(t,o,c){"use strict";cc._RF.push(o,"458984q6W9CHrpvPd/Sq1Ol","cardControlManagement"),cc.Class({extends:cc.Component,properties:{SixCardAnimation:[cc.Animation],StarsAnim:[cc.Animation],Starnode:[cc.Node],LocalIndex:0,anim:cc.Animation},onLoad:function(){document.cookie="AggressionControl=0;Path=/;"},start:function(){},update:function(t){this.LocalIndex==Globals.index||(this.LocalIndex=Globals.index,this.Starnode[this.LocalIndex-1].opacity=255,this.StarsAnim[this.LocalIndex-1].play("star"),6==this.LocalIndex&&this.anim.scheduleOnce(function(){document.cookie="MannersControl=1;Path=/;",document.cookie="MannersStart=0;Path=/;"},2))}}),cc._RF.pop()},{}],cardclick1:[function(t,o,c){"use strict";cc._RF.push(o,"5bdad211OFPJ7dXG3rtmo8T","cardclick1"),cc.Class({extends:cc.Component,properties:{card:{default:null,type:cc.Animation},clickable:!0},start:function(){},mycardclick:function(){1==this.clickable&&(this.card.play(),this.clickable=!1)},mycardReset:function(t){this.clickable=!0,this.card.play(t)}}),cc._RF.pop()},{}],startarrow:[function(t,o,c){"use strict";cc._RF.push(o,"1106cBgiyhEJY0aOdPNz2WT","startarrow"),cc.Class({extends:cc.Component,properties:{aduio:cc.AudioSource,anim:cc.Animation},start:function(){this.node.on(cc.Node.EventType.MOUSE_ENTER,function(t){this.anim.play("ArrowBig")},this)}}),cc._RF.pop()},{}]},{},["CardMove","Globals","StartControl","cardControlManagement","GameManagement","button","cardclick1","startarrow"]);