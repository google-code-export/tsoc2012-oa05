     var loadquiz=function( key, callback) {
	      var prefix="https://docs.google.com/spreadsheet/pub?key="

		  var colunms=2;
		  var url =prefix+key;
		  var googleSpreadsheet = new GoogleSpreadsheet();
		  googleSpreadsheet.url(url);
		  googleSpreadsheet.load(function(res) {
		      //process
			  var data=res.data;
			  var resultarray=[];
			  
			  for (var i=1;i<data.length/2;i++) {
			      var obj={};
				  obj.time=data[i*2];
				  
				  obj.question=data[i*2+1];
				  
			      resultarray.push( obj);
			  }
			  
			   callback(resultarray);

	});
}