# LZW-13521159
## Disusun oleh
 - Sulthan Dzaky Alfaro
 - 13521159
## Penjelasan Singkat Algoritma
 1. Lempel-Ziv-Welch
    Algoritma ini berjalan dengan menggunakan kamus ASCII. Kamus ini nanti akan bertambah seiring berjalannya algoritma ini. Cara kerjanya yaitu, untuk encoding, pertama kita cek huruf pertama pada teks, misal p="c". Lalu dicek apakah "c" ini ada pada kamus, apabila ada pada kamus, maka tambah 1 huruf lagi selanjutnya misal p+c="ca". Apabila "ca" ini tidak ada pada kamus, maka "ca" ini akan dimasukkan kedalam kamus pada indeks 256 (karena indeks ASCII dari 0 sampai 255) sebagai kamus tambahan. Lalu simpan kode sementara dengan acuan indeks p, yaitu indeks "c" berada. Apabila "ca" ini ada pada kamus, maka ganti p="ca" lalu tambah huruf selanjutnya, misal p+c="cat". Jika seperti ini maka kode yang disimpan adalah indeks "ca". Lalu ulang cara tersebut untuk huruf pada c
    <br>
    <br>
    Untuk decode, pertama tama kita inisiasi kamus untuk pengecekan. Lalu kita cek kode pertama yang ingin kita decode. Apabila ada pada kamus, kita simpan misal di c. nanti c ini akan ditambahkan di hasil dan disimpan di ```string``` untuk nanti disimpan di kamus dan jaga jaga apabila nanti tidak ada di kamus. Lanjut untuk kode selanjutnya, kita ganti yang ada di c menjadi yang baru(kode selanjutnya). Apabila kode ini tidak ada pada kamus, nilai pada c baru ini  berisi ```string``` sebelumnya ditambah dengan huruf pertama dari ```string``` sendiri. Setelah itu, c ini ditambahkan di hasil dan ```string``` diupdate menjadi c baru. Untuk penambahan pada kamus, dilakukan pada kode kedua dengan indeks baru berisi ```string``` sebelum diupdate ditambah huruf pertama dari c terbaru.
    <br>
    <br>
 2. Run Length Encoding
    Algoritma ini cukup simpel, apabila ada sebuah teks dengan huruf berurtan sama, maka huruf akan disingkat menjadi berapa banyak huruf tersebut berurutan. Misal "aaabbbbcc" jadi "a3b4c2". Untuk decode cukup simpel, hanya expand huruf menjadi sebanyak angka disebelah huruf tersebut
## Cara Membuka Aplikasi
 - Untuk cara penggunaan, terlebih dahulu install node js
 - Setelah install node js, clone repository ini ke dalam folder yang kamu inginkan
 - Setelah clone repository ini, silahkan buka 2 terminal, yang satu ubah path directory ke /LZW-13521159/BE dan yang satu ke /LZW-13521159/FE/client
 - Setelah itu nyalakan backend dengan cara run command  ```npm run start``` pada terminal yang /LZW-13521159/BE
 - Setelah itu nyalakan frontend dengan cara run command  ```npm run start``` pada terminal yang /LZW-13521159/FE/client
 - Tunggu program selesai memproses
 - Aplikasi siap digunakan
 - Apabila ingin menggunakan pada web, bisa klik link [ini](https://textcomposser-sulthan.vercel.app/)
## Cara Penggunaan
 - Untuk cara penggunaan, pertama tama pilih algoritma yang ingin digunakan
 - Setelah itu apabila ingin compress teks, masukkan teks pada bagian encoder
 - Setelah memasukkan teks pada bagian encoder, pilih tipe encoder. Bisa decimal atau binary
 - Click compress. Nanti code hasil compress akan keluar pada bagian output sesuai dengan algoritma dan tipe encoder yang dipilih
 - Apabila ingin decompress code, bisa masukkan teks pada bagian decoder.
 - Masukkan code yang ingin di decode. Masukkan hanya bisa angka
 - Lalu pilih tipe decoder, bisa decimal atau binary. Tolong sesuaikan dengan input
 - Setelah itu klik decompress. Nanti teks hasil decode akan keluar pada bagian output sesuai dengan algortima dan tipe decoder yang dipilih
## Dokumentasi
 1. Tampilan Web
<img width="947" alt="tampilan" src="https://github.com/SulthanDA28/LZW-13521159/assets/110533939/f0fcc56b-32ac-4549-9c3e-acc019b5a042">


<br>

 2. Dengan algoritma LZW dengan keluaran decimal
<img width="932" alt="LZW decimal" src="https://github.com/SulthanDA28/LZW-13521159/assets/110533939/048e7e85-f121-4064-b216-34d243405fa4">


<br>

3. Dengan algoritma LZW+RLE dengan keluaran binary
<img width="940" alt="LZWRLE binary" src="https://github.com/SulthanDA28/LZW-13521159/assets/110533939/402a56e6-5c76-4193-b396-aeb51de6ebd4">




