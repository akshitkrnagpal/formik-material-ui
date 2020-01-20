(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{129:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return d}));var i=t(1),o=t(9),a=(t(0),t(142)),r={id:"faq",title:"FAQ"},s={id:"guide/faq",title:"FAQ",description:"# Why can't I pass in `name`, `value`, `onChange` etc into my component?",source:"@site/docs/guide/faq.md",permalink:"/docs/guide/faq",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guide/faq.md",sidebar:"someSidebar",previous:{title:"Migrating",permalink:"/docs/guide/migrating"},next:{title:"Material-UI",permalink:"/docs/api/material-ui"}},l=[],c={rightToc:l};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"why-cant-i-pass-in-name-value-onchange-etc-into-my-component"},"Why can't I pass in ",Object(a.b)("inlineCode",{parentName:"h1"},"name"),", ",Object(a.b)("inlineCode",{parentName:"h1"},"value"),", ",Object(a.b)("inlineCode",{parentName:"h1"},"onChange")," etc into my component?"),Object(a.b)("p",null,"This is to prevent there being 2 sources of truth for value"),Object(a.b)("p",null,"For Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),'function App() {\n  const [email, setEmail] = useState(\'\');\n  const [error, setError] = useState(null\');\n\n  return (\n    <TextField\n      name="email"\n      type="email"\n      label="Email"\n      value={email}\n      error={error}\n      disabled={isSubmitting}\n    />\n  );\n}\n')),Object(a.b)("p",null,"From this code is not at all obvious who is in control of the state. Therefore we purposefully hand over all control (",Object(a.b)("inlineCode",{parentName:"p"},"name, value, onChange, onBlur"),") to formik. This ensures where is no confusion."),Object(a.b)("p",null,"But you can do this a custom field"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"import MuiTextField from '@material-ui/core/TextField';\nimport {useFieldToTextField, TextField, TextFieldProps} from 'formik-material-ui';\n\nconst UppercasingTextField = (props: TextFieldProps) => {\n  const fieldProps = useFieldToTextField(props);\n  const [,,helpers] = useField(props.name);\n  return (<MuiTextField\n    {...fieldProps}\n    onChange={event => {\n      const {value} = event.target;\n      helpers.setValue(value ? value.toUpperCase() : '')\n    }}\n  />\n);\n")),Object(a.b)("h1",{id:"why-does-this-library-not-work-with-field"},"Why does this library not work with ",Object(a.b)("inlineCode",{parentName:"h1"},"Field"),"?"),Object(a.b)("p",null,"After using formik with Material-UI in several projects I felt the ",Object(a.b)("inlineCode",{parentName:"p"},"Field")," wrapper was just extra noise.\nAlso in some cases it interfered with typescript autocompletion especially with the TextField union types."),Object(a.b)("h1",{id:"why-does-a-wrapper-for-component-x-not-exist"},"Why does a wrapper for component x not exist?"),Object(a.b)("p",null,"Some components require many decisions to be made which would make then only work for some situations.\nA good example is the slider. Should the onChange event be fired while dragging or only when the thumb is dropped? This will depend on your use-case."),Object(a.b)("h1",{id:"why-does-the-field-auto-disable-during-submission"},"Why does the field auto disable during submission?"),Object(a.b)("p",null,"This is a convenience meant for the standard form. If this was omitted the isSubmitting property would have to be manually passed into every single field"),Object(a.b)("p",null,"For Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx",metastring:"{8}","{8}":!0}),'<Formik>\n  {({ isSubmitting }) => (\n    <Form>\n      <TextField\n        name="email"\n        type="email"\n        label="Email"\n        disabled={isSubmitting}\n      />\n    </Form>\n  )}\n</Formik>\n')),Object(a.b)("p",null,"A common scenario where this is problematic is where using Formik for search. Here we never want the field to be disabled. This can be accomplished by setting disabled to always be false"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx",metastring:"{8}","{8}":!0}),'<Formik>\n  {({ isSubmitting }) => (\n    <Form>\n      <TextField name="email" type="email" label="Email" disabled={false} />\n    </Form>\n  )}\n</Formik>\n')))}d.isMDXComponent=!0}}]);