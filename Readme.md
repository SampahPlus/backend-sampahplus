## Acces Our Deployed API
```json
[backend-api](https://backend-sampahplus-jsnkf64woq-de.a.run.app/)
```

## Endpoint Description

### End Point Knowladge Feature
Create a Knowladge Database for the feature app
end point knowledge: https://backend-sampahplus-jsnkf64woq-de.a.run.app/knowledge
#### Request Responses and Result:
- **Endpoint:** `/knowledge`
- **Method:** `POST`
- **Request Body and Result (JSON):** 
    ```json
    reponse:
    {
    "status": "success",
    "results": [
        {
            "id": 1,
            "jenis_tempat_sampah": "Tempat Sampah Hijau",
            "nama_sampah": "Sampah organik",
            "gambar_tempah_sampah": "https://storage.googleapis.com/bucket_warna_ui/hijau.png",
            "deskripsi": "seperti sampah yang dapat terurai secara hayati dan kompos.",
            "gambar_contoh": "https://storage.googleapis.com/bucket_warna_ui/hijau_bawah.png"
        },
        {
            "id": 2,
            "jenis_tempat_sampah": "Tempat Sampah Merah",
            "nama_sampah": "Sampah B3",
            "gambar_tempah_sampah": "https://storage.googleapis.com/bucket_warna_ui/merah.png",
            "deskripsi": "seperti bahan berbahaya dan beracun.",
            "gambar_contoh": "https://storage.googleapis.com/bucket_warna_ui/merah_bawah.png"
        },
        {
            "id": 3,
            "jenis_tempat_sampah": "Tempat Sampah Kuning",
            "nama_sampah": "Sampah anorganik",
            "gambar_tempah_sampah": "https://storage.googleapis.com/bucket_warna_ui/kuning.png",
            "deskripsi": "seperti plastik, kaleng, dan styrofoam.",
            "gambar_contoh": "https://storage.googleapis.com/bucket_warna_ui/kuning_bawah.png"
        },
        {
            "id": 4,
            "jenis_tempat_sampah": "Tempat Sampah Biru",
            "nama_sampah": "Sampah daur ulang",
            "gambar_tempah_sampah": "https://storage.googleapis.com/bucket_warna_ui/biru.png",
            "deskripsi": "seperti sampah kering.",
            "gambar_contoh": "https://storage.googleapis.com/bucket_warna_ui/biru_bawah.png"
        },
        {
            "id": 5,
            "jenis_tempat_sampah": "Tempat Sampah Abu-abu",
            "nama_sampah": "Sampah sisa medis",
            "gambar_tempah_sampah": "https://storage.googleapis.com/bucket_warna_ui/grey.png",
            "deskripsi": "yang tidak dapat diklasifikasikan sebagai dapat didaur ulang dan dikomposkan.",
            "gambar_contoh": "https://storage.googleapis.com/bucket_warna_ui/grey_bawah.png"
        }
    ]
    }
    ```

###  End Point Histories
Authenticates user history predict image in the app
end point histories predict: https://backend-sampahplus-jsnkf64woq-de.a.run.app/histories
#### Request Respon and Result:
- **Endpoint:** `/hitories`
- **Method:** `POST`
- **Request Body and Result (JSON):** 
    ```json
    request body: {"email": "hansel123@gmail.com"}(contoh)
    response:
    {
    "status": "success",
    "histories": {
        "user": "hansel123@gmail.com",
        "history": [
            {
                "id_history": 4,
                "email": "hansel123@gmail.com",
                "id_sampah": 6,
                "tanggal": "2024-06-16T00:00:00.000Z",
                "nama_sampah": "Plastik",
                "jenis_sampah": "Sampah Anorganik",
                "gambar": "https://recykal.com/wp-content/uploads/2023/09/2nd-blog.jpg",
                "lama_terurai": "80 Tahun"
            },
            {
                "id_history": 8,
                "email": "hansel123@gmail.com",
                "id_sampah": 6,
                "tanggal": "2024-06-16T00:00:00.000Z",
                "nama_sampah": "Plastik",
                "jenis_sampah": "Sampah Anorganik",
                "gambar": "https://recykal.com/wp-content/uploads/2023/09/2nd-blog.jpg",
                "lama_terurai": "80 Tahun"
            },
            {
                "id_history": 3,
                "email": "hansel123@gmail.com",
                "id_sampah": 9,
                "tanggal": "2024-06-16T00:00:00.000Z",
                "nama_sampah": "Organik",
                "jenis_sampah": "Sampah Organik",
                "gambar": "https://blog-static.mamikos.com/wp-content/uploads/2023/01/10-Contoh-Sampah-Organik-Basah-dan-Kering-beserta-Cara-Pengolahannya.png",
                "lama_terurai": "1 Bulan"
            },
            {
                "id_history": 9,
                "email": "hansel123@gmail.com",
                "id_sampah": 9,
                "tanggal": "2024-06-16T00:00:00.000Z",
                "nama_sampah": "Organik",
                "jenis_sampah": "Sampah Organik",
                "gambar": "https://blog-static.mamikos.com/wp-content/uploads/2023/01/10-Contoh-Sampah-Organik-Basah-dan-Kering-beserta-Cara-Pengolahannya.png",
                "lama_terurai": "1 Bulan"
            }
        ]
    }
    }
    ``

### End Point PredictImage
Create a model predict database for the feature app
end point predict model : https://backend-sampahplus-jsnkf64woq-de.a.run.app/predict?image 
#### Request Respon and Result:
- **Endpoint:** `/predict?image`
- **Method:** `POST`
- **Request Body and Result (JSON):** 
    ```json
    image = file gambar
    email = user dr firebase

    response:
    {
    "status": "success",
    "message": "Berhasil Prediksi Sampah",
    "label": "Plastik",
    "results": {
        "category": {
            "id_sampah": 6,
            "nama_sampah": "Plastik",
            "jenis_sampah": "Sampah Anorganik",
            "gambar": "https://recykal.com/wp-content/uploads/2023/09/2nd-blog.jpg",
            "lama_terurai": "80 Tahun"
        },
        "recommendations": [
            {
                "id_rekomendasi": 26,
                "id_sampah": 6,
                "nama_rekom": "Tas Belanja Serbaguna",
                "harga": "Rp30000",
                "gambar": "https://storage.googleapis.com/bucket_rekom_resize/bucket_rekomen_resize/kantongPlastik1.jpeg",
                "langkah_pembuatan": "Bahan:\r\n\r\nBeberapa tas plastik/kresek bekas (pilih yang kokoh dan tidak mudah robek)\r\nGunting\r\nJarum jahit\r\nBenang\r\nHiasan (pita, manik-manik, kancing, dll)\r\nTahapan:\r\n\r\nPotong tas plastik/kresek menjadi lembaran-lembaran tipis. Pastikan potongan-potongan tersebut memiliki lebar yang sama.\r\nSatukan lembaran-lembaran tas plastik/kresek dengan cara dijahit. Gunakan jahitan tangan atau mesin jahit, tergantung pada keahlian Anda.\r\nBentuk potongan-potongan yang telah dijahit menjadi bentuk tas yang diinginkan. Anda dapat membuat tas tote bag, sling bag, atau bentuk lainnya.\r\nPasang tali atau pegangan pada tas. Anda dapat menggunakan tali kain, tali kulit, atau tali yang terbuat dari tas plastik/kresek lainnya.\r\nHiasi tas dengan pita, manik-manik, kancing, atau bahan lainnya. Gunakan kreativitas Anda untuk membuat dekorasi yang menarik."
            },
            {
                "id_rekomendasi": 27,
                "id_sampah": 6,
                "nama_rekom": "Lampu Hias Plastik",
                "harga": "Rp20000",
                "gambar": "https://storage.googleapis.com/bucket_rekom_resize/bucket_rekomen_resize/kantongPlastik2.jpg",
                "langkah_pembuatan": "Bahan:\r\n\r\nBotol/Wadah Plastik\r\nAlat Hias (Stiker dan lain- lain)\r\nCutter\r\nLampu LED\r\n\r\nTahapan:\r\n\r\n\r\n- Pilih jenis plastik yang cocok untuk dijadikan lampu hias, seperti botol atau wadah plastik yang transparan atau memiliki karakteristik yang menarik untuk didekorasi.\r\n\r\n- Bersihkan dan potong plastik sesuai dengan desain yang diinginkan untuk lampu hias. Misalnya, potong bagian-bagian yang diperlukan seperti bagian atas atau bawah botol untuk menciptakan bentuk yang unik.\r\n\r\n- Anda dapat melukis atau mendekorasi plastik dengan cat, stiker, atau bahan dekoratif lainnya sesuai dengan tema atau gaya yang Anda inginkan.\r\nGunakan imajinasi kreatif Anda untuk menciptakan pola atau desain yang menarik untuk lampu hias.\r\n\r\nPasang lampu LED atau sumber cahaya lainnya di dalam atau di sekitar bagian plastik yang telah dipersiapkan. Pastikan untuk memilih lampu yang sesuai dengan ukuran dan bentuk lampu hias yang Anda buat.\r\n\r\n- Rapatkan semua bagian lampu hias dan pastikan komponen lampu berfungsi dengan baik.\r\nUji lampu hias untuk memastikan cahaya tersebar dengan merata dan tidak ada masalah lain yang perlu diperbaiki.\r\n\r\n- Setelah selesai, kemas lampu hias dengan aman untuk melindunginya selama pengiriman atau penyimpanan.\r\nTempatkan lampu hias di tempat yang strategis dalam rumah atau tempat kerja untuk menambah suasana."
            },
            {
                "id_rekomendasi": 28,
                "id_sampah": 6,
                "nama_rekom": "Tiker Sederhana",
                "harga": "Rp17500",
                "gambar": "https://storage.googleapis.com/bucket_rekom_resize/bucket_rekomen_resize/kantongPlastik3.jpeg",
                "langkah_pembuatan": "Bahan:\r\n\r\nBanyak tas plastik/kresek bekas (pilih yang kokoh dan tidak mudah robek)\r\nGunting\r\nJarum jahit\r\nBenang\r\nTahapan:\r\n\r\nPotong tas plastik/kresek menjadi lembaran-lembaran tipis. Pastikan potongan-potongan tersebut memiliki lebar yang sama.\r\nSatukan lembaran-lembaran tas plastik/kresek dengan cara dijahit. Gunakan jahitan tangan atau mesin jahit, tergantung pada keahlian Anda.\r\nBentuk potongan-potongan yang telah dijahit menjadi bentuk tikar yang diinginkan. Anda dapat membuat tikar bulat, tikar persegi, atau bentuk lainnya.\r\nJahit bagian pinggiran tikar agar rapi."
            },
            {
                "id_rekomendasi": 29,
                "id_sampah": 6,
                "nama_rekom": "Wadah Pernak Pernik",
                "harga": "Rp7500",
                "gambar": "https://storage.googleapis.com/bucket_rekom_resize/bucket_rekomen_resize/kantongPlastik4.jpeg",
                "langkah_pembuatan": "Bahan:\r\n\r\nTas plastik/kresek bekas (pilih yang kokoh dan tidak mudah robek)\r\nKertas kado atau kain perca\r\nLem tembak\r\nGunting\r\nHiasan (pita, manik-manik, kancing, dll)\r\nTahapan:\r\n\r\nPotong tas plastik/kresek menjadi lembaran-lembaran tipis. Pastikan potongan-potongan tersebut memiliki lebar yang sama.\r\nSatukan lembaran-lembaran tas plastik/kresek dengan cara dijahit. Gunakan jahitan tangan atau mesin jahit, tergantung pada keahlian Anda.\r\nBentuk potongan-potongan yang telah dijahit menjadi bentuk wadah yang diinginkan. Anda dapat membuat wadah kotak, bulat, atau bentuk lainnya.\r\nLapisi wadah dengan kertas kado atau kain perca. Gunakan lem tembak untuk merekatkannya.\r\nHiasi wadah dengan pita, manik-manik, kancing, atau bahan lainnya.\r\nGunakan wadah untuk menyimpan pernak-pernik seperti pena, pensil, kosmetik, atau aksesoris lainnya"
            },
            {
                "id_rekomendasi": 30,
                "id_sampah": 6,
                "nama_rekom": "Bunga Hias Plastik",
                "harga": "Rp12500",
                "gambar": "https://storage.googleapis.com/bucket_rekom_resize/bucket_rekomen_resize/kantongPlastik5.jpg",
                "langkah_pembuatan": "Bahan:\r\n\r\nTas plastik/kresek bekas (pilih yang berwarna-warni)\r\nGunting\r\nLilin\r\nKawat\r\nManik-manik (opsional)\r\nTahapan:\r\n\r\nPotong tas plastik/kresek menjadi bentuk kelopak bunga. Anda dapat membuat berbagai bentuk kelopak bunga sesuai keinginan.\r\nPanaskan ujung lilin dan bakar kelopak bunga plastik dengan hati-hati. Pastikan api tidak terlalu besar agar plastik tidak meleleh dan terbakar.\r\nBentuk kelopak bunga yang telah dibakar agar melengkung seperti bunga asli.\r\nSusun kelopak bunga plastik menjadi bentuk bunga yang diinginkan. Anda dapat menggunakan lem tembak untuk merekatkannya.\r\nPasang kawat pada bagian bawah bunga sebagai batang.\r\n(Opsional) Hiasi bunga dengan manik-manik atau bahan lainnya"
            }
        ]
    }
    }
    ```

### End Point History Result Detail History
Authenticates user credentials and generates an access token.
end point History Result Detail History predict: https://backend-sampahplus-jsnkf64woq-de.a.run.app/getData/:id_sampah
#### Request Respon and Result:
- **Endpoint:** `/predict?image`
- **Method:** `GET`
- **Request Body and Result (JSON):** 
    ```json
    response:
    {
    "status": "success",
    "results": {
        "category": {
            "id_sampah": 9,
            "nama_sampah": "Organik",
            "jenis_sampah": "Sampah Organik",
            "gambar": "https://blog-static.mamikos.com/wp-content/uploads/2023/01/10-Contoh-Sampah-Organik-Basah-dan-Kering-beserta-Cara-Pengolahannya.png",
            "lama_terurai": "1 Bulan"
        },
        "recommendations": [
            {
                "id_rekomendasi": 41,
                "id_sampah": 9,
                "nama_rekom": "Kompos dari Sisa Makanan",
                "harga": "Rp5.000",
                "gambar": "https://storage.googleapis.com/bucket_rekom_resize/bucket_rekomen_resize/organik1.jpg",
                "langkah_pembuatan": "Persiapan: Pilih lokasi yang teduh untuk membuat tumpukan kompos atau gunakan wadah komposter.\r\nLapisan Dasar: Letakkan lapisan bahan kering seperti daun kering atau serbuk gergaji di dasar komposter.\r\nTambahkan Sisa Makanan: Tambahkan sisa makanan organik seperti sayuran, buah, dan kulit telur.\r\nLapisan Berlapis: Tambahkan lapisan bahan kering setiap kali menambahkan sisa makanan. Hal ini membantu aerasi dan mencegah bau.\r\nPengadukan: Aduk tumpukan kompos setiap 2-3 hari untuk mempercepat proses dekomposisi.\r\nPenyiraman: Jaga kelembapan kompos dengan menyiram jika terasa kering.\r\nPematangan: Setelah 2-3 bulan, kompos akan berubah menjadi tanah yang gelap dan kaya nutrisi. Kompos siap digunakan untuk tanaman."
            },
            {
                "id_rekomendasi": 42,
                "id_sampah": 9,
                "nama_rekom": "Pupuk Cair dari Limbah Dapur",
                "harga": "Rp10.000",
                "gambar": "https://storage.googleapis.com/bucket_rekom_resize/bucket_rekomen_resize/organik2.jpg",
                "langkah_pembuatan": "Persiapan: Potong kecil-kecil kulit buah dan sayuran sisa.\r\nFermentasi: Masukkan potongan kulit dan sayuran ke dalam wadah, tambahkan air secukupnya hingga terendam.\r\nPenambahan Gula: Tambahkan gula merah atau molase untuk membantu proses fermentasi.\r\nPenyimpanan: Tutup wadah dan biarkan selama 2 minggu. Aduk setiap beberapa hari.\r\nPenyaringan: Setelah 2 minggu, saring cairan dan simpan dalam botol.\r\nPenggunaan: Encerkan pupuk cair dengan air dengan perbandingan 1:10 sebelum digunakan untuk menyiram tanaman."
            },
            {
                "id_rekomendasi": 43,
                "id_sampah": 9,
                "nama_rekom": "Eco-Enzyme dari Sisa Buah dan Sayuran",
                "harga": "Rp15.000",
                "gambar": "https://storage.googleapis.com/bucket_rekom_resize/bucket_rekomen_resize/organik2.jpg",
                "langkah_pembuatan": "Persiapan: Siapkan wadah besar yang dapat ditutup rapat.\r\nPenambahan Bahan: Masukkan 1 bagian gula merah, 3 bagian sisa buah dan sayuran, dan 10 bagian air ke dalam wadah.\r\nFermentasi: Tutup wadah dan simpan di tempat yang teduh. Aduk campuran setiap hari selama 1 minggu pertama.\r\nPengadukan Rutin: Setelah minggu pertama, aduk campuran setiap minggu.\r\nPematangan: Setelah 3 bulan, saring eco-enzyme dan simpan dalam botol.\r\nPenggunaan: Gunakan eco-enzyme sebagai pembersih serbaguna atau pupuk cair dengan mencampurkannya dengan air."
            },
            {
                "id_rekomendasi": 44,
                "id_sampah": 9,
                "nama_rekom": "Pakan Ternak dari Limbah Sayuran",
                "harga": "Rp20.000",
                "gambar": "https://storage.googleapis.com/bucket_rekom_resize/bucket_rekomen_resize/organik4.jpg",
                "langkah_pembuatan": "Persiapan: Potong-potong sisa sayuran dan daun singkong.\r\nPengeringan: Jemur potongan sayuran dan daun di bawah sinar matahari hingga kering.\r\nPenggilingan: Giling bahan yang sudah kering hingga menjadi tepung atau serpihan kasar.\r\nPenyimpanan: Simpan pakan ternak kering dalam wadah kedap udara.\r\nPemberian Pakan: Berikan pakan kering ini kepada ternak sebagai tambahan nutrisi."
            },
            {
                "id_rekomendasi": 45,
                "id_sampah": 9,
                "nama_rekom": "Briket Arang dari Ampas Kopi",
                "harga": "Rp10.000",
                "gambar": "https://storage.googleapis.com/bucket_rekom_resize/bucket_rekomen_resize/organik3.jpg",
                "langkah_pembuatan": "Pengeringan: Keringkan ampas kopi dengan menjemurnya di bawah sinar matahari.\r\nPencampuran: Campurkan ampas kopi kering dengan tepung kanji sebagai perekat dengan perbandingan 4:1.\r\nPembuatan Adonan: Tambahkan air sedikit demi sedikit hingga adonan bisa dipadatkan.\r\nPencetakan: Cetak adonan dalam bentuk briket menggunakan cetakan khusus atau bentuk bulat dengan tangan.\r\nPengeringan Briket: Jemur briket di bawah sinar matahari hingga benar-benar kering.\r\nPenggunaan: Briket siap digunakan sebagai bahan bakar alternatif untuk memasak atau pemanas."
            }
        ]
    }
    }
    ```

-----------------------------------------------------------------------

## Preparation and Prerequisites

### Setting Up the Project in Google Cloud

1. **Creating a Project in Google Cloud**
    - Open [Google Cloud Console](https://console.cloud.google.com/).
    - Create a new project (sampahplus).

2. **Generating a authentication for user in Identity Platform**
    - Access [Identity Platform](https://console.cloud.google.com/IdentityPlatform)
    - Go to **Providers > Add Providers** in IdentityPlatform.
    - Create a Providers and store it in firebase authentication projek (sampahplus).

3. **Accessing Firebase Android App Configuration**
    - Go to your Firebase project's overview.
    - Add or create a android app.
    - Access the android and copy the `google-services` value.
    - Then input in the Manifest in Android Studio (MD Path)
    ```json

    "project_info": {
    "project_number": "658246204115",
    "project_id": "sampahplus",
    "storage_bucket": "sampahplus.appspot.com"
    },
    "client": [
    {
      "client_info": {
        "mobilesdk_app_id": "1:658246204115:android:accb526b10ec45feee7226",
        "android_client_info": {
          "package_name": "com.sampahplus"
        }
      },
      "oauth_client": [],
      "api_key": [
        {
          "current_key": " "
        }
      ],
      "services": {
        "appinvite_service": {
          "other_platform_oauth_client": []
        }
      }
    }
    ],
    "configuration_version": "1"
    ```
--------------------------------------------------------------

### Configuration for Cloud Storage

1. **Creating a Model Bucket and Backend Bucket in Cloud**
    - Create a Model Bucket as `model-sampahplus`
    - Create a Backend Bucket as `backend-sampahplus` which contains .env
    - Create a Image Bucket as `bucket_rekomen_resize` which contains all image for the API

2. **Setting Bucket Access**
    - Grant the storage allUser role to the service account in the created bucket, then bucket will public.

### Authenticate to Cloud SDK for Deploying 
For run the application locally and test in postman

1. **Installing Google Cloud SDK**
    - Install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install)
    - Open IDE then use WSL terminal, and install the Cloud SDK

2. **Logging into Google Cloud**
    - Run the following command for authentication:
    - Then use the KEY and copy it in the terminal in IDE, then wait untill finish
    - After finish we can run the application locally and deploy in the CLoud Run

---------------------------------------------------------

## Running the Application Locally

1. **Running the API Application**
    - Update the run configuration in `server.js`:

```bash
const initServer = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 8081,
    host: "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
});

  try {
    const model = await loadModel();
    server.app.model = model;
    server.app.classIndices = classIndices;
} catch (error) {
    console.error("Error loading model:", error);
    process.exit(1);
  }

  server.route(routes);
  server.ext("onPreResponse", (request, h) => {
    const response = request.response;

    if (response instanceof InputError) {
      const newResponse = h.response({
        status: "fail",
        message: response.message,
      });
      newResponse.code(response.statusCode);
      return newResponse;
    }

    if (response.isBoom) {
      const newResponse = h.response({
        status: "fail",
        message: response.message,
      });
      newResponse.code(response.output.statusCode);
      return newResponse;
    }

    return h.continue;
  });

  await server.start();
  console.log(`Server started at: ${server.info.uri}`);
};
initServer();
```

        
2. **Starting the Local Server**
```bash
 npm run start
```

---------------------------------------------------------------------

### Testing With Postman
- View Postman: `http://localhost:8081/predict` in postman test

---------------------------------------------------------------------
## Deploying the Application to Cloud Run
```bash
1. The first step to deploy cloud run through the terminal IDE is to delete the modules node in the project.
2. The second step is to create a dockerfile, details as follows
    FROM node:20
    WORKDIR /app
    ENV PORT 8081
    COPY . .
    RUN npm install
    EXPOSE 8081
    CMD [`npm`,`run`,`start:dev`]

3. Our third step is to create a .dockerignore file,detail as follows
    node_modules
4. Then the fourth step is to deploy through the WSL terminal in our IDE. Detail as follows
        gcloud run deploy
    => then input the service name of our project (backend-sampahplus)
    => after input tge service name, then enable the API for cloud run
    => after that choose the region and zone for the deploy our sevrice (asia-east1)
    => then wait until process finish
    => after finish will appear a URL for our services (https://backend-sampahplus-jsnkf64woq-de.a.run.app)
```
## Developer
- [Daniel Hansel Christiawan](https://github.com/DanielHC092)
- [Gaharu Winanggya Binathara](https://github.com/arugaharu)
