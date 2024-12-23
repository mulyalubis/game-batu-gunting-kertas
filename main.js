function computer() {
    let comp = Math.random()
    if(comp < 0.34) {
        return 'batu'
    }else if(comp >= 0.34 && comp < 0.67) {
        return 'kertas'
    }else {
        return 'gunting'
    }
}


function hasilnya(player, comp) {
    if(player == comp) {
            return 'Kamu Seri'
    }else if(player == 'batu') {
        if(comp == 'kertas') {
            return 'Kamu Kalah'
        }else {
            return 'Kamu Menang'
        }
    }else if(player == 'kertas') {
        if(comp == 'batu') {
            return 'Kamu Menang'
        }else {
            return 'Kamu Kalah'
    }
    }else {
        if(comp == 'batu') {
            return 'Kamu Kalah'
        }else {
            return 'Kamu Menang'
        }
    }
}


const batu = document.querySelector('li .batu')
batu.addEventListener('click', function() {
    const pilihanComputer = computer()
    const pilihanPLayer = batu.className
    const hasil = hasilnya(pilihanPLayer, pilihanComputer)

    const gantiGambar = document.querySelector('.img-computer')
    gantiGambar.setAttribute('src', 'img/' + pilihanComputer + '.png')

    const infoHasil = document.getElementsByClassName('info')[0]
    infoHasil.innerHTML = hasil
})

const kertas = document.querySelector('li .kertas')
kertas.addEventListener('click', function() {
    const pilihanComputer = computer()
    const pilihanPLayer = kertas.className
    const hasil = hasilnya(pilihanPLayer, pilihanComputer)

    const gantiGambar = document.querySelector('.img-computer')
    gantiGambar.setAttribute('src', 'img/' + pilihanComputer + '.png')

    const infoHasil = document.getElementsByClassName('info')[0]
    infoHasil.innerHTML = hasil
})


const gunting = document.querySelector('li .gunting')
gunting.addEventListener('click', function() {
    const pilihanComputer = computer()
    const pilihanPLayer = gunting.className
    const hasil = hasilnya(pilihanPLayer, pilihanComputer)

    const gantiGambar = document.querySelector('.img-computer')
    gantiGambar.setAttribute('src', 'img/' + pilihanComputer + '.png')

    const infoHasil = document.getElementsByClassName('info')[0]
    infoHasil.innerHTML = hasil
})















