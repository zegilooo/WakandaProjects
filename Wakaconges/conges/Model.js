
guidedModel =// @startlock
{
	Employees :
	{
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
