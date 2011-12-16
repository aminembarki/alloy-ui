AUI.add("aui-node-base",function(p){var W=p.Lang,w=W.isArray,q=W.isFunction,H=W.isObject,j=W.isString,s=W.isUndefined,h=W.isValue,t=p.Array,v=p.Node,z=p.NodeList,V=p.getClassName,D=p.DOM._getRegExp,G=W.String.prefix,m=p.config,B=m.doc,o=m.win,I=v.prototype,e=z.prototype,n="",M=[n,n],K="helper",r="offset",U=V(K,"force",r),a=V(K,"hidden"),R=V(K,"unselectable"),k="childNodes",L="createDocumentFragment",y="inner",Q="innerHTML",b="nextSibling",C="none",i="outer",l="parentNode",x="region",F="script",J=false,P="value",c={b:"borderBottomWidth",l:"borderLeftWidth",r:"borderRightWidth",t:"borderTopWidth"},T={b:"marginBottom",l:"marginLeft",r:"marginRight",t:"marginTop"},d={b:"paddingBottom",l:"paddingLeft",r:"paddingRight",t:"paddingTop"},g=function(A,X){return"#"+G(A,X);},E=function(X,A){return A.replace(D("(#|\\[id=(\\\"|\\'))(?!"+X+")","g"),"$1"+X);};var S=B.createElement("div");S.style.display="none";S.innerHTML="   <table></table>&nbsp;";if(S.attachEvent&&S.fireEvent){S.attachEvent("onclick",function(){J=true;S.detachEvent("onclick",arguments.callee);});S.cloneNode(true).fireEvent("onclick");}var f=!S.getElementsByTagName("tbody").length;var u=/^\s+/,O=/=([^=\x27\x22>\s]+\/)>/g,N=/<([\w:]+)/;S=null;v.cssId=g;v.formatSelectorNS=E;p.mix(I,{allNS:function(Y,X){var A=this;return A.all(E(Y,X));},ancestors:function(X){var A=this;var Z=[];var aa=A.getDOM();while(aa&&aa.nodeType!==9){if(aa.nodeType===1){Z.push(aa);}aa=aa.parentNode;}var Y=new p.all(Z);if(X){Y=Y.filter(X);}return Y;},ancestorsByClassName:function(Z){var A=this;var Y=[];var X=new RegExp("\\b"+Z+"\\b");var aa=A.getDOM();while(aa&&aa.nodeType!==9){if(aa.nodeType===1&&X.test(aa.className)){Y.push(aa);}aa=aa.parentNode;}return p.all(Y);},appendTo:function(X){var A=this;p.one(X).append(A);return A;},attr:function(X,ab){var A=this;if(!s(ab)){var aa=A.getDOM();if(X in aa){A.set(X,ab);}else{A.setAttribute(X,ab);}return A;}else{if(H(X)){for(var Y in X){A.attr(Y,X[Y]);}return A;}var Z=A.get(X);if(!W.isValue(Z)){Z=A.getAttribute(X);}return Z;}},clone:(function(){var A;if(J){A=function(){var X=this.getDOM();var Z;if(X.nodeType!=3){var Y=this.outerHTML();Y=Y.replace(O,'="$1">').replace(u,n);Z=v.create(Y);}else{Z=p.one(X.cloneNode());}return Z;};}else{A=function(){return this.cloneNode(true);};}return A;})(),center:function(aa){var X=this,Y=X.get(x),A,ab;if(w(aa)){A=aa[0];ab=aa[1];}else{var Z;if(H(aa)&&!p.instanceOf(aa,p.Node)){Z=aa;}else{Z=(p.one(aa)||p.getBody()).get(x);}A=Z.left+(Z.width/2);ab=Z.top+(Z.height/2);}X.setXY([A-(Y.width/2),ab-(Y.height/2)]);},empty:function(){var A=this;A.all(">*").remove().purge();var X=v.getDOMNode(A);while(X.firstChild){X.removeChild(X.firstChild);}return A;},getDOM:function(){var A=this;return v.getDOMNode(A);},getBorderWidth:function(X){var A=this;return A._getBoxStyleAsNumber(X,c);},getCenterXY:function(){var A=this;var X=A.get(x);return[(X.left+X.width/2),(X.top+X.height/2)];},getMargin:function(X){var A=this;return A._getBoxStyleAsNumber(X,T);},getPadding:function(X){var A=this;return A._getBoxStyleAsNumber(X,d);},guid:function(Y){var X=this;var A=X.get("id");if(!A){A=p.stamp(X);X.set("id",A);}return A;},hover:function(Y,X){var A=this;var Z;var aa=A._defaultHoverOptions;if(H(Y,true)){Z=Y;Z=p.mix(Z,aa);Y=Z.over;X=Z.out;}else{Z=p.mix({over:Y,out:X},aa);}A._hoverOptions=Z;Z.overTask=p.debounce(A._hoverOverTaskFn,null,A);Z.outTask=p.debounce(A._hoverOutTaskFn,null,A);A.on(Z.overEventType,A._hoverOverHandler,A);A.on(Z.outEventType,A._hoverOutHandler,A);},html:function(){var A=arguments,X=A.length;if(X){this.set(Q,A[0]);}else{return this.get(Q);}return this;},oneNS:function(Y,X){var A=this;return A.one(E(Y,X));},outerHTML:function(){var A=this;var Y=A.getDOM();if("outerHTML" in Y){return Y.outerHTML;}var X=v.create("<div></div>").append(this.clone());try{return X.html();}catch(Z){}finally{X=null;}},placeAfter:function(X){var A=this;return A._place(X,A.get(b));},placeBefore:function(X){var A=this;return A._place(X,A);},prependTo:function(X){var A=this;p.one(X).prepend(A);return A;},radioClass:function(X){var A=this;var ac=A.siblings();if(j(X)){ac.removeClass(X);A.addClass(X);}else{if(w(X)){var ab=ac.getDOM();var aa=D("(?:^|\\s+)(?:"+X.join("|")+")(?=\\s+|$)","g");var Z;for(var Y=ab.length-1;Y>=0;Y--){Z=ab[Y];Z.className=Z.className.replace(aa,"");}A.addClass(X.join(" "));}}return A;},resetId:function(X){var A=this;A.attr("id",p.guid(X));return A;},selectText:function(ac,Y){var A=this;var X=A.getDOM();var aa=A.val().length;Y=h(Y)?Y:aa;ac=h(ac)?ac:0;try{if(X.setSelectionRange){X.setSelectionRange(ac,Y);}else{if(X.createTextRange){var Z=X.createTextRange();Z.moveStart("character",ac);Z.moveEnd("character",Y-aa);Z.select();}else{X.select();}}if(X!=B.activeElement){X.focus();}}catch(ab){}return A;},selectable:function(){var A=this;A.getDOM().unselectable="off";A.detach("selectstart");A.setStyles({"MozUserSelect":n,"KhtmlUserSelect":n});A.removeClass(R);return A;},swallowEvent:function(X,Y){var A=this;var Z=function(aa){aa.stopPropagation();if(Y){aa.preventDefault();aa.halt();}return false;};if(w(X)){t.each(X,function(aa){A.on(aa,Z);});return this;}else{A.on(X,Z);}return A;},text:function(Y){var A=this;var X=A.getDOM();if(!s(Y)){Y=p.DOM._getDoc(X).createTextNode(Y);return A.empty().append(Y);}return A._getText(X.childNodes);},toggle:function(X,Y){var A=this;A._toggleView.apply(A,arguments);return A;},unselectable:function(){var A=this;A.getDOM().unselectable="on";A.swallowEvent("selectstart",true);A.setStyles({"MozUserSelect":C,"KhtmlUserSelect":C});A.addClass(R);return A;},val:function(X){var A=this;if(s(X)){return A.get(P);}else{return A.set(P,X);}},_getBoxStyleAsNumber:function(aa,ad){var A=this;var ac=aa.match(/\w/g);var ab=0;var Z;var X;for(var Y=ac.length-1;Y>=0;Y--){X=ac[Y];Z=0;if(X){Z=parseFloat(A.getComputedStyle(ad[X]));Z=Math.abs(Z);ab+=Z||0;}}return ab;},_getText:function(ab){var A=this;var Z=ab.length;var Y;var aa=[];for(var X=0;X<Z;X++){Y=ab[X];if(Y&&Y.nodeType!=8){if(Y.nodeType!=1){aa.push(Y.nodeValue);}if(Y.childNodes){aa.push(A._getText(Y.childNodes));
}}}return aa.join(n);},_hoverOutHandler:function(Y){var A=this;var X=A._hoverOptions;X.outTask.delay(X.outDelay,Y);},_hoverOverHandler:function(Y){var A=this;var X=A._hoverOptions;X.overTask.delay(X.overDelay,Y);},_hoverOutTaskFn:function(Y){var A=this;var X=A._hoverOptions;X.overTask.cancel();X.out.apply(X.context||Y.currentTarget,arguments);},_hoverOverTaskFn:function(Y){var A=this;var X=A._hoverOptions;X.outTask.cancel();X.over.apply(X.context||Y.currentTarget,arguments);},_place:function(Y,X){var A=this;var Z=A.get(l);if(Z){if(j(Y)){Y=v.create(Y);}Z.insertBefore(Y,X);}return A;},_defaultHoverOptions:{overEventType:"mouseenter",outEventType:"mouseleave",overDelay:0,outDelay:0,over:W.emptyFn,out:W.emptyFn}},true);I.__show=I._show;I.__hide=I._hide;I.__isHidden=I._isHidden;I._isHidden=function(){var A=this;return I.__isHidden.call(A)||A.hasClass(A._hideClass||a);};I._hide=function(){var A=this;A.addClass(A._hideClass||a);return A;};I._show=function(){var A=this;A.removeClass(A._hideClass||a);return A;};p.each(["Height","Width"],function(Z,A,aa){var Y=A?"lr":"tb";var X=Z.toLowerCase();I[X]=function(ac){var ab=this;var ad=ab;if(s(ac)){var af=ab._node;var ah;if(af){if((!af.tagName&&af.nodeType===9)||af.alert){ah=ab.get(x)[X];}else{ah=ab.get(r+Z);var ae={};var ag=af.style;if(!ah){ab.addClass(U);ah=ab.get(r+Z);ab.removeClass(U);}if(ah){ah-=(ab.getPadding(Y)+ab.getBorderWidth(Y));}}}ad=ah;}else{ab.setStyle(X,ac);}return ad;};I[y+Z]=function(){var ab=this;return ab[X]()+ab.getPadding(Y);};I[i+Z]=function(af){var ab=this;var ac=ab[y+Z]();var ae=ab.getBorderWidth(Y);var ad=ac+ae;if(af){ad+=ab.getMargin(Y);}return ad;};});if(!f){p.DOM._ADD_HTML=p.DOM.addHTML;p.DOM.addHTML=function(aa,Z,A){var ab=(aa.nodeName&&aa.nodeName.toLowerCase())||n;var X=n;if(!s(Z)){if(j(Z)){X=(N.exec(Z)||M)[1];}else{if(Z.nodeType&&Z.nodeType==11&&Z.childNodes.length){X=Z.childNodes[0].nodeName;}else{if(Z.nodeName){X=Z.nodeName;}}}X=X&&X.toLowerCase();}if(ab=="table"&&X=="tr"){aa=aa.getElementsByTagName("tbody")[0]||aa.appendChild(aa.ownerDocument.createElement("tbody"));var Y=((A&&A.nodeName)||n).toLowerCase();if(Y=="tbody"&&A.childNodes.length>0){A=A.firstChild;}}return p.DOM._ADD_HTML(aa,Z,A);};}z.importMethod(I,["after","appendTo","attr","before","empty","hover","html","innerHeight","innerWidth","outerHeight","outerHTML","outerWidth","prepend","prependTo","purge","selectText","selectable","text","toggle","unselectable","val"]);p.mix(e,{all:function(Y){var X=this;var ac=[];var Z=X._nodes;var ab=Z.length;var A;for(var aa=0;aa<ab;aa++){A=p.Selector.query(Y,Z[aa]);if(A&&A.length){ac.push.apply(ac,A);}}ac=t.unique(ac);return p.all(ac);},allNS:function(Y,X){var A=this;return A.all(E(Y,X));},first:function(){var A=this;return A.item(0);},getDOM:function(){var A=this;return z.getDOMNodes(this);},last:function(){var A=this;return A.item(A._nodes.length-1);},one:function(X){var A=this;var aa=null;var Y=A._nodes;var ab=Y.length;for(var Z=0;Z<ab;Z++){aa=p.Selector.query(X,Y[Z],true);if(aa){aa=p.one(aa);break;}}return aa;},oneNS:function(Y,X){var A=this;return A.one(E(Y,X));}});e.__filter=e.filter;e.filter=function(Z,Y){var A=this;var aa;if(q(Z)){var X=[];A.each(function(ac,ab,ad){if(Z.call(Y||ac,ac,ab,ad)){X.push(ac._node);}});aa=p.all(X);}else{aa=e.__filter.call(A,Z);}return aa;};p.mix(z,{create:function(X){var A=p.getDoc().invoke(L);return A.append(X).get(k);}});p.mix(p,{getBody:function(){var A=this;if(!A._bodyNode){A._bodyNode=p.one(B.body);}return A._bodyNode;},getDoc:function(){var A=this;if(!A._documentNode){A._documentNode=p.one(B);}return A._documentNode;},getWin:function(){var A=this;if(!A._windowNode){A._windowNode=p.one(o);}return A._windowNode;}});p.queryNS=function(Y,A,X){return p[X||"one"](E(Y,A));};p.oneNS=p.queryNS;p.allNS=function(X,A){return p.queryNS(X,A,"all");};p.byIdNS=function(A,X){return p.one(g(A,X));};e.hide=function(){var A=this;var X=arguments;A.each(function(Y){Y.hide.apply(Y,X);});return A;};e.show=function(){var A=this;var X=arguments;A.each(function(Y){Y.show.apply(Y,X);});return A;};},"@VERSION@",{requires:["aui-base-lang","node","aui-classnamemanager"]});AUI.add("aui-node-html5",function(a){if(a.UA.ie){var c=a.namespace("HTML5"),b=a.DOM._create;if(!c._fragHTML5Shived){c._fragHTML5Shived=YUI.AUI.html5shiv(a.config.doc.createDocumentFragment());}a.mix(c,{IECreateFix:function(f,e){var d=c._fragHTML5Shived;d.appendChild(f);f.innerHTML=e;d.removeChild(f);return f;},_doBeforeCreate:function(f,h,e){var g=b.apply(this,arguments);var d=c.IECreateFix(g,f);return new a.Do.Halt(null,d);}});a.Do.before(c._doBeforeCreate,a.DOM,"_create",a.DOM);}},"@VERSION@",{requires:["collection","aui-base"]});AUI.add("aui-node-html5-print",function(i){var f=i.config,y=f.doc,h=f.win,v=i.UA,o=v.ie,r=function(){return h.AUI_HTML5_IE===false;};if(!o||o>=9||r()){return;}var K=[],q="aui-printfix",n="aui-printfix-",k=h.location,I=k.protocol+"//"+k.host,c=YUI.AUI,J=y.documentElement,z=c.HTML5_ELEMENTS,l=z.length,s=z.join("|"),D=new RegExp("<(/?):("+s+")","gi"),p=new RegExp("("+s+")","gi"),a=new RegExp("\\b("+s+")\\b","i"),G=/print|all/,H=new RegExp("(^|[^\\n{}]*?\\s)("+s+").*?{([^}]*)}","gim"),j=new RegExp("<(/*)("+s+")","gi"),E="."+n+"$1",L="all",t=" ",g="",b="{",F="}",d="https",B="url(",C=B+I,m="<$1$2",e="<$1font";var u=c.html5shiv,x=function(A){return A&&(A+g!==undefined);};u(y);var w=function(){var N=function(){if(r()){M();}else{w.onAfterPrint();}};var A=function(){if(r()){M();}else{w.onBeforePrint();}};var M=function(){h.detachEvent("onafterprint",N);h.detachEvent("onbeforeprint",A);};var O=function(){h.attachEvent("onafterprint",N);h.attachEvent("onbeforeprint",A);};O();w.destroy=M;w.init=O;};i.mix(w,{onAfterPrint:function(){var A=this;A.restoreHTML();var M=A._getStyleSheet();M.styleSheet.cssText=g;},onBeforePrint:function(){var A=this;var N=A._getStyleSheet();var M=A._getAllCSSText();N.styleSheet.cssText=A.parseCSS(M);A.writeHTML();},parseCSS:function(N){var A=this;var M=g;var O;var P=N.match(H);if(P){M=P.join("\n").replace(p,E);
}return M;},restoreHTML:function(){var A=this;var N=A._getBodyClone();var M=A._getBodyEl();N.innerHTML=g;J.removeChild(N);J.appendChild(M);},writeHTML:function(){var Z=this;var Y=-1;var X;var T=Z._getBodyEl();var Q;var S;var aa;var P;var U;var V=[];while(++Y<l){Q=z[Y];aa=y.getElementsByTagName(Q);P=aa.length;X=-1;while(++X<P){U=aa[X];S=U.className;if(S.indexOf(n)==-1){V[0]=n+Q;V[1]=S;U.className=V.join(t);}}}var A=Z._getDocFrag();var N=Z._getBodyClone();A.appendChild(T);J.appendChild(N);N.className=T.className;N.id=T.id;if(v.secure){var R=T.getElementsByTagName("*");var O=T.style;var W;var M;O.display="none";for(var Y=0,ac=R.length;Y<ac;Y++){W=R[Y].style;M=W.backgroundImage;if(M&&M.indexOf(B)>-1&&M.indexOf(d)==-1){W.backgroundImage=M.replace(B,C);}}O.display=g;}var ab=T.cloneNode(true).innerHTML;ab=ab.replace(D,m).replace(j,e);N.innerHTML=ab;},_getAllCSSText:function(){var S=this;var O=[];var R=S._getAllStyleSheets(y.styleSheets,L);var Q;var M;for(var P=0;styleSheet=R[P];P++){var T=styleSheet.rules;if(T&&T.length){for(var N=0,A=T.length;N<A;N++){Q=T[N];if(!Q.href){M=S._getCSSTextFromRule(Q);O.push(M);}}}}return O.join(t);},_getCSSTextFromRule:function(R){var A=this;var N=g;var Q=R.style;var P;var O;var M;if(Q&&(O=Q.cssText)&&(M=R.selectorText)&&a.test(M)){K.length=0;K.push(M,b,O,F);N=K.join(t);}return N;},_getAllStyleSheets:function(R,U,M,O){var S=this;M=M||1;O=O||[];if(x(R)){var A=R.imports;U=R.mediaType||U;if(G.test(U)){var N;if(M<=3&&x(A)&&A.length){for(var P=0,N=A.length;P<N;P++){S._getAllStyleSheets(A[P],U,M+1,O);}}else{if(R.length){for(var P=0,N=R.length;P<N;P++){S._getAllStyleSheets(R[P],U,M,O);}}else{var T=R.rules;var Q;if(T&&T.length){for(var P=0,N=T.length;P<N;P++){Q=T[P].styleSheet;if(Q){S._getAllStyleSheets(Q,U,M,O);}}}}}if(!R.disabled&&R.rules){O.push(R);}}}U=L;return O;},_getBodyEl:function(){var A=this;var M=A._bodyEl;if(!M){M=y.body;A._bodyEl=M;}return M;},_getBodyClone:function(){var A=this;var M=A._bodyClone;if(!M){M=y.createElement("body");A._bodyClone=M;}return M;},_getDocFrag:function(){var A=this;var M=A._docFrag;if(!M){M=y.createDocumentFragment();u(M);A._docFrag=M;}return M;},_getStyleSheet:function(){var A=this;var N=A._styleSheet;if(!N){N=y.createElement("style");var M=y.documentElement.firstChild;M.insertBefore(N,M.firstChild);N.media="print";N.className=q;A._styleSheet=N;}return N;}});i.namespace("HTML5").PrintFix=w;w();},"@VERSION@",{requires:["aui-node-html5"]});AUI.add("aui-node",function(a){},"@VERSION@",{skinnable:false,use:["aui-node-base","aui-node-html5","aui-node-html5-print"]});