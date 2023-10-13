const contenido = document.querySelector(".contenido");
let arrastrar = false;
let inicio;
let desplazamiento;


contenido.addEventListener("mousedown", (e)=>{
    arrastrar = true;
    inicio = e.pageX - contenido.offsetLeft;
    desplazamiento = contenido.scrollLeft;
    contenido.style.cursor = "grabbing";
});

contenido.addEventListener("mouseup", () => {
    arrastrar = false;
    contenido.style.cursor = "grab";
});

contenido.addEventListener("mousemove", (e) => {
    if (!arrastrar) return;
    e.preventDefault();
    const x = e.pageX - contenido.offsetLeft;
    const walk = (x - inicio) * 1;
    contenido.scrollLeft = desplazamiento - walk;
});

contenido.addEventListener("mouseleave", () => { 
    arrastrar = false;
    contenido.style.cursor = "grab";
});

const imagen_principal = document.querySelector(".imagen-principal");
const fondo_body = document.querySelector(".fondo");
const miniatura = document.querySelectorAll(".miniatura");
const titulo = document.getElementById("title");
const parrafo = document.getElementById("parrafo");
/*Arreglo de definiciones*/
const definicion = [
    {nombre:"Crisantemo", def:"Es un género de alrededor de 30 especies de plantas perennes en la familia Asteraceae, nativo de Asia y Europa. La mayoría de las especies son originarias de Asia oriental y el centro de origen se encuentra en China.​ Existen innumerables variedades y cultivares."},
    {nombre:"Desierto", def:"Es un bioma de clima árido, en donde las precipitaciones son escasas.​ Estos suelen poseer poca vida, pero eso depende del tipo de desierto; en muchos existe vida abundante, la vegetación se adapta a la poca humedad y la fauna usualmente se resguarda durante el día para preservar humedad."},
    {nombre:"Hortensias", def:"Incluye plantas ornamentales, comúnmente conocidas como hortensias, nativas del sur y el este de Asia​ y de América. La mayor diversidad de especies de este género se encuentra en las zonas de China, Corea y Japón."},
    {nombre:"Medusa de Mar", def:"También llamadas aguamalas, malaguas, aguavivas, aguacuajito, aguacuajada, o lágrimas de mar, son animales marinos pertenecientes al filo Cnidaria (más conocidos como celentéreos); son pelágicos, de cuerpo gelatinoso, con forma de campana de la que cuelga un manubrio tubular, con la boca en el extremo inferior, a veces prolongado por largos tentáculos cargados con células urticantes llamados cnidocitos."},
    {nombre:"Faro", def:"Es una torre de señalización luminosa situada en el litoral marítimo o tierra firme, como referencia y aviso costero o aéreo para navegantes,1​ siguiendo un código descriptivo que sirve para identificarlo denominado luz característica."},
    {nombre:"Koala",def:"Es una especie de marsupial diprotodonto de la familia Phascolarctidae, endémico de Australia. Es el único representante existente de la familia Phascolarctidae y sus parientes vivos más cercanos son los wombats."},
    {nombre:"Pinguino",def:"Son una familia de aves, la única del orden Sphenisciformes. Son aves marinas, no voladoras, que se distribuían casi exclusivamente en el hemisferio sur, exceptuando el pingüino de las islas Galápagos."}
];
function titular(nombre){
    titulo.textContent = nombre;
}
/*Funcion para asignar la definición a una imagen a partir del objeto definicion*/
function description(nombre){
    //console.log(definicion[0].nombre);
    for(let i = 0; i<definicion.length;i++){
        if(nombre == definicion[i].nombre){
            parrafo.textContent = definicion[i].def;
            break
        }
        else{
            parrafo.textContent = "No tiene definición";
        }
    }
}
miniatura.forEach(mini=>{
    mini.addEventListener("click",function(){
        const img_activa = document.querySelector(".active");
        img_activa.classList.remove("active"),
        this.classList.add("active"),
        imagen_principal.src = this.src,
        fondo_body.style.backgroundImage = "url("+this.src+")";//Utilizar la imagen seleccionada, como imagen del fondo
        titular(this.title);
        description(this.title);
        //console.log(this.title)
    })
});

