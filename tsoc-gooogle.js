     var loadstudentresult=function( key, callback) {
	      var prefix="https://docs.google.com/spreadsheet/pub?key="

		  var colunms=6;
		  var url =prefix+key;
		  var googleSpreadsheet = new GoogleSpreadsheet();
		  googleSpreadsheet.url(url);
		  googleSpreadsheet.load(function(res) {
		      //process
			  var data=res.data;
			  var resultarray=[];
			
			  for (var i=1;i<data.length/6;i++) {
			      var obj={};
				  obj.answertime=data[i*6];
				  
				  obj.studentname=data[i*6+1];
				  obj.answer=JSON.parse( data[i*6+2]);
				  obj.timespan=data[i*6+3];
				  obj.testtime=data[i*6+4];
				  obj.stuid=data[i*6+5];
				  
			      resultarray.push( obj);
			  }
			  
			   callback(resultarray);

	});
}
		      
			
		
		  
