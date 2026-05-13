async function cekStatus(){

  const invoice = document
    .getElementById("invoice")
    .value
    .trim();

  const hasil = document
    .getElementById("hasil");

  const loadingBox = document
    .getElementById("loadingBox");

  hasil.innerHTML = "";
  loadingBox.innerHTML = "";

  const steps = [
    "🔍 Mengecek kode invoice...",
    "🧾 Mengecek ID customer...",
    "📦 Mengecek proses pengerjaan...",
    "👥 Mengecek tim produksi..."
  ];

  for(let i = 0; i < steps.length; i++){

    loadingBox.innerHTML += `
      <div class="loading-step">
        ${steps[i]}
      </div>
    `;

    await new Promise(resolve =>
      setTimeout(resolve, 1000)
    );

  }

  loadingBox.innerHTML = "";

  if(database[invoice]){

    hasil.innerHTML = `
      <div class="result-box">

        <h3>
          ✅ Invoice ditemukan
        </h3>

        <br>

        <p>
          Customer:
          ${database[invoice].nama}
        </p>

        <br>

        <p class="success">
          Status:
          ${database[invoice].status}
        </p>

        <br>

        <small>
          Status telah masuk ke database kami
        </small>

      </div>
    `;

  } else {

    hasil.innerHTML = `
      <div class="result-box">

        <p class="error">
          ⚠️ Invoice belum masuk ke database,
          mungkin membutuhkan beberapa saat.
        </p>

      </div>
    `;

  }

}
