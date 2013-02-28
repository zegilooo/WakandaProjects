
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
		sources.employees.addNewElement();
		component.loadComponent('/addEmp.waComponent');
		$$(cmp+'_image1').clear();
		$$(cmp+'_dataGrid1').hide();
		$$(cmp+'_richText3').hide();
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		doAtLogOut();
		location.href='/index/';
	};// @lock

	employeesEvent.onCurrentElementChange = function employeesEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		checkAdmin();
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		sources.employees.query('ID="'+currentUser.ID+'" and company.ID='+sessionStorage.currentCompany);
		component.loadComponent('/addEmp.waComponent');
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		if(belongsToManagers|belongsToAdmin){
			sources.employees.query('company.ID='+sessionStorage.currentCompany);
		component.loadComponent('/pendingRequests.waComponent');
		component.show();
		}
		else{
			alert('You are not allowed to perform this action');
		}
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		component.loadComponent('/leavesList.waComponent');
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		location.href='/companies/';
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
			sources.company.query('ID = '+sessionStorage.currentCompany);
		}
		
		if(belongsToAdmin){
				sources.employees.query('company.ID='+sessionStorage.currentCompany);
			}
		else{
				sources.employees.query('ID="'+currentUser.ID+'" and company.ID='+sessionStorage.currentCompany);
			}
		
		component.loadComponent('/addEmp.waComponent');
		$('#container11').css('left','45%')
		
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		component.loadComponent('/leaveRequest.waComponent');
	};// @lock
	
	//useful functions
	function doAtLogIn(){
		sources.cmp.sync();
		currentUser = waf.directory.currentUser();
		checkRights();
		if(belongsToAdmin){
			addUsrBtn.show();
			selectCompany.show();
			$$('button4').hide();
		}
		else{
			if(belongsToManagers|belongsToEmployees){
				$$('container6').toggleSplitter();
				$('#container9').css('width','130px');
				$('#container10').css({'left':'130px','width':'100%'});
				if(belongsToEmployees)
					$$('button4').disable();
			}
		}
		//component.show();
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
		sessionStorage.clear();
	}
	function checkAdmin(){
		if(!waf.directory.currentUserBelongsTo('Administrators')){
			var comboRole =$$(cmp+'_combobox1');
			var firstNameTxt =$$(cmp+'_textField5');
			var lastNameTxt = $$(cmp+'_textField6');
			var birthTxt = $$(cmp+'_textField7');
			var joinTxt =$$(cmp+'_textField9');
//			firstNameTxt.disable();
//			lastNameTxt.disable();
//			birthTxt.disable();
//			comboRole.disable();
//			joinTxt.disable();
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
