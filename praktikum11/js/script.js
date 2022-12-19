document.querySelectorAll("#option a").forEach((a)=> {
    // jika di klik akan menjalankan sebuah fungsi computerChoice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })
})

function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element hasil komputer queryselector
    let pilihanKomputer = document.querySelector("#result");

    // mengisi pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];
    let comWin = new Image(500,300);
    let usWin = new Image(500,300)
    comWin.src = "https://thumbs.gfycat.com/OldIncompatibleHummingbird-max-1mb.gif";
    usWin.src = "https://media.tenor.com/YM3fW1y6f8MAAAAM/crying-cute.gif"
    x = document.getElementById("gambar");


    // pilihan komputer secara random
    pilihanKomputer.innerHTML = choices[Math.round(Math.random() * choices.length)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika pilihan user == pilihan komputer (draw)
    if(pilihanUser == pilihanKomputer){
        setTimeout(() => alert("DRAW"), 300);
    }

    // jika pilihan user menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("User WIN");
        x.appendChild(usWin);
    } else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("User WIN");
        x.appendChild(usWin);
    } else if (pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("User WIN");
        x.appendChild(usWin);
    }

    // jika pilihan komputer menang
    if (pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        alert("Computer WIN");
        x.appendChild(comWin);
    } else if (pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        alert("Computer WIN");
        x.appendChild(comWin);
    } else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        alert("Computer WIN");
        x.appendChild(comWin);
    }
}