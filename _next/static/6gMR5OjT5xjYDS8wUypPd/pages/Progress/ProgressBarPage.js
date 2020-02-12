(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{"3thp":function(e,n,r){r("wnlw"),e.exports=r("rFq9").Array.isArray},lIm4:function(e,n,r){"use strict";var t=r("ERkP"),a=r.n(t),i=r("j/s1"),o=i.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,r=e.primary,t=e.theme;return n&&!r&&Object(i.d)(["background-color:",";padding:",";"],t.colors.warning10,t.spacing.xxSmall)}),(function(e){var n=e.primary,r=e.theme;return n&&Object(i.d)(["color:",";"],r.colors.primary70)}));r.d(n,"a",(function(){return s}));var l=a.a.createElement,s=function(e){return l(o,e)};s.defaultProps={highlight:!0}},nFRM:function(e,n,r){"use strict";var t=r("ysci"),a=r.n(t),i=r("d2TB"),o=r("ERkP"),l=r.n(o),s=r("lIm4"),u=r("XPf/"),c=r("BtTX"),p=r("j/s1"),d=Object(p.e)(i.Flex).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),m=l.a.createElement,g=function(e){var n=e.children,r=e.title,t=Object(o.useState)(!0),a=t[0],l=t[1],s=function(){return l(!a)};return m("div",null,m(d,{marginBottom:"xLarge",alignItems:"center",onClick:s,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||s()},tabIndex:0},a?m(u.a,{title:"Expand"}):m(c.a,{title:"Collapse"}),m(i.Text,null,r)),!a&&n)};r.d(n,"a",(function(){return f}));var h=l.a.createElement,f=function(e){var n=e.collapsible,r=e.id,t=e.propList,a=e.title,o=function(){return h(i.TableFigure,null,h(i.Table,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,r=e.required;return h(l.a.Fragment,null,h(s.a,{primary:!0},n),r?h("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return h(y,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return h(s.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return h(i.Text,null,n)}}],items:t}),h(i.Small,{marginTop:"xSmall"},"Props ending with * are required"))};return n?h(g,{title:"".concat(a," Props")},o()):h(l.a.Fragment,null,h(i.H2,{id:r},a),o())},y=function(e){var n=e.types;return a()(n)?n.map((function(e,r){return h(l.a.Fragment,{key:e},e.type===i.Link?h(s.a,{highlight:!1},e):h(s.a,null,e),r<n.length-1?" | ":null)})):n.type===i.Link?h(s.a,{highlight:!1},n):h(s.a,null,n)}},wn1L:function(e,n,r){"use strict";r.r(n);var t=r("d2TB"),a=r("ERkP"),i=r.n(a),o=r("lIm4"),l=r("GsAr"),s=r("pneb"),u=r("nFRM"),c=i.a.createElement,p=[{name:"percent",types:"number",description:"Sets the fill length from 0 to 100."}],d=function(e){return c(u.a,Object(s.a)({title:"ProgressBar",propList:p},e))},m=i.a.createElement;n.default=function(){return m(i.a.Fragment,null,m(t.H0,null,"Progress Bar"),m(t.Text,null,m(t.Link,{href:"https://design.bigcommerce.com/components/progress-indicators",target:"_blank"},"Progress Indicator Design Guidelines"),"."),m(t.H1,null,"Determinant"),m(t.Text,null,"Determinant Progress represents a known amount of time or completeness for a task. A ",m(o.a,{primary:!0},"percent")," ","prop needs to be passed to render a determinate progress."),m(l.a,null,'<Box marginVertical="large">\n  <ProgressBar percent={50} />\n</Box>'),m(t.H1,null,"Indeterminant"),m(t.Text,null,"Indeterminant Progress represents an unknown amount of time for a task to complete. Component will render an indeterminant progress when missing a ",m(o.a,{primary:!0},"percent")," prop."),m(l.a,null,'<Box marginVertical="large">\n  <ProgressBar />\n</Box>'),m(t.H1,null,"API"),m(d,null))}},wnlw:function(e,n,r){var t=r("IFjL");t(t.S,"Array",{isArray:r("gNE/")})},x4c5:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Progress/ProgressBarPage",function(){return r("wn1L")}])},ysci:function(e,n,r){e.exports=r("3thp")}},[["x4c5",1,2,4,6,9,8,0,49,50,51]]]);