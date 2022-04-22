(function () {
    if(document.querySelector(".visits")) {
        if(document.querySelector(".visits").innerText == '') {
            document.querySelector("#visit-wrap").style.display = 'none';
        }
    }
})()

function animeCount() {
    document.getElementById('number').innerHTML = document.querySelectorAll('.anime-wrapper').length;
}
animeCount();

export default animeCount;