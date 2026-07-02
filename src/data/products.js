import headphones from "../images/headphones.jpg";
import smartwatch from "../images/smartwatch.jpg";
import sportshoe from "../images/sportshoe.jpg";
import laptop from "../images/laptop.jpg";
import smartphones from "../images/smartphones.jpg";
import videogames from "../images/videogames.jpg";
import tablets from "../images/tablets.jpg";
import homeappliances from "../images/homeappliances.png";

const products = [

{
id:1,
name:"Headphones",
price:1999,
oldPrice:2499,
rating:5,
image:headphones,
category:"Audio",
description:
"Experience immersive sound with premium wireless headphones featuring crystal-clear audio, deep bass, and all-day comfort for music, gaming, and calls.",

specifications: [
    "Bluetooth 5.3 Connectivity",
    "40 Hours Battery Backup",
    "Active Noise Cancellation",
    "USB-C Fast Charging",
    "Built-in Microphone"
]
},

{
id:2,
name:"Smart Watch",
price:3499,
oldPrice:3999,
rating:4,
image:smartwatch,
category:"Watch",
description:
"Stay connected and track your fitness with a stylish smartwatch featuring health monitoring, smart notifications, and a vibrant touchscreen display.",

specifications: [
    "1.8-inch HD Touch Display",
    "Heart Rate Monitor",
    "SpO2 Blood Oxygen Sensor",
    "7 Days Battery Life",
    "IP68 Water Resistant"
]
},

{
id:3,
name:"Sports Shoe",
price:2299,
oldPrice:2999,
rating:4,
image:sportshoe,
category:"Fashion",
description:
"Designed for comfort and performance, these lightweight sports shoes provide superior cushioning, breathability, and excellent grip for daily activities.",

specifications: [
    "Breathable Mesh Upper",
    "Non-slip Rubber Sole",
    "Lightweight Design",
    "Shock Absorption Technology",
    "Available in Multiple Sizes"
]
},

{
id:4,
name:"Laptop",
price:49999,
oldPrice:56999,
rating:5,
image:laptop,
category:"Laptop",
description:
"Boost your productivity with this high-performance laptop, perfect for work, entertainment, programming, and multitasking.",

specifications: [
    "Intel Core i7 Processor",
    "16GB DDR4 RAM",
    "512GB NVMe SSD",
    "15.6-inch Full HD Display",
    "Windows 11 Pre-installed"
]
},

{
id:5,
name:"Smartphone",
price:25999,
oldPrice:29999,
rating:5,
image:smartphones,
category:"Phone",
description:
"Capture stunning photos, enjoy lightning-fast performance, and stay connected with this feature-packed smartphone built for everyday use.",

specifications: [
    "6.7-inch AMOLED Display",
    "128GB Internal Storage",
    "50MP AI Triple Camera",
    "5000mAh Battery",
    "5G Connectivity"
]
},

{
id:6,
name:"Video Game",
price:3999,
oldPrice:4999,
rating:5,
image:videogames,
category:"Gaming",
description:
"Enjoy next-generation gaming with realistic graphics, ultra-fast performance, and access to thousands of exciting games.",

specifications: [
    "4K HDR Gaming",
    "1TB SSD Storage",
    "Wireless Controller Included",
    "Ray Tracing Support",
    "Wi-Fi 6 Connectivity"
]
},

{
id:7,
name:"Tablet",
price:18999,
oldPrice:22999,
rating:4,
image:tablets,
category:"Tablet",
description:
"Perfect for entertainment, learning, and productivity, this lightweight tablet offers a stunning display and powerful performance.",

specifications: [
    "10.5-inch Full HD Display",
    "128GB Storage",
    "8000mAh Battery",
    "Quad Stereo Speakers",
    "Wi-Fi + Bluetooth 5.2"
]
},

{
id:8,
name:"Home Appliance",
price:7999,
oldPrice:9999,
rating:4,
image:homeappliances,
category:"Home",
description:
"Upgrade your home with this energy-efficient appliance designed to deliver reliable performance and modern convenience every day.",

specifications: [
    "Energy Efficient Technology",
    "Low Noise Operation",
    "Smart Touch Controls",
    "Compact Modern Design",
    "2 Years Warranty"
]
}

];

export default products;