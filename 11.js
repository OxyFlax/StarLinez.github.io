"use strict";(self.webpackChunkRandomProject=self.webpackChunkRandomProject||[]).push([[11],{55011:(_,d,u)=>{u.r(d),u.d(d,{MaplestoryArcaneSymbolsModule:()=>X});var t=u(96814),m=u(15251);const g=JSON.parse('{"x":[{"level":1,"stat":300,"statXenon":144,"statDemonAvenger":6300,"arcaneForce":30,"symbolExpRequired":12},{"level":2,"stat":400,"statXenon":192,"statDemonAvenger":8400,"arcaneForce":40,"symbolExpRequired":15},{"level":3,"stat":500,"statXenon":240,"statDemonAvenger":10500,"arcaneForce":50,"symbolExpRequired":20},{"level":4,"stat":600,"statXenon":288,"statDemonAvenger":12600,"arcaneForce":60,"symbolExpRequired":27},{"level":5,"stat":700,"statXenon":336,"statDemonAvenger":14700,"arcaneForce":70,"symbolExpRequired":36},{"level":6,"stat":800,"statXenon":384,"statDemonAvenger":16800,"arcaneForce":80,"symbolExpRequired":47},{"level":7,"stat":900,"statXenon":432,"statDemonAvenger":18900,"arcaneForce":90,"symbolExpRequired":60},{"level":8,"stat":1000,"statXenon":480,"statDemonAvenger":21000,"arcaneForce":100,"symbolExpRequired":75},{"level":9,"stat":1100,"statXenon":528,"statDemonAvenger":23100,"arcaneForce":110,"symbolExpRequired":92},{"level":10,"stat":1200,"statXenon":576,"statDemonAvenger":25200,"arcaneForce":120,"symbolExpRequired":111},{"level":11,"stat":1300,"statXenon":624,"statDemonAvenger":27300,"arcaneForce":130,"symbolExpRequired":132},{"level":12,"stat":1400,"statXenon":672,"statDemonAvenger":29400,"arcaneForce":140,"symbolExpRequired":155},{"level":13,"stat":1500,"statXenon":720,"statDemonAvenger":31500,"arcaneForce":150,"symbolExpRequired":180},{"level":14,"stat":1600,"statXenon":768,"statDemonAvenger":33600,"arcaneForce":160,"symbolExpRequired":207},{"level":15,"stat":1700,"statXenon":816,"statDemonAvenger":35700,"arcaneForce":170,"symbolExpRequired":236},{"level":16,"stat":1800,"statXenon":864,"statDemonAvenger":37800,"arcaneForce":180,"symbolExpRequired":267},{"level":17,"stat":1900,"statXenon":912,"statDemonAvenger":39900,"arcaneForce":190,"symbolExpRequired":300},{"level":18,"stat":2000,"statXenon":960,"statDemonAvenger":42000,"arcaneForce":200,"symbolExpRequired":335},{"level":19,"stat":2100,"statXenon":1008,"statDemonAvenger":44100,"arcaneForce":210,"symbolExpRequired":372},{"level":20,"stat":2200,"statXenon":1056,"statDemonAvenger":46200,"arcaneForce":220,"symbolExpRequired":0}]}'),c=JSON.parse('{"sg":[7070000,11030000,14990000,18950000,22910000,26870000,30830000,34790000,38750000,42710000,46670000,50630000,54590000,58550000,62510000,66470000,70430000,74390000,78350000,0],"tK":[10840000,15460000,20080000,24700000,29320000,33940000,38560000,43180000,47800000,52420000,57040000,61660000,66280000,70900000,75520000,80140000,84760000,89380000,94000000,0],"QA":[14610000,19890000,25170000,30450000,35730000,41010000,46290000,51570000,56850000,62130000,67410000,72690000,77970000,83250000,88530000,93810000,99090000,104370000,109650000,0],"BV":[17136000,23076000,29016000,34956000,40896000,46836000,52776000,58716000,64656000,70596000,76536000,82476000,88416000,94356000,100296000,106236000,112176000,118116000,124056000,0],"se":[17136000,23076000,29016000,34956000,40896000,46836000,52776000,58716000,64656000,70596000,76536000,82476000,88416000,94356000,100296000,106236000,112176000,118116000,124056000,0],"Lf":[17136000,23076000,29016000,34956000,40896000,46836000,52776000,58716000,64656000,70596000,76536000,82476000,88416000,94356000,100296000,106236000,112176000,118116000,124056000,0]}');var e=u(52425),o=u(40285);const h=()=>({standalone:!0});let p=(()=>{class s{constructor(){this.valueChange=new e.vpe,this.dailyQuest=!0,this.reverseCity=!1,this.erdaSpectrum=!0}ngOnInit(){}calculateDailySymbols(){var n=0;return this.dailyQuest&&(n+=10),this.reverseCity&&(n+=10),this.erdaSpectrum&&(n+=45/7),n}valueChanged(){this.valueChange.emit()}static#e=this.\u0275fac=function(i){return new(i||s)};static#a=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-vanishing-journey"]],outputs:{valueChange:"valueChange"},decls:17,vars:9,consts:[[1,"symbolInput"],[1,"checkboxWrapper"],["name","dailyQuest","id","dailyQuest","type","checkbox",3,"ngModel","ngModelOptions","change","ngModelChange"],["for","dailyQuest"],["name","reverseCity","id","reverseCity","type","checkbox",3,"ngModel","ngModelOptions","change","ngModelChange"],["for","reverseCity"],[1,"symbolDailyTitle"],["name","erdaSpectrum","id","erdaSpectrum","type","checkbox",3,"ngModel","ngModelOptions","change","ngModelChange"],["for","erdaSpectrum"]],template:function(i,a){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"input",2),e.NdJ("change",function(){return a.valueChanged()})("ngModelChange",function(l){return a.dailyQuest=l}),e.qZA(),e.TgZ(3,"label",3),e._uU(4,"Daily Quest (10)"),e.qZA()()(),e.TgZ(5,"div",0)(6,"div",1)(7,"input",4),e.NdJ("change",function(){return a.valueChanged()})("ngModelChange",function(l){return a.reverseCity=l}),e.qZA(),e.TgZ(8,"label",5),e._uU(9,"Reverse City Unlocked (10)"),e.qZA()()(),e.TgZ(10,"p",6),e._uU(11,"Weekly Symbols"),e.qZA(),e.TgZ(12,"div",0)(13,"div",1)(14,"input",7),e.NdJ("change",function(){return a.valueChanged()})("ngModelChange",function(l){return a.erdaSpectrum=l}),e.qZA(),e.TgZ(15,"label",8),e._uU(16,"Erda Spectrum (45)"),e.qZA()()()),2&i&&(e.xp6(2),e.Q6J("ngModel",a.dailyQuest)("ngModelOptions",e.DdM(6,h)),e.xp6(5),e.Q6J("ngModel",a.reverseCity)("ngModelOptions",e.DdM(7,h)),e.xp6(7),e.Q6J("ngModel",a.erdaSpectrum)("ngModelOptions",e.DdM(8,h)))},dependencies:[o.Wl,o.JJ,o.On],styles:[".symbolDailyTitle[_ngcontent-%COMP%]{width:100%;text-align:center;text-decoration:underline;font-size:18px;margin:10px 0 2px}.checkboxWrapper[_ngcontent-%COMP%]{width:230px}"]})}return s})();const v=()=>({standalone:!0});let b=(()=>{class s{constructor(){this.valueChange=new e.vpe,this.clearOutput=new e.vpe,this.dailyQuest=!0,this.yumYumIsland=!1,this.hungryMuto=!0}ngOnInit(){}calculateDailySymbols(){var n=0;return this.dailyQuest&&(n+=10),this.yumYumIsland&&(n+=10),this.hungryMuto&&(n+=45/7),n}valueChanged(){this.valueChange.emit()}emitClearOutput(){this.clearOutput.emit()}static#e=this.\u0275fac=function(i){return new(i||s)};static#a=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-chu-chu"]],outputs:{valueChange:"valueChange",clearOutput:"clearOutput"},decls:17,vars:9,consts:[[1,"symbolInput"],[1,"checkboxWrapper"],["name","dailyQuest","id","dailyQuest","type","checkbox",3,"ngModel","ngModelOptions","change","ngModelChange"],["for","dailyQuest"],["name","yumYumIsland","id","yumYumIsland","type","checkbox",3,"ngModel","ngModelOptions","change","ngModelChange"],["for","yumYumIsland"],[1,"symbolDailyTitle"],["name","hungryMuto","id","hungryMuto","type","checkbox",3,"ngModel","ngModelOptions","change","ngModelChange"],["for","hungryMuto"]],template:function(i,a){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"input",2),e.NdJ("change",function(){return a.valueChanged()})("ngModelChange",function(l){return a.dailyQuest=l}),e.qZA(),e.TgZ(3,"label",3),e._uU(4,"Daily Quest (10)"),e.qZA()()(),e.TgZ(5,"div",0)(6,"div",1)(7,"input",4),e.NdJ("change",function(){return a.valueChanged()})("ngModelChange",function(l){return a.yumYumIsland=l}),e.qZA(),e.TgZ(8,"label",5),e._uU(9,"Yum Yum Unlocked (10)"),e.qZA()()(),e.TgZ(10,"p",6),e._uU(11,"Weekly Symbols"),e.qZA(),e.TgZ(12,"div",0)(13,"div",1)(14,"input",7),e.NdJ("change",function(){return a.valueChanged()})("ngModelChange",function(l){return a.hungryMuto=l}),e.qZA(),e.TgZ(15,"label",8),e._uU(16,"Hungry Muto (45)"),e.qZA()()()),2&i&&(e.xp6(2),e.Q6J("ngModel",a.dailyQuest)("ngModelOptions",e.DdM(6,v)),e.xp6(5),e.Q6J("ngModel",a.yumYumIsland)("ngModelOptions",e.DdM(7,v)),e.xp6(7),e.Q6J("ngModel",a.hungryMuto)("ngModelOptions",e.DdM(8,v)))},dependencies:[o.Wl,o.JJ,o.On],styles:[".symbolDailyTitle[_ngcontent-%COMP%]{width:100%;text-align:center;text-decoration:underline;font-size:18px;margin:10px 0 2px}.checkboxWrapper[_ngcontent-%COMP%]{width:230px}"]})}return s})();const C=()=>({standalone:!0});let S=(()=>{class s{constructor(){this.valueChange=new e.vpe,this.clearOutput=new e.vpe,this.dailyQuest=!0,this.midnightChaser=!0}ngOnInit(){}calculateDailySymbols(){var n=0;return this.dailyQuest&&(n+=20),this.midnightChaser&&(n+=45/7),n}valueChanged(){this.valueChange.emit()}emitClearOutput(){this.clearOutput.emit()}static#e=this.\u0275fac=function(i){return new(i||s)};static#a=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-lachelein"]],outputs:{valueChange:"valueChange",clearOutput:"clearOutput"},decls:12,vars:6,consts:[[1,"symbolInput"],[1,"checkboxWrapper"],["name","dailyQuest","id","dailyQuest","type","checkbox",3,"ngModel","ngModelOptions","change","ngModelChange"],["for","dailyQuest"],[1,"symbolDailyTitle"],["name","midnightChaser","id","midnightChaser","type","checkbox",3,"ngModel","ngModelOptions","change","ngModelChange"],["for","midnightChaser"]],template:function(i,a){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"input",2),e.NdJ("change",function(){return a.valueChanged()})("ngModelChange",function(l){return a.dailyQuest=l}),e.qZA(),e.TgZ(3,"label",3),e._uU(4,"Daily Quest (20)"),e.qZA()()(),e.TgZ(5,"p",4),e._uU(6,"Weekly Symbols"),e.qZA(),e.TgZ(7,"div",0)(8,"div",1)(9,"input",5),e.NdJ("change",function(){return a.valueChanged()})("ngModelChange",function(l){return a.midnightChaser=l}),e.qZA(),e.TgZ(10,"label",6),e._uU(11,"Midnight Chaser (45)"),e.qZA()()()),2&i&&(e.xp6(2),e.Q6J("ngModel",a.dailyQuest)("ngModelOptions",e.DdM(4,C)),e.xp6(7),e.Q6J("ngModel",a.midnightChaser)("ngModelOptions",e.DdM(5,C)))},dependencies:[o.Wl,o.JJ,o.On],styles:[".symbolDailyTitle[_ngcontent-%COMP%]{width:100%;text-align:center;text-decoration:underline;font-size:18px;margin:10px 0 2px}"]})}return s})();const f=()=>({standalone:!0});let M=(()=>{class s{constructor(){this.valueChange=new e.vpe,this.clearOutput=new e.vpe,this.dailyQuest=!0,this.spiritSaviour=!0}ngOnInit(){}calculateDailySymbols(){var n=0;return this.dailyQuest&&(n+=20),this.spiritSaviour&&(n+=45/7),n}valueChanged(){this.valueChange.emit()}emitClearOutput(){this.clearOutput.emit()}static#e=this.\u0275fac=function(i){return new(i||s)};static#a=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-arcana"]],outputs:{valueChange:"valueChange",clearOutput:"clearOutput"},decls:12,vars:6,consts:[[1,"symbolInput"],[1,"checkboxWrapper"],["name","dailyQuest","id","dailyQuest","type","checkbox",3,"ngModel","ngModelOptions","change","ngModelChange"],["for","dailyQuest"],[1,"symbolDailyTitle"],["name","spiritSaviour","id","spiritSaviour","type","checkbox",3,"ngModel","ngModelOptions","change","ngModelChange"],["for","spiritSaviour"]],template:function(i,a){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"input",2),e.NdJ("change",function(){return a.valueChanged()})("ngModelChange",function(l){return a.dailyQuest=l}),e.qZA(),e.TgZ(3,"label",3),e._uU(4,"Daily Quest (20)"),e.qZA()()(),e.TgZ(5,"p",4),e._uU(6,"Weekly Symbols"),e.qZA(),e.TgZ(7,"div",0)(8,"div",1)(9,"input",5),e.NdJ("change",function(){return a.valueChanged()})("ngModelChange",function(l){return a.spiritSaviour=l}),e.qZA(),e.TgZ(10,"label",6),e._uU(11,"Spirit Saviour (45)"),e.qZA()()()),2&i&&(e.xp6(2),e.Q6J("ngModel",a.dailyQuest)("ngModelOptions",e.DdM(4,f)),e.xp6(7),e.Q6J("ngModel",a.spiritSaviour)("ngModelOptions",e.DdM(5,f)))},dependencies:[o.Wl,o.JJ,o.On],styles:[".symbolDailyTitle[_ngcontent-%COMP%]{width:100%;text-align:center;text-decoration:underline;font-size:18px;margin:10px 0 2px}"]})}return s})();const A=()=>({standalone:!0});let x=(()=>{class s{constructor(){this.valueChange=new e.vpe,this.dailyQuest=!0,this.ranheimDefense=!0}ngOnInit(){}calculateDailySymbols(){var n=0;return this.dailyQuest&&(n+=20),this.ranheimDefense&&(n+=45/7),n}valueChanged(){this.valueChange.emit()}static#e=this.\u0275fac=function(i){return new(i||s)};static#a=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-morass"]],outputs:{valueChange:"valueChange"},decls:12,vars:6,consts:[[1,"symbolInput"],[1,"checkboxWrapper"],["name","dailyQuest","id","dailyQuest","type","checkbox",3,"ngModel","ngModelOptions","change","ngModelChange"],["for","dailyQuest"],[1,"symbolDailyTitle"],["name","ranheimDefense","id","ranheimDefense","type","checkbox",3,"ngModel","ngModelOptions","change","ngModelChange"],["for","ranheimDefense"]],template:function(i,a){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"input",2),e.NdJ("change",function(){return a.valueChanged()})("ngModelChange",function(l){return a.dailyQuest=l}),e.qZA(),e.TgZ(3,"label",3),e._uU(4,"Daily Quest (20)"),e.qZA()()(),e.TgZ(5,"p",4),e._uU(6,"Weekly Symbols"),e.qZA(),e.TgZ(7,"div",0)(8,"div",1)(9,"input",5),e.NdJ("change",function(){return a.valueChanged()})("ngModelChange",function(l){return a.ranheimDefense=l}),e.qZA(),e.TgZ(10,"label",6),e._uU(11,"Ranheim Defense (45)"),e.qZA()()()),2&i&&(e.xp6(2),e.Q6J("ngModel",a.dailyQuest)("ngModelOptions",e.DdM(4,A)),e.xp6(7),e.Q6J("ngModel",a.ranheimDefense)("ngModelOptions",e.DdM(5,A)))},dependencies:[o.Wl,o.JJ,o.On],styles:[".symbolDailyTitle[_ngcontent-%COMP%]{width:100%;text-align:center;text-decoration:underline;font-size:18px;margin:10px 0 2px}"]})}return s})();const D=()=>({standalone:!0});let Z=(()=>{class s{constructor(){this.valueChange=new e.vpe,this.dailyQuest=!0,this.esferaGuardian=!0}ngOnInit(){}calculateDailySymbols(){var n=0;return this.dailyQuest&&(n+=20),this.esferaGuardian&&(n+=45/7),n}valueChanged(){this.valueChange.emit()}static#e=this.\u0275fac=function(i){return new(i||s)};static#a=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-esfera"]],outputs:{valueChange:"valueChange"},decls:12,vars:6,consts:[[1,"symbolInput"],[1,"checkboxWrapper"],["name","dailyQuest","id","dailyQuest","type","checkbox",3,"ngModel","ngModelOptions","change","ngModelChange"],["for","dailyQuest"],[1,"symbolDailyTitle"],["name","esferaGuardian","id","esferaGuardian","type","checkbox",3,"ngModel","ngModelOptions","change","ngModelChange"],["for","esferaGuardian"]],template:function(i,a){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"input",2),e.NdJ("change",function(){return a.valueChanged()})("ngModelChange",function(l){return a.dailyQuest=l}),e.qZA(),e.TgZ(3,"label",3),e._uU(4,"Daily Quest (20)"),e.qZA()()(),e.TgZ(5,"p",4),e._uU(6,"Weekly Symbols"),e.qZA(),e.TgZ(7,"div",0)(8,"div",1)(9,"input",5),e.NdJ("change",function(){return a.valueChanged()})("ngModelChange",function(l){return a.esferaGuardian=l}),e.qZA(),e.TgZ(10,"label",6),e._uU(11,"Esfera Guardian (45)"),e.qZA()()()),2&i&&(e.xp6(2),e.Q6J("ngModel",a.dailyQuest)("ngModelOptions",e.DdM(4,D)),e.xp6(7),e.Q6J("ngModel",a.esferaGuardian)("ngModelOptions",e.DdM(5,D)))},dependencies:[o.Wl,o.JJ,o.On],styles:[".symbolDailyTitle[_ngcontent-%COMP%]{width:100%;text-align:center;text-decoration:underline;font-size:18px;margin:10px 0 2px}"]})}return s})();var T=u(6593),O=u(91288);function Q(s,y){if(1&s){const n=e.EpF();e.TgZ(0,"app-vanishing-journey",35),e.NdJ("valueChange",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.submit())}),e.qZA()}}function J(s,y){if(1&s){const n=e.EpF();e.TgZ(0,"app-chu-chu",36),e.NdJ("valueChange",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.submit())})("clearOutput",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.clearOutputVariables())}),e.qZA()}}function L(s,y){if(1&s){const n=e.EpF();e.TgZ(0,"app-lachelein",36),e.NdJ("valueChange",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.submit())})("clearOutput",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.clearOutputVariables())}),e.qZA()}}function k(s,y){if(1&s){const n=e.EpF();e.TgZ(0,"app-arcana",36),e.NdJ("valueChange",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.submit())})("clearOutput",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.clearOutputVariables())}),e.qZA()}}function q(s,y){if(1&s){const n=e.EpF();e.TgZ(0,"app-morass",35),e.NdJ("valueChange",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.submit())}),e.qZA()}}function I(s,y){if(1&s){const n=e.EpF();e.TgZ(0,"app-esfera",35),e.NdJ("valueChange",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.submit())}),e.qZA()}}const G=[{path:"",component:(()=>{class s{constructor(n,i,a){this.changeDetector=n,this.titleService=i,this.metaService=a,this.arcaneSymbolStats=g.x,this.arcaneSymbolCost=c.sg,this.arcaneSymbolNames=["Vanishing Journey","Chu Chu","Lachelein","Arcana","Morass","Esfera"],this.currentLevel=1,this.currentXp=1,this.activeSymbolIndex=0,this.daysLeft=0,this.upgradeCost=0,this.arcaneForceGain=0,this.statGain=0,this.xenonStatGain=0,this.demonAvengerHpGain=0}ngOnInit(){this.titleService.setTitle("Maplestory Arcane Symbol Calculator | Random Stuff"),this.metaService.updateTag({name:"description",content:"An arcane symbol calculator to determine the amount of time & money required to max out a symbol."}),this.metaService.getTag("name='robots'")?this.metaService.updateTag({name:"robots",content:"index, follow"}):this.metaService.addTag({name:"robots",content:"index, follow"}),this.initialise()}initialise(){localStorage.getItem("arcaneSymbolSaveDataV2")?this.arcaneSymbolSaveData=JSON.parse(localStorage.getItem("arcaneSymbolSaveDataV2")):this.initiateData(),this.changeActiveSymbolIndex(0)}initiateData(){this.arcaneSymbolSaveData={vjLevel:1,vjExp:1,vjDailyQuest:!0,vjReverseCity:!1,vjErdaSpectrum:!0,chuchuLevel:1,chuchuExp:1,chuchuDailyQuest:!0,chuchuYumYumIsland:!1,chuchuHungryMuto:!0,lachLevel:1,lachExp:1,lachDailyQuest:!0,lachMidnightChaser:!0,arcanaLevel:1,arcanaExp:1,arcanaDailyQuest:!0,arcanaSpiritSaviour:!0,morassLevel:1,morassExp:1,morassDailyQuest:!0,moreassRanheimDefense:!0,esferaLevel:1,esferaExp:1,esferaDailyQuest:!0,esferaGuardian:!0},localStorage.setItem("arcaneSymbolSaveDataV2",JSON.stringify(this.arcaneSymbolSaveData))}changeActiveSymbolIndex(n){switch(this.activeSymbolIndex=n,this.changeDetector.detectChanges(),this.activeSymbolIndex){case 0:this.arcaneSymbolCost=c.sg,this.currentLevel=this.arcaneSymbolSaveData.vjLevel,this.currentXp=this.arcaneSymbolSaveData.vjExp,this.vanishingJourneyChild.dailyQuest=this.arcaneSymbolSaveData.vjDailyQuest,this.vanishingJourneyChild.erdaSpectrum=this.arcaneSymbolSaveData.vjErdaSpectrum,this.vanishingJourneyChild.reverseCity=this.arcaneSymbolSaveData.vjReverseCity;break;case 1:this.arcaneSymbolCost=c.tK,this.currentLevel=this.arcaneSymbolSaveData.chuchuLevel,this.currentXp=this.arcaneSymbolSaveData.chuchuExp,this.chuChuChild.dailyQuest=this.arcaneSymbolSaveData.chuchuDailyQuest,this.chuChuChild.hungryMuto=this.arcaneSymbolSaveData.chuchuHungryMuto,this.chuChuChild.yumYumIsland=this.arcaneSymbolSaveData.chuchuYumYumIsland;break;case 2:this.arcaneSymbolCost=c.QA,this.currentLevel=this.arcaneSymbolSaveData.lachLevel,this.currentXp=this.arcaneSymbolSaveData.lachExp,this.lacheleinChild.dailyQuest=this.arcaneSymbolSaveData.lachDailyQuest,this.lacheleinChild.midnightChaser=this.arcaneSymbolSaveData.lachMidnightChaser;break;case 3:this.arcaneSymbolCost=c.BV,this.currentLevel=this.arcaneSymbolSaveData.arcanaLevel,this.currentXp=this.arcaneSymbolSaveData.arcanaExp,this.arcanaChild.dailyQuest=this.arcaneSymbolSaveData.arcanaDailyQuest,this.arcanaChild.spiritSaviour=this.arcaneSymbolSaveData.arcanaSpiritSaviour;break;case 4:this.arcaneSymbolCost=c.se,this.currentLevel=this.arcaneSymbolSaveData.morassLevel,this.currentXp=this.arcaneSymbolSaveData.morassExp,this.morassChild.dailyQuest=this.arcaneSymbolSaveData.morassDailyQuest,this.morassChild.ranheimDefense=this.arcaneSymbolSaveData.moreassRanheimDefense;break;case 5:this.arcaneSymbolCost=c.Lf,this.currentLevel=this.arcaneSymbolSaveData.esferaLevel,this.currentXp=this.arcaneSymbolSaveData.esferaExp,this.esferaChild.dailyQuest=this.arcaneSymbolSaveData.esferaDailyQuest,this.esferaChild.esferaGuardian=this.arcaneSymbolSaveData.esferaGuardian}this.clearOutputVariables(),this.submit()}submit(){switch(this.activeSymbolIndex){case 0:this.calculateSymbolStats(this.vanishingJourneyChild.calculateDailySymbols());break;case 1:this.calculateSymbolStats(this.chuChuChild.calculateDailySymbols());break;case 2:this.calculateSymbolStats(this.lacheleinChild.calculateDailySymbols());break;case 3:this.calculateSymbolStats(this.arcanaChild.calculateDailySymbols());break;case 4:this.calculateSymbolStats(this.morassChild.calculateDailySymbols());break;case 5:this.calculateSymbolStats(this.esferaChild.calculateDailySymbols())}this.updateSavedData()}currentLevelInput(n){if(null!=n.data||1==n.target.value){if("insertFromPaste"==n.inputType)return n.target.value="",void this.clearOutputVariables();isNaN(n.data)&&(n.target.value="",this.currentLevel=1),(this.currentLevel<1&&""!=n.target.value||this.currentLevel%1!=0)&&(n.target.value=1,this.currentLevel=1),this.currentLevel>20&&(n.target.value=20,this.currentLevel=20),1==this.currentLevel&&0==this.currentXp&&(this.currentXp=1);var i=0;for(let a=this.currentLevel-1;a<20;a++)i+=this.arcaneSymbolStats[a].symbolExpRequired;this.currentXp>i&&(this.currentXp=i),this.submit()}else this.clearOutputVariables()}currentExpInput(n){if(null!=n.data||""!=n.target.value){if("insertFromPaste"==n.inputType)return n.target.value="",void this.clearOutputVariables();null==this.currentLevel&&(this.currentLevel=1),isNaN(n.data)&&(n.target.value="",this.currentXp=1),(1==this.currentLevel&&this.currentXp<1&&""!=n.target.value||this.currentXp%1!=0)&&(n.target.value=1,this.currentXp=1),(1!=this.currentLevel&&this.currentXp<0&&""!=n.target.value||this.currentXp%1!=0)&&(n.target.value=0,this.currentXp=0);var i=0;for(let a=this.currentLevel-1;a<20;a++)i+=this.arcaneSymbolStats[a].symbolExpRequired;this.currentXp>i&&(n.target.value=i,this.currentXp=i),this.submit()}else this.clearOutputVariables()}updateSavedData(){switch(this.activeSymbolIndex){case 0:this.arcaneSymbolSaveData.vjLevel=this.currentLevel,this.arcaneSymbolSaveData.vjExp=this.currentXp,this.arcaneSymbolSaveData.vjDailyQuest=this.vanishingJourneyChild.dailyQuest,this.arcaneSymbolSaveData.vjErdaSpectrum=this.vanishingJourneyChild.erdaSpectrum,this.arcaneSymbolSaveData.vjReverseCity=this.vanishingJourneyChild.reverseCity;break;case 1:this.arcaneSymbolSaveData.chuchuLevel=this.currentLevel,this.arcaneSymbolSaveData.chuchuExp=this.currentXp,this.arcaneSymbolSaveData.chuchuDailyQuest=this.chuChuChild.dailyQuest,this.arcaneSymbolSaveData.chuchuHungryMuto=this.chuChuChild.hungryMuto,this.arcaneSymbolSaveData.chuchuYumYumIsland=this.chuChuChild.yumYumIsland;break;case 2:this.arcaneSymbolSaveData.lachLevel=this.currentLevel,this.arcaneSymbolSaveData.lachExp=this.currentXp,this.arcaneSymbolSaveData.lachDailyQuest=this.lacheleinChild.dailyQuest,this.arcaneSymbolSaveData.lachMidnightChaser=this.lacheleinChild.midnightChaser;break;case 3:this.arcaneSymbolSaveData.arcanaLevel=this.currentLevel,this.arcaneSymbolSaveData.arcanaExp=this.currentXp,this.arcaneSymbolSaveData.arcanaDailyQuest=this.arcanaChild.dailyQuest,this.arcaneSymbolSaveData.arcanaSpiritSaviour=this.arcanaChild.spiritSaviour;break;case 4:this.arcaneSymbolSaveData.morassLevel=this.currentLevel,this.arcaneSymbolSaveData.morassExp=this.currentXp,this.arcaneSymbolSaveData.morassDailyQuest=this.morassChild.dailyQuest,this.arcaneSymbolSaveData.moreassRanheimDefense=this.morassChild.ranheimDefense;break;case 5:this.arcaneSymbolSaveData.esferaLevel=this.currentLevel,this.arcaneSymbolSaveData.esferaExp=this.currentXp,this.arcaneSymbolSaveData.esferaDailyQuest=this.esferaChild.dailyQuest,this.arcaneSymbolSaveData.esferaGuardian=this.esferaChild.esferaGuardian}localStorage.setItem("arcaneSymbolSaveDataV2",JSON.stringify(this.arcaneSymbolSaveData))}calculateSymbolStats(n){var i=0;i=this.arcaneSymbolStats[this.currentLevel-1].symbolExpRequired-this.currentXp,this.upgradeCost=this.arcaneSymbolCost[this.currentLevel-1];for(let a=this.currentLevel;a<20;a++)i+=this.arcaneSymbolStats[a].symbolExpRequired,this.upgradeCost+=this.arcaneSymbolCost[a];this.arcaneForceGain=this.arcaneSymbolStats[19].arcaneForce-this.arcaneSymbolStats[this.currentLevel-1].arcaneForce,this.statGain=this.arcaneSymbolStats[19].stat-this.arcaneSymbolStats[this.currentLevel-1].stat,this.xenonStatGain=this.arcaneSymbolStats[19].statXenon-this.arcaneSymbolStats[this.currentLevel-1].statXenon,this.demonAvengerHpGain=this.arcaneSymbolStats[19].statDemonAvenger-this.arcaneSymbolStats[this.currentLevel-1].statDemonAvenger,this.daysLeft=Math.ceil(i/n)}clearOutputVariables(){this.daysLeft=0,this.upgradeCost=0,this.arcaneForceGain=0,this.statGain=0,this.xenonStatGain=0,this.demonAvengerHpGain=0}static#e=this.\u0275fac=function(i){return new(i||s)(e.Y36(e.sBO),e.Y36(T.Dx),e.Y36(T.h_))};static#a=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-maplestory-arcane-symbols"]],viewQuery:function(i,a){if(1&i&&(e.Gf(p,5),e.Gf(b,5),e.Gf(S,5),e.Gf(M,5),e.Gf(x,5),e.Gf(Z,5)),2&i){let r;e.iGM(r=e.CRH())&&(a.vanishingJourneyChild=r.first),e.iGM(r=e.CRH())&&(a.chuChuChild=r.first),e.iGM(r=e.CRH())&&(a.lacheleinChild=r.first),e.iGM(r=e.CRH())&&(a.arcanaChild=r.first),e.iGM(r=e.CRH())&&(a.morassChild=r.first),e.iGM(r=e.CRH())&&(a.esferaChild=r.first)}},decls:78,vars:36,consts:[[1,"editedGamePageContent"],[1,"symbolNavigationBar"],[3,"ngClass","click"],[1,"imgWrapper"],["src","assets/Games/Maplestory/SymbolImages/VanishingJourney.png","alt","vanishingJourney"],["src","assets/Games/Maplestory/SymbolImages/ChuChu.png","alt","chuchu"],["src","assets/Games/Maplestory/SymbolImages/Lachelein.png","alt","lachelein"],["src","assets/Games/Maplestory/SymbolImages/Arcana.png","alt","arcana"],["src","assets/Games/Maplestory/SymbolImages/Morass.png","alt","morass"],["src","assets/Games/Maplestory/SymbolImages/Esfera.png","alt","esfera"],[1,"symbolTitle"],[3,"ngSubmit"],[1,"symbolInput"],[1,"inputLabelWrapper"],["for","currentLevel"],["name","currentLevel","id","currentLevel","type","number",1,"numberInput",3,"ngModel","ngModelChange","input"],["for","currentXp"],["name","currentXp","id","currentXp","type","number",1,"numberInput",3,"ngModel","ngModelChange","input"],[1,"symbolDailyTitle"],[3,"valueChange",4,"ngIf"],[3,"valueChange","clearOutput",4,"ngIf"],[1,"outputWrapper"],[1,"outputLabelWrapper"],["for","daysLeft"],["name","daysLeft","id","daysLeft","type","text","disabled","",1,"textInput",3,"value"],["for","upgradeCost"],["name","upgradeCost","id","upgradeCost","type","text","disabled","",1,"textInput",3,"value"],["for","arcaneForceGain"],["name","arcaneForceGain","id","arcaneForceGain","type","text","disabled","",1,"textInput",3,"value"],["for","statGain"],["name","statGain","id","statGain","type","text","disabled","",1,"textInput",3,"value"],["for","xenonStatGain"],["name","xenonStatGain","id","xenonStatGain","type","text","disabled","",1,"textInput",3,"value"],["for","demonAvengerHpGain"],["name","demonAvengerHpGain","id","demonAvengerHpGain","type","text","disabled","",1,"textInput",3,"value"],[3,"valueChange"],[3,"valueChange","clearOutput"]],template:function(i,a){1&i&&(e._UZ(0,"app-maplestory-side-navigation"),e.TgZ(1,"div",0)(2,"div",1)(3,"a",2),e.NdJ("click",function(){return a.changeActiveSymbolIndex(0)}),e.TgZ(4,"div",3),e._UZ(5,"img",4),e.qZA()(),e.TgZ(6,"a",2),e.NdJ("click",function(){return a.changeActiveSymbolIndex(1)}),e.TgZ(7,"div",3),e._UZ(8,"img",5),e.qZA()(),e.TgZ(9,"a",2),e.NdJ("click",function(){return a.changeActiveSymbolIndex(2)}),e.TgZ(10,"div",3),e._UZ(11,"img",6),e.qZA()(),e.TgZ(12,"a",2),e.NdJ("click",function(){return a.changeActiveSymbolIndex(3)}),e.TgZ(13,"div",3),e._UZ(14,"img",7),e.qZA()(),e.TgZ(15,"a",2),e.NdJ("click",function(){return a.changeActiveSymbolIndex(4)}),e.TgZ(16,"div",3),e._UZ(17,"img",8),e.qZA()(),e.TgZ(18,"a",2),e.NdJ("click",function(){return a.changeActiveSymbolIndex(5)}),e.TgZ(19,"div",3),e._UZ(20,"img",9),e.qZA()()(),e.TgZ(21,"p",10),e._uU(22),e.qZA(),e.TgZ(23,"form",11),e.NdJ("ngSubmit",function(){return a.submit()}),e.TgZ(24,"div",12)(25,"div",13)(26,"label",14),e._uU(27,"Symbol Level"),e.qZA(),e.TgZ(28,"input",15),e.NdJ("ngModelChange",function(l){return a.currentLevel=l})("input",function(l){return a.currentLevelInput(l)}),e.qZA()()(),e.TgZ(29,"div",12)(30,"div",13)(31,"label",16),e._uU(32,"Symbol Experience"),e.qZA(),e.TgZ(33,"input",17),e.NdJ("ngModelChange",function(l){return a.currentXp=l})("input",function(l){return a.currentExpInput(l)}),e.qZA()()(),e.TgZ(34,"p",18),e._uU(35,"Daily symbols"),e.qZA(),e.YNc(36,Q,1,0,"app-vanishing-journey",19)(37,J,1,0,"app-chu-chu",20)(38,L,1,0,"app-lachelein",20)(39,k,1,0,"app-arcana",20)(40,q,1,0,"app-morass",19)(41,I,1,0,"app-esfera",19),e.qZA(),e.TgZ(42,"div",21)(43,"div",12)(44,"div",22)(45,"label",23),e._uU(46,"Day(s) to Level 20"),e.qZA(),e._UZ(47,"input",24),e.qZA()(),e.TgZ(48,"div",12)(49,"div",22)(50,"label",25),e._uU(51,"Remaining Cost to Level 20"),e.qZA(),e._UZ(52,"input",26),e.ALo(53,"number"),e.qZA()(),e.TgZ(54,"div",12)(55,"div",22)(56,"label",27),e._uU(57,"Remaining Arcane Force to gain"),e.qZA(),e._UZ(58,"input",28),e.ALo(59,"number"),e.qZA()(),e.TgZ(60,"div",12)(61,"div",22)(62,"label",29),e._uU(63,"Remaining Stat to Gain"),e.qZA(),e._UZ(64,"input",30),e.ALo(65,"number"),e.qZA()(),e.TgZ(66,"div",12)(67,"div",22)(68,"label",31),e._uU(69,"Remaining All Stat to Gain (Xenon)"),e.qZA(),e._UZ(70,"input",32),e.ALo(71,"number"),e.qZA()(),e.TgZ(72,"div",12)(73,"div",22)(74,"label",33),e._uU(75,"Remaining HP to Gain (Demon Avenger)"),e.qZA(),e._UZ(76,"input",34),e.ALo(77,"number"),e.qZA()()()()),2&i&&(e.xp6(3),e.Q6J("ngClass",0==a.activeSymbolIndex?"selected":"notSelected"),e.xp6(3),e.Q6J("ngClass",1==a.activeSymbolIndex?"selected":"notSelected"),e.xp6(3),e.Q6J("ngClass",2==a.activeSymbolIndex?"selected":"notSelected"),e.xp6(3),e.Q6J("ngClass",3==a.activeSymbolIndex?"selected":"notSelected"),e.xp6(3),e.Q6J("ngClass",4==a.activeSymbolIndex?"selected":"notSelected"),e.xp6(3),e.Q6J("ngClass",5==a.activeSymbolIndex?"selected":"notSelected"),e.xp6(4),e.Oqu(a.arcaneSymbolNames[a.activeSymbolIndex]),e.xp6(6),e.Q6J("ngModel",a.currentLevel),e.xp6(5),e.Q6J("ngModel",a.currentXp),e.xp6(3),e.Q6J("ngIf",0==a.activeSymbolIndex),e.xp6(1),e.Q6J("ngIf",1==a.activeSymbolIndex),e.xp6(1),e.Q6J("ngIf",2==a.activeSymbolIndex),e.xp6(1),e.Q6J("ngIf",3==a.activeSymbolIndex),e.xp6(1),e.Q6J("ngIf",4==a.activeSymbolIndex),e.xp6(1),e.Q6J("ngIf",5==a.activeSymbolIndex),e.xp6(6),e.MGl("value","",a.daysLeft," Day(s)"),e.xp6(5),e.MGl("value","",e.xi3(53,21,a.upgradeCost,"0.0-0")," Mesos"),e.xp6(6),e.MGl("value","",e.xi3(59,24,a.arcaneForceGain,"0.0-0")," AF"),e.xp6(6),e.MGl("value","",e.xi3(65,27,a.statGain,"0.0-0")," Stat"),e.xp6(6),e.MGl("value","",e.xi3(71,30,a.xenonStatGain,"0.0-0")," AS"),e.xp6(6),e.MGl("value","",e.xi3(77,33,a.demonAvengerHpGain,"0.0-0")," HP"))},dependencies:[t.mk,t.O5,O.G,o._Y,o.Fj,o.wV,o.JJ,o.JL,o.On,o.F,p,b,S,M,x,Z,t.JJ],styles:[".symbolNavigationBar[_ngcontent-%COMP%]{text-align:center;height:57px}.symbolTitle[_ngcontent-%COMP%]{text-align:center;font-size:30px;margin:8px 0}.symbolNavigationBar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;width:33px;height:33px;background-color:var(--background-color);margin:5px;padding:5px}.notSelected[_ngcontent-%COMP%]{border:2px solid var(--game-page-border-color)}.selected[_ngcontent-%COMP%]{border:2px solid var(--game-page-accent-color)}.symbolNavigationBar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:var(--radial-color-1);background:radial-gradient(ellipse at center,var(--radial-color-1) 0%,var(--radial-color-2) 38%,var(--radial-color-3) 70%,var(--radial-color-4) 100%)}.symbolDailyTitle[_ngcontent-%COMP%]{width:100%;text-align:center;text-decoration:underline;font-size:18px;margin:10px 0 2px}.outputWrapper[_ngcontent-%COMP%]{margin-top:20px}.editedGamePageContent[_ngcontent-%COMP%]{width:600px;margin:8px auto;background-color:var(--game-page-background-color);border:1px solid var(--game-page-border-color);min-height:calc(100vh - 72px)}.inputLabelWrapper[_ngcontent-%COMP%], .inputLabelWrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:250px}@media only screen and (max-width: 1104px){.editedGamePageContent[_ngcontent-%COMP%]{float:left;margin:unset;margin-top:8px;margin-left:9px}}@media only screen and (max-width: 862px){.editedGamePageContent[_ngcontent-%COMP%]{width:calc(100% - 262px)}}@media only screen and (max-width: 813px){.editedGamePageContent[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px;min-height:calc(100vh - 100px);width:calc(100% - 18px)}}"]})}return s})()}];let E=(()=>{class s{static#e=this.\u0275fac=function(i){return new(i||s)};static#a=this.\u0275mod=e.oAB({type:s});static#t=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(G),m.Bz]})}return s})();var U=u(32459);let X=(()=>{class s{static#e=this.\u0275fac=function(i){return new(i||s)};static#a=this.\u0275mod=e.oAB({type:s});static#t=this.\u0275inj=e.cJS({imports:[t.ez,E,U.C]})}return s})()},32459:(_,d,u)=>{u.d(d,{C:()=>c});var t=u(96814),m=u(21367),g=u(52425);let c=(()=>{class e{static#e=this.\u0275fac=function(p){return new(p||e)};static#a=this.\u0275mod=g.oAB({type:e});static#t=this.\u0275inj=g.cJS({imports:[t.ez,m.m,m.m]})}return e})()},91288:(_,d,u)=>{u.d(d,{G:()=>g});var t=u(52425),m=u(15251);let g=(()=>{class c{constructor(o){this.router=o}ngOnInit(){}static#e=this.\u0275fac=function(h){return new(h||c)(t.Y36(m.F0))};static#a=this.\u0275cmp=t.Xpm({type:c,selectors:[["app-maplestory-side-navigation"]],decls:42,vars:24,consts:[[1,"sidenavbar"],[1,"sidenavbartitle"],[3,"routerLink"],[1,"horizontalSeparator"],["href","https://www.buymeacoffee.com/starlines","target","_blank"]],template:function(h,p){1&h&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"Maplestory"),t.qZA(),t.TgZ(3,"p"),t._uU(4,"General"),t.qZA(),t.TgZ(5,"a",2)(6,"span"),t._uU(7,"Home"),t.qZA()(),t._UZ(8,"div",3),t.TgZ(9,"p"),t._uU(10,"Calculators"),t.qZA(),t.TgZ(11,"a",2)(12,"span"),t._uU(13,"Arcane symbols"),t.qZA()(),t.TgZ(14,"a",2)(15,"span"),t._uU(16,"Sacred symbols"),t.qZA()(),t.TgZ(17,"a",2)(18,"span"),t._uU(19,"Item flames"),t.qZA()(),t.TgZ(20,"a",2)(21,"span"),t._uU(22,"Weapon flame"),t.qZA()(),t._UZ(23,"div",3),t.TgZ(24,"p"),t._uU(25,"Trackers"),t.qZA(),t.TgZ(26,"a",2)(27,"span"),t._uU(28,"Dailies"),t.qZA()(),t.TgZ(29,"a",2)(30,"span"),t._uU(31,"Weeklies"),t.qZA()(),t._UZ(32,"div",3),t.TgZ(33,"a",2)(34,"span"),t._uU(35,"Export settings"),t.qZA()(),t._UZ(36,"div",3),t.TgZ(37,"p"),t._uU(38,"Enjoying my creations?"),t.qZA(),t.TgZ(39,"a",4)(40,"span"),t._uU(41,"consider donating here"),t.qZA()()()),2&h&&(t.xp6(5),t.Q6J("routerLink","/games/maplestory/home"),t.xp6(1),t.ekj("sidenavbaractivelink",p.router.isActive("/games/maplestory/home",!1)),t.xp6(5),t.Q6J("routerLink","/games/maplestory/arcane-symbols"),t.xp6(1),t.ekj("sidenavbaractivelink",p.router.isActive("/games/maplestory/arcane-symbols",!1)),t.xp6(2),t.Q6J("routerLink","/games/maplestory/sacred-symbols"),t.xp6(1),t.ekj("sidenavbaractivelink",p.router.isActive("/games/maplestory/sacred-symbols",!1)),t.xp6(2),t.Q6J("routerLink","/games/maplestory/item-flames"),t.xp6(1),t.ekj("sidenavbaractivelink",p.router.isActive("/games/maplestory/item-flames",!1)),t.xp6(2),t.Q6J("routerLink","/games/maplestory/weapon-flame"),t.xp6(1),t.ekj("sidenavbaractivelink",p.router.isActive("/games/maplestory/weapon-flame",!1)),t.xp6(5),t.Q6J("routerLink","/games/maplestory/dailies"),t.xp6(1),t.ekj("sidenavbaractivelink",p.router.isActive("/games/maplestory/dailies",!1)),t.xp6(2),t.Q6J("routerLink","/games/maplestory/weeklies"),t.xp6(1),t.ekj("sidenavbaractivelink",p.router.isActive("/games/maplestory/weeklies",!1)),t.xp6(3),t.Q6J("routerLink","/games/maplestory/settings"),t.xp6(1),t.ekj("sidenavbaractivelink",p.router.isActive("/games/maplestory/settings",!1)))},dependencies:[m.rH]})}return c})()}}]);