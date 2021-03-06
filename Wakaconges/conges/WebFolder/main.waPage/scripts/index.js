﻿
WAF.onAfterInit = function onAfterInit() {// @lock
var component = $$('component1');
var addUsrBtn = $$('button6');
var selectCompany = $$('button1');
var compLogo = $$('company_logo');
var userImg = $$('user_pic');
var currentUser ;
var belongsToAdmin;
var belongsToManagers;
var belongsToEmployees;
// @region namespaceDeclaration// @startlock
	var button6 = {};	// @button
	var login1 = {};	// @login
	var employeesEvent = {};	// @dataSource
	var button5 = {};	// @button
	var button4 = {};	// @button
	var button3 = {};	// @button
	var button1 = {};	// @button
	var documentEvent = {};	// @document
	var button2 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		//buggy code block --> WAK0080860: Cannot add new element in datasource and load web component simultaneously
		loadComponent(cmp,'/addEmp.waComponent');
		sources.employees.addNewElement();
		$$(cmp+'_image1').clear();
		$$(cmp+'_dataGrid1').hide();
		$$(cmp+'_richText3').hide();
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		doAtLogOut();
		goHome();
	};// @lock

	employeesEvent.onCurrentElementChange = function employeesEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		if($$(cmp).isVisible())
			checkAdmin();
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		sources.employees.query('ID="'+currentUser.ID+'" and company.ID='+sessionStorage.currentCompany);
		loadComponent(cmp,'/addEmp.waComponent');
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		if(belongsToManagers|belongsToAdmin){
			sources.employees.query('company.ID='+sessionStorage.currentCompany);
			loadComponent(cmp,'/pendingRequests.waComponent');
		}
		else{
			alert('You are not allowed to perform this action');
		}
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		loadComponent(cmp,'/leavesList.waComponent');
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		redirect('/companies/');
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
			goHome();
		}
		checkRights();
		if(!sessionStorage.currentCompany && !belongsToAdmin)
		{
			  ds.Employees.find('ID = ' + waf.directory.currentUser().ID, {
				    onSuccess: function(e) {
				        e.entity.company.load({
				            onSuccess: function(ee) {
				               sessionStorage.currentCompany=ee.entity.ID.getValue();
				            }
				        })
				    }
				});
		}
		else{
			sources.company.query('ID = '+sessionStorage.currentCompany);
		}
		
		if(belongsToAdmin){
				sources.employees.query('company.ID='+sessionStorage.currentCompany);
			}
		else{
				sources.employees.query('ID="'+currentUser.ID+'" and company.ID='+sessionStorage.currentCompany);
			}
		
		loadComponent(cmp,'/addEmp.waComponent');
		$('#container11').css('left','45%');
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		loadComponent(cmp,'/leaveRequest.waComponent');
	};// @lock
	
	//useful functions
	function doAtLogIn(){
		sources.cmp.sync();
		sources.currentuser.query('ID='+currentUser.ID);
		checkRights();
		if(belongsToAdmin){
			addUsrBtn.show();
			selectCompany.show();
			$$('button4').hide();
		}
		else{
			if(belongsToEmployees||belongsToManagers){
				$$('container6').toggleSplitter();
				$('#container9').css('width','71px');
				$('#container10').css({'left':'71px','width':'100%'});
				$('#container11').css('width','10%');
				$$('button1').hide();
				addUsrBtn.disable();
			}
		}
	}
	function checkRights(){
		belongsToAdmin = waf.directory.currentUserBelongsTo('Administrators');
		belongsToManagers = waf.directory.currentUserBelongsTo('Managers');
		belongsToEmployees = waf.directory.currentUserBelongsTo('Employees');
	}
	function doAtLogOut(){
		sources.cmp.sync();
		addUsrBtn.hide();
		component.hide();
		currentUser=null;
		cleanSession();
	}
	function checkAdmin(){
		if(!waf.directory.currentUserBelongsTo('Administrators')){
			var comboRole =$$(cmp+'_combobox1');
			var firstNameTxt =$$(cmp+'_textField1');
			var lastNameTxt = $$(cmp+'_textField6');
			var birthTxt = $$(cmp+'_textField7');
			var joinTxt =$$(cmp+'_textField9');
			
			if(!firstNameTxt.isDisabled())
				firstNameTxt.disable();
			if(!lastNameTxt.isDisabled())
				lastNameTxt.disable();
			if(!birthTxt.isDisabled())
				birthTxt.disable();
			if(!comboRole.isDisabled())
				comboRole.disable();
			if(!joinTxt.isDisabled())
				joinTxt.disable();
		}else
		{
			userImg.clear();
		}
	}
// @region eventManager// @startlock
	WAF.addListener("button6", "click", button6.click, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("employees", "onCurrentElementChange", employeesEvent.onCurrentElementChange, "WAF");
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
// @endregion
};// @endlock
