
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
	var birthTxt = $$('_textField7');
	var joinTxt =$$(id+'_textField9');
	var latestLeavesLabel =$$(id+"_richText3");
	var latestLeavesGrid = $$(id+"_dataGrid1");
	var selectedRole = comboRole.getValue();
	
	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var employeesEvent = {};	// @dataSource
	var submit_btn = {};	// @button
	var image1 = {};	// @image
	// @endregion// @endlock
	//debugger;
	//if a new employee is added, he do not have leaves
		if(sources.employees.isNewElement()){
			latestLeavesLabel.hide();
			latestLeavesGrid.hide();
		}
		else
		{
			latestLeavesLabel.show();
			latestLeavesGrid.show();
			//this following code is a workaround in order to avoid the bug WAK0080044
			sources.employees.Role.load({
					onSuccess:function(f){
						if(f.entity){
							var key = f.entity.ID.getValue();
							sources.rolesEnum.selectByKey(key);
						}
					}
				});
		}
	
	
	// eventHandlers// @lock

	employeesEvent.onCurrentElementChange = function employeesEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		if(!sources.employees.isNewElement()){
			sources.employees.Role.load({
					onSuccess:function(f){
						$$(cmp+'_combobox1').setValue(f.entity.ID.getValue());
						sources.rolesEnum.setCurrentEntity(f.entity);
					}});
			}
	};// @lock

	submit_btn.click = function submit_btn_click (event)// @startlock
	{// @endlock
	  ds.Company.find('ID="'+sessionStorage.currentCompany+'"',{'onSuccess':function(e){
	  	sources.employees.company.set(e.entity);
		sources.employees.Role.set(sources.rolesEnum);	
		sources.employees.isManager = sources.rolesEnum.isManager;
		sources.employees.serverRefresh();
		sources.employees.save({
				onSuccess: function(){
					var uploaded = compFileUpload.getFiles();
					if(uploaded.length!=0){
						compFileUpload.uploadFiles();
					}
				}
			});
	  	}});
	};// @lock

	image1.click = function image1_click (event)// @startlock
	{// @endlock
		compFileUpload.show();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_employees", "onCurrentElementChange", employeesEvent.onCurrentElementChange, "WAF");
	WAF.addListener(this.id + "_submit_btn", "click", submit_btn.click, "WAF");
	WAF.addListener(this.id + "_image1", "click", image1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
