﻿function logIn(user,pwd){	console.log("logging using the directory login listner");		var usr = ds.Employees({		login:user,		pwd : pwd		});				if(usr==null){				return false;			}		else{				var groups=[];				if(usr.isManager){					groups =['Managers'];					}				else{					groups=['Employees'];					}								var connectTime = new Date();				return {						ID : usr.ID,						name: usr.login,						fullName : usr.fullName,						belongsTo: groups,						storage:						{							time : connectTime,							access: "Guest access"						}					};			}			}