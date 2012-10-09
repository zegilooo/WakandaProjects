
WAF.onAfterInit = function onAfterInit() {// @lock
var component = $$('component1');

// @region namespaceDeclaration// @startlock
	var button5 = {};	// @button
	var button6 = {};	// @button
	var documentEvent = {};	// @document
	var dataGrid1 = {};	// @dataGrid
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock

		component.loadComponent('/leaveRequest.waComponent');
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		component.loadComponent('/leavesList.waComponent');
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		cmp="component1";
		sources.cmp.sync();
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		component.loadComponent('/addEmp.waComponent');
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.employees.addNewElement();
		component.loadComponent('/addEmp.waComponent');
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button6", "click", button6.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
