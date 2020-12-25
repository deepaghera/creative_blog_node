document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);

// NOTE: conform password validation
document.querySelector('#r_btn').addEventListener('click', function(event)
{
	//event.preventDefault()
	var pass = document.querySelector('#r_pass').value;
	var c_pass = document.querySelector('#r_cpass').value;
	if (pass === c_pass) {
		event.currentTarget
	}
	else {
		event.preventDefault()
		document.querySelector('.p_err').style.visibility = 'visible'
	}
	console.log(pass,c_pass);
});