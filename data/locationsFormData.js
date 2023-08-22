import { json } from "express"

let dateObj = new Date()


const startDateStringifiedArrSplit = JSON.stringify(dateObj)?.split("-")


let startYear = startDateStringifiedArrSplit[0]?.split('"')[1]
let startMonth = startDateStringifiedArrSplit[1]

let startDay = startDateStringifiedArrSplit[startDateStringifiedArrSplit?.length - 1]?.split("T")[0]

let newDate = new Date(dateObj.setMonth(dateObj.getMonth()+3));


const endDateStringifiedArrSplit = JSON.stringify(dateObj)?.split("-")

let endYear = endDateStringifiedArrSplit[0]?.split('"')[1]
let endMonth = endDateStringifiedArrSplit[1]

let endDay = endDateStringifiedArrSplit[endDateStringifiedArrSplit?.length - 1]?.split("T")[0]

const startDate = `${startDay}.${startMonth}.${startYear}`

const endDate = `${endDay}.${endMonth}.${endYear}`


const discountArray = [
    {id: 1, brandSlug: "avene", brandTitle: "Avene", percent: 5, startDate: startDate, endDate: endDate},
    {id: 2, brandSlug: "bioderma", brandTitle: "Bioderma", percent: 5, startDate: startDate, endDate: endDate},
    {id: 3, brandSlug: "cerave", brandTitle: "Cerave", percent: 5, startDate: startDate, endDate: endDate},
    {id: 4, brandSlug: "ducray", brandTitle: "Ducray", percent: 5, startDate: startDate, endDate: endDate},
    {id: 5, brandSlug: "eucerin", brandTitle: "Eucerin", percent: 5, startDate: startDate, endDate: endDate},
    {id: 6, brandSlug: "filorga", brandTitle: "Filorga", percent: 10, startDate: startDate, endDate: endDate},
    {id: 7, brandSlug: "hansaplast", brandTitle: "Hansaplast", percent: 10, startDate: startDate, endDate: endDate},
    {id: 8, brandSlug: "isdin", brandTitle: "Isdin", percent: 10, startDate: startDate, endDate: endDate},
    {id: 9, brandSlug: "kal", brandTitle: "Kal", percent: 15, startDate: startDate, endDate: endDate},
    {id: 10, brandSlug: "laRochePosay", brandTitle: "La Roche Posay", percent: 15, startDate: startDate, endDate: endDate},
    {id: 11, brandSlug: "medis", brandTitle: "Medis", percent: 15, startDate: startDate, endDate: endDate},
    {id: 12, brandSlug: "nuxe", brandTitle: "Nuxe", percent: 15, startDate: startDate, endDate: endDate},
    {id: 13, brandSlug: "omron", brandTitle: "Omron", percent: 20, startDate: startDate, endDate: endDate},
    {id: 14, brandSlug: "pileje", brandTitle: "Pileje", percent: 20, startDate: startDate, endDate: endDate},
    {id: 15, brandSlug: "revalid", brandTitle: "Revalid", percent: 20, startDate: startDate, endDate: endDate},
    {id: 16, brandSlug: "solgar", brandTitle: "Solgar", percent: 20, startDate: startDate, endDate: endDate},
    {id: 17, brandSlug: "twinlab", brandTitle: "Twinlab", percent: 25, startDate: startDate, endDate: endDate},
    {id: 18, brandSlug: "uriage", brandTitle: "Uriage", percent: 25, startDate: startDate, endDate: endDate},
    {id: 19, brandSlug: "vichy", brandTitle: "Vichy", percent: 25, startDate: startDate, endDate: endDate},
    {id: 20, brandSlug: "yasenka", brandTitle: "Yasenka", percent: 25, startDate: startDate, endDate: endDate},
]




export const locationsFormData = {
    locationsTitle: "Locations",
    locationsTitleAlt: "Locations of CydexPharm Pharmacies",
    locationsPromotionsTitle: "Discounts and promotions",
    locationsWorkTime: "Mon-Fri 07:00 - 21:00",
    locationsPhoneNumber: `01 ${Math.floor(Math.random() * (9000 - 1) + 1)} ${Math.floor(Math.random() * (999 - 1) + 1)}`,
    locations: [
        {
            id: 1, city: "Zagreb", frontendSlug: "zagreb", stores: 12, addresses: [
                {
                    id: 1,
                    frontendSlug: "novaVes37",
                    route: "nova_ves_37",
                    title: "Nova Ves 37",
                    image: "http://localhost:9000/images/addresses/zagreb_1.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 2,
                    frontendSlug: "jurisicevaUlica24",
                    route: "jurisiceva_ulica_24",
                    title: "Jurišićeva Ulica 24",
                    image: "http://localhost:9000/images/addresses/zagreb_2.webp",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 3,
                    frontendSlug: "baranovicevaUlica4",
                    route: "baranoviceva_ulica_4",
                    title: "Baranovićeva Ulica 4",
                    image: "http://localhost:9000/images/addresses/zagreb_3.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 4,
                    frontendSlug: "pantovcak111",
                    route: "pantovcak_111",
                    title: "Pantovčak 111",
                    image: "http://localhost:9000/images/addresses/zagreb_4.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 5,
                    frontendSlug: "bolnickaCesta6",
                    route: "bolnicka_cesta_6",
                    title: "Bolnička cesta 6",
                    image: "http://localhost:9000/images/addresses/zagreb_5.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 6,
                    frontendSlug: "gajnice22",
                    route: "gajnice_22",
                    title: "Gajnice 22",
                    image: "http://localhost:9000/images/addresses/zagreb_6.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 7,
                    frontendSlug: "huzjanovaUlica9",
                    route: "huzjanova_ulica_9",
                    title: "Huzjanova ulica 9",
                    image: "http://localhost:9000/images/addresses/zagreb_7.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 8,
                    frontendSlug: "medpotoki15",
                    route: "medpotoki_15",
                    title: "Medpotoki 15",
                    image: "http://localhost:9000/images/addresses/zagreb_8.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 9,
                    frontendSlug: "piskorovBreg4",
                    route: "piskorov_breg_4",
                    title: "Piškorov breg 4",
                    image: "http://localhost:9000/images/addresses/zagreb_9.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 10,
                    frontendSlug: "sigetje22",
                    route: "sigetje_22",
                    title: "Sigetje 22",
                    image: "http://localhost:9000/images/addresses/zagreb_10.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 11,
                    frontendSlug: "samoborskaCesta167",
                    route: "samoborska_cesta_167",
                    title: "Samoborska cesta 167",
                    image: "http://localhost:9000/images/addresses/zagreb_11.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 12,
                    frontendSlug: "alejaGradaBolonje_22",
                    route: "aleja_grada_bolonje_22",
                    title: "Aleja grada Bolonje 22",
                    image: "http://localhost:9000/images/addresses/zagreb_12.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
            ]
        },
        {
            id: 2, city: "Osijek", frontendSlug: "osijek", stores: 6, addresses: [
                {
                    id: 1,
                    frontendSlug: "adamaReisnera4",
                    route: "adama_resinera_4",
                    title: "Adama Reisnera",
                    image: "http://localhost:9000/images/addresses/osijek_1.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 2,
                    frontendSlug: "cetinjska54",
                    route: "cetinjska_54",
                    title: "Cetinjska 54",
                    image: "http://localhost:9000/images/addresses/osijek_2.webp",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 3,
                    frontendSlug: "knezaBorne21",
                    route: "kneza_borne_21",
                    title: "Kneza Borne 21",
                    image: "http://localhost:9000/images/addresses/osijek_3.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 4,
                    frontendSlug: "mosorska19",
                    image: "http://localhost:9000/images/addresses/osijek_4.jpeg",
                    route: "mosorska_19",
                    title: "Mosorska 19",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 5,
                    frontendSlug: "orahovicka6",
                    route: "orahovicka_6",
                    title: "Orahovička 6",
                    image: "http://localhost:9000/images/addresses/osijek_5.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 6,
                    frontendSlug: "vatroslavaJagića31",
                    route: "vatroslava_jagica_31",
                    title: "Vatroslava Jagića 31",
                    image: "http://localhost:9000/images/addresses/osijek_6.webp",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
            ]
        },
        {
            id: 3, city: "Rijeka", frontendSlug: "rijeka", stores: 4, addresses: [
                {
                    id: 1,
                    frontendSlug: "crikvenicka5",
                    route: "crikvenicka_5",
                    title: "Crikvenička 4",
                    image: "http://localhost:9000/images/addresses/rijeka_1.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 2,
                    frontendSlug: "ivanaSusnja17",
                    route: "ivana_susnja_17",
                    title: "Ivana Sušnja 17",
                    image: "http://localhost:9000/images/addresses/rijeka_2.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 3,
                    frontendSlug: "kresimirova23",
                    route: "kresimirova_23",
                    title: "Krešimirova 23",
                    image: "http://localhost:9000/images/addresses/rijeka_3.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 4,
                    frontendSlug: "pavlinskiTrg6",
                    route: "pavlinski_trg_6",
                    title: "Pavlinski Trg 6",
                    image: "http://localhost:9000/images/addresses/rijeka_4.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                }
            ]
        },
        {
            id: 4, city: "Split", frontendSlug: "split", stores: 9, addresses: [
                {
                    id: 1,
                    frontendSlug: "doverska22",
                    route: "doverska_22",
                    title: "Doverska 22",
                    image: "http://localhost:9000/images/addresses/split_1.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 2,
                    frontendSlug: "goricka12",
                    route: "goricka_12",
                    title: "Gorička 12",
                    image: "http://localhost:9000/images/addresses/split_2.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 3,
                    frontendSlug: "jesenicka4",
                    route: "jasenicka_4",
                    title: "Jesenička 4",
                    image: "http://localhost:9000/images/addresses/split_3.jpg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 4,
                    frontendSlug: "maruliceva18",
                    route: "maruliceva_18",
                    title: "Marulićeva 18",
                    image: "http://localhost:9000/images/addresses/split_4.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 5,
                    frontendSlug: "odakova44",
                    route: "odakova_44",
                    title: "Odakova 44",
                    image: "http://localhost:9000/images/addresses/split_5.jpg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 6,
                    frontendSlug: "rovinjska5",
                    route: "rovinjska_5",
                    title: "Rovinjska 5",
                    image: "http://localhost:9000/images/addresses/split_6.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 7,
                    frontendSlug: "solinska17",
                    route: "solinska_17",
                    title: "Solinska 17",
                    image: "http://localhost:9000/images/addresses/split_7.jpg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 8,
                    frontendSlug: "ujevicevaPoljana2",
                    route: "ujeviceva_poljana_2",
                    title: "Ujevićeva Poljana 2",
                    image: "http://localhost:9000/images/addresses/split_8.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 9,
                    frontendSlug: "zvizdina8",
                    route: "zvizdina_8",
                    title: "Zvizdina 8",
                    image: "http://localhost:9000/images/addresses/split_9.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
            ]
        },
        {
            id: 5, city: "Zadar", frontendSlug: "zadar", stores: 3, addresses: [
                {
                    id: 1,
                    frontendSlug: "kazoticaAugustina7",
                    route: "kazotica_augustina_7",
                    title: "Kazotica Augustina 7",
                    image: "http://localhost:9000/images/addresses/zadar_1.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 2,
                    frontendSlug: "mihanovicaAntuna18",
                    route: "mihanovica_antuna_18",
                    title: "Mihanovica Antuna 18",
                    image: "http://localhost:9000/images/addresses/zadar_2.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 3,
                    frontendSlug: "sokolska4",
                    route: "sokolska_4",
                    title: "Sokolska 4",
                    image: "http://localhost:9000/images/addresses/zadar_3.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
            ]
        },
        {
            id: 6, city: "Pula", frontendSlug: "pula", stores: 5, addresses: [
                {
                    id: 1,
                    frontendSlug: "amfiteatarska15",
                    route: "amfiteatarska_15",
                    title: "Amfiteatarska 15",
                    image: "http://localhost:9000/images/addresses/pula_1.webp",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 2,
                    frontendSlug: "divkoviceva6",
                    route: "divkoviceva_6",
                    title: "Divkovićeva 6",
                    image: "http://localhost:9000/images/addresses/pula_2.webp",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 3,
                    frontendSlug: "jeromelina12",
                    route: "jeromelina_12",
                    title: "Jeromelina 12",
                    image: "http://localhost:9000/images/addresses/pula_3.webp",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 4,
                    frontendSlug: "novigradska2",
                    route: "novigradska_2",
                    title: "Novigradska 2",
                    image: "http://localhost:9000/images/addresses/pula_4.webp",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 5,
                    frontendSlug: "pazinska31",
                    route: "pazinska_31",
                    title: "Pazinska 31",
                    image: "http://localhost:9000/images/addresses/pula_5.webp",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
            ]
        },
        {
            id: 7, city: "Dubrovnik", frontendSlug: "dubrovnik", stores: 2, addresses: [
                {
                    id: 1,
                    frontendSlug: "androviceva1",
                    route: "androviceva_1",
                    title: "Androvićeva 1",
                    image: "http://localhost:9000/images/addresses/dubrovnik_1.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 2,
                    frontendSlug: "grebenska7",
                    route: "grebenska_7",
                    title: "Grebenska 7",
                    image: "http://localhost:9000/images/addresses/dubrovnik_2.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                }
            ]
        },
        {
            id: 8, city: "Sisak", frontendSlug: "sisak", stores: 2, addresses: [
                {
                    id: 1,
                    frontendSlug: "gervaisaDrage14",
                    route: "gervaisa_drage_14",
                    title: "Gervaisa Drage 14",
                    image: "http://localhost:9000/images/addresses/sisak_1.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
                {
                    id: 2,
                    frontendSlug: "petrinjska3",
                    route: "petrinjska_3",
                    title: "Petrinjska 3",
                    image: "http://localhost:9000/images/addresses/sisak_2.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                },
            ]
        },
        {
            id: 9, city: "Sinj", frontendSlug: "sinj", stores: 1, addresses: [
                {
                    id: 1,
                    frontendSlug: "ulicaNikoleTesle9",
                    route: "ulica_nikole_tesle_9",
                    title: "Ulica Nikole Tesle 9",
                    image: "http://localhost:9000/images/addresses/sinj_1.jpeg",
                    promotionStart: startDate,
                    promotionEnd: endDate,
                    discount: discountArray
                }
            ]
        },
    ],
}