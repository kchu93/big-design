(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"3thp":function(e,n,t){t("wnlw"),e.exports=t("rFq9").Array.isArray},GMks:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Checkbox/CheckboxPage",function(){return t("o6rH")}])},lIm4:function(e,n,t){"use strict";var r=t("ERkP"),a=t.n(r),l=t("j/s1"),i=l.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,r=e.theme;return n&&!t&&Object(l.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(l.d)(["color:",";"],t.colors.primary70)}));t.d(n,"a",(function(){return c}));var o=a.a.createElement,c=function(e){return o(i,e)};c.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";var r=t("ysci"),a=t.n(r),l=t("d2TB"),i=t("ERkP"),o=t.n(i),c=t("lIm4"),s=t("XPf/"),u=t("BtTX"),d=t("j/s1"),h=Object(d.e)(l.Flex).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),p=o.a.createElement,m=function(e){var n=e.children,t=e.title,r=Object(i.useState)(!0),a=r[0],o=r[1],c=function(){return o(!a)};return p("div",null,p(h,{marginBottom:"xLarge",alignItems:"center",onClick:c,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||c()},tabIndex:0},a?p(s.a,{title:"Expand"}):p(u.a,{title:"Collapse"}),p(l.Text,null,t)),!a&&n)};t.d(n,"a",(function(){return b}));var k=o.a.createElement,b=function(e){var n=e.collapsible,t=e.id,r=e.propList,a=e.title,i=function(){return k(l.TableFigure,null,k(l.Table,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return k(o.a.Fragment,null,k(c.a,{primary:!0},n),t?k("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return k(y,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return k(c.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return k(l.Text,null,n)}}],items:r}),k(l.Small,{marginTop:"xSmall"},"Props ending with * are required"))};return n?k(m,{title:"".concat(a," Props")},i()):k(o.a.Fragment,null,k(l.H2,{id:t},a),i())},y=function(e){var n=e.types;return a()(n)?n.map((function(e,t){return k(o.a.Fragment,{key:e},e.type===l.Link?k(c.a,{highlight:!1},e):k(c.a,null,e),t<n.length-1?" | ":null)})):n.type===l.Link?k(c.a,{highlight:!1},n):k(c.a,null,n)}},o6rH:function(e,n,t){"use strict";t.r(n);var r=t("d2TB"),a=t("ERkP"),l=t.n(a),i=t("lIm4"),o=t("GsAr"),c=t("pneb"),s=t("nFRM"),u=l.a.createElement,d=[{name:"label",types:["string","CheckboxLabel"],required:!0,description:"Label to display next to a <Code>Checkbox</Code> component."},{name:"hiddenLabel",types:"boolean",description:u(l.a.Fragment,null,"Renders ",u(i.a,{primary:!0},"Checkbox")," with a visually hidden label, retains accessibility for screen readers.")},{name:"isIndeterminate",types:"boolean",description:u(l.a.Fragment,null,"Styles and sets the checkbox into a indeterminate state. Note that the ",u(i.a,{primary:!0},"checked")," prop will take precedence over ",u(i.a,{primary:!0},"isIndeterminate"),".")}],h=function(e){return u(l.a.Fragment,null,u(r.Text,null,"Supports all native ",u(i.a,null,"<input />")," element attributes."),u(s.a,Object(c.a)({title:"Checkbox",propList:d},e)))},p=l.a.createElement;n.default=function(){return p(l.a.Fragment,null,p(r.H0,null,"Checkbox"),p(r.Text,null,"Checkboxes are a stylized ",p(i.a,null,'input[type="checkbox"]')," with controllable checked/unchecked states."," ",p(r.Link,{href:"https://design.bigcommerce.com/components/checkboxes",target:"_blank"},"Checkbox Design Guidelines"),"."),p(o.a,null,"function Example() {\n  const [checked, setChecked] = React.useState(false);\n  const handleChange = () => setChecked(!checked);\n\n  return (\n    <Form>\n      <FormGroup>\n        <Checkbox label={checked ? 'Checked' : 'Unchecked'} checked={checked} onChange={handleChange} />\n      </FormGroup>\n    </Form>\n  );\n}"),p(r.H1,null,"API"),p(h,null),p(r.H1,null,"Indeterminate"),p(r.Text,null,"Checkboxes support ",p(i.a,{primary:!0},"isIndeterminate")," passed as a prop to show a combined state of partially selected checkboxes."),p(o.a,null,'<Form>\n  <FormGroup>\n    <Checkbox label="Indeterminate" isIndeterminate />\n  </FormGroup>\n</Form>'))}},wnlw:function(e,n,t){var r=t("IFjL");r(r.S,"Array",{isArray:t("gNE/")})},ysci:function(e,n,t){e.exports=t("3thp")}},[["GMks",1,2,4,6,9,8,0,49,50,51]]]);