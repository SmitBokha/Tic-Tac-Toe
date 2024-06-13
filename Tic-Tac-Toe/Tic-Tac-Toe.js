// tm1 ===> playear-1
// tm2 ===> playear-2
let tm1 = "O";
let tm2 = "X";

// a,b,...,h,i ===> All button are select by their ID
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let d = document.querySelector(".d");
let e = document.querySelector(".e");
let f = document.querySelector(".f");
let g = document.querySelector(".g");
let h = document.querySelector(".h");
let i = document.querySelector(".i");

// box ===> Select all button
let box = document.querySelectorAll("button");

// stop ===> When game is completed then stop will true
let stop = false;

// count ===> count show us how many buttons are fill
let count = 0;

// When the rest button is pressed, the new app is turned on
document.querySelector(".reset").addEventListener('click', function () {

    location.reload();
});

box.forEach(element => {

    // y ===> y variable maintain that we can click on one button only one time
    y = 1;

    // click ===> click variable does count that how many click on one button
    let click = 0;
    element.addEventListener('click', () => {

        // x ===> x variable defines which player's turn it is now 
        // if x = 0 Now it is the turn of playear-1
        // if x = 1 Now it is the turn of playear-2 

        let x;
        x = y % 2;
        if (x == 1 && click == 0 && stop == false) {

            element.innerText = tm1;
            element.style.color = "#402B3A"
            count++;

            // condition of playear-1 can win
            if (a.innerText == tm1 &&
                b.innerText == tm1 &&
                c.innerText == tm1 ||

                d.innerText == tm1 &&
                e.innerText == tm1 &&
                f.innerText == tm1 ||

                g.innerText == tm1 &&
                h.innerText == tm1 &&
                i.innerText == tm1 ||

                a.innerText == tm1 &&
                d.innerText == tm1 &&
                g.innerText == tm1 ||

                b.innerText == tm1 &&
                e.innerText == tm1 &&
                h.innerText == tm1 ||

                c.innerText == tm1 &&
                f.innerText == tm1 &&
                i.innerText == tm1 ||

                a.innerText == tm1 &&
                e.innerText == tm1 &&
                i.innerText == tm1 ||

                c.innerText == tm1 &&
                e.innerText == tm1 &&
                g.innerText == tm1) {

                // display result that playear-1 is win
                document.querySelector(".result").innerText = "player 1";
                document.querySelector(".result").style.display = "flex";
                document.querySelector(".result").style.color = "#402B3A"
                document.querySelector(".result").style.backgroundColor = "#EFECEC"
                stop = true;

            }
        }
        else if (x == 0 && click == 0 && stop == false) {

            element.innerText = tm2;
            element.style.color = "#EFECEC"
            count++;

            // condition of playear-2 can win

            if (a.innerText == tm2 &&
                b.innerText == tm2 &&
                c.innerText == tm2 ||

                d.innerText == tm2 &&
                e.innerText == tm2 &&
                f.innerText == tm2 ||

                g.innerText == tm2 &&
                h.innerText == tm2 &&
                i.innerText == tm2 ||

                a.innerText == tm2 &&
                d.innerText == tm2 &&
                g.innerText == tm2 ||

                b.innerText == tm2 &&
                e.innerText == tm2 &&
                h.innerText == tm2 ||

                c.innerText == tm2 &&
                f.innerText == tm2 &&
                i.innerText == tm2 ||

                a.innerText == tm2 &&
                e.innerText == tm2 &&
                i.innerText == tm2 ||

                c.innerText == tm2 &&
                e.innerText == tm2 &&
                g.innerText == tm2) {

                // display result that playear-1 is win
                document.querySelector(".result").innerText = " player 2";
                document.querySelector(".result").style.display = "flex";
                document.querySelector(".result").style.color = "#EFECEC"
                document.querySelector(".result").style.backgroundColor = "#402B3A"
                stop = true;

            }

        }
        else {

            y--;
        }

        // if result is draw display match draw
        if (count == 9 && stop == false) {
            document.querySelector(".result").innerText = "match draw";
            document.querySelector(".result").style.display = "flex";
        }
        
        click++;
        y = y + 1;
    });

});
