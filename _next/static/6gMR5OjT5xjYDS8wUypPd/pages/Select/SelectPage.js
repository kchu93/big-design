(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{"2pL5":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Select/SelectPage",function(){return t("WdXb")}])},AwPv:function(e,n,t){var o=t("IFjL");o(o.P+o.R,"Map",{toJSON:t("KIy9")("Map")})},EfDG:function(e,n,t){"use strict";var o=t("zCrM"),r=t("S5Zg");e.exports=t("HKkr")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var n=o.getEntry(r(this,"Map"),e);return n&&n.v},set:function(e,n){return o.def(r(this,"Map"),0===e?0:e,n)}},o,!0)},"F//K":function(e,n,t){t("dUHx"),t("/r3m"),t("Fk9O"),t("EfDG"),t("AwPv"),t("SZul"),t("Lwwr"),e.exports=t("rFq9").Map},JeHL:function(e,n,t){e.exports=t("F//K")},KIy9:function(e,n,t){var o=t("M25K"),r=t("qiY+");e.exports=function(e){return function(){if(o(this)!=e)throw TypeError(e+"#toJSON isn't generic");return r(this)}}},KeDb:function(e,n,t){"use strict";var o=t("E1+a"),r=t("Z05o"),a=t("OY2S"),l=t("zBsc"),i=t("wt0f"),u=t("JeHL"),s=t("lpv4"),c=t("5Tpg");n.__esModule=!0,n.default=void 0;var p,d=t("EfWO"),f=c(t("ERkP")),h=s(t("7xIC")),m=t("fvxO");function v(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var g=new u,y=window.IntersectionObserver,b={};function S(){return p||(y?p=new y((function(e){e.forEach((function(e){if(g.has(e.target)){var n=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),g.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0)}var x=function(e){function n(e){var t;return o(this,n),(t=a(this,l(n).call(this,e))).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var n=null,t=null,o=null;return function(r,a){if(o&&r===n&&a===t)return o;var l=e(r,a);return n=r,t=a,o=l,l}}((function(e,n){return{href:v(e),as:n?v(n):n}})),t.linkClicked=function(e){var n=e.currentTarget,o=n.nodeName,r=n.target;if("A"!==o||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=t.formatUrls(t.props.href,t.props.as),l=a.href,i=a.as;if(function(e){var n=(0,d.parse)(e,!1,!0),t=(0,d.parse)((0,m.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(l)){var u=window.location.pathname;l=(0,d.resolve)(u,l),i=i?(0,d.resolve)(u,i):l,e.preventDefault();var s=t.props.scroll;null==s&&(s=i.indexOf("#")<0),h.default[t.props.replace?"replace":"push"](l,i,{shallow:t.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return i(n,e),r(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as).href;return(0,d.resolve)(e,n)}},{key:"handleRef",value:function(e){var n=this,t=b[this.getHref()];this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),t||(this.cleanUpListeners=function(e,n){var t=S();return t?(t.observe(e),g.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}g.delete(e)}):function(){}}(e,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var e=this.getHref();h.default.prefetch(e),b[e]=!0}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),o=t.href,r=t.as;"string"===typeof n&&(n=f.default.createElement("a",null,n));var a=f.Children.only(n),l={ref:function(n){e.handleRef(n),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(n):"object"===typeof a.ref&&(a.ref.current=n))},onMouseEnter:function(n){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(n),e.prefetch()},onClick:function(n){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(l.href=r||o),f.default.cloneElement(a,l)}}]),n}(f.Component);n.default=x},Lwwr:function(e,n,t){t("zjhQ")("Map")},R5dR:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var o=t("d2TB"),r=t("jvFD"),a=t.n(r),l=t("ERkP"),i=t.n(l).a.createElement;function u(){return"/big-design"+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")}var s=function(e){var n=e.as,t=e.children,r=e.href;return i(a.a,{href:r,as:u(n)},"string"===typeof t?i(o.Link,{href:c(r)?r:""},t):t)};function c(e){return e&&"#"===e.charAt(0)}},SZul:function(e,n,t){t("iaOj")("Map")},WdXb:function(e,n,t){"use strict";t.r(n);var o=t("d2TB"),r=t("ERkP"),a=t.n(r),l=t("GsAr"),i=t("lIm4"),u=t("pneb"),s=t("R5dR"),c=t("nFRM"),p=a.a.createElement,d=[{name:"action",types:"Action",description:"Action option displayed at the end of the list."},{name:"disabled",types:"boolean",description:"Disables the select component."},{name:"error",types:"string",description:"Displays a form error around the field."},{name:"filterable",types:"boolean",defaultValue:"true",description:p(a.a.Fragment,null,"Allows you to filter the ",p(i.a,null,"Options")," in the ",p(i.a,null,"Select"),".")},{name:"inputRef",types:"React.Ref<HTMLInputElement> | React.RefObject<HTMLInputElement>",description:p(a.a.Fragment,null,"The provided ref will be used for the underlying input element used in the ",p(i.a,null,"Select"),".")},{name:"label",types:"string",description:"Adds a label to the field."},{name:"maxHeight",types:"number",defaultValue:"250",description:p(a.a.Fragment,null,"Sets a ",p(i.a,null,"max-height")," to the dropdown.")},{name:"multi",types:"boolean",description:"Renders a multiselect component."},{name:"options",types:"Array<Options>",required:!0,description:p(a.a.Fragment,null,"Accepts an array of ",p(i.a,null,"Options"),". See example for usage.")},{name:"placement",types:["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],defaultValue:"bottom-start",description:"Determines the location in which the dropdown will be placed."},{name:"positionFixed",defaultValue:"false",types:"boolean",description:p(a.a.Fragment,null,"If set, uses ",p(i.a,null,"position: fixed")," instead of ",p(i.a,null,"position: absolute")," to position the items.")},{name:"required",types:"boolean",description:"Sets the field as required."},{name:"value",types:"string | number | Array<string | number>",description:p(a.a.Fragment,null,"Modifies the current selected value of the field. If rendering a ",p(i.a,null,"multiselect")," component,"," ",p(i.a,null,"value")," expects an array.")},{name:"onItemChange",types:"(value: string | number | Array<string | number>) => void",required:!0,description:"Callback called with value of selected option."}],f=[{name:"disabled",types:"boolean",description:"Sets the Option to disabled."},{name:"content",types:"string",required:!0,description:"Sets the text content of the Option."},{name:"icon",types:p(s.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon"),description:p(a.a.Fragment,null,"Pass in an"," ",p(s.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon")," ","component to display to the left of the text.")},{name:"value",types:"string | number | Array<string | number>",required:!0,description:"Stored value of the Option."}],h=[{name:"actionType",types:["normal","destructive"],defaultValue:"normal",description:"Indicates whether the Action is of normal or destructive nature."},{name:"disabled",types:"boolean",description:"Sets the Action to disabled."},{name:"content",types:"string",required:!0,description:"Sets the text content of the Action."},{name:"icon",types:p(s.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon"),description:p(a.a.Fragment,null,"Pass in an"," ",p(s.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon")," ","component to display to the left of the text.")},{name:"onClick",types:"(inputText: string): void",description:"Returns the current text in the input."}],m=function(e){return p(c.a,Object(u.a)({title:"Select",propList:d},e))},v=function(e){return p(c.a,Object(u.a)({title:"Select[Option]",propList:f},e))},g=function(e){return p(c.a,Object(u.a)({title:"Select[Action]",propList:h},e))},y=a.a.createElement;n.default=function(){return y(a.a.Fragment,null,y(o.H0,null,"Selects"),y(o.Text,null,"Select are typeable inputs with selectable dropdown items."," ",y(o.Link,{href:"https://design.bigcommerce.com/components/selects",target:"_blank"},"Selects Design Guidelines"),"."),y(l.a,null,"function Example() {\n  const [value, setValue] = React.useState(undefined);\n  const handleChange = val => setValue(val);\n\n  return (\n    <Form>\n      <FormGroup>\n        <Select\n          action={{\n            actionType: 'destructive',\n            content: 'Remove Country',\n            icon: <DeleteIcon />,\n            onClick: () => null,\n          }}\n          filterable={true}\n          label=\"Countries\"\n          maxHeight={300}\n          onItemChange={handleChange}\n          options={[\n            { value: 'us', content: 'United States' },\n            { value: 'mx', content: 'Mexico' },\n            { value: 'ca', content: 'Canada' },\n            { value: 'en', content: 'England' },\n            { value: 'fr', content: 'France' },\n            { value: 'gr', content: 'Germany' },\n            { value: 'ar', content: 'Argentina' },\n            { value: 'ru', content: 'Russia', disabled: true },\n            { value: 'ch', content: 'Chile' },\n            { value: 'bo', content: 'Bolivia' },\n            { value: 'jp', content: 'Japan' },\n            { value: 'cn', content: 'China' },\n            { value: 'sk', content: 'South Korea' },\n            { value: 'au', content: 'Australia' },\n            { value: 'ug', content: 'Uganda' },\n          ]}\n          placeholder={'Choose country'}\n          placement={'bottom-start'}\n          required\n          value={value}\n        />\n      </FormGroup>\n    </Form>\n  );\n}"),y(o.H1,null,"API"),y(m,null),y(v,null),y(g,null),y(o.H1,null,"Multiselect"),y(o.Text,null,"Select has the ability to render a list of items as multiselectable. Select will return an ",y(i.a,null,"array")," of the select options."),y(l.a,null,"function Example() {\n  const [value, setValue] = React.useState([]);\n  const handleChange = val => setValue(val);\n\n  return (\n    <Form>\n      <FormGroup>\n        <Select\n          label=\"States\"\n          maxHeight={300}\n          multi={true}\n          onItemChange={handleChange}\n          options={[\n            { value: 'tx', content: 'Texas' },\n            { value: 'ca', content: 'California' },\n            { value: 'or', content: 'Oregon' },\n            { value: 'ar', content: 'Arkansas' },\n            { value: 'nv', content: 'Nevada', disabled: true },\n          ]}\n          placeholder={'Choose states'}\n          placement={'bottom-start'}\n          required\n          value={value}\n        />\n      </FormGroup>\n    </Form>\n  );\n}"),y(o.H1,null,"Position"),y(o.Text,null,"Select can be anchored in different directions with the ",y(i.a,{primary:!0},"position")," property. It will automatically find a position if there's not enough space in the chosen direction."),y(l.a,null,"<Grid gridColumns=\"repeat(4, 1fr)\">\n  <Select\n    label=\"Select\"\n    onItemChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Choose from above\"\n    placement=\"top\"\n    required\n  />\n  <Select\n    label=\"Select\"\n    onItemChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Choose from below\"\n    placement=\"bottom-start\"\n    required\n  />\n  <Select\n    label=\"Select\"\n    onItemChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Choose from the right\"\n    placement=\"right-start\"\n    required\n  />\n  <Select\n    label=\"Select\"\n    onItemChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Choose from the left\"\n    placement=\"left-end\"\n    required\n  />\n</Grid>"),y(o.H1,null,"Max Height"),y(o.Text,null,"Once the content is longer than the max-height, the Dropdown will be scrollable. It is possible to modify the dimension by passing a ",y(i.a,{primary:!0},"maxHeight")," property."),y(l.a,null,"<Grid gridColumns=\"repeat(3, 1fr)\">\n  <Select\n    label=\"Select\"\n    onItemChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Default\"\n    required\n  />\n  <Select\n    label=\"Select\"\n    maxHeight={150}\n    onItemChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Smaller\"\n    required\n  />\n  <Select\n    label=\"Select\"\n    maxHeight={350}\n    onItemChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Larger\"\n    required\n  />\n</Grid>"),y(o.H1,null,"Disabled"),y(o.Text,null,"It is possible to disable the entire select component, similar to how you would disable a native HTML select element, by using the ",y(i.a,{primary:!0},"disabled")," property."),y(l.a,null,"<Form>\n  <FormGroup>\n    <Select\n      disabled\n      label=\"Select\"\n      maxHeight={350}\n      onItemChange={() => null}\n      options={[\n        { value: 1, content: 'Option' },\n        { value: 2, content: 'Option' },\n        { value: 3, content: 'Option' },\n        { value: 4, content: 'Option' },\n      ]}\n      placeholder=\"Larger\"\n      required\n    />\n  </FormGroup>\n</Form>\n"),y(o.H1,null,"Action"),y(o.Text,null,"Accepts an ",y(i.a,null,"action")," object to display at the end of the list."),y(l.a,null,"<Form>\n  <FormGroup>\n    <Select\n      action={{\n        actionType: 'destructive',\n        content: 'Remove Country',\n        icon: <DeleteIcon />,\n        onClick: () => null,\n      }}\n      label=\"Countries\"\n      onItemChange={() => null}\n      options={[\n        { value: 'us', content: 'United States' },\n        { value: 'mx', content: 'Mexico' },\n        { value: 'ca', content: 'Canada' },\n        { value: 'en', content: 'England' },\n      ]}\n      placeholder={'Choose country'}\n      placement={'bottom-start'}\n      required\n    />\n  </FormGroup>\n</Form>"),y(o.H1,null,"Error"),y(o.Text,null,"An ",y(i.a,null,"error")," prop receives a ",y(i.a,null,"string")," to display."),y(l.a,null,"<Form>\n  <FormGroup>\n    <Select\n      label=\"Countries\"\n      error=\"Need to choose a country before proceeding\"\n      onItemChange={() => null}\n      options={[\n        { value: 'us', content: 'United States' },\n        { value: 'mx', content: 'Mexico' },\n        { value: 'ca', content: 'Canada' },\n        { value: 'en', content: 'England' },\n      ]}\n      placeholder={'Choose country'}\n      placement={'bottom-start'}\n      required\n    />\n  </FormGroup>\n</Form>"))}},jvFD:function(e,n,t){e.exports=t("KeDb")},lIm4:function(e,n,t){"use strict";var o=t("ERkP"),r=t.n(o),a=t("j/s1"),l=a.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,o=e.theme;return n&&!t&&Object(a.d)(["background-color:",";padding:",";"],o.colors.warning10,o.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(a.d)(["color:",";"],t.colors.primary70)}));t.d(n,"a",(function(){return u}));var i=r.a.createElement,u=function(e){return i(l,e)};u.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";var o=t("ysci"),r=t.n(o),a=t("d2TB"),l=t("ERkP"),i=t.n(l),u=t("lIm4"),s=t("XPf/"),c=t("BtTX"),p=t("j/s1"),d=Object(p.e)(a.Flex).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),f=i.a.createElement,h=function(e){var n=e.children,t=e.title,o=Object(l.useState)(!0),r=o[0],i=o[1],u=function(){return i(!r)};return f("div",null,f(d,{marginBottom:"xLarge",alignItems:"center",onClick:u,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||u()},tabIndex:0},r?f(s.a,{title:"Expand"}):f(c.a,{title:"Collapse"}),f(a.Text,null,t)),!r&&n)};t.d(n,"a",(function(){return v}));var m=i.a.createElement,v=function(e){var n=e.collapsible,t=e.id,o=e.propList,r=e.title,l=function(){return m(a.TableFigure,null,m(a.Table,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return m(i.a.Fragment,null,m(u.a,{primary:!0},n),t?m("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return m(g,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return m(u.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return m(a.Text,null,n)}}],items:o}),m(a.Small,{marginTop:"xSmall"},"Props ending with * are required"))};return n?m(h,{title:"".concat(r," Props")},l()):m(i.a.Fragment,null,m(a.H2,{id:t},r),l())},g=function(e){var n=e.types;return r()(n)?n.map((function(e,t){return m(i.a.Fragment,{key:e},e.type===a.Link?m(u.a,{highlight:!1},e):m(u.a,null,e),t<n.length-1?" | ":null)})):n.type===a.Link?m(u.a,{highlight:!1},n):m(u.a,null,n)}},"qiY+":function(e,n,t){var o=t("9v8s");e.exports=function(e,n){var t=[];return o(e,!1,t.push,t,n),t}},zCrM:function(e,n,t){"use strict";var o=t("UwCj").f,r=t("yew7"),a=t("qa3O"),l=t("dWRk"),i=t("s0lH"),u=t("9v8s"),s=t("S49y"),c=t("MIMp"),p=t("Jn7W"),d=t("ObEa"),f=t("aRFn").fastKey,h=t("S5Zg"),m=d?"_s":"size",v=function(e,n){var t,o=f(n);if("F"!==o)return e._i[o];for(t=e._f;t;t=t.n)if(t.k==n)return t};e.exports={getConstructor:function(e,n,t,s){var c=e((function(e,o){i(e,c,n,"_i"),e._t=n,e._i=r(null),e._f=void 0,e._l=void 0,e[m]=0,void 0!=o&&u(o,t,e[s],e)}));return a(c.prototype,{clear:function(){for(var e=h(this,n),t=e._i,o=e._f;o;o=o.n)o.r=!0,o.p&&(o.p=o.p.n=void 0),delete t[o.i];e._f=e._l=void 0,e[m]=0},delete:function(e){var t=h(this,n),o=v(t,e);if(o){var r=o.n,a=o.p;delete t._i[o.i],o.r=!0,a&&(a.n=r),r&&(r.p=a),t._f==o&&(t._f=r),t._l==o&&(t._l=a),t[m]--}return!!o},forEach:function(e){h(this,n);for(var t,o=l(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.n:this._f;)for(o(t.v,t.k,this);t&&t.r;)t=t.p},has:function(e){return!!v(h(this,n),e)}}),d&&o(c.prototype,"size",{get:function(){return h(this,n)[m]}}),c},def:function(e,n,t){var o,r,a=v(e,n);return a?a.v=t:(e._l=a={i:r=f(n,!0),k:n,v:t,p:o=e._l,n:void 0,r:!1},e._f||(e._f=a),o&&(o.n=a),e[m]++,"F"!==r&&(e._i[r]=a)),e},getEntry:v,setStrong:function(e,n,t){s(e,n,(function(e,t){this._t=h(e,n),this._k=t,this._l=void 0}),(function(){for(var e=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?c(0,"keys"==e?n.k:"values"==e?n.v:[n.k,n.v]):(this._t=void 0,c(1))}),t?"entries":"values",!t,!0),p(n)}}}},[["2pL5",1,2,4,6,9,8,0,49,50,51,52,53]]]);