(self.webpackChunkrandom_project=self.webpackChunkrandom_project||[]).push([[241],{78241:(t,e,i)=>{"use strict";i.r(e),i.d(e,{HiddenTimerModule:()=>w});var n=i(38583),s=i(32086),r=(()=>(function(t){t[t.Full=0]="Full",t[t.Preview=1]="Preview"}(r||(r={})),r))(),u=i(10639),o=i(39075),a=i(90567),p=i(88325),c=i(90665);const h=["inputField"];function m(t,e){if(1&t&&(u.TgZ(0,"span",17),u._uU(1),u.qZA()),2&t){const t=u.oxw();u.xp6(1),u.Oqu(t.timeOutputString.charAt(0))}}function l(t,e){if(1&t&&(u.TgZ(0,"span",17),u._uU(1),u.qZA()),2&t){const t=u.oxw();u.xp6(1),u.Oqu(t.timeOutputString.charAt(1))}}function g(t,e){1&t&&(u.TgZ(0,"span",6),u._uU(1,"h"),u.qZA())}function d(t,e){if(1&t&&(u.TgZ(0,"span",17),u._uU(1),u.qZA()),2&t){const t=u.oxw();u.xp6(1),u.Oqu(t.timeOutputString.charAt(2))}}function f(t,e){if(1&t&&(u.TgZ(0,"span",17),u._uU(1),u.qZA()),2&t){const t=u.oxw();u.xp6(1),u.Oqu(t.timeOutputString.charAt(3))}}function S(t,e){1&t&&(u.TgZ(0,"span",6),u._uU(1,"m"),u.qZA())}function v(t,e){if(1&t&&(u.TgZ(0,"span",17),u._uU(1),u.qZA()),2&t){const t=u.oxw();u.xp6(1),u.Oqu(t.timeOutputString.charAt(4))}}function O(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"button",12),u.NdJ("click",function(){return u.CHM(t),u.oxw().startStopButton()}),u._uU(1),u.qZA()}if(2&t){const t=u.oxw();u.xp6(1),u.Oqu(t.timerMessage)}}function x(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"button",12),u.NdJ("click",function(){return u.CHM(t),u.oxw().stopAudio()}),u._uU(1),u.qZA()}if(2&t){const t=u.oxw();u.xp6(1),u.Oqu(t.timerMessage)}}const A=function(t){return{digit:!0,inputMarker:t}},T=[{path:"",component:(()=>{class t{constructor(t,e){this.titleService=t,this.metaService=e,this.previewAudio=new Audio,this.fullAudio=new Audio,this.volume=.5,this.timeInputFocussed=!1,this.timeInput=500,this.timeOutputString="000500",this.timeOutputStringIsDirty=!1,this.hours=0,this.minutes=5,this.seconds=0,this.totalMilliseconds=3e5,this.timerMessage="start"}ngOnInit(){this.titleService.setTitle("Timer | Random Stuff"),this.metaService.updateTag({name:"description",content:"Personal timer project."}),this.metaService.getTag("name='robots'")?this.metaService.updateTag({name:"robots",content:"noindex, follow"}):this.metaService.addTag({name:"robots",content:"noindex, follow"}),this.loadAudio()}ngOnDestroy(){this.timer&&clearInterval(this.timer),this.titleService.setTitle("Random Stuff")}loadAudio(){this.volume=localStorage.getItem("siteVolume")?JSON.parse(localStorage.getItem("siteVolume")):.5,this.previewAudio.volume=this.volume,this.previewAudio.src="assets/hidden/timer/PreviewSound.mp3",this.fullAudio.volume=this.volume,this.fullAudio.src="assets/hidden/timer/FullSound.mp3"}updateVolume(){this.previewAudio.volume=this.volume,this.fullAudio.volume=this.volume,localStorage.setItem("siteVolume",JSON.stringify(this.volume)),this.playAudio(r.Preview)}playAudio(t){t==r.Preview&&(this.previewAudio.currentTime=0,this.previewAudio.play()),t==r.Full&&(this.fullAudio.currentTime=0,this.fullAudio.play())}stopAudio(){this.fullAudio.pause()}timeInputHandler(t){this.timeOutputStringIsDirty=!0,null==t.data&&1!=t.target.value&&"deleteContentBackward"!=t.inputType||("insertFromPaste"!=t.inputType?(isNaN(t.data)&&(t.target.value="",this.timeInput=1),null==this.timeInput&&(this.timeInput=0),this.timeOutputString=("000000"+this.timeInput).substr(-6,6),this.timeInput=parseInt(this.timeOutputString),t.target.value>999999&&(t.target.value=this.timeInput)):t.target.value="")}focusInput(){this.inputField.nativeElement.focus(),this.timeInputFocussed=!0,this.setCursorToTheEnd(),this.timerMessage="start",this.timer&&(this.titleService.setTitle("Random Stuff"),this.stopTimer())}focusOut(){this.timeInputFocussed&&(this.inputField.nativeElement.blur(),this.timeInputFocussed=!1,this.calculateActualTime())}calculateActualTime(){this.timeOutputStringIsDirty&&(this.hours=parseInt(this.timeOutputString.substr(0,2)),this.minutes=parseInt(this.timeOutputString.substr(2,2)),this.seconds=parseInt(this.timeOutputString.substr(4,2)),this.seconds>=60&&(this.seconds=this.seconds%60,this.minutes++),this.minutes>=60&&(this.minutes=this.minutes%60,this.hours++),this.hours>99&&(this.hours=99,this.minutes=59,this.seconds=59),this.totalMilliseconds=1e3*(60*this.hours*60+60*this.minutes+this.seconds),this.timeOutputString=this.hours.toString().padStart(2,"0")+this.minutes.toString().padStart(2,"0")+this.seconds.toString().padStart(2,"0"),this.timeInput=parseInt(this.timeOutputString),this.timeOutputStringIsDirty=!1)}startStopButton(){this.calculateActualTime(),this.timer?(this.titleService.setTitle("Random Stuff"),this.stopTimer(),this.timerMessage="start"):this.startTimer()}startTimer(){if(0!=this.totalMilliseconds){var t=new Date;this.startTimeEpoch=t.getTime();var e=this.startTimeEpoch+this.totalMilliseconds;this.timerMessage="stop",this.calculateAndOutPutTime(e-(new Date).getTime()),this.timer=setInterval(()=>{var t=e-(new Date).getTime();this.calculateAndOutPutTime(t),t<=0&&(this.stopTimer(),this.playAudio(r.Full),this.timerMessage="ok")},1e3)}}stopTimer(){clearInterval(this.timer),this.timer=void 0;var t=(new Date).getTime(),e=1e3*Math.round((t-this.startTimeEpoch)/1e3);this.totalMilliseconds=this.totalMilliseconds-e}resetTimer(){this.timer&&this.stopTimer(),this.timerMessage="start",this.titleService.setTitle("Random Stuff"),this.stopAudio(),this.timeOutputString=this.hours.toString().padStart(2,"0")+this.minutes.toString().padStart(2,"0")+this.seconds.toString().padStart(2,"0"),this.timeInput=parseInt(this.timeOutputString),this.totalMilliseconds=1e3*(60*this.hours*60+60*this.minutes+this.seconds)}calculateAndOutPutTime(t){t<0?t=0:t+=50;var e=Math.floor(t/36e5),i=Math.floor(t%36e5/6e4),n=Math.floor(t%6e4/1e3);this.timeOutputString=e.toString().padStart(2,"0")+i.toString().padStart(2,"0")+n.toString().padStart(2,"0"),this.timeInput=parseInt(this.timeOutputString),this.outputPageTitle(e,i,n,t)}outputPageTitle(t,e,i,n){if(0!=n){var s="";if(0!=t)return s+=t.toString()+"h ",s+=e.toString().padStart(2,"0")+"m ",s+=i.toString().padStart(2,"0")+"s",void this.titleService.setTitle(s);if(0!=e)return s+=e.toString().padStart(2,"0")+"m ",s+=i.toString().padStart(2,"0")+"s",void this.titleService.setTitle(s);this.titleService.setTitle(i+"s")}else this.titleService.setTitle("It's over")}setCursorToTheEnd(){if(this.inputField.nativeElement.setSelectionRange){var t=2*this.timeInput.toString().length;setTimeout(()=>{this.inputField.nativeElement.type="text",this.inputField.nativeElement.setSelectionRange(t,t),this.inputField.nativeElement.type="number"},1)}else this.timeInput=this.timeInput}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(o.Dx),u.Y36(o.h_))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-hidden-timer"]],viewQuery:function(t,e){if(1&t&&u.Gf(h,5),2&t){let t;u.iGM(t=u.CRH())&&(e.inputField=t.first)}},decls:27,vars:15,consts:[[1,"timerWrapper"],[1,"timer"],[1,"timeOutput","noselect",3,"click","clickOutside"],["class","digit",4,"ngIf"],["class","sepatrator",4,"ngIf"],[3,"ngClass"],[1,"sepatrator"],["name","timeInput","id","timeInput","type","number",3,"ngModel","ngModelChange","input","keyup.enter"],["inputField",""],[1,"customSeparator"],[1,"controls"],[3,"click",4,"ngIf"],[3,"click"],[1,"volume"],[1,"fa","fa-volume-down","fa-lm"],[1,"volumeSlider"],["type","range","min","0","max","1","step","0.01",3,"ngModel","ngModelChange","mouseup"],[1,"digit"]],template:function(t,e){1&t&&(u._UZ(0,"app-hidden-side-navigation"),u.TgZ(1,"div",0),u.TgZ(2,"div",1),u.TgZ(3,"div",2),u.NdJ("click",function(){return e.focusInput()})("clickOutside",function(){return e.focusOut()}),u.YNc(4,m,2,1,"span",3),u.YNc(5,l,2,1,"span",3),u.YNc(6,g,2,0,"span",4),u.YNc(7,d,2,1,"span",3),u.YNc(8,f,2,1,"span",3),u.YNc(9,S,2,0,"span",4),u.YNc(10,v,2,1,"span",3),u.TgZ(11,"span",5),u._uU(12),u.qZA(),u.TgZ(13,"span",6),u._uU(14,"s"),u.qZA(),u.qZA(),u.TgZ(15,"input",7,8),u.NdJ("ngModelChange",function(t){return e.timeInput=t})("input",function(t){return e.timeInputHandler(t)})("keyup.enter",function(){return e.focusOut()}),u.qZA(),u._UZ(17,"div",9),u.TgZ(18,"div",10),u.YNc(19,O,2,1,"button",11),u.YNc(20,x,2,1,"button",11),u.TgZ(21,"button",12),u.NdJ("click",function(){return e.resetTimer()}),u._uU(22,"reset"),u.qZA(),u.TgZ(23,"div",13),u._UZ(24,"i",14),u.TgZ(25,"div",15),u.TgZ(26,"input",16),u.NdJ("ngModelChange",function(t){return e.volume=t})("mouseup",function(){return e.updateVolume()}),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&t&&(u.xp6(4),u.Q6J("ngIf",e.timeInputFocussed||"0"!=e.timeOutputString.charAt(0)),u.xp6(1),u.Q6J("ngIf",e.timeInputFocussed||"0"!=e.timeOutputString.charAt(1)||"0"!=e.timeOutputString.charAt(0)),u.xp6(1),u.Q6J("ngIf",e.timeInputFocussed||"0"!=e.timeOutputString.charAt(1)||"0"!=e.timeOutputString.charAt(0)),u.xp6(1),u.Q6J("ngIf",e.timeInputFocussed||"0"!=e.timeOutputString.charAt(2)||"0"!=e.timeOutputString.charAt(0)||"0"!=e.timeOutputString.charAt(1)),u.xp6(1),u.Q6J("ngIf",e.timeInputFocussed||"0"!=e.timeOutputString.charAt(3)||"0"!=e.timeOutputString.charAt(0)||"0"!=e.timeOutputString.charAt(1)||"0"!=e.timeOutputString.charAt(2)),u.xp6(1),u.Q6J("ngIf",e.timeInputFocussed||"0"!=e.timeOutputString.charAt(2)||"0"!=e.timeOutputString.charAt(0)||"0"!=e.timeOutputString.charAt(1)||"0"!=e.timeOutputString.charAt(3)),u.xp6(1),u.Q6J("ngIf",e.timeInputFocussed||"0"!=e.timeOutputString.charAt(4)||"0"!=e.timeOutputString.charAt(0)||"0"!=e.timeOutputString.charAt(1)||"0"!=e.timeOutputString.charAt(2)||"0"!=e.timeOutputString.charAt(3)),u.xp6(1),u.Q6J("ngClass",u.VKq(13,A,e.timeInputFocussed)),u.xp6(1),u.Oqu(e.timeOutputString.charAt(5)),u.xp6(3),u.Q6J("ngModel",e.timeInput),u.xp6(4),u.Q6J("ngIf","ok"!=e.timerMessage),u.xp6(1),u.Q6J("ngIf","ok"==e.timerMessage),u.xp6(6),u.Q6J("ngModel",e.volume))},directives:[a.x,p._,n.O5,n.mk,c.wV,c.Fj,c.JJ,c.On,c.eT],styles:[".timerWrapper[_ngcontent-%COMP%]{width:324px;min-height:calc(100vh - 72px);margin:8px auto 0}.timer[_ngcontent-%COMP%]{position:relative;width:320px;height:128px;margin:30px auto 0;border:2px solid var(--game-page-border-color);border-radius:3px;background-color:var(--game-page-background-color)}.timer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--game-page-accent-color);border:none;color:#fff;padding:5px 10px;text-align:center;font-size:16px;width:75px;margin:0 5px 0 0;outline:none;float:left}.controls[_ngcontent-%COMP%]{position:absolute;bottom:0;margin:0 5px 5px}.customSeparator[_ngcontent-%COMP%]{width:100%;height:0;margin:0;border-bottom:2px solid var(--game-page-border-color)}#timeInput[_ngcontent-%COMP%]{position:absolute;width:0;height:0;opacity:0;margin:0;z-index:-2;border:none;padding:0}.volume[_ngcontent-%COMP%]{overflow:hidden;margin:4px 0 0 11px;height:24px;width:139px;text-align:right;float:left}.volumeSlider[_ngcontent-%COMP%], i[_ngcontent-%COMP%]{display:inline-block}i[_ngcontent-%COMP%]{font-size:20px}.timeOutput[_ngcontent-%COMP%]{margin:10px 0 9px 10px}.digit[_ngcontent-%COMP%]{font-size:60px;border-right:1px solid #0000}.inputMarker[_ngcontent-%COMP%]{border-right:1px solid var(--font-color)}.sepatrator[_ngcontent-%COMP%]{font-size:30px;margin-right:12px}.noselect[_ngcontent-%COMP%]{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}input[type=range][_ngcontent-%COMP%]{width:120px;height:14px;margin:0 3px 2px}[_ngcontent-%COMP%]::-webkit-slider-thumb{width:14px;height:14px}[_ngcontent-%COMP%]::-moz-range-track{height:14px}[_ngcontent-%COMP%]::-moz-range-thumb{height:14px;width:14px}@media only screen and (max-width:826px){.timerWrapper[_ngcontent-%COMP%]{float:left;margin:unset;margin-left:9px}}@media only screen and (max-width:800px){.timerWrapper[_ngcontent-%COMP%]{width:100%}}"]}),t})()}];let I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[s.Bz.forChild(T)],s.Bz]}),t})();var M=i(41474);let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[n.ez,I,M.e]]}),t})()}}]);