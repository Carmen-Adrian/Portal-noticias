//Iniciamos variable que controlará los nombres de los div
var numeroDiv = '3';

function mostrarMas(element) {

    //Guardamos los div que queremos agregar, en este caso sólo 2
    let divsNuevos =
        `<div >
        <div class="row row-cols-1 row-cols-md-3 ">
            
            <div class="col  " >
                <div class="contenedor">
                    <div class="responsive">
                         <img src="./img/publico general/FOTO BOLETÍN 2761 INJUDET 10092021.jpg" class="card-img-top "  
                    alt="..." href="#">
                    </div>
                </div>
                    <div class="card-body  ">
                        <button type="button" class="btn btn-sm " style="background-color: rgba(179,142,93,255)"><a class="text-white" style="text-decoration:none" href="#"> Salud  
                        </a></button>
                        <h5  class="card-title " > <a style="text-decoration:none" 
                                href="https://tabasco.gob.mx/noticias/lluvias-marcaran-el-jueves-en-la-sierra-rios-y-parte-de-la-chontalpa" > 
                                Lluvias marcarán el jueves en la Sierra, Ríos y parte de la Chontalpa 
                            </a>
                        </h5>
                    </div>
                </div>

                <div class="col  " >
                    <div class="contenedor">
                        <div class="responsive">
                            <img src="./img/publico general/FOTO BOLETÍN 2761 INJUDET 10092021.jpg" class="card-img-top "  
                        alt="..." href="#">
                        </div>
                       
                    </div>
                        <div class="card-body  ">
                            <button type="button" class="btn btn-sm " style="background-color: rgba(179,142,93,255)"><a class="text-white" style="text-decoration:none" href="#"> Salud   
                            </a></button>
                            
                            <h5  class="card-title " > <a style="text-decoration:none" 
                                    href="https://tabasco.gob.mx/noticias/lluvias-marcaran-el-jueves-en-la-sierra-rios-y-parte-de-la-chontalpa" > 
                                        Lluvias marcarán el jueves en la Sierra, Ríos y parte de la Chontalpa 
                                </a></h5>
                        </div>
                    </div>

                    <div class="col  " >
                        <div class="contenedor">
                            <div class="responsive">
                                <img src="./img/publico general/FOTO BOLETÍN 2761 INJUDET 10092021.jpg" class="card-img-top "  
                            alt="..." href="#">
                            </div>
                           
                        </div>
                            <div class="card-body  ">
                                <button type="button" class="btn btn-sm " style="background-color: rgba(179,142,93,255)"><a class="text-white" style="text-decoration:none" href="#"> Salud  
                                </a></button>
                                
                                <h5  class="card-title " > <a style="text-decoration:none" 
                                        href="https://tabasco.gob.mx/noticias/lluvias-marcaran-el-jueves-en-la-sierra-rios-y-parte-de-la-chontalpa" > 
                                            Lluvias marcarán el jueves en la Sierra, Ríos y parte de la Chontalpa 
                                    </a></h5>
                            </div>
                        </div>
        </div>
        </div>
   `;

    //Agregamos los div al contenedor que queremos
    $('#divPadre').append(divsNuevos);

    //Validamos si los div ya excedieron los 8 para no permitir añadir más


}

var numeroDiv1 = '3';

function mostrarMas1(element1) {

    //Guardamos los div que queremos agregar, en este caso sólo 2
    let divsNuevos1 =
        `<div>
        <div class="row row-cols-1 row-cols-md-3 ">
            
            <div class="col" >
                
                <div class="contenedor" >
                    <div class="responsive">
                         <a href="./detalles.html">
                          <img src="./img/publico general/FOTO BOLETÍN 2761 INJUDET 10092021.jpg" class="card-img-top" 
                    alt="...">    
                         </a> 
                    </div>
                </div>
                    <div class="card-body  ">
                        <button type="button" class="btn btn-sm " style="background-color: rgba(179,142,93,255)">
                            <a class="text-white" style="text-decoration:none" href="#"> Publico general   
                            </a>
                        </button>
                        <h5  class="card-title " > 
                            <a style="text-decoration:none" href="./detalles.html" > 
                                Lluvias marcarán el jueves en la Sierra, Ríos y parte de la Chontalpa  
                                
                            </a>
                        </h5>
                    </div>
                    
                </div>

                <div class="col  " >
                    <div class="contenedor">
                        <div class="responsive">
                            <img src="./img/publico general/FOTO BOLETÍN 2761 INJUDET 10092021.jpg" class="card-img-top"   
                        alt="..." href="#">
                        </div>
                       
                    </div>
                        <div class="card-body  ">
                            <button type="button" class="btn btn-sm " style="background-color: rgba(179,142,93,255)"><a class="text-white" style="text-decoration:none" href="#"> Publico general   
                            </a></button>
                            
                            <h5  class="card-title " > <a style="text-decoration:none" 
                                    href="https://tabasco.gob.mx/noticias/lluvias-marcaran-el-jueves-en-la-sierra-rios-y-parte-de-la-chontalpa" > 
                                        Lluvias marcarán el jueves en la Sierra, Ríos y parte de la Chontalpa 
                                        
                                </a></h5>
                        </div>
                    </div>

                    <div class="col  " >
                        <div class="contenedor">
                            <div class="responsive">
                                <img src="./img/publico general/FOTO BOLETÍN 2761 INJUDET 10092021.jpg" class="card-img-top"   
                            alt="..." href="#">
                            </div>
                           
                        </div>
                            <div class="card-body  ">
                                <button type="button" class="btn btn-sm " style="background-color: rgba(179,142,93,255)"><a class="text-white" style="text-decoration:none" href="#"> Publico general   
                                </a></button>
                                
                                <h5  class="card-title " > <a style="text-decoration:none" 
                                        href="https://tabasco.gob.mx/noticias/lluvias-marcaran-el-jueves-en-la-sierra-rios-y-parte-de-la-chontalpa" > 
                                            Lluvias marcarán el jueves en la Sierra, Ríos y parte de la Chontalpa 
                                    </a></h5>
                            </div>
                        </div>
        </div>
        </div>
   `;

    //Agregamos los div al contenedor que queremos
    $('#divPadre1').append(divsNuevos1);

    //Validamos si los div ya excedieron los 8 para no permitir añadir más


}

function popUp(URL) {
    window.open(URL, 'Nombre de la ventana', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=800,height=800,left = 390,top = 50');
}
