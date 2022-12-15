var cont = 0
function fodase(){
    var res = document.getElementById('res')
    res.innerHTML = ``
    cont++
    if(cont > 17) cont = 1
    var img = document.createElement('img')
    img.src = `img/fds${cont}.jfif`
    res.appendChild(img)
}