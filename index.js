const sobreMi = {
    nombre : "alejandro",
    edad: 26 , 
    eresDesarrollador : true ,
    fechaDeNacimiento: new Date( "1996-08-21"),
    libroFavorito: {
        titulo:"habitos atomicos",
        autor : "James Clear",
        fechaDelLibro: new Date ("2018-10-16"),
        url:"https://www.panamericana.com.co/habitos-atomicos-576359/p"
    }
}
console.log(sobreMi);
console.log(sobreMi.libroFavorito.autor)