(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/SLC":function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a("fXoL"),i=a("tyNb");let l=(()=>{class e{constructor(e){this.router=e}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(n.Jb(i.b))},e.\u0275cmp=n.Db({type:e,selectors:[["app-maplestory-side-navigation"]],decls:42,vars:24,consts:[[1,"sidenavbar"],[1,"sidenavbartitle"],[3,"routerLink"],[1,"horizontalSeparator"],["href","https://www.buymeacoffee.com/starlines","target","_blank"]],template:function(e,t){1&e&&(n.Ob(0,"div",0),n.Ob(1,"div",1),n.qc(2,"Maplestory"),n.Nb(),n.Ob(3,"p"),n.qc(4,"General"),n.Nb(),n.Ob(5,"a",2),n.Ob(6,"span"),n.qc(7,"Home"),n.Nb(),n.Nb(),n.Kb(8,"div",3),n.Ob(9,"p"),n.qc(10,"Calculators"),n.Nb(),n.Ob(11,"a",2),n.Ob(12,"span"),n.qc(13,"Arcane symbols"),n.Nb(),n.Nb(),n.Ob(14,"a",2),n.Ob(15,"span"),n.qc(16,"Sacred symbols"),n.Nb(),n.Nb(),n.Ob(17,"a",2),n.Ob(18,"span"),n.qc(19,"Item flames"),n.Nb(),n.Nb(),n.Ob(20,"a",2),n.Ob(21,"span"),n.qc(22,"Weapon flame"),n.Nb(),n.Nb(),n.Kb(23,"div",3),n.Ob(24,"p"),n.qc(25,"Trackers"),n.Nb(),n.Ob(26,"a",2),n.Ob(27,"span"),n.qc(28,"Dailies"),n.Nb(),n.Nb(),n.Ob(29,"a",2),n.Ob(30,"span"),n.qc(31,"Weeklies"),n.Nb(),n.Nb(),n.Kb(32,"div",3),n.Ob(33,"a",2),n.Ob(34,"span"),n.qc(35,"Export settings"),n.Nb(),n.Nb(),n.Kb(36,"div",3),n.Ob(37,"p"),n.qc(38,"Enjoying my creations?"),n.Nb(),n.Ob(39,"a",4),n.Ob(40,"span"),n.qc(41,"consider donating here"),n.Nb(),n.Nb(),n.Nb()),2&e&&(n.zb(5),n.bc("routerLink","/games/maplestory/home"),n.zb(1),n.Bb("sidenavbaractivelink",t.router.isActive("/games/maplestory/home",!1)),n.zb(5),n.bc("routerLink","/games/maplestory/arcane-symbols"),n.zb(1),n.Bb("sidenavbaractivelink",t.router.isActive("/games/maplestory/arcane-symbols",!1)),n.zb(2),n.bc("routerLink","/games/maplestory/sacred-symbols"),n.zb(1),n.Bb("sidenavbaractivelink",t.router.isActive("/games/maplestory/sacred-symbols",!1)),n.zb(2),n.bc("routerLink","/games/maplestory/item-flames"),n.zb(1),n.Bb("sidenavbaractivelink",t.router.isActive("/games/maplestory/item-flames",!1)),n.zb(2),n.bc("routerLink","/games/maplestory/weapon-flame"),n.zb(1),n.Bb("sidenavbaractivelink",t.router.isActive("/games/maplestory/weapon-flame",!1)),n.zb(5),n.bc("routerLink","/games/maplestory/dailies"),n.zb(1),n.Bb("sidenavbaractivelink",t.router.isActive("/games/maplestory/dailies",!1)),n.zb(2),n.bc("routerLink","/games/maplestory/weeklies"),n.zb(1),n.Bb("sidenavbaractivelink",t.router.isActive("/games/maplestory/weeklies",!1)),n.zb(3),n.bc("routerLink","/games/maplestory/settings"),n.zb(1),n.Bb("sidenavbaractivelink",t.router.isActive("/games/maplestory/settings",!1)))},directives:[i.c],styles:[""]}),e})()},GMpm:function(e,t,a){"use strict";a.r(t),a.d(t,"MaplestoryWeaponFlameCalculatorModule",function(){return g});var n=a("ofXK"),i=a("tyNb"),l=a("fXoL"),r=a("jhN1"),c=a("/SLC"),o=a("3Pt+");function b(e,t){if(1&e&&(l.Ob(0,"option",16),l.qc(1),l.Nb()),2&e){const e=t.$implicit,a=t.index,n=l.Yb();l.bc("selected",a==n.weaponFlameData.selectedItemLevelRangeIndex),l.zb(1),l.rc(e)}}const s=function(e){return{hidden:e}},p=function(){return{standalone:!0}},m=[{path:"",component:(()=>{class e{constructor(e,t){this.titleService=e,this.metaService=t,this.normalWeaponTierMultipliers=[.01,.022,.03626,.05325,.073,.088,.1025],this.advantageWeaponTierMultipliers=[.03,.044,.0605,.0799,.1025],this.itemLevelRanges=["0-39","40-79","80-119","120-159","160-199","200-239","240-275"],this.calculatedTier=0,this.tableOutput=new Array(7)}ngOnInit(){this.titleService.setTitle("Maplestory Weapon Flame Calculator | Random Stuff"),this.metaService.updateTag({name:"description",content:"Maplestory weapon flame calculator to determine the tier of an attack flame on a weapon."}),this.metaService.getTag("name='robots'")?this.metaService.updateTag({name:"robots",content:"index, follow"}):this.metaService.addTag({name:"robots",content:"index, follow"}),this.initialise()}initialise(){localStorage.getItem("weaponFlameData")?(this.weaponFlameData=JSON.parse(localStorage.getItem("weaponFlameData")),this.calculateWeaponFlameTier()):this.weaponFlameData={flameAdvantage:!1,baseAttack:null,flameAttack:null,selectedItemLevelRangeIndex:0}}calculateWeaponFlameTier(){var e=this.weaponFlameData.flameAdvantage?this.advantageWeaponTierMultipliers:this.normalWeaponTierMultipliers;this.tableOutput=this.weaponFlameData.flameAdvantage?[null,null]:[],this.calculatedTier=0,e.forEach((e,t)=>{var a=Math.ceil((this.weaponFlameData.selectedItemLevelRangeIndex+1)*e*this.weaponFlameData.baseAttack)||0;this.tableOutput.push(a),this.weaponFlameData.flameAttack==a&&0!=a&&(this.calculatedTier+=t+1,this.calculatedTier=this.weaponFlameData.flameAdvantage?this.calculatedTier+2:this.calculatedTier)})}itemLevelRangeChange(e){this.weaponFlameData.selectedItemLevelRangeIndex=e.target.selectedIndex,this.changeHandler()}changeHandler(){this.calculateWeaponFlameTier(),localStorage.setItem("weaponFlameData",JSON.stringify(this.weaponFlameData))}}return e.\u0275fac=function(t){return new(t||e)(l.Jb(r.c),l.Jb(r.b))},e.\u0275cmp=l.Db({type:e,selectors:[["app-maplestory-weapon-flame-calculator"]],decls:57,vars:17,consts:[[1,"editedGamePageContent"],[1,"flameOutput"],[3,"ngClass"],[1,"flameInput"],[1,"inputLabelWrapper"],["for","baseAttack"],["name","baseAttack","id","baseAttack","type","number",1,"numberInput",3,"ngModel","ngModelChange","input"],["for","flameAttack"],["name","flameAttack","id","flameAttack","type","number",1,"numberInput",3,"ngModel","ngModelChange","input"],["for","itemLevel"],["name","itemLevel","id","itemLevel",1,"select",3,"change"],["value","r",3,"selected",4,"ngFor","ngForOf"],[1,"checkboxWrapper"],["for","flameAdvantage"],["name","flameAdvantage","id","flameAdvantage","type","checkbox",3,"ngModel","ngModelOptions","ngModelChange","change"],[1,"tableOutputWrapper"],["value","r",3,"selected"]],template:function(e,t){1&e&&(l.Kb(0,"app-maplestory-side-navigation"),l.Ob(1,"div",0),l.Ob(2,"div",1),l.qc(3," Tier: "),l.Ob(4,"span",2),l.qc(5),l.Nb(),l.Nb(),l.Ob(6,"div",3),l.Ob(7,"div",4),l.Ob(8,"label",5),l.qc(9,"Base Attack"),l.Nb(),l.Ob(10,"input",6),l.Vb("ngModelChange",function(e){return t.weaponFlameData.baseAttack=e})("input",function(){return t.changeHandler()}),l.Nb(),l.Nb(),l.Ob(11,"div",4),l.Ob(12,"label",7),l.qc(13,"Flame Attack"),l.Nb(),l.Ob(14,"input",8),l.Vb("ngModelChange",function(e){return t.weaponFlameData.flameAttack=e})("input",function(){return t.changeHandler()}),l.Nb(),l.Nb(),l.Ob(15,"div",4),l.Ob(16,"label",9),l.qc(17,"Weapon Level"),l.Nb(),l.Ob(18,"select",10),l.Vb("change",function(e){return t.itemLevelRangeChange(e)}),l.pc(19,b,2,2,"option",11),l.Nb(),l.Nb(),l.Ob(20,"div",12),l.Ob(21,"label",13),l.qc(22,"Flame Advantage"),l.Nb(),l.Ob(23,"input",14),l.Vb("ngModelChange",function(e){return t.weaponFlameData.flameAdvantage=e})("change",function(){return t.changeHandler()}),l.Nb(),l.Nb(),l.Nb(),l.Ob(24,"div",15),l.qc(25," Attack for each tier "),l.Ob(26,"table"),l.Ob(27,"tr"),l.Ob(28,"th"),l.qc(29,"1"),l.Nb(),l.Ob(30,"th"),l.qc(31,"2"),l.Nb(),l.Ob(32,"th"),l.qc(33,"3"),l.Nb(),l.Ob(34,"th"),l.qc(35,"4"),l.Nb(),l.Ob(36,"th"),l.qc(37,"5"),l.Nb(),l.Ob(38,"th"),l.qc(39,"6"),l.Nb(),l.Ob(40,"th"),l.qc(41,"7"),l.Nb(),l.Nb(),l.Ob(42,"tr"),l.Ob(43,"td"),l.qc(44),l.Nb(),l.Ob(45,"td"),l.qc(46),l.Nb(),l.Ob(47,"td"),l.qc(48),l.Nb(),l.Ob(49,"td"),l.qc(50),l.Nb(),l.Ob(51,"td"),l.qc(52),l.Nb(),l.Ob(53,"td"),l.qc(54),l.Nb(),l.Ob(55,"td"),l.qc(56),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&e&&(l.zb(4),l.bc("ngClass",l.gc(14,s,0==t.calculatedTier)),l.zb(1),l.rc(t.calculatedTier),l.zb(5),l.bc("ngModel",t.weaponFlameData.baseAttack),l.zb(4),l.bc("ngModel",t.weaponFlameData.flameAttack),l.zb(5),l.bc("ngForOf",t.itemLevelRanges),l.zb(4),l.bc("ngModel",t.weaponFlameData.flameAdvantage)("ngModelOptions",l.fc(16,p)),l.zb(21),l.rc(t.tableOutput[0]),l.zb(2),l.rc(t.tableOutput[1]),l.zb(2),l.rc(t.tableOutput[2]),l.zb(2),l.rc(t.tableOutput[3]),l.zb(2),l.rc(t.tableOutput[4]),l.zb(2),l.rc(t.tableOutput[5]),l.zb(2),l.rc(t.tableOutput[6]))},directives:[c.a,n.i,o.j,o.b,o.e,o.h,n.j,o.a,o.i,o.m],styles:[".editedGamePageContent[_ngcontent-%COMP%]{position:relative;width:600px;background-color:var(--game-page-background-color);border:1px solid var(--game-page-border-color);min-height:calc(100vh - 87px);padding-top:15px;margin:8px auto}.hidden[_ngcontent-%COMP%]{visibility:hidden}.select[_ngcontent-%COMP%]{margin-top:3px}.numberInput[_ngcontent-%COMP%], .select[_ngcontent-%COMP%]{width:240px}.checkboxWrapper[_ngcontent-%COMP%]{margin:1px 0 0 -1px;padding:0}.flameInput[_ngcontent-%COMP%], .flameOutput[_ngcontent-%COMP%]{width:240px;margin:0 auto}.flameOutput[_ngcontent-%COMP%]{font-size:20px;text-align:center;margin-bottom:4px}.tableOutputWrapper[_ngcontent-%COMP%]{width:240px;margin:15px auto 0;text-align:center}.tableOutputWrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.tableOutputWrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{width:30px;height:21px;text-align:center;border:1px solid gray}@media only screen and (max-width:1104px){.editedGamePageContent[_ngcontent-%COMP%]{float:left;margin:unset;margin-top:8px;margin-left:9px}}@media only screen and (max-width:862px){.editedGamePageContent[_ngcontent-%COMP%]{width:calc(100% - 262px)}.explanation[_ngcontent-%COMP%]{max-width:360px}}@media only screen and (max-width:813px){.editedGamePageContent[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px;min-height:calc(100vh - 100px);width:calc(100% - 18px)}}"]}),e})()}];let d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({imports:[[i.d.forChild(m)],i.d]}),e})();var u=a("I9VR");let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({imports:[[n.b,d,u.a]]}),e})()},I9VR:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a("ofXK"),i=a("H8qh"),l=a("fXoL");let r=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({imports:[[n.b,i.a],i.a]}),e})()}}]);