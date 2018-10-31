function validasi_input(form){
	//kosong
	if(form.username.value == ""){
		alert("Username Masih Kosong");
		form.username.focus();
		return(false);
	}			

	//char min 5
	var mincar=5;
	if(form.username.value.length < mincar){
		alert("Panjang Username Minimal 5 Karakter!");
		form.username.focus();
		return(false);
	}

	//pola username
	pola_username=/^[a-zA-Z0-9\_\-]{5,100}$/;
	if(!pola_username.test(form.username.value)){
		alert("Username Minimal 5 Karakter dan Hanya Boleh Huruf atau Angka!");
		form.username.focus();
		return(false);
	}

	//password
	if(form.password.value == ""){
		alert("Password Anda Masih Kosong !");
		form.password.focus();
		return(false);
	}
	var minpas=6;
	if(form.password.value.length < minpas){
		alert("Panjang Password Minimal 6");
		form.password.focus();
		return(false);
	}

	//jenis kelamin
	function check_radio(radio) {
			for(i=0; i < radio.length; i++)
			{
				if(radio[i].checked === true)
					{
						return radio[i].value;
					}
			}
		return false;
	}
	var radio_val=check_radio(form.jk);
	if(radio_val===false)
	{
		alert("Anda Belum Memilih Jenis Kelamin");
		return false;
	}

	//agama
	if (form.agama.value == "pilih") {
				alert("Anda belum memilih Agama!");
				return(false);
	}

	//telepon
	if (form.telp.value != ""){
		var x = (form.telp.value); 
		var status = true; 
		var list = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9"); 
		for (i=0; i<=x.length-1; i++) 
		{
			if (x[i] in list) cek = true; 
			else cek = false; 
			status = status && cek; 
		}
	if (status == false) 
	{
	alert("Telepon hanya angka!"); 
	form.telp.focus(); 
	return false;
	}
	

	//email
	if(form.email.value == ""){
		alert("Email Masih Kosong");
		form.email.focus();
		return(false);
	}
	pola_email=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,4}$/;
	if (!pola_email.test(form.email.value)) {
		alert ('Penulisan Email Tidak Benar');
		form.email.focus();
		return false;
	}	

	return(true);
	}


	
	    	