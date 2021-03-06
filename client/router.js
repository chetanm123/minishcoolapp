Router.configure({
	layoutTemplate:'layout'
});
Router.map(function(){
	this.route('loginTeacherForm',{path:"/loginTeacherForm"});
	this.route('adminLogin',{
		path:"/",
		onBeforeAction:function(){
			if(!Meteor.user()){
				if(Meteor.loggingIn()){
					Router.go('/schoolList');	
				}
				else{
					
					Router.go("/");
				}
			}	
		}
	});

	this.route('schoolList',{
		path:"/schoolList",
		data: function() {	
		templateData = { 
			schools: SchoolObj.find({}),
			teacherDroplist:Meteor.users.find({"profile.schoolId":Session.get("allocateTeachers")})
			
		};
			return templateData;
		}	
	});

	this.route('viewClasses',{
		path:"/viewClasses",
		data:function(){
			
			classData={
				viewClasses:SchoolObj.findOne({_id:Session.get('viewClasses')})
			};
			
			return classData;
		}
	});

});


