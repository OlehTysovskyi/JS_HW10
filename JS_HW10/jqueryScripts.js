$(document).ready(function() {

	$('#sendButton').bind('click', function() {
		let userAge = $('#userAge').val();
		
		let userData = {
			userFirstname: $('#userFirstname').val(),
			userLastname: $('#userLastname').val(),
			userAge: userAge,
			userAddress: $('#userAddress').val()
		};

		if (userAge > 0 && userAge < 100) {	
			$.ajax({
				type: 'POST',
				data: JSON.stringify({ test: 'test' }),
				contentType: 'application.JSON',
				url: "http://localhost:3000/userPost?userFirstname=" + userData.userFirstname + ";&userLastname=" 
					+ userData.userLastname + ";&userAge=" + userData.userAge + ";&userAddress=" + userData.userAddress,
				success: function(userData) {
					console.log('POST is successful');
					console.log(JSON.stringify(userData));
				}
			});
			$.ajax({
				type: 'GET',
				contentType: 'application.JSON',
				url: "http://localhost:3000/userGet?userFirstname=" + userData.userFirstname + ";&userLastname=" 
					+ userData.userLastname + ";&userAge=" + userData.userAge + ";&userAddress=" + userData.userAddress,
				success: function(userData) {
					console.log('GET is successful');
					console.log(JSON.stringify(userData));
				}
			});
		} else {
			alert("Age must be 0-100");
		}
		
	});

});

