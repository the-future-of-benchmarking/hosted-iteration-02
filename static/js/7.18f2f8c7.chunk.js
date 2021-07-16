(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{135:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a(2),s=a.n(r),i=a(7),l=a(5),c=a(6),o=a(34),m=a(25),u=a(24),d=a(55),p=a(0),b=a.n(p),h=a(129),f=a(113),g=a(115),E=a(112),v=a(111),N=a(132),F=a(133),B=a(58),w=a(140),O=(a(135),a(35)),j=a(56),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).gitInfo={branch:"main",tags:[],commit:{shortHash:"eeeb0cb",hash:"eeeb0cb3d7a9403885a1aa3da4e7dad3515b5107",date:"2021-07-16T20:17:34+02:00",message:"Merge changes from iteration 4"}},n.validate=function(e){var t={};return e.name||(t.name="Bitte Name eingeben"),e.description||(t.description="Bitte Beschreibung eingeben"),e.unit||(t.unit="Bitte Einheit eingeben"),e.lowerBound||(t.lowerBound="Bitte untere Grenze eingeben"),e.upperBound||(t.upperBound="Bitte obere Grenze eingeben"),e.name.length>32&&(t.name="Name ist zu lang, maximal 32 Zeichen"),e.description.length>32&&(t.description="Beschreibung ist zu lang, maximal 32 Zeichen"),e.unit.length>32&&(t.unit="Einheit ist zu lang, maximal 32 Zeichen"),t},n.isFormFieldValid=function(e){return!(!e.touched||!e.error)},n.showError=function(e){n.toast.current.show({severity:"error",summary:"Fehler",detail:e,life:5e3})},n.showInfo=function(e){n.toast.current.show({severity:"info",summary:"Info",detail:e,life:5e3})},n.showSuccess=function(e){n.toast.current.show({severity:"success",summary:"Erfolg",detail:e,life:5e3})},n.state={networkGuess:""},n.toast=b.a.createRef(),n.onSubmit=n.onSubmit.bind(Object(o.a)(n)),n.isFormFieldValid=n.isFormFieldValid.bind(Object(o.a)(n)),n.getFormErrorMessage=n.getFormErrorMessage.bind(Object(o.a)(n)),n.validate=n.validate.bind(Object(o.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.web3.eth.net.getNetworkType();case 2:t=e.sent,this.setState({networkGuess:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onSubmit",value:function(){var e=Object(i.a)(s.a.mark((function e(t,a){var r,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new j.b(this.props.web3),e.next=4,r.provision(t.name,t.lowerBound,t.upperBound,t.unit,t.description);case 4:return i=e.sent,e.next=7,i.getDetails();case 7:return l=e.sent,e.next=10,O.a.addItem(Object(n.a)({best:null,average:null,averageRated:null},l));case 10:this.setState({submitted:!0}),this.showSuccess("Angelegt"),a.restart(),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0),this.showError(e.t0.message);case 19:case"end":return e.stop()}}),e,this,[[0,15]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"getFormErrorMessage",value:function(e){return this.isFormFieldValid(e)&&b.a.createElement("small",{className:"p-error p-mb-2"},e.error)}},{key:"render",value:function(){var e=this;return b.a.createElement(b.a.Fragment,null,b.a.createElement(B.Toast,{ref:this.toast}),b.a.createElement("div",{className:"p-grid"},b.a.createElement("div",{className:"p-col-6 p-offset-3"},b.a.createElement(d.Card,{title:"Benchmark erstellen"},b.a.createElement("div",{className:"p-grid"},b.a.createElement("div",{className:"p-col-6"},b.a.createElement(h.Fieldset,{legend:"Account"},this.props.currentAccount)),b.a.createElement("div",{className:"p-col-3"},b.a.createElement(h.Fieldset,{legend:"Network Guess"},this.state.networkGuess)),b.a.createElement("div",{className:"p-col-3"},b.a.createElement(h.Fieldset,{legend:"Frontend Version"},this.gitInfo.commit.shortHash)),b.a.createElement("div",{className:"p-col-10 p-offset-1"},b.a.createElement("div",{className:"creation"},b.a.createElement(w.b,{onSubmit:this.onSubmit,initialValues:{name:"",description:"",unit:"",lowerBound:1,upperBound:2},validate:this.validate,render:function(t){var a=t.handleSubmit;return b.a.createElement("form",{onSubmit:a,className:"p-fluid"},b.a.createElement(w.a,{name:"name",render:function(t){var a=t.input,n=t.meta;return b.a.createElement("div",{className:"p-field p-mt-2"},b.a.createElement("span",{className:"p-float-label"},b.a.createElement(f.InputText,Object.assign({id:"name"},a,{autoFocus:!0,className:Object(N.classNames)({"p-invalid":e.isFormFieldValid(n)})})),b.a.createElement("label",{htmlFor:"name",className:Object(N.classNames)({"p-error":e.isFormFieldValid(n)})},"Name*")),e.getFormErrorMessage(n))}}),b.a.createElement(w.a,{name:"description",render:function(t){var a=t.input,n=t.meta;return b.a.createElement("div",{className:"p-field p-mt-2"},b.a.createElement("span",{className:"p-float-label"},b.a.createElement(F.InputTextarea,Object.assign({id:"desc"},a,{className:Object(N.classNames)({"p-invalid":e.isFormFieldValid(n)})})),b.a.createElement("label",{htmlFor:"desc",className:Object(N.classNames)({"p-error":e.isFormFieldValid(n)})},"Beschreibung*")),e.getFormErrorMessage(n))}}),b.a.createElement(w.a,{name:"unit",render:function(t){var a=t.input,n=t.meta;return b.a.createElement("div",{className:"p-field p-mt-2"},b.a.createElement("span",{className:"p-float-label"},b.a.createElement(f.InputText,Object.assign({id:"unit"},a,{className:Object(N.classNames)({"p-invalid":e.isFormFieldValid(n)})})),b.a.createElement("label",{htmlFor:"unit",className:Object(N.classNames)({"p-error":e.isFormFieldValid(n)})},"Einheit*")),e.getFormErrorMessage(n))}}),b.a.createElement(w.a,{name:"lowerBound",parse:function(e,t){return parseFloat(e.value)},render:function(t){var a=t.input,n=t.meta;return b.a.createElement("div",{className:"p-field p-mt-2"},b.a.createElement("span",{className:"p-float-label"},b.a.createElement(g.InputNumber,Object.assign({inputId:"lowerBound"},a,{showButtons:!0,buttonLayout:"horizontal",step:.001,className:Object(N.classNames)({"p-invalid":e.isFormFieldValid(n)}),decrementButtonClassName:"p-button-danger",incrementButtonClassName:"p-button-success",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus"})),b.a.createElement("label",{htmlFor:"lowerBound",className:Object(N.classNames)({"p-error":e.isFormFieldValid(n)})},"Untergrenze*")),e.getFormErrorMessage(n))}}),b.a.createElement(w.a,{name:"upperBound",parse:function(e,t){return parseFloat(e.value)},render:function(t){var a=t.input,n=t.meta;return b.a.createElement("div",{className:"p-field p-mt-2"},b.a.createElement("span",{className:"p-float-label"},b.a.createElement(g.InputNumber,Object.assign({inputId:"upperBound"},a,{showButtons:!0,buttonLayout:"horizontal",step:.001,className:Object(N.classNames)({"p-invalid":e.isFormFieldValid(n)}),decrementButtonClassName:"p-button-danger",incrementButtonClassName:"p-button-success",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus"})),b.a.createElement("label",{htmlFor:"upperBound",className:Object(N.classNames)({"p-error":e.isFormFieldValid(n)})},"Obergrenze*")),e.getFormErrorMessage(n))}}),b.a.createElement(v.Button,{type:"submit",label:"Submit",className:"p-mt-2"}))}}),this.state.contractAddress?b.a.createElement("div",{className:"p-field"},b.a.createElement("div",{className:"p-grid"},b.a.createElement("div",{className:"p-col-12"},b.a.createElement(h.Fieldset,{legend:"Contract Adresse"},b.a.createElement(E.Chip,{style:{backgroundColor:"#4caf50",color:"#ffffff"},template:this.state.contractAddress}))))):"")))))))}}]),a}(p.Component);t.default=y}}]);
//# sourceMappingURL=7.18f2f8c7.chunk.js.map