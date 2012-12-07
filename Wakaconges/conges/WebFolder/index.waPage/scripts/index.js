
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var login1 = {};	// @login
	var companyEvent = {};	// @dataSource
// @endregion// @endlock
	
// eventHandlers// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		location.href ="/mainpage/";
	};// @lock

	companyEvent.onCurrentElementChange = function companyEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		if(waf.directory.currentUser()){
			var currentCompany = this.getPosition() >= 0 ? this.getCurrentElement().getKey() : null;
			sessionStorage.currentCompany = currentCompany;
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("login1", "login", login1.login, "WAF");
	WAF.addListener("company", "onCurrentElementChange", companyEvent.onCurrentElementChange, "WAF");
// @endregion
};// @endlock
