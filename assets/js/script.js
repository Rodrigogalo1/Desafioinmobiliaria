const propiedades_venta = [ 
    {
    title: 'Apartamento de lujo en zona exclusiva', 
    src: './assets/img/ventaprimero.jpg', 
    body: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial', 
    address: '123 Luxury Lane, Prestige Suburb, CA 45678', 
    habitaciones: '4 Habitaciones ',
    baños: '4 Baños', 
    costo: '5.000', 
    smoke: false, 
    pets: false,
    
    }, 
    { 
    title: 'Apartamento acogedor en la montaña',  
    src: './assets/img/ventasegunda.jpg', 
    body: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas', 
    address: '789 Mountain Road,Summit Peaks, CA 23456', 
    habitaciones: '2 Habitaciones',
    baños: '1 Baños', 
    costo: 1.200, 
    smoke: true, 
    pets: true 
    }, 
    { 
    title: 'Penthouse de lujo con terraza panorámica', 
    src: './assets/img/ventatercera.jpg', 
    body: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares', 
    address: ' Skyline Avenue, Skyview City, CA 56789', 
    habitaciones: '3 Habitaciones', 
    baños: '3 Baños', 
    costo: 4.500, 
    smoke: false, 
    pets: true 
    } 
    ] 

const propiedades_alquiler = [ 
    { 
    title: 'Apartamento en el centro de la ciudad', 
    src: './assets/img/Alquilerprimero.jpg', 
    body: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.', 
    address: '123 Main Street, Anytown, CA 91234', 
    habitaciones: '2 Habitaciones',
    baños: '2 Baños', 
    costo: 2.000, 
    smoke: false, 
    pets: true 
    }, 
    { 
    title: 'Apartamento luminoso con vista al mar', 
    src: './assets/img/alquilersegundo.jpg', 
    body: 'Este hermoso apartamento ofrece una vista impresionante al mar', 
    address: '456 Ocean Avenue, Seaside Town, CA 56789', 
    habitaciones: '3 Habitaciones',
    baños: '3 Baños', 
    costo: 2.500, 
    smoke: true, 
    pets: true 
    }, 
    { 
    title: 'Condominio moderno en zona residencial', 
    src: './assets/img/alquilertercera.jpg', 
    body: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial', 
    address: '123 Main Street, Anytown, CA 91234', 
    habitaciones: '2 Habitaciones',
    baños: '2 Baños', 
    costo: 2.200, 
    smoke: false, 
    pets: false 
    }, 
    ] 
    
    //venta_array
    

    document.addEventListener("DOMContentLoaded", function() {
        let ventas_html = document.getElementById("venta_array");
        let listHTML1 = "";
    
        function smokeVenta(element) {
            if (element == true) {
                return `<p class="text-success">
                <i class="fas fa-smoking"></i> Permitido fumar
                </p>`;
            } else {
                return `<p class="text-danger">
                <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>`;
            }
        }
    
        function petsVenta(element) {
            if (element == true) {
                return `<p class="text-success">
                <i class="fas fa-paw"></i> Mascotas permitidas
                </p>`;
            } else {
                return `<p class="text-danger">
                <i class="fa-solid fa-ban"></i> No se permiten mascotas
                </p>`;
            }
        }
    
        for (let i = 0; i < propiedades_venta.length; i++) {
            if (ventas_html) {
                let img = document.createElement("img");
                img.src = propiedades_venta[i].src;
                img.alt = "Imagen del departamento";

                listHTML1 += `<div class="col-md-4 mb-4">
                                <div class="card">
                                    <img
                                        src="${propiedades_venta[i].src}"
                                        class="card-img-top"
                                        alt="Imagen del departamento"
                                    />
                                    <div class="card-body">
                                        <h5 class="card-title">
                                        ${propiedades_venta[i].title}
                                        </h5>
                                        <p class="card-text">
                                        ${propiedades_venta[i].body}
                                        </p>
                                        <p>
                                        <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane,
                                        ${propiedades_venta[i].address}
                                        </p>
                                        <p>
                                        <i class="fas fa-bed"></i> ${propiedades_venta[i].habitaciones} |
                                        <i class="fas fa-bath"></i> ${propiedades_venta[i].baños}
                                        </p>
                                        <p><i class="fas fa-dollar-sign"></i> ${propiedades_venta[i].costo}</p>
                                        ${smokeVenta(propiedades_venta[i].smoke)}
                                        ${petsVenta(propiedades_venta[i].pets)}
                                    </div>
                                </div>
                            </div>`;
            }
        }
        if (ventas_html) {
            ventas_html.innerHTML += listHTML1;
        }
    });
    
    
 

//alquiler_array

document.addEventListener("DOMContentLoaded", function() {
    let alquiler_html = document.getElementById("alquiler_array");
    let listHTML2 = "";

    function smokeAlquiler(element) {
        if (element == true) {
            return `<p class="text-success">
            <i class="fas fa-smoking"></i> Permitido fumar
          </p>`;
        } else {
            return `<p class="text-danger">
            <i class="fas fa-smoking-ban"></i> No se permite fumar
          </p>`;
        }
    }

    function petsAlquiler(element) {
        if (element == true) {
            return `<p class="text-success">
            <i class="fas fa-paw"></i> Mascotas permitidas
          </p>`;
        } else {
            return `<p class="text-danger">
            <i class="fa-solid fa-ban"></i> No se permiten mascotas
            </p>`;
        }
    }

    for (let i = 0; i < propiedades_alquiler.length; i++) {
        if (alquiler_html) {
            let img = document.createElement("img");
            img.src = propiedades_venta[i].src;
            img.alt = "Imagen del departamento";
            console.log('holaa')

            listHTML2 += `<div class="col-md-4 mb-4">
                            <div class="card">
                                <img
                                    src="${propiedades_alquiler[i].src}"
                                    class="card-img-top"
                                    alt="Imagen del departamento"
                                />
                                <div class="card-body">
                                    <h5 class="card-title">
                                    ${propiedades_alquiler[i].title}
                                    </h5>
                                    <p class="card-text">
                                    ${propiedades_alquiler[i].body}
                                    </p>
                                    <p>
                                    <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane,
                                    ${propiedades_alquiler[i].address}
                                    </p>
                                    <p>
                                    <i class="fas fa-bed"></i> ${propiedades_alquiler[i].habitaciones} |
                                    <i class="fas fa-bath"></i> ${propiedades_alquiler[i].baños}
                                    </p>
                                    <p><i class="fas fa-dollar-sign"></i> ${propiedades_alquiler[i].costo}</p>
                                    ${smokeAlquiler(propiedades_alquiler[i].smoke)}
                                    ${petsAlquiler(propiedades_alquiler[i].pets)}
                                </div>
                            </div>
                        </div>`;
        }
    }
    if (alquiler_html) {
        alquiler_html.innerHTML = listHTML2;
    }
});







