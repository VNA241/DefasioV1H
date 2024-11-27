function toggleImage() {
    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    
    if (img1.classList.contains('hidden')) {
        img1.classList.remove('hidden');
        img2.classList.add('hidden');
    } else {
        img1.classList.add('hidden');
        img2.classList.remove('hidden');
    }
}

function toggleImage2() {
    var img3 = document.getElementById('img3');
    var img4 = document.getElementById('img4');
    
    if (img3.classList.contains('hidden')) {
        img3.classList.remove('hidden');
        img4.classList.add('hidden');
    } else {
        img3.classList.add('hidden');
        img4.classList.remove('hidden');
    }
}

function toggleImage3() {
    var img5 = document.getElementById('img5');
    var img6 = document.getElementById('img6');
    
    if (img5.classList.contains('hidden')) {
        img5.classList.remove('hidden');
        img6.classList.add('hidden');
    } else {
        img5.classList.add('hidden');
        img6.classList.remove('hidden');
    }
}