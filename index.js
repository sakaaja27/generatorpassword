let PanjangPassword = document.getElementById("PanjangPassword")
let Password = document.getElementById("Password")


// len itu parameter
// ~~ ini adalah simbol math.floor yg berfungsi untuk mengepaskan dari math.random
// generator += data[~~(Math.random() * data.length)] (ini bacanya yaitu 
// variabel generator akan menampung panjang value yg dikirim dari function getPassword tadi dan di proses di for
// atau perulangan dimana += data[~~(Math.random() * data.length)] itu untuk membuat value random dari variabel data
// dan di kali kan dengan panjang keseluruhan variabel data (data.length)
function generatePassword(len) {
    const hurufKecil = "abcdefghijklmnopqrstuvwxyz"
    const hurufBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const angka = "0123456789"
    const simbol = "!@#$%^&*()?<>,.:;"
    const data = hurufKecil + hurufBesar + angka + simbol
    let generator = ''
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)]
    }
    return generator

}

// variabel newPassowrd menampung value dari function generatePassword yg dibuat tdi
// Password.value = newPassword itu bacanya => nilai dari variabel Password diisi dg nilai dari variabel neewPassword
function getPassword() {
   const newPassword =  generatePassword(PanjangPassword.value)
   Password.value = newPassword
   alert('password di generate')
}

function savePassword() {
    
}