
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'leaveRequest';
	// @endregion// @endlock
	var leaveTypesCombo = $$(id+'_combobox1');
	this.load = function (data) {// @lock
	this.show();
	// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button1 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		sources.leaves0.leaveType=leaveTypesCombo.getValue();
		sources.leaves0.save({
			onSuccess: function(){
				$$(id).loadComponent('/leavesList.waComponent');
		}});
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$$(id+'_container1').show();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
