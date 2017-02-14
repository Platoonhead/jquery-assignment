

setTimeout(function() {
    $("#head2").animate({left: '100%'},5000);
    $("#head4").animate({right: '100%'},5000);
}, 1200);


var bookdetails = new Array(); // array to hold book objects
$('.alert').hide();
//function to add a book detail div on addnow click
$("#inputlg").click(function(){
	var comment = 	document.getElementById('title').value;
	if(comment==""  ){
    $('.alert').fadeIn();
	}
	else{
	 bookdetails.push({cmt:comment}); //adding objects
	   //$('.alert').hide();

    $(".alert").hide("slow");

		 for(var i=bookdetails.length-1; i<bookdetails.length;i++){
		 	if(bookdetails[i]!=""){
		 	$('#all').html ($('#all').html() +  "<div id='"+i+"'class='col-md-12' style='background-color:#F7DC6F;margin-top:2%;padding:0px 0px 0px 0px;'><div class='form-group' >"+
		                      "<input class='form-control input-lg' id='title' value='"+bookdetails[i].cmt+"' readonly type='text' style='background-color:#F7DC6F;border:none;color:#138D75!important;font-size:20px;margin-top:2%;' />"+
		                      "</div>"+
		                       "<div class='form-group'>"+
		                      "<input class='form-control input-lg btn-primary'   style='background-color:#CD6155;margin-top:0%!important;border-radius:0px;box-shadow: 0  8px 20px -8px #696868;' id='de-"+i+"' type='button' value ='Delete' onclick='del(this)' />"+
		                    "</div></div>")

		                    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
		    }

		}
	}
});


//function to delete book detail div on delete click
function del(val){
var idget = val.id
var frags= idget.split("-")
var id =  frags[1]
document.getElementById(id).style.display ="none";
}



