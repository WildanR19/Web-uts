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
	
	//comment
	if(form.comment.value == ""){
		alert("Anda belum memberikan komentar");
		form.comment.focus();
		return(false);
	}

	return(true);
	}

	//submit
	// var jawaban = window.confirm("Anda ingin meneruskan?");    	