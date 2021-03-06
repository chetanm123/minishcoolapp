 Template.addTeachers.events({
	  'submit form#addTeacherForm':function(theEvent,theTemplate){
		  theEvent.preventDefault();
		  Meteor.flush();
		  var teacherName = theTemplate.find("#teacherName").value;
		  var username=theTemplate.find("#username").value;
		  var password=theTemplate.find("#pwd").value;
		  /*SchoolObj.update(
			{_id:this._id},
			{$addToSet:{teachers:{uId:Date.now(),username:username,password:password}}}
		  );*/
		  Accounts.createUser({
			  username:username,
			  password:password,
			  profile:{
				  name:teacherName,
				  teacherId:Date.now(),
				  schoolId:this._id
			  }
			  
		  },function(err){
				  if(err){
					  console.log("Error while adding user " + err);
				  }
				  else{
					 console.log("Added successfully");
				  }
				  
			  });
		Session.set('addTeachers',false);
	  }
  });