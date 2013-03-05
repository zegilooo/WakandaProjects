function connect(login,pwd,comp){
	if(ds.Employees.checkEmployee(login, pwd, comp)){
		waf.directory.loginByPassword(login, pwd);
		if(waf.directory.currentUser()){
			if((waf.directory.currentUserBelongsTo('Administrators'))&&(!comp)){
				redirect("/companies/");
			}
			else{
				sessionStorage.currentCompany = comp;
				redirect("/main/");
			}
		}
	}
	else
	{
		alert('you are not allowed to perform this action');
	}
}
function redirect(path){
	location.href =path;
}
function cleanSession(){
	sessionStorage.clear();
}
function goHome(){
	redirect('/index/');
}