import { IHotelDetails } from "./interface/interface";


export class Constants {


    public static hotels: IHotelDetails[] = [
        { id: 0, city: "Munich", street: "Marienplatz", distanceToCenter: "0.1 km FROM CENTER", price: "$98", designDesc: "Design may vary", roomImage: "assets/img/room1.png" },
        { id: 1, city: "Munich", street: "Dreimuhlenstrasse", distanceToCenter: "1.6 km FROM CENTER", price: "$143", designDesc: "Design may change", roomImage: "assets/img/room2.png" },
        { id: 2, city: "Munich", street: "Olympiapark", distanceToCenter: "1.5 km FROM CENTER", price: "$48", designDesc: "Design may vary", roomImage: "assets/img/room3.png" }
    ];

    public static locations: any[] = [
        ["Marienplatz", "48.137154", "11.576124", 0, "assets/img/design_assets_home-icon.svg"],
        ["My Home", "48.122680595375", "11.5626431687782", 1, "assets/img/design_assets_home-icon.svg"],
        ["Olympiapark", "48.1764235294989", "11.5513759002564", 2, "assets/img/design_assets_home-icon.svg"]
    ]


}