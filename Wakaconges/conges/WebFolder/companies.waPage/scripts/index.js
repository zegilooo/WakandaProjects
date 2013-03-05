
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var login1 = {};	// @login
	var button1 = {};	// @button
	var documentEvent = {};	// @document
	var button2 = {};	// @button
	var dataGrid1 = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		cleanSession();
		redirect('/index/');
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.company.addNewElement();
		$$('container5').show();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		$$('container5').hide();
		if(!waf.directory.currentUser()){
			goHome();
		}
		if(sessionStorage.adminAction =='add')
		{
			$$('container5').show();
		}
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		sources.company.save({
			onSuccess:function(x){
				$$('fileUpload2').uploadFiles();
			}
		});
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		if(waf.directory.currentUser()){
			sessionStorage.currentCompany = sources.company.ID;
			redirect("/main/");
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
// @endregion
};// @endlock
