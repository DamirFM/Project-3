
const products = [
  //LAPTOPS
  {
    name: "Alienware X16 R1 Gaming Laptop",
    description: "A powerful laptop with excellent performance for professional use.",
    image: "https://m.media-amazon.com/images/I/71YFV8SQthL._AC_SL1500_.jpg",
    quantity: 50,
    price: 4000.00,
    category: "65c26d9303c196854fd60ec0"
  },
  {
    name: "ASUS ROG Strix G15",
    description: "The latest AMD Ryzen 7 6800H CPU paired with a NVIDIA GeForce RTX 3060 Laptop GPU and MUX Switch form the backbone of this powerful gaming laptop",
    image: "https://m.media-amazon.com/images/I/71OyrTkxpGL._AC_SL1500_.jpg",
    quantity: 75,
    price: 999.99,
    category: "65c26d9303c196854fd60ec0"
  },
  {
    name: "Dell G16 7630 Gaming Laptop",
    description: "16-inch QHD+ (2560x1600) 165Hz Display, Intel Core i9-13900HX Processor, 16GB DDR5 RAM, 1TB SSD, NVIDIA GeForce RTX 4070 GDDR6, Windows 11 Home - Metallic Nightshade",
    image: "https://m.media-amazon.com/images/I/712Qo4PFS8L._AC_SL1500_.jpg",
    quantity: 30,
    price: 2099.99,
    category: "65c26d9303c196854fd60ec0"
  },
  {
    name: "Alienware X17 R2 FHD 360Hz Display",
    description: "12th Gen Intel Core i9-12900H 14-Core up to 5.00 GHz CPU, 32GB DDR5 RAM, 8TB (2X 4TB) NVMe SSD, GeForce RTX 3070Ti 8GB GDDR6, Windows 11 Home",
    image: "https://m.media-amazon.com/images/I/81K8AZ1jsEL._AC_SL1500_.jpg",
    quantity: 40,
    price: 7299.99,
    category: "65c26d9303c196854fd60ec0"
  },
  {
    name: "Dell Alienware M16 R1 165Hz WQXGA (2560x1600) IPS Laptop",
    description: "13th Generation Intel Core i7-13700HX 16-Core Processor (Up to 5.0 GHz with Intel Turbo Boost Technology, 30 MB Intel Smart cache, 16 Cores: 8 Performance + 8 Efficient, 24 Threads)",
    image: "https://m.media-amazon.com/images/I/7197+rLcZeL._AC_SL1168_.jpg",
    quantity: 60,
    price: 850.00,
    category: "65c26d9303c196854fd60ec0"
  },
  {
    name: "HP Victus FHD Gaming Laptop",
    description: "144Hz, Intel Core i5-13420H (8 Core) Processor, 8GB RAM, 512GB SSD, Windows 11, GeForce RTX 3050 6GB GDDR6 Graphics - Performance Blue",
    image: "https://m.media-amazon.com/images/I/71gfWwWhd4L._AC_SL1500_.jpg",
    quantity: 60,
    price: 2859.98,
    category: "65c26d9303c196854fd60ec0"
  },
  {
    name: "Acer Nitro 17 FHD Laptop",
    description: "AMD Ryzen 5 7535HS, NVIDIA GeForce RTX 4050, 16GB RAM, 512GB SSD, Windows 11 Home",
    image: "https://m.media-amazon.com/images/I/51Jm3X90VrL._AC_SL1280_.jpg",
    quantity: 60,
    price: 1456.93,
    category: "65c26d9303c196854fd60ec0"
  },
  {
    name: "ASUS TUF Gaming F15 (2023) Gaming Laptop",
    description: "144Hz Display, GeForce RTX 4050, Intel® Core™ i9-13900H, 16GB DDR4, 512GB PCIe SSD, Wi-Fi 6, Windows 11",
    image: "https://m.media-amazon.com/images/I/71NxKpg1NIL._AC_SL1500_.jpg",
    quantity: 60,
    price: 1249.99,
    category: "65c26d9303c196854fd60ec0"
  },
  {
    name: "ASUS TUF A17 17.3",
    description: "AMD Ryzen 5 4600H, NVIDIA GeForce GTX 1650, 32GB RAM, 1TB PCIe SSD, RGB Backlit Keyboard, Windows 11, Bonfire Black, 32GB Hotface USB Card",
    image: "https://m.media-amazon.com/images/I/81Mn3w0ZqXL._AC_SL1500_.jpg",
    quantity: 60,
    price: 1850.00,
    category: "65c26d9303c196854fd60ec0"
  },
  {
    name: "HP Victus FHD Gaming Laptop",
    description: "Intel Core i5-13420H Processor, 32GB RAM, 1TB PCIe SSD, NVIDIA GeForce RTX 3050, Backlit Keyboard, HD Webcam, Windows 11, Blue, 32GB Hotface USB Card",
    image: "https://m.media-amazon.com/images/I/81sqA4El0VL._AC_SL1500_.jpg",
    quantity: 60,
    price: 1250.00,
    category: "65c26d9303c196854fd60ec0"
  },{
    "name": "Apple MacBook Pro",
    "price": 1299.99,
    "image": "https://m.media-amazon.com/images/I/61o62q+1GUL._AC_UL320_.jpg",
    "category": "65c26d9303c196854fd60ec0",
    "quantity": 59,
    "description": "The Apple MacBook Pro is a powerful and sleek laptop known for its premium build quality and excellent performance. It is favored by professionals and creative users for its reliability and advanced features."
  },
  {
    "name": "Dell XPS 13",
    "price": 1199.99,
    "image": "https://m.media-amazon.com/images/I/61-P1Q2NzvL._AC_UL320_.jpg",
    "category": "65c26d9303c196854fd60ec0",
    "quantity": 63,
    "description": "The Dell XPS 13 is a highly regarded ultrabook known for its compact design, stunning display, and powerful performance. It's an ideal choice for professionals and students who prioritize portability without compromising on performance."
  },
  {
    "name": "HP Spectre x360",
    "price": 999.99,
    "image": "https://m.media-amazon.com/images/I/71MwMwgyh-L._AC_UL320_.jpg",
    "category": "65c26d9303c196854fd60ec0",
    "quantity": 58,
    "description": "The HP Spectre x360 is a versatile convertible laptop offering a blend of style, performance, and flexibility. With its 360-degree hinge design, it can be used in various modes to suit different tasks, making it a great choice for productivity and entertainment."
  },
  {
    "name": "Microsoft Surface Laptop 4",
    "price": 1299.99,
    "image": "https://m.media-amazon.com/images/I/71qKfFqgEiL._AC_UL320_.jpg",
    "category": "65c26d9303c196854fd60ec0",
    "quantity": 64,
    "description": "The Microsoft Surface Laptop 4 is a premium ultrabook known for its elegant design, high-resolution display, and smooth performance. It's well-suited for professionals and students seeking a stylish yet productive computing experience."
  },
  {
    "name": "Lenovo ThinkPad X1 Carbon",
    "price": 1499.99,
    "image": "https://m.media-amazon.com/images/I/51mSFH3B8aL._AC_UL320_.jpg",
    "category": "65c26d9303c196854fd60ec0",
    "quantity": 61,
    "description": "The Lenovo ThinkPad X1 Carbon is a premium business laptop renowned for its durability, lightweight design, and long battery life. It offers robust performance and security features, making it an ideal choice for professionals on the go."
  },
  {
    "name": "Asus ROG Zephyrus G14",
    "price": 1199.99,
    "image": "https://m.media-amazon.com/images/I/8108MHPUYyL._AC_UL320_.jpg",
    "category": "65c26d9303c196854fd60ec0",
    "quantity": 63,
    "description": "The Asus ROG Zephyrus G14 is a high-performance gaming laptop packed with powerful hardware in a compact and stylish design. It offers excellent gaming performance and portability, making it a top choice for gaming enthusiasts."
  },
  {
    "name": "Acer Swift 3",
    "price": 699.99,
    "image": "https://m.media-amazon.com/images/I/61EI3qayjHL._AC_UL320_.jpg",
    "category": "65c26d9303c196854fd60ec0",
    "quantity": 57,
    "description": "The Acer Swift 3 is a budget-friendly ultrabook offering a balance of performance, portability, and affordability. It's ideal for students and professionals looking for a reliable laptop without breaking the bank."
  },
  {
    "name": "Razer Blade 15",
    "price": 1799.99,
    "image": "https://m.media-amazon.com/images/I/81e73VekkyL._AC_UL320_.jpg",
    "category": "65c26d9303c196854fd60ec0",
    "quantity": 62,
    "description": "The Razer Blade 15 is a premium gaming laptop known for its sleek design, powerful performance, and vibrant display. It's favored by gamers and content creators for its high-end specifications and immersive gaming experience."
  },
  {
    "name": "Huawei MateBook X Pro",
    "price": 1399.99,
    "image": "https://m.media-amazon.com/images/I/61LmSYoaOAL._AC_UL320_.jpg",
    "category": "65c26d9303c196854fd60ec0",
    "quantity": 59,
    "description": "The Huawei MateBook X Pro is a stylish and high-performance ultrabook featuring a slim design, sharp display, and robust hardware. It's suitable for professionals and students seeking a premium computing experience."
  },
  {
    "name": "MSI GS66 Stealth",
    "price": 1799.99,
    "image": "https://m.media-amazon.com/images/I/71ZygtZ0V9L._AC_UL320_.jpg",
    "category": "65c26d9303c196854fd60ec0",
    "quantity": 60,
    "description": "The MSI GS66 Stealth is a powerful gaming laptop known for its sleek design, high-performance components, and advanced gaming features. It offers excellent gaming performance and portability, making it a top choice for serious gamers."
  },
  //DESKTOPS
  {
    name: "Skytech Chronos",
    description: "Intel Core i5 12400F 2.5 GHz, RTX 3060, 500GB NVME SSD, 16G DDR4 3200, 650W Gold PSU, AC Wi-Fi, Windows 10 Home 64-bit",
    image: "https://m.media-amazon.com/images/I/81GFCsdD6UL._AC_SL1498_.jpg",
    quantity: 60,
    price: 1300.00,
    category: "65c26d9303c196854fd60ec1"
  },
  {
    name: "Skytech Nebula",
    description: "Intel Core i3 12100F 3.3 GHz, NVIDIA GTX 1650, 500GB NVME SSD, 16GB DDR4 RAM 3200, 600W Gold PSU, 11AC Wi-Fi, Windows 11 Home 64-bit",
    image: "https://m.media-amazon.com/images/I/61INtCQzv2L._AC_SL1000_.jpg",
    quantity: 60,
    price: 875.00,
    category: "65c26d9303c196854fd60ec1"
  },
  {
    name: "ABYS MAX Prebuild Graphic Designer PC",
    description: "Graphic Designer PC (Intel i5 Up to 3.60 GHz, 16GB, 240GB SSD, 1TB HDD, 1GB Nvidia Quadro Video Card, ARGB, WiFi, Windows 10, English/Spanish/French) Video Editing, Gaming Computer",
    image: "https://m.media-amazon.com/images/I/71Ihy747EvL._AC_SL1500_.jpg",
    quantity: 60,
    price: 350,
    category: "65c26d9303c196854fd60ec1"
  },
  {
    name: "HP RGB Gaming Desktop Computer",
    description: "Intel Quad Core I7 3.4G up to 3.9GHz, GeForce GT 1030 2G, 16GB RAM, 512G SSD, New 24 1080 FHD LED, RGB KB & MS, 600M WiFi & Bluetooth 5.0, Win10 Pro",
    image: "https://m.media-amazon.com/images/I/71ZGErOg4gL._AC_SL1500_.jpg",
    quantity: 60,
    price: 400,
    category: "65c26d9303c196854fd60ec1"
  },
  {
    name: "Skytech Chronos",
    description: "Intel Core i5 12400F 2.5 GHz, NVIDIA RTX 4060, 1TB NVME SSD, 16GB DDR4 RAM 3200, 650W Gold PSU, 11AC Wi-Fi, Windows 11 Home 64-bit",
    image: "https://m.media-amazon.com/images/I/91RsXVV1m1L._AC_SL1500_.jpg",
    quantity: 60,
    price: 1300,
    category: "65c26d9303c196854fd60ec1"
  },
  {
    name: "MSI Codex R 12NUC5-066CA",
    description: "Intel Core i5-12400F, GeForce RTX 4060, 16GB DDR5 Memory (Dual-CHL), 1TB SSD, WiFi 6, USB Type-C, VR-Ready, Windows 11 Home",
    image: "https://m.media-amazon.com/images/I/81RWuA9UR3L._AC_SL1500_.jpg",
    quantity: 60,
    price: 1450,
    category: "65c26d9303c196854fd60ec1"
  },
  {
    name: "AQVIN Gaming Computer",
    description: "Intel i7 6th Gen, GeForce RTX 3060 12GB GDDR6, 32GB RAM DDR4 1TB SSD Storage, RGB Keyboard and Mouse, WiFi Ready Windows 10 Pro",
    image: "https://m.media-amazon.com/images/I/715X30JtU2L._AC_SL1500_.jpg",
    quantity: 60,
    price: 1100,
    category: "65c26d9303c196854fd60ec1"
  },
  {
    name: "Skytech Azure",
    description: "AMD Ryzen 7 7700X 4.5 GHz, NVIDIA",
    image: "https://m.media-amazon.com/images/I/91CnBmI3G8L._AC_SL1500_.jpg",
    quantity: 60,
    price: 2200,
    category: "65c26d9303c196854fd60ec1"
  },
  //monitors
  {
    name: "Dell Ultrasharp U2719DX",
    price: 349.99,
    image: "https://m.media-amazon.com/images/I/81uQWDo3VOL._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec2",
    quantity: 58
  },
  {
    name: "LG 27UK650-W 4K UHD Monitor",
    price: 399.99,
    image: "https://m.media-amazon.com/images/I/714aVOYqLTL._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec2",
    quantity: 63
  },
  {
    name: "ASUS VG248QE 24\" Full HD Monitor",
    price: 199.99,
    image: "https://m.media-amazon.com/images/I/813xz1jQX4L._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec2",
    quantity: 57
  },
  {
    name: "Acer Predator XB271HU",
    price: 499.99,
    image: "https://m.media-amazon.com/images/I/71Xl3-y0K5L._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec2",
    quantity: 62
  },
  {
    name: "BenQ PD3200U 32\" 4K Designer Monitor",
    price: 699.99,
    image: "https://m.media-amazon.com/images/I/51Epg-2TsgL._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec2",
    quantity: 59
  },
  {
    name: "HP Pavilion 22cwa 21.5-Inch Full HD Monitor",
    price: 99.99,
    image: "https://m.media-amazon.com/images/I/81HX5N0RPWL._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec2",
    quantity: 60
  },
  {
    name: "Samsung 34-Inch CJ791 Ultrawide Curved Gaming Monitor",
    price: 799.99,
    image: "https://m.media-amazon.com/images/I/81oADRhNq2L._AC_UY218_.jpg",
    category: "65c26d9303c196854fd60ec2",
    quantity: 61
  },
  {
    name: "ViewSonic VX2452MH 24 Inch 1080p Gaming Monitor",
    price: 139.99,
    image: "https://m.media-amazon.com/images/I/81oADRhNq2L._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec2",
    quantity: 64
  },
  {
    name: "Dell S2721QS 27 Inch 4K UHD Monitor",
    price: 319.99,
    image: "https://m.media-amazon.com/images/I/91nSe3I9V0L._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec2",
    quantity: 58
  },
  {
    name: "AOC C24G1 24 Inch Curved Frameless Gaming Monitor",
    price: 179.99,
    image: "https://m.media-amazon.com/images/I/71aXlu6n1qL._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec2",
    quantity: 62
  },
  //hardware
  {
    name: "Samsung 970 EVO SSD",
    price: 99.99,
    image: "https://m.media-amazon.com/images/I/615KfwcyI1L._AC_UL480_FMwebp_QL65_.jpg",
    category: "65c26d9303c196854fd60ec3",
    quantity: 55
  },
  {
    name: "Western Digital My Passport Portable External Hard Drive",
    price: 79.99,
    image: "https://m.media-amazon.com/images/I/81y8P1up-PL._AC_UL480_FMwebp_QL65_.jpg",
    category: "65c26d9303c196854fd60ec3",
    quantity: 63
  },
  {
    name: "Seagate BarraCuda Internal Hard Drive",
    price: 59.99,
    image: "https://m.media-amazon.com/images/I/510qKPI69DL._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec3",
    quantity: 58
  },
  {
    name: "Crucial MX500 SSD",
    price: 69.99,
    image: "https://m.media-amazon.com/images/I/81JlEg4HwGL._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec3",
    quantity: 61
  },
  {
    name: "SanDisk Ultra USB Flash Drive",
    price: 14.99,
    image: "https://m.media-amazon.com/images/I/61ZqqUStIsL._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec3",
    quantity: 57
  },
  {
    name: "Toshiba Canvio Basics Portable Hard Drive",
    price: 54.99,
    image: "https://m.media-amazon.com/images/I/91e-WNUpH0L._AC_UL480_FMwebp_QL65_.jpg",
    category: "65c26d9303c196854fd60ec3",
    quantity: 62
  },
  {
    name: "ADATA SU800 SSD",
    price: 79.99,
    image: "https://m.media-amazon.com/images/I/612O1vyT8tL._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec3",
    quantity: 59
  },
  {
    name: "Kingston Digital DataTraveler USB Flash Drive",
    price: 9.99,
    image: "https://m.media-amazon.com/images/I/71yVURnYi-L._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec3",
    quantity: 65
  },
  {
    name: "LaCie Rugged Mini External Hard Drive",
    price: 89.99,
    image: "https://m.media-amazon.com/images/I/81h+P-kLOnL._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec3",
    quantity: 60
  },
  {
    name: "Intel 660p M.2 NVMe SSD",
    price: 109.99,
    image: "https://m.media-amazon.com/images/I/51cOsYrVCjL._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec3",
    quantity: 59
  },
  //Accessories
  {
    name: "Sony WH-1000XM4",
    price: 349.99,
    image: "https://m.media-amazon.com/images/I/61F2AnH2lFL._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec4",
    quantity: 62
  },
  {
    name: "AirPods Pro",
    price: 249.99,
    image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec4",
    quantity: 63
  },
  {
    name: "Bose QuietComfort 35 II",
    price: 299.99,
    image: "https://m.media-amazon.com/images/I/51QeS0jkx-L._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec4",
    quantity: 57
  },
  {
    name: "Sennheiser HD 660 S",
    price: 499.99,
    image: "https://m.media-amazon.com/images/I/61BgkNfcoFL._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec4",
    quantity: 58
  },
  {
    name: "Jabra Elite 85t",
    price: 229.99,
    image: "https://m.media-amazon.com/images/I/71-3C3aYveL._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec4",
    quantity: 60
  },
  {
    name: "Beats Studio3 Wireless",
    price: 349.99,
    image: "https://m.media-amazon.com/images/I/51-+O3-wFxL._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec4",
    quantity: 59
  },
  {
    name: "Audio-Technica ATH-M50x",
    price: 149.99,
    image: "https://m.media-amazon.com/images/I/712j1vD+c8L._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec4",
    quantity: 61
  },
  {
    name: "Skullcandy Crusher ANC",
    price: 249.99,
    image: "https://m.media-amazon.com/images/I/71w68INyh8L._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec4",
    quantity: 57
  },
  {
    name: "SteelSeries Arctis Pro",
    price: 179.99,
    image: "https://m.media-amazon.com/images/I/61BpJ-+2UGL._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec4",
    quantity: 64
  },
  {
    name: "Razer Nari Ultimate",
    price: 199.99,
    image: "https://m.media-amazon.com/images/I/51a7DrjV8bL._AC_UL320_.jpg",
    category: "65c26d9303c196854fd60ec4",
    quantity: 62
  }
];
module.exports = products;
