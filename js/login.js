var kesempatan = 3; // kesempatan untuk login hanya 3x berturut-turut

		// function untuk ketika menekan submit 
		function validate() {

			var username = document.getElementById('username').value;
			var password = document.getElementById('password').value;

		if (username == '' && password == 'admin') {
			alert('Login Berhasil');
			window.location = "post.html"; // setelah berhasil akan mengakses pada halaman yg dituju
			return false;
		} else {
			kesempatan --;
			alert('Kamu mempunyai '+kesempatan+' kesempatan');

			if (kesempatan == 0) {
				document.getElementById('username').disabled = true;
				document.getElementById('password').disabled = true;
				document.getElementById('submit').disabled = true;
				return false;

			}
		}
	}
