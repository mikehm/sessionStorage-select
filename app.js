
$(document).ready(function(){

	var $select = $('select'), arr = [], data_val, value;
	
	for(var key in sessionStorage){
		arr.push(sessionStorage[key]);
	}

	for(var i=0, j=0; i < arr.length, j < $select.length; i++, j++){
		$div = $('<div></div>').text(arr[i]);

		 $($select[j]).append($div);
		 $select[j].value = arr[i];
	}

	$select.each(function(i, item){

		for(var i = 0; i < $(this).length; i++){
		
			var xyz = $($(this)[i]).find('div');
			console.log('xyz',$(xyz[0]).text());
		}

	})


	$select.change(function(){

		value = $(this).val();
		var $this = $(this);
		console.log('anc', $this.find('div'));

		var divArr = $this.find('div');
 

		for(var i = 0; i < $this.length; i++){	
			data_val = $this[i].attributes[0].nodeValue;
			sessionStorage.setItem(data_val, value);
		}
	})

})