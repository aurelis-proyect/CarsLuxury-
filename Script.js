const modelos = {
Ferrari: ["SF90", "458 Italia", "Roma", "F40", "LaFerrari", "Monza SP1 SP2", "F50", "812 Superfast", "296 GTV", "Testarossa"],
Lamborghini: ["Aventador", "Huracan", "Urus", "Countach", "Diablo", "Murcielago", "Gallardo", "Sian FKP 37", "Revuelto", "LM 002"],
Pagani: ["Zonda Cinque", "Huayra BC", "Huayra Roadster BC", "Zonda R", "Huayra Imola", "Zonda Tricolore", "Huayra Codalunga", "Utopia", "Zonda F", "Zonda Revolucion"],
Janderk: ["J 168", "Magnu", "F200", "Long Evolution", "Proto Hypercar", "J 168 R"],
Koenigsegg: ["Jesko", "Agera RS", "CC8S", "One: 1", "Gemera", "Regera", "CCX", "CCR", "CCGT", "Trevita"],
Bugatti: ["Veyron", "Chiron", "Divo", "Centodieci", "La Voiture Noire", "EB110", "Bolide", "Mistral", "Type 57 Atlantic", "Veyron Super Sport"],
McLaren: ["P1", "720s", "F1", "Senna", "Artura", "675LT", "570s", "Elva", "Solus GT", "Gt"],
Aston_Martin: ["DB11", "Vantage", "DBS Superleggera", "DB5", "Valhalla", "Valkyrie", "Rapide", "DBX", "Virage", "One-77"],
Land_Rover: ["Range Rover", "Range Rover Sport", "Defender", "Discovery", "Velar", "Evoque", "Discovery Sport", "Freelander", "Range Rover Classic", "Range Rover SVAutobiography"],
Jaguar: ["F-Type", "XJ", "E-Type", "I-Pace", "F-Pace", "XE", "XF", "XK", "XKR", "Mark 2"],
GMA: ["T.50", "T.33", "T.33 Spider"],
Mercedes_Benz: ["Clase S", "SLS AMG", "AMG GT", "G-Class", "300SL Gullwing", "SLR Mclaren", "CL", "Project One", "190E 2.5-16 Evolution 2", "AMG GT Black Serie"],
Porsche: ["911", "918 Spider", "Carrera GT", "Taycan", "Cayenne", "Macan", "718 Cayman/Boxster", "959", "Panamera", "928"],
Audi: ["R8", "RS 6", "RS 7", "A8", "TT RS", "S8", "RS 3", "Quattro", "E-Tron GT", "RS Q8"],
BMW: ["M3", "M5", "Serie 7", "I8", "Z8", "M1", "X5 M", "8 Series", "3.0 CSL", "IX"],
Peugeot: ["205 GTI", "405 MI16", "RCZ R", "208 GTI", "308 GTI", "504 Coupe", "406 Coupe", "206 RC", "306 GTI-6", "Peugeot Onyx"],
Cadillac: ["Escalade", "CT5-V Blackwing", "CTS-V", "Eldorado", "Seville", "Deville", "CT6", "Lyriq", "V-16", "XLR"],
Ford: ["Mustang", "GT", "GT40", "Focus RS", "Shelby Cobra", "F-150 Raptor", "RS200", "Sierra Cosworth RS500", "Thunderbird", "Model T"],
Chevrolet: ["Corvette", "Camaro", "Impala", "Silverado", "Bel Air", "Chevelle SS", "Suburban", "Tahoe", "Colorado ZR2", "Nomad"],
Dodge: ["Challenger", "Charger", "Viper", "Ram 1500 TRX", "Dart", "Coronet", "Super Bee", "Demon", "Daytona", "Power Wagon"],
Rolls_Royce: ["Phantom", "Cullinan", "Ghost", "Wraith", "Dawn", "Silver Shadow", "Silver Ghost", "Corniche", "Park", "Ward", "Sweptail"],
Bentley: ["Continental GT", "Flying Spur", "Bentayga", "Mulsanne", "Arnage", "Brooklands", "Azure", "Turbo R", "Speed Six", "Batur"],
SCC: ["Tuatara", "Ultimate Aero TT"],
Hennessey: ["Venom GT", "Venom F5"],
Rimac: ["Nevera"],
Maserati: ["Gran Turismo", "Quattroporte", "Ghibli", "MC20", "Levante", "3500 GT", "Bora", "Khamsin", "Indy", "Mistral"],
Maybach: ["57/62", "S-CLASS", "GLS"],
Lotus: ["Elise", "Exige", "Evora", "Espirit", "Elan", "Eletre", "Emira", "Carlton", "Seven", "Europa"],
Alfa_Romeo: ["Giulia Quadrifoglio", "Stelvio Quadrifoglio", "8C Competizione", "Giulietta", "Spider", "GTV6", "Montreal", "159", "Brera", "4C"],
Alpine: ["A 110"],
};

const especificaciones = {
  "SF90": { 
    motor: "V8 biturbo de 3.990 cc, ubicado en posición central trasera _ Tres motores eléctricos: uno entre el motor y la transmisión, y dos en el eje delantero _ Potencia combinada: 1.000 CV (735kW) _ Par máximo: 800 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 2,5 segundos. Velocidad Máxima 340 km/h. Autonomía Eléctrica 26 km", 
    transmision: "Caja de cambios de doble embrague de 8 velocidades. Tracción total.", 
    diseño: "Diseño aerodinámico avanzado, con elementos activos. Interior de alta tecnología, con pantalla curva de 16 pulgadas. Sistema de control dinámico Side Slip Control (eSSC).", 
    historia: "Presentado en 2019, es el primer híbrido enchufable de Ferrari _ Su nombre rinde homenaje al 90 aniversario de la Scuderia Ferrari" 
      },
    "458 Italia": { 
    motor: "V8 atmosférico de 4.499 cc _ Potencia: 570 CV (419 kW) _ Par máximo: 540 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 3,4 segundos. Velocidad máxima: 325 km/h", 
    transmision: "Caja de cambios de doble embrague de 7 velocidades. Tracción trasera.", 
    diseño: "Diseño de Pininfarina, con líneas fluidas y agresivas. Interior centrado en el conductor, con controles en el volante. Diferencial electrónico E-Diff y control de tracción F1-Trac.", 
    historia: "Sucesor del F430, fue un referente en su segmento. Su motor V8 atmosférico es muy apreciado por su sonido y respuesta." 
  },
  "Roma": { 
    motor: "V8 biturbo de 3.855 cc _ Potencia: 620 CV (456 kW) _ Par máximo: 760 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 3,4 segundos. Velocidad máxima: 320 km/h", 
    transmision: "Caja de cambios de doble embrague de 8 velocidades. Tracción trasera.", 
    diseño: "Diseño inspirado en los gran turismo de los años 60. Interior lujoso y minimalista, con pantalla táctil central. Sistema de control Side Slip Control 6.0.", 
    historia: "Presentado en 2019, es un gran turismo de alto rendimiento. Su diseño elegante y atemporal lo distingue de otros Ferrari." 
  },
  "F40": { 
    motor: "V8 biturbo de 2.936 cc _ Potencia: 478 CV (352 kW) _ Par máximo: 577 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 4,1 segundos _ Velocidad máxima: 324 km/h", 
    transmision: "Caja de cambios manual de 5 velocidades _ Tracción trasera", 
    diseño: "Diseño radical de Pininfarina, con alerón trasero y carrocería de fibra de carbono _ Interior espartano, centrado en el conductor _ Sin asistencias electrónicas, para una experiencia de conducción pura", 
    historia: "Construido para celebrar el 40 aniversario de Ferrari _ Fue el coche de producción más rápido del mundo en su época" 
  },
  "LaFerrari": { 
    motor: "V12 atmosférico de 6.262 cc + motor eléctrico _ Potencia combinada: 963 CV (708 kW) _ Par máximo: 900 Nm", 
    rendimiento: "Aceleración 0-100 km/h: menos de 3 segundos _ Velocidad máxima: más de 350 km/h", 
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción trasera", 
    diseño: "Diseño aerodinámico extremo, con elementos activos _ Sistema híbrido HY-KERS, derivado de la Fórmula 1 _ Interior de fibra de carbono, con asientos deportivos", 
    historia: "Sucesor del Enzo, es el primer híbrido de Ferrari _ Edición limitada de 499 unidades" 
  },
  "Monza SP1 SP2": { 
    motor: "V12 atmosférico de 6.496 cc _ Potencia: 810 CV (596 kW) _ Par máximo: 719 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 2,9 segundos _ Velocidad máxima: más de 300 km/h", 
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción trasera", 
    diseño: "Diseño inspirado en los barchettas de los años 50 _ SP1: monoplaza; SP2: biplaza _ Sin parabrisas, para una experiencia de conducción al aire libre", 
    historia: "Parte de la serie Icona de Ferrari, que rinde homenaje a modelos clásicos _ Edición limitada de 499 unidades combinadas" 
   },
  "F50": { 
    motor: "V12 atmosférico de 4.698 cc _ Potencia: 520 CV (382 kW) _ Par máximo: 470 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 3,8 segundos _ Velocidad máxima: 328 km/h", 
    transmision: "Caja de cambios manual de 6 velocidades _ Tracción trasera", 
    diseño: "Diseño inspirado en la Fórmula 1, con techo targa desmontable _ Interior de fibra de carbono, con asientos deportivos _ Suspensión de Fórmula 1", 
    historia: "Construido para celebrar el 50 aniversario de Ferrari _ Su motor V12 atmosférico es muy apreciado por su sonido y respuesta"   
   },
  "812 Superfast": { 
    motor: "V12 atmosférico de 6.496 cc _ Potencia: 800 CV (588 kW) _ Par máximo: 718 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 2,9 segundos _ Velocidad máxima: 340 km/h", 
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción trasera", 
    diseño: "Diseño de gran turismo, con líneas elegantes y agresivas _ Interior lujoso y confortable, con pantalla táctil central _ Sistema de control Side Slip Control 5.1", 
    historia: "Sucesor del F12berlinetta, es uno de los Ferrari de producción más potentes _ Su motor V" 
  },
  "296 GTV": { 
    motor: "V6 biturbo de 2.992 cc + motor eléctrico _ Potencia combinada: 830 CV _ Par máximo: 740 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 2,9 segundos _ Velocidad máxima: más de 330 km/h _ Autonomía eléctrica: 25 km", 
    transmision: "Caja de cambios de doble embrague de 8 velocidades _ Tracción trasera", 
    diseño: "Diseño moderno y aerodinámico, con elementos inspirados en modelos clásicos _ Interior de alta tecnología, con pantalla táctil central y cuadro de instrumentos digital _ Sistema hibrido enchufable", 
    historia: "Presentado en 2021, marca el regreso del motor V6 a Ferrari _ Su nombre rinde homenaje al motor de 2.9 litros y 6 cilindros"  
  },
  "Testarossa": { 
    motor: "12 cilindros opuestos de 4.943 cc _ Potencia: 390 CV _ Par máximo: 490 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 5,3 segundos _ Velocidad máxima: 290 km/h", 
    transmision: "Caja de cambios manual de 5 velocidades _ Tracción trasera", 
    diseño: "Diseño icónico de los años 80, con sus distintivas branquias laterales _ Interior lujoso y confortable para su época _ Motor de 12 cilindros opuestos", 
    historia: "Sucesor del Berlinetta Boxer, se convirtió en un símbolo de los años 80 _ Su diseño y rendimiento lo hicieron muy popular en la cultura pop" 
  },
    "Aventador": { 
    motor: "V12 atmosférico de 6.498 cc _ Potencia: Hasta 770 CV (versión Ultimae) _ Par máximo: 720 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 2,8 segundos _ Velocidad máxima: 355 km/h", 
    transmision: "Caja de cambios ISR de 7 velocidades _ Tracción total", 
    diseño: "Diseño angular y agresivo, con puertas de tijera _ Chasis de fibra de carbono _ Suspensión de varilla de empuje", 
    historia: "Sucesor del Murciélago, fue un referente en su segmento _ Su motor V12 atmosférico es muy apreciado por su sonido y potencia"   
  },
  "Huracan": { 
    motor: "V10 atmosférico de 5.204 cc _ Potencia: Hasta 640 CV (versión Performante) _ Par máximo: 600 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 2,9 segundos _ Velocidad máxima: 325 km/h", 
    transmision: "Caja de cambios de doble embrague de 7 velocidades _ Tracción trasera o total", 
    diseño: "Diseño compacto y aerodinámico _ Chasis híbrido de aluminio y fibra de carbono _ Sistema de control dinámico Lamborghini Dinamica Veicolo Integrata (LDVI)", 
    historia: "Sucesor del Gallardo, es un deportivo de alto rendimiento _ Su motor V10 atmosférico es muy apreciado por su respuesta y sonido" 
  },
  "Urus": { 
    motor: "V8 biturbo de 3.996 cc _ Potencia: 650 CV _ Par máximo: 850 Nm", 
    rendimiento: "Aceleración 0-100 km/h: 3,6 segundos _ Velocidad máxima: 305 km/h", 
    transmision: "Caja de cambios automática de 8 velocidades _ Tracción total", 
    diseño: "Diseño de SUV deportivo, con líneas agresivas _ Interior lujoso y tecnológico _ Sistema de control dinámico ANIMA con modos de conducción específicos.", 
    historia: "Es el primer SUV de Lamborghini desde el LM002 _ Combina el rendimiento de un superdeportivo con la versatilidad de un SUV"  
  },
  "Countach": { 
    motor: "V12 atmosférico de 3.929 cc _ Potencia: Hasta 455 CV (versión 5000 QV) _ Par máximo: 500 Nm", 
    rendimiento: "Aceleración 0-100 km/h: alrededor de 5 segundos _ Velocidad máxima: alrededor de 290 km/h", 
    transmision: "Caja de cambios manual de 5 velocidades _ Tracción trasera", 
    diseño: "Diseño revolucionario de Marcello Gandini, con líneas angulares y puertas de tijera _ Chasis tubular de acero _ Motor V12 en posición central trasera", 
    historia: "Un icono de los años 70 y 80, conocido por su diseño radical _ Contribuyó a definir la imagen de Lamborghini como fabricante de superdeportivos" 
  },
  "Diablo": { 
    motor:"V12 atmosférico de 5.707 cc _ Potencia: Hasta 595 CV (versión GT) _ Par máximo: 630 Nm",
    rendimiento: "Aceleración 0-100 km/h: alrededor de 4 segundos _ Velocidad máxima: alrededor de 340 km/h", 
    transmision: "Caja de cambios manual de 5 velocidades _ Tracción trasera", 
    diseño: "Diseño agresivo y aerodinámico _ Chasis tubular de acero _ Motor V12 en posición central trasera", 
    historia: "Sucesor del Countach, fue un superdeportivo de referencia en los años 90 _ Su motor V12 y su rendimiento lo hicieron muy popular"   
  },
  "Murcielago": { 
    motor: "V2 atmosférico de 6.192 cc _ Potencia: Hasta 670 CV (versión SV) _ Par máximo: 660 Nm.", 
    rendimiento: "Aceleración 0-100 km/h: alrededor de 3,2 segundos _ Velocidad máxima: alrededor de 342 km/h", 
    transmision: "Caja de cambios manual de 6 velocidades o automática E-gear _ Tracción total.", 
    diseño: "Diseño elegante y aerodinámico _ Chasis de fibra de carbono y aluminio _ Motor V12 en posición central trasera", 
    historia: "Sucesor del Diablo, fue el primer Lamborghini de la era Audi _ Su motor V12 y su rendimiento lo hicieron muy apreciado" 
  },
  "Gallardo": { 
    motor: "V10 atmosférico de 4.961 cc _ Potencia: Hasta 570 CV (versión Superleggera) _ Par máximo: 540 Nm", 
    rendimiento: "Aceleración 0-100 km/h: alrededor de 3,4 segundos _ Velocidad máxima: alrededor de 325 km/h", 
    transmision: "Caja de cambios manual de 6 velocidades o automática E-gear _ Tracción total", 
    diseño: "Diseño compacto y deportivo _ Chasis de aluminio _ Motor V10 en posición central trasera", 
    historia: "Fue el modelo más vendido de Lamborghini hasta la llegada del Urus _ Su motor V10 y su agilidad lo hicieron muy popular"  
  },
  "Sian FKP 37": { 
    motor: "V12 atmosférico de 6.498 cc + sistema híbrido ligero _ Potencia combinada: 819 CV _ Par máximo: 720 Nm", 
    rendimiento: "Aceleración 0-100 km/h: menos de 2,8 segundos _ Velocidad máxima: más de 350 km/h", 
    transmision: "Caja de cambios ISR de 7 velocidades _ Tracción total", 
    diseño: "Diseño futurista y aerodinámico _ Supercondensador para el sistema híbrido _ Tecnología de materiales ligeros", 
    historia: "Primer híbrido de Lamborghini, con tecnología innovadora _ Edición limitada de 63 coupés y 19 roadsters", 
  },
  "Revuelto": { 
    motor: "V12 híbrido enchufable _ Potencia combinada: 1015 CV _ Par máximo: Datos específicos varían, pero el sistema híbrido aporta un par instantáneo significativo", 
    rendimiento: "Aceleración 0-100 km/h: 2,5 segundos _ Velocidad máxima: Más de 350 km/h", 
    transmision: "Nueva transmisión de doble embrague de 8 velocidades _ Tracción total", 
    diseño: "Diseño futurista, manteniendo la esencia de Lamborghini _ Tecnología híbrida avanzada, con tres motores eléctricos _ Innovador diseño de la batería", 
    historia: "Sucesor del Aventador, marcando una nueva era híbrida para Lamborghini _ Representa el futuro de los superdeportivos de la marca"  
  },
  "LM 002": { 
    motor: "V12 del Lamborghini Countach _ Potencia: Aproximadamente 450 CV _ Par máximo: Alrededor de 500 Nm", 
    rendimiento: "Aceleración 0-100 km/h: Aproximadamente 7,8 segundos _ Velocidad máxima: Alrededor de 210 km/h", 
    transmision: "Caja de cambios manual de 5 velocidades _ Tracción total", 
    diseño: "Diseño todoterreno robusto y distintivo _ Neumáticos especiales de alta resistencia _ Interior lujoso para su época", 
    historia: "Un todoterreno inusual y legendario de Lamborghini _ Conocido como el (Rambo Lambo) _ Predecesor espiritual del Lamborghini Urus", 
  },
  
