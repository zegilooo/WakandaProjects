
WAF.onAfterInit = function onAfterInit() {// @lock
var component = $$('component1');
var addUsrBtn = $$('button1');
var selectCompany = $$('button3');
var compLogo = $$('company_logo');
var userImg = $$('user_image');
var currentUser ;
var belongsToAdmin;
var belongsToManagers;
var belongsToEmployees;
// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		currentUser = waf.directory.currentUser();
		if(currentUser!=null)
		{
			cmp="component1";
			doAtLogIn();
		}
		else
		{
			alert("please log in");
			location.href='/index/';
		}
		checkRights();
		if(!sessionStorage.currentCompany)
		{
			  ds.Employees.find('ID = ' + waf.directory.currentUser().ID, {
				    onSuccess: function(e) {
				        e.entity.company.load({
				            onSuccess: function(ee) {
				               sessionStorage.currentCompany=ee.entity.ID.getValue()
				           
				            }
				        })
				    }
				});
		}
		else{
			sources.company.query('ID = '+sessionStorage.currentCompany);
		}
		
		if(belongsToAdmin){
				sources.employees.query('company.ID='+sessionStorage.currentCompany);
			}
		else{
				sources.employees.query('ID="'+currentUser.ID+'" and company.ID='+sessionStorage.currentCompany);
			}
		
		component.loadComponent('/addEmp.waComponent');
		
		$$("container7").center({center : 'h'});
		
		$(window).resize(function(){$$("container7").center({center : 'h'});});
	};// @lock
	
	
	
	
	
	//useful functions
	function doAtLogIn(){
		sources.cmp.sync();
		currentUser = waf.directory.currentUser();
		checkRights();
		if(belongsToAdmin){
			addUsrBtn.show();
			selectCompany.show();
			$$('button4').hide();
		}
		else{
			if(belongsToManagers|belongsToEmployees){
				$$('container3').toggleSplitter();
				$('#container6').css('width','130px');
				$('#container4').css({'left':'130px','width':'100%'});
				if(belongsToEmployees)
					$$('button2').disable();
			}
		}
	}
	function checkRights(){
		belongsToAdmin = waf.directory.currentUserBelongsTo('Administrators');
		belongsToManagers = waf.directory.currentUserBelongsTo('Managers');
		belongsToEmployees = waf.directory.currentUserBelongsTo('Employees');
	}
	function doAtLogOut(){
		sources.cmp.sync();
		addUsrBtn.hide();
		component.hide();
		currentUser=null;
		sessionStorage.clear();
	}
	function checkAdmin(){
		if(!waf.directory.currentUserBelongsTo('Administrators')){
			var comboRole =$$(cmp+'_combobox1');
			var firstNameTxt =$$(cmp+'_textField5');
			var lastNameTxt = $$(cmp+'_textField6');
			var birthTxt = $$(cmp+'_textField7');
			var joinTxt =$$(cmp+'_textField9');
			firstNameTxt.disable();
			lastNameTxt.disable();
			birthTxt.disable();
			comboRole.disable();
			joinTxt.disable();
		}
	}
// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
