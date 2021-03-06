﻿
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var loginField = {};	// @textField
	var pwdField = {};	// @textField
	var button1 = {};	// @button
	var documentEvent = {};	// @document
	var companyEvent = {};	// @dataSource
// @endregion// @endlock
	var login = $$('loginField');
	var pwd = $$('pwdField');
	var companies = $$('combobox1');
// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		sessionStorage.adminAction='add';
		connect(login.getValue(), pwd.getValue(), companies.getValue());
	};// @lock

	loginField.keydown = function loginField_keydown (event)// @startlock
	{// @endlock
		if (event.which == 13 || event.keyCode == 13) {
            connect(login.getValue(), pwd.getValue(), companies.getValue());
        }
	};// @lock

	pwdField.keydown = function pwdField_keydown (event)// @startlock
	{// @endlock
		if (event.which == 13 || event.keyCode == 13) {
            connect(login.getValue(), pwd.getValue(), companies.getValue());
        }
	};// @lock

	pwdField.click = function pwdField_click (event)// @startlock
	{// @endlock
		login.clear();
		pwd.clear();
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		connect(login.getValue(), pwd.getValue(), companies.getValue());
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		centerInPage('container1');
		if((waf.directory.currentUser())&&(waf.directory.currentUserBelongsTo('Administrators'))){
			redirect('/companies/');
		}
	};// @lock

	companyEvent.onCollectionChange = function companyEvent_onCollectionChange (event)// @startlock
	{// @endlock
		if(sources.company.length != 0)
			$$('button2').hide();
	};// @lock

	companyEvent.onCurrentElementChange = function companyEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		if(waf.directory.currentUser()){
			var currentCompany = this.getPosition() >= 0 ? this.getCurrentElement().getKey() : null;
			sessionStorage.currentCompany = currentCompany;
		}
		else
		{
			cleanSession();
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("company", "onCollectionChange", companyEvent.onCollectionChange, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("loginField", "keydown", loginField.keydown, "WAF");
	WAF.addListener("pwdField", "keydown", pwdField.keydown, "WAF");
	WAF.addListener("pwdField", "click", pwdField.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("company", "onCurrentElementChange", companyEvent.onCurrentElementChange, "WAF");
// @endregion
};// @endlock
