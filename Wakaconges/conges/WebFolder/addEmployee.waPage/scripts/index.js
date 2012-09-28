
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var combobox1 = {};	// @combobox
	var image1 = {};	// @image
// @endregion// @endlock

// eventHandlers// @lock

	combobox1.change = function combobox1_change (event)// @startlock
	{// @endlock
		$$('textField8').setValue($$('combobox1').getValue());
	};// @lock

	image1.click = function image1_click (event)// @startlock
	{// @endlock
		$$('fileUpload1').show();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("combobox1", "change", combobox1.change, "WAF");
	WAF.addListener("image1", "click", image1.click, "WAF");
// @endregion
};// @endlock
