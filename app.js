const sounds = ["applause", "boo", "gaspan", "tada", "victory", "wrong"]

sounds.forEach((sound) => {/**sound un içinde gez ve bunları gezerken gezdiklerine sound de ve bu sound u */
    
    const btn = document.createElement("button") /**bir buton oluştur */
    btn.classList.add("btn") /** bu btn e bir btn adında  classlist ekle */
    btn.innerText = sound; /**btn inner textine gir sound una ulaş */
  
    btn.addEventListener("click", () => { /** btn içine addeventlistener ile bir etkinlik ekle bu etkinlik click ile çalışsın , bu etkinlik ne olpsun dediği zaman bir function oluşturalım */
  
    stopSongs()
        document.getElementById(sound).play()/** bu etkinlik  document.getElementById içindeki sounda erişsin eriştikten sonra bunları oynatsın  */
      
    })
  
    document.getElementById("buttons").appendChild(btn) /** ıd si buttons olan a ulaş altına bir düğüm daha ekle (append:düğüm child:çocuk// altına bir ufaklık daha oluştur) */
})

/**ard  arda basınca sesler birbirine karışıyor birine basınca diğerini durdurması içn stopsong funcsiyonu yazdık*/

function stopSongs() { /** */
    sounds.forEach((sound) => { /** soundların bütün seslerinin içine girsin */
        const song = document.getElementById(sound);/** song ile tanımladığımız soundlara erişsin*/
        song.pause()/**songlar pause olsun dursun yani*/
        song.currentTime = 0
    })
}