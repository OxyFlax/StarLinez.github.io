(self.webpackChunkrandom_project=self.webpackChunkrandom_project||[]).push([[156],{42156:(t,e,n)=>{"use strict";n.r(e),n.d(e,{HiddenHexRGBConverterModule:()=>T});var r=n(38583),o=n(32086),i=n(10639),p=n(39075),u=n(90567),a=n(90665);function g(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"div",14),i.TgZ(1,"div",15),i.TgZ(2,"label",16),i._uU(3,"Hex color code (#RRGGBB)"),i.qZA(),i.TgZ(4,"input",17),i.NdJ("ngModelChange",function(e){return i.CHM(t),i.oxw().hexInput=e})("input",function(){return i.CHM(t),i.oxw().convert()}),i.qZA(),i.qZA(),i.qZA()}if(2&t){const t=i.oxw();i.xp6(4),i.Q6J("ngModel",t.hexInput)}}function c(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"div",18),i.TgZ(1,"div",15),i.TgZ(2,"label",19),i._uU(3,"Red (R)"),i.qZA(),i.TgZ(4,"input",20),i.NdJ("ngModelChange",function(e){return i.CHM(t),i.oxw().rgbRedInput=e})("input",function(){return i.CHM(t),i.oxw().convert()}),i.qZA(),i.qZA(),i.TgZ(5,"div",15),i.TgZ(6,"label",21),i._uU(7,"Green (G)"),i.qZA(),i.TgZ(8,"input",22),i.NdJ("ngModelChange",function(e){return i.CHM(t),i.oxw().rgbGreenInput=e})("input",function(){return i.CHM(t),i.oxw().convert()}),i.qZA(),i.qZA(),i.TgZ(9,"div",15),i.TgZ(10,"label",23),i._uU(11,"Blue (B)"),i.qZA(),i.TgZ(12,"input",24),i.NdJ("ngModelChange",function(e){return i.CHM(t),i.oxw().rgbBlueInput=e})("input",function(){return i.CHM(t),i.oxw().convert()}),i.qZA(),i.qZA(),i.qZA()}if(2&t){const t=i.oxw();i.xp6(4),i.Q6J("ngModel",t.rgbRedInput),i.xp6(4),i.Q6J("ngModel",t.rgbGreenInput),i.xp6(4),i.Q6J("ngModel",t.rgbBlueInput)}}function l(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"div",25),i.TgZ(1,"div",26),i.TgZ(2,"label",27),i._uU(3,"Hex color code"),i.qZA(),i.TgZ(4,"input",28),i.NdJ("ngModelChange",function(e){return i.CHM(t),i.oxw().hexOutput=e}),i.qZA(),i.qZA(),i.qZA()}if(2&t){const t=i.oxw();i.xp6(4),i.Q6J("ngModel",t.hexOutput)}}function d(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"div",29),i.TgZ(1,"div",26),i.TgZ(2,"label",30),i._uU(3,"RGB color code"),i.qZA(),i.TgZ(4,"input",31),i.NdJ("ngModelChange",function(e){return i.CHM(t),i.oxw().rgbOutput=e}),i.qZA(),i.qZA(),i.qZA()}if(2&t){const t=i.oxw();i.xp6(4),i.Q6J("ngModel",t.rgbOutput)}}function h(t,e){if(1&t&&(i.TgZ(0,"tr"),i._UZ(1,"td"),i.TgZ(2,"td"),i._uU(3),i.qZA(),i._UZ(4,"td"),i.TgZ(5,"td"),i._uU(6),i.qZA(),i._UZ(7,"td"),i.qZA()),2&t){const t=e.index,n=i.oxw();i.xp6(1),i.Udp("background",n.colorShades[t]),i.xp6(2),i.Oqu(n.colorShades[t]),i.xp6(3),i.Oqu(n.colorTints[t]),i.xp6(1),i.Udp("background",n.colorTints[t])}}const s=[{path:"",component:(()=>{class t{constructor(t,e){this.titleService=t,this.metaService=e,this.inputSetToHex=!0,this.hexInput="",this.rgbRedInput=null,this.rgbGreenInput=null,this.rgbBlueInput=null,this.hexOutput="",this.rgbOutput="",this.color="",this.colorShades=new Array(11),this.colorTints=new Array(11)}ngOnInit(){this.titleService.setTitle("Hex & RGB Converter | Random Stuff"),this.metaService.updateTag({name:"description",content:"Personal Hex & RGB converter."}),this.metaService.getTag("name='robots'")?this.metaService.updateTag({name:"robots",content:"noindex, follow"}):this.metaService.addTag({name:"robots",content:"noindex, follow"})}ngOnDestroy(){this.titleService.setTitle("Random Stuff")}swapConversion(){this.inputSetToHex=!this.inputSetToHex,this.clearInput()}convert(){if(this.inputSetToHex){var t=this.hexToRGB(this.hexInput);t?(this.rgbOutput="rgb("+t.red+", "+t.green+", "+t.blue+")",this.createTintsAndShades(this.hexInput)):(this.rgbOutput=null,this.clearShadesAndTintsOutput()),this.color=this.rgbOutput}else this.hexOutput="#"+this.rgbToHex(this.rgbRedInput,this.rgbGreenInput,this.rgbBlueInput),this.createTintsAndShades(this.hexOutput),this.color=this.hexOutput}createTintsAndShades(t){var e=this.hexToRGB(t);this.colorShades=this.calculateShades(e),this.colorTints=this.calculateTints(e)}calculateShades(t){for(var e=[],n=0;n<10;n++)e[n]="#"+this.rgbToHex(t.red*(1-.1*n),t.green*(1-.1*n),t.blue*(1-.1*n));return e.push("#000000"),e}calculateTints(t){for(var e=[],n=0;n<10;n++)e[n]="#"+this.rgbToHex(t.red+(255-t.red)*n*.1,t.green+(255-t.green)*n*.1,t.blue+(255-t.blue)*n*.1);return e.push("#FFFFFF"),e}hexToRGB(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{red:parseInt(e[1],16),green:parseInt(e[2],16),blue:parseInt(e[3],16)}:null}rgbToHex(t,e,n){return(this.intToHex(t)+this.intToHex(e)+this.intToHex(n)).toUpperCase()}intToHex(t){return this.pad(Math.min(Math.max(Math.round(t),0),255).toString(16),2)}pad(t,e){for(var n=""+t;n.length<e;)n="0"+n;return n}clearInput(){this.hexInput="",this.rgbRedInput=null,this.rgbGreenInput=null,this.rgbBlueInput=null,this.hexOutput="",this.rgbOutput="",this.color="",this.clearShadesAndTintsOutput()}clearShadesAndTintsOutput(){this.colorShades=new Array(11),this.colorTints=new Array(11)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(p.Dx),i.Y36(p.h_))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-hidden-hexrgb-converter"]],decls:23,vars:7,consts:[[1,"contentPageOverride"],[1,"inputWrapper"],["class","hexInputWrapper",4,"ngIf"],["class","rgbInputWrapper",4,"ngIf"],[1,"controlsWrapper"],[1,"buttonStyle","clear",3,"click"],[1,"buttonStyle","swap",3,"click"],[1,"outputWrapper"],["class","hexOutputWrapper",4,"ngIf"],["class","rgbOutputWrapper",4,"ngIf"],[1,"colorPreviewLabel"],[1,"colorPreview"],[1,"colorTable"],[4,"ngFor","ngForOf"],[1,"hexInputWrapper"],[1,"inputLabelWrapper"],["for","hexInput"],["name","hexInput","id","hexInput","type","text","placeholder","#000000",1,"textInput",3,"ngModel","ngModelChange","input"],[1,"rgbInputWrapper"],["for","rgbRedInput"],["name","rgbRedInput","id","rgbRedInput","type","number","placeholder","0",1,"numberInput",3,"ngModel","ngModelChange","input"],["for","rgbGreenInput"],["name","rgbGreenInput","id","rgbGreenInput","type","number","placeholder","0",1,"numberInput",3,"ngModel","ngModelChange","input"],["for","rgbBlueInput"],["name","rgbBlueInput","id","rgbBlueInput","type","number","placeholder","0",1,"numberInput",3,"ngModel","ngModelChange","input"],[1,"hexOutputWrapper"],[1,"outputLabelWrapper"],["for","hexOutput"],["name","hexOutput","id","hexOutput","type","text","disabled","",1,"textInput",3,"ngModel","ngModelChange"],[1,"rgbOutputWrapper"],["for","rgbOutput"],["name","rgbOutput","id","rgbOutput","type","text","disabled","",1,"textInput",3,"ngModel","ngModelChange"]],template:function(t,e){1&t&&(i._UZ(0,"app-hidden-side-navigation"),i.TgZ(1,"div",0),i.TgZ(2,"div",1),i.YNc(3,g,5,1,"div",2),i.YNc(4,c,13,3,"div",3),i.qZA(),i.TgZ(5,"div",4),i.TgZ(6,"button",5),i.NdJ("click",function(){return e.clearInput()}),i.TgZ(7,"span"),i._uU(8,"\u2716"),i.qZA(),i._uU(9," Clear Input"),i.qZA(),i.TgZ(10,"button",6),i.NdJ("click",function(){return e.swapConversion()}),i.TgZ(11,"span"),i._uU(12,"\u21c5"),i.qZA(),i._uU(13," Swap Conversion"),i.qZA(),i.qZA(),i.TgZ(14,"div",7),i.YNc(15,l,5,1,"div",8),i.YNc(16,d,5,1,"div",9),i.TgZ(17,"p",10),i._uU(18,"Color preview"),i.qZA(),i._UZ(19,"div",11),i.qZA(),i.TgZ(20,"div",12),i.TgZ(21,"table"),i.YNc(22,h,8,6,"tr",13),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(3),i.Q6J("ngIf",e.inputSetToHex),i.xp6(1),i.Q6J("ngIf",!e.inputSetToHex),i.xp6(11),i.Q6J("ngIf",!e.inputSetToHex),i.xp6(1),i.Q6J("ngIf",e.inputSetToHex),i.xp6(3),i.Udp("background",e.color),i.xp6(3),i.Q6J("ngForOf",e.colorShades))},directives:[u.x,r.O5,r.sg,a.Fj,a.JJ,a.On,a.wV],styles:[".contentPageOverride[_ngcontent-%COMP%]{width:800px;background-color:var(--content-page-background-color);border:1px solid var(--content-page-border-color);min-height:calc(100vh - 72px);margin:8px auto 0}#hexInput[_ngcontent-%COMP%], #hexOutput[_ngcontent-%COMP%], #rgbOutput[_ngcontent-%COMP%]{width:330px}#rgbBlueInput[_ngcontent-%COMP%], #rgbGreenInput[_ngcontent-%COMP%], #rgbRedInput[_ngcontent-%COMP%]{width:100px}#rgbGreenInput[_ngcontent-%COMP%], #rgbRedInput[_ngcontent-%COMP%]{margin-right:15px}.inputWrapper[_ngcontent-%COMP%], .outputWrapper[_ngcontent-%COMP%]{width:330px;margin:0 auto}.inputWrapper[_ngcontent-%COMP%]{margin-top:15px}.controlsWrapper[_ngcontent-%COMP%]{width:330px;height:50px;margin:0 auto}.buttonStyle[_ngcontent-%COMP%]{float:left;height:35px;line-height:normal}.clear[_ngcontent-%COMP%]{margin-left:4px}.swap[_ngcontent-%COMP%]{padding-top:9px}.colorPreviewLabel[_ngcontent-%COMP%]{margin:6px 0 2px 3px}.colorPreview[_ngcontent-%COMP%]{width:328px;height:65px;border:1px solid var(--input-box-border-color);border-radius:5px}.colorTable[_ngcontent-%COMP%]{width:330px;margin:15px auto 0;text-align:center}.colorTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.colorTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{width:70px;height:30px;text-align:left;padding-left:3px}.colorTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3){width:20px}@media only screen and (max-width:1305px){.contentPageOverride[_ngcontent-%COMP%]{float:left;margin:unset;margin-top:8px;margin-left:9px}}@media only screen and (max-width:1061px){.contentPageOverride[_ngcontent-%COMP%]{width:calc(100% - 262px)}}@media only screen and (max-width:800px){.contentPageOverride[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px;min-height:calc(100vh - 100px);width:calc(100% - 18px)}}@media only screen and (max-width:444px){.inputWrapper[_ngcontent-%COMP%]{margin-top:5px}}"]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.Bz.forChild(s)],o.Bz]}),t})();var b=n(41474);let T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[r.ez,x,b.e]]}),t})()}}]);