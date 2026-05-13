function cekStatus(){

  const invoice = document
    .getElementById("invoice")
    .value
    .trim();

  const hasil = document
    .getElementById("hasil");

  if(database[invoice]){

    hasil.innerHTML = `
      <div class="result-box">
        <h3>${database[invoice].nama}</h3>

        <p class="success">
          Status: ${database[invoice].status}
        </p>
      </div>
    `;

  } else {

    hasil.innerHTML = `
      <div class="result-box">
        <p class="error">
          Invoice Tidak Ditemukan
        </p>
      </div>
    `;

  }

}
