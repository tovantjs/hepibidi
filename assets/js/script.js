const btnPlay = document.querySelector('#button .mulai')
const messege = document.querySelector('.messege-box')
const messege1 = document.querySelector('.messege-box1')
const messege2 = document.querySelector('.messege-box2')
const messege2P = document.querySelector('.messege-box2 .pesan p')
const hilang1 = document.querySelector('.hilang1')
const hilang2 = document.querySelector('.hilang2')
const nama = document.querySelectorAll('.nama h2')[0]
const nama1 = document.querySelectorAll('.nama h2')[1]
const waktu = document.getElementById('waktu')
const jam = waktu.querySelector('h1')
const hari = waktu.querySelector('p')
const bg1 = document.querySelector('.background1')
const bg2 = document.querySelector('.background2')
const body = document.querySelector('.body')
const audio = document.querySelector('.audio')

body.classList.add('background1')

const date = new Date()
const hour = String(date.getHours()).padStart(2, '0')
const minutes = String(date.getMinutes()).padStart(2, '0')
const day = date.getDay()
const tgl = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()

hari.innerHTML = `${dayID()}, ${tgl} ${monthID()} ${year}`
jam.innerHTML = `${hour}:${minutes}`

// Dirubah 
const pengirim = "Baginda Raja♡";
const nomorWa = "6283894930213" // awalan nomor 0 harus di awalin 62
const textWa = "Balesnya call wa aja yaa wkwkwk klik aja itu🤭"

if (pengirim) {
  nama.innerHTML = pengirim;
  nama1.innerHTML = pengirim;
} else {
  nama.innerHTML = "Nama Kamu";
  nama1.innerHTML = "Nama Kamu";
}

btnPlay.addEventListener('click', () => {
  audio.play()
  messege1.style.display = "block";
  messege1.style.transform = "translateX(0)"
  btnPlay.style.display = "none";
  hilang1.style.display = "block";
})

hilang1.addEventListener('click', () => {
  messege1.style.display = "none";
  messege2.style.transform = "translateX(0)"
  hilang1.style.display = "none"
  hilang2.style.display = "block"
  Swal.fire({
    imageUrl: "/assets/img/stiker_mylove.gif",
    imageHeight: 120,
    title: 'Penasaran ga isinya apa?',
    html: `<input type="text" id="login" class="swal2-input" placeholder="Ketik disini...">`,
    confirmButtonText: 'Kirim',
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector('#login').value
      if (!login) {
        Swal.showValidationMessage(`Ih ayang jangan dikosongin😠`)
      }
      return { login }
    }
  }).then((result) => {
    let i = 0;
    const speed = 50;
    let txt = `Hallo cantik, aku gabut gess. Ini coba-coba lagi belajar coding wkwkwk dan lewat pesan ini aku mau bilang "Ayang semangat belajarnya yaa, semoga dilancarin testnya, persiapannya harus mateng. Tapi jangan dipaksain, harus ada waktu istirahatnya juga yaaa😚" `;

    const typeWriter = () => {
      if (i < txt.length) {
        messege2P.innerHTML += txt.charAt(i);
        i++;
        messege2.classList.remove('kelip')
        hilang2.style.display = "none"
        setTimeout(typeWriter, speed)
      } else {
        messege2.classList.add('kelip')
        body.classList.replace('background1', 'background2')
        body.classList.add('muncul')
        hilang2.style.display = "block"
      }
    }
    typeWriter()


  })
})

hilang2.addEventListener('click', () => {
  window.open(`https://wa.me/${nomorWa}/?text=${textWa}`, '_blank')
})

