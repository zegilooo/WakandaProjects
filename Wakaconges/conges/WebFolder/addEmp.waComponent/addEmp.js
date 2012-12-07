
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'addEmp';
	// @endregion// @endlock
	var compFileUpload = $$(id+'_fileUpload1');
	
	var comboRole =$$(id+'_combobox1');
	var firstNameTxt =$$(id+'_textField5');
	var lastNameTxt = $$(id+'_textField6');
	var latestLeavesLabel =$$(id+"_richText3");
	var latestLeavesGrid = $$(id+"_dataGrid1");
	
	//functions
	function isManager(){
		var booleanVal = false;
		switch(comboRole.getValue()){
			case "CTO":
				booleanVal = true;
				break;
			case "CEO":
				booleanVal = true;
				break;
			case "CFO":
				booleanVal = true;
				break;
			case "CMO":
				booleanVal = true;
				break;
			case "EVP":
				booleanVal = true;
				break;
			case "CTO":
				booleanVal = true;
				break;
			case "DGM":
				booleanVal = true;
				break;
			case "QAM":
				booleanVal = true;
				break;
			case "SSM":
				booleanVal = true;
				break;
			case "PM":
				booleanVal = true;
				break;
			default:
				booleanVal = false;
				break;
				
			}
			sources.employees.isManager= booleanVal;
	}
	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var combobox1 = {};	// @combobox
	var submit_btn = {};	// @button
	var image1 = {};	// @image
	// @endregion// @endlock

	//if a new employee is added, he do not have leaves
		if(firstNameTxt.getValue().length==0){
			latestLeavesLabel.hide();
			latestLeavesGrid.hide();
		}
		else
		{
			latestLeavesLabel.show();
			latestLeavesGrid.show();
		}
	// eventHandlers// @lock

	combobox1.change = function combobox1_change (event)// @startlock
	{// @endlock
		sources.employees.Role=comboRole.getValue();
		isManager();
	};// @lock

	submit_btn.click = function submit_btn_click (event)// @startlock
	{// @endlock
		var uploaded = compFileUpload.getFiles();
		if(uploaded.length!=0){
			compFileUpload.uploadFiles();
		}
		  ds.Company.find('ID="'+sessionStorage.currentCompany+'"',{'onSuccess':function(e){
		  	sources.employees.company.set(e.entity);
			sources.employees.serverRefresh();
			sources.employees.save();
		  	}})
		
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
