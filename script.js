otherLang.addEventListener("click", function () {
    document.getElementById("texta").style.display =
        document.getElementById("otherLang").checked === true ? "block" : "none";
    if (document.getElementById("texta").style.display == "none") {
        document.getElementById("texta").value = "";
    }
});