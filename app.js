// Dati di esempio dei punti di interesse 
// In una applicazione reale, questi dati verrebbero caricati da un'API
const today = "2026-02-19"; // Default date

const locations = [
    {
        id: 1,
        title: "Verduras y naranjas Bou",
        type: "",
        description: "El productor es Manuel y <em>a la porta</em> vende Nieves.\
        [Entrevista, 2026]",

        coordinates: [-0.04135, 39.98506],
        details: {
            address: "Calle San Blas, 16",
            road: "Fadrell",
            category: "Venta a la porta",
            status: "Activo",
            observation: "2016, 2019, 2020 y 2026",
            contact: "",
            notes: "" },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/01_VeN_Bou_01.jpg", date: today },
            { url: "./images/01_VeN_Bou_02.jpg", date: today },
            { url: "./images/01_VeN_Bou_03.jpg", date: today },
            { url: "./images/01_VeN_Bou_04.jpg", date: today },
            { url: "./images/01_VeN_Bou_05.jpg", date: today }
        ]
    },
    {
        id: 2,
        title: "Fernando",
        type: "",
        description: "Fernando gestiona su punto de <em>venta a la porta</em> \
        en el casco histórico de Castellón. Frutas y verduras proceden de la \
        huerta familiar situada en la partida Brunella, una parcela heredada \
        y cultivada por generaciones. La producción se realiza a escala \
        familiar, con la colaboración de su hermano, siguiendo prácticas \
        agrícolas tradicionales. Es habitual que se forme un corrillo frente \
        a su <em>porta</em>. \
        <em>[Entrevista, 2025]</em> \
        ",
        coordinates: [-0.03724, 39.98685],
        details: {
            address: "Calle de Mealla, 13",
            road: "Brunella",
            category: "Venta a la porta",
            status: "Activo",
            observation: "2019",
            contact: "",
            notes: ""        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/02_Fernando_01.jpg", date: today },
            { url: "./images/02_Fernando_02.jpg", date: today }
        ]
    },
    {
        id: 3,
        title: "María Teresa",
        type: "",
        description: "No se dispone de información adicional.",
        coordinates: [-0.03634, 39.99229],
        details: {
            address: "Calle San Roque, 70",
            road: "s/d",
            category: "Venta a la porta",
            status: "Inactivo",
            observation: "2019",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/03_María_Teresa_01.jpg", date: today }
        ]
    },
    {
        id: 4,
        title: "Francisca",
        type: "",
        description: "No se dispone de información adicional.",
        coordinates: [-0.04051, 39.98874],
        details: {
            address: "Calle de Villaroig, 60",
            road: "s/d",
            category: "Venta a la porta",
            status: "Inactivo",
            observation: "2019",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/04_Francisca_01.jpeg", date: today }
        ]
    },
    {
        id: 5,
        title: "María y Antonia",
        type: "",
        description: "María y Antonia, hermanas, cultivan principalmente \
        cítricos y todo tipo de verduras de temporada. Afirman que vender \
        a la <em>porta</em> es una buena salida para su producción porque \
        la gente quiere productos naturales, de temporada y recogidos \
        al día. <em>[Entrevista, 2026]</em>",
        coordinates: [-0.03691, 39.99364],
        details: {
            address: "Calle San Roque, 157",
            road: "La Magdalena",
            category: "Venta a la porta",
            status: "Activo",
            observation: "2019 y 2026",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/05_María_01.jpg", date: today }
        ]
    },
    {
        id: 6,
        title: "Sin identificar",
        type: "",
        description: "No se dispone de información adicional.",
        coordinates: [-0.04417, 39.97881],
        details: {
            address: "Avenida de Valencia, 15",
            road: "s/d",
            category: "Venta a la porta",
            status: "Inactivo",
            observation: "2019",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/06_Desconocido_Valencia_01.jpg", date: today }
        ]
    },
    {
        id: 7,
        title: "José Juan Sidro Tirado",
        type: "",
        description: "En la partida de Taxida, José Juan cultiva clementinas \
        de la variedad Arrufatina y naranjas Navelate. En Coscollosa cultiva \
        solo clementinas de la variedad Clemenules. Es socio de la Cooperativa \
        San Isidro de Castellón, por afección, pero considera que defiende \
        mejor el valor de sus cítricos vendiendo directamente a comerciantes \
        y <em>a la porta</em><em>[Entrevista, 2021]</em>",
        coordinates: [-0.03476, 39.99037],
        details: {
            address: "Calle Alcalde Tárrega, 24 c",
            road: "Taxida y Coscollosa",
            category: "Venta a la porta",
            status: "Activo",
            observation: "2019 y 2021",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/07_José_Juan_01.jpg", date: today },
            { url: "./images/07_José_Juan_02.jpg", date: today },
            { url: "./images/07_José_Juan_03.jpg", date: today }
            
        ],
        video: [
            {url: "https://youtu.be/c4ovEOUzjR0" }
        ]
    },
    {
        id: 8,
        title: "Sin identificar",
        type: "",
        description: "No se dispone de información adicional.",
        coordinates: [-0.03664, 39.98933],
        details: {
            address: "Calle San Felix 20",
            road: "s/d",
            category: "Venta a la porta",
            status: "Inactivo",
            observation: "2019",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/08_Desconocido_S_Felix_01.jpg", date: today }
        ]
    },
    {
        id: 9,
        title: "Sin identificar",
        type: "",
        description: "No se dispone de información adicional.",
        coordinates: [-0.034108, 39.986668],
        details: {
            address: "Calle del Gobernador Bermúdez de Castro, 85",
            road: "s/d",
            category: "Venta a la porta",
            status: "Activo",
            observation: "2019",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/09_Desconocida_Gobernador_01.jpg", date: today }
        ]
    },
    {
        id: 10,
        title: "Sin identificar",
        type: "",
        description: "No se dispone de información adicional.",
        coordinates: [-0.04126, 39.98489],
        details: {
            address: "Calle San Blas, 10",
            road: "s/d",
            category: "Venta a la porta",
            status: "Inactivo",
            observation: "2019",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/10_Desconocido_San_Blas_01.jpg", date: today }
        ]
    },
    {
        id: 11,
        title: "Sin identificar",
        type: "",
        description: "No se dispone de información adicional.",
        coordinates: [-0.039105, 39.983114],
        details: {
            address: "Calle Ximenez, 5",
            road: "s/d",
            category: "Venta a la porta",
            status: "Inactivo",
            observation: "2020",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/11_Desconocido_Ximenez_01.jpg", date: today }
        ]
    },
    {
        id: 12,
        title: "Sin identificar",
        type: "",
        description: "No se dispone de información adicional.",
        coordinates: [-0.04206611076548801, 39.9963241829765],
        details: {
            address: "Calle del Angel, 9",
            road: "s/d",
            category: "Venta a la porta",
            status: "Inactivo",
            observation: "2019",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/12_Desconocido_Angel_01.jpeg", date: today }
        ]
    },
    {
        id: 13,
        title: "Sin identificar",
        type: "",
        description: "No se dispone de información adicional.",
        coordinates: [-0.04087, 39.99123],
        details: {
            address: "Calle de Jovellanos, 17",
            road: "s/d",
            category: "Venta a la porta",
            status: "Inactivo",
            observation: "2017",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/13_Desconocido_Jovellanos_01.jpeg", date: today }
        ]
    },
    {
        id: 14,
        title: "Sin identificar",
        type: "",
        description: "No se dispone de información adicional.",
        coordinates: [-0.03623, 39.99182],
        details: {
            address: "Calle San Roque, 42",
            road: "s/d",
            category: "Venta a la porta",
            status: "Inactivo",
            observation: "2021",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/14_Desconocido_San_Roque_42_01.jpg", date: today },
            { url: "./images/14_Desconocido_San_Roque_42_02.jpg", date: today }
        ]
    },
    {
        id: 15,
        title: "Amparo",
        type: "",
        description: "No se dispone de información adicional.",
        coordinates: [-0.03977, 39.98999],
        details: {
            address: "Calle de Ximen Pérez de Arenós, 6",
            road: "s/d",    
            category: "Venta a la porta",
            status: "Inactivo",
            observation: "2016 y 2023",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/15_Amparo_01.jpg", date: today },
            { url: "./images/15_Amparo_02.jpg", date: today },
            { url: "./images/15_Amparo_03.jpg", date: today }
        ]
    },
    {
        id: 16,
        title: "Sin identificar",
        type: "",
        description: "No se dispone de información adicional.",
        coordinates: [-0.0375, 39.99312],
        details: {
            address: "Calle Almansa, 44",
            road: "s/d",
            category: "Venta a la porta",
            status: "Inactivo",
            observation: "2017",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/16_Desconocido_Almansa_01.jpg", date: today }
        ]
    },
    {
        id: 17,
        title: "Joaquín Breva Mut",
        type: "",
        description: "Joaquín, como su padre y su abuelo, se dedica a la \
        agricultura. Produce y vende cítricos, nísperos y uvas. \
        Con el fin de evitar la venta a bajo precio a intermediarios, \
        optó por defender su producción de cítricos (40 hanegadas) mediante \
        la modalidad de <em>venta a la porta</em>. Reside en una zona \
        céntrica de Castellón y, dada la presencia de numerosos vendedores \
        que practicaban esta misma modalidad en el barrio, decidió alquilar \
        un garaje en la calle Dr. Ferrán en 2023 y, posteriormente, \
        trasladar su actividad a un pequeño establecimiento comercial \
        en la cercana Avenida de Lidón.",
        coordinates: [-0.033053, 39.989488],
        details: {
            address: "Avenida Virgen de Lidón, 20",
            road: "Canet, Taxida y Almalafa",       
            category: "Venta a la porta",
            status: "Activo",
            observation: "2024",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/17_Joaquín_01.jpg", date: today }
        ],
        video: [
            {url: "https://youtu.be/x_9PsidJ5Ug" }
        ]
    },
    {
        id: 18,
        title: "María Dolores (Mariló)",
        type: "",
        description: "Mariló vende los cítricos que cultiva su marido Paco \
        en la finca familiar, de 20 hanegadas (1,6 hectáreas) en la \
        partida de La Magdalena. Ha decidido no continuar con esta \
        actividad y ha puesto en venta la finca.<em>[Entrevista, 2025]</em>",
        coordinates: [-0.03979, 39.98905],
        details: {
            address: "Calle de les Germanies, 1",
            road: "La Magdalena",
            category: "Venta a la porta",
            status: "Activo",
            observation: "2025",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/18_María_Dolores_01.jpg", date: today },
            { url: "./images/18_María_Dolores_02.jpg", date: today }
        ]
    },
    {
        id: 19,
        title: "Lucía",
        type: "",
        description: "No se dispone de información adicional.",
        coordinates: [ -0.04245, 39.99075],
        details: {
            address: " Calle de Albocácer, 2",
            road: "s/d",
            category: "Venta a la porta",
            status: "Inactivo",
            observation: "2024",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/19_Lucia_01.png", date: today },
            { url: "./images/19_Lucia_02.jpg", date: today }
        ]
    },
    {
        id: 20,
        title: "Catalina",
        type: "",
        description: "En el bajo de su casa, Catalina vende los productos \
        que su marido Vicente cultiva en su huerta del Grao de Castellón. \
        En invierno, principalmente cítricos, y en verano verduras y otros \
        tipos de fruta. Cuando la familia se ausenta, su hija Lledó, \
        acompañada de sus tres hijas, continúa la venta para evitar \
        que la producción se desperdicie. Lledó recuerda que esta \
        actividad la practicaban también sus abuelos: la abuela \
        Consuelo era quien llevaba la venta en la misma <em>porta</em>.\
         Los vecinos del barrio, señala, valoran especialmente poder \
         abastecerse de productos que proceden directamente de la huerta \
         cercana.<em>[Entrevista, 2025]</em>",
        coordinates: [-0.04055, 39.98197],
        details: {
            address: "Calle Trinidad, 108",
            road: "s/d",
            category: "Venta a la porta",
            status: "Activo",
            observation: "2025",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/20_Catalina_01.jpg", date: today },
            { url: "./images/20_Catalina_02.jpg", date: today }
        ]
    },
    {
        id: 21,
        title: "Sin identificar",
        type: "",
        description: "No se dispone de información adicional.",
        coordinates: [-0.039691, 39.990429],
        details: {
            address: "Calle Ximén Pérez d'Arenós, 16",
            road: "s/d",
            category: "Venta a la porta",
            status: "Inactivo",
            observation: "2018",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/21_Desconocido_Ximen_Perez_01.jpg", date: today }
        ]
    },
    {
        id: 22,
        title: "Carmen Peris Gómez",
        type: "",
        description: "Carmen nació en 1930, hija de labradores de varias \
        generaciones; desde muy joven ha trabajado en la agricultura. \
        Es propietaria de una finca de cítricos situada en la partida \
        de Canet, actualmente cultivada por uno de sus hijos. \
        Carmen comercializa de forma directa, <em>a la porta</em>, \
        entre los vecinos de su barrio, el excedente de la producción, \
        una vez distribuida la cosecha entre los miembros de su numerosa \
        familia.<em>[Entrevista, 2025]</em>",
        coordinates: [-0.035665, 39.991318],
        details: {
            address: "Calle Ebanista Hervás, 7",
            road: "Calle Ebanista Hervás, 7",
            category: "Venta a la porta",
            status: "Activo",
            observation: "2025",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/22_Carmen_Peris_Gomez_01.jpg", date: today },
            { url: "./images/22_Carmen_Peris_Gomez_02.jpg", date: today },
            { url: "./images/22_Carmen_Peris_Gomez_03.jpg", date: today },
            { url: "./images/22_Carmen_Peris_Gomez_04.jpg", date: today }
        ],
        video: [
            {url: "https://youtu.be/0iyorHf_8r4" }
        ]
    },
    {
        id: 23,
        title: "Rafa",
        type: "",
        description: "Rafa empezó su actividad en la década de 1990 cultivando \
        cítricos y pequeñas cantidades de hortalizas en sus fincas situadas \
        en las partidas de Borrassa, Bovalar (en la subpartida Penyeta Roja) \
        y La Plana. Con la ayuda de sus hijos, en la actualidad cultiva y \
        vende su producción <em>a la porta</em> en el almacén del Camí de \
        la Plana, los domingos en el Mercado de la Plaza María Agustina, \
        y realiza reparto directo a clientes.<em>[Entrevista, 2025]</em>",
        coordinates: [-0.035759, 39.994463],
        details: {
            address: "Camí de La Plana, 8",
            road: "Borrassa, Bovalar y La Plana",
            category: "Venta a la porta",
            status: "Activo",
            observation: "2025",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/23_Rafa_01.jpg", date: today },
            { url: "./images/23_Rafa_02.jpg", date: today }
        ]
    },
    {
        id: 24,
        title: "Juan",
        type: "",
        description: "Juan cultiva cítricos en 12 hanegadas repartidas en \
        4 fincas que eran propiedad de su esposa Rosa María, \
        fallecida en 2021. Antes era ella quien vendía <em>a la porta</em>,\
         mientras él se dedicaba exclusivamente al cultivo; actualmente \
         asume las dos actividades. Cultiva diferentes variedades de \
         clementinas, por lo que su producción cubre la temporada de \
         noviembre a marzo.<em>[Entrevista, 2025]</em>",
        coordinates: [-0.035444, 39.989388],
        details: {
            address: "Calle Sanahuja, 29",
            road: "Canet, Gumbau, La Plana y Senillar",
            category: "Venta a la porta",
            status: "Activo",
            observation: "2025",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/24_Juan_01.jpg", date: today }
        ]
    },
    {
        id: 25,
        title: "Rafa",
        type: "",
        description: "Cultiva cítricos en la zona de secano.\
        [Entrevista, 2025]",
        coordinates: [-0.037570, 39.992060],
        details: {
            address: " Calle de Almansa, 11",
            road: "s/d",
            category: "Venta a la porta",
            status: "Activo",
            observation: "2025",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/25_Rafa_01.jpg", date: today },
            { url: "./images/25_Rafa_02.jpg", date: today },
            { url: "./images/25_Rafa_03.jpg", date: today }
        ]
    },
    {
        id: 26,
        title: "Pepe",
        type: "",
        description: "No se dispone de información adicional.",
        coordinates: [-0.036631, 39.989914],
        details: {
            address: "Calle San Felix, 50",
            category: "Venta a la porta",
            status: "Inactivo",
            observation: "2025",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/26_Pepe_01.jpg", date: today }
        ]
    },
    {
        id: 27,
        title: "Sin identificar",
        type: "",
        description: "No se dispone de información adicional.",
        coordinates: [-0.036995, 39.991825],
        details: {
            address: "Calle San Miguel, 29",
            road: "s/d",
            category: "Venta a la porta",
            status: "Inactivo",
            observation: "2020",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/27_Desconocido_San_Miguel_01.jpg", date: today }
        ]
    },
    {
        id: 28,
        title: "Juan Antonio Camañ",
        type: "",
        description: "Juan Antonio Camañ continúa la actividad que durante \
        27 años desarrolló su madre Tónica, vendiendo los productos \
        cultivados por la familia en la partida de Brunella. \
        Sus padres y abuelos, tanto por parte materna como paterna, \
        eran agricultores. Por la mañana vende <em>a la porta</em> \
        y por la tarde trabaja el campo, manteniendo viva una tradición \
        agrícola de proximidad profundamente conectada a la vida \
        del barrio.<em>[Entrevista, 2023]</em>",
        coordinates: [-0.03302506464302525, 39.99131677385039],
        details: {
            address: "Calle Sanz de Bremond, 22 a",
            road: "Brunella",
            category: "Venta a la porta",
            status: "Activo",
            observation: "2020, 2023 y 2026",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "", date: "" }
                   ],
        video: [
            {url: "https://youtu.be/8Z03hg0hSok" }
        ]

    },
    {
        id: 29,
        title: "Juan Tomás Pérez Segarra",
        type: "2025",
        description: "Juan Tomás abre su punto de <em>venta la porta</em> \
        solo por las tardes, ya que por las mañanas cuida su parcela, \
        donde cultiva únicamente clementinas. <em>[Entrevista, 2025]</em>",
        coordinates: [-0.03302506464302525, 39.99131677385039],
        details: {
            address: "Calle Marqués de la Ensenada, 25",
            road: "La Plana",
            category: "Venta a la porta",
            status: "Activo",
            observation: "2025",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [

            { url: "./images/29_Juan_Tomás_Pérez_Segarra_01.jpg", date: today }
                   ]
    },
    {
        id: 30,
        title: "Agustín Agost Pascual",
        type: "",
        description: "Agustín ha cultivado cítricos toda su vida en sus \
        huertas de Ramell, donde tenía 7 hanegadas: la mitad de clementinas \
        y la otra mitad de Valencia Late. Antes del boom de las clementinas, \
        cultivaba naranjas de las variedades Blanca y Fina. También \
        poseía fincas en Almalafa y Coscollosa.<em>[Entrevista, 2018]</em>",
        coordinates: [-0.03496597922044713, 39.99055046211849],
        details: {
            address: "Calle Alcalde Tarrega, 41",
            road: "Coscollosa, Ramell y Almalafa",
            category: "Venta a la porta",
            status: "Inactivo",
            observation: "2018",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/30_Agustín_01.jpg", date: today },
            { url: "./images/30_Agustín_02_2018.jpg", date: today },
            { url: "./images/30_Agustín_03_2018.jpg", date: today },
            { url: "./images/30_Agustín_04_2018.JPG", date: today }
            
                   ],
        video: [
            {url: "https://youtu.be/pwJ0-6DafZo" }
        ]
    },
    {
        id: 31,
        title: "Pepe",
        type: "",
        description: "De diciembre a marzo/abril, Pepe vende <em>a la porta</em> \
        los productos de su huerta, de 8,5 hanegadas, situada en la partida Almalafa. \
        Continúa con la tradición familiar y no quiere abandonar el trabajo que \
        construyeron sus padres, aunque hoy resulte más costoso y exigente. Opta por \
        la venta directa también por una cuestión de rentabilidad: mientras que el \
        comerciante en el campo paga alrededor de 0,30 € por kilo de clementinas, \
        la venta <em>a la porta</em> le permite alcanzar los 1,50 € por kilo. \
        En la misma calle, hasta hace pocos años, otros dos productores practicaban \
        la venta directa, pero ya se han jubilado para cuidar a sus esposas.\
        <em>[Entrevista, 2026]</em>",
        coordinates: [-0.033121, 39.985908],
        details: {
            address: "Calle de Peñíscola, 2",
            road: "Almalafa",
            category: "Venta a la porta",
            status: "Activo",
            observation: "2026",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Pepe_01_2026.jpg", date: today }
                   ]
    },
    {
        id: 32,
        title: "Paquita",
        type: "",
        description: "Paquita vende los cítricos que su marido Tomás cultiva en su \
        finca de la partida de La Magdalena. Son árboles viejos, de baja producción, \
        cuya sustitución no resulta rentable. Su abuelo solía decir: <em>«La tierra \
        nos salvará»</em>, pero Paquita ya no lo cree.<em>[Entrevista, 2026]</em>",
        coordinates: [-0.039754, 39.989528],
        details: {
            address: "Calle Alonso de Arrufat, 18 C",
            road: "La Magdalena",
            category: "Venta a la porta",
            status: "Activo",
            observation: "2018 y 2026",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/32_Paquita_01_2026.jpg", date: today },
            { url: "./images/32_Paquita_02_2018.JPG", date: today }
                   ]
    },
    {
        id: 33,
        title: "Sasá",
        type: "",
        description: "Sasá vende los productos que cultiva su marido Julio.\
        <em>[Entrevista, 2026]</em>",
        coordinates: [-0.043832, 39.977596],
        details: {
            address: "Calle Amalio Gimeno, 16 C",
            road: "s/d",
            category: "Venta a la porta",
            status: "Activo",
            observation: "2026",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/33_Sasa_1_2026.jpg", date: today },
            { url: "./images/33_Sasa_2_2026.jpg", date: today }
                   ]
    },
    {
        id: 34,
        title: "Mari Carmen Agost",
        type: "",
        description: "Las propiedades donde se cultivan los cítricos proceden de herencias \
        de los abuelos de Mari Carmen y de los de su marido Antonio, técnico agrícola, \
        quien se dedica al cultivo de las 35 hanegadas. La composición social \
        del barrio ha experimentado cambios significativos en los últimos años, \
        lo que ha repercutido también en la clientela. Actualmente, Mari Carmen vende \
        principalmente a personas mayores y a población inmigrante, especialmente procedente \
        del norte de África y de Sudamérica.<em>[Entrevista, 2026]</em>",
        coordinates: [-0.041125, 39.991763],
        details: {
            address: "Ronda Vinatea, 22 C",
            road: "Almalafa, Ramell, Bovalar y Cap de Canet",
            category: "Venta a la porta",
            status: "Activo",
            observation: "2026",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/34_Mari_Carmen_01_2026.jpg", date: today },
            { url: "./images/34_Mari_Carmen_02_2026.jpg", date: today },
            { url: "./images/34_Mari_Carmen_03_2026.jpg", date: today }

                   ]
    },
    {
        id: 35,
        title: "Sin identificar",
        type: "",
        description: "No se dispone de información adicional.",
        coordinates: [-0.041830, 39.988086],
        details: {
            address: "Ronda Magdalena, 12 B",
            road: "s/d",
            category: "Venta a la porta",
            status: "Activo",
            observation: "2026",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/35_Ronda_Magdalena_01_2026.JPG", date: today }
                   ]
    },
    {
        id: 36,
        title: "Calzado Bartomeu",
        type: "",
        description: "En la entrada de la tienda de calzados Bartolomeu, mientras \
        estuvo abierta en esta dirección, se exponía una cesta con naranjas y su \
        precio, que se vendían en el interior del establecimiento.",
        coordinates: [-0.040146, 39.986014],
        details: {
            address: "Avenida Rey Don Jaime, 44",
            road: "s/d",
            category: "Venta a la porta",
            status: "Inactivo",
            observation: "2022, 2026",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/36_Bartolomeu_01_2022.jpg", date: today }
                   ]
    },
    {
        id: 37,
        title: "Delfina Palacios",
        type: "",
        description: "Delfina Palacios originaria de Jartos, pedanía de Yeste (Albacete), \
        a los 15 años se trasladó a Castellón para trabajar en el servicio doméstico, \
        como era habitual entre las jóvenes de la época. Aquí conoció a su marido, \
        agricultor con huerta propia dedicada al cultivo de cítricos. Tras enfermar su marido, \
        Delfina, con más de 80 años, sigue acudiendo a la huerta con él —\
         conduciendo sin carnet —, corta los cítricos, los coloca en las cajas y espera a\
          que sus hijos las recojan y las traigan al punto de venta. Cada mañana, Delfina \
          atiende la <em>porta</em> para vender su cosecha.<em>[Entrevista, 2026]</em>",
        coordinates: [-0.036661, 39.992501],
        details: {
            address: "Calle San Roque, 95 ",
            road: "La Mota",
            category: "Venta a la porta",
            status: "Activo",
            observation: "2026",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/37_Delfina_01_2026.JPG", date: today },
            { url: "./images/37_Delfina_02_2026.jpg", date: today },
            { url: "./images/37_Delfina_03_2026.jpg", date: today }
                   ]
    },
    {
        id: 38,
        title: "Tica Salvador Gual",
        type: "",
        description: "Tica vende exclusivamente naranjas Navelate, variedad tardía, \
        de enero a marzo. Su marido José se ocupa principalmente del cultivo — poda, \
        recolección, abono — y ella le ayuda. El padre de José compró 12 hanegadas de tierra \
        campa en Ramell, zona de secano, que a su muerte se repartieron entre los hermanos; a \
        ellos les correspondieron 6 hanegadas. Antiguamente regaban a manta y actualmente por \
        goteo con agua del Sindicato de Riegos.\
        El recorrido hasta la <em>venta a la porta</em> pasó por varias etapas: \
        primero vendieron a una cooperativa de l'Alqueria del Niño Perdido, \
        que abandonaron hace diez años por considerar que infravaloraba su producción. \
        Después participaron en el Mercado de Subasta, donde los corredores evalúan a ojo \
        la producción expuesta en grandes contenedores, sistema que también les resultó \
        insatisfactorio. Estuvieron tres años en el <em>Mercat de la Taronja</em> de la \
        Plaza Borrull, hasta que finalmente optaron por la <em>venta a la porta</em>, \
        donde se encuentran satisfechos.\
        Aunque en el barrio la competencia es notable, cuentan con una clientela fiel que aprecia \
        la calidad de las naranjas cultivadas en secano y recogidas a diario. La recolección diaria \
        se mantiene también por razones prácticas: el local de venta no dispone de espacio suficiente \
        para almacenar y la cosecha y transporte a diario son más sencillos de realizar.\
        Además de los vecinos del barrio, que acuden a pie con carros o bolsas, reciben clientes \
        de fuera — Almazora, Fadrell — y personas que, de viaje por España o al extranjero, \
        se llevan las naranjas para familiares y amigos.<em>[Entrevista, 2026]</em>",
        coordinates: [-0.035185064373992485, 39.99310137032916],
        details: {
            address: "Calle Alcalde Tárrega, 56",
            road: "Ramell",
            category: "Venta a la porta",
            status: "Activo",
            observation: "2026",
            contact: "",
            notes: ""
        },
        icon: "",
        markerImage: "./images/VaLP_verde.png",
        markerSize: 60,
        images: [
            { url: "./images/38_Tica_01_2026.jpg", date: today }
                   ]
    },
    {
        id: 39,
        title: "Wamba",
        type: "Estudio de fotografía (CNAE 7420)",
        description: "Atelier emblemático de Castellón durante más de ocho décadas. \
        Fundado por Vicente Traver Sanz y continuado por su hijo, Vicente Traver \
        Ardiez, Wamba documentó la vida pública y cotidiana de la ciudad: \
        festividades, inauguraciones, manifestaciones, escenas urbanas y detalles \
        domésticos, capturando la evolución social y arquitectónica de Castellón. \
        En su presentación en redes sociales se describió como: “Local comercial \
        dedicado al Arte Fotográfico, fundado en Castellón en 1936 bajo el nombre \
        Wamba”. \
        El archivo fotográfico Wamba constituye un testimonio visual único del \
        Castellón del siglo XX y principios del XXI. Sus imágenes reflejan \
        la vida pública y la intimidad de la ciudad, convirtiéndose en una \
        fuente esencial para preservar su memoria cultural y social. \
        La continuidad de la saga familiar permitió mantener vivo este \
        legado durante varias generaciones. El estudio permaneció activo \
        hasta el fallecimiento de Vicente Traver Ardiez, en 2021.\
        <em>[Entrevista: 2019, Fuentes hemerográficas: 2018 y 2021]</em>",
        coordinates: [-0.03743, 39.98449],
        details: {
            address: "Calle San Vicente, 40 (anteriormente Calle Mayor, 11)",
            category: "Tiendas históricas",
            activity: "1936–2021",
            foundation: "Vicente Traver Sanz",
            manager: "Vicente Traver Ardiez", 
            status: "Cerrado",
            store: "Cerrado",
            link: "https://www.elperiodicomediterraneo.com/castello/2021/01/11/castello-llora-wamba-fotografo-deja-40624182.html \
                    https://www.elperiodicomediterraneo.com/castello/2018/06/02/3a-generacion-wamba-jorge-deja-41318843.html",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ]
    },   
    {
        id: 40,
        title: "Discos Medicinales",
        type: "Tienda de música (CNAE 4763)",
        description: "Discos Medicinales fue fundada en 1983 por José Luis Roig y Miguel Ángel\
         Villanueva. El nombre respondía a la convicción de sus fundadores de que la \
         música posee una dimensión terapéutica. José Luis Roig definió su actividad \
         como <em>venta de discos en sus diferentes formatos: vinilos, CDs, casetes y \
         DVDs</em>. Durante más de tres décadas, el comercio se consolidó como punto de \
         referencia para la comunidad musical local, con un catálogo amplio y cuidadosamente \
         seleccionado, siendo en sus últimos años el único establecimiento especializado \
         exclusivamente en música en la ciudad.\
         El cierre, en el verano de 2019, no fue inesperado. Roig había reconocido en varias \
         ocasiones que era una  <em>muerte anunciada</em>: <em>A partir de los 2000 se \
         rompió el afán por comprar música. La gente ya no quería pagar por ella. En cinco \
         o seis años desaparecieron más de mil locales.</em> La piratería, la irrupción de \
         las grandes superficies y las plataformas digitales, junto a la falta de ayudas y \
         el elevado IVA cultural, hicieron insostenible el negocio.\
        Tras el cierre, el stock permaneció en un almacén hasta 2022, cuando fue adquirido \
        por Discos Oldies de Valencia, tienda especializada activa desde 1978, que lo \
        incorporó a su catálogo.\
        [Entrevista, 2019; Fuentes hemerográficas, 2019, 2022]",
        coordinates: [-0.03821, 39.98507],
        details: {
            address: "Calle Pascual Tirado, 1",
            category: "Tiendas históricas",
            activity: "1983–2019",
            foundation: "José Luis Roig y Miguel Ángel Villanueva",
            manager: "José Luis Roig y Miguel Ángel Villanueva", 
            status: "Cerrado",
            store: "Abierto, Talismán, bolsos y complementos",
            link: "https://castellonplaza.com/castellonplaza/discos-medicinales-cierra-su-emblematica-tienda-para-trasladarse-a-la-plaza-clave-en-septiembre\
                    https://www.elperiodicomediterraneo.com/castello/2021/01/10/castello-llora-fotografo-antonomasia-wamba-40625903.html\
                    https://castellonplaza.com/castellonplaza/discos-medicinales",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ]
    },   
    {
        id: 41,
        title: "Jeylo",
        type: "Tienda de electricidad, venta y reparación de aparatos (CNAE 4754)",
        description: "Desde 1963, Jeylo es un comercio emblemático del casco histórico de \
        Castellón. Fundado por Jesús Medrano y su esposa Dolores (Lolita) Badenes Gual, \
        el nombre surge de las iniciales del matrimonio. Inaugurado en noviembre de 1963, \
        el mismo día del asesinato del presidente John Fitzgerald Kennedy, acontecimiento \
        que muchos vecinos siguieron en directo en el propio establecimiento. Fue uno de \
        los primeros comercios de la ciudad en vender y reparar televisores, convirtiéndose \
        en un espacio de visionado comunitario en una época en que el televisor era todavía \
        un bien de lujo. Durante décadas, los vecinos se reunían en la tienda para seguir \
        acontecimientos colectivos — como la boda de Balduino y Fabiola — o para alquilar \
        tocadiscos y altavoces para fiestas locales.En la actualidad, Lola continúa al frente \
        del negocio a sus 90 años (2026), levantando la persiana cada día y atendiendo \
        personalmente a sus clientes, ejerciendo su <em>vocación como asesora en \
        electricidad del barrio centro</em>.\
        <em>[Entrevista, 2019; Fuentes hemerográficas, 2022, 2024]</em>",
        coordinates: [-0.03593, 39.98776],
        details: {
            address: "Calle Caballeros, 36",
            category: "Tiendas históricas",
            activity: "1963 –",
            foundation: "Dolores Badenes Gual y Jesús Medrano",
            manager: "Dolores Badenes Gual", 
            status: "Activo",
            store: "",
            link: "https://www.castelloninformacion.com/lola-badenes-maria-dinu-monica-avila-y-jm-arquimbau-premiados-por-mujeres-en-igualdad \
                https://www.elperiodicomediterraneo.com/castello-provincia/2022/06/19/historia-castellon-traves-mujeres-comerciantes-67271507.html\
                https://youtu.be/WP5uqeZjCto?si=79aXK1DbH_unzxTt",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ]
    },   
    {
        id: 42,
        title: "Bollería Fernández",
        type: "Bollería tradicional (CNAE 1071) ",
        description: "No se dispone de datos adicionales.",
        coordinates: [-0.03677, 39.98685],
        details: {
            address: "Calle Cervantes, 25",
            category: "Tiendas históricas",
            activity: "s/d",
            foundation: "s/d",
            manager: "s/d", 
            status: "Cerrado",
            store: "Cerrado",
            link: "",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ]
    },   
    {
        id: 43,
        title: "Panadería Vives",
        type: "Panadería tradicional (CNAE 1071)",
        description: "La Panadería Vives cuenta con más de un siglo de actividad ininterrumpida. \
        Sus fundadores, Jose Mele Molí y Antonia Benajes, originarios de Teruel, se trasladaron \
        a Castellón donde, en 1908, iniciaron la actividad panadera. El establecimiento ha \
        pasado por cinco generaciones: Jose Vives Domenech y Vicenta Mele Benajes (segunda); \
        Jose Vives Mele y Pilar Vilar Perís (tercera); José Antonio Vives y Milagros Traver \
        Portolés (cuarta); e Ivan, Carlos y María Vives Traver (quinta y actual).\
        A lo largo de estas generaciones, el establecimiento ha mantenido la elaboración \
        artesanal de productos tradicionales integrados en el calendario festivo y en la \
        cultura gastronómica local, como los pasteles de boniato y de cabello de ángel, \
        las monas de Pascua y el <em>Fadrinet</em>. \
        Milagros Traver señala que el oficio de panadero, que exige trabajo en horario \
        nocturno y una dedicación constante, resulta cada vez menos frecuente, lo que \
        explica la progresiva desaparición de los hornos tradicionales. Subraya asimismo \
        que la permanencia de este tipo de comercio de proximidad es fundamental para \
        preservar la cohesión social y la vitalidad de los barrios.\
        <em>[Entrevista, 2020 y 2026]</em>",
        coordinates: [-0.03736, 39.99226],
        details: {
            address: "Calle Cerdán de Tallada, 4",
            category: "Tiendas históricas",
            activity: "1908 - ",
            foundation: "Jose Mele Molí y Antonia Benajes",
            manager: " Iván Vives Traver, Carlos Vives Traver y María Vives Traver (quinta generación)", 
            status: "Activo",
            store: "",
            link: "",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ]
    },   
    {
        id: 44,
        title: "Panadería Virgilia",
        type: "Panadería tradicional (CNAE 1071)",
        description: "La Panadería Virgilia fue fundada en 1964 por Virgilia Aparici y \
        José Viciano, originarios de Almazora. Virgilia representaba la tercera generación \
        de una familia de panaderos: tras el fallecimiento de sus padres, ella y José, su \
        novio, decidieron contraer matrimonio y continuar con el horno familiar. Ante la \
        dificultad de consolidar clientela en Almazora, el matrimonio se trasladó a Castellón, \
        donde abrió un horno con reventa de pan en el actual emplazamiento de la calle Sanz \
        de Bremond, 19, manteniendo el carácter de panadería de barrio que lo ha definido \
        desde sus inicios.\
        José Virgilio Viciano Aparici, actual gerente y cuarta generación, comenzó a colaborar \
        en el negocio familiar desde temprana edad, antes de acudir al colegio. Mantiene la \
        actividad de forma artesanal, iniciando la jornada a las tres de la madrugada y \
        elaborando las recetas tradicionales transmitidas de generación en generación: \
        <em>panquemao</em>, <em>rosquilletas</em>, magdalenas y <em>ximos</em>. La panadería \
        cuenta además con una segunda sede en la calle Alcalde Tárrega, 44, atendida por \
        Mari Carmen Molín, esposa del actual gerente.\
        <em>[Entrevista, 2026]</em>",
        coordinates: [-0.03325, 39.99123],
        details: {
            address: "Calle Sanz de Bremond, 19",
            category: "Tiendas históricas",
            activity: "1964 -",
            foundation: "Virgilia Aparici y José Viciano",
            manager: "José Virgilio Viciano Aparici y Mari Carmen Molín", 
            status: "Activo",
            store: "",
            link: "",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ]
    },   
    {
        id: 45,
        title: "Tot Jove",
        type: "Tienda de moda (CNAE 4771)",
        description: "Provi Sales fundó Tot Jove en noviembre de 1979 en la calle Rafalafena, \
        14, y lo dirigió durante 45 años al servicio de su <em>fiel público</em> - \
        como define a sus clientes - antes de traspasar el local en 2024. El establecimiento, \
        en principio de moda unisex, abrió sus puertas en un local de unos 30 metros situado \
        en la acera opuesta a la ubicación actual, que hasta entonces había sido utilizado \
        por sus propietarios para secar jamones destinados al Mercado Central. El local \
        carecía de instalación eléctrica y de agua, y fue rehabilitado antes de su \
        apertura.\
        Provi Sales fue la primera en abrir un comercio en aquella calle, que describe como \
        completamente desprovista de actividad comercial en aquel momento. A raíz de su \
        apertura, fueron estableciéndose progresivamente otros negocios en el entorno, \
        muchos de los cuales han ido cerrando con el tiempo. En 2026, el establecimiento \
        sigue en activo bajo la gestión de Delia Valero.\
        <em>[Entrevista, 2020]</em>",
        coordinates: [-0.03248, 39.98839],
        details: {
            address: "Calle Rafalafena, 14",
            category: "Tiendas históricas",
            activity: "1979 - ",
            foundation: "Provi Sales",
            manager: "Provi Sales (1979-2024), Delia Valero (2024 - actualidad)", 
            status: "Activo - Traspasado",
            store: "",
            link: "",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ]
    },   
    {
        id: 46,
        title: "IMA Horchatería y Heladería",
        type: "Horchatería y heladería (CNAE 5610)",
        description: "IMA Horchatería fue fundada en 1969 por Rosenda Alcaide e Ismael Pérez, \
        originarios de Béjis. Antes de establecerse en Castellón, el matrimonio criaba \
        cerdos y vendía carne en su localidad natal, distribuyéndola incluso a clientas \
        de Benimaclet y Valencia, que Ismael llevaba en tren. Fue precisamente una de esas \
        clientas quien le sugirió trasladarse a Castellón para dedicarse a la elaboración de \
        horchata. Llegaron poco antes de Pascua de 1969 e iniciaron su actividad en la calle \
        Conde Noroña, donde encontraron un local con un único molino y una lavadora, siendo \
        el resto del proceso completamente manual. En aquella época la empresa se llamaba \
        Horchatería Castalia.\
        Los inicios del negocio estuvieron marcados por la tradición del barrio: las comuniones \
        se celebraban en casa y el establecimiento servía pedidos de hasta 40 litros de horchata \
        para las celebraciones familiares. Rosenda recuerda que en Castellón siempre se tomó \
        horchata líquida, a diferencia de Valencia donde se consumía granizada, y que llegaron \
        a repartir carteles en los bares del barrio anunciando <em>horchata líquida</em>. \
        En 1971 el negocio pasó a llamarse IMA y en 1980 se trasladó a su ubicación actual \
        la Avenida Capuchinos, 13.\
        Durante su etapa en la calle Conde Noroña, el establecimiento formaba parte de un \
        tejido comercial de barrio, hoy en gran parte desaparecido: el Cine Azul, un quiosco, \
        dos alpargaterías, un tapicero y la señora Anita, abuela de Toni el Figuero de \
        <em>La botiga de la figa</em>, que vendía churros en el mercado, componían el entorno \
        cotidiano del negocio.\
        Ismael, músico de la banda de Béjis, nunca dejó de regresar a su pueblo natal \
        cada viernes para los ensayos, y desde hace más de 45 años la familia sube horchata \
        a Béjis durante las fiestas del pueblo para repartirla gratuitamente entre los vecinos. \
        Tras el fallecimiento de Ismael, es su hijo Luis quien mantiene viva esta tradición. \
        En 2001, la gestión del establecimiento pasó a manos de su hija Inma Pérez, \
        quien incorporó la actividad de heladería artesanal.\
        Como señala Rosenda: <em>«la horchata ha sido medicinal en esta tierra toda \
        la vida»</em>.\
        <em>[Entrevista, 2020]</em>",
        coordinates: [-0.03419, 39.98969],
        details: {
            address: "Avenida Capuchinos, 13 ",
            category: "Tiendas históricas",
            activity: "1969 –",
            foundation: "Rosenda Alcaide e Ismael Pérez",
            manager: " Inma Pérez (2001 – actualidad)", 
            status: "Activo",
            store: "",
            link: "",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "https://youtu.be/RjnhSng8MYk?si=Jb9pygjmSFiLObw7" }
        ]
    },   
    {
        id: 47,
        title: "J. Saura",
        type: "Tienda de productos a granel (CNAE 4721)",
        description: "J. Saura es una tienda de productos a granel fundada alrededor de 1950 \
        por Jaime Saura. En sus orígenes funcionó principalmente como almacén de piensos \
        para animales, respondiendo a una realidad de barrio en la que las familias criaban \
        gallinas, pollos, patos y conejos en sus propias casas. Con el tiempo, al desaparecer \
        esta costumbre, el negocio fue evolucionando hacia la venta de legumbres — garbanzos, \
        lentejas, alubias — y frutos secos, conservando el carácter de comercio tradicional \
        a granel. Entre los productos que ofrece se encuentran también arroz, harina, \
        aceitunas, altramuces y levadura, esta última disponible únicamente en época de \
        Pascua.\
        El establecimiento ha pasado por tres generaciones: del fundador Jaime Saura a la \
        segunda generación, formada por dos de sus hijos - entre ellos la madre de Jaime -  \
        y finalmente a la actual, representada por Jaime Brun Saura y su hermana. En 1981, \
        las hijas del hijo del fundador abrieron un establecimiento propio bajo el nombre \
        de Nietas de J. Saura, ampliando así el legado familiar en el comercio tradicional \
        de la ciudad. Jaime Brun Saura señala que este tipo de establecimientos son cada vez \
        más escasos y tienden a desaparecer.\
        <em>[Entrevista, 2025]</em>",
        coordinates: [-0.04033, 39.98983],
        details: {
            address: "Plaza del Maestrazgo, 2",
            category: "Tiendas históricas",
            activity: "~1950 –",
            foundation: "Jaime Saura",
            manager: "Jaime Brun Saura (tercera generación)", 
            status: "Activo",
            store: "",
            link: "",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "" }
        ]
    },   
    {
        id: 48,
        title: "Nietas de J. Saura",
        type: "Tienda de productos a granel (CNAE 4721)",
        description: "Nietas de J. Saura fue fundada en 1984 por las hermanas Mari Carmen y \
        Nuria Saura, nietas de Jaime Saura, fundador del establecimiento homónimo de la \
        Plaza del Maestrazgo. El negocio representa la tercera generación de una familia \
        dedicada al comercio de productos a granel, cuyos orígenes se remontan a un \
        almacén de piensos para animales — trigo, salvado, maíz — en una época en que \
        las familias de Castellón criaban gallinas y conejos en sus propias casas. Con \
        el paso de los años, el negocio fue evolucionando hacia la venta de legumbres y \
        frutos secos a granel, priorizando el producto nacional. En los últimos tiempos, \
        el establecimiento amplió su oferta para responder a las nuevas demandas del mercado, \
        incorporando productos para vegetarianos, veganos, celíacos e intolerantes alimentarios.\
        Tras 40 años de actividad en la calle Trinidad, las hermanas Saura se jubilaron en 2025 \
        con alegría, aunque también con <em>penita en el corazón</em>, emocionadas por el cariño \
        demostrado por su clientela a lo largo de todos estos años.\
        <em>[Entrevista, 2025]</em>",
        coordinates: [-0.04032, 39.98229],
        details: {
            address: "Calle Trinidad, 94",
            category: "Tiendas históricas",
            activity: "1984–2025",
            foundation: "Mari Carmen y Nuria Saura",
            manager: "Mari Carmen y Nuria Saura", 
            status: "Cerrado",
            store: "Se traspasa",
            link: "https://www.elperiodicomediterraneo.com/castello/2025/12/24/despedida-comercio-emblematico-castello-saura-nietas-negocio-frutos-secos-125103890.html",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "" }
        ]
    },   
    {
        id: 49,
        title: "Patatas J. García",
        type: "Elaboración artesanal de patatas fritas y frutos secos (CNAE 1084)",
        description: "Empresa familiar fundada a comienzos de los años ochenta por Javier \
        García y Yolanda Cosín, quienes iniciaron su actividad elaborando churros, \
        buñuelos y patatas fritas mediante métodos tradicionales, vendidos en papelinas \
        en su propio establecimiento. En 1990, ante el crecimiento de la demanda tanto de \
        particulares como de pequeños comercios, iniciaron el envasado del producto y \
        ampliaron la producción sin abandonar el modelo artesanal. La empresa ha mantenido \
        como principio fundamental la prioridad de la tradición frente a la innovación, \
        seleccionando materias primas de alta calidad y rechazando productos que no cumplan \
        sus estándares organolépticos — como determinadas nueces importadas — en favor de \
        proveedores nacionales o europeos sin tratamientos industriales.\
        Yolanda describe la relación con sus clientes como algo que trasciende el ámbito \
        comercial: muchos de ellos son clientes de toda la vida cuyos hijos y nietos \
        siguen frecuentando el establecimiento. El negocio atrae también a visitantes \
        extranjeros — franceses, ingleses — que hacen del establecimiento una parada \
        obligada durante sus vacaciones en la ciudad.\
        En abril de 2025, tras 42 años de actividad, la sociedad fue traspasada a un \
        empresario de Castellón que mantiene la plantilla y la filosofía original de la marca.\
        <em>[Entrevista, 2021]</em>",
        coordinates: [-0.03479, 39.98646],
        details: {
            address: "Calle Aarau, 3",
            category: "Tiendas históricas",
            activity: "1982 –",
            foundation: "Javier García y Yolanda Cosín",
            manager: "Javier García y Yolanda Cosín (1982–2025), nuevo propietario (2025 – actualidad)", 
            status: "Activo - Traspasado",
            store: "",
            link: "https://economia3.com/2017/06/20/123972-patatas-fritas-j-garcia-no-nos-basamos-en-la-innovacion-sino-en-la-tradicion-2/",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "" }
        ]
    },   
    {
        id: 50,
        title: "Horno Adell",
        type: "Elaboración artesanal de patatas fritas y frutos secos (CNAE 1084)",
        description: "Panadería en funcionamiento documentado desde 1875, actualmente \
        gestionada por Manolo Fuentes Adell y su esposa Raquel Ferragut, tercera generación. \
        Mantiene la elaboración tradicional con horno de leña y una producción artesanal \
        de pan y especialidades como magdalenas, cocas, rollos y <em>pastissets de boniato</em>. \
        Las fotografías del establecimiento documentan la presencia de Manuel Fuentes Amela, \
        quien continuó colaborando en el negocio familiar tras su jubilación — testimonio de \
        la continuidad generacional que caracteriza a este tipo de comercio tradicional. \
        Con más de un siglo y medio de actividad ininterrumpida, figura entre los \
        establecimientos comerciales más antiguos documentados de Castellón.\
        <em>[Fuentes hemerográficas, 2017, 2019]</em>",
        coordinates: [-0.039375, 39.986361],
        details: {
            address: "Calle Alloza, 58",
            category: "Tiendas históricas",
            activity: "1875 –",
            foundation: "Alfredo Adell Bellés",
            manager: "Manolo Fuentes Adell y Raquel Ferragut", 
            status: "Activo",
            store: "",
            link: "https://www.elperiodicomediterraneo.com/castello/2017/06/03/hornos-tradicionales-forman-parte-historia-41531238.html \
                    https://www.elperiodicomediterraneo.com/ocio/gastronomia/2019/01/14/pan-arte-castellon-41181061.html",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "" }
        ]
    },   
    {
        id: 51,
        title: "El Niño",
        type: "Juguetería (CNAE 4765)",
        description: "El recorrido de esta familia de comerciantes en juguetería constituye \
        un ejemplo singular de continuidad comercial y transmisión familiar a lo largo de \
        cuatro generaciones. El establecimiento El Niño abrió en su sede actual en 1968, \
        pero los orígenes de esta familia en el comercio se remontan a finales del siglo XIX, \
        cuando Rosa Serrano comenzó con una <em>tauleta</em> en la entrada del Teatro Principal \
        con la que vendía caramelos, frutos secos, calabaza al horno y otros alimentos típicos \
        de la época. Tras la Guerra Civil, y con la colaboración de su hijo Jaime, quien contaba \
        con estudios superiores con los jesuitas, Rosa Serrano transformó el negocio familiar en \
        una juguetería, instalada en el bajo donde residían, en la calle San Félix, 67. A lo largo \
        de las décadas siguientes, el establecimiento atravesó varios traslados: primero a la calle \
        Zaragoza, 24; posteriormente a la Ronda Mijares, 2; y finalmente, en 1968, a su sede actual \
        en la calle Zaragoza, 17, donde tomó el nombre actual.\
        En la actualidad, el negocio está regentado por Nuria Fabregat, quien comparte la \
        gestión diaria con su madre, María Rosa Tena Beltrán, aún activa en el establecimiento. \
        Ambas destacan el significado que la actividad comercial ha tenido en sus vidas: la calle \
        Zaragoza ha sido para ellas, al mismo tiempo, hogar y comunidad. El vínculo con el barrio \
        se ha extendido también a empleados y vecinos; es especialmente significativa la figura de \
        Mari Carmen Roig, colaboradora del establecimiento desde 1969 hasta 2008, considerada parte \
        de la familia.\
        El relato de madre e hija ilustra una cultura comercial basada en la cohesión vecinal \
        y la solidaridad entre comerciantes. Un ejemplo es la relación mantenida con la \
        juguetería El Juguete Roig, establecimiento próximo con el que existía una práctica \
        de préstamo de artículos: cuando uno de los negocios carecía de un juguete determinado, \
        lo solicitaba al otro en préstamo para su venta, restituyéndolo una vez repuesto \
        el <em>stock</em>.\
        Nuria Fabregat subraya que el elemento que más la vincula a este tipo de comercio es \
        la relación con los clientes, que trasciende el simple acto de compraventa para \
        convertirse en un lazo personal duradero. Señala, asimismo, un cambio significativo \
        en los hábitos de consumo: mientras que en el pasado los juguetes eran objeto de \
        deseo prolongado y a menudo adquiridos mediante pagos fraccionados, la clientela \
        actual, compuesta principalmente por personas de edad avanzada, tiende a realizar \
        compras por impulso.\
        <em>[Entrevista, 2026]</em>",
        coordinates: [-0.041472, 39.987358],
        details: {
            address: "Calle Zaragoza, 17",
            category: "Tiendas históricas",
            activity: "1968 –",
            foundation: "María Rosa Tena Beltrán",
            manager: "Nuria Fabregat", 
            status: "Activo",
            store: "",
            link: "",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "" }
        ]
    },   
    {
        id: 52,
        title: "Panadería Macián",
        type: " Panadería y bollería con horno artesanal tradicional (CNAE 1071)",
        description: "La Panadería Macián inició su actividad en 1947, cuando Rosalía Palos \
        García y Pedro Macián Salvador establecieron su primer obrador en la calle La Unión \
        de Castellón. En 1950, el negocio se trasladó a su actual ubicación en la \
        calle Mayor, 12, donde ha permanecido de forma ininterrumpida hasta hoy. \
        Desde su fundación, el establecimiento ha mantenido métodos de producción \
        tradicionales y la elaboración de productos típicos locales, preservando \
        técnicas artesanales frente a los procesos industriales que han transformado \
        el sector panadero a lo largo del siglo XX.Entre sus productos más emblemáticos \
        como las pelotas de fraile, los <em>ximos</em>, las ensaimadas, las cocas, \
        destacan los <em>pastelitos de boniato</em>, cuya incorporación al obrador \
        responde a una historia singular: fue Mercedes Vicente, madre de Marimer Sidro, \
        quien sugirió que una amiga suya, Teresa, conocida en su entorno por la calidad \
        excepcional de estos dulces, acudiera a enseñar la receta a los panaderos. \
        El éxito fue tal que, de elaborarse únicamente en Navidad, pasaron a producirse \
        durante todo el año.\
        <em>[Entrevista, 2022]</em>",
        coordinates: [-0.0373419, 39.9844299],
        details: {
            address: "Calle Mayor, 12",
            category: "Tiendas históricas",
            activity: "1947 –",
            foundation: "Rosalía Palos García y Pedro Macián Salvador",
            manager: "Pedro Macián Sidro y Marimer Sidro (tercera generación)", 
            status: "Activo",
            store: "",
            link: "https://www.elperiodic.com/castellon/ayuntamiento-castellon-homenaje-cinco-establecimientos-gala-comercio-siempre_52206",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "https://youtu.be/bOBUSJCj7Ik?si=Y9wSBniXYz4dNv-I" }
        ]
    },   
    {
        id: 53,
        title: "Casa Edo",
        type: "Venta de productos de peluquería y cosmética (CNAE 4775)",
        description: "Casa Edo fue fundada a finales de los años cincuenta por Vicente Edo \
        y su esposa Presentación. Vicente, barbero de oficio, se sacó el título de agente \
        comercial para visitar peluquerías y vender productos del sector, mientras \
        Presentación atendía la tienda, donde se vendían productos de perfumería, \
        droguería y peluquería. El local, situado en la calle Rosel, ocupaba originalmente \
        la planta baja de una vivienda familiar que con el tiempo fue transformada en \
        establecimiento comercial.\
        Entre las prácticas del negocio en sus inicios destaca la elaboración artesanal \
        de champús — de menta, fresa y huevo — y de perfumes, ambos vendidos a granel: los \
        clientes acudían con sus propios recipientes y compraban por mililitros, práctica hoy \
        en día no permitida. Con el paso de los años, los hijos se incorporaron al negocio \
        y posteriormente cada uno siguió su propio camino; la madre de Raquel, María Teresa, \
        se quedó al frente del establecimiento. Actualmente, Raquel Badenas Edo, tercera \
        generación, gestiona el negocio, que mantiene una clientela mixta de particulares \
        y profesionales del sector.\
        <em>[Entrevista, 2025]</em>",
        coordinates: [-0.040253, 39.989099],
        details: {
            address: "Calle Rosel, 18-D",
            category: "Tiendas históricas",
            activity: "1959 –",
            foundation: "Vicente Edo y Presentación",
            manager: "Raquel Badenas Edo (tercera generación)", 
            status: "Activo",
            store: "",
            link: "",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "" }
        ]
    },   
    {
        id: 54,
        title: "Lledó, alpargatas artesanas",
        type: "Fabricación artesanal y venta de alpargatas (CNAE 1520)",
        description: "Establecimiento dedicado a la fabricación artesanal y venta de \
        alpargatas, gestionado por Lledó y Agustín, continuadores de la actividad de \
        un alpargatero procedente de Villores, pequeño municipio - 53 habitantes según \
        el INE (2025) - que mantuvo históricamente una especialización ligada a la \
        confección de alpargatas. El taller conserva técnicas y saberes propios de este \
        oficio tradicional, vinculando la práctica artesanal con la memoria productiva del \
        territorio. El proceso de elaboración combina materiales tradicionales - suela de \
        goma, tela y talón - cosidos a mano. Entre los productos que se elaboran destacan \
        las alpargatas para baile regional. Agustín señala que el oficio está en declive: \
        en Villores ya no se practica y los escasos talleres que quedan se concentran en \
        la zona de Logroño.\
        <em>[Entrevista, 2020]</em>",
        coordinates: [-0.03305, 39.99057],
        details: {
            address: "Calle Perot de Granyana, 2",
            category: "Tiendas históricas",
            activity: "s/d –",
            foundation: "s/d",
            manager: "Lledó Mundo y Agustín s/d", 
            status: "Activo",
            store: "",
            link: "",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "" }
        ]
    },   
    {
        id: 55,
        title: "Marton Centro de Sonido",
        type: "Establecimiento especializado en electrónica audiovisual (CNAE 4743)",
        description: "Marton Centro de Sonido nació en los años setenta en la calle Segorbe, \
        donde Vicente Marqués regentaba una tienda de electrodomésticos y su hijo Toni \
        aprendió el oficio. Fue Toni Marqués quien fundó Marton de forma independiente, \
        especializándola en sonido. En sus inicios, el negocio se dedicaba principalmente a \
        la instalación y reparación de autorradios y a la instalación de equipos de sonido \
        en discotecas de toda la provincia. En 1978 el negocio se trasladó al local de más \
        de 600 metros de la calle Enmedio, 103, donde consolidó su actividad.\
        Con el tiempo, Marton se convirtió en referente provincial de la electrónica \
        audiovisual, llegando a contar con 18 empleados en su etapa de mayor actividad. \
        Participó en la sonorización e iluminación de los principales eventos de la ciudad — \
        entre ellos las fiestas de la Magdalena, el <em>Magdalena Vítol</em> y actos \
        institucionales de la Diputación — y se especializó en producción audiovisual a \
        través de su marca Marton Broadcast. Fue pionera en la instalación de antenas \
        parabólicas en la provincia.\
        Tras el fallecimiento de Toni Marqués en febrero de 2020, su esposa Inmaculada \
        asumió la gestión del establecimiento junto a Toni Caballer como encargado. \
        En 2023, Marton cerró definitivamente tras la jubilación de ambos.\
        <em>[Fuentes hemerográficas, 2023]</em>",
        coordinates: [-0.03777, 39.98795],
        details: {
            address: "Calle Enmedio, 103 (anteriormente Calle Segorbe, 51)",
            category: "Tiendas históricas",
            activity: "años 70 – 2023",
            foundation: "Toni Marqués (Antonio Marqués)",
            manager: "Toni Marqués, Inmaculada Marqués y Toni Caballer", 
            status: "Cerrado",
            store: "En venta",
            link: "https://www.elperiodicomediterraneo.com/castello/2023/01/09/marton-tienda-sonido-castellon-cierra-calle-enmedio-comercio-80927527.html \
                    https://castellonplaza.com/castellonplaza/castellon-despide-un-pedazo-de-su-historia-audiovisual-cierra-marton-tras-medio-siglo",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "" }
        ]
    },   
    {
        id: 56,
        title: "Pepe Renau",
        type: "Tienda de moda (CNAE 4771)",
        description: "Pepe Renau fue fundada en 1986 por José Renau Fauró y Ana Silvestre \
        Torner en la calle Caballeros, 17, local que había albergado previamente el primer \
        establecimiento comercial moderno, Lemon, inaugurado en 1970 por Leopoldo Monfort \
        Berenguer. José Renau, que había sido gerente de Lemon, decidió emprender su \
        propio proyecto comercial en el sector de la moda, eligiendo el emblemático \
        local de la calle Caballeros donde todo había comenzado. Actualmente el negocio \
        está gestionado por su hijo José Miguel Renau Silvestre y Nuria, su esposa. \
        Con el tiempo, el establecimiento se ha especializado en moda para personas \
        mayores, consolidándose como un referente para los habitantes del casco histórico.\
        <em>[Entrevista, 2026]</em>",
        coordinates: [-0.036570, 39.986990],
        details: {
            address: "Calle Caballeros, 15-17",
            category: "Tiendas históricas",
            activity: "1986 –",
            foundation: "José Renau Fauró y Ana Silvestre Torner",
            manager: "José Miguel Renau Silvestre y Nuria", 
            status: "Activo",
            store: "",
            link: "",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "" }
        ]
    },   
    {
        id: 57,
        title: "Estanco de la Cua (CS 15)",
        type: "Estanco — tabaco, prensa y lotería (CNAE 4726)",
        description: "El Estanco CS 15 o Estanco de la Cua lleva en activo desde 1921, \
        cuando Dolores Huguet, abuela de los actuales gestores, que regentaba un bar \
        en la misma esquina, obtuvo la licencia de estanco. El hijo de Dolores Huguet \
        era cazador de unos pequeños pájaros conocidos como <em>cueters</em>, de esta \
        especie de pájaros viene el nombre Cua. Desde entonces, el establecimiento ha \
        permanecido en el mismo local de la Ronda Magdalena, convirtiéndose en un \
        referente del barrio a lo largo de tres generaciones: de Dolores Huguet a su hija \
        Dolores, y finalmente a los actuales gestores, Javier y María Dolores.\
        A lo largo de los años, debido al cambio de los estilos de vida, el negocio fue \
        diversificando su oferta más allá del tabaco, incorporando prensa, artículos \
        de fumador y lotería. Fueron pioneros en la venta de la Primitiva en Castellón \
        cuando todavía era poco conocida. Javier subraya que la clave del negocio ha sido \
        siempre el trato personal y la atención a los clientes del barrio, a quienes \
        atribuye la supervivencia del negocio. El estanco cerrará en los próximos años \
        con su jubilación, sin continuidad generacional: nadie quiere continuar un negocio \
        cuyo producto principal, el tabaco, tiene un futuro incierto.\
        <em>[Entrevista, 2025]</em>",
        coordinates: [-0.040696, 39.989925],
        details: {
            address: "Ronda Magdalena, 31",
            category: "Tiendas históricas",
            activity: "1921 –",
            foundation: "Dolores Huguet",
            manager: "Javier y María Dolores (tercera generación)", 
            status: "Activo",
            store: "",
            link: "https://www.elperiodicomediterraneo.com/castello-provincia/2023/11/26/comercios-castellon-vida-sello-centenarios-siglo-95102092.html",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "" }
        ]
    },   
    {
        id: 58,
        title: "Breva, tapicería",
        type: "Tapicería (CNAE 9524)",
        description: "El fundador Jose Breva comenzó a aprender el oficio de tapicero en 1950, \
        con trece años, en la tapicería de José Antonio Pasuanga en la calle Pintor Castellano. \
        Hijo de un soldado muerto en la Guerra Civil a quien nunca conoció, se crió con su madre \
        y su hermana, y eligió el oficio por vocación en una época en que los jóvenes tenían \
        acceso a múltiples oficios de aprendiz. En 1964, tras casarse, fundó su propio taller, \
        primero en un local enfrente del actual y desde 1973 en la calle Trinidad, 104. \
        En 1996, al jubilarse, cedió la gestión a su hijo, aunque continúa acudiendo al \
        taller para colaborar — reflejo del patrón de continuidad generacional que caracteriza \
        a este tipo de comercio tradicional.\
        La especialización en tapizado de paredes y techos, con un sistema propio desarrollado \
        por el fundador, llevó al taller más allá de Castellón: ha trabajado en Valencia, \
        Zaragoza, Teruel, Madrid, y en proyectos en Inglaterra y Dubái. En Castellón realizó \
        trabajos para la Fundación Dávalos Fletcher, la Diputación, el Ayuntamiento y varias \
        entidades bancarias. Actualmente el hijo gestiona una agenda de dos meses de espera, \
        testimonio de la reputación acumulada a lo largo de décadas.\
        Sobre la calle Trinidad, el fundador recuerda un barrio más denso y familiar, con \
        casas ocupadas por dos o tres familias, hoy en buena parte vacías, atribuye, por \
        la falta de aparcamiento.\
        <em>[Entrevista, 2026]</em>",
        coordinates: [-0.03305, 39.99057],
        details: {
            address: "Calle Trinidad, 104",
            category: "Tiendas históricas",
            activity: "1964 –",
            foundation: "Jose Breva Pastor",
            manager: "Jose Breva Pastor (fundador, 1964–1996), Antonio Tomás Breva Nebot (hijo, 1996–actualidad)", 
            status: "Activo",
            store: "",
            link: "",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "" }
        ]
    },   
    {
        id: 59,
        title: "La Farola",
        type: " Quiosco de prensa (CNAE 4762)",
        description: "Carlos Tosca, responsable del negocio familiar, mantuvo el quiosco \
        abierto durante la pandemia como servicio público esencial. Paradójicamente, aunque \
        aquellos meses registraron un aumento de la demanda de periódicos y revistas de \
        proximidad, el quiosco cerró poco después. Actualmente el local alberga La Pajarita \
        Roja Editores y Artelirium, estudio de fotografía.\
        <em>[Fuentes hemerográficas, 2020]</em>",
        coordinates: [-0.042449347272556524, 39.98801531813292],
        details: {
            address: "Plaza Independencia, 6",
            category: "Tiendas históricas",
            activity: "~1980 – 2022",
            foundation: "s/d",
            manager: "Carlos Tosca", 
            status: "Activo, cambio de actividad",
            store: "",
            link: "https://www.elperiodicomediterraneo.com/castello/2020/05/21/crisis-gente-busca-noticias-veraces-40812943.html",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "" }
        ]
    },   
    {
        id: 60,
        title: "Sombrerería Fenollosa",
        type: "Sombrerería tradicional (CNAE 1419)",
        description: "Sombrerería fundada en 1918 y especializada en la fabricación y venta \
        de sombreros y gorras para caballero y señora. Permaneció en manos de la familia \
        Fenollosa durante más de un siglo, hasta su cierre en 2024.\
        <em>[Fuentes hemerográficas, 2025]</em>",
        coordinates: [-0.041437, 39.987692],
        details: {
            address: "Calle Zaragoza, 15",
            category: "Tiendas históricas",
            activity: "1918–2024",
            foundation: "Familia Fenollosa",
            manager: "Familia Fenollosa", 
            status: "Cerrado",
            store: "En venta",
            link: "https://cadenaser.com/comunitat-valenciana/2025/04/28/la-mitica-merceria-elias-y-la-centenaria-sombrereria-fenollosa-bajan-la-persiana-de-sus-tiendas-en-el-centro-de-castellon-radio-castellon\
                    https://www.elperiodicomediterraneo.com/castello/2025/04/29/adios-comercios-tota-vida-castello-jubilacion-tradicion-116873397.html",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "" }
        ]
    },   
    {
        id: 61,
        title: "Salazones Giner y Verchili",
        type: "Salazones y coloniales (CNAE 4723)",
        description: "Comercio histórico de salazones fundado en 1907 por Fernando Vivas \
        Silvestre y su esposa Rosario Lloret — conocida en el Mercat Central como <em>Rosarito \
        La Paloma</em> por el uniforme de blanco inmaculado con el que despachaba el género. \
        El negocio nació como almacén de salazones y coloniales especializado en bacalao en \
        salazón y sardina de bota, productos fundamentales en la alimentación urbana de \
        principios del siglo XX. Como recuerda Fernando Vivas, nieto del fundador: \
        <em>«Estamos hablando de una época en la que no había neveras, ni había granjas de \
        cerdos ni de aves, lo que hacía estas carnes inaccesibles para la mayoría de la \
        población»</em>. En aquel contexto, Fernando Vivas Silvestre llegó a figurar entre \
        los cinco mayores contribuyentes de Castellón.\
        Con la llegada de las primeras grandes granjas de cerdos y aves en los años 60 y el \
        consiguiente abaratamiento de la carne, el negocio fue diversificando su oferta. En 1977, \
        Ricardo, hijo de los fundadores, cedió el testigo a Manuel Giner y José María Verchili, \
        que rebautizaron el comercio como Salazones Giner y Verchili. En los últimos diez años, \
        Guillermo Verchili y José Vicente Sales — que llevaban en el negocio desde 1977 y 1975 \
        respectivamente — asumieron la gestión principal, manteniendo la reputación del establecimiento \
        por la calidad de sus conservas y salazones.\
        El edificio, situado frente al histórico edificio de Correos, conserva en una de sus \
        rejas las marcas de metralla de una bomba de la Guerra Civil. La oficina trasera del \
        establecimiento fue durante largo tiempo sede de reuniones vecinales y tertulias en \
        torno a la actualidad del Club Deportivo Castellón.\
        El cierre, el 30 de septiembre de 2021, se produjo por jubilación de sus responsables \
        y ausencia de relevo generacional, poniendo fin a más de un siglo de actividad \
        continuada.\
        <em>[Fuentes hemerográficas, 2021]</em>",
        coordinates: [-0.040560, 39.987572],
        details: {
            address: "Plaza Tetuán, 10",
            category: "Tiendas históricas",
            activity: "1907–2021",
            foundation: "Fernando Vivas Silvestre y Rosario Lloret",
            manager: "Guillermo Verchili y José Vicente Sales", 
            status: "Cerrado",
            store: "Abierto, Istambul kebab y pizzeria",
            link: "https://www.elperiodicomediterraneo.com/gente-de-castellon/2021/09/30/comercio-tradicional-castello-baja-persiana-57616951.html\
                    https://www.elperiodicomediterraneo.com/gente-de-castellon/2021/09/24/galeria-fotos-adios-siglo-historia-57619210.html\
                    https://www.elperiodic.com/castellon/ayuntamiento-castellon-homenaje-cinco-establecimientos-gala-comercio-siempre_52206",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "" }
        ]
    },   
    {
        id: 62,
        title: "Trini, La casa de los Jamones",
        type: "Tienda tradicional de ultramarinos y delicatessen (CNAE 4721)",
        description: "Trini, La casa de los Jamones fue fundada en 1964 por Trinidad, \
        quien estuvo al frente del establecimiento durante quince años. En 1979 Carmen \
        Salvador y su marido se hicieron cargo del negocio, regentándolo durante casi \
        cuatro décadas. Durante más de cincuenta años, el local fue un referente en la \
        calle Enmedio para la venta de jamones, embutidos, vinos, miel y otros productos \
        de calidad. El cierre en 2018, motivado por la jubilación de los últimos propietarios, \
        se produjo sin relevo generacional.\
        <em>[Fuentes hemerográficas, 2018]</em>",
        coordinates: [-0.03722, 39.98826],
        details: {
            address: "Calle Enmedio, 138",
            category: "Tiendas históricas",
            activity: "1964–2018",
            foundation: "Trinidad (apellido desconocido)",
            manager: " Carmen Salvador y su marido (1979–2018)", 
            status: "Cerrado",
            store: "Abierto, Taberna Enmedio 138",
            link: "https://www.elperiodicomediterraneo.com/castello/2018/06/10/jamones-trini-tienda-vida-cierra-41313944.html",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "" }
        ]
    },   
    {
        id: 63,
        title: "Mario",
        type: "Quiosco de prensa (CNAE 4762)",
        description: "Quiosco de prensa abierto durante la Magdalena de 1970 por Mario Alba \
        Gasque y Rosa María en un local procedente de una antigua relojería en la calle \
        Mayor, 100. Posteriormente ampliaron el negocio con un segundo punto de venta en el \
        Mercado Central. Hoy lo gestionan sus hijos Miguel y Rosa. Como todos los quioscos \
        de prensa, afronta la crisis del sector derivada de la digitalización de la información.\
        <em>[Fuentes hemerográficas, 2023, 2026]</em>",
        coordinates: [-0.04247415146950542, 39.98817478834645],
        details: {
            address: "Calle Mayor, 100 y Plaza Santa Clara (Mercado Central)",
            category: "Tiendas históricas",
            activity: "1970 –",
            foundation: "Mario Alba Gasque y Rosa María",
            manager: "Rosa y Miguel Alba Tille", 
            status: "Activo",
            store: "",
            link: "https://www.elperiodicomediterraneo.com/castello/2018/06/10/jamones-trini-tienda-vida-cierra-41313944.html",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "" }
        ]
    },   
    {
        id: 64,
        title: "Roses Hermanos",
        type: "Artículos religiosos (CNAE 4778)",
        description: "Establecimiento histórico de artículos religiosos abierto en 1940 en la \
        calle Colón con el nombre de Librería Católica. Fundado por la familia Roses con una \
        tradición familiar en la fabricación de cirios que se remonta a finales del siglo \
        XIX, primero en Albaida y posteriormente en Vila-real, mantuvo durante casi ocho \
        décadas una oferta especializada dirigida a parroquias, instituciones religiosas y \
        público general. Su catálogo incluía imágenes, rosarios, orfebrería, velas, cirios y \
        libros religiosos. Considerado el único establecimiento de estas características en \
        la provincia, atendió a clientes de distintas diócesis. El cierre, en diciembre de \
        2017, se produjo por la jubilación de sus últimos propietarios.\
        <em>[Fuentes hemerográficas, 2017]</em>",
        coordinates: [-0.03757972299322225, 39.986479695978964],
        details: {
            address: "Calle Colón, 17",
            category: "Tiendas históricas",
            activity: "1940–2017",
            foundation: "Familia Roses",
            manager: "Mari Carmen Roses, Eduardo Roses y Joaquín Roses", 
            status: "Cerrado",
            store: "En venta",
            link: "https://www.elperiodicomediterraneo.com/castello/2017/12/02/casa-roses-cien-anos-libros-41431251.html\
                    https://www.levante-emv.com/castello/2017/08/27/calle-colon-pierde-mitica-roses-13759532.html",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "" }
        ]
    },   
    {
        id: 65,
        title: "Casa Carmen",
        type: "Bar tradicional (CNAE 5630)",
        description: "Bar de barrio abierto en 1971 tras el traspaso del antiguo Bar Juvenil \
        por José María Romero y Carmen Castillo. Desde 1989 el negocio pasó a sus hijos, \
        siendo Mariló, con la ayuda de su marido Félix, la última responsable hasta su \
        jubilación en 2021. Durante medio siglo, el establecimiento funcionó como espacio \
        cotidiano de encuentro vecinal, integrando la actividad hostelera con una dimensión \
        relacional que lo consolidó como referente del barrio.\
        Mariló recuerda: <em>«Este bar se había convertido en casa. Dediqué toda mi vida al \
        servicio del vecindario. Nunca tuve tiempo de invitar a nadie a mi casa, pero cada \
        día podía cocinar almuerzos y comidas para los vecinos, que se habían convertido en \
        familia. El bar era un centro de agregación donde las soledades - sobre todo de las \
        personas más mayores - podían encontrar compañía. El último día me emocioné cuando, \
        al bajar por última vez la persiana, oí las campanadas de la Iglesia de la Sagrada \
        Familia.»</em>\
        <em>[Entrevista, 2026]</em>",
        coordinates: [-0.04052987399590712, 39.99001416773975],
        details: {
            address: "Ronda Magdalena, 31",
            category: "Tiendas históricas",
            activity: "1971–2021",
            foundation: "José María Romero y Carmen Castillo",
            manager: "José, Sergio y Mariló Romero", 
            status: "Activo - traspasado",
            store: "Abierto, Bar Bocatería Diamant",
            link: "",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "" }
        ]
    },   
    {
        id: 66,
        title: "Rosi",
        type: "Mercería (CNAE 4751)",
        description: "Elena Miralles Safont es la actual gestora de la mercería. En 2016, \
        junto con su madre, Rosa Safont Tena, sucedió a su padre, Serafín Miralles Escrig, \
        cuando este se jubiló, en la gestión del establecimiento que los padres adquirieron \
        de una mercería precedente en 1975 o 1976. La mercería sigue siendo una referencia \
        importante para los vecinos del barrio.\
        <em>[Entrevista, 2026]</em>",
        coordinates: [-0.041289, 39.979167],
        details: {
            address: "Calle Herrero, 52 C",
            category: "Tiendas históricas",
            activity: "~1975 –",
            foundation: "Serafín Miralles Escrig",
            manager: "Elena Miralles Safont", 
            status: "Activo",
            store: "",
            link: "",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "https://vimeo.com/1034223552" }
        ]
    },   
    {
        id: 67,
        title: "Cuchillería Rodríguez",
        type: "Cuchillería y productos de peluquería (CNAE 4775)",
        description: "Cuchillería fundada en 1940 por Rogelio Rodríguez Basalo, originario \
        de Galicia, y su esposa Adela López de Diego. Rogelio era afilador de utensilios con \
        piedras de afilar de pedal. Entre su clientela habitual se encontraban barberos de \
        la ciudad que acudían a afilar sus navajas y que, con el tiempo, empezaron a solicitar \
        también otros productos relacionados con su oficio — pasta de afeitar, colonia, \
        cosmética —, lo que llevó a ampliar la oferta hacia productos de barbería y peluquería \
        en general. Esta combinación, aparentemente heterogénea, tiene por tanto una raíz \
        histórica coherente. Hoy la cuchillería representa el 40% de la oferta y los productos \
        de peluquería y cosmética el 60%.\
        Rogelio Rodríguez Basalo y Adela gestionaron el negocio durante cuarenta años. Su \
        hijo Rogelio, que aprendió a afilar de joven tras el colegio, asumió posteriormente \
        la gerencia, hoy en día junto a su hija. El servicio de afilado se externaliza \
        actualmente a empresas de Valencia y Barcelona, ante la dificultad de encontrar \
        afiladores — un oficio manual cercano a la mecánica que las nuevas generaciones \
        no quieren ejercer. Rogelio observa además un cambio cultural en los estilos de \
        consumo: antes los cuchillos eran objetos de valor destinados a durar toda la vida \
        y se afilaban con regularidad; hoy predomina la cultura del <em>usar y tirar</em>. \
        Paradójicamente, son ahora las familias quienes más solicitan el servicio de afilado, \
        mientras que los restaurantes, que necesitan rapidez, prefieren otros canales.\
        <em>[Entrevista, 2026; Fuentes hemerográficas, 2008]</em>",
        coordinates: [-0.03827222375463359, 39.984777463977885],
        details: {
            address: "Calle Vera, 20",
            category: "Tiendas históricas",
            activity: "1940 –",
            foundation: "Rogelio Rodríguez Basalo y Adela López de Diego",
            manager: "Rogelio Rodríguez López y Claudia Rodríguez González (tercera generación) ", 
            status: "Activo",
            store: "",
            link: "https://www.elperiodic.com/castellon/ayuntamiento-castellon-homenaje-cinco-establecimientos-gala-comercio-siempre_52206",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "" }
        ]
    },   
    {
        id: 68,
        title: "Discos Ritmo",
        type: "Tienda de música (CNAE 4763)",
        description: "Discos Ritmo abrió el 29 de agosto de 1978 por iniciativa de Vicente Boix, \
        electricista de profesión que había previsto abrir una tienda de lámparas. La inclusión \
        de una sección de vinilos y tocadiscos, motivada por su formación musical, cambió el \
        rumbo del negocio. Durante más de cuatro décadas, el local de la calle O'Donnell fue \
        referente de la vida musical de Castellón y provincia, llegando a gestionar 25.000 \
        referencias en CD y a contar con una segunda tienda entre 1998 y 2007 y hasta nueve \
        empleados.\
        En sus años de auge, Discos Ritmo recibía hasta cincuenta novedades semanales, \
        especializándose en música de importación - funky, R&B, rap, salsa, country - y \
        organizando viajes a conciertos de artistas internacionales. Los DJ de las principales \
        discotecas de la provincia acudían al local a probar novedades. Desde la tienda se \
        impulsó también la difusión local del hip hop.\
        A partir de 2000 la piratería y las plataformas digitales erosionaron progresivamente \
        el negocio. La desaparición de los reproductores de CD en coches y ordenadores, y la \
        sustitución de la música física en bares y discotecas por servicios de streaming, \
        aceleraron el declive. Para compensar, el local incorporó artículos de regalo - \
        mochilas, paraguas, accesorios - pero el mercado físico no se recuperó. La jubilación \
        de sus propietarios y la imposibilidad de liquidar el stock musical determinaron \
        el cierre definitivo en enero de 2024.\
        <em>[Fuentes hemerográficas, 2019, 2021, 2024]</em>",
        coordinates: [-0.039318, 39.985346],
        details: {
            address: "Calle O'Donnell, 1",
            category: "Tiendas históricas",
            activity: "1978–2024",
            foundation: "Vicente Boix y Ana José Serrano",
            manager: "Vicente Boix y Ana José Serrano", 
            status: "Cerrado",
            store: "Se alquila",
            link: "https://elpais.com/espana/comunidad-valenciana/2024-02-03/adios-a-discos-ritmo-la-tienda-de-castellon-que-cambio-lamparas-por-vinilos-y-nutrio-a-discotecas.html\
                    https://castellonplaza.com/castellonplaza/discos-ritmo1\
                    https://valenciaplaza.com/musica-opera-valencia-comunitat-valenciana/40-anos-despues-discos-ritmo-liquida-todo-su-stock-musical\
                    https://castellonplaza.com/castellonplaza/discos-ritmos",
            contact: "",
            notes: ""

        },
        icon: "",
        markerImage: "./images/Storici_rosa.png",
        markerSize: 60,
        images: [
            { url: "./images/31_Discos_Medicinales_01.jpg", date: today }
                   ],
        video: [
            {url: "" }
        ]
    }
];

locations.forEach((location) => {
    if (location.details && location.details.category === 'Venta a la porta') {
        if (!Object.prototype.hasOwnProperty.call(location.details, 'road')) {
            location.details.road = '';
        }
        if (!Object.prototype.hasOwnProperty.call(location.details, 'observation')) {
            location.details.observation = '';
        }
    }
});

// Configurazione della mappa
const mapConfig = {
    accessToken: import.meta.env.VITE_MAPBOX_TOKEN,
    center: [-0.051301, 39.984624], // Centro di Castellón de la Plana (adattato per i dati forniti)
    zoom: 13,
    minZoom: 10,
    maxZoom: 18,
    style: 'mapbox://styles/geocomerciocs/cmn92oyra000r01r774wa81r1'
    
};

// Variabili globali
let map;
let markers = [];
let currentLocation = null;
let currentPopup = null; // Aggiunto per tracciare il popup aperto
let supercluster = null; // Per la gestione del clustering
let currentHighlightedMarker = null; // elemento marker attualmente evidenziato
let highlightedLocationId = null; // ID della location attualmente evidenziata

// Evidenzia un marker corrispondente all'ID location senza aprire popup
function highlightMarker(locationId) {
    highlightedLocationId = locationId;
    
    // Rimuovi evidenziazione precedente
    try {
        if (currentHighlightedMarker && currentHighlightedMarker.markerElement) {
            const el = currentHighlightedMarker.markerElement;
            el.classList.remove('marker-highlight');
            // Ripristina dimensioni originali
            const size = currentHighlightedMarker.location ? currentHighlightedMarker.location.markerSize || 40 : 40;
            el.style.width = `${size}px`;
            el.style.height = `${size}px`;
        }
    } catch (e) { console.warn('Errore rimuovendo evidenziazione precedente', e); }

    // Trova il marker corrispondente
    const entry = markers.find(m => m.location && m.location.id === locationId);
    if (!entry || !entry.markerElement) {
        console.warn('Marker elemento non trovato per location ID:', locationId);
        return;
    }

    // Applica classe di evidenziazione e aumenta le dimensioni
    const el = entry.markerElement;
    const size = entry.location.markerSize || 40;
    const highlightedSize = Math.round(size * 1.5); // 50% più grande
    
    el.classList.add('marker-highlight');
    el.style.width = `${highlightedSize}px`;
    el.style.height = `${highlightedSize}px`;
    
    // Mantieni riferimento per poterla rimuovere in seguito
    currentHighlightedMarker = entry;
}


// Inizializzazione della mappa
function initMap() {
    mapboxgl.accessToken = mapConfig.accessToken;
    
    map = new mapboxgl.Map({
        container: 'map',
        style: mapConfig.style,
        center: mapConfig.center,
        zoom: mapConfig.zoom,
        minZoom: mapConfig.minZoom,
        maxZoom: mapConfig.maxZoom,


    });
    
    // Handler unificato per il resize della mappa
    const handleMapResize = (delay = 0) => {
        if (!map || !map.resize) return;
        if (delay) {
            setTimeout(() => { try { map.resize(); } catch (e) {} }, delay);
        } else {
            try { map.resize(); } catch (e) {} 
        }
    };

    // Resize dopo il caricamento della mappa e all'inizio
    map.on('load', () => handleMapResize());
    handleMapResize(100);
    handleMapResize(500);

    // Inizializza il clustering dei marker
    initializeClustering();
    
    // Popola la lista nella sidebar (solo 'Venta a la porta')
    populateLocationList();
    // Popola la lista delle Tiendas históricas nella sidebar sinistra
    populateHistoricalList();
    
    // Aggiungi event listener ai pulsanti di controllo
    document.getElementById('zoomIn').addEventListener('click', () => {
        map.zoomTo(map.getZoom() + 1, { duration: 300 });
    });
    
    document.getElementById('zoomOut').addEventListener('click', () => {
        map.zoomTo(map.getZoom() - 1, { duration: 300 });
    });
    
    document.getElementById('resetView').addEventListener('click', () => {
        map.flyTo({
            center: mapConfig.center,
            zoom: mapConfig.zoom,
            duration: 1000
        });
    });

    // Esponi la mappa globalmente per eventuali utility e per trigger di resize
    window.map = map;

    // Ridimensiona la mappa poco dopo l'inizializzazione in caso il container fosse nascosto al momento del load
        handleMapResize(100);
        handleMapResize(500);    // Ridimensiona la mappa al cambiamento di dimensione finestra
    window.addEventListener('resize', () => handleMapResize());

    // Assicuriamoci che non ci sia una classe residua che nasconde la sidebar all'avvio
    document.body.classList.remove('sidebar-collapsed');

// Rimuovo le funzioni di debug che non sono più necessarie    // Helper: tenta ridimensionamenti ripetuti finché la canvas non abbia dimensioni > 0 o scada il numero di tentativi
    function ensureMapRendered(attempts, delayMs) {
        let tries = 0;
        const container = document.getElementById('map');
        const tick = () => {
            tries++;
            try {
                if (window.map && window.map.resize) window.map.resize();
            } catch (e) {}
            const canvas = container ? container.querySelector('canvas') : null;
            const cw = canvas ? canvas.width : 0;
            const ch = canvas ? canvas.height : 0;
            logMapSizes('ensureMapRendered try ' + tries);
            if ((cw > 0 && ch > 0) || tries >= attempts) {
                if (cw > 0 && ch > 0) console.info('map canvas ready', {cw, ch});
                else console.warn('map canvas still zero after attempts', {tries, cw, ch});
                return;
            }
            setTimeout(tick, delayMs);
        };
        tick();
    }

    // Mobile: toggle per mostrare/nascondere la sidebar
    const sidebarToggle = document.getElementById('sidebarToggle');
    const body = document.body;
    if (sidebarToggle) {
        // Aggiorna visibilità in base alla larghezza
        const mq = window.matchMedia('(max-width: 768px)');
        function updateToggleVisibility() {
            if (mq.matches) {
                sidebarToggle.style.display = 'inline-block';
            } else {
                sidebarToggle.style.display = 'none';
                // assicurati che la sidebar sia visibile su desktop
                body.classList.remove('sidebar-collapsed');
                // reset icon
                const ico = sidebarToggle.querySelector('i');
                if (ico) ico.className = 'fas fa-bars';
                // ridimensiona mappa
                if (map && map.resize) map.resize();
            }
        }
        updateToggleVisibility();
        mq.addListener(updateToggleVisibility);

        sidebarToggle.addEventListener('click', () => {
            const collapsed = body.classList.toggle('sidebar-collapsed');
            const ico = sidebarToggle.querySelector('i');
            if (ico) ico.className = collapsed ? 'fas fa-times' : 'fas fa-bars';
            // aspetta la transizione CSS e poi ridimensiona la mappa
            handleMapResize(250);
        });
    }
    
    // --- LOGICA TAB ---
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', handleTabSwitch);
    });
    
    // Seleziona il primo punto di default e attiva la tab "Lista"
    if (locations.length > 0) {
        // Se esiste almeno una location con category 'Venta a la porta', selezionala per default
        const defaultPorta = locations.find(loc => loc.details && loc.details.category === 'Venta a la porta');
        if (defaultPorta) selectLocation(defaultPorta.id);
        else selectLocation(locations[0].id);
        // Assicurati che la tab "Lista" sia attiva all'avvio (già fatto in HTML, ma per sicurezza)
        activateTab('list');
    } else {
        // Se non ci sono punti, attiva la tab "Lista"
        activateTab('list');
    }
    // --- FINE LOGICA TAB ---
}

// Gestione del cambio di tab
function handleTabSwitch(event) {
    const tabId = event.currentTarget.dataset.tab;
    
    // Determina quale sidebar contiene il pulsante cliccato
    const sidebar = event.currentTarget.closest('.sidebar-left') ? '.sidebar-left' : '.sidebar-right';
    
    // Rimuovi la classe 'active' solo dai pulsanti e contenuti della sidebar corrente
    document.querySelectorAll(`${sidebar} .tab-button`).forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll(`${sidebar} .tab-content`).forEach(content => content.classList.remove('active'));
    
    // Aggiungi la classe 'active' al pulsante e al contenuto selezionato
    event.currentTarget.classList.add('active');
    document.getElementById(`${tabId}Content`).classList.add('active');
}

// Funzione fallback: aggiungi marker direttamente senza clustering
function addMarkers() {
    // Fallback: crea marker per ogni location (senza clustering)
    locations.forEach(location => {
        createMarkerForLocation(location, location.coordinates);
    });
}

// Helper per creare un marker immagine per una location e aggiungerlo alla mappa
function createMarkerForLocation(location, lngLat) {
    const markerElement = document.createElement('img');
    markerElement.src = location.markerImage;
    markerElement.alt = location.title || 'marker';
    markerElement.className = 'marker-img';
    const size = location.markerSize || 40;
    markerElement.style.width = `${size}px`;
    markerElement.style.height = `${size}px`;

    // Piccola animazione di apparizione
    markerElement.style.animation = 'markerPop 0.4s ease-out';

    const marker = new mapboxgl.Marker(markerElement)
        .setLngLat(lngLat)
        .addTo(map);

    markerElement.addEventListener('click', () => {
        map.easeTo({ center: lngLat, zoom: 16, duration: 400 });
        selectLocation(location.id);
        highlightMarker(location.id);
        activateTab('description');
    });

    markers.push({ marker, location, markerElement });
    return { marker, markerElement };
}

// Inizializza il clustering usando Supercluster
function initializeClustering() {
    // Verifica che Supercluster sia disponibile
    if (typeof Supercluster === 'undefined') {
        console.warn('Supercluster non disponibile, usando fallback senza clustering');
        addMarkers();
        return;
    }

    // Supercluster inizializzato

    // Prepara i dati per il clustering: punti con proprietà location
    const points = locations.map((loc, idx) => ({
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [loc.coordinates[0], loc.coordinates[1]] },
        properties: { idx, locationId: loc.id }
    }));

    // Inizializza Supercluster con raggio di 40px e zoom massimo di 16
    supercluster = new Supercluster({ radius: 20, maxZoom: 16 });
    supercluster.load(points);

    // Aggiorna i marker e i cluster sulla mappa
    map.on('move', updateClusterMarkers);
    map.on('zoom', updateClusterMarkers);
    
    // Aggiorna subito
    updateClusterMarkers();
}

// Funzione per aggiornare i marker e i cluster sulla mappa
function updateClusterMarkers() {
    if (!supercluster || !map) return;

    try {
        const zoom = map.getZoom();
        const bounds = map.getBounds();
        
        // Ottieni i cluster e i marker per il viewport corrente
        const clusters = supercluster.getClusters([
            bounds.getWest(), bounds.getSouth(),
            bounds.getEast(), bounds.getNorth()
        ], Math.floor(zoom));

        // Rimuovi i marker attuali
        markers.forEach(m => m.marker.remove());
        markers = [];

        // Aggiungi i nuovi marker/cluster
        clusters.forEach((feature, index) => {
            const { geometry, properties } = feature;
            const [lng, lat] = geometry.coordinates;

            // Ritardo progressivo in millisecondi (5ms per ogni marker)
            const delayMs = index * 5;

            setTimeout(() => {
                if (properties.cluster) {
                    // È un cluster: mostra un marker con il conteggio
                    const clusterElement = document.createElement('div');
                    clusterElement.className = 'cluster-marker';
                    clusterElement.innerHTML = `
                        <div class="cluster-count">${properties.point_count}</div>
                    `;
                    clusterElement.style.width = `${30 + (properties.point_count / locations.length) * 20}px`;
                    clusterElement.style.height = clusterElement.style.width;
                    // Aggiungi animazione di apparizione
                    clusterElement.style.animation = 'markerPop 0.4s ease-out';

                    const marker = new mapboxgl.Marker(clusterElement)
                        .setLngLat([lng, lat])
                        .addTo(map);

                    // Click sul cluster per zoommare
                    clusterElement.addEventListener('click', () => {
                        const expansionZoom = supercluster.getClusterExpansionZoom(properties.cluster_id);
                        map.easeTo({
                            center: [lng, lat],
                            zoom: expansionZoom,
                            duration: 400
                        });
                    });

                    markers.push({ marker, location: null, isCluster: true });
                } else {
                    // Singolo marker: crea tramite helper
                    const locationIdx = properties.idx;
                    const location = locations[locationIdx];
                    if (!location) {
                        console.warn('Location non trovata per idx:', locationIdx);
                        return;
                    }

                    createMarkerForLocation(location, [lng, lat]);
                }
            }, delayMs);
        });

        // Riapplica evidenziazione se è stata impostata
        if (highlightedLocationId) {
            setTimeout(() => {
                highlightMarker(highlightedLocationId);
            }, 100);
        }
    } catch (error) {
        console.error('Errore durante l\'aggiornamento dei cluster:', error);
    }
}

// Funzione helper per attivare una tab
function activateTab(tabId) {
    // Per i tab 'list' e 'historical', attiva solo nella sidebar sinistra
    if (tabId === 'list' || tabId === 'historical') {
        document.querySelectorAll('.sidebar-left .tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.sidebar-left .tab-content').forEach(content => content.classList.remove('active'));
        
        const btn = document.querySelector(`.sidebar-left .tab-button[data-tab="${tabId}"]`);
        const content = document.getElementById(`${tabId}Content`);
        if (btn) btn.classList.add('active');
        if (content) content.classList.add('active');
    } else {
        // Per 'description' e 'images', attiva solo nella sidebar destra
        const rightSidebar = document.querySelector('.sidebar-right');
        
        document.querySelectorAll('.sidebar-right .tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.sidebar-right .tab-content').forEach(content => content.classList.remove('active'));
        
        const btn = document.querySelector(`.sidebar-right .tab-button[data-tab="${tabId}"]`);
        const content = document.getElementById(`${tabId}Content`);
        if (btn) btn.classList.add('active');
        if (content) content.classList.add('active');
    }
}

// Popola la lista dei punti di interesse nella sidebar
function populateLocationList() {
    const locationList = document.getElementById('locationList');
    const locationCount = document.getElementById('locationCount');
    // Filtra solo le location con category 'Venta a la porta'
    const items = locations.filter(loc => loc.details && loc.details.category === 'Venta a la porta');

    if (items.length === 0) {
        locationList.innerHTML = '<div class="empty-state"><i class="fas fa-map-marker-alt"></i><p>Nessun punto di interesse trovato</p></div>';
        locationCount.textContent = '0 punti';
        return;
    }

    locationList.innerHTML = '';

    items.forEach(location => {
        const item = document.createElement('div');
        item.className = 'location-item';
        item.id = `location-${location.id}`;

        item.innerHTML = `
            <div class="location-icon">
                <img src="${location.markerImage}" alt="${location.title}" class="location-marker-img">
            </div>
            <div class="location-info">
                <h3>${location.title}</h3>
                <p>${location.type}</p>
            </div>
        `;

        item.addEventListener('click', () => {
            // Al click sulla lista, apri il popup e centra la mappa
            handleListItemClick(location.id);
        });
        locationList.appendChild(item);
    });

    locationCount.textContent = `${items.length} punti`;
}

// Popola la lista delle Tiendas históricas nella sidebar sinistra
function populateHistoricalList() {
    const historicalList = document.getElementById('historicalList');
    const historicalCount = document.getElementById('historicalCount');

    if (!historicalList || !historicalCount) return;

    const items = locations.filter(loc => loc.details && loc.details.category === 'Tiendas históricas');

    if (items.length === 0) {
        historicalList.innerHTML = '<div class="empty-state"><i class="fas fa-store"></i><p>Nessuna tienda histórica trovata</p></div>';
        historicalCount.textContent = '0 punti';
        return;
    }

    historicalList.innerHTML = '';
    items.forEach(location => {
        const item = document.createElement('div');
        item.className = 'location-item';
        item.id = `historical-location-${location.id}`;

        item.innerHTML = `
            <div class="location-icon">
                <img src="${location.markerImage}" alt="${location.title}" class="location-marker-img">
            </div>
            <div class="location-info">
                <h3>${location.title}</h3>
                <p>${location.type}</p>
            </div>
        `;

        item.addEventListener('click', () => {
            handleListItemClick(location.id);
        });
        historicalList.appendChild(item);
    });

    historicalCount.textContent = `${items.length} punti`;
}

// Seleziona un punto di interesse
/**
 * Funzione principale per selezionare un punto e aggiornare la sidebar.
 * @param {number} locationId - ID del punto selezionato.
 */
function selectLocation(locationId) {
    currentLocation = locations.find(loc => loc.id === locationId);
    
    if (!currentLocation) {
        console.warn(`Location con ID ${locationId} non trovata`);
        return;
    }
    
    // Attiva automaticamente il tab corretto nella sidebar sinistra in base alla categoria
    if (currentLocation.details && currentLocation.details.category) {
        if (currentLocation.details.category === 'Venta a la porta') {
            activateTab('list');
        } else if (currentLocation.details.category === 'Tiendas históricas') {
            activateTab('historical');
        }
    }
    
    // Aggiorna la classe attiva nella lista
    document.querySelectorAll('.location-item').forEach(item => {
        item.classList.remove('active');
    });
    const selectedItem = document.getElementById(`location-${locationId}`) || document.getElementById(`historical-location-${locationId}`);
    if (selectedItem) {
        selectedItem.classList.add('active');
        // Scrolla l'elemento selezionato in vista nella lista
        selectedItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    // Aggiorna il contenuto della tab "Descrizione"
    updateDescriptionTab();
    
    // Aggiorna il contenuto della tab "Immagini"
    updateImagesTab();
}

/**
 * Gestisce il click sul marker: seleziona il punto e apre la tab descrizione.
 * @param {number} locationId - ID del punto.
 */
function handleMarkerClick(locationId) {
    selectLocation(locationId);
    activateTab('description');
}

/**
 * Gestisce il click sull'elemento della lista: seleziona il punto, apre il popup e centra la mappa.
 * @param {number} locationId - ID del punto.
 */
function handleListItemClick(locationId) {
    const location = locations.find(loc => loc.id === locationId);
    if (!location) return;

    // handleListItemClick invoked

    // 1. Seleziona il punto (aggiorna sidebar)
    selectLocation(locationId);

    // 2. Centra la mappa sul punto
    map.flyTo({
        center: location.coordinates,
        zoom: 15,
        duration: 1000
    });

    // 3. Evidenzia il marker corrispondente invece di aprire il popup
    highlightMarker(locationId);
    
    // 4. Attiva il tab descrizione nella sidebar destra (sia desktop che mobile)
    activateTab('description');
    
    // give map a moment to animate and then ensure correct sizing
    if (map && map.resize) {
        setTimeout(() => map.resize(), 250);
    }
}

/**
 * Apre il popup sulla mappa per la location specificata.
 * @param {object} location - L'oggetto location da visualizzare.
 */
function openPopup(location) {
    // Chiudi il popup precedente se esiste
    if (currentPopup) {
        currentPopup.remove();
    }

    // Crea il contenuto del popup
    const popupContent = `
        <div class="popup-content">
            <h3>${location.title}</h3>
            <p>${location.type}</p>
            <button class="popup-button" onclick="selectLocation(${location.id}); activateTab('description');">
                Ver detalles
            </button>
        </div>
    `;

    // Crea il popup
    currentPopup = new mapboxgl.Popup({ offset: 25, closeButton: false })
        .setLngLat(location.coordinates)
        .setHTML(popupContent)
        .addTo(map);
}

// Aggiorna il contenuto della tab "Descrizione"
function updateDescriptionTab() {
    const detailTitle = document.getElementById('detailTitle');
    const detailType = document.getElementById('detailType');
    const detailBody = document.getElementById('detailBody');
    
    // updateDescriptionTab called
    
    if (!detailTitle || !detailType || !detailBody) {
        console.error('Elementi della sidebar destra non trovati!');
        return;
    }
    
    if (!currentLocation) {
        detailTitle.textContent = "Seleziona un Punto";
        detailType.textContent = "Nessun punto selezionato";
        detailBody.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-hand-point-left"></i>
                <p>Clicca su un punto sulla mappa o selezionalo dalla lista per visualizzarne i dettagli.</p>
            </div>
        `;
        return;
    }
    
    // Aggiornamento descrizione per: (hidden)
    detailTitle.textContent = currentLocation.title;
    detailType.textContent = currentLocation.type;

    const details = currentLocation.details || {};
    const isHistorical = details.category === 'Tiendas históricas';
    const renderField = (label, value) => `
        <div class="detail-field">
            <strong>${label}</strong>
            <span>${value || ''}</span>
        </div>
    `;

    const renderLinksField = (label, rawLinks) => {
        if (!rawLinks) return renderField(label, '');
        const rawMatches = String(rawLinks).match(/https?:\/\/[^\s"'<>]+/gi) || [];
        const links = rawMatches
            .map(link => link.replace(/[),.;]+$/g, ''))
            .filter((link, index, arr) => arr.indexOf(link) === index);

        if (links.length === 0) return renderField(label, '');

        const linksHTML = links
            .map((link, index) => `<a href="${link}" target="_blank" rel="noopener noreferrer">Enlace ${index + 1}</a>`)
            .join('<br>');

        return `
            <div class="detail-field">
                <strong>${label}</strong>
                <span>${linksHTML}</span>
            </div>
        `;
    };
    
    let detailHTML = `
        <p>${currentLocation.description}</p>
    `;

    detailHTML += renderField('DIRECCIÓN', details.address);
    detailHTML += renderField('CATEGORÍA', details.category);

    if (isHistorical) {
        detailHTML += renderField('Años de actividad', details.activity);
        detailHTML += renderField('Fundadores', details.foundation);
        detailHTML += renderField('Gestión', details.manager);
        detailHTML += renderField('Estado de la actividad', details.status);
        detailHTML += renderField('Estado del establecimiento', details.store);
        detailHTML += renderLinksField('Enlaces', details.link);
    } else {
        detailHTML += renderField('PARTIDA RURAL', details.road || '');
        detailHTML += renderField('OBSERVACIÓN DE CAMPO', details.observation || '');
        detailHTML += renderField('ESTADO', details.status);
    }

    // Aggiunge la copertina del video se presente
    if (currentLocation.video && currentLocation.video.length > 0) {
        const ytIdFromUrl = (url) => {
            if (!url) return null;
            const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i);
            return m ? m[1] : null;
        };
        const videoEntries = currentLocation.video.filter(v => v && v.url);
        if (videoEntries.length > 0) {
            detailHTML += '<div class="detail-field"><strong>VIDEO</strong></div>';
            videoEntries.forEach(v => {
                const ytId = ytIdFromUrl(v.url);
                if (ytId) {
                    const thumb = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
                    detailHTML += `
                        <div class="video-thumbnail-wrapper">
                            <a href="${v.url}" target="_blank" rel="noopener noreferrer" aria-label="Ver video en YouTube">
                                <img src="${thumb}" alt="Copertina video" class="video-thumbnail">
                                <span class="video-play-icon">▶</span>
                            </a>
                        </div>
                    `;
                }
            });
        }
    }

    detailBody.innerHTML = detailHTML;
}

// Aggiorna il contenuto della tab "Immagini"
function updateImagesTab() {
    const imagesContent = document.getElementById('imagesContent');
    
    // updateImagesTab called
    
    if (!imagesContent) {
        console.error('Element #imagesContent non trovato');
        return;
    }
    
    if (!currentLocation || !currentLocation.images || currentLocation.images.length === 0) {
        // Nessuna immagine disponibile
        imagesContent.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-camera"></i>
                <p>Nessuna immagine disponibile per questo punto.</p>
            </div>
        `;
        return;
    }
    
    // Aggiornamento immagini per currentLocation
    // Se tra le images c'è un link YouTube, embeddalo prima delle immagini
    const ytIdFromUrl = (url) => {
        if (!url) return null;
        const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i);
        return m ? m[1] : null;
    };

    const videos = [];
    const images = [];

    currentLocation.images.forEach(image => {
        if (typeof image === 'string') {
            // Handle string URLs directly
            images.push({ url: image, date: 'N/A' });
        } else {
            // Handle objects with url and date
            images.push(image);
        }
    });

    let galleryHTML = '';

    // Inserisci prima i video (se presenti). Aggiungo una piccola etichetta e faccio sì che i video
    // occupino tutta la larghezza della tab; le immagini saranno posizionate sotto.
    videos.forEach(src => {
        galleryHTML += `
            <div class="media-item video-item">
                <div class="media-label">Video</div>
                <div class="video-wrap">
                    <iframe src="${src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        `;
    });

    // Poi le immagini (aprono un modal interno al click)
    images.forEach((imgObj) => {
        galleryHTML += `
            <div class="media-item image-item">
                <img src="${imgObj.url}" alt="Immagine di ${currentLocation.title}">
                <div class="image-date">${imgObj.date}</div>
            </div>`;
    });

    imagesContent.innerHTML = `
        <div class="image-gallery">
            ${galleryHTML}
        </div>
    `;

    // Ottimizzazione: usa event delegation per aprire il modal senza onclick inline
    const galleryNode = imagesContent.querySelector('.image-gallery');
    if (galleryNode && !galleryNode._hasClickListener) {
        // Attach a single click handler to the gallery (avoid duplicate listeners on re-render)
        galleryNode.addEventListener('click', (e) => {
            const img = e.target.closest('img');
            if (!img) return;
            // compute index by finding the clicked image among gallery images
            const imgs = Array.from(galleryNode.querySelectorAll('img'));
            const idx = imgs.indexOf(img);
            if (idx >= 0) openImageModal(idx);
        });
        galleryNode._hasClickListener = true;
    }
}

// Inizializza la mappa quando il DOM è pronto
document.addEventListener('DOMContentLoaded', initMap);

// Esporta le funzioni per uso globale
window.selectLocation = selectLocation;
window.activateTab = activateTab; // Rendi la funzione di attivazione tab disponibile globalmente per i popup
// Rimuovi window.closeDetailCard in quanto non più necessaria
window.handleListItemClick = handleListItemClick; // Esporta per l'uso nell'HTML se necessario, anche se qui non lo è.
window.openPopup = openPopup; // Esporta per l'uso nell'HTML se necessario, anche se qui non lo è.
// Funzione per aprire un modal con l'immagine selezionata
function openImageModal(startIndex) {
    // Recupera la galleria corrente dal DOM (images nella tab filtrate, non i video)
    const galleryNode = document.querySelector('.image-gallery');
    const gallery = galleryNode ? Array.from(galleryNode.querySelectorAll('img')).map(i => i.src) : [];
    if (!gallery || gallery.length === 0) return;

    let overlay = document.getElementById('imageModalOverlay');
    const hasMultiple = gallery.length > 1;

    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'imageModalOverlay';
        overlay.className = 'image-modal-overlay';

        // Frecce prev/next (visibili solo se più immagini)
        overlay.innerHTML = `
            ${hasMultiple ? '<button class="image-modal-prev" aria-label="Precedente">◀</button>' : ''}
            <div class="image-modal-content"><img src="${gallery[startIndex]}" alt="Immagine" /></div>
            ${hasMultiple ? '<button class="image-modal-next" aria-label="Successivo">▶</button>' : ''}
            <div class="image-modal-counter" id="imageModalCounter">${startIndex + 1} / ${gallery.length}</div>
            <button class="image-modal-close" id="imageModalClose">Cerrar</button>
        `;

        document.body.appendChild(overlay);

        // Click fuori dall'immagine chiude il modal
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeImageModal();
        });

        // Bottone Chiudi
        overlay.querySelector('#imageModalClose').addEventListener('click', closeImageModal);

        // Prev/Next handlers
        if (hasMultiple) {
            overlay.querySelector('.image-modal-prev').addEventListener('click', () => {
                navigateImage(overlay, -1);
            });
            overlay.querySelector('.image-modal-next').addEventListener('click', () => {
                navigateImage(overlay, 1);
            });
        }

        // Key handler per ESC e frecce
        overlay._keyHandler = function (e) {
            if (e.key === 'Escape') closeImageModal();
            if (e.key === 'ArrowLeft') navigateImage(overlay, -1);
            if (e.key === 'ArrowRight') navigateImage(overlay, 1);
        };
        document.addEventListener('keydown', overlay._keyHandler);
    }

    // Imposta indice corrente e aggiorna immagine
    overlay._gallery = gallery;
    overlay._currentIndex = Math.max(0, Math.min(startIndex || 0, gallery.length - 1));

    const imgEl = overlay.querySelector('.image-modal-content img');
    const prevBtn = overlay.querySelector('.image-modal-prev');
    const nextBtn = overlay.querySelector('.image-modal-next');

    function refresh() {
        if (imgEl) imgEl.src = overlay._gallery[overlay._currentIndex];
        if (prevBtn) prevBtn.style.display = overlay._currentIndex > 0 ? 'block' : 'none';
        if (nextBtn) nextBtn.style.display = overlay._currentIndex < overlay._gallery.length - 1 ? 'block' : 'none';
        const counter = overlay.querySelector('#imageModalCounter');
        if (counter) counter.textContent = `${overlay._currentIndex + 1} / ${overlay._gallery.length}`;
    }

    // funzione di navigazione (usata dalle frecce e dai tasti)
    function navigateImage(ov, delta) {
        if (!ov || !ov._gallery) return;
        const newIndex = ov._currentIndex + delta;
        if (newIndex < 0 || newIndex >= ov._gallery.length) return;
        ov._currentIndex = newIndex;
        const img = ov.querySelector('.image-modal-content img');
        if (img) {
            img.src = ov._gallery[ov._currentIndex];
        }
        // aggiorna visibilità frecce
        if (prevBtn) prevBtn.style.display = ov._currentIndex > 0 ? 'block' : 'none';
        if (nextBtn) nextBtn.style.display = ov._currentIndex < ov._gallery.length - 1 ? 'block' : 'none';
        // aggiorna anche il contatore
        const counter = ov.querySelector('#imageModalCounter');
        if (counter) counter.textContent = `${ov._currentIndex + 1} / ${ov._gallery.length}`;
    }

    // memorizza la funzione per poterla richiamare dall'event listener creato sopra
    overlay._navigateImage = navigateImage;

    // mostra il modal
    overlay.classList.add('open');
    // refresh immediato per impostare correttamente le frecce
    refresh();
}

function closeImageModal() {
    const overlay = document.getElementById('imageModalOverlay');
    if (!overlay) return;
    // rimuovi key handler
    if (overlay._keyHandler) document.removeEventListener('keydown', overlay._keyHandler);
    overlay.classList.remove('open');
    // opzionale: rimuovi dal DOM dopo l'animazione
    setTimeout(() => {
        if (overlay && !overlay.classList.contains('open')) {
            overlay.remove();
        }
    }, 500);
}

// helper esterno chiamato dai button e dall'handler per navigare
function navigateImage(overlay, delta) {
    if (!overlay) return;
    if (typeof overlay._navigateImage === 'function') overlay._navigateImage(overlay, delta);
}

window.openImageModal = openImageModal;
