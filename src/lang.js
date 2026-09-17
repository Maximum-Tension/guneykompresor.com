/******************************************************************************\
# JS - lang                                      #       Maximum Tension       #
################################################################################
#                                                #      -__            __-     #
# Teoman Deniz                                   #  :    :!1!-_    _-!1!:    : #
# maximum-tension.com                            #  ::                      :: #
#                                                #  :!:    : :: : :  :  ::::!: #
# +.....................++.....................+ #   :!:: :!:!1:!:!::1:::!!!:  #
# : C - Maximum Tension :: Create - 2026/09/17 : #   ::!::!!1001010!:!11!!::   #
# :---------------------::---------------------: #   :!1!!11000000000011!!:    #
# : License - MIT       :: Update - 2026/09/17 : #    ::::!!!1!!1!!!1!!!::     #
# +.....................++.....................+ #       ::::!::!:::!::::      #
\******************************************************************************/

var		lang = "tr"; /* DEFAULT */

const	lang_table = {
	"tr": {
		  0: "Hizmetler",
		  1: "Kontrol ünitesi",
		  2: "Markalar",
		  3: "Süreç",
		  4: "İletişim",
		  5: "Menü",
		  6: "Dil",

		100: "Vidalı kompresörün adım adım sökülmesi",
		101: "Kompresörü içinden tanıyoruz.",
		102: "Atlas Copco, Boge ve Kaeser yüksek basınç kompresörleri için revizyon, onarım, kontrol ünitesi programlama ve yedek parça.",
		103: "Servis talebi gönder",
		104: "Hizmetleri gör",
		105: "Kaydırın, makineyi birlikte sökelim",
		110: "Paneller sökülür",
		111: "Servis panelleri çıkarılır; motor, soğutucu ve vida bloğu erişilebilir hale gelir.",
		120: "Makinenin içi",
		121: "Her bileşen kontrol edilir: elektrik motoru, fan, soğutucu, emiş valfi ve yağ ayırıcı tank.",
		130: "Vida bloğu çıkarılır",
		131: "Kompresörün kalbi yerinden alınır. Revizyonun asıl işi burada başlar.",
		140: "Rotorlar, rulmanlar, keçeler",
		141: "Gövde açılır, rotorlar ölçülür. Rulman, keçe ve o-ringler yenilenir, blok üretici değerlerine göre yeniden toplanır.",

		200: "Soğutucu",
		201: "Fan",
		202: "Hava filtresi ve emiş valfi",
		203: "Elektrik motoru",
		204: "Vida bloğu",
		205: "Yağ ayırıcı tank",
		206: "Rotor gövdesi",
		207: "Basma gövdesi",
		208: "Erkek rotor",
		209: "Dişi rotor",
		210: "Rulmanlar",
		211: "Keçe, o-ring ve cıvatalar",

		300: "Hizmetler",
		301: "Atölyemizde ya da sahada. Arızadan tam revizyona kadar kompresörünüzün servis ihtiyacı tek yerde.",
		310: "Revizyon",
		311: "Vida bloğu ve booster revizyonu. Rulman, keçe ve conta yenileme, rotor ve silindir ölçümü, montaj ve test çalıştırması.",
		320: "Arıza tespiti ve onarım",
		321: "Yüksek sıcaklık, basınç kaybı, yağ taşıması, motor ve valf arızaları. Sorunun kaynağını bulur, kalıcı olarak gideririz.",
		330: "Kontrol ünitesi programlama",
		331: "Atlas Copco Elektronikon ve benzeri kontrol ünitelerinde parametre ayarı, servis sayaçları ve arıza kayıtları. Kendi ekipmanımızla, kendi atölyemizde.",
		340: "Yedek parça",
		341: "Filtre, separatör, yağ, rulman ve keçe setleri, valfler. Makinenize uygun parçayı model ve seri numarasına göre buluruz.",

		400: "Kontrol ünitesini de biz programlıyoruz.",
		401: "Revizyon mekanik kısımla bitmez. Basınç aralıkları, servis planı ve koruma değerleri doğru girilmezse yeni parçalar da erken yıpranır. Atlas Copco Elektronikon kontrol ünitelerini atölyemizde kendimiz programlıyoruz.",
		402: "Yükleme ve boşaltma basınçları",
		403: "Servis planı ve sayaç sıfırlama",
		404: "Arıza ve uyarı kayıtlarının okunması",
		405: "Sıcaklık ve koruma limitleri",
		406: "Ekranlar arasında geçmek için okları kullanın.",
		407: "Önceki ekran",
		408: "Sonraki ekran",
		410: "Yükte çalışıyor",
		411: "Boşta çalışıyor",
		412: "Ana ekran",
		413: "Servis planı",
		414: "Parametreler",
		415: "Çıkış basıncı",
		416: "Element çıkış sıcaklığı",
		417: "Çalışma saati",
		418: "sa",
		420: "Hava filtresi",
		421: "Yağ filtresi",
		422: "Separatör",
		423: "Yağ değişimi",
		430: "Boşaltma basıncı",
		431: "Yükleme basıncı",
		432: "Maks. element sıcaklığı",
		433: "Yeniden başlatma gecikmesi",

		500: "Çalıştığımız markalar",
		501: "Üç markada uzmanlaştık. Farklı bir makineniz varsa yine de sorun.",
		510: "Vidalı kompresörler",
		511: "Vida bloğu revizyonu, periyodik bakım, Elektronikon programlama ve yedek parça.",
		520: "Yüksek basınç booster ve pistonlu kompresörler",
		521: "Silindir, piston, segman ve valf revizyonu; soğutma ve sızdırmazlık kontrolleri.",
		530: "Vidalı kompresörler",
		531: "Bakım, arıza tespiti, vida bloğu revizyonu ve yedek parça.",

		600: "Bir revizyon nasıl ilerler",
		610: "Tespit ve teklif",
		611: "Makineyi dinler, ölçüm alır ve sökmeden önce net bir iş kapsamı ile fiyat veririz.",
		620: "Sökme ve temizlik",
		621: "Vida bloğu ya da silindirler sökülür, her parça temizlenip tek tek incelenir.",
		630: "Ölçüm ve parça değişimi",
		631: "Rotor, yatak ve silindir ölçüleri alınır; aşınan parçalar yenilenir.",
		640: "Montaj ve test",
		641: "Üretici değerlerine göre toplanır, basınç ve sıcaklık altında test edilir.",
		650: "Ayar ve teslim",
		651: "Kontrol ünitesi ayarlanır, servis sayaçları güncellenir ve makine işine geri döner.",

		700: "Servis ve parça talepleri",
		701: "Makinenin markasını, modelini ve çalışma saatini yazarsanız size daha hızlı dönüş yapabiliriz.",
		702: "Google Haritalar'da aç",

		800: "Tüm hakları saklıdır."
	}, /* tr */
	"en": {
		  0: "Services",
		  1: "Controllers",
		  2: "Brands",
		  3: "Process",
		  4: "Contact",
		  5: "Menu",
		  6: "Language",

		100: "A screw compressor being taken apart step by step",
		101: "We know compressors from the inside.",
		102: "Overhaul, repair, controller programming and spare parts for Atlas Copco, Boge and Kaeser high-pressure compressors.",
		103: "Send a service request",
		104: "See services",
		105: "Scroll to take the machine apart",
		110: "Panels come off",
		111: "The service panels are removed so the motor, cooler and screw element are within reach.",
		120: "Inside the machine",
		121: "Every component gets checked: electric motor, fan, cooler, inlet valve and oil separator tank.",
		130: "The screw element comes out",
		131: "The heart of the compressor is lifted out. This is where an overhaul really starts.",
		140: "Rotors, bearings, seals",
		141: "The housing is opened and the rotors measured. Bearings, seals and o-rings are replaced and the element is rebuilt to manufacturer values.",

		200: "Cooler",
		201: "Fan",
		202: "Air filter and inlet valve",
		203: "Electric motor",
		204: "Screw element",
		205: "Oil separator tank",
		206: "Rotor housing",
		207: "Discharge housing",
		208: "Male rotor",
		209: "Female rotor",
		210: "Bearings",
		211: "Seals, o-rings and bolts",

		300: "Services",
		301: "In our workshop or on site. Everything your compressor needs, from a breakdown to a full overhaul.",
		310: "Overhaul",
		311: "Screw element and booster overhauls. New bearings, seals and gaskets, rotor and cylinder measurement, reassembly and a test run.",
		320: "Fault finding and repair",
		321: "High temperature, pressure loss, oil carry-over, motor and valve faults. We find the cause and fix it for good.",
		330: "Controller programming",
		331: "Parameter setup, service counters and fault logs on Atlas Copco Elektronikon and similar controllers. With our own equipment, in our own workshop.",
		340: "Spare parts",
		341: "Filters, separators, oil, bearing and seal kits, valves. We match parts to your machine by model and serial number.",

		400: "We program the controller too.",
		401: "An overhaul doesn't end with the mechanics. If pressure bands, service plans and protection limits are set wrong, new parts wear out early. We program Atlas Copco Elektronikon controllers ourselves, in our workshop.",
		402: "Load and unload pressures",
		403: "Service plans and counter resets",
		404: "Reading fault and warning logs",
		405: "Temperature and protection limits",
		406: "Use the arrows to switch screens.",
		407: "Previous screen",
		408: "Next screen",
		410: "Running loaded",
		411: "Running unloaded",
		412: "Main screen",
		413: "Service plan",
		414: "Parameters",
		415: "Outlet pressure",
		416: "Element outlet temp.",
		417: "Running hours",
		418: "h",
		420: "Air filter",
		421: "Oil filter",
		422: "Separator",
		423: "Oil change",
		430: "Unload pressure",
		431: "Load pressure",
		432: "Max. element temp.",
		433: "Restart delay",

		500: "Brands we work on",
		501: "We specialise in three brands. If you have a different machine, ask anyway.",
		510: "Rotary screw compressors",
		511: "Screw element overhauls, scheduled maintenance, Elektronikon programming and spare parts.",
		520: "High-pressure boosters and piston compressors",
		521: "Cylinder, piston, ring and valve overhauls; cooling and leak checks.",
		530: "Rotary screw compressors",
		531: "Maintenance, fault finding, screw element overhauls and spare parts.",

		600: "How an overhaul works",
		610: "Inspection and quote",
		611: "We listen to the machine, take readings and give you a clear scope and price before anything comes apart.",
		620: "Teardown and cleaning",
		621: "The screw element or cylinders come apart, and every part is cleaned and inspected.",
		630: "Measurement and replacement",
		631: "Rotors, bearing seats and cylinders are measured; worn parts are replaced.",
		640: "Assembly and test run",
		641: "Rebuilt to manufacturer values, then tested under pressure and temperature.",
		650: "Setup and handover",
		651: "The controller is set up, service counters are updated and the machine goes back to work.",

		700: "Service and parts requests",
		701: "Include the brand, model and running hours of your machine and we can get back to you faster.",
		702: "Open in Google Maps",

		800: "All rights reserved."
	} /* en */
};

if (!LOCAL_STORAGE.CHECK("lang"))
{
	var	page_language = ((navigator.language || navigator.userLanguage).substring(0, 2));

	if (lang_table[page_language])
		lang = page_language;

	LOCAL_STORAGE.SET("lang", lang);
}
else
	lang = LOCAL_STORAGE.GET("lang");

var		strings = lang_table[lang];
