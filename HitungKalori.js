
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let totalKalori = 0;

function menu() {
    console.log("\n=== PROGRAM HITUNG KALORI ===");
    console.log("1. Lari (60 kalori / 5 menit)");
    console.log("2. Push-up (200 kalori / 30 menit)");
    console.log("3. Plank (5 kalori / 1 menit)");
    console.log("4. Selesai");
    
    rl.question("Pilih aktivitas (1-4): ", function(pilihan) {
        if (pilihan === "4") {
            console.log("\nTotal kalori terbakar: " + totalKalori + " kalori");
            rl.close();
        } else if (pilihan === "1") {
            rl.question("Berapa menit lari? ", function(menit) {
                totalKalori += (Number(menit) / 5) * 60;
                console.log("Kalori terbakar: " + (Number(menit) / 5) * 60);
                menu();
            });
        } else if (pilihan === "2") {
            rl.question("Berapa menit push-up? ", function(menit) {
                totalKalori += (Number(menit) / 30) * 200;
                console.log("Kalori terbakar: " + (Number(menit) / 30) * 200);
                menu();
            });
        } else if (pilihan === "3") {
            rl.question("Berapa menit plank? ", function(menit) {
                totalKalori += Number(menit) * 5;
                console.log("Kalori terbakar: " + Number(menit) * 5);
                menu();
            });
        } else {
            console.log("Pilihan tidak valid!");
            menu();
        }
    });
}

menu();