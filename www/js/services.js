// JavaScript Document
<!-- Remember me code -->
            $(function() {
 
                if (localStorage.chkbx && localStorage.chkbx != '') {
                    $('#remember_me').attr('checked', 'checked');
                    $('#username').val(localStorage.usrname);
                    $('#password').val(localStorage.pass);
                } else {
                    $('#remember_me').removeAttr('checked');
                    $('#username').val('');
                    $('#pass').val('');
                }
 
                $('#remember_me').click(function() {
 
                    if ($('#remember_me').is(':checked')) {
                        // save username and password
                        localStorage.usrname = $('#username').val();
                        localStorage.pass = $('#password').val();
                        localStorage.chkbx = $('#remember_me').val();
                    } else {
                        localStorage.usrname = '';
                        localStorage.pass = '';
                        localStorage.chkbx = '';
                    }
                });
            });
 
<!-- Remember me code -->

<!-- Global variables definition -->
$(function(){
			var operation = "A"; //"A"=Adding; "E"=Editing
			var selected_index = ‐1; //Index of the selected list item
			var tbClients = localStorage.getItem("tbClients");//Retrieve the stored dat
a
			tbClients = JSON.parse(tbClients); //Converts string to object
			if(tbClients == null) //If there is no data, initialize an empty array
			tbClients = [];
});
<!-- Global variables definition -->

<!-- Add function -->
function Add(){
		var client = JSON.stringify({
			username : $("#txtusername").val(),
		    password : $("#txtpassword").val()
		});
		tbClients.push(client);
		localStorage.setItem("tbClients", JSON.stringify(tbClients));
		alert("The data was saved.");
return true;
}
<!-- Add function -->

<!-- Edit function -->
function Edit(){
    		tbClients[selected_index] = JSON.stringify({
			username : $("#txtusername").val(),
		    password : $("#txtpassword").val()
				});//Alter the selected item on the table
			localStorage.setItem("tbClients", JSON.stringify(tbClients		));
			alert("The data was edited.")
			operation = "A"; //Return to default value
			return true;
}
<!-- Edit function -->


<!-- List function-->
function List(){
		$("#tblList").html("");
		$("#tblList").html(
				"<thead>"+
				" <tr>"+
				" <th></th>"+
				" <th>Username</th>"+
				" <th>Email</th>"+
				" </tr>"+
				"</thead>"+
				"<tbody>"+
				"</tbody>"
				);
			for(var i in tbClients){
					var cli = JSON.parse(tbClients[i]);
					$("#tblList tbody").append("<tr>"+
											   " <td
><img src='edit.png' alt='Edit"+i+"' class='btnEdit'/><img src='delete.png' alt='De
lete"+i+"' class='btnDelete'/></td>" +
												" <td
>"+cli.username+"</td>" +
												" <td
>"+cli.password+"</td>" +

												"</tr>");
}
}
<!-- List function-->

<!-- Event onSubmit of the form  -->
$("#loginform").bind("submit",function(){
			if(operation == "A")
						return Add();
		else
						return Edit();
});
<!-- Event onSubmit of the form  -->

<!-- onClick event of the edit buttons -->
$(".btnEdit").bind("click", function(){
			operation = "E";
			selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
			var cli = JSON.parse(tbClients[selected_index]);
			$("#txtusername").val(cli.ID);
			$("#txtemail").val(cli.email);
			$("#txtusername").attr("readonly","readonly");
			$("#txtName").focus();
});
<!-- onClick event of the edit buttons -->
