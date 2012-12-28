
WAF.onAfterInit = function onAfterInit() {// @lock
var component = $$('component1');
var addUsrBtn = $$('button1');
var selectCompany = $$('button3');
var compName = $$('richText1');
var currentUser ;
var belongsToAdmin;
var belongsToManagers;
var belongsToEmployees;
// @region namespaceDeclaration// @startlock
	var button3 = {};	// @button
	var login1 = {};	// @login
	var button2 = {};	// @button
	var button5 = {};	// @button
	var button6 = {};	// @button
	var documentEvent = {};	// @document
	var dataGrid1 = {};	// @dataGrid
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		location.href='/index/';
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		doAtLogOut();
		location.href='/index/';
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
			location.href='/index/';
		}
		checkRights();
		if(!sessionStorage.currentCompany)
		{
			  ds.Employees.find('ID = ' + waf.directory.currentUser().ID, {
				    onSuccess: function(e) {
				        e.entity.company.load({
				            onSuccess: function(ee) {
				               sessionStorage.currentCompany=ee.entity.ID.getValue()
				           
				            }
				        })
				    }
				});
		}
		else{
			sources.company.selectByKey(sessionStorage.currentCompany , {
				onSuccess: function(){
					compName.setValue('Company name:'+sources.company.companyName);
				}
			});
		}
		if(belongsToAdmin|belongsToManagers){
				sources.employees.query('company.ID='+sessionStorage.currentCompany);
			}
		else{
				sources.employees.query('ID="'+currentUser.ID+'" and company.ID='+sessionStorage.currentCompany);
			}
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		component.loadComponent('/addEmp.waComponent');
		component.show();
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
		checkRights();
		if(belongsToAdmin){
			addUsrBtn.show();
			selectCompany.show();
		}
		component.show();
	}
	function checkRights(){
		belongsToAdmin = waf.directory.currentUserBelongsTo('Admin');
		belongsToManagers = waf.directory.currentUserBelongsTo('Managers');
		belongsToEmployees = waf.directory.currentUserBelongsTo('Employees');
	}
	function doAtLogOut(){
		sources.cmp.sync();
		addUsrBtn.hide();
		component.hide();
		currentUser=null;
		sessionStorage.clear();
	}
// @region eventManager// @startlock
	WAF.addListener("button3", "click", button3.click, "WAF");
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
