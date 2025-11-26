import{ft as e}from"./app-DK8K0KNv.js";const t=new class{async generateDiagram(t){let n=`根据以下描述生成 Excalidraw 图表元素：${t}

只返回 JSON 数组，不要包含任何其他文字。`;try{let t=(await e.chat({model:`dashscope/qwen3-max`,messages:[{role:`system`,content:`你是一个专业的图表生成助手。根据用户描述生成 Excalidraw 图表元素。

要求：
1. 理解用户描述，生成相应的图表（流程图、架构图、系统图等）
2. 只返回 JSON 数组，不要包含其他文字
3. 每个元素只需包含核心字段，其他字段系统会自动补充

基础元素（rectangle, ellipse, diamond 等）必需字段：
- type: 元素类型
- x, y: 位置坐标
- width, height: 尺寸
- strokeColor: 边框颜色（可选，默认 "#1e1e1e"）
- backgroundColor: 背景颜色（可选，默认 "transparent"）

文本元素额外字段：
- text: 文本内容
- fontSize: 字体大小（默认 20）
- fontFamily: 字体族（1=normal, 2=code, 3=hand, 4=hand-drawn，默认 1）
- textAlign: 对齐方式（"left", "center", "right"，默认 "center"）
- verticalAlign: 垂直对齐（"top", "middle", "bottom"，默认 "middle"）

箭头元素额外字段：
- points: 点数组，如 [[0, 0], [100, 100]]
- startArrowhead: null 或 "arrow"（默认 null）
- endArrowhead: "arrow" 或 null（默认 "arrow"）

布局要求：
- 元素间距合理，避免重叠
- 使用合适的颜色搭配
- 坐标从 (100, 100) 开始，元素间距至少 50px

示例（只包含必需字段）：
[
  {
    "type": "rectangle",
    "x": 100,
    "y": 100,
    "width": 200,
    "height": 80,
    "strokeColor": "#1e1e1e",
    "backgroundColor": "#4f46e5"
  },
  {
    "type": "text",
    "x": 150,
    "y": 125,
    "width": 100,
    "height": 30,
    "text": "前端",
    "fontSize": 20,
    "fontFamily": 1,
    "textAlign": "center",
    "verticalAlign": "middle",
    "strokeColor": "#ffffff"
  }
]`},{role:`user`,content:n}]})).messages[0]?.content||``;if(!t.trim())throw Error(`AI 返回的内容为空`);let r=t.trim();if(r.startsWith("```json")?r=r.replace(/^```json\s*/m,``).replace(/\s*```$/m,``):r.startsWith("```")&&(r=r.replace(/^```\s*/m,``).replace(/\s*```$/m,``)),r=r.trim(),!r)throw Error(`AI 返回的内容格式不正确`);let i;try{i=JSON.parse(r)}catch(e){throw console.error(`JSON 解析错误:`,e),console.error(`原始内容:`,r),Error(`AI 返回的内容不是有效的 JSON 格式: ${e instanceof Error?e.message:`未知错误`}`)}if(!Array.isArray(i))throw Error(`AI 返回的不是数组格式`);return i.map((e,t)=>{let n=Date.now()+t,r={...e,id:e.id||`element-${n}`,version:e.version||141,versionNonce:e.versionNonce||n,updated:e.updated||n,seed:e.seed||n,isDeleted:!1,groupIds:e.groupIds||[],frameId:e.frameId||null,boundElements:e.boundElements||[],link:e.link||null,locked:e.locked||!1,opacity:e.opacity??100,angle:e.angle||0,roughness:e.roughness??1,strokeWidth:e.strokeWidth??2,strokeStyle:e.strokeStyle||`solid`,fillStyle:e.fillStyle||`solid`,strokeColor:e.strokeColor||`#1e1e1e`,backgroundColor:e.backgroundColor||`transparent`};if(e.type===`text`&&`text`in e){let t=e,n=t.fontSize??20,i=t.height??n*1.5;return{...r,text:t.text||``,fontSize:n,fontFamily:t.fontFamily??1,textAlign:t.textAlign||`center`,verticalAlign:t.verticalAlign||`middle`,originalText:t.originalText||t.text||``,lineHeight:t.lineHeight??1.25,baseline:t.baseline??Math.round(i*.8),containerId:t.containerId||null}}if(e.type===`arrow`&&`points`in e){let t=e,n=t.points||[];return{...r,points:n,lastCommittedPoint:t.lastCommittedPoint||(n.length>0?n[n.length-1]:null),startArrowhead:t.startArrowhead??null,endArrowhead:t.endArrowhead??`arrow`,startBinding:t.startBinding||null,endBinding:t.endBinding||null}}return r})}catch(e){throw console.error(`Error generating diagram:`,e),Error(e instanceof Error?e.message:`生成图表时出错，请重试`)}}};var n=new class{currentHandle=null;register(e){this.currentHandle=e}unregister(e){this.currentHandle===e&&(this.currentHandle=null)}getCurrentHandle(){return this.currentHandle}};function r(e){n.register(e)}function i(e){n.unregister(e)}function a(){return n.getCurrentHandle()}export{t as i,r as n,i as r,a as t};