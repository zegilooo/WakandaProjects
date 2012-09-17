
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var image1 = {};	// @image
// @endregion// @endlock

// eventHandlers// @lock

	image1.click = function image1_click (event)// @startlock
	{// @endlock
		$$('fileUpload1').show();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("image1", "click", image1.click, "WAF");
// @endregion
};// @endlock
