const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("==================================");
console.log("       PROGRAM HITUNG DISKON");
console.log("==================================");

console.log("\nDaftar Barang:");
console.log("1. Buku       - Rp20.000");
console.log("2. Pulpen     - Rp10.000");
console.log("3. Tas        - Rp80.000");
console.log("4. Sepatu     - Rp150.000");
console.log("5. Jaket      - Rp200.000");

let totalBelanja = 0;
let jumlahInput = 0;

function pilihBarang() {
    rl.question("\nPilih nomor barang (1-5), atau 0 untuk selesai: ", function(pilihan) {

        pilihan = parseInt(pilihan);

        if (pilihan === 0) {

            if (jumlahInput < 3) {
                console.log("\nMinimal harus membeli 3 barang!");
                pilihBarang();
                return;
            }

            hitungDiskon();

        } else {

            let harga = 0;
            let namaBarang = "";

            switch (pilihan) {
                case 1:
                    namaBarang = "Buku";
                    harga = 20000;
                    break;

                case 2:
                    namaBarang = "Pulpen";
                    harga = 10000;
                    break;

                case 3:
                    namaBarang = "Tas";
                    harga = 80000;
                    break;

                case 4:
                    namaBarang = "Sepatu";
                    harga = 150000;
                    break;

                case 5:
                    namaBarang = "Jaket";
                    harga = 200000;
                    break;

                default:
                    console.log("Pilihan barang tidak tersedia!");
                    pilihBarang();
                    return;
            }

            rl.question(`Jumlah ${namaBarang} yang dibeli: `, function(jumlah) {

                jumlah = parseInt(jumlah);

                if (jumlah <= 0 || isNaN(jumlah)) {
                    console.log("Jumlah barang tidak valid!");
                    pilihBarang();
                    return;
                }

                let subtotal = harga * jumlah;

                totalBelanja = totalBelanja + subtotal;
                jumlahInput = jumlahInput + jumlah;

                console.log(
                    `${namaBarang} x ${jumlah} = Rp${subtotal.toLocaleString("id-ID")}`
                );

                console.log(
                    `Total sementara = Rp${totalBelanja.toLocaleString("id-ID")}`
                );

                pilihBarang();
            });
        }
    });
}

function hitungDiskon() {

    let diskonPersen = 0;

    if (totalBelanja >= 300000) {
        diskonPersen = 10;
    } else if (totalBelanja >= 100000) {
        diskonPersen = 5;
    } else if (totalBelanja >= 50000) {
        diskonPersen = 3;
    }

    let totalDiskon = totalBelanja * diskonPersen / 100;
    let totalBayar = totalBelanja - totalDiskon;

    console.log("\n==================================");
    console.log("           HASIL BELANJA");
    console.log("==================================");

    if (diskonPersen > 0) {

        console.log(
            `Total Belanja : Rp${totalBelanja.toLocaleString("id-ID")}`
        );

        console.log(
            `Diskon ${diskonPersen}%   : Rp${totalDiskon.toLocaleString("id-ID")}`
        );

        console.log(
            `Total Bayar   : Rp${totalBayar.toLocaleString("id-ID")}`
        );

    } else {

        console.log(
            `Total Belanja : Rp${totalBelanja.toLocaleString("id-ID")}`
        );

        console.log(
            "Anda tidak mendapat diskon karena tidak mencapai minimum pembelanjaan"
        );
    }

    console.log("==================================");

    rl.close();
}

pilihBarang();