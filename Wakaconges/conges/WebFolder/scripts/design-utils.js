function centerInPage(id){
	$$(id).center({center : 'vh'});
		$(window).resize(function(){
			$$(id).center({center : 'vh'});
		});		
}
