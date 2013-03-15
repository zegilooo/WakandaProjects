
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
		events :
		{
			onSave:function()
			{// @endlock
				//initialization of the password
				if(!this.pwd)
					this.pwd='toto';
			}// @startlock
		},
		isManager :
		{
			events :
			{
				onInit:function(attributeName)
				{// @endlock
					this.isManager = false;
				}// @startlock
			}
		},
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
			calculateoffDays:function(userID)
			{// @lock
				var user = ds.Employees.find('ID = '+userID);
				//count how much off days are remaining for the employees
				var now = new Date();
				var joining = user.joiningDate;
				
				var diff = now.getTime()-joining.getTime();
				var offdays = Math.round(((diff)/1036800000))*(3/2);
				// max off days that can be gathered by an employee is 30 days
				var max = 30;
				
				if(now.getYear()==joining.getYear())
				{
					user.offDays = offdays;
				}
				else
				{
					if(offdays<max){
						user.offDays =offdays;
					}
					else
					{
						user.offDays = max;
					}
				}
				
				user.save();
			},// @lock
			calculateConsumptedDays:function(userID,leaveID)
			{// @lock
				var user = ds.Employees.find('ID = '+userID);
				var leave = ds.Leaves.find('ID = '+ leaveID);
				var offDays = user.offDays;
				var cons = user.consumptedDays;
				var diff = Math.round((leave.dateTo.getTime()- leave.dateFrom.getTime())/86400000);
				if(diff>0)
				{
					offDays -= diff;
					cons +=diff;
					user.consumptedDays = cons;
					user.offDays = offDays;
				}
				user.save();
				
			},// @lock
			leaveApproval:function(managerID,leaveID, approval)
			{// @lock
				var leaveToApprove = ds.Leaves.find('ID = ' + leaveID)
				if(leaveToApprove){
					leaveToApprove.approved = approval;
					leaveToApprove.approvedBy = ds.Employees.find('ID = ' + managerID).fullName;
					leaveToApprove.save();
					return true
				}
				else 
					return false;
			},// @lock
			checkEmployee:function(login,pwd,companyID)
			{// @lock
				var directoryUser = directory.user(login);
				if(directoryUser){
					directoryUser.putInto('Administrators');
					return true;
				}  
				var emp = ds.Employees.find('login = ' + login+' and pwd = '+pwd)
				if(emp){
					var company = emp.company.ID;
					if(company == companyID){
						return true;
					}
					else
					{
						 return false;
					}
				}
				else
				return false;
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
