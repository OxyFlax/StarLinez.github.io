(self.webpackChunkrandom_project=self.webpackChunkrandom_project||[]).push([[287],{11287:(e,n,a)=>{"use strict";a.r(n),a.d(n,{OverwatchRandomHeroSelectorModule:()=>l});var t=a(38583),o=a(32086);const r=JSON.parse('{"e":[{"name":"Ana","image":"Ana.png"},{"name":"Ashe","image":"Ashe.png"},{"name":"Baptiste","image":"Baptiste.png"},{"name":"Bastion","image":"Bastion.png"},{"name":"Brigitte","image":"Brigitte.png"},{"name":"D.Va","image":"Dva.png"},{"name":"Doomfist","image":"Doomfist.png"},{"name":"Echo","image":"Echo.png"},{"name":"Genji","image":"Genji.png"},{"name":"Hanzo","image":"Hanzo.png"},{"name":"Junkrat","image":"Junkrat.png"},{"name":"L\xfacio","image":"Lucio.png"},{"name":"Mccree","image":"Mccree.png"},{"name":"Mei","image":"Mei.png"},{"name":"Mercy","image":"Mercy.png"},{"name":"Moira","image":"Moira.png"},{"name":"Orisa","image":"Orisa.png"},{"name":"Pharah","image":"Pharah.png"},{"name":"Reaper","image":"Reaper.png"},{"name":"Reinhardt","image":"Reinhardt.png"},{"name":"Roadhog","image":"Roadhog.png"},{"name":"Sigma","image":"Sigma.png"},{"name":"Soldier: 76","image":"Soldier76.png"},{"name":"Sombra","image":"Sombra.png"},{"name":"Symmetra","image":"Symmetra.png"},{"name":"Torbj\xf6rn","image":"Torbjorn.png"},{"name":"Tracer","image":"Tracer.png"},{"name":"Widowmaker","image":"Widowmaker.png"},{"name":"Winston","image":"Winston.png"},{"name":"Wrecking Ball","image":"WreckingBall.png"},{"name":"Zarya","image":"Zarya.png"},{"name":"Zenyatta","image":"Zenyatta.png"}]}');var i=a(10639),g=a(39075),m=a(42698);function c(e,n){if(1&e&&i._UZ(0,"img",5),2&e){const e=i.oxw();i.MGl("src","assets/Games/Overwatch/HeroImages/",e.selectedHero.image,"",i.LSH)}}function s(e,n){1&e&&(i.O4$(),i.TgZ(0,"svg",6),i.TgZ(1,"g"),i._UZ(2,"path",7),i._UZ(3,"path",8),i.qZA(),i.qZA())}const p=[{path:"",component:(()=>{class e{constructor(e,n){this.titleService=e,this.metaService=n,this.heroesList=r.e,this.selectedHero={name:"Unknown",image:""}}ngOnInit(){this.titleService.setTitle("Overwatch Random Hero Selector | Random Stuff"),this.metaService.updateTag({name:"description",content:"A randomized Overwatch hero picker, get assigned a random hero to play."}),this.metaService.getTag("name='robots'")?this.metaService.updateTag({name:"robots",content:"index, follow"}):this.metaService.addTag({name:"robots",content:"index, follow"})}selectRandomHero(){for(var e=this.heroesList[this.getRandomArrayIndex(this.heroesList.length)];this.selectedHero.name===e.name;)e=this.heroesList[this.getRandomArrayIndex(this.heroesList.length)];this.selectedHero=e}getRandomArrayIndex(e){return Math.floor(Math.random()*e)}}return e.\u0275fac=function(n){return new(n||e)(i.Y36(g.Dx),i.Y36(g.h_))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-overwatch-random-hero-selector"]],decls:9,vars:3,consts:[[1,"heroWrapper"],[1,"hero"],["alt","",3,"src",4,"ngIf"],["id","Capa_1","enable-background","new 0 0 512 512","height","512","viewBox","0 0 512 512","width","512","xmlns","http://www.w3.org/2000/svg",4,"ngIf"],[3,"click"],["alt","",3,"src"],["id","Capa_1","enable-background","new 0 0 512 512","height","512","viewBox","0 0 512 512","width","512","xmlns","http://www.w3.org/2000/svg"],["d","m256 392c-33.084 0-60 26.916-60 60s26.916 60 60 60 60-26.916 60-60-26.916-60-60-60zm0 90c-16.542 0-30-13.458-30-30s13.458-30 30-30 30 13.458 30 30-13.458 30-30 30z"],["d","m256 0c-86.019 0-156 69.981-156 156v15h120v-15c0-19.851 16.149-36 36-36s36 16.149 36 36c0 10.578-4.643 20.59-12.74 27.471l-83.26 70.787v107.742h120v-52.258l40.976-34.837c34.968-29.714 55.024-73.052 55.024-118.905 0-86.019-69.981-156-156-156zm81.547 252.047-51.547 43.824v36.129h-60v-63.871l72.688-61.8c14.815-12.589 23.312-30.933 23.312-50.329 0-36.393-29.607-66-66-66-31.235 0-57.471 21.81-64.281 51h-60.832c7.441-62.431 60.712-111 125.113-111 69.477 0 126 56.523 126 126 0 37.034-16.201 72.04-44.453 96.047z"]],template:function(e,n){1&e&&(i._UZ(0,"app-overwatch-side-navigation"),i.TgZ(1,"div",0),i.TgZ(2,"div",1),i.YNc(3,c,1,1,"img",2),i.YNc(4,s,4,0,"svg",3),i.TgZ(5,"p"),i._uU(6),i.qZA(),i.TgZ(7,"button",4),i.NdJ("click",function(){return n.selectRandomHero()}),i._uU(8,"Roll!"),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.xp6(3),i.Q6J("ngIf","Unknown"!==n.selectedHero.name),i.xp6(1),i.Q6J("ngIf","Unknown"===n.selectedHero.name),i.xp6(2),i.Oqu(n.selectedHero.name))},directives:[m.j,t.O5],styles:[".heroWrapper[_ngcontent-%COMP%]{width:324px;min-height:calc(100vh - 72px);margin:8px auto 0}.hero[_ngcontent-%COMP%]{width:180px;height:400px;margin:30px auto 0}.hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .hero[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:180px;height:310px;border:1px solid #fff}.hero[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:var(--font-color)}.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0 8px;font-size:22px}.hero[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%;text-align:center}.hero[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--game-page-accent-color);border:none;color:#fff;padding:10px;font-size:16px;margin:1px;outline:none}@media only screen and (max-width:800px){.heroWrapper[_ngcontent-%COMP%]{width:100%;margin-left:0}}"]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[o.Bz.forChild(p)],o.Bz]}),e})();var d=a(16378);let l=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[t.ez,h,d.F]]}),e})()}}]);