export default{
    namespaced: true,
    state:{
        eleccion:[],
        presupuesto:{},
        fases:['', 'presupuesto', 'programas','cotizacion', 'perifericos','carrito'],
        fase:0,
        /* PROGRAMAS */
        category_programs:{
            basico:{title:'Básico', id:1, img:'https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png'},
            modelado:{title:'Modelado / Arquitectura', id:2, img:'https://www.pngmart.com/files/21/3D-Logo-PNG-File.png'},
            programador:{title:'Programación', id:3, img:'https://w7.pngwing.com/pngs/1013/1010/png-transparent-web-development-computer-programming-logo-others-angle-web-design-text.png'},
            sonido:{title:'Sonido', id:4, img:'https://cdn-icons-png.flaticon.com/512/1792/1792737.png'},
            edicion:{title:'Edición', id:5, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/1789px-Adobe_Systems_logo_and_wordmark.svg.png'},
            contable:{title:'Contable', id:6, img:'https://cdn-icons-png.flaticon.com/512/1875/1875501.png'},
            streaming:{title:'Streaming', id:7, img:'https://cdn-icons-png.flaticon.com/512/61/61029.png'},
            gamer:{title:'Gamer', id:8, img:'https://b.thumbs.redditmedia.com/pgLa_D2t-u8F5D1-iE9eEiBVMuI3H9CABXqOcLvOEYc.png'},
        },
        programs:[
            {
              title: "google chrome",
              category_program_id: 1,
              description: "navegador web de google",
              isActive:false,
              img:'https://logodownload.org/wp-content/uploads/2017/05/google-chrome-logo-0.png'
            },
            {
              title: "office",
              category_program_id: 1,
              description: "suite ofimática de aplicaciones para computadoras de escritorio",
              isActive:false,
              img:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/512px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png'
            },
            {
              title: "Zoom",
              category_program_id: 1,
              description: "Programa de videollamadas y reuniones virtuales",
              isActive:false,
              img:'https://assets.stickpng.com/images/5e8ce318664eae0004085461.png'
            },
            {
              title: "Google Meet",
              category_program_id: 1,
              description: null,
              isActive:false,
              img:''
            },
            {
              title: "Microsoft Teams",
              category_program_id: 1,
              description: null,
              isActive:false,
              img:''
            },
            {
              title: "MPC-HC",
              category_program_id: 1,
              description: "reproductor de musica y sonido",
              isActive:false,
              img:'https://mpc-hc.org/assets/img/logo-256x256.png'
            },
            {
              title: "7-zip",
              category_program_id: 1,
              description: "Comprime y descomprime archivos",
              isActive:false,
              img:''
            },
            {
              title: "onedrive",
              category_program_id: 1,
              description: "la nube de microsoft para escritorio",
              isActive:false,
              img:''
            },
            {
              title: "google drive",
              category_program_id: 1,
              description: "la nube de google para escritorio",
              isActive:false,
              img:''
            },
            {
              title: "sumatra pdf",
              category_program_id: 1,
              description: "Visualizador de pdf´s",
              isActive:false,
              img:''
            },
            {
              title: "avast antivirus",
              category_program_id: 1,
              description: "Antivirus de prueba",
              isActive:false,
              img:''
            },
            {
              title: "dropbox",
              category_program_id: 1,
              description: "nube para escritorio",
              isActive:false,
              img:''
            },
            {
              title: "teamviewer",
              category_program_id: 1,
              description: "programa para acceso remoto",
              isActive:false,
              img:'https://static.teamviewer.com/resources/2019/07/TeamViewer_Logo_512x512.png'
            },
            {
              title: "autocad",
              category_program_id: 2,
              description: "Dibujo 2D y modelado 3D",
              isActive:false,
              img:''
            },
            {
              title: "cinema 4d",
              category_program_id: 2,
              description: "creación de gráficos y animación 3D",
              isActive:false,
              img:''
            },
            {
              title: "autodesk maya",
              category_program_id: 2,
              description: "desarrollo de gráficos 3D",
              isActive:false,
              img:''
            },
            {
              title: "blender",
              category_program_id: 2,
              description: "modelado, iluminación, renderizado, la animación y creación de gráficos tridimensionales",
              isActive:false,
              img:''
            },
            {
              title: "visual studio code",
              category_program_id: 3,
              description: "modelado, iluminación, renderizado, la animación y creación de gráficos tridimensionales",
              isActive:false,
              img:''
            },
            {
              title: "eclipse",
              category_program_id: 3,
              description: "plataforma de desarrollo de software",
              isActive:false,
              img:''
            },
            {
              title: "neat beans",
              category_program_id: 3,
              description: "plataforma de desarrollo de software",
              isActive:false,
              img:''
            },
            {
              title: "node js",
              category_program_id: 3,
              description: "entorno en tiempo de ejecución multiplataforma basado en javascript",
              isActive:false,
              img:''
            },
            {
              title: "sublime text",
              category_program_id: 3,
              description: "Editor de texto",
              isActive:false,
              img:''
            },
            {
              title: "git",
              category_program_id: 3,
              description: "software de control de versiones",
              isActive:false,
              img:''
            },
            {
              title: "python",
              category_program_id: 3,
              description: "plataforma para el desarrollo con python",
              isActive:false,
              img:''
            },
            {
              title: "dev c++",
              category_program_id: 3,
              description: "plataforma para el desarrollo con c++",
              isActive:false,
              img:''
            },
            {
              title: "lucidchart",
              category_program_id: 3,
              description: "herramienta de diagramación basada en la web",
              isActive:false,
              img:''
            },
            {
              title: "unity",
              category_program_id: 3,
              description: "motor de videojuego multiplataforma",
              isActive:false,
              img:''
            },
            {
              title: "adobe audition",
              category_program_id: 4,
              description: "plataforma de edición de audio",
              isActive:false,
              img:''
            },
            {
              title: "Audacity",
              category_program_id: 4,
              description: "grabación y edición de audio",
              isActive:false,
              img:''
            },
            {
              title: "FL studio",
              category_program_id: 4,
              description: "estación de trabajo de audio digital",
              isActive:false,
              img:''
            },
            {
              title: "virtual DJ",
              category_program_id: 4,
              description: "Software para DJ",
              isActive:false,
              img:''
            },
            {
              title: "Mixx",
              category_program_id: 4,
              description: "Software para DJ",
              isActive:false,
              img:''
            },
            {
              title: "adobe illustrator",
              category_program_id: 5,
              description: "editor de gráficos vectoriales",
              isActive:false,
              img:''
            },
            {
              title: "adobe photoshop",
              category_program_id: 5,
              description: "editor de fotografías",
              isActive:false,
              img:''
            },
            {
              title: "adobe xd",
              category_program_id: 5,
              description: "editor de gráficos vectoriales enfocado en la UX",
              isActive:false,
              img:''
            },
            {
              title: "adobe premiere",
              category_program_id: 5,
              description: "edición de video",
              isActive:false,
              img:''
            },
            {
              title: "adobe after effects",
              category_program_id: 5,
              description: "realización de gráficos profesionales en movimiento y efectos especiales",
              isActive:false,
              img:'https://pccadla.com/wp-content/uploads/2020/01/ae-appicon-noshadow-1024.png'
            },
            {
              title: "sony vegas pro",
              category_program_id: 5,
              description: "edición de vídeo de tipo edición no lineal",
              isActive:false,
              img:''
            },
            {
              title: "davinci resolve",
              category_program_id: 5,
              description: "edición de video no lineal",
              isActive:false,
              img:''
            },
            {
              title: "Corel Draw",
              category_program_id: 5,
              description: "diseño gráfico vectorial",
              isActive:false,
              img:''
            },
            {
              title: "Adobe Lightroom",
              category_program_id: 5,
              description: "Programa profesional de fotografía digital",
              isActive:false,
              img:''
            },
            {
              title: "CONCAR",
              category_program_id: 6,
              description: "Software contable de perú",
              isActive:false,
              img:''
            },
            {
              title: "CONTASIS",
              category_program_id: 6,
              description: "plataforma de gestión en la nube",
              isActive:false,
              img:''
            },
            {
              title: "SISCONT",
              category_program_id: 6,
              description: "software contable financiero en el perú",
              isActive:false,
              img:''
            },
            {
              title: "STARSOFT",
              category_program_id: 6,
              description: "Software contable de perú",
              isActive:false,
              img:''
            },
            {
              title: "OBS Studio",
              category_program_id: 7,
              description: "servicio de retransmisión en directo",
              isActive:false,
              img:''
            },
            {
              title: "Twitch Studio",
              category_program_id: 7,
              description: "servicio de retransmisión en directo de twitch",
              isActive:false,
              img:''
            },
            {
              title: "Muxy",
              category_program_id: 7,
              description: "herramientas para transmisiones en vivo",
              isActive:false,
              img:''
            },
            {
              title: "stream elements",
              category_program_id: 7,
              description: "herramientas para transmisiones en vivo",
              isActive:false,
              img:''
            },
            {
              title: "streamlabs OBS",
              category_program_id: 7,
              description: "servicio de retransmisión en directo",
              isActive:false,
              img:''
            },
            {
              title: "steam",
              category_program_id: 8,
              description: "plataforma de distribución digital de videojuegos",
              isActive:false,
              img:''
            },
            {
              title: "epic games",
              category_program_id: 8,
              description: "plataforma de distribución digital de videojuegos",
              isActive:false,
              img:''
            },
            {
              title: "msi afterburner",
              category_program_id: 8,
              description: "software para tarjetas gráficas",
              isActive:false,
              img:''
            },
            {
              title: "discord",
              category_program_id: 8,
              description: "servicio de mensajería instantánea freeware de chat de voz",
              isActive:false,
              img:''
            },
            {
              title: "origin",
              category_program_id: 8,
              description: "plataforma de distribución digital de videojuegos",
              isActive:false,
              img:''
            },
            {
              title: "battle net",
              category_program_id: 8,
              description: "plataforma de videojuegos de Blizzard",
              isActive:false,
              img:''
            },
            {
              title: "geforce experience",
              category_program_id: 8,
              description: "plataforma de experiencia de juego de geforce",
              isActive:false,
              img:''
            },
            {
              title: "Fornite",
              category_program_id: 9,
              description: null,
              isActive:false,
              img:''
            },
            {
              title: "Valorant",
              category_program_id: 9,
              description: null,
              isActive:false,
              img:''
            },
            {
              title: "Counter-Strike: Global Offensive",
              category_program_id: 9,
              description: null,
              isActive:false,
              img:''
            },
            {
              title: "League of Legends",
              category_program_id: 9,
              description: null,
              isActive:false,
              img:''
            },
            {
              title: "Dota 2",
              category_program_id: 9,
              description: null,
              isActive:false,
              img:''
            },
            {
              title: "Call of Duty: Warzone",
              category_program_id: 9,
              description: null,
              isActive:false,
              img:''
            },
            {
              title: "SketchUp",
              category_program_id: 2,
              description: "Programa de diseño gráfico y modelado en tres dimensiones basado en caras",
              isActive:false,
              img:''
            }
        ],
        category_select: {},
        program_select: [],
        selected: -1,
        /* PERIFERICOS */
        category_complements:{
          pantalla:{title:'Pantalla', id:1, img:'https://storage.eu.aoc.com/assets/2022/01/asset-4con0s-large.png'},
          mouse:{title:'Mouse', id:2, img:'https://www.pngfind.com/pngs/m/247-2473217_gaming-mouse-png-asus-rog-puggio-transparent-png.png'},
          teclado:{title:'Teclado', id:3, img:'https://i0.wp.com/corporaciondash.com/wp-content/uploads/2017/11/K70_LUX_RGB_NA_01_HERO.png?fit=780%2C540&ssl=1'},
          combo:{title:'Combo', id:4, img:'https://w7.pngwing.com/pngs/613/673/png-transparent-computer-keyboard-computer-mouse-wireless-keyboard-wireless-usb-computer-mouse-electronics-computer-keyboard-electronic-device.png'},
          audifonos:{title:'Audifonos', id:5, img:'https://assets.stickpng.com/images/580b57fbd9996e24bc43bfb7.png'},
          parlantes:{title:'Parlantes', id:6, img:'https://mesajilgamer.com/wp-content/uploads/sites/7/2021/04/023461-600x450.png'},
          psu:{title:'PSU', id:7, img:'https://www.compucentro.pe/wp-content/uploads/2020/11/estabilizador-forza-fvr-1202-1200va-8-ut.png'},
          camara:{title:'Cámara', id:8, img:'https://assets.stickpng.com/images/5e949554718e370004ea4daa.png'},
          accesorios:{title:'Accesorios', id:9, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM5dKhnGkLJFgAnIFnfOYD7S2a9Tdk1AWrLw&usqp=CAU'},
        },
        complements:[
          {
            "model_name": "TECLADO MECANICO COOLER MASTER CK550 V2",
            "image_url": null,
            "price": 405,
            "is_rgb": true,
            "category_peripheral_id": 9,
            "attributes": {
              "type": "Mecánico",
              "switch": "Red",
              "output": "USB 2.0"
            },
            isActive:false
          },
          {
            "model_name": "TECLADO SEMI-MECANICO ANTRYX CHROME STORM SK570",
            "image_url": null,
            "price": 163,
            "is_rgb": true,
            "category_peripheral_id": 9,
            "attributes": {
              "type": "Semi-Mecánico",
              "switch": null,
              "output": "USB"
            },
            isActive:false
          },
          {
            "model_name": "TECLADO MECANICO TKL ANTRYX CHROME STORM MK830",
            "image_url": null,
            "price": 236,
            "is_rgb": true,
            "category_peripheral_id": 9,
            "attributes": {
              "type": "Mecánico",
              "switch": null,
              "output": "USB"
            },
            isActive:false
          }
        ],
        category_complements_select:{},
        complement_select:[],
        popup_active: false
    },
    mutations:{
        aumentar(state){
            state.fase++
        },
        disminuir(state){
            state.fase--
        },
        reset(state, number){
            state.fase = number;
        },
        AddProgram(state, program){
            state.program_select.push(program)
        },
        AddComplement(state, complement){
          state.complement_select.push(complement)
        },
        ProgramSelected(state, payload){
            state.selected = state.program_select.indexOf(payload);
        }     
    },
    actions:{
        next({commit, state}){
            commit('aumentar');
        },
        addEleccion(state, payload){
            state.eleccion.push(payload)
        },      
    },
    getters:{
        eleccion: (state) => state.eleccion,
        fase: (state) => state.fase,     
        
    }
}