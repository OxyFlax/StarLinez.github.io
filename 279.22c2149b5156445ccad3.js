(self.webpackChunkrandom_project=self.webpackChunkrandom_project||[]).push([[279],{71279:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MaplestoryHomeModule:()=>p});var a=n(38583),o=n(32086),r=n(10639),i=n(39075),d=n(65534);const c=[{path:"",component:(()=>{class e{constructor(e,t){this.titleService=e,this.metaService=t}ngOnInit(){this.titleService.setTitle("Maplestory Home | Random Stuff"),this.metaService.updateTag({name:"description",content:"The home page for the various Maplestory calculators and trackers on here."}),this.metaService.getTag("name='robots'")?this.metaService.updateTag({name:"robots",content:"index, follow"}):this.metaService.addTag({name:"robots",content:"index, follow"})}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(i.Dx),r.Y36(i.h_))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-maplestory-home"]],decls:82,vars:0,consts:[[1,"contentPageOverride"],[1,"title"],[1,"intro"],[1,"changeLog"],[1,"changeLogTitle"],[1,"individualLog"]],template:function(e,t){1&e&&(r._UZ(0,"app-maplestory-side-navigation"),r.TgZ(1,"div",0),r.TgZ(2,"p",1),r._uU(3,"MapleStory"),r.qZA(),r.TgZ(4,"p",2),r._uU(5,"Welcome to the MapleStory section of my website of random stuff. Here you will find things like calculators and trackers. The daily and weekly trackers have an option to show the reset times for other regions but because i play on GMS the trackers are based on GMS content and events."),r.qZA(),r.TgZ(6,"p",2),r._uU(7,"If you run into any issues, have some suggestions or feature requests feel free to contact me on discord StarLines#0001"),r.qZA(),r.TgZ(8,"div",3),r.TgZ(9,"p",4),r._uU(10,"Change Log"),r.qZA(),r.TgZ(11,"div",5),r.TgZ(12,"span"),r._uU(13,"July 6, 2021"),r.qZA(),r.TgZ(14,"p"),r._uU(15,"- Dailies Tracker added countdown timer to Yu Garden for when the merchant arrives and leaves."),r.qZA(),r.TgZ(16,"p"),r._uU(17,"- Arcane symbol calculator now supports the x2 multiplier for unlocking reverse city and yum yum island."),r.qZA(),r.qZA(),r.TgZ(18,"div",5),r.TgZ(19,"span"),r._uU(20,"April 21, 2021"),r.qZA(),r.TgZ(21,"p"),r._uU(22,"- Restructured the code behind the dailies & weeklies tracker. This makes the addition of new features easier."),r.qZA(),r.TgZ(23,"p"),r._uU(24,"- Dailies & weeklies now keep track of the character you had last selected."),r.qZA(),r.qZA(),r.TgZ(25,"div",5),r.TgZ(26,"span"),r._uU(27,"Jan 16, 2021"),r.qZA(),r.TgZ(28,"p"),r._uU(29,"- Event dailies & weeklies are now scheduled to appear and dissapear based on their start and end date."),r.qZA(),r.qZA(),r.TgZ(30,"div",5),r.TgZ(31,"span"),r._uU(32,"Dec 24, 2020"),r.qZA(),r.TgZ(33,"p"),r._uU(34,"- Added weapon flame tier calculator."),r.qZA(),r.qZA(),r.TgZ(35,"div",5),r.TgZ(36,"span"),r._uU(37,"Sept 20, 2020"),r.qZA(),r.TgZ(38,"p"),r._uU(39,"- Added option to create custom dailies/weeklies."),r.qZA(),r.qZA(),r.TgZ(40,"div",5),r.TgZ(41,"span"),r._uU(42,"Sept 16, 2020"),r.qZA(),r.TgZ(43,"p"),r._uU(44,"- Added flamescore calculator."),r.qZA(),r.qZA(),r.TgZ(45,"div",5),r.TgZ(46,"span"),r._uU(47,"Sept 2, 2020"),r.qZA(),r.TgZ(48,"p"),r._uU(49,"- Added support for other region reset times to the daily and weekly tracker."),r.qZA(),r.qZA(),r.TgZ(50,"div",5),r.TgZ(51,"span"),r._uU(52,"Aug 29, 2020"),r.qZA(),r.TgZ(53,"p"),r._uU(54,"- Added count down timer for golden time in the ursus daily task."),r.qZA(),r.qZA(),r.TgZ(55,"div",5),r.TgZ(56,"span"),r._uU(57,"Aug 4, 2020"),r.qZA(),r.TgZ(58,"p"),r._uU(59,"- Added multi character support to the daily and weekly tracker."),r.qZA(),r.qZA(),r.TgZ(60,"div",5),r.TgZ(61,"span"),r._uU(62,"Aug 1, 2020"),r.qZA(),r.TgZ(63,"p"),r._uU(64,"- Implemented the home page."),r.qZA(),r.TgZ(65,"p"),r._uU(66,"- Fixed an issue in the weeklies tracker for timezones that are behind UTC."),r.qZA(),r.qZA(),r.TgZ(67,"div",5),r.TgZ(68,"span"),r._uU(69,"July 30, 2020"),r.qZA(),r.TgZ(70,"p"),r._uU(71,"- Added the weeklies tracker."),r.qZA(),r.qZA(),r.TgZ(72,"div",5),r.TgZ(73,"span"),r._uU(74,"July 29, 2020"),r.qZA(),r.TgZ(75,"p"),r._uU(76,"- Added the dailies tracker."),r.qZA(),r.qZA(),r.TgZ(77,"div",5),r.TgZ(78,"span"),r._uU(79,"July 28, 2020"),r.qZA(),r.TgZ(80,"p"),r._uU(81,"- Added the arcane symbol calculator."),r.qZA(),r.qZA(),r.qZA(),r.qZA())},directives:[d.G],styles:[".contentPageOverride[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center;font-size:25px;text-decoration:underline;margin:5px 0 0}.contentPageOverride[_ngcontent-%COMP%]{width:800px;background-color:var(--content-page-background-color);border:1px solid var(--content-page-border-color);min-height:calc(100vh - 72px);margin:8px auto 0}.contentPageOverride[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}.contentPageOverride[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]{margin-left:50px;margin-right:50px;font-size:18px}.changeLog[_ngcontent-%COMP%]{margin-top:100px;margin-left:50px;margin-right:50px;font-size:16px}.changeLog[_ngcontent-%COMP%]   .changeLogTitle[_ngcontent-%COMP%]{margin:0;font-size:18px;text-decoration:underline}.individualLog[_ngcontent-%COMP%]{margin-top:5px;font-size:16px}.individualLog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 0 10px}@media only screen and (max-width:1305px){.contentPageOverride[_ngcontent-%COMP%]{float:left;margin:unset;margin-top:8px;margin-left:9px}}@media only screen and (max-width:1061px){.contentPageOverride[_ngcontent-%COMP%]{width:calc(100% - 262px)}}@media only screen and (max-width:800px){.contentPageOverride[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px;min-height:calc(100vh - 100px);width:calc(100% - 18px)}}"]}),e})()}];let s=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[o.Bz.forChild(c)],o.Bz]}),e})();var g=n(56928);let p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[a.ez,s,g.C]]}),e})()}}]);