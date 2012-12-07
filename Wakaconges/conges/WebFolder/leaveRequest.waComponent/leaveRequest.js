
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
	var combobox1 = {};	// @combobox
	var button1 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	combobox1.change = function combobox1_change (event)// @startlock
	{// @endlock
		$$(id+'_textField1').setValue(leaveTypesCombo.getValue());
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$$(id+'_container1').show();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_combobox1", "change", combobox1.change, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
