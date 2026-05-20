const data = {
"dach raum": [
    { name: "Germany", code: "de", fakten: ["heimvorteil", "nicht irene riek"], bilder: ["https://de.plonkit.net/images/germany/800px-Karte_Telefonvorwahlen_Deutschland.png", "https://de.plonkit.net/images/germany/postleitzahlen_deutschland_cropped.png", "https://de.plonkit.net/images/resize/450/80/germany/German_flags.jpg", "https://de.plonkit.net/images/resize/450/80/germany/German_Suffixes_Map.png"] },
    { name: "Austria", code: "at", fakten: ["Round wooden poles", "ortseingang und richtungs sign haben blaue border"], bilder: ["https://de.plonkit.net/images/resize/450/80/austria/Austria_or_Slovenia.png", "https://de.plonkit.net/images/resize/450/80/austria/Pedestrian_sign.png"] },
    { name: "Switzerland", code: "ch", fakten: ["low-cam"], bilder: ["https://de.plonkit.net/images/resize/450/80/switzerland/2_digit_postcode_switzerland.png", "https://de.plonkit.net/images/resize/450/80/switzerland/Switzerland_License_Plate.png", "https://de.plonkit.net/images/resize/450/80/switzerland/ch_pedestrian_sign.png"] },
    { name: "Liechtenstein", code: "li", fakten: ["Busstop Hellgrün und weiß mit LIEMOBIL", "road signs mit metal border"], bilder: ["https://de.plonkit.net/images/resize/450/80/liechtenstein/Liechtenstein_plates.png", "https://de.plonkit.net/images/resize/450/80/liechtenstein/2.png", "https://de.plonkit.net/images/resize/450/80/liechtenstein/6.png"] },
],
"flach region": [
    { name: "Belgium", code: "be", fakten: ["red brick house north/west", "gray brick house south (FR)"], bilder: ["https://de.plonkit.net/images/resize/450/80/belgium/Belgium_License_Plate.png", "https://de.plonkit.net/images/resize/450/80/belgium/Belgium_Bollards.png"] },
    { name: "Luxembourg", code: "lu", fakten: ["gelbe eu plate", "Chevrons are black with yellow arrows", "french pole", "signposts blue and white"], bilder: ["https://de.plonkit.net/images/resize/450/80/luxembourg/Bollards.png"] },
    { name: "Netherlands", code: "nl", fakten: ["yellow licence plates", "keine utility poles nur die fetten power lines", "flat as hell", "ländliche Straßen sind von Baumreihen gesäumt"], bilder: ["https://de.plonkit.net/images/resize/600/80/netherlands/Area_codes_of_the_Netherlands.png", "https://de.plonkit.net/images/resize/450/80/netherlands/Dutch_bollard.png", "https://de.plonkit.net/images/resize/450/80/netherlands/Pole_markings.png", "https://de.plonkit.net/images/resize/450/80/netherlands/Windmills.png"] },		
    { name: "France", code: "fr", fakten: ["ladder or waffle poles", "french poles"], bilder: ["https://de.plonkit.net/images/resize/450/80/france/1_licenceplate2.png", "https://de.plonkit.net/images/resize/450/80/france/Bollard.png", "https://external-preview.redd.it/french-regional-numbering-plan-region-guessing-v0-FOSxTOBMgYXnQNG6mkMLxMwAfDYtw412MdTscCtLqk8.png?auto=webp&s=c30ca3cc8bc9c06a6584ae7e719cc9b35be47f04", "https://de.plonkit.net/images/resize/450/80/france/2_postcodes.png"] },
],
"urlaub region": [
    { name: "Portugal", code: "pt", fakten: ["eu plate gelb rechts 100% portugal", "Ç Ã Õ Â Ê", "NO Ñ", "Eucalyptus trees (!nordspanien)", "straße = Rua OHNE AKZENT AUF DEM U"], bilder: ["https://de.plonkit.net/images/resize/450/80/portugal/2areacodes_darkmode.webp", "https://de.plonkit.net/images/resize/450/80/portugal/eucalyptus.png"] },
    { name: "Spain", code: "es", fakten: ["pedestrian crossing signs have 8 stripes", "stop signs have a distinct small font", "straße = calle"], bilder: ["https://de.plonkit.net/images/resize/600/80/spain/Spain-telephone-codes__281_29_darkmode.png", "https://de.plonkit.net/images/resize/450/80/spain/Spain-road-codes-small-version-v2_darkmode.png","https://de.plonkit.net/images/resize/450/80/spain/Spain_stop_sign.png"] },
    { name: "Italy", code: "it", fakten: ["front short plate", "3 eck bollards", "straße = via", "areacodes werden größer richtung osten dann süden"], bilder: ["https://de.plonkit.net/images/resize/450/80/italy/it_licenceplate.png", "https://de.plonkit.net/images/resize/450/80/italy/it_phonecodes.png"] },
    { name: "Andorra", code: "ad", fakten: ["andorra stone buildings", "nur gen2/gen3 coverage", "gen3 hat medium-short antenna"], bilder: ["https://de.plonkit.net/images/resize/450/80/andorra/Andorra_License_Plate.png"] },
],
"norden": [
    { name: "Finland", code: "fi", fakten: ["short plate", "most Finnish street names end in “tie” or “katu”", "nur ä und ö", "viele Doppelvokale"], bilder: ["https://de.plonkit.net/images/resize/450/80/finland/Blue_and_white_signposts.png", "https://de.plonkit.net/images/resize/450/80/finland/Finland_yellow_sign_background.png"] },
    { name: "Norway", code: "no", fakten: ["'Sone' mit speed limit -> 30er zone", "Straße = formen von vei und gata", "traffic signs red outline and white background !! fin swe gelber background !!"], bilder: ["https://de.plonkit.net/images/resize/450/80/norway/no_roadnumbers_darkmode.webp", "https://de.plonkit.net/images/resize/450/80/norway/no_licenceplate.png", "https://de.plonkit.net/images/resize/450/80/norway/no_roadlines.png", "https://de.plonkit.net/images/resize/450/80/norway/no_bollard.png"] },
    { name: "Sweden", code: "se", fakten: ["taxi plate gelb", "Å", "anomaly"], bilder: ["https://de.plonkit.net/images/resize/450/80/sweden/busstopp3.png", "https://de.plonkit.net/images/resize/450/80/sweden/herrg_C3_A5rman.png", "https://de.plonkit.net/images/resize/450/80/sweden/chevron.png", "https://de.plonkit.net/images/resize/450/80/sweden/vagskyltar.png"] },
    { name: "Denmark", code: "dk", fakten: ["flat", "white double middle lines", "Æ, Ø, and Å", "red brick houses"], bilder: ["https://de.plonkit.net/images/resize/450/80/denmark/Denmark_License_Plate.png", "https://de.plonkit.net/images/resize/450/80/denmark/Signpost.png"] },
],
"cup of tea": [
    { name: "United Kingdom", code: "gb", fakten: ["red brick house", "timber farm house"], bilder: ["https://de.plonkit.net/images/resize/450/80/united-kingdom/gb_phone_numbers.webp","https://de.plonkit.net/images/resize/450/80/united-kingdom/United_Kingdom_License_Plate.png", "https://de.plonkit.net/images/resize/450/80/united-kingdom/Cats_eyes_dashes2.png"] },
    { name: "Ireland", code: "ie", fakten: ["only white eu plate no yellow", "yellow outside dashes !! NZ !!", "black roofs", "Vorfahrt achten: yield NICHT GIVE WAY"], bilder: ["https://de.plonkit.net/images/resize/450/80/ireland/Ireland-road-numbers2.png", "https://de.plonkit.net/images/resize/450/80/ireland/ie_phonecodes.png"] },
    { name: "Iceland", code: "is", fakten: ["karg und baumlos", "vulkanisch", "unique letters: ð þ Ð æ", "road nummern im kreis"], bilder: ["https://de.plonkit.net/images/resize/600/80/iceland/Iceland-road-numbering-map.png", "https://de.plonkit.net/images/resize/450/80/iceland/Iceland_Bollard.jpg","https://de.plonkit.net/images/resize/600/80/iceland/iceland_Coverage_Map.png"] },
],
"kleine länder": [
    { name: "San Marino", code: "sm", fakten: ["painted blue crosswalks and hanging signs"], bilder: ["https://de.plonkit.net/images/resize/450/80/san-marino/San_Marino_License_Plate.png", "https://de.plonkit.net/images/resize/450/80/san-marino/San_Marino_Chevron.png"] },  
    { name: "North Macedonia", code: "mk", fakten: ["gen3 no antenna", "unique to Macedonian: Ѓ Ќ", "Serbian and Macedonian: Љ Њ Џ"], bilder: ["https://de.plonkit.net/images/resize/450/80/north-macedonia/North_Macedonia_License_Plate.png", "https://de.plonkit.net/images/resize/450/80/north-macedonia/Greek-Lamp-FYROM.png"] },
	{ name: "Montenegro", code: "me", fakten: ["Guardrails rusted", "sky rifts"], bilder: ["https://de.plonkit.net/images/resize/450/80/montenegro/Montenegro_Licence_Plate.png", "https://de.plonkit.net/images/resize/450/80/montenegro/Bollard.png", "https://de.plonkit.net/images/resize/450/80/montenegro/me_coverage.png"] },
],
"törken": [
    { name: "Turkey", code: "tr", fakten: ["törkische onkel meta"], bilder: ["https://de.plonkit.net/images/resize/450/80/turkey/tr_language.png", "https://de.plonkit.net/images/resize/450/80/turkey/tr_dur.png", "https://de.plonkit.net/images/resize/600/80/turkey/tr_areacodes_nobg.png"] },
    { name: "Albania", code: "al", fakten: ["+355", "black google car", "double eu oder rot eu plates", "Viele Wörter mit sh, rr, ë", "Rruga = Straße"], bilder: ["https://de.plonkit.net/images/resize/600/80/albania/Bollards.png", "https://de.plonkit.net/images/albania/albania_plate.png", "https://de.plonkit.net/images/resize/450/80/albania/Albanian.png"] },
    { name: "Croatia", code: "hr", fakten: ["pedestrian sign with belt and 5 stripes"], bilder: ["https://de.plonkit.net/images/resize/450/80/croatia/Croatia_License_Plate.png", "https://de.plonkit.net/images/resize/450/80/croatia/hr_areacodes_copy.png"] },
    { name: "Greece", code: "gr", fakten: ["kreta= antenne mit nem bulge"], bilder: ["https://de.plonkit.net/images/resize/450/80/greece/gr_language.png", "https://de.plonkit.net/images/resize/600/80/greece/gr_areacodes_darkmode.png", "https://de.plonkit.net/images/resize/450/80/greece/gr_poletop.png", "https://de.plonkit.net/images/resize/450/80/greece/gr_licenceplate.png"] },
],
"s-osten": [
    { name: "Serbia", code: "rs", fakten: ["Č Ć Đ Š Ž Љ љ Њ њ Џ џ", "unique: Ђ ђ Ћ ћ", "oben 2er dann 1er unten links 3er", "vorwahl 381"], bilder: ["https://de.plonkit.net/images/resize/450/80/serbia/area_codes_colourized.png", "https://de.plonkit.net/images/resize/450/80/serbia/Serbia_Plate.png", "https://de.plonkit.net/images/resize/450/80/serbia/Serbia_Coverage_Map_.png"] },
    { name: "Slovakia", code: "sk", fakten: ["Ľ Ô Ä Ŕ Ĺ", "diamond shaped dach tiles", "10 digit phonenumber", "Czech phonenumbers generally do not begin with a 0"], bilder: ["https://de.plonkit.net/images/resize/450/80/slovakia/sk_areacodes.png", "https://de.plonkit.net/images/resize/450/80/slovakia/sk_bollard.png", "https://de.plonkit.net/images/resize/450/80/slovakia/sk_lampbase.png"] },
    { name: "Slovenia", code: "si", fakten: ["ČŠŽ"], bilder: ["https://de.plonkit.net/images/resize/450/80/slovenia/si_bollard.png", "https://de.plonkit.net/images/resize/450/80/slovenia/slovenia_roadlines.png"] },

],
"osten": [
    { name: "Czechia", code: "cz", fakten: ["Czech uses Ř, Ě and Ů", "thin white border, which is separated from the edge by a second coloured border"], bilder: ["https://de.plonkit.net/images/resize/450/80/czechia/cz_bollard.png", "https://de.plonkit.net/images/resize/450/80/czechia/cz_streetsigns.png"] },
    { name: "Poland", code: "pl", fakten: ["white double middle lines", "nur polen: Ł", "roads lined by rows of trees"], bilder: ["https://de.plonkit.net/images/resize/450/80/poland/Poland-bollard.png", "https://de.plonkit.net/images/resize/450/80/poland/Poland_Suffix_Map.png", "https://de.plonkit.net/images/resize/450/80/poland/Poland-area-codes.png", "https://de.plonkit.net/images/resize/450/80/poland/Poland-yellow-sign2.png"] },
    { name: "Romania", code: "ro", fakten: ["vorfahrt achten mega fette rote line mit mini white outline", "pastelfarbene häuser"], bilder: ["https://de.plonkit.net/images/resize/450/80/romania/ro_polesticker.png", "https://de.plonkit.net/images/resize/450/80/romania/ro_directionalsigns.png", "https://de.plonkit.net/images/resize/450/80/romania/ro_language.png", "https://de.plonkit.net/images/resize/450/80/romania/ro_holeypole.png"] },
    { name: "Hungary", code: "hu", fakten: ["taxi plates sind gelb", "grey flag on the antenna in gen3", "8 stellige tel. = 3 & 4 stelle ist areacode", "10 stellige tel. = erste 2 zahlen areacode", "2. stelle 0 oder 1 = nicht brauchbare nummer", "Budapest = 1 oder 3 stelle ist ne 1"], bilder: ["https://de.plonkit.net/images/resize/800/80/hungary/hu_areacodes.png", "https://de.plonkit.net/images/resize/450/80/hungary/hu_language.png", "https://de.plonkit.net/images/resize/450/80/hungary/hu_pedestriansign.png", "https://de.plonkit.net/images/resize/600/80/hungary/hu_roadnumbers.png"] },
],
"krieg": [
    { name: "Ukraine", code: "ua", fakten: ["Є Ґ Ї"], bilder: ["https://de.plonkit.net/images/resize/450/80/ukraine/Ukraine_License_Plate.png", "https://de.plonkit.net/images/resize/450/80/ukraine/Area_codes.png"] },
    { name: "Russia", code: "ru", fakten: ["white plate", "Ы Э Ё Ъ", "street is улица (ulitsa), kurz ул", "word for city is город (gorod), abbreviated г. (g.)", "Sibirische Lärchen = osten"], bilder: ["russia.png", "https://de.plonkit.net/images/resize/450/80/russia/pedestriansign.png", "https://de.plonkit.net/images/resize/600/80/russia/siberianlarches.png"] },
    { name: "Bulgaria", code: "bg", fakten: ["letter “Ъ” is only found in Bulgarian and Russian", "street is улица (ulitsa), kurz ул", "pedestrian signs have four stripes, and the person is wearing a hat"], bilder: ["https://de.plonkit.net/images/resize/450/80/bulgaria/Exquisite_bulgarian_masonry.png"] },
],
"baltic": [
    { name: "Estonia", code: "ee", fakten: ["signs have a thin red border, with no white outline ", "blue and white signpost wrappings", "Finnic languages"], bilder: ["https://de.plonkit.net/images/resize/450/80/estonia/Estonian_Signs.png", "https://de.plonkit.net/images/resize/450/80/estonia/Concrete_pole.png"] },
    { name: "Latvia", code: "lv", fakten: ["dünne bollards", "signs have a thick red border, with a thin white outline around it", "von baltic das einzige mit 5 stripe pedestrian signs lange beine", "in baltic unique letters: Ā Ē Ī Ģ Ķ Ļ Ņ"], bilder: ["https://de.plonkit.net/images/resize/450/80/latvia/Bollard.png", "https://de.plonkit.net/images/resize/450/80/latvia/Latvian_Signs.png"] },
    { name: "Lithuania", code: "lt", fakten: ["signs have a relatively thin red border, with a thin white outline", "in baltic unique letters: Ą Ę Į Ų Ė with a single dot", "straße = gatve oder g."], bilder: ["https://de.plonkit.net/images/resize/450/80/lithuania/Lithuanian_Signs.png", "https://de.plonkit.net/images/resize/450/80/lithuania/Pedestrian_sign_Lithuania.png", "https://de.plonkit.net/images/resize/450/80/lithuania/lithuania_state_flag.png"] },
],




"arab":[
    { name: "Oman", code: "om", fakten: ["Informationen über Oman."], bilder: [] },
    { name: "United Arab Emirates", code: "ae", fakten: ["Informationen über United Arab Emirates."], bilder: [] },
    { name: "Qatar", code: "qa", fakten: ["Informationen über Qatar."], bilder: [] },
    { name: "Jordan", code: "jo", fakten: ["Informationen über Jordan."], bilder: [] },
	{ name: "Israel", code: "il", fakten: ["Informationen über Israel."], bilder: [] },
    { name: "Lebanon", code: "lb", fakten: ["Informationen über Lebanon."], bilder: [] },
],

"asien russland":[
    { name: "Mongolia", code: "mn", fakten: ["Informationen über Mongolia."], bilder: [] },
    { name: "Kyrgyzstan", code: "kg", fakten: ["Informationen über Kyrgyzstan."], bilder: [] },
],

"china schrift":[
    { name: "Japan", code: "jp", fakten: ["Informationen über Japan."], bilder: [] },
    { name: "China", code: "cn", fakten: ["Informationen über China."], bilder: [] },
    { name: "Taiwan", code: "tw", fakten: ["Informationen über Taiwan."], bilder: [] },
    { name: "South Korea", code: "kr", fakten: ["Informationen über South Korea."], bilder: [] },
],

"India type beat":[
    { name: "India", code: "in", fakten: ["Informationen über India."], bilder: [] },
    { name: "Bangladesh", code: "bd", fakten: ["Informationen über Bangladesh."], bilder: [] },
    { name: "Bhutan", code: "bt", fakten: ["Informationen über Bhutan."], bilder: [] },
    { name: "Sri Lanka", code: "lk", fakten: ["Informationen über Sri Lanka."], bilder: [] },
],
 
"thai":[
    { name: "Thailand", code: "th", fakten: ["Informationen über Thailand."], bilder: [] },
    { name: "Vietnam", code: "vn", fakten: ["Informationen über Vietnam."], bilder: [] },
    { name: "Cambodia", code: "kh", fakten: ["Informationen über Cambodia."], bilder: [] },
    { name: "Singapore", code: "sg", fakten: ["Informationen über Singapore."], bilder: [] },
],

"asien insel": [
    { name: "Indonesia", code: "id", fakten: ["Informationen über Indonesia."], bilder: [] },
    { name: "Malaysia", code: "my", fakten: ["Informationen über Malaysia."], bilder: [] },
    { name: "Philippines", code: "ph", fakten: ["Informationen über Philippines."], bilder: [] },
],

"south":[
    { name: "South Africa", code: "za", fakten: ["Informationen über South Africa."], bilder: [] },
    { name: "Botswana", code: "bw", fakten: ["Informationen über Botswana."], bilder: [] },
    { name: "Eswatini", code: "sz", fakten: ["Informationen über Eswatini."], bilder: [] },
    { name: "Lesotho", code: "ls", fakten: ["Informationen über Lesotho."], bilder: [] },
    { name: "Namibia", code: "na", fakten: ["Informationen über Namibia."], bilder: [] },
],

"ostafrika":[
    { name: "Kenya", code: "ke", fakten: ["Informationen über Kenya."], bilder: [] },
    { name: "Rwanda", code: "rw", fakten: ["Informationen über Rwanda."], bilder: [] },
    { name: "Uganda", code: "ug", fakten: ["Informationen über Uganda."], bilder: [] },
    { name: "Tunisia", code: "tn", fakten: ["Informationen über Tunisia."], bilder: [] },
],

"westafrica": [
    { name: "Ghana", code: "gh", fakten: ["Informationen über Ghana."], bilder: [] },
    { name: "Nigeria", code: "ng", fakten: ["Informationen über Nigeria."], bilder: [] },
    { name: "Senegal", code: "sn", fakten: ["Informationen über Senegal."], bilder: [] },
    { name: "The Gambia", code: "gm", fakten: ["Informationen über The Gambia."], bilder: [] },
],

"nord amerika": [
    { name: "Canada", code: "ca", fakten: ["Informationen über Canada."], bilder: [] },
    { name: "Mexico", code: "mx", fakten: ["Informationen über Mexico."], bilder: [] },
    { name: "United States", code: "us", fakten: ["Informationen über United States."], bilder: [] }
],
 
"mitte amerika":[
    { name: "Dominican Republic", code: "do", fakten: ["Informationen über Dominican Republic."], bilder: [] },
    { name: "Panama", code: "pa", fakten: ["Informationen über Panama."], bilder: [] },
    { name: "Guatemala", code: "gt", fakten: ["Informationen über Guatemala."], bilder: [] },
],  

"south amerika oben": [
    { name: "Bolivia", code: "bo", fakten: ["Informationen über Bolivia."], bilder: [] },
    { name: "Colombia", code: "co", fakten: ["Informationen über Colombia."], bilder: [] },
    { name: "Ecuador", code: "ec", fakten: ["Informationen über Ecuador."], bilder: [] },
    { name: "Venezuela", code: "ve", fakten: ["Informationen über Venezuela."], bilder: [] }
  ],
"south amerika unten": [
    { name: "Chile", code: "cl", fakten: ["Informationen über Chile."], bilder: [] },
    { name: "Peru", code: "pe", fakten: ["Informationen über Peru."], bilder: [] },
    { name: "Uruguay", code: "uy", fakten: ["Informationen über Uruguay."], bilder: [] },
    { name: "Argentina", code: "ar", fakten: ["Informationen über Argentina."], bilder: [] },
    { name: "Brazil", code: "br", fakten: ["Informationen über Brazil."], bilder: [] },
    { name: "Paraguay", code: "py", fakten: ["Informationen über Paraguay."], bilder: [] },
],

"oceania": [
    { name: "Australia", code: "au", fakten: ["Informationen über Australia."], bilder: [] },
    { name: "New Zealand", code: "nz", fakten: ["Informationen über New Zealand."], bilder: [] }
  ]
};