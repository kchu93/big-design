(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{pg6R:function(n,t,e){"use strict";e.r(t);var o=e("d2TB"),a=e("ERkP"),i=e.n(a),s=e("GsAr"),l=e("lIm4"),r=e("pneb"),u=e("R5dR"),c=e("nFRM"),d=i.a.createElement,p=[{name:"actionType",types:["normal","destructive"],defaultValue:"normal",description:"Indicates whether your button's action is of normal or destructive nature."},{name:"iconLeft",types:d(u.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon"),description:d(i.a.Fragment,null,"Pass in an"," ",d(u.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon")," ","component to display to the left of the text.")},{name:"iconOnly",types:d(u.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon"),description:d(i.a.Fragment,null,"Pass in an"," ",d(u.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon")," ","component to replace content with an icon.")},{name:"iconRight",types:d(u.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon"),description:d(i.a.Fragment,null,"Pass in an"," ",d(u.a,{href:"/Icons/IconsPage",as:"/icons"},"Icon")," ","component to display to the right of the text.")},{name:"isLoading",types:"boolean",defaultValue:"false",description:"Used to determine if component is in a loading state."},{name:"variant",types:["primary","secondary","subtle"],defaultValue:"primary",description:"Determines which style of button to display."}],m=function(n){return d(c.a,Object(r.a)({title:"Button",propList:p},n))},h=e("akZe"),g=i.a.createElement;t.default=function(){return g(i.a.Fragment,null,g(o.H0,null,"Buttons"),g(o.Text,null,"Buttons are calls to action used throughout the product experience."," ",g(o.Link,{href:"https://design.bigcommerce.com/components/buttons",target:"_blank"},"Buttons Design Guidelines"),"."),g(s.a,null,'<Button actionType="normal" isLoading={false} variant="primary">\n  Label\n</Button>'),g(o.H1,null,"API"),g(m,null),g(o.H2,null,"Inherited Props"),g(h.a,{collapsible:!0}),g(o.H1,null,"Variants"),g(o.Text,null,"There are three types of variants to choose from: ",g(l.a,null,"primary"),", ",g(l.a,null,"secondary"),", and"," ",g(l.a,null,"subtle"),". You can determine what type of variant by using the ",g(l.a,{primary:!0},"variant")," prop."),g(s.a,null,'<>\n  <Button variant="primary">Primary</Button>\n  <Button variant="secondary">Secondary</Button>\n  <Button variant="subtle">Subtle</Button>\n</>'),g(o.H1,null,"Action Types"),g(o.Text,null,"There are two action types: ",g(l.a,null,"normal")," & ",g(l.a,null,"destructive"),". They are used to indicate the nature of the action when clicking on the button."),g(s.a,null,'<>\n  <Button actionType="normal">Normal</Button>\n  <Button actionType="destructive">Destructive</Button>\n</>'),g(o.H1,null,"States"),g(o.H2,null,"Loading"),g(o.Text,null,"The loading state is used when clicking a button will perform a asyncronous action."),g(s.a,null,'function LoadingButton() {\n  const [isLoading, setLoading] = React.useState(false);\n\n  function simulateNetworkRequest() {\n    return new Promise(resolve => setTimeout(resolve, 2000));\n  }\n\n  React.useEffect(() => {\n    if (isLoading) {\n      simulateNetworkRequest().then(() => {\n        setLoading(false);\n      });\n    }\n  }, [isLoading]);\n\n  const handleClick = () => setLoading(true);\n\n  return (\n    <Button variant="primary" isLoading={isLoading} onClick={!isLoading ? handleClick : () => null}>\n      Click to load\n    </Button>\n  );\n}'),g(o.H2,null,"Disabled"),g(o.Text,null,"A disabled state is used to indicate no action can be done using the button by passing a"," ",g(l.a,{primary:!0},"disabled")," prop."),g(s.a,null,'<>\n  <Button disabled>Disabled</Button>\n  <Button disabled variant="secondary">\n    Disabled\n  </Button>\n  <Button disabled variant="subtle">\n    Disabled\n  </Button>\n</>'),g(o.H1,null,"Icons"),g(o.Text,null,"A button can also include icons on either side of the text (or both). When using ",g(l.a,{primary:!0},"iconOnly"),", the ",g(l.a,{primary:!0},"iconLeft")," & ",g(l.a,{primary:!0},"iconRight")," components will be removed."),g(s.a,null,'<>\n  <Button iconOnly={<AddIcon title="add" />} />\n  <Button iconLeft={<AddIcon />}>Label</Button>\n  <Button iconLeft={<AddIcon />} iconRight={<ArrowDropDownIcon />}>\n    Label\n  </Button>\n  <Button iconRight={<ArrowDropDownIcon />}>Label</Button>\n</>'))}},wXfe:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Button/ButtonPage",function(){return e("pg6R")}])}},[["wXfe",1,2,4,6,9,8,0,49,50,51,52,53,54]]]);