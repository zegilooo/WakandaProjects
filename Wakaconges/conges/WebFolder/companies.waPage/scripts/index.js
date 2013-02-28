
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var documentEvent = {};	// @document
	var button2 = {};	// @button
	var dataGrid1 = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.company.addNewElement();
		$$('container5').show();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		
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
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
// @endregion
};// @endlock
