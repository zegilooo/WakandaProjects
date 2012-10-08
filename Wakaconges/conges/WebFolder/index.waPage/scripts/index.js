
WAF.onAfterInit = function onAfterInit() {// @lock
var component = $$('component1');

// @region namespaceDeclaration// @startlock
	var dataGrid1 = {};	// @dataGrid
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

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
	WAF.addListener("dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
