
guidedModel =// @startlock
{
	Leaves :
	{
		approved :
		{
			events :
			{
				onInit:function(attributeName)
				{// @endlock
					return this.approved = false;
				}// @startlock
			}
		}
	},
	Employees :
	{
		login :
		{
			onGet:function()
			{// @endlock
				var tmp = this.lastName.split(" ");
				var name=''
				for(var i=0; i<tmp.length;i++)
					name+='.'+tmp[i].toLowerCase();
				return this.firstName.toLowerCase()+name;
			}// @startlock
		},
		methods :
		{// @endlock
			leaveApproval:function(managerID,leaveID, approval)
			{// @lock
				var leaveToApprove = ds.Leaves.find('ID = ' + leaveID)
				if(leaveToApprove){
					leaveToApprove.approved = approval;
					leaveToApprove.approvedBy = ds.Employees.find('ID = ' + managerID).fullName;
					return leaveToApprove.save();
				}
			},// @lock
			checkEmployee:function(login,pwd,companyID)
			{// @lock
				var directoryUser = directory.user(login);
				if(directoryUser){
					directoryUser.putInto('Administrators');
					return true;
				}  
				var emp = ds.Employees.find('login = ' + login+' and pwd = '+pwd)
				var company = emp.company.ID;
				if(company == companyID){
					return true;
				}
				else
				{
					 return false;
				}
			},// @lock
			uploadPrg:function(size)
			{// @lock

				var prog = ProgressIndicator(size, "Processing element {curValue} out of {maxValue}", true, "", "uploadProgress");
				var s = "" ;
				for (var i = 1; i  < size; i++)
				{
				    if (prog.setValue(i))
				    {
				        s += i;
				    } 
				    else
				        break; 
				}
				prog.endSession();
			}// @startlock
		},
		fullName :
		{
			onGet:function()
			{// @endlock
				return this.firstName+" "+this.lastName;
			}// @startlock
		}
	}
};// @endlock
