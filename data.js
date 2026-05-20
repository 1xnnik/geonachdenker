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
    { name: "Oman", code: "om", fakten: ["white truck", "desert auch ohne straße", "Black-and-yellow curbs"], bilder: ["https://de.plonkit.net/images/resize/450/80/oman/13.png", "https://de.plonkit.net/images/resize/450/80/oman/3.png", "https://de.plonkit.net/images/resize/450/80/oman/10.png"] },
    { name: "United Arab Emirates", code: "ae", fakten: ["unique: white car with visible black roof racks in gen 3", "Reddish stones on sidewalk", "Divided roads and roundabouts "], bilder: ["https://de.plonkit.net/images/resize/450/80/united-arab-emirates/ae_roadlines.png"] },
    { name: "Qatar", code: "qa", fakten: ["white on red and white on blue chevrons"], bilder: ["https://de.plonkit.net/images/resize/450/80/qatar/Qatar_License_Plate.png", "https://de.plonkit.net/images/resize/450/80/qatar/Qatarpoles.png", "https://de.plonkit.net/images/resize/450/80/qatar/Crossing_Sign.png"] },
    { name: "Jordan", code: "jo", fakten: ["no english writing", "chevrons are white with red arrows"], bilder: ["https://de.plonkit.net/images/resize/450/80/jordan/Jordan_License_Plate.png", "https://de.plonkit.net/images/resize/600/80/jordan/jo_coverage.png", "https://de.plonkit.net/images/resize/450/80/jordan/Jordan_road.png", "https://de.plonkit.net/images/resize/450/80/jordan/jo_architecture.png"] },
	{ name: "Israel", code: "il", fakten: ["Chevrons are white on black"], bilder: ["https://de.plonkit.net/images/resize/450/80/israel-west-bank/il_Licence_Plate.png", "https://de.plonkit.net/images/resize/450/80/israel-west-bank/il_language.png", "https://de.plonkit.net/images/resize/450/80/israel-west-bank/il_stopsign.png", "https://de.plonkit.net/images/resize/450/80/israel-west-bank/IL_Stripy_Pole.png"] },
    { name: "Lebanon", code: "lb", fakten: ["arabisch + english oder french", "unique shitcam in middle east"], bilder: ["https://de.plonkit.net/images/resize/450/80/lebanon/lb_licenceplates.png", "https://de.plonkit.net/images/resize/450/80/lebanon/Lebanon_Poles.png", "https://de.plonkit.net/images/resize/450/80/lebanon/Lebanon_Coverage_Map.png"] },
],

"asien russland":[
    { name: "Mongolia", code: "mn", fakten: ["ЗОГС stop sign.", "unique: Ɵ Ү", "double vowels aa ƟƟ ЭЭ are common", "truck mit tent"], bilder: ["https://de.plonkit.net/images/resize/450/80/mongolia/1._licenceplate.jpeg", "https://de.plonkit.net/images/resize/450/80/mongolia/1._bollard.png"] },
    { name: "Kyrgyzstan", code: "kg", fakten: ["watch car and driving richtung"], bilder: ["https://de.plonkit.net/images/resize/450/80/kyrgyzstan/Please_dont_guess_Guatemala.png", "https://de.plonkit.net/images/resize/600/80/kyrgyzstan/Kyrgyzstan_Driving_Directions_V2.png", "https://de.plonkit.net/images/resize/450/80/kyrgyzstan/Kyrgyzstan_License_Plate.png"] },
],

"china schrift":[
    { name: "Japan", code: "jp", fakten: ["linksverkehr", "low cam", "NEVER outside yellow lines"], bilder: ["https://de.plonkit.net/images/resize/450/80/japan/2.png", "https://de.plonkit.net/images/resize/450/80/japan/9.png", "https://de.plonkit.net/images/resize/450/80/japan/13.png", "https://de.plonkit.net/images/resize/600/80/japan/jp_areacodes_darkmode.png", "https://de.plonkit.net/images/resize/600/80/japan/37.png"] },
    { name: "China", code: "cn", fakten: ["tripod coverage", "motion blur"], bilder: ["https://de.plonkit.net/images/resize/450/80/china/cn_licenceplate.png", "https://de.plonkit.net/images/resize/600/80/china/cn_coverage.png"] },
    { name: "Taiwan", code: "tw", fakten: ["japan aber rechtsverkehr", "rechtsverkehr"], bilder: ["https://de.plonkit.net/images/resize/600/80/taiwan/a-more-detailed-taiwan-area-code-map.webp", "https://de.plonkit.net/images/resize/450/80/taiwan/ui_remover.png", "https://de.plonkit.net/images/resize/600/80/taiwan/ui_remover__281_29.png", "https://de.plonkit.net/images/resize/600/80/taiwan/Traditional_Chinese.png"] },
    { name: "South Korea", code: "kr", fakten: ["autumn and winter", "right driving"], bilder: ["https://de.plonkit.net/images/resize/600/80/south-korea/licen_plae.png", "https://de.plonkit.net/images/resize/600/80/south-korea/kr_script.png", "https://de.plonkit.net/images/resize/600/80/south-korea/kr_pole_marking.png"] },
],

"India type beat":[
    { name: "India", code: "in", fakten: ["left driving"], bilder: ["in_scripts.png", "in_language.png"] },
    { name: "Bangladesh", code: "bd", fakten: ["türkis plate nur bangla"], bilder: ["https://de.plonkit.net/images/resize/450/80/bangladesh/Bangladesh_License_Plate.png", "https://de.plonkit.net/images/resize/450/80/bangladesh/bd_language.png", "https://de.plonkit.net/images/resize/450/80/bangladesh/bollard.png"] },
    { name: "Bhutan", code: "bt", fakten: ["Prayer flags", "thin metal poles"], bilder: ["https://de.plonkit.net/images/resize/450/80/bhutan/Bhutan_License_Plate.png", "https://de.plonkit.net/images/resize/450/80/bhutan/Dzongkha.png", "https://de.plonkit.net/images/resize/450/80/bhutan/stonebarriers.png"] },
    { name: "Sri Lanka", code: "lk", fakten: ["low-cam", "large see-through holes in the LOWER half of the pole"], bilder: ["https://de.plonkit.net/images/resize/450/80/sri-lanka/Sri_Lanka_License_Plate.png","https://de.plonkit.net/images/resize/450/80/sri-lanka/Gen_3_car2.png","https://de.plonkit.net/images/resize/450/80/sri-lanka/Sri_Lanka_scripts.png"] },

],
 
"thai":[
    { name: "Thailand", code: "th", fakten: ["left drive", "yellow middle line", "royal flag = yellow", "phone codes nur haustelefone"], bilder: ["https://de.plonkit.net/images/resize/450/80/thailand/Thailand_License_Plate.png", "https://de.plonkit.net/images/resize/450/80/thailand/th_language.png", "https://de.plonkit.net/images/resize/450/80/thailand/Screenshot%20(638).png", "https://de.plonkit.net/images/resize/450/80/thailand/Indicatifs_Thailande.png"] },
    { name: "Vietnam", code: "vn", fakten: ["right drive", "unique: Road signs have a yellow-orange background"], bilder: ["https://de.plonkit.net/images/resize/450/80/vietnam/vietnam_plate2.png", "https://de.plonkit.net/images/resize/450/80/vietnam/vn_language.png", "https://de.plonkit.net/images/resize/450/80/vietnam/vn_bollard.png", "https://de.plonkit.net/images/resize/450/80/vietnam/vn_directionalsign.png"] },
    { name: "Cambodia", code: "kh", fakten: ["right drive"], bilder: ["https://de.plonkit.net/images/resize/450/80/cambodia/Cambodia_License_Plate.png", "https://de.plonkit.net/images/resize/450/80/cambodia/Khmer.png", "https://de.plonkit.net/images/resize/450/80/cambodia/Cambodia_poles.png", "https://de.plonkit.net/images/resize/450/80/cambodia/House_colours.png"] },
    { name: "Singapore", code: "sg", fakten: ["cleanliness and orderliness", "straßennamen 3 letter codes"], bilder: ["https://de.plonkit.net/images/resize/450/80/singapore/streetsign.png", "https://de.plonkit.net/images/resize/450/80/singapore/Singapore_License_Plate.png", "https://de.plonkit.net/images/resize/450/80/singapore/directionalsign.png", "https://de.plonkit.net/images/resize/450/80/singapore/Untitled_design__2845_29.png"] },
],

"asien insel": [
    { name: "Indonesia", code: "id", fakten: ["3 white sections on plate", "left drive", "outer lines always white", "money is Rupiah (Rp)"], bilder: ["https://de.plonkit.net/images/resize/450/80/indonesia/Indonesia_License_Plate.png", "https://de.plonkit.net/images/resize/450/80/indonesia/Indonesian_language.png", "https://de.plonkit.net/images/resize/450/80/indonesia/Front_License_Plate_on_Motorcycle.png", "https://de.plonkit.net/images/resize/600/80/indonesia/If_you_are_reading_this_have_a_nice_day.png"] },
    { name: "Malaysia", code: "my", fakten: ["2 white sections on plate", "unique: double white center lines", "= indo skript"], bilder: ["https://de.plonkit.net/images/resize/450/80/malaysia/Malaysia_License_Plate.png", "https://de.plonkit.net/images/resize/450/80/malaysia/Untitled_design__2824_29.png", "https://de.plonkit.net/images/resize/450/80/malaysia/Untitled_design__2823_29.png", "https://de.plonkit.net/images/resize/450/80/malaysia/directionalsign.png"] },
    { name: "Philippines", code: "ph", fakten: ["landlines start with 0 followed by area code", "mobile phone numbers start with 09", "rechts drive", "Concrete roads oft", "Octagonal metal poles"], bilder: ["https://de.plonkit.net/images/resize/450/80/philippines/2_areacodes.png", "https://de.plonkit.net/images/resize/450/80/philippines/1_octopole.png", "https://de.plonkit.net/images/resize/450/80/philippines/1_poleinsulator.png", "https://de.plonkit.net/images/resize/450/80/philippines/1_roadline.png"] },
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