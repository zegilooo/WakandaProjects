function connect(login,pwd,comp){
	if(ds.Employees.checkEmployee(login, pwd, comp)){
		waf.directory.loginByPassword(login, pwd);
		
		if(waf.directory.currentUser()){
			sessionStorage.currentCompany = comp;
			redirect("/main/");
		}
	}
	else
	{
		if(waf.directory.loginByPassword(login, pwd)&&(waf.directory.currentUserBelongsTo('Administrators'))){
			redirect("/companies/");
		}
		else{
			alert('you are not allowed to perform this action');
		}
	}
}
function redirect(path){
	location.href =path;
}
function cleanSession(){
	sessionStorage.clear();
}