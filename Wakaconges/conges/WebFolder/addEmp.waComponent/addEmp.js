
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'addEmp';
	// @endregion// @endlock
	var compFileUpload = $$(id+'_fileUpload1');
	
	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var submit_btn = {};	// @button
	var image1 = {};	// @image
	// @endregion// @endlock

	// eventHandlers// @lock

	submit_btn.click = function submit_btn_click (event)// @startlock
	{// @endlock
//		sources.employees.save({
//		onSuccess:function(){
//			alert('The employee with the following informations has been correctly saved:/n - first name :'+$$(id+'_textField5').getValue()+'/n - last name :'+$$(id+'_textField6').getValue()+'');
//			}
//		});
debugger;
		var uploaded = compFileUpload.getFiles();
		if(uploaded.length!=0){
			compFileUpload.uploadFiles();
		}
		sources.employees.save();
	};// @lock

	image1.click = function image1_click (event)// @startlock
	{// @endlock
		compFileUpload.show();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_submit_btn", "click", submit_btn.click, "WAF");
	WAF.addListener(this.id + "_image1", "click", image1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
