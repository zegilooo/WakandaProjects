
WAF.onAfterInit = function onAfterInit() {// @lock
var component = $$('component1');
var addUsrBtn = $$('button1');
var currentUser ;
// @region namespaceDeclaration// @startlock
	var login1 = {};	// @login
	var button2 = {};	// @button
	var button5 = {};	// @button
	var button6 = {};	// @button
	var documentEvent = {};	// @document
	var dataGrid1 = {};	// @dataGrid
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		doAtLogOut();
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		doAtLogIn();
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		component.loadComponent('/pendingRequests.waComponent');
		component.show();
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		component.loadComponent('/leaveRequest.waComponent');
		component.show();
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		component.loadComponent('/leavesList.waComponent');
		component.show();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		currentUser = waf.directory.currentUser();
		if(currentUser!=null)
		{
			cmp="component1";
			doAtLogIn();
		}
		else
		{
			alert("please log in");
		}
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		//component.loadComponent('/addEmp.waComponent');
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.employees.addNewElement();
		component.loadComponent('/addEmp.waComponent');
		component.show();
	};// @lock
	
	//useful functions
	function doAtLogIn(){
		sources.cmp.sync();
		currentUser = waf.directory.currentUser();
		if(currentUser.userName=="admin"){
				addUsrBtn.show();
		}
		component.show();
	}
	function doAtLogOut(){
		sources.cmp.sync();
		addUsrBtn.hide();
		component.hide();
		currentUser=null;
	}
// @region eventManager// @startlock
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button6", "click", button6.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
