function kirimData() {
    var name = document.getElementById("nama").value
    var tanggal = document.getElementById("tanggal").value
    var album = document.getElementById("album").value
    var peminatan = document.querySelector("input[name=peminatan]:checked").value
    var alasan = document.getElementById("alasan").value

    alert(
        "Nama : " + name +
        "\nTanggal : " + tanggal +
        "\nJumlah : " + album +
        "\nHarga : " + peminatan +
        "\nAlamat : " + alasan
    )
}