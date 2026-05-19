const data = {

  "europe": [
    { name: "Albania", code: "al", fakten: ["+355", "black google car", "double eu oder rot eu plates", "Viele Wörter mit sh, rr, ë", "Rruga = Straße"], bilder: ["https://de.plonkit.net/images/resize/600/80/albania/Bollards.png", "https://de.plonkit.net/images/albania/albania_plate.png", "https://de.plonkit.net/images/resize/450/80/albania/Albanian.png"] },
    { name: "Andorra", code: "ad", fakten: ["andorra stone buildings", "nur gen2/gen3 coverage", "gen3 hat medium-short antenna"], bilder: ["https://de.plonkit.net/images/resize/450/80/andorra/Andorra_License_Plate.png"] },
    { name: "Austria", code: "at", fakten: ["Round wooden poles", "ortseingang und richtungs sign haben blaue border"], bilder: ["https://de.plonkit.net/images/resize/450/80/austria/Austria_or_Slovenia.png", "https://de.plonkit.net/images/resize/450/80/austria/Pedestrian_sign.png"] },
    { name: "Belgium", code: "be", fakten: ["red brick house north/west", "gray brick house south (FR)"], bilder: ["https://de.plonkit.net/images/resize/450/80/belgium/Belgium_License_Plate.png", "https://de.plonkit.net/images/resize/450/80/belgium/Belgium_Bollards.png"] },
    { name: "Bulgaria", code: "bg", fakten: ["letter “Ъ” is only found in Bulgarian and Russian", "street is улица (ulitsa), kurz ул", "pedestrian signs have four stripes, and the person is wearing a hat"], bilder: ["https://de.plonkit.net/images/resize/450/80/bulgaria/Exquisite_bulgarian_masonry.png"] },
    { name: "Croatia", code: "hr", fakten: ["pedestrian sign with belt and 5 stripes"], bilder: ["https://de.plonkit.net/images/resize/450/80/croatia/Croatia_License_Plate.png", "https://de.plonkit.net/images/resize/450/80/croatia/hr_areacodes_copy.png"] },
    { name: "Czechia", code: "cz", fakten: ["Czech uses Ř, Ě and Ů", "thin white border, which is separated from the edge by a second coloured border"], bilder: ["https://de.plonkit.net/images/resize/450/80/czechia/cz_bollard.png", "https://de.plonkit.net/images/resize/450/80/czechia/cz_streetsigns.png"] },
    { name: "Denmark", code: "dk", fakten: ["flat", "white double middle lines", "Æ, Ø, and Å", "red brick houses"], bilder: ["https://de.plonkit.net/images/resize/450/80/denmark/Denmark_License_Plate.png", "https://de.plonkit.net/images/resize/450/80/denmark/Signpost.png"] },
    { name: "Estonia", code: "ee", fakten: ["signs have a thin red border, with no white outline ", "blue and white signpost wrappings", "Finnic languages"], bilder: ["https://de.plonkit.net/images/resize/450/80/estonia/Estonian_Signs.png", "https://de.plonkit.net/images/resize/450/80/estonia/Concrete_pole.png"] },
    { name: "Finland", code: "fi", fakten: ["short plate", "most Finnish street names end in “tie” or “katu”", "nur ä und ö", "viele Doppelvokale"], bilder: ["https://de.plonkit.net/images/resize/450/80/finland/Blue_and_white_signposts.png", "https://de.plonkit.net/images/resize/450/80/finland/Finland_yellow_sign_background.png"] },
    { name: "France", code: "fr", fakten: ["ladder or waffle poles", "french poles"], bilder: ["https://de.plonkit.net/images/resize/450/80/france/1_licenceplate2.png", "https://de.plonkit.net/images/resize/450/80/france/Bollard.png", "https://external-preview.redd.it/french-regional-numbering-plan-region-guessing-v0-FOSxTOBMgYXnQNG6mkMLxMwAfDYtw412MdTscCtLqk8.png?auto=webp&s=c30ca3cc8bc9c06a6584ae7e719cc9b35be47f04", "https://de.plonkit.net/images/resize/450/80/france/2_postcodes.png"] },
    { name: "Germany", code: "de", fakten: ["heimvorteil", "nicht irene riek"], bilder: ["https://de.plonkit.net/images/germany/800px-Karte_Telefonvorwahlen_Deutschland.png", "https://de.plonkit.net/images/germany/postleitzahlen_deutschland_cropped.png", "https://de.plonkit.net/images/resize/450/80/germany/German_flags.jpg", "https://de.plonkit.net/images/resize/450/80/germany/German_Suffixes_Map.png"] },
    { name: "Greece", code: "gr", fakten: ["kreta= antenne mit nem bulge"], bilder: ["https://de.plonkit.net/images/resize/450/80/greece/gr_language.png", "https://de.plonkit.net/images/resize/600/80/greece/gr_areacodes_darkmode.png", "https://de.plonkit.net/images/resize/450/80/greece/gr_poletop.png", "https://de.plonkit.net/images/resize/450/80/greece/gr_licenceplate.png"] },
    { name: "Hungary", code: "hu", fakten: ["taxi plates sind gelb", "grey flag on the antenna in gen3", "8 stellige tel. = 3 & 4 stelle ist areacode", "10 stellige tel. = erste 2 zahlen areacode", "2. stelle 0 oder 1 = nicht brauchbare nummer", "Budapest = 1 oder 3 stelle ist ne 1"], bilder: ["https://de.plonkit.net/images/resize/450/80/hungary/hu_language.png", "https://de.plonkit.net/images/resize/450/80/hungary/hu_pedestriansign.png", "https://de.plonkit.net/images/resize/600/80/hungary/hu_roadnumbers.png"] },
    { name: "Iceland", code: "is", fakten: ["Informationen über Iceland."], bilder: [] },
    { name: "Ireland", code: "ie", fakten: ["Informationen über Ireland."], bilder: [] },
    { name: "Italy", code: "it", fakten: ["Informationen über Italy."], bilder: [] },
    { name: "Latvia", code: "lv", fakten: ["Informationen über Latvia."], bilder: [] },
    { name: "Liechtenstein", code: "li", fakten: ["Informationen über Liechtenstein."], bilder: [] },
    { name: "Lithuania", code: "lt", fakten: ["Informationen über Lithuania."], bilder: [] },
    { name: "Luxembourg", code: "lu", fakten: ["Informationen über Luxembourg."], bilder: [] },
    { name: "Montenegro", code: "me", fakten: ["Informationen über Montenegro."], bilder: [] },
    { name: "Netherlands", code: "nl", fakten: ["Informationen über Netherlands."], bilder: [] },		
    { name: "North Macedonia", code: "mk", fakten: ["Informationen über North Macedonia."], bilder: [] },
    { name: "Norway", code: "no", fakten: ["Informationen über Norway."], bilder: [] },
    { name: "Poland", code: "pl", fakten: ["Informationen über Poland."], bilder: [] },
    { name: "Portugal", code: "pt", fakten: ["Informationen über Portugal."], bilder: [] },
    { name: "Romania", code: "ro", fakten: ["Informationen über Romania."], bilder: [] },
    { name: "Russia", code: "ru", fakten: ["Informationen über Russia."], bilder: [] },
    { name: "San Marino", code: "sm", fakten: ["Informationen über San Marino."], bilder: [] },
    { name: "Serbia", code: "rs", fakten: ["Informationen über Serbia."], bilder: [] },
    { name: "Slovakia", code: "sk", fakten: ["Informationen über Slovakia."], bilder: [] },
    { name: "Slovenia", code: "si", fakten: ["Informationen über Slovenia."], bilder: [] },
    { name: "Spain", code: "es", fakten: ["Informationen über Spain."], bilder: [] },
    { name: "Sweden", code: "se", fakten: ["Informationen über Sweden."], bilder: [] },
    { name: "Switzerland", code: "ch", fakten: ["Informationen über Switzerland."], bilder: [] },
    { name: "Turkey", code: "tr", fakten: ["Informationen über Turkey."], bilder: [] },
    { name: "Ukraine", code: "ua", fakten: ["Informationen über Ukraine."], bilder: [] },
    { name: "United Kingdom", code: "gb", fakten: ["Informationen über United Kingdom."], bilder: [] }
  ],

  "asia": [
    { name: "Bangladesh", code: "bd", fakten: ["Informationen über Bangladesh."], bilder: [] },
    { name: "Bhutan", code: "bt", fakten: ["Informationen über Bhutan."], bilder: [] },
    { name: "Cambodia", code: "kh", fakten: ["Informationen über Cambodia."], bilder: [] },
    { name: "India", code: "in", fakten: ["Informationen über India."], bilder: [] },
    { name: "Indonesia", code: "id", fakten: ["Informationen über Indonesia."], bilder: [] },
    { name: "Israel", code: "il", fakten: ["Informationen über Israel."], bilder: [] },
    { name: "Japan", code: "jp", fakten: ["Informationen über Japan."], bilder: [] },
    { name: "Jordan", code: "jo", fakten: ["Informationen über Jordan."], bilder: [] },
    { name: "Kyrgyzstan", code: "kg", fakten: ["Informationen über Kyrgyzstan."], bilder: [] },
    { name: "Lebanon", code: "lb", fakten: ["Informationen über Lebanon."], bilder: [] },
    { name: "Malaysia", code: "my", fakten: ["Informationen über Malaysia."], bilder: [] },
    { name: "Mongolia", code: "mn", fakten: ["Informationen über Mongolia."], bilder: [] },
    { name: "Oman", code: "om", fakten: ["Informationen über Oman."], bilder: [] },
    { name: "Philippines", code: "ph", fakten: ["Informationen über Philippines."], bilder: [] },
    { name: "Qatar", code: "qa", fakten: ["Informationen über Qatar."], bilder: [] },
    { name: "Singapore", code: "sg", fakten: ["Informationen über Singapore."], bilder: [] },
    { name: "South Korea", code: "kr", fakten: ["Informationen über South Korea."], bilder: [] },
    { name: "Sri Lanka", code: "lk", fakten: ["Informationen über Sri Lanka."], bilder: [] },
    { name: "Taiwan", code: "tw", fakten: ["Informationen über Taiwan."], bilder: [] },
    { name: "Thailand", code: "th", fakten: ["Informationen über Thailand."], bilder: [] },
    { name: "United Arab Emirates", code: "ae", fakten: ["Informationen über United Arab Emirates."], bilder: [] },
    { name: "Vietnam", code: "vn", fakten: ["Informationen über Vietnam."], bilder: [] }
  ],

  "africa": [
    { name: "Botswana", code: "bw", fakten: ["Informationen über Botswana."], bilder: [] },
    { name: "Eswatini", code: "sz", fakten: ["Informationen über Eswatini."], bilder: [] },
    { name: "Ghana", code: "gh", fakten: ["Informationen über Ghana."], bilder: [] },
    { name: "Kenya", code: "ke", fakten: ["Informationen über Kenya."], bilder: [] },
    { name: "Lesotho", code: "ls", fakten: ["Informationen über Lesotho."], bilder: [] },
    { name: "Namibia", code: "na", fakten: ["Informationen über Namibia."], bilder: [] },
    { name: "Nigeria", code: "ng", fakten: ["Informationen über Nigeria."], bilder: [] },
    { name: "Rwanda", code: "rw", fakten: ["Informationen über Rwanda."], bilder: [] },
    { name: "Senegal", code: "sn", fakten: ["Informationen über Senegal."], bilder: [] },
    { name: "South Africa", code: "za", fakten: ["Informationen über South Africa."], bilder: [] },
    { name: "The Gambia", code: "gm", fakten: ["Informationen über The Gambia."], bilder: [] },
    { name: "Tunisia", code: "tn", fakten: ["Informationen über Tunisia."], bilder: [] },
    { name: "Uganda", code: "ug", fakten: ["Informationen über Uganda."], bilder: [] }
  ],

  "na": [
    { name: "Canada", code: "ca", fakten: ["Informationen über Canada."], bilder: [] },
    { name: "Dominican Republic", code: "do", fakten: ["Informationen über Dominican Republic."], bilder: [] },
    { name: "Guatemala", code: "gt", fakten: ["Informationen über Guatemala."], bilder: [] },
    { name: "Mexico", code: "mx", fakten: ["Informationen über Mexico."], bilder: [] },
    { name: "Panama", code: "pa", fakten: ["Informationen über Panama."], bilder: [] },
    { name: "United States", code: "us", fakten: ["Informationen über United States."], bilder: [] }
  ],

  "sa": [
    { name: "Argentina", code: "ar", fakten: ["Informationen über Argentina."], bilder: [] },
    { name: "Bolivia", code: "bo", fakten: ["Informationen über Bolivia."], bilder: [] },
    { name: "Brazil", code: "br", fakten: ["Informationen über Brazil."], bilder: [] },
    { name: "Chile", code: "cl", fakten: ["Informationen über Chile."], bilder: [] },
    { name: "Colombia", code: "co", fakten: ["Informationen über Colombia."], bilder: [] },
    { name: "Ecuador", code: "ec", fakten: ["Informationen über Ecuador."], bilder: [] },
    { name: "Guyana", code: "gy", fakten: ["Informationen über Guyana."], bilder: [] },
    { name: "Paraguay", code: "py", fakten: ["Informationen über Paraguay."], bilder: [] },
    { name: "Peru", code: "pe", fakten: ["Informationen über Peru."], bilder: [] },
    { name: "Uruguay", code: "uy", fakten: ["Informationen über Uruguay."], bilder: [] },
    { name: "Venezuela", code: "ve", fakten: ["Informationen über Venezuela."], bilder: [] }
  ],

  "oceania": [
    { name: "Australia", code: "au", fakten: ["Informationen über Australia."], bilder: [] },
    { name: "New Zealand", code: "nz", fakten: ["Informationen über New Zealand."], bilder: [] }
  ]

};