(self.webpackChunkrandom_project=self.webpackChunkrandom_project||[]).push([[123],{12123:(t,e,n)=>{"use strict";n.r(e),n.d(e,{HiddenBinaryTranslatorModule:()=>s});var r=n(38583),a=n(32086),i=n(10639),o=n(39075),p=n(90567),c=n(90665);const u=[{path:"",component:(()=>{class t{constructor(t,e){this.titleService=t,this.metaService=e,this.input="",this.output="",this.inputHeader="Binary",this.outputHeader="Text"}ngOnInit(){this.titleService.setTitle("Binary Translator | Random Stuff"),this.metaService.updateTag({name:"description",content:"Personal binary translator project."}),this.metaService.getTag("name='robots'")?this.metaService.updateTag({name:"robots",content:"noindex, follow"}):this.metaService.addTag({name:"robots",content:"noindex, follow"})}ngOnDestroy(){this.titleService.setTitle("Random Stuff")}convert(){this.output="Binary"==this.inputHeader?this.binaryToText(this.input.replace(/[^0-1]/g,"")):this.textToBinary(this.input)}clearInput(){this.input="",this.output=""}swapTranslation(){"Binary"==this.inputHeader?(this.inputHeader="Text",this.outputHeader="Binary"):(this.inputHeader="Binary",this.outputHeader="Text"),this.convert()}binaryToText(t){return 0==t.length?"":t.replace(/\s/g,"").match(/.{1,8}/g).map(function(t){return String.fromCharCode(parseInt(t,2))}).join("")}textToBinary(t){return t.split("").map(function(t){return t.charCodeAt(0).toString(2).padStart(8,"0")}).join(" ")}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(o.Dx),i.Y36(o.h_))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-hidden-binary-translator"]],decls:19,vars:6,consts:[[1,"contentPageOverride"],[1,"textAreaWrapper","inputWrapper"],["for","input"],["id","input","name","input",1,"textAreaInput",3,"placeholder","ngModel","ngModelChange","input"],[1,"controlsWrapper"],[1,"buttonStyle","clear",3,"click"],[1,"buttonStyle","swap",3,"click"],[1,"textAreaWrapper","outputWrapper"],["id","input","name","input","readonly","",1,"textAreaOutput",3,"placeholder","ngModel","ngModelChange"]],template:function(t,e){1&t&&(i._UZ(0,"app-hidden-side-navigation"),i.TgZ(1,"div",0),i.TgZ(2,"div",1),i.TgZ(3,"label",2),i._uU(4),i.qZA(),i.TgZ(5,"textarea",3),i.NdJ("ngModelChange",function(t){return e.input=t})("input",function(){return e.convert()}),i.qZA(),i.qZA(),i.TgZ(6,"div",4),i.TgZ(7,"button",5),i.NdJ("click",function(){return e.clearInput()}),i.TgZ(8,"span"),i._uU(9,"\u2716"),i.qZA(),i._uU(10," Clear Input"),i.qZA(),i.TgZ(11,"button",6),i.NdJ("click",function(){return e.swapTranslation()}),i.TgZ(12,"span"),i._uU(13,"\u21c5"),i.qZA(),i._uU(14," Swap Translation"),i.qZA(),i.qZA(),i.TgZ(15,"div",7),i.TgZ(16,"label",2),i._uU(17),i.qZA(),i.TgZ(18,"textarea",8),i.NdJ("ngModelChange",function(t){return e.output=t}),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(4),i.hij("",e.inputHeader," input:"),i.xp6(1),i.MGl("placeholder","",e.inputHeader," input..."),i.Q6J("ngModel",e.input),i.xp6(12),i.hij("",e.outputHeader," output:"),i.xp6(1),i.MGl("placeholder","",e.outputHeader," output..."),i.Q6J("ngModel",e.output))},directives:[p.x,c.Fj,c.JJ,c.On],styles:[".contentPageOverride[_ngcontent-%COMP%]{width:800px;background-color:var(--content-page-background-color);border:1px solid var(--content-page-border-color);min-height:calc(100vh - 72px);margin:8px auto 0}.textAreaWrapper[_ngcontent-%COMP%]{width:400px;height:108px}.textAreaOutput[_ngcontent-%COMP%]:focus{box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none}.inputWrapper[_ngcontent-%COMP%]{margin-top:15px}.controlsWrapper[_ngcontent-%COMP%]{width:400px;height:50px;margin:0 auto}.buttonStyle[_ngcontent-%COMP%]{float:left;height:35px;line-height:normal}.clear[_ngcontent-%COMP%]{margin-left:4px}.swap[_ngcontent-%COMP%]{padding-top:9px}@media only screen and (max-width:1305px){.contentPageOverride[_ngcontent-%COMP%]{float:left;margin:unset;margin-top:8px;margin-left:9px}}@media only screen and (max-width:1061px){.contentPageOverride[_ngcontent-%COMP%]{width:calc(100% - 262px)}}@media only screen and (max-width:800px){.contentPageOverride[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px;min-height:calc(100vh - 100px);width:calc(100% - 18px)}}@media only screen and (max-width:444px){.inputWrapper[_ngcontent-%COMP%]{margin-top:5px}}@media only screen and (max-width:427px){.textAreaWrapper[_ngcontent-%COMP%]{width:calc(100% - 8px)}}"]}),t})()}];let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[a.Bz.forChild(u)],a.Bz]}),t})();var l=n(41474);let s=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[r.ez,d,l.e]]}),t})()}}]);