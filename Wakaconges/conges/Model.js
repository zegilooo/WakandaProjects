
guidedModel =// @startlock
{
	Employees :
	{
		login :
		{
			onGet:function()
			{// @endlock
				var tmp = this.lastName.split(" ");
				var name=''
				for(var i=0; i<tmp.length;i++)
					name='.'+tmp[i].toLowerCase();
				return this.firstName.toLowerCase()+name;
			}// @startlock
		},
		methods :
		{// @endlock
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
