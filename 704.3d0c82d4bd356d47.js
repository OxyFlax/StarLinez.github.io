"use strict";(self.webpackChunkRandomProject=self.webpackChunkRandomProject||[]).push([[704],{38704:(O,d,n)=>{n.r(d),n.d(d,{MaplestoryDailiesV3Module:()=>V});var l=n(69808),p=n(69414);const r=JSON.parse('{"version":"6.8","imagePrefix":"MapleDailies/","taskGroups":[{"title":"Daily Bosses","tasks":[{"name":"Zakum","image":"Zakum.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Horntail","image":"Horntail.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Hilla","image":"Hilla.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Crimson Queen","image":"CrimsonQueen.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Pierre","image":"Pierre.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Von Bon","image":"VonBon.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Vellum","image":"Vellum.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Von Leon","image":"VonLeon.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Arkarium","image":"Arkarium.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Magnus","image":"Magnus.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Pink Bean","image":"PinkBean.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Mori Ranmaru","image":"MoriRanmaru.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Papulatus","image":"Papulatus.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Gollux","image":"Gollux.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Julieta","image":"Julieta.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"OMNI-CLN","image":"OMNI-CLN.png","done":false,"enabled":true,"type":"default","dispCon":"true"}],"allDisabled":false},{"title":"Daily Tasks","tasks":[{"name":"Monster Park","image":"MonsterPark.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Ursus","image":"Ursus.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Maple Tour","image":"MapleTour.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Legion","image":"Legion.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Daily Gift","image":"DailyGift.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Commerci","image":"Commerci.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Phantom Forest","image":"PhantomForest.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Yu Garden","image":"YuGarden.png","done":false,"enabled":true,"type":"default","dispCon":"true"}],"allDisabled":false},{"title":"Arcane River Dailies","tasks":[{"name":"Vanishing Journey Dailies","image":"VanishingJourney.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Chu Chu Dailies","image":"ChuChu.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Lachelein Dailies","image":"Lachelein.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Arcana Dailies","image":"Arcana.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Morass Dailies","image":"Morass.png","done":false,"enabled":true,"type":"default","dispCon":"true"},{"name":"Esfera Dailies","image":"Esfera.png","done":false,"enabled":true,"type":"default","dispCon":"true"}],"allDisabled":false}]}');var e=n(72096),c=n(22313),m=n(84165),g=n(65534),f=n(89019),h=n(32724),_=n(90873);function C(a,s){if(1&a){const t=e.EpF();e.TgZ(0,"div",8)(1,"p"),e._uU(2,"The daily tracker has been updated!"),e._UZ(3,"br"),e._uU(4,' There is now support for more than 4 characters, new characters can be added and removed in "Edit Dailies". (more info can be found in "Edit Dailies" itself)'),e._UZ(5,"br")(6,"br"),e._uU(7," If you are experiencing issues press the reset button to reset the saved data, if not you can press the dismiss button."),e._UZ(8,"br"),e._uU(9," If this does not resolve the issue please contact me on discord StarLines#0001. "),e.qZA(),e.TgZ(10,"button",9),e.NdJ("click",function(){return e.CHM(t),e.oxw().infoReset()}),e._uU(11,"Reset Data"),e.qZA(),e.TgZ(12,"button",9),e.NdJ("click",function(){return e.CHM(t),e.oxw().infoDismiss()}),e._uU(13,"Dismiss"),e.qZA()()}}function D(a,s){if(1&a){const t=e.EpF();e.TgZ(0,"app-task-topbar-default",10),e.NdJ("changeEvent",function(){return e.CHM(t),e.oxw().changeHandler()}),e.qZA()}if(2&a){const t=e.oxw();e.Q6J("taskData",t.dailiesData)("topBarTitle","Daily Tracker")("editButtonTitle","Dailies")}}function v(a,s){if(1&a){const t=e.EpF();e.TgZ(0,"app-task-topbar-editmode",11),e.NdJ("changeEvent",function(){return e.CHM(t),e.oxw().changeHandler()})("regionChangeEvent",function(){return e.CHM(t),e.oxw().regionChangeHandler()})("addCharacterEvent",function(){return e.CHM(t),e.oxw().addCharacter()}),e.qZA()}if(2&a){const t=e.oxw();e.Q6J("taskData",t.dailiesData)("topBarTitle","Daily Tracker")("regions",t.regions)}}function y(a,s){if(1&a&&(e.TgZ(0,"p",12),e._uU(1,"Reset in "),e._UZ(2,"br"),e._uU(3),e.qZA()),2&a){const t=e.oxw();e.xp6(3),e.hij(" ",t.timerString,"")}}function b(a,s){1&a&&(e.TgZ(0,"div"),e._uU(1,' All dailies are disabled, click on the "Edit Dailies" button to enable dailies. '),e.qZA())}function M(a,s){if(1&a){const t=e.EpF();e.ynx(0),e.TgZ(1,"app-task-group",13),e.NdJ("changeEvent",function(){return e.CHM(t),e.oxw().changeHandler()}),e.qZA(),e.BQk()}if(2&a){const t=s.$implicit,i=e.oxw();e.xp6(1),e.Q6J("taskData",i.dailiesData)("taskGroup",t)("title",t.title)}}const x=[{path:"",component:(()=>{class a{constructor(t,i,o){this.titleService=t,this.metaService=i,this.taskService=o,this.initialisationComplete=!1,this.characterIndex=0,this.regions=[{resetUtcOffset:0,name:"GMS"},{resetUtcOffset:8,name:"MSEA"},{resetUtcOffset:9,name:"KMS"}]}ngOnInit(){this.titleService.setTitle("Maplestory Dailies Tracker | Random Stuff"),this.metaService.updateTag({name:"description",content:"A dailies tracker for Maplestory to keep track of your completed daily tasks. Keep track of your dailies across multiple different characters."}),this.metaService.getTag("name='robots'")?this.metaService.updateTag({name:"robots",content:"index, follow"}):this.metaService.addTag({name:"robots",content:"index, follow"}),this.initialise()}ngOnDestroy(){this.timer&&clearInterval(this.timer)}initialise(){localStorage.getItem("dailiesDataV3")?(this.dailiesData=JSON.parse(localStorage.getItem("dailiesDataV3")),void 0===this.dailiesData.mapleRegion&&(this.dailiesData.mapleRegion={resetUtcOffset:0,name:"GMS"}),this.dailiesData.editModeActive=!1,this.dailyResetChecker(),this.updateChecker(),this.checkIfAllGroupsAreDisabled()):localStorage.getItem("dailiesData")?(this.dailiesData=this.taskService.v2v3Updater("dailiesData"),this.changeHandler(),this.initialise()):this.dailiesData=this.taskService.initiateDataSet(r,4),this.startTimer(),this.initialisationComplete=!0}dailyResetChecker(){var t=this.calculateResetTime()-864e5;parseInt(this.dailiesData.lastTrackerVisit)<t&&this.taskService.resetCompletionAll(this.dailiesData),this.dailiesData.lastTrackerVisit=Date.now().toString(),this.changeHandler()}updateChecker(){this.dailiesData.version!=r.version&&(this.dailiesData=this.taskService.updateTaskStructure(this.dailiesData,r),this.changeHandler())}startTimer(){clearInterval(this.timer);var t=this.calculateResetTime();this.calculateAndOutPutTime(t-(new Date).getTime()),this.timer=setInterval(()=>{var i=t-(new Date).getTime();this.calculateAndOutPutTime(i),i<0&&(clearInterval(this.timer),this.liveReset())},1e3)}calculateResetTime(){var t=new Date,i=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()+1,0,0,0,0);return(i-=60*this.dailiesData.mapleRegion.resetUtcOffset*60*1e3)<t.getTime()&&(i+=864e5),i}calculateAndOutPutTime(t){if(t<0)this.timerString="RESET!";else{var i=Math.floor(t%864e5/36e5),o=Math.floor(t%36e5/6e4),S=Math.floor(t%6e4/1e3);this.timerString=i+"h "+o+"m "+("00"+S).slice(-2)+"s "}}liveReset(){this.taskService.resetCompletionAll(this.dailiesData),this.startTimer(),this.dailiesData.lastTrackerVisit=(parseInt(Date.now().toString())+5e3).toString(),this.changeHandler()}checkIfAllGroupsAreDisabled(){this.allGroupsAreDisabled=!this.dailiesData.characters[this.dailiesData.selectedCharacterIndex].taskGroups.some(t=>!t.allDisabled)}addCharacter(){this.taskService.addCharacter(this.dailiesData,r),this.changeHandler()}infoReset(){localStorage.removeItem("dailies"),localStorage.removeItem("dailiesData"),localStorage.removeItem("dailiesDataV3"),this.initialise(),this.dailiesData.infoVisible=!0}infoDismiss(){this.dailiesData.infoVisible=!1,this.changeHandler()}changeHandler(){localStorage.setItem("dailiesDataV3",JSON.stringify(this.dailiesData)),this.checkIfAllGroupsAreDisabled()}regionChangeHandler(){this.dailyResetChecker(),this.startTimer()}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(c.Dx),e.Y36(c.h_),e.Y36(m.M))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-maplestory-dailies-v3"]],decls:9,vars:6,consts:[["class","info",4,"ngIf"],[1,"gamePageContent"],[3,"taskData","topBarTitle","editButtonTitle","changeEvent",4,"ngIf"],[3,"taskData","topBarTitle","regions","changeEvent","regionChangeEvent","addCharacterEvent",4,"ngIf"],["class","timer",4,"ngIf"],[1,"dailyGroups"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"info"],[1,"buttonStyle",3,"click"],[3,"taskData","topBarTitle","editButtonTitle","changeEvent"],[3,"taskData","topBarTitle","regions","changeEvent","regionChangeEvent","addCharacterEvent"],[1,"timer"],[3,"taskData","taskGroup","title","changeEvent"]],template:function(t,i){1&t&&(e._UZ(0,"app-maplestory-side-navigation"),e.YNc(1,C,14,0,"div",0),e.TgZ(2,"div",1),e.YNc(3,D,1,3,"app-task-topbar-default",2),e.YNc(4,v,1,3,"app-task-topbar-editmode",3),e.YNc(5,y,4,1,"p",4),e.TgZ(6,"div",5),e.YNc(7,b,2,0,"div",6),e.YNc(8,M,2,3,"ng-container",7),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngIf",!i.initialisationComplete||i.dailiesData.infoVisible),e.xp6(2),e.Q6J("ngIf",!i.dailiesData.editModeActive),e.xp6(1),e.Q6J("ngIf",i.dailiesData.editModeActive),e.xp6(1),e.Q6J("ngIf",!i.dailiesData.editModeActive),e.xp6(2),e.Q6J("ngIf",i.allGroupsAreDisabled&&!i.dailiesData.editModeActive),e.xp6(1),e.Q6J("ngForOf",i.dailiesData.characters[i.dailiesData.selectedCharacterIndex].taskGroups))},directives:[g.G,l.O5,f.R,h.t,l.sg,_.H],styles:[".gamePageContent[_ngcontent-%COMP%]{position:relative;padding-bottom:8px;margin-bottom:8px}.disableMode[_ngcontent-%COMP%]{width:100px;height:50px}.dailyGroups[_ngcontent-%COMP%]{width:100%;height:100%;overflow:hidden;text-align:center}.timer[_ngcontent-%COMP%]{position:absolute;top:0;left:0;margin:8px 0 0 8px;text-align:center;font-size:16px;padding:3px;border:2px solid var(--game-page-border-color)}.buttonWrapper[_ngcontent-%COMP%]{width:175px;margin:0 auto}.buttonWrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0}.buttonWrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{float:left}.buttonWrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{float:right}.info[_ngcontent-%COMP%]{width:1130px;margin:8px auto;background-color:var(--game-page-background-color);border:1px solid var(--game-page-border-color);text-align:center}.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:600px;text-align:center;margin:0 auto;padding-top:8px}.info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:8px}@media only screen and (max-width: 1635px){.info[_ngcontent-%COMP%]{float:left;margin:unset;margin-top:8px;margin-left:9px}}@media only screen and (max-width: 1391px){.info[_ngcontent-%COMP%]{width:calc(100% - 262px)}}@media only screen and (max-width: 800px){.info[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px;width:calc(100% - 18px)}}"]}),a})()}];let k=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[p.Bz.forChild(x)],p.Bz]}),a})();var T=n(56928),u=n(24447);let V=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[l.ez,k,T.C,u.m],u.m]}),a})()}}]);