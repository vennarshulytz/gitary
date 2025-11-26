import{C as e,E as t,T as n,w as r}from"./app-w2Jd5jCf.js";import{$ as i,B as a,E as o,c as s,j as c,m as l,pt as u,v as d,vt as f,w as p,x as m,z as h}from"./mermaid-b5860b54-BtaV6srn.js";import{t as g}from"./channel-gFWcY1o2.js";import{x as _}from"./_getTag-B_2LHer_.js";import{t as v}from"./graphlib-CE-n686m.js";import{t as y}from"./index-3862675e-C8wj6jNB.js";function b(e){return typeof e==`string`?new r([document.querySelectorAll(e)],[document.documentElement]):new r([t(e)],n)}function x(e,t){return!!e.children(t).length}function S(e){return w(e.v)+`:`+w(e.w)+`:`+w(e.name)}var C=/:/g;function w(e){return e?String(e).replace(C,`\\:`):``}function T(e,t){t&&e.attr(`style`,t)}function E(e,t,n){t&&e.attr(`class`,t).attr(`class`,n+` `+e.attr(`class`))}function D(e,t){var n=t.graph();if(i(n)){var r=n.transition;if(_(r))return r(e)}return e}function O(e,t){var n=e.append(`foreignObject`).attr(`width`,`100000`),r=n.append(`xhtml:div`);r.attr(`xmlns`,`http://www.w3.org/1999/xhtml`);var i=t.label;switch(typeof i){case`function`:r.insert(i);break;case`object`:r.insert(function(){return i});break;default:r.html(i)}T(r,t.labelStyle),r.style(`display`,`inline-block`),r.style(`white-space`,`nowrap`);var a=r.node().getBoundingClientRect();return n.attr(`width`,a.width).attr(`height`,a.height),n}var k={},A=function(e){let t=Object.keys(e);for(let n of t)k[n]=e[n]},j=async function(e,t,n,r,i,a){let u=r.select(`[id="${n}"]`),f=Object.keys(e);for(let n of f){let r=e[n],f=`default`;r.classes.length>0&&(f=r.classes.join(` `)),f+=` flowchart-label`;let p=m(r.styles),h=r.text===void 0?r.id:r.text,g;if(o.info(`vertex`,r,r.labelType),r.labelType===`markdown`)o.info(`vertex`,r,r.labelType);else if(l(d().flowchart.htmlLabels))g=O(u,{label:h}).node(),g.parentNode.removeChild(g);else{let e=i.createElementNS(`http://www.w3.org/2000/svg`,`text`);e.setAttribute(`style`,p.labelStyle.replace(`color:`,`fill:`));let t=h.split(s.lineBreakRegex);for(let n of t){let t=i.createElementNS(`http://www.w3.org/2000/svg`,`tspan`);t.setAttributeNS(`http://www.w3.org/XML/1998/namespace`,`xml:space`,`preserve`),t.setAttribute(`dy`,`1em`),t.setAttribute(`x`,`1`),t.textContent=n,e.appendChild(t)}g=e}let _=0,v=``;switch(r.type){case`round`:_=5,v=`rect`;break;case`square`:v=`rect`;break;case`diamond`:v=`question`;break;case`hexagon`:v=`hexagon`;break;case`odd`:v=`rect_left_inv_arrow`;break;case`lean_right`:v=`lean_right`;break;case`lean_left`:v=`lean_left`;break;case`trapezoid`:v=`trapezoid`;break;case`inv_trapezoid`:v=`inv_trapezoid`;break;case`odd_right`:v=`rect_left_inv_arrow`;break;case`circle`:v=`circle`;break;case`ellipse`:v=`ellipse`;break;case`stadium`:v=`stadium`;break;case`subroutine`:v=`subroutine`;break;case`cylinder`:v=`cylinder`;break;case`group`:v=`rect`;break;case`doublecircle`:v=`doublecircle`;break;default:v=`rect`}let y=await c(h,d());t.setNode(r.id,{labelStyle:p.labelStyle,shape:v,labelText:y,labelType:r.labelType,rx:_,ry:_,class:f,style:p.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:a.db.getTooltip(r.id)||``,domId:a.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:r.type===`group`?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:d().flowchart.padding}),o.info(`setNode`,{labelStyle:p.labelStyle,labelType:r.labelType,shape:v,labelText:y,rx:_,ry:_,class:f,style:p.style,id:r.id,domId:a.db.lookUpDomId(r.id),width:r.type===`group`?500:void 0,type:r.type,dir:r.dir,props:r.props,padding:d().flowchart.padding})}},M=async function(e,t,n){o.info(`abc78 edges = `,e);let r=0,i={},a,l;if(e.defaultStyle!==void 0){let t=m(e.defaultStyle);a=t.style,l=t.labelStyle}for(let n of e){r++;let u=`L-`+n.start+`-`+n.end;i[u]===void 0?(i[u]=0,o.info(`abc78 new entry`,u,i[u])):(i[u]++,o.info(`abc78 new entry`,u,i[u]));let h=u+`-`+i[u];o.info(`abc78 new link id to be used is`,u,h,i[u]);let g=`LS-`+n.start,_=`LE-`+n.end,v={style:``,labelStyle:``};switch(v.minlen=n.length||1,n.type===`arrow_open`?v.arrowhead=`none`:v.arrowhead=`normal`,v.arrowTypeStart=`arrow_open`,v.arrowTypeEnd=`arrow_open`,n.type){case`double_arrow_cross`:v.arrowTypeStart=`arrow_cross`;case`arrow_cross`:v.arrowTypeEnd=`arrow_cross`;break;case`double_arrow_point`:v.arrowTypeStart=`arrow_point`;case`arrow_point`:v.arrowTypeEnd=`arrow_point`;break;case`double_arrow_circle`:v.arrowTypeStart=`arrow_circle`;case`arrow_circle`:v.arrowTypeEnd=`arrow_circle`;break}let y=``,b=``;switch(n.stroke){case`normal`:y=`fill:none;`,a!==void 0&&(y=a),l!==void 0&&(b=l),v.thickness=`normal`,v.pattern=`solid`;break;case`dotted`:v.thickness=`normal`,v.pattern=`dotted`,v.style=`fill:none;stroke-width:2px;stroke-dasharray:3;`;break;case`thick`:v.thickness=`thick`,v.pattern=`solid`,v.style=`stroke-width: 3.5px;fill:none;`;break;case`invisible`:v.thickness=`invisible`,v.pattern=`solid`,v.style=`stroke-width: 0;fill:none;`;break}if(n.style!==void 0){let e=m(n.style);y=e.style,b=e.labelStyle}v.style=v.style+=y,v.labelStyle=v.labelStyle+=b,n.interpolate===void 0?e.defaultInterpolate===void 0?v.curve=p(k.curve,f):v.curve=p(e.defaultInterpolate,f):v.curve=p(n.interpolate,f),n.text===void 0?n.style!==void 0&&(v.arrowheadStyle=`fill: #333`):(v.arrowheadStyle=`fill: #333`,v.labelpos=`c`),v.labelType=n.labelType,v.label=await c(n.text.replace(s.lineBreakRegex,`
`),d()),n.style===void 0&&(v.style=v.style||`stroke: #333; stroke-width: 1.5px;fill:none;`),v.labelStyle=v.labelStyle.replace(`color:`,`fill:`),v.id=h,v.classes=`flowchart-link `+g+` `+_,t.setEdge(n.start,n.end,v,r)}},N={setConf:A,addVertices:j,addEdges:M,getClasses:function(e,t){return t.db.getClasses()},draw:async function(t,n,r,i){o.info(`Drawing flowchart`);let s=i.db.getDirection();s===void 0&&(s=`TD`);let{securityLevel:c,flowchart:l}=d(),u=l.nodeSpacing||50,f=l.rankSpacing||50,p;c===`sandbox`&&(p=e(`#i`+n));let m=e(c===`sandbox`?p.nodes()[0].contentDocument.body:`body`),g=c===`sandbox`?p.nodes()[0].contentDocument:document,_=new v({multigraph:!0,compound:!0}).setGraph({rankdir:s,nodesep:u,ranksep:f,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),x,S=i.db.getSubGraphs();o.info(`Subgraphs - `,S);for(let e=S.length-1;e>=0;e--)x=S[e],o.info(`Subgraph - `,x),i.db.addVertex(x.id,{text:x.title,type:x.labelType},`group`,void 0,x.classes,x.dir);let C=i.db.getVertices(),w=i.db.getEdges();o.info(`Edges`,w);let T=0;for(T=S.length-1;T>=0;T--){x=S[T],b(`cluster`).append(`text`);for(let e=0;e<x.nodes.length;e++)o.info(`Setting up subgraphs`,x.nodes[e],x.id),_.setParent(x.nodes[e],x.id)}await j(C,_,n,m,g,i),await M(w,_);let E=m.select(`[id="${n}"]`);if(await y(m.select(`#`+n+` g`),_,[`point`,`circle`,`cross`],`flowchart`,n),a.insertTitle(E,`flowchartTitleText`,l.titleTopMargin,i.db.getDiagramTitle()),h(_,E,l.diagramPadding,l.useMaxWidth),i.db.indexNodes(`subGraph`+T),!l.htmlLabels){let e=g.querySelectorAll(`[id="`+n+`"] .edgeLabel .label`);for(let t of e){let e=t.getBBox(),n=g.createElementNS(`http://www.w3.org/2000/svg`,`rect`);n.setAttribute(`rx`,0),n.setAttribute(`ry`,0),n.setAttribute(`width`,e.width),n.setAttribute(`height`,e.height),t.insertBefore(n,t.firstChild)}}Object.keys(C).forEach(function(t){let r=C[t];if(r.link){let i=e(`#`+n+` [id="`+t+`"]`);if(i){let e=g.createElementNS(`http://www.w3.org/2000/svg`,`a`);e.setAttributeNS(`http://www.w3.org/2000/svg`,`class`,r.classes.join(` `)),e.setAttributeNS(`http://www.w3.org/2000/svg`,`href`,r.link),e.setAttributeNS(`http://www.w3.org/2000/svg`,`rel`,`noopener`),c===`sandbox`?e.setAttributeNS(`http://www.w3.org/2000/svg`,`target`,`_top`):r.linkTarget&&e.setAttributeNS(`http://www.w3.org/2000/svg`,`target`,r.linkTarget);let t=i.insert(function(){return e},`:first-child`),n=i.select(`.label-container`);n&&t.append(function(){return n.node()});let a=i.select(`.label`);a&&t.append(function(){return a.node()})}}})}},P=(e,t)=>{let n=g;return u(n(e,`r`),n(e,`g`),n(e,`b`),t)},F=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${P(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`;export{T as a,x as c,E as i,b as l,F as n,D as o,O as r,S as s,N as t};