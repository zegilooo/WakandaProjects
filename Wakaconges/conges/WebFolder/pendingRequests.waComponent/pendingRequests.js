﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'pendingRequests';
	// @endregion// @endlock
	var  approvalCheck = $$(id+'_checkbox1');
	this.load = function (data) {// @lock
	
	// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button1 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		sources.leaves0.approved = false;
		sources.leaves0.save();
		
		approvalCheck.enable();
		approvalCheck.uncheck();
		approvalCheck.disable();
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.leaves0.approved = true;
		sources.leaves0.save();
		
		approvalCheck.enable();
		approvalCheck.check();
		approvalCheck.disable();

	};// @lock
	approvalCheck.disable();
	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
