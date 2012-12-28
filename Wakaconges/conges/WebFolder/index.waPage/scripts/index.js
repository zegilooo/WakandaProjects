
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var pwdField = {};	// @textField
	var button1 = {};	// @button
	var documentEvent = {};	// @document
	var companyEvent = {};	// @dataSource
// @endregion// @endlock
	var login = $$('loginField');
	var pwd = $$('pwdField');
	var companies = $$('combobox1');
// eventHandlers// @lock

	pwdField.click = function pwdField_click (event)// @startlock
	{// @endlock
		login.clear();
		pwd.clear();
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		if(ds.Employees.checkEmployee(login.getValue(), pwd.getValue(), companies.getValue())){
			waf.directory.loginByPassword(login.getValue(), pwd.getValue());
			if(waf.directory.currentUser()){
				sessionStorage.currentCompany = sources.company.ID;
				redirect("/mainpage/");
			}
		}
		else
		{
			alert('you are not allowed to perform this action');
		}
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		if(waf.directory.currentUser()){
			redirect("/mainpage/");
		}
	};// @lock

	companyEvent.onCurrentElementChange = function companyEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		if(waf.directory.currentUser()){
			var currentCompany = this.getPosition() >= 0 ? this.getCurrentElement().getKey() : null;
			sessionStorage.currentCompany = currentCompany;
		}
		else
		{
			sessionStorage.clear();
		}
	};// @lock
	
	function redirect(path){
		location.href =path;
	}
// @region eventManager// @startlock
	WAF.addListener("pwdField", "click", pwdField.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("company", "onCurrentElementChange", companyEvent.onCurrentElementChange, "WAF");
// @endregion
};// @endlock
