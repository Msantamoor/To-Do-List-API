(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{136:function(e,t,a){e.exports=a(264)},141:function(e,t,a){},164:function(e,t){},166:function(e,t){},197:function(e,t){},198:function(e,t){},26:function(e,t,a){},264:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(132),l=a.n(c),i=(a(141),a(70)),o=(a(72),a(26),a(34)),r=a.n(o),u=a(49),d=a(50),h=a(14),m=a(5),p=a(6),k=a(8),b=a(7),v=a(9),f=a(3),g=a.n(f),C=a(15),E=a(16),w=s.a.createContext({isAuthenticated:!1,userLogged:"none",activeList:"none",listNum:"",authenticate:function(){},signout:function(){},identify:function(){}});a(27).config();var T=a(81),O=a(122),L=a(29);var j=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(k.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(s)))).state={username:"",password:"",touched:{username:!1,password:!1},attempt:!0},a.change=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.handleBlur=function(e){return function(t){a.setState({touched:Object(d.a)({},a.state.touched,Object(h.a)({},e,!0))})}},a.onSubmit=function(){var e=Object(u.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),g.a.get("".concat(ae,"/users-check?username=").concat(a.state.username)).then((function(e){if(console.log(e),"Sign in Failed"===e.data)a.setState({username:"",password:"",touched:{username:!1,password:!1}}),a.setState({attempt:!1}),console.log("Matching Failed ".concat(a.state.password));else{var t=L.verify(e.data,"6483756387952");console.log(t);var n=t.data,s=O(a.state.username)+O(a.state.password);console.log(s);var c=T.hashSync(s,n);console.log(c),g.a.get("".concat(ae,"/users-login?username=").concat(a.state.username,"&password=").concat(c)).then((function(e){if(console.log(e),"Sign in Failed"===e.data)a.setState({username:"",password:"",touched:{username:!1,password:!1}}),a.setState({attempt:!1}),console.log("Matching Failed ".concat(a.state.password));else{var t=L.verify(e.data,"99035467347");console.log("Password matches"),a.context.authenticate(t.data),a.setState({attempt:!0}),a.setState({redirect:!0})}})).catch((function(e){console.log(e)}))}})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;if(this.state.redirect)return s.a.createElement(C.a,{push:!0,to:"Select"});var t,a,n=(t=this.state.username,a=this.state.password,{username:0===t.length,password:0===a.length}),c=!Object.keys(n).some((function(e){return n[e]})),l=function(t){var a=n[t],s=e.state.touched[t];return!!a&&s},i=function(t){return!!e.state.touched[t]};return s.a.createElement("div",null,s.a.createElement("form",null,s.a.createElement("h3",null,"Sign-In"),s.a.createElement("input",{name:"username",maxLength:20,className:l("username")?"error":"",filled:i("username")?"good":"",onBlur:this.handleBlur("username"),placeholder:"Username",value:this.state.username,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("p",{className:l("username")?"shown-messages":"hidden-messages"},"Enter Username"),s.a.createElement("br",null),s.a.createElement("input",{name:"password",maxLength:30,className:l("password")?"error":"",filled:i("password")?"good":"",onBlur:this.handleBlur("password"),placeholder:"Password",type:"password",value:this.state.password,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("p",{className:l("password")?"shown-messages":"hidden-messages"},"Enter Password"),s.a.createElement("br",null),s.a.createElement("p",{className:this.state.attempt?"hidden-messages":"shown-messages"},"Sign-In Failed"),s.a.createElement("br",null),s.a.createElement("button",{disabled:!c,onClick:function(t){return e.onSubmit(t)}},"Sign-In")),s.a.createElement("p",null,"New User?")," ",s.a.createElement(E.b,{to:"/CUForm"},"Create Account"))}}]),t}(s.a.Component);j.contextType=w;var S=a(4),y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(k.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(s)))).state={clickedTasks:[],clickedButtons:[],unavailableTasks:[]},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"checkClicked",value:function(e){return this.state.clickedTasks.includes(e)}},{key:"checkComplete",value:function(e){return this.props.completedTasks.includes(e)}},{key:"checkDeletable",value:function(e){return this.state.clickedButtons.includes(e)}},{key:"componentDidMount",value:function(){this.props.unavailableTasks.push(this.props.obj.name),this.setState({unavailableTasks:this.props.unavailableTasks}),"true"===this.props.obj.completed&&(this.props.completedTasks.push(this.props.obj.name),this.setState({completedTasks:this.props.completedTasks}))}},{key:"render",value:function(){var e=this,t=this.props.obj.name;return s.a.createElement("div",{shape:"rTableRow",onClick:function(){return e.props.isClicked(t)},onClickCapture:function(){return e.setState({clickedTasks:e.props.clickedTasks})},className:this.checkClicked(t)?"rowClicked":"rowNotClicked",completed:this.checkComplete(t)?"rowCompleted":"",deletable:this.checkDeletable(t)?"true":"false"},s.a.createElement("div",{shape:"rTableCell",className:this.checkClicked(t)?"rowClicked":"rowNotClicked",completed:this.checkComplete(t)?"rowCompleted":""},this.props.obj.name),s.a.createElement("div",{shape:"rTableCell",className:this.checkClicked(t)?"rowClicked":"rowNotClicked",completed:this.checkComplete(t)?"rowCompleted":""},this.props.obj.description),s.a.createElement("div",{shape:"rTableCell",className:this.checkClicked(t)?"rowClicked":"rowNotClicked",completed:this.checkComplete(t)?"rowCompleted":""},this.props.obj.due),s.a.createElement("div",{shape:"rTableCell"},s.a.createElement("button",{className:this.checkClicked(t)?"Clicked":"notClicked",onClick:function(){return e.props.isCompleted(t)},onClickCapture:function(){return e.setState({completedTasks:e.props.completedTasks})},completed:this.checkComplete(t)?"rowCompleted":"",shown:this.checkDeletable(t)?"hidden":""},"Done"),s.a.createElement("button",{className:"deletebutton",onClick:function(){return e.props.deleteOneTask(t)},shown:this.checkDeletable(t)?"":"hidden"},"Delete Task?")),s.a.createElement("div",{shape:"rTableCell"},s.a.createElement("button",{className:this.checkClicked(t)?"Clicked":"notClicked",onClick:function(){return e.props.editMenu(e.props.obj)},completed:this.checkComplete(t)?"rowCompleted":"",shown:this.checkDeletable(t)?"hidden":""},"Edit"),s.a.createElement("button",{className:this.checkClicked(t)?"Clicked":"",onClick:function(){return e.props.buttonClicked(t)},shown:this.checkDeletable(t)?"show":"hidden"},"Cancel")),s.a.createElement("div",{shape:"rTableCell"},s.a.createElement("button",{onClick:function(){return e.props.buttonClicked(t)},onClickCapture:function(){return e.setState({clickedButtons:e.props.clickedButtons})},completed:this.checkComplete(t)?"rowCompleted":"",className:this.checkClicked(t)?"Clicked":"notClicked",shown:this.checkDeletable(t)?"hidden":""},"Delete")))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(k.a)(this,Object(b.a)(t).call(this,e))).taskTable=function(){return a.props.taskCollection.map((function(e,t){return s.a.createElement(y,{obj:e,key:t,editMenu:a.props.editMenu,isClicked:a.props.isClicked,clickedTasks:a.props.clickedTasks,isCompleted:a.props.isCompleted,completedTasks:a.props.completedTasks,deleteOneTask:a.props.deleteOneTask,clickedButtons:a.props.clickedButtons,buttonClicked:a.props.buttonClicked,unavailableTasks:a.props.unavailableTasks})}))},a.state={clickedTasks:[],completedTasks:[],clickedButtons:[],unavailableTasks:[]},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.taskTable();return s.a.createElement("div",{className:"tableDisplay"},s.a.createElement("div",{shape:"rTable"},s.a.createElement("div",{shape:"rTableRow"},s.a.createElement("div",{shape:"rTableCell"},"Name"),s.a.createElement("div",{shape:"rTableCell"},"Description"),s.a.createElement("div",{shape:"rTableCell"},"Due")),e))}}]),t}(n.Component);a(27).config();var N=a(29),x=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(k.a)(this,Object(b.a)(t).call(this,e))).change=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=N.sign(a.context.state.userLogged,"623465894365"),n={name:a.state.name,description:a.state.description,due:a.state.due};g.a.post("".concat(ae,"/tasks?user=").concat(t,"&list=").concat(a.context.state.activeList),n).then((function(e){console.log(e.data),a.setState({name:"",description:"",due:""}),a.refreshTasks()})).catch((function(e){console.log(e)}))},a.componentDidMount=function(){a.refreshTasks()},a.state={name:"",description:"",due:"",selection:"",editId:"",taskCollection:[],clickedTasks:[],clickedTaskNames:[],completedTasks:[],clickedButtons:[],unavailableTasks:[],doneDelete:!1,selectedDelete:!1,tasksLoaded:!1},a.change=a.change.bind(Object(S.a)(a)),a.onSubmit=a.onSubmit.bind(Object(S.a)(a)),a.editMenu=a.editMenu.bind(Object(S.a)(a)),a.isClicked=a.isClicked.bind(Object(S.a)(a)),a.isCompleted=a.isCompleted.bind(Object(S.a)(a)),a.deleteOneTask=a.deleteOneTask.bind(Object(S.a)(a)),a.buttonClicked=a.buttonClicked.bind(Object(S.a)(a)),a.setDoneDelete=a.setDoneDelete.bind(Object(S.a)(a)),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"refreshTasks",value:function(){var e=this,t=N.sign(this.context.state.userLogged,"48946283535");g.a.get("".concat(ae,"/tasks?user=").concat(t,"&list=").concat(this.context.state.activeList,"&index=").concat(this.context.state.listNum)).then((function(t){console.log(e.context.state.listNum),console.log(t.data),e.setState({taskCollection:t.data}),e.setState({tasksLoaded:!0})})).catch((function(e){console.log(e)}))}},{key:"editMenu",value:function(e){this.setState({name:e.name,description:e.description,due:e.due,editId:e.name}),this.state.unavailableTasks.splice(this.state.unavailableTasks.indexOf(e.name),1),this.setState({redirect:!0})}},{key:"isClicked",value:function(e){var t=this.state.clickedTasks.includes(e);return!1===t?(this.state.clickedTasks.push(e),!0===t):!0===t?(this.state.clickedTasks.splice(this.state.clickedTasks.indexOf(e),1),!1===t):void 0}},{key:"buttonClicked",value:function(e){var t=this.state.clickedButtons.includes(e);return!1===t?(this.state.clickedButtons.push(e),!0===t):!0===t?(this.state.clickedButtons.splice(this.state.clickedButtons.indexOf(e),1),!1===t):void 0}},{key:"isCompleted",value:function(e){var t=this,a=N.sign(this.context.state.userLogged,"43965348953");if(this.state.completedTasks.includes(e)){g.a.patch("".concat(ae,"/tasks-complete?user=").concat(a,"&id=").concat(e,"&list=").concat(this.context.state.activeList,"&complete=").concat("false")).then((function(a){t.state.completedTasks.splice(t.state.completedTasks.indexOf(e),1),t.refreshTasks()})).catch((function(e){console.log(e)}))}else{g.a.patch("".concat(ae,"/tasks-complete?user=").concat(a,"&id=").concat(e,"&list=").concat(this.context.state.activeList,"&complete=").concat("true"),"true").then((function(a){t.state.completedTasks.push(e),t.refreshTasks()})).catch((function(e){console.log(e)}))}}},{key:"deleteOneTask",value:function(e){var t=this,a=N.sign(this.context.state.userLogged,"13596435645306");console.log(e),g.a.delete("".concat(ae,"/tasks?user=").concat(a,"&id=").concat(e,"&list=").concat(this.context.state.activeList)).then((function(e){t.state.unavailableTasks.splice(0,t.state.unavailableTasks.length),t.refreshTasks()})).catch((function(e){console.log(e)}))}},{key:"deleteDoneTasks",value:function(){var e=this,t=N.sign(this.context.state.userLogged,"15904698406340");g.a.delete("".concat(ae,"/tasks-complete?user=").concat(t,"&list=").concat(this.context.state.activeList)).then((function(t){console.log(t.data),e.state.unavailableTasks.splice(0,e.state.unavailableTasks.length),e.refreshTasks()})).catch((function(e){console.log(e)}))}},{key:"deleteSelectedTasks",value:function(){var e=this,t=N.sign(this.context.state.userLogged,"065430563956380"),a=this.state.clickedTasks;g.a.delete("".concat(ae,"/tasks-selected?user=").concat(t,"&list=").concat(this.context.state.activeList),{params:{names:a}}).then((function(t){e.state.unavailableTasks.splice(0,e.state.unavailableTasks.length),e.refreshTasks()})).catch((function(e){console.log(e)}))}},{key:"goBack",value:function(){this.setState({back:!0})}},{key:"setDoneDelete",value:function(){return!1===this.state.doneDelete?(this.setState({doneDelete:!0}),!0):!0===this.state.doneDelete?(this.setState({doneDelete:!1}),!1):void 0}},{key:"setSelectedDelete",value:function(){return!1===this.state.selectedDelete?(this.setState({selectedDelete:!0}),!0):!0===this.state.selectedDelete?(this.setState({selectedDelete:!1}),!1):void 0}},{key:"render",value:function(){var e=this;return this.state.redirect?s.a.createElement(C.a,{push:!0,to:{pathname:"/ETask",state:{id:this.state.editId,name:this.state.name,description:this.state.description,due:this.state.due,unavailableTasks:this.state.unavailableTasks}}}):this.state.back?s.a.createElement(C.a,{push:!0,to:"/Select"}):s.a.createElement("div",null,s.a.createElement("form",null,s.a.createElement("h3",null,"Create New Task"),s.a.createElement("input",{name:"name",maxLength:50,placeholder:"Task Name",value:this.state.name,onChange:function(t){return e.change(t)}}),s.a.createElement("p",{className:this.state.unavailableTasks.includes(this.state.name)?"shown-messages":"hidden-messages"},"No duplicate tasks in the same list"),s.a.createElement("br",null),s.a.createElement("input",{name:"description",maxLength:250,placeholder:"What to do",value:this.state.description,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("input",{name:"due",maxLength:50,placeholder:"When to have it done",value:this.state.due,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("button",{disabled:0===this.state.name.length||this.state.unavailableTasks.includes(this.state.name)||!1===this.state.tasksLoaded,onClick:function(t){return e.onSubmit(t)}},"Add Task")),s.a.createElement("h2",null,"".concat(this.context.state.activeList)),s.a.createElement("button",{type:"button",onClick:function(){return e.goBack()}},"Back"),s.a.createElement(D,{taskCollection:this.state.taskCollection,editMenu:this.editMenu,isClicked:this.isClicked,clickedTasks:this.state.clickedTasks,isCompleted:this.isCompleted,completedTasks:this.state.completedTasks,deleteOneTask:this.deleteOneTask,clickedButtons:this.state.clickedButtons,buttonClicked:this.buttonClicked,unavailableTasks:this.state.unavailableTasks}),s.a.createElement("br",null),s.a.createElement("button",{onClick:function(){return e.setDoneDelete()},shown:this.state.doneDelete?"hidden":""},"Delete Done Tasks"),s.a.createElement("button",{className:"Clicked",onClick:function(){return e.setDoneDelete()},shown:this.state.doneDelete?"show":"hidden"},"Cancel"),s.a.createElement("button",{onClick:function(){return e.setSelectedDelete()},shown:this.state.selectedDelete?"hidden":""},"Delete Selected Tasks"),s.a.createElement("button",{className:"Clicked",onClick:function(){return e.setSelectedDelete()},shown:this.state.selectedDelete?"show":"hidden"},"Cancel"),s.a.createElement("br",null),s.a.createElement("button",{className:"deletebutton",onClick:function(){return e.deleteDoneTasks()},onClickCapture:function(){return e.setDoneDelete()},shown:this.state.doneDelete?"":"hidden"},"Delete Completed Tasks?"),s.a.createElement("button",{className:"deletebutton",onClick:function(){return e.deleteSelectedTasks()},onClickCapture:function(){return e.setSelectedDelete()},shown:this.state.selectedDelete?"":"hidden"},"Delete Selected Tasks?"),s.a.createElement("br",null))}}]),t}(s.a.Component),B=Object(C.g)(x);x.contextType=w;var M=function(){return s.a.createElement("ul",null)},A=a(135);var U=function(e){var t=e.children,a=Object(A.a)(e,["children"]);return s.a.createElement(w.Consumer,null,(function(e){var n=e.isAuthenticated;return s.a.createElement(C.b,Object.assign({},a,{render:function(e){var a=e.location;return n?t:s.a.createElement(C.a,{to:{pathname:"/",state:{from:a}}})}}))}))};a(27).config();var F=a(29),I=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(k.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(s)))).state={listname:"",desc:"",due:"",unavailableLists:[]},a.change=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=F.sign(a.context.state.userLogged,"957863478568349"),n={listname:a.state.listname,description:a.state.desc,due:a.state.due,tasks:[]};g.a.post("".concat(ae,"/lists?user=").concat(t),n).then((function(e){console.log(e.data),a.setState({listname:"",desc:"",due:""}),a.setState({redirect:!0})})).catch((function(e){console.log(e)}))},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.setState({unavailableLists:this.props.history.location.state.unavailableLists})}},{key:"goBack",value:function(){this.setState({redirect:!0})}},{key:"render",value:function(){var e=this;return this.state.redirect?s.a.createElement(C.a,{push:!0,to:"/Select"}):s.a.createElement("div",null,s.a.createElement("form",null,s.a.createElement("h3",null,"Create New List"),s.a.createElement("input",{name:"listname",maxLength:50,placeholder:"List Name",value:this.state.listname,onChange:function(t){return e.change(t)}}),s.a.createElement("p",{className:this.state.unavailableLists.includes(this.state.listname)?"shown-messages":"hidden-messages"},"List names must be unique"),s.a.createElement("br",null),s.a.createElement("input",{name:"desc",maxLength:250,placeholder:"Type of List",value:this.state.desc,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("input",{name:"due",maxLength:50,placeholder:"Timeframe",value:this.state.due,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("button",{disabled:!!this.state.unavailableLists.includes(this.state.name),onClick:function(t){return e.onSubmit(t)}},"Add List"),s.a.createElement("br",null),s.a.createElement("button",{type:"button",disabled:0===this.state.listname.length||this.state.unavailableLists.includes(this.state.listname),onClick:function(){return e.goBack()}},"Back")))}}]),t}(s.a.Component),H=Object(C.g)(I);I.contextType=w,a(27).config();var W=a(29),P=a(81),R=a(122);var q=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(k.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(s)))).state={username:"",email:"",password:"",cpassword:"",touched:{username:!1,email:!1,password:!1,cpassword:!1},unavailableUsers:[],unavailableEmails:[]},a.change=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.handleBlur=function(e){return function(t){a.setState({touched:Object(d.a)({},a.state.touched,Object(h.a)({},e,!0))})}},a.onSubmit=function(){var e=Object(u.a)(r.a.mark((function e(t){var n,s,c,l,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=R(a.state.username),s=P.genSaltSync(10),c=n+R(a.state.password),console.log(c),l=P.hashSync(c,s),console.log(l),i={username:a.state.username,email:a.state.email,password:W.sign(l,"3757838645637"),salt:W.sign(s,"04375768686"),lists:[]},g.a.get("".concat(ae,"/users-names?username=").concat(a.state.username)).then((function(e){!0===e.data?g.a.get("".concat(ae,"/users-emails?email=").concat(a.state.email)).then((function(e){!0===e.data?(console.log("Email ".concat(a.state.email," Available")),g.a.post("".concat(ae,"/users"),i).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),a.setState({username:"",email:"",password:"",cpassword:"",touched:{username:!1,email:!1,password:!1,cpassword:!1}}),a.setState({redirect:!0})):!1===e.data&&(a.state.unavailableEmails.push(a.state.email),a.setState({email:a.state.email}),console.log("Email ".concat(a.state.email," is already in use")))})).catch((function(e){console.log(e)})):!1===e.data&&(a.state.unavailableUsers.push(a.state.username),a.setState({username:a.state.username}),console.log("Username ".concat(a.state.username," is unavailable")))})).catch((function(e){console.log(e)}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;if(this.state.redirect)return s.a.createElement(C.a,{push:!0,to:"/"});var t,a,n,c,l=(t=this.state.username,a=this.state.email,n=this.state.password,c=this.state.cpassword,{username:0===t.length,email:0===a.length,password:0===n.length,cpassword:c!==n||0===c.length}),i=!Object.keys(l).some((function(e){return l[e]})),o=function(t){var a=l[t],n=e.state.touched[t];return!!a&&n},r=function(t){return!!e.state.touched[t]};return s.a.createElement("div",null,s.a.createElement("form",null,s.a.createElement("h3",null,"New User Registration"),s.a.createElement("input",{name:"username",maxLength:30,className:o("username")?"error":"",filled:r("username")?"good":"",taken:this.state.unavailableUsers.includes(this.state.username)?"true":"",onBlur:this.handleBlur("username"),placeholder:"Username",value:this.state.username,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("p",{className:this.state.unavailableUsers.includes(this.state.username)?"shown-messages":"hidden-messages"}," Username unavailable"),s.a.createElement("p",{className:o("username")?"shown-messages":"hidden-messages"}," Enter Username"),s.a.createElement("br",null),s.a.createElement("input",{name:"email",maxLength:30,className:o("email")?"error":"",filled:r("email")?"good":"",taken:this.state.unavailableEmails.includes(this.state.email)?"true":"",onBlur:this.handleBlur("email"),placeholder:"Email Address",value:this.state.email,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("p",{className:this.state.unavailableEmails.includes(this.state.email)?"shown-messages":"hidden-messages"}," Email already in use, try Signing In"),s.a.createElement("p",{className:o("email")?"shown-messages":"hidden-messages"}," Enter a valid Email address"),s.a.createElement("br",null),s.a.createElement("input",{name:"password",maxLength:30,className:o("password")?"error":"",filled:r("password")?"good":"",onBlur:this.handleBlur("password"),placeholder:"Password",type:"password",value:this.state.password,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("p",{className:o("password")?"shown-messages":"hidden-messages"},"Enter a good password"),s.a.createElement("br",null),s.a.createElement("input",{name:"cpassword",maxLength:30,className:o("cpassword")?"error":"",filled:r("cpassword")?"good":"",onBlur:this.handleBlur("cpassword"),placeholder:"Confirm Password",type:"password",value:this.state.cpassword,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("p",{className:o("cpassword")?"shown-messages":"hidden-messages"},"Passwords must match"),s.a.createElement("br",null),s.a.createElement("p",{className:i?"shown-messages":"hidden-messages"},"Ready to submit"),s.a.createElement("br",null),s.a.createElement("button",{disabled:!i,onClick:function(t){return e.onSubmit(t)}},"Create Account")),s.a.createElement("p",null,"Already have an account?"),s.a.createElement(E.b,{to:"/"},"Sign-in"))}}]),t}(s.a.Component),J=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(k.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(s)))).state={clickedLists:[],clickedButtons:[],unavailableLists:[]},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"checkClicked",value:function(e){return this.state.clickedLists.includes(e)}},{key:"checkDeletable",value:function(e){return this.state.clickedButtons.includes(e)}},{key:"componentDidMount",value:function(){this.props.unavailableLists.push(this.props.obj.listname),this.setState({unavailableLists:this.props.unavailableLists})}},{key:"render",value:function(){var e=this,t=this.props.index,a=this.props.obj.listname;return s.a.createElement("div",{shape:"rTableRow",onClick:function(){return e.props.isClicked(a)},onClickCapture:function(){return e.setState({clickedLists:e.props.clickedLists})},className:this.checkClicked(a)?"rowClicked":"rowNotClicked",deletable:this.checkDeletable(a)?"true":"false"},s.a.createElement("div",{shape:"rTableCell",className:this.checkClicked(a)?"rowClicked":"rowNotClicked"},this.props.obj.listname),s.a.createElement("div",{shape:"rTableCell",className:this.checkClicked(a)?"rowClicked":"rowNotClicked"},this.props.obj.description),s.a.createElement("div",{shape:"rTableCell",className:this.checkClicked(a)?"rowClicked":"rowNotClicked"},this.props.obj.due),s.a.createElement("div",null,s.a.createElement("div",{shape:"rTableCell"},s.a.createElement("button",{className:this.checkClicked(a)?"Clicked":"notClicked",onClick:function(){return e.props.clickHandler(a,t)},shown:this.checkDeletable(a)?"hidden":""},"Select"),s.a.createElement("button",{className:"deletebutton",onClick:function(){return e.props.deleteOneList(a)},shown:this.checkDeletable(a)?"":"hidden"},"Delete List?")),s.a.createElement("div",{shape:"rTableCell"},s.a.createElement("button",{className:this.checkClicked(a)?"Clicked":"notClicked",onClick:function(){return e.props.editMenu(e.props.obj,t)},shown:this.checkDeletable(a)?"hidden":""},"Edit"),s.a.createElement("button",{className:this.checkClicked(a)?"Clicked":"",onClick:function(){return e.props.buttonClicked(a)},shown:this.checkDeletable(a)?"show":"hidden"},"Cancel"))),s.a.createElement("div",{shape:"rTableCell"},s.a.createElement("button",{onClick:function(){return e.props.buttonClicked(a)},onClickCapture:function(){return e.setState({clickedButtons:e.props.clickedButtons})},className:this.checkClicked(a)?"Clicked":"notClicked",shown:this.checkDeletable(a)?"hidden":""},"Delete")))}}]),t}(n.Component),$=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(k.a)(this,Object(b.a)(t).call(this,e))).listTable=function(){return a.props.listCollection.map((function(e,t){return s.a.createElement(J,{obj:e,key:t,index:t,clickHandler:a.props.clickHandler,editMenu:a.props.editMenu,isClicked:a.props.isClicked,clickedLists:a.props.clickedLists,deleteOneList:a.props.deleteOneList,clickedButtons:a.props.clickedButtons,buttonClicked:a.props.buttonClicked,unavailableLists:a.props.unavailableLists})}))},a.state={clickedLists:[],clickedButtons:[]},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.listTable();return s.a.createElement("div",{className:"tableDisplay"},s.a.createElement("div",{shape:"rTable"},s.a.createElement("div",{shape:"rTableRow"},s.a.createElement("div",{shape:"rTableCell"},"Name"),s.a.createElement("div",{shape:"rTableCell"},"Description"),s.a.createElement("div",{shape:"rTableCell"},"Due")),e))}}]),t}(n.Component);a(27).config();var z=a(29),G=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(k.a)(this,Object(b.a)(t).call(this,e))).refreshLists=function(){var e=z.sign(a.context.state.userLogged,"73465963535");g.a.get("".concat(ae,"/lists?user=").concat(e)).then((function(e){console.log(e.data),a.setState({listCollection:e.data,listsLoaded:!0})})).catch((function(e){console.log(e)}))},a.state={selection:"",listNumber:"",listCollection:[],clickedLists:[],clickedButtons:[],unavailableLists:[],editId:"",listsLoaded:!1},a.clickHandler=a.clickHandler.bind(Object(S.a)(a)),a.isClicked=a.isClicked.bind(Object(S.a)(a)),a.deleteOneList=a.deleteOneList.bind(Object(S.a)(a)),a.buttonClicked=a.buttonClicked.bind(Object(S.a)(a)),a.editMenu=a.editMenu.bind(Object(S.a)(a)),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.refreshLists()}},{key:"isClicked",value:function(e){var t=this.state.clickedLists.includes(e);return!1===t?(this.state.clickedLists.push(e),!0===t):!0===t?(this.state.clickedLists.splice(this.state.clickedLists.indexOf(e),1),!1===t):void 0}},{key:"buttonClicked",value:function(e){var t=this.state.clickedButtons.includes(e);return!1===t?(this.state.clickedButtons.push(e),!0===t):!0===t?(this.state.clickedButtons.splice(this.state.clickedButtons.indexOf(e),1),!1===t):void 0}},{key:"clickHandler",value:function(e,t){console.log(e),this.setState({selection:e}),this.setState({listNumber:t}),this.setState({redirect:!0})}},{key:"addlist",value:function(){this.setState({redirect2:!0})}},{key:"deleteOneList",value:function(e){var t=this;console.log(e);var a=z.sign(this.context.state.userLogged,"12953468646");g.a.delete("".concat(ae,"/lists?user=").concat(a,"&list=").concat(e)).then((function(a){t.state.unavailableLists.splice(t.state.unavailableLists.indexOf(e),1),t.refreshLists()})).catch((function(e){console.log(e)}))}},{key:"editMenu",value:function(e,t){this.setState({listname:e.listname,description:e.description,due:e.due,editId:t}),this.state.unavailableLists.splice(this.state.unavailableLists.indexOf(e.listname),1),this.setState({redirect3:!0})}},{key:"render",value:function(){var e=this;return this.state.redirect?(console.log(this.state.selection),s.a.createElement(w.Consumer,null,(function(t){var a=t.identify;return s.a.createElement(C.a,{push:a(e.context.state.userLogged,e.state.selection,e.state.listNumber),to:"/CTForm"})}))):this.state.redirect2?s.a.createElement(C.a,{push:!0,to:{pathname:"/CLForm",state:{unavailableLists:this.state.unavailableLists}}}):this.state.redirect3?s.a.createElement(C.a,{push:!0,to:{pathname:"/EList",state:{id:this.state.listname,listname:this.state.listname,description:this.state.description,due:this.state.due,unavailableLists:this.state.unavailableLists}}}):s.a.createElement("div",null,s.a.createElement("button",{disabled:!this.state.listsLoaded,onClick:function(){return e.addlist()}},"Create New List"),s.a.createElement($,{listCollection:this.state.listCollection,clickHandler:this.clickHandler,editMenu:this.editMenu,isClicked:this.isClicked,clickedLists:this.state.clickedLists,deleteOneList:this.deleteOneList,clickedButtons:this.state.clickedButtons,buttonClicked:this.buttonClicked,unavailableLists:this.state.unavailableLists}))}}]),t}(n.Component);G.contextType=w,a(27).config();var K=a(29),Q=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(k.a)(this,Object(b.a)(t).call(this,e))).change=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=K.sign(a.context.state.userLogged,"34893684769"),n=a.props.history.location.state.id,s=a.context.state.activeList,c={name:a.state.name,description:a.state.description,due:a.state.due};g.a.patch("".concat(ae,"/tasks?user=").concat(t,"&id=").concat(n,"&list=").concat(s),c).then((function(e){a.setState({name:"",desc:"",due:""}),a.setState({redirect:!0})})).catch((function(e){console.log(e)}))},a.state={name:"",description:"",due:"",selection:"",taskCollection:[],unavailableTasks:[]},a.change=a.change.bind(Object(S.a)(a)),a.onSubmit=a.onSubmit.bind(Object(S.a)(a)),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.setState({name:this.props.history.location.state.name,description:this.props.history.location.state.description,due:this.props.history.location.state.due,unavailableTasks:this.props.history.location.state.unavailableTasks})}},{key:"goBack",value:function(){this.setState({redirect:!0})}},{key:"render",value:function(){var e=this;return this.state.redirect?s.a.createElement(C.a,{push:!0,to:"/CTForm"}):s.a.createElement("div",null,s.a.createElement("form",null,s.a.createElement("h3",null,"Edit Task"),s.a.createElement("input",{name:"name",maxLength:50,placeholder:"Task Name",value:this.state.name,onChange:function(t){return e.change(t)}}),s.a.createElement("p",{className:this.state.unavailableTasks.includes(this.state.name)?"shown-messages":"hidden-messages"}," Task names must be unique"),s.a.createElement("br",null),s.a.createElement("input",{name:"description",maxLength:250,placeholder:"What to do",value:this.state.description,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("input",{name:"due",maxLength:50,placeholder:"When to have it done",value:this.state.due,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("button",{disabled:0===this.state.name.length||this.state.unavailableTasks.includes(this.state.name),onClick:function(t){return e.onSubmit(t)}},"Update Task"),s.a.createElement("br",null),s.a.createElement("button",{type:"button",disabled:!!this.state.unavailableTasks.includes(this.state.name),onClick:function(){return e.goBack()}},"Back")))}}]),t}(s.a.Component),V=Object(C.g)(Q);Q.contextType=w,a(27).config();var X=a(29),Y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(k.a)(this,Object(b.a)(t).call(this,e))).change=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=a.props.history.location.state.listname,n=X.sign(a.context.state.userLogged,"735936573945"),s={listname:a.state.listname,description:a.state.description,due:a.state.due};g.a.patch("".concat(ae,"/lists?user=").concat(n,"&id=").concat(t),s).then((function(e){a.setState({listname:"",desc:"",due:""}),a.setState({redirect:!0})})).catch((function(e){console.log(e)}))},a.state={listname:"",description:"",due:"",selection:"",unavailableLists:[],taskCollection:[]},a.change=a.change.bind(Object(S.a)(a)),a.onSubmit=a.onSubmit.bind(Object(S.a)(a)),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.setState({listname:this.props.history.location.state.listname,description:this.props.history.location.state.description,due:this.props.history.location.state.due,unavailableLists:this.props.history.location.state.unavailableLists})}},{key:"goBack",value:function(){this.setState({redirect:!0})}},{key:"render",value:function(){var e=this;return this.state.redirect?s.a.createElement(C.a,{push:!0,to:"/Select"}):s.a.createElement("div",null,s.a.createElement("form",null,s.a.createElement("h3",null,"Edit List"),s.a.createElement("input",{name:"listname",maxLength:50,placeholder:"List Name",value:this.state.listname,onChange:function(t){return e.change(t)}}),s.a.createElement("p",{className:this.state.unavailableLists.includes(this.state.listname)?"shown-messages":"hidden-messages"}," List names must be unique"),s.a.createElement("br",null),s.a.createElement("input",{name:"description",maxLength:250,placeholder:"What to do",value:this.state.description,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("input",{name:"due",maxLength:50,placeholder:"When to have it done",value:this.state.due,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("button",{disabled:0===this.state.listname.length||this.state.unavailableLists.includes(this.state.listname),onClick:function(t){return e.onSubmit(t)}},"Update List"),s.a.createElement("br",null),s.a.createElement("button",{type:"button",onClick:function(){return e.goBack()}},"Back")))}}]),t}(s.a.Component),Z=Object(C.g)(Y);Y.contextType=w;var _=function(){return s.a.createElement("div",null,s.a.createElement(C.d,null,s.a.createElement(C.b,{exact:!0,path:"/"},s.a.createElement(j,null)),s.a.createElement(U,{path:"/CTForm"},s.a.createElement(B,null)),s.a.createElement(U,{path:"/CLForm"},s.a.createElement(H,null)),s.a.createElement(C.b,{path:"/CUForm"},s.a.createElement(q,null)),s.a.createElement(U,{path:"/Select"},s.a.createElement(G,null)),s.a.createElement(U,{path:"/ETask"},s.a.createElement(V,null)),s.a.createElement(U,{path:"/EList"},s.a.createElement(Z,null))))},ee=function(){return s.a.createElement("div",null,s.a.createElement(_,null))};var te=function(){var e=Object(n.useContext)(w);return e.isAuthenticated?s.a.createElement("button",{onClick:function(){e.signout()}},"Sign out"):s.a.createElement("p",null,"Sign in to view lists")},ae="http://localhost:3306";var ne=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({userLogged:"",activeList:"",listNum:""}),o=Object(i.a)(l,2),r=o[0],u=o[1],d={isAuthenticated:a,state:r,authenticate:function(e){c(!0),u({userLogged:e})},signout:function(){c(!1)},identify:function(e,t,a){console.log(e),console.log(t),console.log(a),u({userLogged:e,activeList:t,listNum:a})}};return s.a.createElement("div",{className:"App"},s.a.createElement(w.Provider,{value:d},s.a.createElement(E.a,null,s.a.createElement(te,null),s.a.createElement(M,null),s.a.createElement(ee,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},72:function(e,t,a){}},[[136,1,2]]]);
//# sourceMappingURL=main.0231f179.chunk.js.map