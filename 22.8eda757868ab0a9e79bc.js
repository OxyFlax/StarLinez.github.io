(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{Drn5:function(t,e,n){"use strict";n.r(e),n.d(e,"MiscSkribblModule",function(){return l});var o=n("ofXK"),r=n("tyNb"),i=n("fXoL"),a=n("jhN1"),p=n("3Pt+");const c=[{path:"",component:(()=>{class t{constructor(t,e){this.titleService=t,this.metaService=e,this.input="",this.output="",this.wordCount=0}ngOnInit(){this.titleService.setTitle("Misc Skribbl | Random Stuff"),this.metaService.updateTag({name:"description",content:"Custom skribble.io words duplicate filter"}),this.metaService.getTag("name='robots'")?this.metaService.updateTag({name:"robots",content:"noindex, follow"}):this.metaService.addTag({name:"robots",content:"noindex, follow"})}ngOnDestroy(){this.titleService.setTitle("Random Stuff")}removeDuplicates(){var t=this.input.split(","),e=(t=t.map(function(t){return t.trim()})).reduce(function(t,e){return t.indexOf(e)<0&&t.push(e),t},[]);this.wordCount=e.length,this.output=e.join(", ")}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(a.c),i.Jb(a.b))},t.\u0275cmp=i.Db({type:t,selectors:[["app-misc-skribbl"]],decls:14,vars:3,consts:[[1,"contentPageOverride"],[1,"textAreaWrapper","inputWrapper"],["for","input"],["id","input","name","input","placeholder","input...",1,"textAreaInput",3,"ngModel","ngModelChange"],[1,"controlsWrapper"],[1,"buttonStyle","clear",3,"click"],[1,"textAreaWrapper","outputWrapper"],["id","input","name","input","placeholder","output...","readonly","",1,"textAreaOutput",3,"ngModel","ngModelChange"],[1,"countWrapper"]],template:function(t,e){1&t&&(i.Ob(0,"div",0),i.Ob(1,"div",1),i.Ob(2,"label",2),i.qc(3,"Input words separated by a comma:"),i.Nb(),i.Ob(4,"textarea",3),i.Vb("ngModelChange",function(t){return e.input=t}),i.Nb(),i.Nb(),i.Ob(5,"div",4),i.Ob(6,"button",5),i.Vb("click",function(){return e.removeDuplicates()}),i.qc(7,"Remove Duplicates"),i.Nb(),i.Nb(),i.Ob(8,"div",6),i.Ob(9,"label",2),i.qc(10,"Output"),i.Nb(),i.Ob(11,"textarea",7),i.Vb("ngModelChange",function(t){return e.output=t}),i.Nb(),i.Nb(),i.Ob(12,"div",8),i.qc(13),i.Nb(),i.Nb()),2&t&&(i.zb(4),i.bc("ngModel",e.input),i.zb(7),i.bc("ngModel",e.output),i.zb(2),i.sc(" Word count: ",e.wordCount," "))},directives:[p.b,p.e,p.h],styles:[".contentPageOverride[_ngcontent-%COMP%]{width:800px;background-color:var(--content-page-background-color);border:1px solid var(--content-page-border-color);min-height:calc(100vh - 72px);margin:8px auto 0}.textAreaWrapper[_ngcontent-%COMP%]{width:400px;height:108px}.textAreaOutput[_ngcontent-%COMP%]:focus{box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none}.inputWrapper[_ngcontent-%COMP%]{margin-top:15px}.controlsWrapper[_ngcontent-%COMP%]{width:400px;height:50px;margin:0 auto}.buttonStyle[_ngcontent-%COMP%]{float:left;height:35px;line-height:normal;transform:translateX(3px)}.countWrapper[_ngcontent-%COMP%]{width:400px;height:50px;margin:7px auto 0;transform:translateX(5.5px)}@media only screen and (max-width:818px){.contentPageOverride[_ngcontent-%COMP%]{width:calc(100% - 18px)}}@media only screen and (max-width:444px){.inputWrapper[_ngcontent-%COMP%]{margin-top:5px}.textAreaWrapper[_ngcontent-%COMP%]{width:calc(100% - 8px)}.controlsWrapper[_ngcontent-%COMP%], .countWrapper[_ngcontent-%COMP%]{margin-left:4px}}"]}),t})()}];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({imports:[[r.d.forChild(c)],r.d]}),t})();var s=n("H8qh");let l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({imports:[[o.b,s.a,u]]}),t})()}}]);