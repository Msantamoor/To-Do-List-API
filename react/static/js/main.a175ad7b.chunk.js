(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{16:function(e,t,a){},25:function(e,t,a){},39:function(e,t,a){e.exports=a(67)},44:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(35),l=a.n(c),i=(a(44),a(23)),o=(a(25),a(16),a(19)),r=a(9),u=a(3),d=a(4),h=a(6),m=a(5),p=a(7),k=a(1),b=a.n(k),v=a(10),f=a(11),C=s.a.createContext({isAuthenticated:!1,userLogged:"none",activeList:"none",authenticate:function(){},signout:function(){},identify:function(){}});var g=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={username:"",password:"",touched:{username:!1,password:!1},attempt:!0},a.change=function(e){a.setState(Object(r.a)({},e.target.name,e.target.value))},a.handleBlur=function(e){return function(t){a.setState({touched:Object(o.a)({},a.state.touched,Object(r.a)({},e,!0))})}},a.onSubmit=function(e){e.preventDefault(),b.a.get("".concat(_,"/users-login?username=").concat(a.state.username,"&password=").concat(a.state.password)).then((function(e){console.log(e),!0===e.data?(console.log("Password matches"),a.context.authenticate(),a.setState({attempt:!0}),a.setState({redirect:!0})):(a.setState({username:"",password:"",touched:{username:!1,password:!1}}),a.setState({attempt:!1}),console.log("Matching Failed ".concat(a.state.password)))})).catch((function(e){console.log(e)}))},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;if(this.state.redirect)return console.log("login successful"),s.a.createElement(C.Consumer,null,(function(t){var a=t.identify;return s.a.createElement(v.a,{push:a(e.state.username,e.context.state.activeList),to:"/Select"})}));var t,a,n=(t=this.state.username,a=this.state.password,{username:0===t.length,password:0===a.length}),c=!Object.keys(n).some((function(e){return n[e]})),l=function(t){var a=n[t],s=e.state.touched[t];return!!a&&s},i=function(t){return!!e.state.touched[t]};return s.a.createElement("div",null,s.a.createElement("form",null,s.a.createElement("h3",null,"Sign-In"),s.a.createElement("input",{name:"username",maxLength:20,className:l("username")?"error":"",filled:i("username")?"good":"",onBlur:this.handleBlur("username"),placeholder:"Username",value:this.state.username,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("p",{className:l("username")?"shown-messages":"hidden-messages"},"Enter Username"),s.a.createElement("br",null),s.a.createElement("input",{name:"password",maxLength:30,className:l("password")?"error":"",filled:i("password")?"good":"",onBlur:this.handleBlur("password"),placeholder:"Password",type:"password",value:this.state.password,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("p",{className:l("password")?"shown-messages":"hidden-messages"},"Enter Password"),s.a.createElement("br",null),s.a.createElement("p",{className:this.state.attempt?"hidden-messages":"shown-messages"},"Sign-In Failed"),s.a.createElement("br",null),s.a.createElement("button",{disabled:!c,onClick:function(t){return e.onSubmit(t)}},"Sign-In")),s.a.createElement("p",null,"New User?")," ",s.a.createElement(f.b,{to:"/CUForm"},"Create Account"))}}]),t}(s.a.Component);g.contextType=C;var E=a(2),T=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={clickedTasks:[],clickedButtons:[],unavailableTasks:[]},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"checkClicked",value:function(e){return this.state.clickedTasks.includes(e)}},{key:"checkComplete",value:function(e){return this.props.completedTasks.includes(e)}},{key:"checkDeletable",value:function(e){return this.state.clickedButtons.includes(e)}},{key:"componentDidMount",value:function(){this.props.unavailableTasks.push(this.props.obj.name),this.setState({unavailableTasks:this.props.unavailableTasks}),"true"===this.props.obj.completed&&(this.props.completedTasks.push(this.props.obj._id),this.setState({completedTasks:this.props.completedTasks}))}},{key:"render",value:function(){var e=this,t=this.props.obj._id,a=this.props.obj.name;return s.a.createElement("div",{shape:"rTableRow",onClick:function(){return e.props.isClicked(t,a)},onClickCapture:function(){return e.setState({clickedTasks:e.props.clickedTasks})},className:this.checkClicked(t)?"rowClicked":"rowNotClicked",completed:this.checkComplete(t)?"rowCompleted":"",deletable:this.checkDeletable(t)?"true":"false"},s.a.createElement("div",{shape:"rTableCell",className:this.checkClicked(t)?"rowClicked":"rowNotClicked",completed:this.checkComplete(t)?"rowCompleted":""},this.props.obj.name),s.a.createElement("div",{shape:"rTableCell",className:this.checkClicked(t)?"rowClicked":"rowNotClicked",completed:this.checkComplete(t)?"rowCompleted":""},this.props.obj.description),s.a.createElement("div",{shape:"rTableCell",className:this.checkClicked(t)?"rowClicked":"rowNotClicked",completed:this.checkComplete(t)?"rowCompleted":""},this.props.obj.due),s.a.createElement("div",{shape:"rTableCell"},s.a.createElement("button",{className:this.checkClicked(t)?"Clicked":"notClicked",onClick:function(){return e.props.isCompleted(t)},onClickCapture:function(){return e.setState({completedTasks:e.props.completedTasks})},completed:this.checkComplete(t)?"rowCompleted":"",shown:this.checkDeletable(t)?"hidden":""},"Done"),s.a.createElement("button",{className:"deletebutton",onClick:function(){return e.props.deleteOneTask(t)},shown:this.checkDeletable(t)?"":"hidden"},"Delete Task?")),s.a.createElement("div",{shape:"rTableCell"},s.a.createElement("button",{className:this.checkClicked(t)?"Clicked":"notClicked",onClick:function(){return e.props.editMenu(e.props.obj)},completed:this.checkComplete(t)?"rowCompleted":"",shown:this.checkDeletable(t)?"hidden":""},"Edit"),s.a.createElement("button",{className:this.checkClicked(t)?"Clicked":"",onClick:function(){return e.props.buttonClicked(t)},shown:this.checkDeletable(t)?"show":"hidden"},"Cancel")),s.a.createElement("div",{shape:"rTableCell"},s.a.createElement("button",{onClick:function(){return e.props.buttonClicked(t)},onClickCapture:function(){return e.setState({clickedButtons:e.props.clickedButtons})},completed:this.checkComplete(t)?"rowCompleted":"",className:this.checkClicked(t)?"Clicked":"notClicked",shown:this.checkDeletable(t)?"hidden":""},"Delete")))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).taskTable=function(){return a.props.taskCollection.map((function(e,t){return s.a.createElement(T,{obj:e,key:t,editMenu:a.props.editMenu,isClicked:a.props.isClicked,clickedTasks:a.props.clickedTasks,isCompleted:a.props.isCompleted,completedTasks:a.props.completedTasks,deleteOneTask:a.props.deleteOneTask,clickedButtons:a.props.clickedButtons,buttonClicked:a.props.buttonClicked,unavailableTasks:a.props.unavailableTasks})}))},a.state={clickedTasks:[],completedTasks:[],clickedButtons:[],unavailableTasks:[]},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.taskTable();return s.a.createElement("div",{className:"tableDisplay"},s.a.createElement("div",{shape:"rTable"},s.a.createElement("div",{shape:"rTableRow"},s.a.createElement("div",{shape:"rTableCell"},"Name"),s.a.createElement("div",{shape:"rTableCell"},"Description"),s.a.createElement("div",{shape:"rTableCell"},"Due")),e))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).change=function(e){a.setState(Object(r.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={user:a.context.state.userLogged,name:a.state.name,description:a.state.description,due:a.state.due,list:a.context.state.activeList};b.a.post("".concat(_,"/tasks"),t).then((function(e){console.log(e.data),a.setState({name:"",description:"",due:""}),a.refreshTasks()})).catch((function(e){console.log(e)}))},a.componentDidMount=function(){a.refreshTasks()},a.state={name:"",description:"",due:"",selection:"",editId:"",taskCollection:[],clickedTasks:[],clickedTaskNames:[],completedTasks:[],clickedButtons:[],unavailableTasks:[],doneDelete:!1,selectedDelete:!1,tasksLoaded:!1},a.change=a.change.bind(Object(E.a)(a)),a.onSubmit=a.onSubmit.bind(Object(E.a)(a)),a.editMenu=a.editMenu.bind(Object(E.a)(a)),a.isClicked=a.isClicked.bind(Object(E.a)(a)),a.isCompleted=a.isCompleted.bind(Object(E.a)(a)),a.deleteOneTask=a.deleteOneTask.bind(Object(E.a)(a)),a.buttonClicked=a.buttonClicked.bind(Object(E.a)(a)),a.setDoneDelete=a.setDoneDelete.bind(Object(E.a)(a)),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"refreshTasks",value:function(){var e=this;b.a.get("".concat(_,"/tasks?user=").concat(this.context.state.userLogged,"&list=").concat(this.context.state.activeList)).then((function(t){console.log(t.data),e.setState({taskCollection:t.data.data}),e.setState({tasksLoaded:!0})})).catch((function(e){console.log(e)}))}},{key:"editMenu",value:function(e){this.setState({name:e.name,description:e.description,due:e.due,editId:e._id}),this.state.unavailableTasks.splice(this.state.unavailableTasks.indexOf(e.name),1),this.setState({redirect:!0})}},{key:"isClicked",value:function(e,t){var a=this.state.clickedTasks.includes(e);return!1===a?(this.state.clickedTasks.push(e),this.state.clickedTaskNames.push(t),!0===a):!0===a?(this.state.clickedTasks.splice(this.state.clickedTasks.indexOf(e),1),this.state.clickedTaskNames.splice(this.state.clickedTaskNames.indexOf(e),1),!1===a):void 0}},{key:"buttonClicked",value:function(e){var t=this.state.clickedButtons.includes(e);return!1===t?(this.state.clickedButtons.push(e),!0===t):!0===t?(this.state.clickedButtons.splice(this.state.clickedButtons.indexOf(e),1),!1===t):void 0}},{key:"isCompleted",value:function(e){var t=this;b.a.get("".concat(_,"/tasks-completed?id=").concat(e,"&completed=true")).then((function(a){if(!1===a.data){b.a.patch("".concat(_,"/tasks?id=").concat(e),{completed:"true"}).then((function(a){t.state.completedTasks.push(e),t.refreshTasks()})).catch((function(e){console.log(e)}))}else if(!0===a.data){b.a.patch("".concat(_,"/tasks?id=").concat(e),{completed:"false"}).then((function(a){t.state.completedTasks.splice(t.state.completedTasks.indexOf(e),1),t.refreshTasks()})).catch((function(e){console.log(e)}))}})).catch((function(e){console.log(e)}))}},{key:"deleteOneTask",value:function(e){var t=this;console.log(e),b.a.delete("".concat(_,"/tasks?id=").concat(e)).then((function(e){t.state.unavailableTasks.splice(0,t.state.unavailableTasks.length),t.refreshTasks()})).catch((function(e){console.log(e)}))}},{key:"deleteDoneTasks",value:function(){var e=this;b.a.delete("".concat(_,"/tasks-completed?user=").concat(this.context.state.userLogged,"&list=").concat(this.context.state.activeList)).then((function(t){console.log(t.data),e.state.unavailableTasks.splice(0,e.state.unavailableTasks.length),e.refreshTasks()})).catch((function(e){console.log(e)}))}},{key:"deleteSelectedTasks",value:function(){var e=this,t=this.state.clickedTaskNames;b.a.delete("".concat(_,"/tasks-selected?user=").concat(this.context.state.userLogged,"&list=").concat(this.context.state.activeList),{params:{names:t}}).then((function(t){e.state.unavailableTasks.splice(0,e.state.unavailableTasks.length),e.refreshTasks()})).catch((function(e){console.log(e)}))}},{key:"goBack",value:function(){this.setState({back:!0})}},{key:"setDoneDelete",value:function(){return!1===this.state.doneDelete?(this.setState({doneDelete:!0}),!0):!0===this.state.doneDelete?(this.setState({doneDelete:!1}),!1):void 0}},{key:"setSelectedDelete",value:function(){return!1===this.state.selectedDelete?(this.setState({selectedDelete:!0}),!0):!0===this.state.selectedDelete?(this.setState({selectedDelete:!1}),!1):void 0}},{key:"render",value:function(){var e=this;return this.state.redirect?s.a.createElement(v.a,{push:!0,to:{pathname:"/ETask",state:{id:this.state.editId,name:this.state.name,description:this.state.description,due:this.state.due,unavailableTasks:this.state.unavailableTasks}}}):this.state.back?s.a.createElement(v.a,{push:!0,to:"/Select"}):s.a.createElement("div",null,s.a.createElement("form",null,s.a.createElement("h3",null,"Create New Task"),s.a.createElement("input",{name:"name",maxLength:20,placeholder:"Task Name",value:this.state.name,onChange:function(t){return e.change(t)}}),s.a.createElement("p",{className:this.state.unavailableTasks.includes(this.state.name)?"shown-messages":"hidden-messages"},"No duplicate tasks in the same list"),s.a.createElement("br",null),s.a.createElement("input",{name:"description",maxLength:50,placeholder:"What to do",value:this.state.description,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("input",{name:"due",maxLength:20,placeholder:"When to have it done",value:this.state.due,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("button",{disabled:0===this.state.name.length||this.state.unavailableTasks.includes(this.state.name)||!1===this.state.tasksLoaded,onClick:function(t){return e.onSubmit(t)}},"Add Task")),s.a.createElement("h2",null,"".concat(this.context.state.activeList)),s.a.createElement("button",{type:"button",onClick:function(){return e.goBack()}},"Back"),s.a.createElement(w,{taskCollection:this.state.taskCollection,editMenu:this.editMenu,isClicked:this.isClicked,clickedTasks:this.state.clickedTasks,isCompleted:this.isCompleted,completedTasks:this.state.completedTasks,deleteOneTask:this.deleteOneTask,clickedButtons:this.state.clickedButtons,buttonClicked:this.buttonClicked,unavailableTasks:this.state.unavailableTasks}),s.a.createElement("br",null),s.a.createElement("button",{onClick:function(){return e.setDoneDelete()},shown:this.state.doneDelete?"hidden":""},"Delete Done Tasks"),s.a.createElement("button",{className:"Clicked",onClick:function(){return e.setDoneDelete()},shown:this.state.doneDelete?"show":"hidden"},"Cancel"),s.a.createElement("button",{onClick:function(){return e.setSelectedDelete()},shown:this.state.selectedDelete?"hidden":""},"Delete Selected Tasks"),s.a.createElement("button",{className:"Clicked",onClick:function(){return e.setSelectedDelete()},shown:this.state.selectedDelete?"show":"hidden"},"Cancel"),s.a.createElement("br",null),s.a.createElement("button",{className:"deletebutton",onClick:function(){return e.deleteDoneTasks()},onClickCapture:function(){return e.setDoneDelete()},shown:this.state.doneDelete?"":"hidden"},"Delete Completed Tasks?"),s.a.createElement("button",{className:"deletebutton",onClick:function(){return e.deleteSelectedTasks()},onClickCapture:function(){return e.setSelectedDelete()},shown:this.state.selectedDelete?"":"hidden"},"Delete Selected Tasks?"),s.a.createElement("br",null))}}]),t}(s.a.Component),L=Object(v.g)(O);O.contextType=C;var j=function(){return s.a.createElement("ul",null)},y=a(38);var S=function(e){var t=e.children,a=Object(y.a)(e,["children"]);return s.a.createElement(C.Consumer,null,(function(e){var n=e.isAuthenticated;return s.a.createElement(v.b,Object.assign({},a,{render:function(e){var a=e.location;return n?t:s.a.createElement(v.a,{to:{pathname:"/",state:{from:a}}})}}))}))},D=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={name:"",desc:"",due:"",unavailableLists:[]},a.change=function(e){a.setState(Object(r.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={user:a.context.state.userLogged,name:a.state.name,description:a.state.desc,due:a.state.due};b.a.post("".concat(_,"/lists"),t).then((function(e){console.log(e.data),a.setState({name:"",desc:"",due:""}),a.setState({redirect:!0})})).catch((function(e){console.log(e)}))},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.setState({unavailableLists:this.props.history.location.state.unavailableLists})}},{key:"goBack",value:function(){this.setState({redirect:!0})}},{key:"render",value:function(){var e=this;return this.state.redirect?s.a.createElement(v.a,{push:!0,to:"/Select"}):s.a.createElement("div",null,s.a.createElement("form",null,s.a.createElement("h3",null,"Create New List"),s.a.createElement("input",{name:"name",maxLength:20,placeholder:"List Name",value:this.state.name,onChange:function(t){return e.change(t)}}),s.a.createElement("p",{className:this.state.unavailableLists.includes(this.state.name)?"shown-messages":"hidden-messages"},"List names must be unique"),s.a.createElement("br",null),s.a.createElement("input",{name:"desc",maxLength:50,placeholder:"Type of List",value:this.state.desc,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("input",{name:"due",maxLength:20,placeholder:"Timeframe",value:this.state.due,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("button",{disabled:!!this.state.unavailableLists.includes(this.state.name),onClick:function(t){return e.onSubmit(t)}},"Add List"),s.a.createElement("br",null),s.a.createElement("button",{type:"button",onClick:function(){return e.goBack()}},"Back")))}}]),t}(s.a.Component),N=Object(v.g)(D);D.contextType=C;var x=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={username:"",email:"",password:"",cpassword:"",touched:{username:!1,email:!1,password:!1,cpassword:!1},unavailableUsers:[],unavailableEmails:[]},a.change=function(e){a.setState(Object(r.a)({},e.target.name,e.target.value))},a.handleBlur=function(e){return function(t){a.setState({touched:Object(o.a)({},a.state.touched,Object(r.a)({},e,!0))})}},a.onSubmit=function(e){e.preventDefault();var t={username:a.state.username,email:a.state.email,password:a.state.password};b.a.get("".concat(_,"/users-names?username=").concat(a.state.username)).then((function(e){!0===e.data?b.a.get("".concat(_,"/users-emails?email=").concat(a.state.email)).then((function(e){!0===e.data?(console.log("Email ".concat(a.state.email," Available")),b.a.post("".concat(_,"/users"),t).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),a.setState({username:"",email:"",password:"",cpassword:"",touched:{username:!1,email:!1,password:!1,cpassword:!1}}),a.setState({redirect:!0})):!1===e.data&&(a.state.unavailableEmails.push(a.state.email),a.setState({email:a.state.email}),console.log("Email ".concat(a.state.email," is already in use")))})).catch((function(e){console.log(e)})):!1===e.data&&(a.state.unavailableUsers.push(a.state.username),a.setState({username:a.state.username}),console.log("Username ".concat(a.state.username," is unavailable")))})).catch((function(e){console.log(e)}))},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;if(this.state.redirect)return s.a.createElement(v.a,{push:!0,to:"/"});var t,a,n,c,l=(t=this.state.username,a=this.state.email,n=this.state.password,c=this.state.cpassword,{username:0===t.length,email:0===a.length,password:0===n.length,cpassword:c!==n||0===c.length}),i=!Object.keys(l).some((function(e){return l[e]})),o=function(t){var a=l[t],n=e.state.touched[t];return!!a&&n},r=function(t){return!!e.state.touched[t]};return s.a.createElement("div",null,s.a.createElement("form",null,s.a.createElement("h3",null,"New User Registration"),s.a.createElement("input",{name:"username",maxLength:30,className:o("username")?"error":"",filled:r("username")?"good":"",taken:this.state.unavailableUsers.includes(this.state.username)?"true":"",onBlur:this.handleBlur("username"),placeholder:"Username",value:this.state.username,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("p",{className:this.state.unavailableUsers.includes(this.state.username)?"shown-messages":"hidden-messages"}," Username unavailable"),s.a.createElement("p",{className:o("username")?"shown-messages":"hidden-messages"}," Enter Username"),s.a.createElement("br",null),s.a.createElement("input",{name:"email",maxLength:30,className:o("email")?"error":"",filled:r("email")?"good":"",taken:this.state.unavailableEmails.includes(this.state.email)?"true":"",onBlur:this.handleBlur("email"),placeholder:"Email Address",value:this.state.email,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("p",{className:this.state.unavailableEmails.includes(this.state.email)?"shown-messages":"hidden-messages"}," Email already in use, try Signing In"),s.a.createElement("p",{className:o("email")?"shown-messages":"hidden-messages"}," Enter a valid Email address"),s.a.createElement("br",null),s.a.createElement("input",{name:"password",maxLength:30,className:o("password")?"error":"",filled:r("password")?"good":"",onBlur:this.handleBlur("password"),placeholder:"Password",type:"password",value:this.state.password,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("p",{className:o("password")?"shown-messages":"hidden-messages"},"Enter a good password"),s.a.createElement("br",null),s.a.createElement("input",{name:"cpassword",maxLength:30,className:o("cpassword")?"error":"",filled:r("cpassword")?"good":"",onBlur:this.handleBlur("cpassword"),placeholder:"Confirm Password",type:"password",value:this.state.cpassword,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("p",{className:o("cpassword")?"shown-messages":"hidden-messages"},"Passwords must match"),s.a.createElement("br",null),s.a.createElement("p",{className:i?"shown-messages":"hidden-messages"},"Ready to submit"),s.a.createElement("br",null),s.a.createElement("button",{disabled:!i,onClick:function(t){return e.onSubmit(t)}},"Create Account")),s.a.createElement("p",null,"Already have an account?"),s.a.createElement(f.b,{to:"/"},"Sign-in"))}}]),t}(s.a.Component),B=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={clickedLists:[],clickedButtons:[],unavailableLists:[]},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"checkClicked",value:function(e){return this.state.clickedLists.includes(e)}},{key:"checkDeletable",value:function(e){return this.state.clickedButtons.includes(e)}},{key:"componentDidMount",value:function(){this.props.unavailableLists.push(this.props.obj.name),this.setState({unavailableLists:this.props.unavailableLists})}},{key:"render",value:function(){var e=this,t=this.props.obj.name,a=this.props.obj._id;return s.a.createElement("div",{shape:"rTableRow",onClick:function(){return e.props.isClicked(a)},onClickCapture:function(){return e.setState({clickedLists:e.props.clickedLists})},className:this.checkClicked(a)?"rowClicked":"rowNotClicked",deletable:this.checkDeletable(a)?"true":"false"},s.a.createElement("div",{shape:"rTableCell",className:this.checkClicked(a)?"rowClicked":"rowNotClicked"},this.props.obj.name),s.a.createElement("div",{shape:"rTableCell",className:this.checkClicked(a)?"rowClicked":"rowNotClicked"},this.props.obj.description),s.a.createElement("div",{shape:"rTableCell",className:this.checkClicked(a)?"rowClicked":"rowNotClicked"},this.props.obj.due),s.a.createElement("div",null,s.a.createElement("div",{shape:"rTableCell"},s.a.createElement("button",{className:this.checkClicked(a)?"Clicked":"notClicked",onClick:function(){return e.props.clickHandler(t)},shown:this.checkDeletable(a)?"hidden":""},"Select"),s.a.createElement("button",{className:"deletebutton",onClick:function(){return e.props.deleteOneList(a,t)},shown:this.checkDeletable(a)?"":"hidden"},"Delete List?")),s.a.createElement("div",{shape:"rTableCell"},s.a.createElement("button",{className:this.checkClicked(a)?"Clicked":"notClicked",onClick:function(){return e.props.editMenu(e.props.obj)},shown:this.checkDeletable(a)?"hidden":""},"Edit"),s.a.createElement("button",{className:this.checkClicked(a)?"Clicked":"",onClick:function(){return e.props.buttonClicked(a)},shown:this.checkDeletable(a)?"show":"hidden"},"Cancel"))),s.a.createElement("div",{shape:"rTableCell"},s.a.createElement("button",{onClick:function(){return e.props.buttonClicked(a)},onClickCapture:function(){return e.setState({clickedButtons:e.props.clickedButtons})},className:this.checkClicked(a)?"Clicked":"notClicked",shown:this.checkDeletable(a)?"hidden":""},"Delete")))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).listTable=function(){return a.props.listCollection.map((function(e,t){return s.a.createElement(B,{obj:e,key:t,clickHandler:a.props.clickHandler,editMenu:a.props.editMenu,isClicked:a.props.isClicked,clickedLists:a.props.clickedLists,deleteOneList:a.props.deleteOneList,clickedButtons:a.props.clickedButtons,buttonClicked:a.props.buttonClicked,unavailableLists:a.props.unavailableLists})}))},a.state={clickedLists:[],clickedButtons:[]},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.listTable();return s.a.createElement("div",{className:"tableDisplay"},s.a.createElement("div",{shape:"rTable"},s.a.createElement("div",{shape:"rTableRow"},s.a.createElement("div",{shape:"rTableCell"},"Name"),s.a.createElement("div",{shape:"rTableCell"},"Description"),s.a.createElement("div",{shape:"rTableCell"},"Due")),e))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).refreshLists=function(){var e=a.context.state.userLogged;b.a.get("".concat(_,"/lists?user=").concat(e)).then((function(e){console.log(e),a.setState({listCollection:e.data.data,listsLoaded:!0})})).catch((function(e){console.log(e)}))},a.state={selection:"",listCollection:[],clickedLists:[],clickedButtons:[],unavailableLists:[],editId:"",listsLoaded:!1},a.clickHandler=a.clickHandler.bind(Object(E.a)(a)),a.isClicked=a.isClicked.bind(Object(E.a)(a)),a.deleteOneList=a.deleteOneList.bind(Object(E.a)(a)),a.buttonClicked=a.buttonClicked.bind(Object(E.a)(a)),a.editMenu=a.editMenu.bind(Object(E.a)(a)),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.refreshLists()}},{key:"isClicked",value:function(e){var t=this.state.clickedLists.includes(e);return!1===t?(this.state.clickedLists.push(e),!0===t):!0===t?(this.state.clickedLists.splice(this.state.clickedLists.indexOf(e),1),!1===t):void 0}},{key:"buttonClicked",value:function(e){var t=this.state.clickedButtons.includes(e);return!1===t?(this.state.clickedButtons.push(e),!0===t):!0===t?(this.state.clickedButtons.splice(this.state.clickedButtons.indexOf(e),1),!1===t):void 0}},{key:"clickHandler",value:function(e){console.log(e),this.setState({selection:e}),this.setState({redirect:!0})}},{key:"addlist",value:function(){this.setState({redirect2:!0})}},{key:"deleteOneList",value:function(e,t){var a=this;console.log(e),b.a.delete("".concat(_,"/lists?id=").concat(e,"&list=").concat(t,"&user=").concat(this.context.state.userLogged)).then((function(t){a.state.unavailableLists.splice(a.state.unavailableLists.indexOf(e),1),a.refreshLists()})).catch((function(e){console.log(e)}))}},{key:"editMenu",value:function(e){this.setState({name:e.name,description:e.description,due:e.due,editId:e._id}),this.state.unavailableLists.splice(this.state.unavailableLists.indexOf(e.name),1),this.setState({redirect3:!0})}},{key:"render",value:function(){var e=this;return this.state.redirect?(console.log(this.state.selection),s.a.createElement(C.Consumer,null,(function(t){var a=t.identify;return s.a.createElement(v.a,{push:a(e.context.state.userLogged,e.state.selection),to:"/CTForm"})}))):this.state.redirect2?s.a.createElement(v.a,{push:!0,to:{pathname:"/CLForm",state:{unavailableLists:this.state.unavailableLists}}}):this.state.redirect3?s.a.createElement(v.a,{push:!0,to:{pathname:"/EList",state:{id:this.state.editId,name:this.state.name,description:this.state.description,due:this.state.due,unavailableLists:this.state.unavailableLists}}}):s.a.createElement("div",null,s.a.createElement("button",{disabled:!this.state.listsLoaded,onClick:function(){return e.addlist()}},"Create New List"),s.a.createElement(M,{listCollection:this.state.listCollection,clickHandler:this.clickHandler,editMenu:this.editMenu,isClicked:this.isClicked,clickedLists:this.state.clickedLists,deleteOneList:this.deleteOneList,clickedButtons:this.state.clickedButtons,buttonClicked:this.buttonClicked,unavailableLists:this.state.unavailableLists}))}}]),t}(n.Component);A.contextType=C;var U=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).change=function(e){a.setState(Object(r.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=a.props.history.location.state.id,n={user:a.context.state.userLogged,name:a.state.name,description:a.state.description,due:a.state.due,list:a.context.state.activeList};b.a.patch("".concat(_,"/tasks?id=").concat(t),n).then((function(e){a.setState({name:"",desc:"",due:""}),a.setState({redirect:!0})})).catch((function(e){console.log(e)}))},a.state={name:"",description:"",due:"",selection:"",taskCollection:[],unavailableTasks:[]},a.change=a.change.bind(Object(E.a)(a)),a.onSubmit=a.onSubmit.bind(Object(E.a)(a)),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.setState({name:this.props.history.location.state.name,description:this.props.history.location.state.description,due:this.props.history.location.state.due,unavailableTasks:this.props.history.location.state.unavailableTasks})}},{key:"goBack",value:function(){this.setState({redirect:!0})}},{key:"render",value:function(){var e=this;return this.state.redirect?s.a.createElement(v.a,{push:!0,to:"/CTForm"}):s.a.createElement("div",null,s.a.createElement("form",null,s.a.createElement("h3",null,"Edit Task"),s.a.createElement("input",{name:"name",maxLength:20,placeholder:"Task Name",value:this.state.name,onChange:function(t){return e.change(t)}}),s.a.createElement("p",{className:this.state.unavailableTasks.includes(this.state.name)?"shown-messages":"hidden-messages"}," Task names must be unique"),s.a.createElement("br",null),s.a.createElement("input",{name:"description",maxLength:50,placeholder:"What to do",value:this.state.description,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("input",{name:"due",maxLength:20,placeholder:"When to have it done",value:this.state.due,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("button",{disabled:0===this.state.name.length||this.state.unavailableTasks.includes(this.state.name),onClick:function(t){return e.onSubmit(t)}},"Update Task"),s.a.createElement("br",null),s.a.createElement("button",{type:"button",disabled:!!this.state.unavailableTasks.includes(this.state.name),onClick:function(){return e.goBack()}},"Back")))}}]),t}(s.a.Component),I=Object(v.g)(U);U.contextType=C;var F=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).change=function(e){a.setState(Object(r.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=a.context.state.userLogged,n=a.props.history.location.state.id,s=a.props.history.location.state.name,c={list:a.state.name},l={user:a.context.state.userLogged,name:a.state.name,description:a.state.description,due:a.state.due};b.a.patch("".concat(_,"/lists?user=").concat(t,"&id=").concat(n,"&prevName=").concat(s),{list:l,task:c}).then((function(e){a.setState({name:"",desc:"",due:""}),a.setState({redirect:!0})})).catch((function(e){console.log(e)}))},a.state={name:"",description:"",due:"",selection:"",unavailableLists:[],taskCollection:[]},a.change=a.change.bind(Object(E.a)(a)),a.onSubmit=a.onSubmit.bind(Object(E.a)(a)),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.setState({name:this.props.history.location.state.name,description:this.props.history.location.state.description,due:this.props.history.location.state.due,unavailableLists:this.props.history.location.state.unavailableLists})}},{key:"goBack",value:function(){this.setState({redirect:!0})}},{key:"render",value:function(){var e=this;return this.state.redirect?s.a.createElement(v.a,{push:!0,to:"/Select"}):s.a.createElement("div",null,s.a.createElement("form",null,s.a.createElement("h3",null,"Edit List"),s.a.createElement("input",{name:"name",maxLength:20,placeholder:"List Name",value:this.state.name,onChange:function(t){return e.change(t)}}),s.a.createElement("p",{className:this.state.unavailableLists.includes(this.state.name)?"shown-messages":"hidden-messages"}," List names must be unique"),s.a.createElement("br",null),s.a.createElement("input",{name:"description",maxLength:50,placeholder:"What to do",value:this.state.description,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("input",{name:"due",maxLength:20,placeholder:"When to have it done",value:this.state.due,onChange:function(t){return e.change(t)}}),s.a.createElement("br",null),s.a.createElement("button",{disabled:0===this.state.name.length,onClick:function(t){return e.onSubmit(t)}},"Update List"),s.a.createElement("br",null),s.a.createElement("button",{type:"button",onClick:function(){return e.goBack()}},"Back")))}}]),t}(s.a.Component),H=Object(v.g)(F);F.contextType=C;var W=function(){return s.a.createElement("div",null,s.a.createElement(v.d,null,s.a.createElement(v.b,{exact:!0,path:"/"},s.a.createElement(g,null)),s.a.createElement(S,{path:"/CTForm"},s.a.createElement(L,null)),s.a.createElement(S,{path:"/CLForm"},s.a.createElement(N,null)),s.a.createElement(v.b,{path:"/CUForm"},s.a.createElement(x,null)),s.a.createElement(S,{path:"/Select"},s.a.createElement(A,null)),s.a.createElement(S,{path:"/ETask"},s.a.createElement(I,null)),s.a.createElement(S,{path:"/EList"},s.a.createElement(H,null))))},P=function(){return s.a.createElement("div",null,s.a.createElement(W,null))};var R=function(){var e=Object(n.useContext)(C);return e.isAuthenticated?s.a.createElement("button",{onClick:function(){e.signout()}},"Sign out"):s.a.createElement("p",null,"Sign in to view lists")},_="https://to-do-list-server-api.herokuapp.com";var q=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({userLogged:"",activeList:""}),o=Object(i.a)(l,2),r=o[0],u=o[1],d={isAuthenticated:a,state:r,authenticate:function(){c(!0)},signout:function(){c(!1)},identify:function(e,t){console.log(e),console.log(t),u({userLogged:e,activeList:t})}};return s.a.createElement("div",{className:"App"},s.a.createElement(C.Provider,{value:d},s.a.createElement(f.a,null,s.a.createElement(R,null),s.a.createElement(j,null),s.a.createElement(P,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.a175ad7b.chunk.js.map