(self.webpackChunkrandom_project=self.webpackChunkrandom_project||[]).push([[189],{21189:(t,e,n)=>{"use strict";n.r(e),n.d(e,{HiddenStopwatchModule:()=>v});var s=n(38583),o=n(32086),i=n(10639),a=n(39075),r=n(90567);function c(t,e){if(1&t&&(i.TgZ(0,"span",10),i._uU(1),i.qZA()),2&t){const t=i.oxw();i.xp6(1),i.Oqu(t.hours.toString().padStart(2,"0"))}}function p(t,e){if(1&t&&(i.TgZ(0,"span",10),i._uU(1),i.qZA()),2&t){const t=i.oxw();i.xp6(1),i.Oqu(t.hours.toString())}}function h(t,e){1&t&&(i.TgZ(0,"span",5),i._uU(1,"h"),i.qZA())}function u(t,e){if(1&t&&(i.TgZ(0,"span",10),i._uU(1),i.qZA()),2&t){const t=i.oxw();i.xp6(1),i.Oqu(t.minutes.toString().padStart(2,"0"))}}function l(t,e){if(1&t&&(i.TgZ(0,"span",10),i._uU(1),i.qZA()),2&t){const t=i.oxw();i.xp6(1),i.Oqu(t.minutes.toString())}}function g(t,e){1&t&&(i.TgZ(0,"span",5),i._uU(1,"m"),i.qZA())}function d(t,e){if(1&t&&(i.TgZ(0,"span",10),i._uU(1),i.qZA()),2&t){const t=i.oxw();i.xp6(1),i.Oqu(t.seconds.toString().padStart(2,"0"))}}function m(t,e){if(1&t&&(i.TgZ(0,"span",10),i._uU(1),i.qZA()),2&t){const t=i.oxw();i.xp6(1),i.Oqu(t.seconds.toString())}}const f=[{path:"",component:(()=>{class t{constructor(t,e){this.titleService=t,this.metaService=e,this.hours=0,this.minutes=0,this.seconds=0,this.milliseconds=0,this.stopwatchMessage="start",this.startTime=0,this.totalTime=0,this.savedTime=0}ngOnInit(){this.titleService.setTitle("Stopwatch | Random Stuff"),this.metaService.updateTag({name:"description",content:"Personal stopwatch project."}),this.metaService.getTag("name='robots'")?this.metaService.updateTag({name:"robots",content:"noindex, follow"}):this.metaService.addTag({name:"robots",content:"noindex, follow"})}ngOnDestroy(){this.stopwatchInterval&&clearInterval(this.stopwatchInterval)}startStopButton(){this.stopwatchInterval?this.stop():this.start()}start(){this.startTime=(new Date).getTime(),this.stopwatchMessage="stop",this.stopwatchInterval=setInterval(()=>{this.calculateAndOutPutTime()})}stop(){clearInterval(this.stopwatchInterval),this.stopwatchInterval=void 0,this.stopwatchMessage="start",this.savedTime=this.totalTime}reset(){clearInterval(this.stopwatchInterval),this.stopwatchInterval=void 0,this.stopwatchMessage="start",this.startTime=0,this.savedTime=0,this.totalTime=0,this.hours=0,this.minutes=0,this.seconds=0,this.milliseconds=0}calculateAndOutPutTime(){var t=(new Date).getTime();this.totalTime=0!=this.savedTime?t-this.startTime+this.savedTime:t-this.startTime,this.hours=Math.floor(this.totalTime/36e5),this.minutes=Math.floor(this.totalTime%36e5/6e4),this.seconds=Math.floor(this.totalTime%6e4/1e3),this.milliseconds=Math.floor(this.totalTime%1e3/10)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(a.Dx),i.Y36(a.h_))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-hidden-timer"]],decls:22,vars:10,consts:[[1,"stopwatchWrapper"],[1,"stopwatch"],[1,"stopwatchOutput","noselect"],["class","digit",4,"ngIf"],["class","sepatrator",4,"ngIf"],[1,"sepatrator"],[1,"digitSmall"],[1,"customSeparator"],[1,"controls"],[3,"click"],[1,"digit"]],template:function(t,e){1&t&&(i._UZ(0,"app-hidden-side-navigation"),i.TgZ(1,"div",0),i.TgZ(2,"div",1),i.TgZ(3,"div",2),i.YNc(4,c,2,1,"span",3),i.YNc(5,p,2,1,"span",3),i.YNc(6,h,2,0,"span",4),i.YNc(7,u,2,1,"span",3),i.YNc(8,l,2,1,"span",3),i.YNc(9,g,2,0,"span",4),i.YNc(10,d,2,1,"span",3),i.YNc(11,m,2,1,"span",3),i.TgZ(12,"span",5),i._uU(13,"s"),i.qZA(),i.TgZ(14,"span",6),i._uU(15),i.qZA(),i.qZA(),i._UZ(16,"div",7),i.TgZ(17,"div",8),i.TgZ(18,"button",9),i.NdJ("click",function(){return e.startStopButton()}),i._uU(19),i.qZA(),i.TgZ(20,"button",9),i.NdJ("click",function(){return e.reset()}),i._uU(21,"reset"),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(4),i.Q6J("ngIf",e.hours>=10),i.xp6(1),i.Q6J("ngIf",0!=e.hours&&e.hours<10),i.xp6(1),i.Q6J("ngIf",0!=e.hours),i.xp6(1),i.Q6J("ngIf",0!=e.hours),i.xp6(1),i.Q6J("ngIf",0==e.hours&&0!=e.minutes),i.xp6(1),i.Q6J("ngIf",0!=e.minutes||0!=e.hours),i.xp6(1),i.Q6J("ngIf",0!=e.minutes||0!=e.hours),i.xp6(1),i.Q6J("ngIf",0==e.minutes&&0==e.hours),i.xp6(4),i.Oqu(e.milliseconds.toString().padStart(2,"0")),i.xp6(4),i.Oqu(e.stopwatchMessage))},directives:[r.x,s.O5],styles:[".stopwatchWrapper[_ngcontent-%COMP%]{width:324px;min-height:calc(100vh - 72px);margin:8px auto 0}.stopwatch[_ngcontent-%COMP%]{position:relative;width:320px;height:128px;margin:30px auto 0;border:2px solid var(--game-page-border-color);border-radius:3px;background-color:var(--game-page-background-color)}.stopwatch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--game-page-accent-color);border:none;color:#fff;padding:5px 10px;text-align:center;font-size:16px;width:75px;margin:0 5px 0 0;outline:none;float:left}.controls[_ngcontent-%COMP%]{position:absolute;bottom:0;margin:0 5px 5px}.customSeparator[_ngcontent-%COMP%]{width:100%;height:0;margin:0;border-bottom:2px solid var(--game-page-border-color)}.stopwatchOutput[_ngcontent-%COMP%]{margin:10px 0 9px 10px}.digit[_ngcontent-%COMP%]{font-size:50px}.digitSmall[_ngcontent-%COMP%], .sepatrator[_ngcontent-%COMP%]{font-size:30px}.sepatrator[_ngcontent-%COMP%]{margin-right:12px}.noselect[_ngcontent-%COMP%]{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media only screen and (max-width:826px){.stopwatchWrapper[_ngcontent-%COMP%]{float:left;margin:unset;margin-left:9px}}@media only screen and (max-width:800px){.stopwatchWrapper[_ngcontent-%COMP%]{width:100%}}"]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.Bz.forChild(f)],o.Bz]}),t})();var w=n(41474);let v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[s.ez,x,w.e]]}),t})()}}]);