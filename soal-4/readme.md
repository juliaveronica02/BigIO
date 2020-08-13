* users untuk register harus mengisi field (Username, email, lokasi, nomor_telepon dan password) agar bisa login dan username serta nomor_telepon termasuk unique karena tidak akan ada yang sama.
* setelah selesai register users menekan login akan ada role_id yang diambil dari table roles untuk tau apakah dia sales atau customer dan di dalam login harus memasukkan username dan password yang sudah dibuat.
* didalam roles terdapat jenis-jenis dan deskripsi untuk tau apa saja tugas2nya
* jika dia customer maka akan mempunyai data nama, nomor_telepon, email dan password untuk mempermudah sales menghubungi mereka.
* sales memiliki nama agar customer dapat menghubungi mereka sewaktu-waktu, deskripsi pekerjaan dan shift mereka.
* sales mempunyai data payment yang terdiri dari deskripsi apa yang telah customer bayar dan apa yang belum lunas, tanggal pembayaran, memiliki customer id untuk mengetahui identitas customer dan inventory_id sebagai detail barang yang telah dibeli.
* didalam inventory memiliki deskripsi, list barang yang sudah dibeli oleh customer dan jenis barang tersebut.