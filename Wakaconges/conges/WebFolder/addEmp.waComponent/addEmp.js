
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'addEmp';
	// @endregion// @endlock
	var compFileUpload = $$(id+'_fileUpload1');
	var empRole = $$(id+'_textField10');
	var comboRole =$$(id+'_combobox1');
	var firstNameTxt =$$(id+'_textField5');
	var lastNameTxt = $$(id+'_textField6');
	
	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var combobox1 = {};	// @combobox
	var submit_btn = {};	// @button
	var image1 = {};	// @image
	// @endregion// @endlock
	if(firstNameTxt.getValue().length==0){
			ds.Leaves.query("ID=-1",{onSuccess:function(e){
				
				sources.leaves0.setEntitycollection(e.entityCollection);
				
				}})
			
		}
	// eventHandlers// @lock

	combobox1.change = function combobox1_change (event)// @startlock
	{// @endlock
		empRole.setValue(comboRole.getValue());
	};// @lock

	submit_btn.click = function submit_btn_click (event)// @startlock
	{// @endlock
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
	WAF.addListener(this.id + "_combobox1", "change", combobox1.change, "WAF");
	WAF.addListener(this.id + "_submit_btn", "click", submit_btn.click, "WAF");
	WAF.addListener(this.id + "_image1", "click", image1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
