let username = prompt("Enter your name:");
// This code prompts the user to enter their name and converts it to uppercase.



let profileimage = {

    A: "a.png",
    B: "b.png",
    C: "c.png",
    D: "d.png",
    E: "e.png",
    F: "f.png",
    G: "g.png",
    H: "h.png",
    I: "i.png",
    J: "j.png",
    K: "k.png",
    L: "l.png",
    M: "m.png",
    N: "n.png",
    O: "o.png",
    P: "p.png",
    Q: "q.png",
    R: "r.png",
    S: "s.png",
    T: "t.png",
    U: "u.png",
    V: "v.png",
    W: "w.png",
    X: "x.png",
    Y: "y.png",
    Z: "z.png",

}



if (username) {


    let a = username.charAt(0).toUpperCase();
    // This code extracts the first character of the username.

    let logo = document.querySelector(".logo img");
    //IT IS USED TO SELECT THE LOGO IMAGE ELEMENT.


    let image = profileimage[a] || "1.jpeg" ;
    // This code checks if the first character of the username exists in the profileimage object.
    // If it exists, it assigns the corresponding image path to the variable 'image'.

    document.querySelector("#pic").src = image;

}

else {
    document.querySelector(".logo img").src = "1.jpeg";
    // If the first character of the username does not match any key in the profileimage object, it sets the logo image to "1.jpeg".    
}