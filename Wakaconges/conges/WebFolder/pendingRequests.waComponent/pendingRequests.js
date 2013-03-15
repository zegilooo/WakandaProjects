
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
	approvalCheck.disable();
	button2.click = function button2_click (event)// @startlock
	{// @endlock
		if(ds.Employees.leaveApproval(waf.directory.currentUser().ID,sources.leaves1.ID,false)){		
			approvalCheck.enable();
			approvalCheck.uncheck();
			approvalCheck.disable();
			sources.leaves1.serverRefresh();
			
		}
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		if(ds.Employees.leaveApproval(waf.directory.currentUser().ID,sources.leaves1.ID,true)){	
			approvalCheck.enable();
			approvalCheck.check();
			approvalCheck.disable();
			ds.Employees.calculateConsumptedDays(sources.cmp_employees.ID,sources.leaves1.ID);
			sources.leaves1.serverRefresh();
		}
	};// @lock
	
	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock

	};// @lock

}// @startlock
return constructor;
})();// @endlock
