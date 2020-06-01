let ask = (q, y, n) => {
    confirm(q) ? y() : n()

}

let yes = () => alert("u agreed!!");
let no = () => alert("not agreed");

ask("do u agree", yes, no);