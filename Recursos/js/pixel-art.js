var nombreColores = ['White', 'LightYellow',
    'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
    'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
    'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
    'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
    'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
    'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
    'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
    'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
    'LightGreen', 'PaleGreen', 'PaleTurquoise',
    'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
    'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
    'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
    'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
    'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
    'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
    'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
    'BlueViolet', 'DarkViolet', 'DarkOrchid',
    'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
    'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");
var $indicadorColor = $("#indicador-de-color");
var clickApretado = false;

function paletaColores() {
    for (let i = 0; i < nombreColores.length; i++) {
        let elemento = document.createElement('div');
        elemento.style.backgroundColor = nombreColores[i];
        elemento.className = 'color-paleta';
        elemento.title = nombreColores[i];
        paleta.appendChild(elemento);
    }
}

function crearGrillaPixeles() {
    for (let i = 0; i < 1750; i++) {
        let pixeles = document.createElement('div');
        pixeles.className = 'pixeles';
        grillaPixeles.appendChild(pixeles);
    }
}

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
    (function() {
        // Se guarda el color de la rueda en colorActual
        var colorActual = colorPersonalizado.value;
        // Completar para que cambie el indicador-de-color al colorActual
        $indicadorColor.css("background-color", colorActual);
    })
);

$(document).ready(function() {
    var $grillaPixeles = $(".pixeles");

    //selecciono el color de la paleta de colores
    $(".color-paleta").click(function() {
        let colorSeleccionado = $(this).css("background-color");
        $indicadorColor.css("background-color", colorSeleccionado);
    });

    //pinto los pixeles de la grilla de forma individual
    $grillaPixeles.click(function() {
        let colorSeleccionado = $indicadorColor.css("background-color");
        $(this).css("background-color", colorSeleccionado);
    });

    //pintado de pixeles de forma continua
    var $body = $("body");
    $body.mousedown(function() {
        clickApretado = true;
    });
    $body.mouseup(function() {
        clickApretado = false;
    });

    $grillaPixeles.hover(function() {
        if (clickApretado) {
            let colorSeleccionado = $indicadorColor.css("background-color");
            $(this).css("background-color", colorSeleccionado);
        }

    }, function() {

    });

    //seleccion de las imagenes precargadas para modificar 
    $("#batman").click(function() {
        cargarSuperheroe(batman);
    });
    $("#wonder").click(function() {
        cargarSuperheroe(wonder);
    });
    $("#flash").click(function() {
        cargarSuperheroe(flash);
    });
    $("#invisible").click(function() {
        cargarSuperheroe(invisible);
    });

    //al boton de guardar se da la accion de guardado
    $("#guardar").click(function() {
        guardarPixelArt();
    });

    //al boton de borrar se da la accion de borrado con animacion
    $("#borrar").click(function() {
        $grillaPixeles.animate({ "background-color": "white" }, 1800);
    });

});

//llamado de funciones para la representacion de la paleta de colores y grilla de pintado
paletaColores();
crearGrillaPixeles();