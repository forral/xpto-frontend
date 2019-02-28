var districts = [
    { 
        'district': 'Aveiro', 
        'counties' : ['Águeda','Albergaria-a-Velha','Anadia','Arouca','Aveiro','Castelo de Paiva','Espinho','Estarreja','Ílhavo','Mealhada','Murtosa','Oliveira de Azeméis','Oliveira do Bairro','Ovar','Santa Maria da Feira','São João da Madeira','Sever do Vouga','Vagos','Vale de Cambra']
    },
    { 
        'district': 'Beja', 
        'counties' : ['Aljustrel','Almodôvar','Alvito','Barrancos','Beja','Castro Verde','Cuba','Ferreira do Alentejo','Mértola','Moura','Odemira','Ourique','Serpa','Vidigueira']
    },
    { 
        'district': 'Braga', 
        'counties' : ['Amares','Barcelos','Braga','Cabeceiras de Basto','Celorico de Basto','Esposende','Fafe','Guimarães','Póvoa de Lanhoso','Terras de Bouro','Vieira do Minho','Vila Nova de Famalicão','Vila Verde','Vizela']
    },
    { 
        'district': 'Bragança', 
        'counties' : ['Alfândega da Fé','Bragança','Carrazeda de Ansiães','Freixo de Espada à Cinta','Macedo de Cavaleiros','Miranda do Douro','Mirandela','Mogadouro','Torre de Moncorvo','Vila Flor','Vimioso','Vinhais']
    },
    { 
        'district': 'Castelo Branco', 
        'counties' : ['Belmonte','Castelo Branco','Covilhã','Fundão','Idanha-a-Nova','Oleiros','Penamacor','Proença-a-Nova','Sertã','Vila de Rei','Vila Velha de Ródão']
    },
    { 
        'district': 'Coimbra', 
        'counties' : ['Arganil','Cantanhede','Coimbra','Condeixa-a-Nova','Figueira da Foz','Góis','Lousã','Mira','Miranda do Corvo','Montemor-o-Velho','Oliveira do Hospital','Pampilhosa da Serra','Penacova','Penela','Soure','Tábua','Vila Nova de Poiares']
    },
    { 
        'district': 'Évora', 
        'counties' : ['Alandroal','Arraiolos','Borba','Estremoz','Évora','Montemor-o-Novo','Mora','Mourão','Portel','Redondo','Reguengos de Monsaraz','Vendas Novas','Viana do Alentejo','Vila Viçosa']
    },
    { 
        'district': 'Faro', 
        'counties' : ['Albufeira','Alcoutim','Aljezur','Castro Marim','Faro','Lagoa (Algarve)','Lagos','Loulé','Monchique','Olhão','Portimão','São Brás de Alportel','Silves','Tavira','Vila do Bispo','Vila Real de Santo António']
    },
    { 
        'district': 'Guarda', 
        'counties' : ['Aguiar da Beira','Almeida','Celorico da Beira','Figueira de Castelo Rodrigo','Fornos de Algodres','Gouveia','Guarda','Manteigas','Meda','Pinhel','Sabugal','Seia','Trancoso','Vila Nova de Foz Côa']
    },
    { 
        'district': 'Ilha da Graciosa', 
        'counties' : ['Santa Cruz da Graciosa']
    },
    { 
        'district': 'Ilha da Madeira', 
        'counties' : ['Calheta (Madeira)','Câmara de Lobos','Funchal','Machico','Ponta do Sol','Porto Moniz','Ribeira Brava','Santa Cruz','Santana','São Vicente']
    },
    { 
        'district': 'Ilha das Flores', 
        'counties' : ['Lajes das Flores','Santa Cruz das Flores']
    },
    { 
        'district': 'Ilha de Porto Santo', 
        'counties' : ['Porto Santo']
    },
    { 
        'district': 'Ilha de Santa Maria', 
        'counties' : ['Vila do Porto']
    },
    { 
        'district': 'Ilha de São Jorge', 
        'counties' : ['Calheta (São Jorge)','Velas']
    },
    { 
        'district': 'Ilha de São Miguel', 
        'counties' : ['Lagoa (São Miguel)','Nordeste','Ponta Delgada','Povoação','Ribeira Grande','Vila Franca do Campo']
    },
    { 
        'district': 'Ilha do Corvo', 
        'counties' : ['Corvo']
    },
    { 
        'district': 'Ilha do Faial', 
        'counties' : ['Horta']
    },
    { 
        'district': 'Ilha do Pico', 
        'counties' : ['Lajes do Pico','Madalena','São Roque do Pico']
    },
    { 
        'district': 'Ilha Terceira', 
        'counties' : ['Angra do Heroísmo','Praia da Vitória']
    },
    { 
        'district': 'Leiria', 
        'counties' : ['Alcobaça','Alvaiázere','Ansião','Batalha','Bombarral','Caldas da Rainha','Castanheira de Pêra','Figueiró dos Vinhos','Leiria','Marinha Grande','Nazaré','Óbidos','Pedrógão Grande','Peniche','Pombal','Porto de Mós']
    },
    { 
        'district': 'Lisboa', 
        'counties' : ['Alenquer','Amadora','Arruda dos Vinhos','Azambuja','Cadaval','Cascais','Lisboa','Loures','Lourinhã','Mafra','Odivelas','Oeiras','Sintra','Sobral de Monte Agraço','Torres Vedras','Vila Franca de Xira']
    },
    { 
        'district': 'Portalegre', 
        'counties' : ['Alter do Chão','Arronches','Avis','Campo Maior','Castelo de Vide','Crato','Elvas','Fronteira','Gavião','Marvão','Monforte','Nisa','Ponte de Sor','Portalegre','Sousel']
    },
    { 
        'district': 'Porto', 
        'counties' : ['Amarante','Baião','Felgueiras','Gondomar','Lousada','Maia','Marco de Canaveses','Matosinhos','Paços de Ferreira','Paredes','Penafiel','Porto','Póvoa de Varzim','Santo Tirso','Trofa','Valongo','Vila do Conde','Vila Nova de Gaia']
    },
    { 
        'district': 'Santarém', 
        'counties' : ['Abrantes','Alcanena','Almeirim','Alpiarça','Benavente','Cartaxo','Chamusca','Constância','Coruche','Entroncamento','Ferreira do Zêzere','Golegã','Mação','Ourém','Rio Maior','Salvaterra de Magos','Santarém','Sardoal','Tomar','Torres Novas','Vila Nova da Barquinha']
    },
    { 
        'district': 'Setúbal', 
        'counties' : ['Alcácer do Sal','Alcochete','Almada','Barreiro','Grândola','Moita','Montijo','Palmela','Santiago do Cacém','Seixal','Sesimbra','Setúbal','Sines']
    },
    { 
        'district': 'Viana do Castelo', 
        'counties' : ['Arcos de Valdevez','Caminha','Melgaço','Monção','Paredes de Coura','Ponte da Barca','Ponte de Lima','Valença','Viana do Castelo','Vila Nova de Cerveira']
    },
    { 
        'district': 'Vila Real', 
        'counties' : ['Alijó','Boticas','Chaves','Mesão Frio','Mondim de Basto','Montalegre','Murça','Peso da Régua','Ribeira de Pena','Sabrosa','Santa Marta de Penaguião','Valpaços','Vila Pouca de Aguiar','Vila Real']
    },
    { 
        'district': 'Viseu', 
        'counties' : ['Armamar','Carregal do Sal','Castro Daire','Cinfães','Lamego','Mangualde','Moimenta da Beira','Mortágua','Nelas','Oliveira de Frades','Penalva do Castelo','Penedono','Resende','Santa Comba Dão','São João da Pesqueira','São Pedro do Sul','Sátão','Sernancelhe','Tabuaço','Tarouca','Tondela','Vila Nova de Paiva','Viseu','Vouzela']
    }
];