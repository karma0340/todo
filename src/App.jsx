// // import { useState } from "react";
// import Header from "./globals/header/Header.jsx";
// import Furniture from "./furniture/Furniture.jsx";
// import "./App.css";

// const products = [
//   {
//     "id": 1,
//     "title": "GLOSTAD 3-seat sofa",
//     "price": "₹12990",
//     "description": "",
//     "material": "Fabric: 100% polyester (recycled), Back frame: Steel, Steel, coated steel, Seat frame: Plywood, Laminated veneer lumber, Steel, Steel, coated st, Armrest: Steel, coated steel",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p1/img1.jpg",
//       "/furnitures/p1/img4.jpg",
//       "/furnitures/p1/img5.jpg",
//       "/furnitures/p1/img6.jpg",
//       "/furnitures/p1/img7.jpg",
//       "/furnitures/p1/img8.jpg"
//     ]
//   },
//   {
//     "id": 2,
//     "title": "EKTORP 3-seat sofa",
//     "price": "₹29990",
//     "description": "",
//     "material": "Back and seat frame: Plywood, Foam 20 kg/cu.m., Laminated veneer lumber, Parti, Armrest: Foam 20 kg/cu.m., Foam 25 kg/cu.m., Laminated veneer lumb, Seat cushion: 30% cut polyurethane foam/ 70% polyester fibres, HR Foam , Back cushion: Polyester hollo",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p2/img1.jpg",
//       "/furnitures/p2/img4.jpg",
//       "/furnitures/p2/img5.jpg",
//       "/furnitures/p2/img6.jpg",
//       "/furnitures/p2/img7.jpg",
//       "/furnitures/p2/img8.jpg"
//     ]
//   },
//   {
//     "id": 3,
//     "title": "GLOSTAD 2-seat sofa",
//     "price": "₹9990",
//     "description": "",
//     "material": "Fabric: 100% polyester (recycled), Back frame/ Armrest: Steel, coated steel, Seat frame: Plywood, Laminated veneer lumber, Steel, Seat: Foam 25 kg/cu.m., Felt liner",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p3/img1.jpg",
//       "/furnitures/p3/img4.jpg",
//       "/furnitures/p3/img5.jpg",
//       "/furnitures/p3/img6.jpg",
//       "/furnitures/p3/img7.jpg",
//       "/furnitures/p3/img8.jpg"
//     ]
//   },
//   {
//     "id": 4,
//     "title": "LANDSKRONA 3-seat sofa",
//     "price": "₹69990",
//     "description": "",
//     "material": "Fabric: 100% polyester (recycled), Back and seat frame: Plywood, Particleboard, Solid wood, Fibreboard, Armrest frame: Plywood, Particleboard, Foam 25 kg/cu.m., Solid wood, Fib, Back cushion: Foam 25 kg/cu.m.",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p4/img1.jpg",
//       "/furnitures/p4/img4.jpg",
//       "/furnitures/p4/img5.jpg",
//       "/furnitures/p4/img6.jpg",
//       "/furnitures/p4/img7.jpg",
//       "/furnitures/p4/img8.jpg"
//     ]
//   },
//   {
//     "id": 5,
//     "title": "GAMMALBYN 3-seat sofa",
//     "price": "₹29990",
//     "description": "",
//     "material": "Back frame: Particleboard, Plywood, Foam 20 kg/cu.m., Laminated venee, Seat frame: Particleboard, Plywood, Laminated veneer lumber, Foam 20 , Armrest: Paperboard (recycled), Polyester/recycled fibre wadding, , Lining: 100 % polyester",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p5/img1.jpg",
//       "/furnitures/p5/img4.jpg",
//       "/furnitures/p5/img5.jpg",
//       "/furnitures/p5/img6.jpg",
//       "/furnitures/p5/img7.jpg",
//       "/furnitures/p5/img8.jpg"
//     ]
//   },
//   {
//     "id": 6,
//     "title": "KIVIK 3-seat sofa",
//     "price": "₹35990",
//     "description": "",
//     "material": "Back and seat frame: 100% polyester (recycled), Particleboard, Felt liner, Ply, Armrest frame: Fibreboard, Plywood, Foam 20 kg/cu.m., Foam 25 kg/cu.m., , Seat cushion: HR Foam 35 kg/cu.m., Pocket spring unit: Steel",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p6/img1.jpg",
//       "/furnitures/p6/img4.jpg",
//       "/furnitures/p6/img5.jpg",
//       "/furnitures/p6/img6.jpg",
//       "/furnitures/p6/img7.jpg",
//       "/furnitures/p6/img8.jpg"
//     ]
//   },
//   {
//     "id": 7,
//     "title": "LINANÄS 3-seat sofa",
//     "price": "₹24990",
//     "description": "",
//     "material": "Seat frame: Plywood, Felt liner, Laminated veneer lumber, Foam 25 kg/, Back frame: Steel, Felt liner, coated steel, Armrest: Plywood, Foam 20 kg/cu.m., 100% recycled solid paperboard, Back cushion: Foam 25 kg/cu.m.",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p7/img1.jpg",
//       "/furnitures/p7/img4.jpg",
//       "/furnitures/p7/img5.jpg",
//       "/furnitures/p7/img6.jpg",
//       "/furnitures/p7/img7.jpg",
//       "/furnitures/p7/img8.jpg"
//     ]
//   },
//   {
//     "id": 8,
//     "title": "ÄPPLARYD 3-seat sofa",
//     "price": "₹78990",
//     "description": "",
//     "material": "Seat frame: Laminated veneer lumber, Solid wood, Plywood, Particleboa, Pocket spring unit: Steel, Under frame/ Leg: Steel, coated steel, Backrest cushion: Foam 25 kg/cu.m., HR Foam 35 kg/cu.m.",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p8/img1.jpg",
//       "/furnitures/p8/img4.jpg",
//       "/furnitures/p8/img5.jpg",
//       "/furnitures/p8/img6.jpg",
//       "/furnitures/p8/img7.jpg",
//       "/furnitures/p8/img8.jpg"
//     ]
//   },
//   {
//     "id": 9,
//     "title": "EKTORP 3-seat sofa with chaise longue",
//     "price": "₹37990",
//     "description": "",
//     "material": "Back and seat frame: Plywood, Foam 20 kg/cu.m., Laminated veneer lumber, Parti, Armrest: Foam 20 kg/cu.m., Foam 25 kg/cu.m., Laminated veneer lumb, Seat cushion: 30% cut polyurethane foam/ 70% polyester fibres, HR Foam , Back cushion: Polyester hollo",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p9/img1.jpg",
//       "/furnitures/p9/img4.jpg",
//       "/furnitures/p9/img5.jpg",
//       "/furnitures/p9/img6.jpg",
//       "/furnitures/p9/img7.jpg",
//       "/furnitures/p9/img8.jpg"
//     ]
//   },
//   {
//     "id": 10,
//     "title": "FRIDHULT Sofa-bed",
//     "price": "₹19990",
//     "description": "",
//     "material": "Back fabric/ Fabric/ Fabric/ Ticking/ Ticking, underside/ Fabric: 100 % polyester (100% recycled), Seat frame: Laminated veneer lumber, Solid wood, Plywood, HR Foam 30 , Back frame: Paperboard (recycled), Particleboard, Plywood, Fibreboard, Armrest f",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p10/img1.jpg",
//       "/furnitures/p10/img4.jpg",
//       "/furnitures/p10/img5.jpg",
//       "/furnitures/p10/img6.jpg",
//       "/furnitures/p10/img7.jpg",
//       "/furnitures/p10/img8.jpg"
//     ]
//   },
//   {
//     "id": 11,
//     "title": "LANDSKRONA 3-seat sofa",
//     "price": "₹93490",
//     "description": "",
//     "material": "Fabric: 100% polyester (recycled), Back and seat frame: Plywood, Particleboard, Solid wood, Fibreboard, Armrest frame: Plywood, Particleboard, Foam 25 kg/cu.m., Solid wood, Fib, Back cushion: Foam 25 kg/cu.m.",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p11/img1.jpg",
//       "/furnitures/p11/img4.jpg",
//       "/furnitures/p11/img5.jpg",
//       "/furnitures/p11/img6.jpg",
//       "/furnitures/p11/img7.jpg",
//       "/furnitures/p11/img8.jpg"
//     ]
//   },
//   {
//     "id": 12,
//     "title": "ÄPPLARYD 4-seat sofa with chaise longue",
//     "price": "₹120990",
//     "description": "",
//     "material": "Fabric: 71% cotton, 21 % polyester (100% recycled), 8% viscose/ra, Seat frame: Laminated veneer lumber, Solid wood, Plywood, Particleboa, Pocket spring unit: Steel, Under frame/ Leg: Steel, coated steel",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p12/img1.jpg",
//       "/furnitures/p12/img4.jpg",
//       "/furnitures/p12/img5.jpg",
//       "/furnitures/p12/img6.jpg",
//       "/furnitures/p12/img7.jpg",
//       "/furnitures/p12/img8.jpg"
//     ]
//   },
//   {
//     "id": 13,
//     "title": "LILLEHEM 6-seat modular sofa",
//     "price": "₹96000",
//     "description": "",
//     "material": "Clip: Polypropylene plastic, Frame: Foam, Plywood, Laminated venee..., Lining: 100% polypropylene, Leg: coated steel",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p13/img1.jpg",
//       "/furnitures/p13/img4.jpg",
//       "/furnitures/p13/img5.jpg",
//       "/furnitures/p13/img6.jpg",
//       "/furnitures/p13/img7.jpg",
//       "/furnitures/p13/img8.jpg"
//     ]
//   },
//   {
//     "id": 14,
//     "title": "BÅRSLÖV 3-seat sofa-bed with chaise longue",
//     "price": "₹59990",
//     "description": "",
//     "material": "Clip/ Leg: Polypropylene plastic, Seat frame: Laminated veneer lumber, Plywood, Armrest frame: Plywood, Particleboard, Solid wood, Backrest: Plywood, Particleboard, Solid wood, Foam 25 kg/cu.m.",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p14/img1.jpg",
//       "/furnitures/p14/img4.jpg",
//       "/furnitures/p14/img5.jpg",
//       "/furnitures/p14/img6.jpg",
//       "/furnitures/p14/img7.jpg",
//       "/furnitures/p14/img8.jpg"
//     ]
//   },
//   {
//     "id": 15,
//     "title": "HAMMARN Sofa-bed",
//     "price": "₹9990",
//     "description": "",
//     "material": "Frame: Steel, coated steel, Supporting fabric/ Back lining: 100% polypropylene, Comfort material: Foam 35 kg/cu.m., Plastic washer: Synthetic rubber",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p15/img1.jpg",
//       "/furnitures/p15/img4.jpg",
//       "/furnitures/p15/img5.jpg",
//       "/furnitures/p15/img6.jpg",
//       "/furnitures/p15/img7.jpg",
//       "/furnitures/p15/img8.jpg"
//     ]
//   },
//   {
//     "id": 16,
//     "title": "LANDSKRONA 5-seat sofa",
//     "price": "₹136990",
//     "description": "",
//     "material": "Back and seat frame: Plywood, Felt liner, Solid wood, Fibreboard, Back cushion: Foam 25 kg/cu.m., Seat cushion: HR Foam 35 kg/cu.m., Fabric: 100% polyester (recycled)",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p16/img1.jpg",
//       "/furnitures/p16/img4.jpg",
//       "/furnitures/p16/img5.jpg",
//       "/furnitures/p16/img6.jpg",
//       "/furnitures/p16/img7.jpg",
//       "/furnitures/p16/img8.jpg"
//     ]
//   },
//   {
//     "id": 17,
//     "title": "LINANÄS 2-seat sofa",
//     "price": "₹21990",
//     "description": "",
//     "material": "Seat frame: Plywood, Felt liner, Laminated veneer lumber, Foam 25 kg/, Back frame: Steel, Felt liner, coated steel, Armrest: Plywood, Foam 20 kg/cu.m., 100% recycled solid paperboard, Back cushion: Foam 25 kg/cu.m.",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p17/img1.jpg",
//       "/furnitures/p17/img4.jpg",
//       "/furnitures/p17/img5.jpg",
//       "/furnitures/p17/img6.jpg",
//       "/furnitures/p17/img7.jpg",
//       "/furnitures/p17/img8.jpg"
//     ]
//   },
//   {
//     "id": 18,
//     "title": "SÖDERHAMN Corner sofa, 6-seat",
//     "price": "₹136080",
//     "description": "",
//     "material": "Total composition: 100% polyester, Smoulder resistant lining/ Smoulder resistant lining: Polyester wadding, Clip: Polypropylene plastic, Frame: Fibreboard, Plywood, Solid wood, Steel, Felt liner",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p18/img1.jpg",
//       "/furnitures/p18/img4.jpg",
//       "/furnitures/p18/img5.jpg",
//       "/furnitures/p18/img6.jpg",
//       "/furnitures/p18/img7.jpg",
//       "/furnitures/p18/img8.jpg"
//     ]
//   },
//   {
//     "id": 19,
//     "title": "GLOSTAD 3-seat sofa with chaise longue",
//     "price": "₹16480",
//     "description": "",
//     "material": "Fabric: 100% polyester (recycled), Back frame: Steel, Steel, coated steel, Seat frame: Plywood, Laminated veneer lumber, Steel, Steel, coated st, Armrest: Steel, coated steel",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p19/img1.jpg",
//       "/furnitures/p19/img4.jpg",
//       "/furnitures/p19/img5.jpg",
//       "/furnitures/p19/img6.jpg",
//       "/furnitures/p19/img7.jpg",
//       "/furnitures/p19/img8.jpg"
//     ]
//   },
//   {
//     "id": 20,
//     "title": "LINANÄS 3-seat sofa",
//     "price": "₹35990",
//     "description": "",
//     "material": "Seat frame: 100% polyester (recycled), 100% polypropylene, Fibreboard, Back frame: Steel, Felt liner, coated steel, Armrest: 100% polyester (recycled), Plywood, Foam 20 kg/cu.m., 100, Back cushion: 100% polyester (recycled), 100% polypropylene, Foam ",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p20/img1.jpg",
//       "/furnitures/p20/img4.jpg",
//       "/furnitures/p20/img5.jpg",
//       "/furnitures/p20/img6.jpg",
//       "/furnitures/p20/img7.jpg",
//       "/furnitures/p20/img8.jpg"
//     ]
//   },
//   {
//     "id": 21,
//     "title": "JOLPEN 2-seat sofa, outdoor",
//     "price": "₹5990",
//     "description": "100x59x67 cm (39 3/8x23 1/4x26 3/8 \")",
//     "material": "Seat and back: Polypropylene plastic (recycled), Back frame/ Seat frame: Steel, Steel, Polyester powder coating, Leg frame: Steel, Polyester powder coating",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p21/img1.jpg",
//       "/furnitures/p21/img4.jpg",
//       "/furnitures/p21/img5.jpg",
//       "/furnitures/p21/img6.jpg",
//       "/furnitures/p21/img7.jpg",
//       "/furnitures/p21/img8.jpg"
//     ]
//   },
//   {
//     "id": 22,
//     "title": "KLIPPAN 2-seat sofa",
//     "price": "₹23990",
//     "description": "",
//     "material": "Frame: Plywood, Particleboard, Fibreboard, Laminated veneer lumb, Upholstery material: Polyester hollow fibre wadding, Foam 30 kg/cu.m., Lining: 100% polypropylene, Leg: Steel, coated steel, Polypropylene plastic",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p22/img1.jpg",
//       "/furnitures/p22/img4.jpg",
//       "/furnitures/p22/img5.jpg",
//       "/furnitures/p22/img6.jpg",
//       "/furnitures/p22/img7.jpg",
//       "/furnitures/p22/img8.jpg"
//     ]
//   },
//   {
//     "id": 23,
//     "title": "EKENÄSET Armchair",
//     "price": "₹17990",
//     "description": "",
//     "material": "Fabric: 100% polyester (recycled), Total composition: 100% polyester, Back and seat frame: Solid wood, Zig-zag spring: Steel",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p23/img1.jpg",
//       "/furnitures/p23/img4.jpg",
//       "/furnitures/p23/img5.jpg",
//       "/furnitures/p23/img6.jpg",
//       "/furnitures/p23/img7.jpg",
//       "/furnitures/p23/img8.jpg"
//     ]
//   },
//   {
//     "id": 24,
//     "title": "KIVIK 2-seat sofa",
//     "price": "₹32990",
//     "description": "",
//     "material": "Back and seat frame: 100% polyester (recycled), Particleboard, Felt liner, Ply, Armrest frame: Fibreboard, Plywood, Foam 20 kg/cu.m., Foam 25 kg/cu.m., , Seat cushion: HR Foam 35 kg/cu.m., Pocket spring unit: Steel",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p24/img1.jpg",
//       "/furnitures/p24/img4.jpg",
//       "/furnitures/p24/img5.jpg",
//       "/furnitures/p24/img6.jpg",
//       "/furnitures/p24/img7.jpg",
//       "/furnitures/p24/img8.jpg"
//     ]
//   },
//   {
//     "id": 25,
//     "title": "LILLEHEM 2-seat modular sofa",
//     "price": "₹37000",
//     "description": "",
//     "material": "Clip: Polypropylene plastic, Frame: Foam 30 kg/cu.m., Plywood, Laminated veneer lumber, Lining: 100% polypropylene, Frame: Foam 20 kg/cu.m., Foam 25 kg/cu.m., Plywood",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p25/img1.jpg",
//       "/furnitures/p25/img4.jpg",
//       "/furnitures/p25/img5.jpg",
//       "/furnitures/p25/img6.jpg",
//       "/furnitures/p25/img7.jpg",
//       "/furnitures/p25/img8.jpg"
//     ]
//   },
//   {
//     "id": 26,
//     "title": "EKTORP 2-seat sofa",
//     "price": "₹22990",
//     "description": "",
//     "material": "Back and seat frame: Plywood, Foam 20 kg/cu.m., Laminated veneer lumber, Parti, Armrest: Foam 20 kg/cu.m., Foam 25 kg/cu.m., Laminated veneer lumb, Seat cushion: 30% cut polyurethane foam/ 70% polyester fibres, HR Foam , Back cushion: Polyester hollo",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p26/img1.jpg",
//       "/furnitures/p26/img4.jpg",
//       "/furnitures/p26/img5.jpg",
//       "/furnitures/p26/img6.jpg",
//       "/furnitures/p26/img7.jpg",
//       "/furnitures/p26/img8.jpg"
//     ]
//   },
//   {
//     "id": 27,
//     "title": "EKHOLMA 3-seat sofa",
//     "price": "₹37990",
//     "description": "",
//     "material": "Frame: Solid wood, Particleboard, Plywood, Foam 30 kg/cu.m., Par, Pocket spring unit: Steel, Lining: 100% polypropylene, Leg: Solid wood, Stain, Clear acrylic lacquer",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p27/img1.jpg",
//       "/furnitures/p27/img4.jpg",
//       "/furnitures/p27/img5.jpg",
//       "/furnitures/p27/img6.jpg",
//       "/furnitures/p27/img7.jpg",
//       "/furnitures/p27/img8.jpg"
//     ]
//   },
//   {
//     "id": 28,
//     "title": "SÖDERHAMN 3-seat section",
//     "price": "₹45090",
//     "description": "",
//     "material": "Total composition: 100% polyester, Smoulder resistant lining/ Smoulder resistant lining: Polyester wadding, Clip: Polypropylene plastic, Frame: Fibreboard, Plywood, Solid wood, Steel, Felt liner",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p28/img1.jpg",
//       "/furnitures/p28/img4.jpg",
//       "/furnitures/p28/img5.jpg",
//       "/furnitures/p28/img6.jpg",
//       "/furnitures/p28/img7.jpg",
//       "/furnitures/p28/img8.jpg"
//     ]
//   },
//   {
//     "id": 29,
//     "title": "KIVIK 3-seat sofa with chaise longue",
//     "price": "₹57990",
//     "description": "",
//     "material": "Back and seat frame: 100% polyester (recycled), Particleboard, Felt liner, Ply, Seat cushion: HR Foam 35 kg/cu.m., Foam 30 kg/cu.m., Felt liner, Pocket spring unit: Steel, Back cushion: 100 % polyester - hollow fibre (100% recycled)",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p29/img1.jpg",
//       "/furnitures/p29/img4.jpg",
//       "/furnitures/p29/img5.jpg",
//       "/furnitures/p29/img6.jpg",
//       "/furnitures/p29/img7.jpg",
//       "/furnitures/p29/img8.jpg"
//     ]
//   },
//   {
//     "id": 30,
//     "title": "NYHAMN 3-seat sofa-bed",
//     "price": "₹24990",
//     "description": "",
//     "material": "Back and seat frame: Steel, Back cover: 100% polypropylene, Layer glued slats: Layer-glued wood veneer, Adhesive resin as coating, Mattress: 100% polyester (recycled), 100% polypropylene, Foam 28 kg",
//     "category": "sofa",
//     "images": [
//       "/furnitures/p30/img1.jpg",
//       "/furnitures/p30/img4.jpg",
//       "/furnitures/p30/img5.jpg",
//       "/furnitures/p30/img6.jpg",
//       "/furnitures/p30/img7.jpg",
//       "/furnitures/p30/img8.jpg"
//     ]
//   },
//   {
//     "id": 31,
//     "title": "SANDSBERG Chair",
//     "price": "₹850",
//     "description": "",
//     "material": "Leg frame/ Cross rail: Steel, coated steel, Seat/ Backrest: Polypropylene (recycled), Bumper: Thermoplastic elastomer",
//     "category": "chair",
//     "images": [
//       "/furnitures/p31/img1.jpg",
//       "/furnitures/p31/img4.jpg",
//       "/furnitures/p31/img5.jpg",
//       "/furnitures/p31/img6.jpg",
//       "/furnitures/p31/img7.jpg",
//       "/furnitures/p31/img8.jpg"
//     ]
//   },
//   {
//     "id": 32,
//     "title": "GUNDE Folding chair",
//     "price": "₹699",
//     "description": "",
//     "material": "Frame: Galvanized steel, Seat and back: Polypropylene plastic",
//     "category": "chair",
//     "images": [
//       "/furnitures/p32/img1.jpg",
//       "/furnitures/p32/img4.jpg",
//       "/furnitures/p32/img5.jpg",
//       "/furnitures/p32/img6.jpg",
//       "/furnitures/p32/img7.jpg",
//       "/furnitures/p32/img8.jpg"
//     ]
//   },
//   {
//     "id": 33,
//     "title": "LOBERGET / MALSKÄR Swivel chair + pad",
//     "price": "₹3990",
//     "description": "",
//     "material": "Seat: Polypropylene plastic, Nut: Steel, Galvanized, Lock mechanism/ Gas cylinder/ Star base hub/ Leg: Steel, coated steel, Adjustment lever: Thermoplastic elastomer",
//     "category": "chair",
//     "images": [
//       "/furnitures/p33/img1.jpg",
//       "/furnitures/p33/img4.jpg",
//       "/furnitures/p33/img5.jpg",
//       "/furnitures/p33/img6.jpg",
//       "/furnitures/p33/img7.jpg",
//       "/furnitures/p33/img8.jpg"
//     ]
//   },
//   {
//     "id": 34,
//     "title": "TEODORES Chair",
//     "price": "₹2350",
//     "description": "",
//     "material": "Leg frame/ Cross rail/ Round bar: Steel, coated steel, Seat/ Backrest: Polypropylene plastic",
//     "category": "chair",
//     "images": [
//       "/furnitures/p34/img1.jpg",
//       "/furnitures/p34/img4.jpg",
//       "/furnitures/p34/img5.jpg",
//       "/furnitures/p34/img6.jpg",
//       "/furnitures/p34/img7.jpg",
//       "/furnitures/p34/img8.jpg"
//     ]
//   },
//   {
//     "id": 35,
//     "title": "SANDSBERG Chair",
//     "price": "₹1550",
//     "description": "",
//     "material": "Fabric: 100% polyester (recycled), Frame: Steel, coated steel, Seat: 100 % polyester, Foam 35 kg/cu.m., Layer-glued wood venee, Backrest: 100% polyester (recycled), Polypropylene (recycled)",
//     "category": "chair",
//     "images": [
//       "/furnitures/p35/img1.jpg",
//       "/furnitures/p35/img4.jpg",
//       "/furnitures/p35/img5.jpg",
//       "/furnitures/p35/img6.jpg",
//       "/furnitures/p35/img7.jpg",
//       "/furnitures/p35/img8.jpg"
//     ]
//   },
//   {
//     "id": 36,
//     "title": "VIHALS Folding chair",
//     "price": "₹1490",
//     "description": "",
//     "material": "Seat/ Back/ Foot: Polypropylene (recycled)",
//     "category": "chair",
//     "images": [
//       "/furnitures/p36/img1.jpg",
//       "/furnitures/p36/img4.jpg",
//       "/furnitures/p36/img5.jpg",
//       "/furnitures/p36/img6.jpg",
//       "/furnitures/p36/img7.jpg",
//       "/furnitures/p36/img8.jpg"
//     ]
//   },
//   {
//     "id": 37,
//     "title": "MARIUS Stool",
//     "price": "₹449",
//     "description": "45 cm (17 3/4 \")",
//     "material": "Seat/ Bumper/ Foot: Polypropylene (recycled), Leg: Steel, coated steel",
//     "category": "chair",
//     "images": [
//       "/furnitures/p37/img1.jpg",
//       "/furnitures/p37/img4.jpg",
//       "/furnitures/p37/img5.jpg",
//       "/furnitures/p37/img6.jpg",
//       "/furnitures/p37/img7.jpg",
//       "/furnitures/p37/img8.jpg"
//     ]
//   },
//   {
//     "id": 38,
//     "title": "MILLBERGET Swivel chair",
//     "price": "₹9990",
//     "description": "",
//     "material": "Star base hub/ Star base leg: Steel, coated steel, Coated fabric: 100% polyester, 100% polyurethane, Seat foam/ Armrest foam: Foam 35 kg/cu.m., Fabric: 100% polyester (recycled)",
//     "category": "chair",
//     "images": [
//       "/furnitures/p38/img1.jpg",
//       "/furnitures/p38/img4.jpg",
//       "/furnitures/p38/img5.jpg",
//       "/furnitures/p38/img6.jpg",
//       "/furnitures/p38/img7.jpg",
//       "/furnitures/p38/img8.jpg"
//     ]
//   },
//   {
//     "id": 39,
//     "title": "RENBERGET Swivel chair",
//     "price": "₹6990",
//     "description": "",
//     "material": "Back frame: Steel, coated steel, Seat foam: Foam 35 kg/cu.m., Polyester wadding, Armrest frame: Polypropylene plastic",
//     "category": "chair",
//     "images": [
//       "/furnitures/p39/img1.jpg",
//       "/furnitures/p39/img4.jpg",
//       "/furnitures/p39/img5.jpg",
//       "/furnitures/p39/img6.jpg",
//       "/furnitures/p39/img7.jpg",
//       "/furnitures/p39/img8.jpg"
//     ]
//   },
//   {
//     "id": 40,
//     "title": "VIHALS Chair",
//     "price": "₹2950",
//     "description": "",
//     "material": "Back fabric: 100 % polyester (100% recycled), Fabric/ Cover: 100% polyester (recycled), Leg frame/ Cross rail: Steel, coated steel, Seat: Polypropylene plastic (recycled), Foam 35 kg/cu.m.",
//     "category": "chair",
//     "images": [
//       "/furnitures/p40/img1.jpg",
//       "/furnitures/p40/img4.jpg",
//       "/furnitures/p40/img5.jpg",
//       "/furnitures/p40/img6.jpg",
//       "/furnitures/p40/img7.jpg",
//       "/furnitures/p40/img8.jpg"
//     ]
//   },
//   {
//     "id": 41,
//     "title": "ÖRFJÄLL Swivel chair",
//     "price": "₹5990",
//     "description": "",
//     "material": "Base plate/ Adjustment lever: Steel, Epoxy powder coating, Base cover: Polypropylene plastic, Star base hub/ Star base leg: Steel, coated steel, Tube caps: Reinforced polypropylene plastic",
//     "category": "chair",
//     "images": [
//       "/furnitures/p41/img1.jpg",
//       "/furnitures/p41/img4.jpg",
//       "/furnitures/p41/img5.jpg",
//       "/furnitures/p41/img6.jpg",
//       "/furnitures/p41/img7.jpg",
//       "/furnitures/p41/img8.jpg"
//     ]
//   },
//   {
//     "id": 42,
//     "title": "LOBERGET / MALSKÄR Swivel chair",
//     "price": "₹3490",
//     "description": "",
//     "material": "Seat: Polypropylene plastic, Nut: Steel, Galvanized, Lock mechanism/ Gas cylinder/ Star base hub/ Leg: Steel, coated steel, Adjustment lever: Thermoplastic elastomer",
//     "category": "chair",
//     "images": [
//       "/furnitures/p42/img1.jpg",
//       "/furnitures/p42/img4.jpg",
//       "/furnitures/p42/img5.jpg",
//       "/furnitures/p42/img6.jpg",
//       "/furnitures/p42/img7.jpg",
//       "/furnitures/p42/img8.jpg"
//     ]
//   },
//   {
//     "id": 43,
//     "title": "FLINTAN Office chair with armrests",
//     "price": "₹8490",
//     "description": "",
//     "material": "Mesh/ Fabric/ Mesh: 100% polyester (recycled), Back frame/ Gas cylinder/ Leg/ Back frame/ Gas cylinder/ Leg: Steel, coated steel, Seat/ Seat: Foam 35 kg/cu.m., Seat frame/ Seat frame: Layer-glued wood veneer",
//     "category": "chair",
//     "images": [
//       "/furnitures/p43/img1.jpg",
//       "/furnitures/p43/img4.jpg",
//       "/furnitures/p43/img5.jpg",
//       "/furnitures/p43/img6.jpg",
//       "/furnitures/p43/img7.jpg",
//       "/furnitures/p43/img8.jpg"
//     ]
//   },
//   {
//     "id": 44,
//     "title": "SMÄLLEN Swivel chair",
//     "price": "₹2490",
//     "description": "",
//     "material": "Seat/ Backrest: Polypropylene plastic (recycled), Seat frame/ Backrest frame/ Hub/ Leg: Steel, coated steel, Threaded column: Polyamide plastic, Steel, Galvanized, coated steel, Cover: Acetal plastic, Polypropylene plastic",
//     "category": "chair",
//     "images": [
//       "/furnitures/p44/img1.jpg",
//       "/furnitures/p44/img4.jpg",
//       "/furnitures/p44/img5.jpg",
//       "/furnitures/p44/img6.jpg",
//       "/furnitures/p44/img7.jpg",
//       "/furnitures/p44/img8.jpg"
//     ]
//   },
//   {
//     "id": 45,
//     "title": "KRYLBO Chair",
//     "price": "₹6450",
//     "description": "",
//     "material": "Fabric: 100 % polyester (100% recycled), Seat: 100 % polyester, Foam 25 kg/cu.m., Layer-glued wood venee, Back: Polyethylene plastic, Foam 25 kg/cu.m., Frame: Steel, coated steel",
//     "category": "chair",
//     "images": [
//       "/furnitures/p45/img1.jpg",
//       "/furnitures/p45/img4.jpg",
//       "/furnitures/p45/img5.jpg",
//       "/furnitures/p45/img6.jpg",
//       "/furnitures/p45/img7.jpg",
//       "/furnitures/p45/img8.jpg"
//     ]
//   },
//   {
//     "id": 46,
//     "title": "LISABO Chair",
//     "price": "₹5950",
//     "description": "",
//     "material": "Smoulder resistant lining: Polyester wadding, Fabric/ Cover: 78% cotton, 22 % polyester (100% recycled), Leg/ Frame support: Solid birch, Tinted clear acrylic lacquer, Seat rail: Layer-glued wood veneer, Tinted clear acrylic lacquer",
//     "category": "chair",
//     "images": [
//       "/furnitures/p46/img1.jpg",
//       "/furnitures/p46/img4.jpg",
//       "/furnitures/p46/img5.jpg",
//       "/furnitures/p46/img6.jpg",
//       "/furnitures/p46/img7.jpg",
//       "/furnitures/p46/img8.jpg"
//     ]
//   },
//   {
//     "id": 47,
//     "title": "DYVLINGE Swivel easy chair",
//     "price": "₹19990",
//     "description": "",
//     "material": "Supporting fabric/ Lining: 100% polypropylene, Frame: 100% polypropylene, Felt liner, Steel, coated steel, Star base: Steel, Chrome-plated, Filling: 70% cut polyurethane foam/ 30% polyester fibres",
//     "category": "chair",
//     "images": [
//       "/furnitures/p47/img1.jpg",
//       "/furnitures/p47/img4.jpg",
//       "/furnitures/p47/img5.jpg",
//       "/furnitures/p47/img6.jpg",
//       "/furnitures/p47/img7.jpg",
//       "/furnitures/p47/img8.jpg"
//     ]
//   },
//   {
//     "id": 48,
//     "title": "TEODORES Chair",
//     "price": "₹4700",
//     "description": "",
//     "material": "Leg frame/ Cross rail/ Round bar: Steel, coated steel, Seat/ Backrest: Polypropylene plastic",
//     "category": "chair",
//     "images": [
//       "/furnitures/p48/img1.jpg",
//       "/furnitures/p48/img4.jpg",
//       "/furnitures/p48/img5.jpg",
//       "/furnitures/p48/img6.jpg",
//       "/furnitures/p48/img7.jpg",
//       "/furnitures/p48/img8.jpg"
//     ]
//   },
//   {
//     "id": 49,
//     "title": "STIG Bar stool with backrest",
//     "price": "₹1290",
//     "description": "74 cm (29 1/8 \")",
//     "material": "Frame: Steel, Epoxy powder coating, Seat/ Back: Polypropylene plastic (recycled)",
//     "category": "chair",
//     "images": [
//       "/furnitures/p49/img1.jpg",
//       "/furnitures/p49/img4.jpg",
//       "/furnitures/p49/img5.jpg",
//       "/furnitures/p49/img6.jpg",
//       "/furnitures/p49/img7.jpg",
//       "/furnitures/p49/img8.jpg"
//     ]
//   },
//   {
//     "id": 50,
//     "title": "VIHALS Chair",
//     "price": "₹1950",
//     "description": "",
//     "material": "Leg frame/ Pin/ Cross rail: Steel, coated steel, Seat/ Backrest: Polypropylene plastic (recycled)",
//     "category": "chair",
//     "images": [
//       "/furnitures/p50/img1.jpg",
//       "/furnitures/p50/img4.jpg",
//       "/furnitures/p50/img5.jpg",
//       "/furnitures/p50/img6.jpg",
//       "/furnitures/p50/img7.jpg",
//       "/furnitures/p50/img8.jpg"
//     ]
//   },
//   {
//     "id": 51,
//     "title": "TORPARÖ Chair with armrests, outdoor",
//     "price": "₹3950",
//     "description": "",
//     "material": "Leg frame/ Pin/ Connecting plate/ Cross rail/ Back rail: Steel, Polyester powder coating, Seat and back/ Feet: Polypropylene plastic",
//     "category": "chair",
//     "images": [
//       "/furnitures/p51/img1.jpg",
//       "/furnitures/p51/img4.jpg",
//       "/furnitures/p51/img5.jpg",
//       "/furnitures/p51/img6.jpg",
//       "/furnitures/p51/img7.jpg",
//       "/furnitures/p51/img8.jpg"
//     ]
//   },
//   {
//     "id": 52,
//     "title": "KNARREVIK Bedside table",
//     "price": "₹899",
//     "description": "37x28 cm (14 5/8x11 \")",
//     "material": "Steel, coated steel",
//     "category": "chair",
//     "images": [
//       "/furnitures/p52/img1.jpg",
//       "/furnitures/p52/img4.jpg",
//       "/furnitures/p52/img5.jpg",
//       "/furnitures/p52/img6.jpg",
//       "/furnitures/p52/img7.jpg",
//       "/furnitures/p52/img8.jpg"
//     ]
//   },
//   {
//     "id": 53,
//     "title": "ODGER Chair",
//     "price": "₹6950",
//     "description": "",
//     "material": "Seat shell/ Leg frame: Wood Plastic Composite, Handle: Polypropylene plastic, Feet: Thermoplastic elastomer",
//     "category": "chair",
//     "images": [
//       "/furnitures/p53/img1.jpg",
//       "/furnitures/p53/img4.jpg",
//       "/furnitures/p53/img5.jpg",
//       "/furnitures/p53/img6.jpg",
//       "/furnitures/p53/img7.jpg",
//       "/furnitures/p53/img8.jpg"
//     ]
//   },
//   {
//     "id": 54,
//     "title": "BJÖRKBERGET Swivel chair",
//     "price": "₹7990",
//     "description": "",
//     "material": "Wadding: Polyester wadding, Inside frame: Polypropylene plastic, Backrest frame/ Mechanism/ Gas cylinder/ Leg: Steel, coated steel, Hook and loop fastener: 100% nylon",
//     "category": "chair",
//     "images": [
//       "/furnitures/p54/img1.jpg",
//       "/furnitures/p54/img4.jpg",
//       "/furnitures/p54/img5.jpg",
//       "/furnitures/p54/img6.jpg",
//       "/furnitures/p54/img7.jpg",
//       "/furnitures/p54/img8.jpg"
//     ]
//   },
//   {
//     "id": 55,
//     "title": "TOBIAS Chair",
//     "price": "₹7950",
//     "description": "",
//     "material": "Leg frame: Steel, Chrome-plated, Seat shell: Polycarbonate plastic, Foot: Polypropylene plastic, Nut: Zinc, Chrome-plated",
//     "category": "chair",
//     "images": [
//       "/furnitures/p55/img1.jpg",
//       "/furnitures/p55/img4.jpg",
//       "/furnitures/p55/img5.jpg",
//       "/furnitures/p55/img6.jpg",
//       "/furnitures/p55/img7.jpg",
//       "/furnitures/p55/img8.jpg"
//     ]
//   },
//   {
//     "id": 56,
//     "title": "MATCHSPEL Gaming chair",
//     "price": "₹13990",
//     "description": "",
//     "material": "Back frame/ Back bar: Steel, coated steel, Seat frame: Layer-glued wood veneer, Seat foam: Foam 25 kg/cu.m., Foam 35 kg/cu.m., Headrest: Reinforced polypropylene plastic",
//     "category": "chair",
//     "images": [
//       "/furnitures/p56/img1.jpg",
//       "/furnitures/p56/img4.jpg",
//       "/furnitures/p56/img5.jpg",
//       "/furnitures/p56/img6.jpg",
//       "/furnitures/p56/img7.jpg",
//       "/furnitures/p56/img8.jpg"
//     ]
//   },
//   {
//     "id": 57,
//     "title": "PERSBOL Armchair",
//     "price": "₹16990",
//     "description": "",
//     "material": "Fabric: 100% polyester (recycled), Seat cushion: Foam 25 kg/cu.m., Bottom frame: Solid wood, Plywood, Tinted clear lacquer, Seat frame: Plywood, Birch veneer, Tinted clear lacquer",
//     "category": "chair",
//     "images": [
//       "/furnitures/p57/img1.jpg",
//       "/furnitures/p57/img4.jpg",
//       "/furnitures/p57/img5.jpg",
//       "/furnitures/p57/img6.jpg",
//       "/furnitures/p57/img7.jpg",
//       "/furnitures/p57/img8.jpg"
//     ]
//   },
//   {
//     "id": 58,
//     "title": "FREDDE / MATCHSPEL Gaming desk and chair",
//     "price": "₹36980",
//     "description": "",
//     "material": "Frame/ Support: Steel, coated steel, Table top: Particleboard, Melamine foil, Plastic edging, Pocket: Plastic edging, Back panel: Particleboard, Melamine foil, Paper foil",
//     "category": "chair",
//     "images": [
//       "/furnitures/p58/img1.jpg",
//       "/furnitures/p58/img4.jpg",
//       "/furnitures/p58/img5.jpg",
//       "/furnitures/p58/img6.jpg",
//       "/furnitures/p58/img7.jpg",
//       "/furnitures/p58/img8.jpg"
//     ]
//   },
//   {
//     "id": 59,
//     "title": "GURLI Chair pad",
//     "price": "₹399",
//     "description": "40x40x6 cm (16x16x2 \")",
//     "material": "Outer fabric: 100% cotton, Filling: 100 % polyester (100% recycled)",
//     "category": "chair",
//     "images": [
//       "/furnitures/p59/img1.jpg",
//       "/furnitures/p59/img4.jpg",
//       "/furnitures/p59/img5.jpg",
//       "/furnitures/p59/img6.jpg",
//       "/furnitures/p59/img7.jpg",
//       "/furnitures/p59/img8.jpg"
//     ]
//   },
//   {
//     "id": 60,
//     "title": "POÄNG Armchair",
//     "price": "₹7990",
//     "description": "",
//     "material": "Supporting fabric: 100% polypropylene, Frame: Layer-glued wood veneer, Oak veneer, Stain, Clear acrylic, Wadding: 100% polyester (recycled), Comfort filling: Foam 30 kg/cu.m.",
//     "category": "chair",
//     "images": [
//       "/furnitures/p60/img1.jpg",
//       "/furnitures/p60/img4.jpg",
//       "/furnitures/p60/img5.jpg",
//       "/furnitures/p60/img6.jpg",
//       "/furnitures/p60/img7.jpg",
//       "/furnitures/p60/img8.jpg"
//     ]
//   },
//   {
//     "id": 61,
//     "title": "SONGESAND Bed frame with 2 storage boxes",
//     "price": "₹18990",
//     "description": "160x200 cm (63x78 3/4 \")",
//     "material": "Leg/ Top rail: Fibreboard, Paper foil, Plastic edging, Bed end filling/ Rail/ Bedside: Particleboard, Paper foil, Plastic edging, Drawer bottom: Fibreboard, Paint, Paper foil",
//     "category": "bed",
//     "images": [
//       "/furnitures/p61/img1.jpg",
//       "/furnitures/p61/img4.jpg",
//       "/furnitures/p61/img5.jpg",
//       "/furnitures/p61/img6.jpg",
//       "/furnitures/p61/img7.jpg",
//       "/furnitures/p61/img8.jpg"
//     ]
//   },
//   {
//     "id": 62,
//     "title": "SLATTUM Upholstered bed frame",
//     "price": "₹11990",
//     "description": "160x200 cm (63x78 3/4 \")",
//     "material": "Fabric: 100% polyester (recycled), Headboard: 100 % polyester, Polyester wadding, Steel, Foam 20 kg/cu., Footboard: Steel, Bedside: 100 % polyester, Particleboard, Steel",
//     "category": "bed",
//     "images": [
//       "/furnitures/p62/img1.jpg",
//       "/furnitures/p62/img4.jpg",
//       "/furnitures/p62/img5.jpg",
//       "/furnitures/p62/img6.jpg",
//       "/furnitures/p62/img7.jpg",
//       "/furnitures/p62/img8.jpg"
//     ]
//   },
//   {
//     "id": 63,
//     "title": "BRIMNES Day-bed w 2 drawers/2 mattresses",
//     "price": "₹32970",
//     "description": "80x200 cm (31 1/2x78 3/4 \")",
//     "material": "Bed frame panel/ Front frame/ Drawer front panel: Particleboard, Paper foil, Plastic edging, Bed end filling: Fibreboard, Paper foil, Bottom rail: Particleboard, Paper foil, Drawer sides/ Drawer back: Particleboard, Plastic foil, Paper foil",
//     "category": "bed",
//     "images": [
//       "/furnitures/p63/img1.jpg",
//       "/furnitures/p63/img4.jpg",
//       "/furnitures/p63/img5.jpg",
//       "/furnitures/p63/img6.jpg",
//       "/furnitures/p63/img7.jpg",
//       "/furnitures/p63/img8.jpg"
//     ]
//   },
//   {
//     "id": 64,
//     "title": "GRIMSBU Bed frame",
//     "price": "₹3490",
//     "description": "90x200 cm (35 3/8x78 3/4 \")",
//     "material": "Feet: Polypropylene plastic",
//     "category": "bed",
//     "images": [
//       "/furnitures/p64/img1.jpg",
//       "/furnitures/p64/img4.jpg",
//       "/furnitures/p64/img5.jpg",
//       "/furnitures/p64/img6.jpg",
//       "/furnitures/p64/img7.jpg",
//       "/furnitures/p64/img8.jpg"
//     ]
//   },
//   {
//     "id": 65,
//     "title": "NODELAND Bed frame with 2 storage boxes",
//     "price": "₹17990",
//     "description": "160x200 cm (63x78 3/4 \")",
//     "material": "Head/foot board/ Bedside: Particleboard, Melamine foil, ABS plastic, Feet: Polypropylene plastic, Bed slats: Layer-glued wood veneer, Adhesive resin as coating, Ribbon: 100 % polyester",
//     "category": "bed",
//     "images": [
//       "/furnitures/p65/img1.jpg",
//       "/furnitures/p65/img4.jpg",
//       "/furnitures/p65/img5.jpg",
//       "/furnitures/p65/img6.jpg",
//       "/furnitures/p65/img7.jpg",
//       "/furnitures/p65/img8.jpg"
//     ]
//   },
//   {
//     "id": 66,
//     "title": "SLÄKT Bed frame with underbed and storage",
//     "price": "₹23980",
//     "description": "90x200 cm (35 3/8x78 3/4 \")",
//     "material": "Bed slats: Layer-glued wood veneer, Adhesive resin as coating, Ribbon: 100 % polyester, Bedside: Particleboard, Particleboard, Fibreboard, Plastic edging,, Footboard/ Headboard: Fibreboard, Particleboard, Honeycomb structure paper fill",
//     "category": "bed",
//     "images": [
//       "/furnitures/p66/img1.jpg",
//       "/furnitures/p66/img4.jpg",
//       "/furnitures/p66/img5.jpg",
//       "/furnitures/p66/img6.jpg",
//       "/furnitures/p66/img7.jpg",
//       "/furnitures/p66/img8.jpg"
//     ]
//   },
//   {
//     "id": 67,
//     "title": "IDANÄS Upholstered ottoman bed",
//     "price": "₹52990",
//     "description": "180x200 cm (70 7/8x78 3/4 \")",
//     "material": "Supporting fabric/ Bottom/ Lining/ Lining, underside: 100% polypropylene, Top frame/ Bottom frame: Plywood, Fibreboard, Laminated veneer lumber, Particleboa, Filling: Foam 20 kg/cu.m., Footboard/ Bedside: Fibreboard, Laminated veneer lumber, Polyeste",
//     "category": "bed",
//     "images": [
//       "/furnitures/p67/img1.jpg",
//       "/furnitures/p67/img4.jpg",
//       "/furnitures/p67/img5.jpg",
//       "/furnitures/p67/img6.jpg",
//       "/furnitures/p67/img7.jpg",
//       "/furnitures/p67/img8.jpg"
//     ]
//   },
//   {
//     "id": 68,
//     "title": "GRIMSBU Bed frame",
//     "price": "₹4990",
//     "description": "140x200 cm (55 1/8x78 3/4 \")",
//     "material": "Feet: Polypropylene plastic",
//     "category": "bed",
//     "images": [
//       "/furnitures/p68/img1.jpg",
//       "/furnitures/p68/img4.jpg",
//       "/furnitures/p68/img5.jpg",
//       "/furnitures/p68/img6.jpg",
//       "/furnitures/p68/img7.jpg",
//       "/furnitures/p68/img8.jpg"
//     ]
//   },
//   {
//     "id": 69,
//     "title": "SONGESAND Bedroom furniture, set of 5",
//     "price": "₹55950",
//     "description": "160x200 cm (63x78 3/4 \")",
//     "material": "Leg/ Top rail: Fibreboard, Paper foil, Plastic edging, Bed end filling/ Rail/ Bedside: Particleboard, Paper foil, Plastic edging, Bed slats: Layer-glued wood veneer, Adhesive resin as coating, Ribbon: 100 % polyester",
//     "category": "bed",
//     "images": [
//       "/furnitures/p69/img1.jpg",
//       "/furnitures/p69/img4.jpg",
//       "/furnitures/p69/img5.jpg",
//       "/furnitures/p69/img6.jpg",
//       "/furnitures/p69/img7.jpg",
//       "/furnitures/p69/img8.jpg"
//     ]
//   },
//   {
//     "id": 70,
//     "title": "SONGESAND Bed frame",
//     "price": "₹17990",
//     "description": "160x200 cm (63x78 3/4 \")",
//     "material": "Leg/ Top rail: Fibreboard, Paper foil, Plastic edging, Bed end filling/ Rail/ Bedside: Particleboard, Paper foil, Plastic edging, Bed slats: Layer-glued wood veneer, Adhesive resin as coating, Ribbon: 100 % polyester",
//     "category": "bed",
//     "images": [
//       "/furnitures/p70/img1.jpg",
//       "/furnitures/p70/img4.jpg",
//       "/furnitures/p70/img5.jpg",
//       "/furnitures/p70/img6.jpg",
//       "/furnitures/p70/img7.jpg",
//       "/furnitures/p70/img8.jpg"
//     ]
//   },
//   {
//     "id": 71,
//     "title": "KLEPPSTAD Bed frame",
//     "price": "₹10990",
//     "description": "140x200 cm (55 1/8x78 3/4 \")",
//     "material": "Bed slats: Layer-glued wood veneer, Adhesive resin as coating, Headboard/ Footboard/ Bedside/ Leg/ Midbeam: Steel, coated steel, Zipper: 100% polyester, PET plastic, Thread: 100% polyester",
//     "category": "bed",
//     "images": [
//       "/furnitures/p71/img1.jpg",
//       "/furnitures/p71/img4.jpg",
//       "/furnitures/p71/img5.jpg",
//       "/furnitures/p71/img6.jpg",
//       "/furnitures/p71/img7.jpg",
//       "/furnitures/p71/img8.jpg"
//     ]
//   },
//   {
//     "id": 72,
//     "title": "NODELAND Bed frame",
//     "price": "₹9990",
//     "description": "160x200 cm (63x78 3/4 \")",
//     "material": "Head/foot board/ Bedside: Particleboard, Melamine foil, ABS plastic, Feet: Polypropylene plastic, Galvanized steel",
//     "category": "bed",
//     "images": [
//       "/furnitures/p72/img1.jpg",
//       "/furnitures/p72/img4.jpg",
//       "/furnitures/p72/img5.jpg",
//       "/furnitures/p72/img6.jpg",
//       "/furnitures/p72/img7.jpg",
//       "/furnitures/p72/img8.jpg"
//     ]
//   },
//   {
//     "id": 73,
//     "title": "MALM Ottoman bed",
//     "price": "₹44990",
//     "description": "160x200 cm (63x78 3/4 \")",
//     "material": "Head/footboard: Particleboard, Fibreboard, Fibreboard, Printed acrylic pa, Bedside: Particleboard, Fibreboard, Printed acrylic paint, Plastic, Bed base: Steel, coated steel, Slatted bed base: Layer-glued wood veneer, Birch veneer, Beech veneer, Adhe",
//     "category": "bed",
//     "images": [
//       "/furnitures/p73/img1.jpg",
//       "/furnitures/p73/img4.jpg",
//       "/furnitures/p73/img5.jpg",
//       "/furnitures/p73/img6.jpg",
//       "/furnitures/p73/img7.jpg",
//       "/furnitures/p73/img8.jpg"
//     ]
//   },
//   {
//     "id": 74,
//     "title": "RAMNEFJÄLL Upholstered bed frame",
//     "price": "₹17990",
//     "description": "160x200 cm (63x78 3/4 \")",
//     "material": "Headboard: Plywood, Fibreboard, 100% polyester, Side rail: Laminated veneer lumber, Headboard leg/ Bottom headboard rail/ Middle headboard rail/ Footboard leg/ Midbeam/ Cross rail/ Leg: Steel, coated steel, Footboard: 100% polyester (recycled), Plywo",
//     "category": "bed",
//     "images": [
//       "/furnitures/p74/img1.jpg",
//       "/furnitures/p74/img4.jpg",
//       "/furnitures/p74/img5.jpg",
//       "/furnitures/p74/img6.jpg",
//       "/furnitures/p74/img7.jpg",
//       "/furnitures/p74/img8.jpg"
//     ]
//   },
//   {
//     "id": 75,
//     "title": "VITARNA Four-poster bed frame",
//     "price": "₹11990",
//     "description": "140x200 cm (55 1/8x78 3/4 \")",
//     "material": "Steel, coated steel",
//     "category": "bed",
//     "images": [
//       "/furnitures/p75/img1.jpg",
//       "/furnitures/p75/img4.jpg",
//       "/furnitures/p75/img5.jpg",
//       "/furnitures/p75/img6.jpg",
//       "/furnitures/p75/img7.jpg",
//       "/furnitures/p75/img8.jpg"
//     ]
//   },
//   {
//     "id": 76,
//     "title": "VIHALS Bed frame with 2 storage boxes",
//     "price": "₹13490",
//     "description": "90x200 cm (35 3/8x78 3/4 \")",
//     "material": "Bedside: Particleboard, Fibreboard, Acrylic paint, Acrylic paint, , Headboard/ Footboard: Particleboard, Fibreboard, Acrylic paint, Acrylic paint, , Bed slats: Layer-glued wood veneer, Adhesive resin as coating, Ribbon: 100 % polyester",
//     "category": "bed",
//     "images": [
//       "/furnitures/p76/img1.jpg",
//       "/furnitures/p76/img4.jpg",
//       "/furnitures/p76/img5.jpg",
//       "/furnitures/p76/img6.jpg",
//       "/furnitures/p76/img7.jpg",
//       "/furnitures/p76/img8.jpg"
//     ]
//   },
//   {
//     "id": 77,
//     "title": "TYSSEDAL Bed frame",
//     "price": "₹39990",
//     "description": "180x200 cm (70 7/8x78 3/4 \")",
//     "material": "Spindles/ Leg, footboard: Solid wood, Polyester paint, Acrylic paint, Bedside/ Footboard: Fibreboard, Polyester paint, Acrylic paint, Leg, headboard: Solid beech, Solid birch, Polyester paint, Acrylic paint, Headboard: Fibreboard, Solid birch, Fibreb",
//     "category": "bed",
//     "images": [
//       "/furnitures/p77/img1.jpg",
//       "/furnitures/p77/img4.jpg",
//       "/furnitures/p77/img5.jpg",
//       "/furnitures/p77/img6.jpg",
//       "/furnitures/p77/img7.jpg",
//       "/furnitures/p77/img8.jpg"
//     ]
//   },
//   {
//     "id": 78,
//     "title": "HEMNES Day-bed frame with 3 drawers",
//     "price": "₹34990",
//     "description": "80x200 cm (31 1/2x78 3/4 \")",
//     "material": "Leg/ Bed end filling/ Back/ Back top rail/ Drawer front frame/ Drawer front: Fibreboard, Acrylic paint, Polyester paint, Bed slats: Layer-glued wood veneer, Adhesive resin as coating, Bed box: Particleboard, Melamine foil, Bottom rail: Solid pine",
//     "category": "bed",
//     "images": [
//       "/furnitures/p78/img1.jpg",
//       "/furnitures/p78/img4.jpg",
//       "/furnitures/p78/img5.jpg",
//       "/furnitures/p78/img6.jpg",
//       "/furnitures/p78/img7.jpg",
//       "/furnitures/p78/img8.jpg"
//     ]
//   },
//   {
//     "id": 79,
//     "title": "SLATTUM Upholstered bed frame",
//     "price": "₹6990",
//     "description": "90x200 cm (35 3/8x78 3/4 \")",
//     "material": "Fabric: 100% polyester (recycled), Headboard: 100 % polyester, Polyester wadding, Steel, Foam 20 kg/cu., Footboard: Steel, Bedside: 100 % polyester, Particleboard, Steel",
//     "category": "bed",
//     "images": [
//       "/furnitures/p79/img1.jpg",
//       "/furnitures/p79/img4.jpg",
//       "/furnitures/p79/img5.jpg",
//       "/furnitures/p79/img6.jpg",
//       "/furnitures/p79/img7.jpg",
//       "/furnitures/p79/img8.jpg"
//     ]
//   },
//   {
//     "id": 80,
//     "title": "SONGESAND Bed frame with 4 storage boxes",
//     "price": "₹29990",
//     "description": "180x200 cm (70 7/8x78 3/4 \")",
//     "material": "Leg/ Top rail: Fibreboard, Paper foil, Plastic edging, Bed end filling/ Rail/ Bedside: Particleboard, Paper foil, Plastic edging, Drawer bottom: Fibreboard, Paint, Paper foil, Bed slats: Layer-glued wood veneer, Adhesive resin as coating",
//     "category": "bed",
//     "images": [
//       "/furnitures/p80/img1.jpg",
//       "/furnitures/p80/img4.jpg",
//       "/furnitures/p80/img5.jpg",
//       "/furnitures/p80/img6.jpg",
//       "/furnitures/p80/img7.jpg",
//       "/furnitures/p80/img8.jpg"
//     ]
//   },
//   {
//     "id": 81,
//     "title": "VIHALS Bed frame",
//     "price": "₹9990",
//     "description": "160x200 cm (63x78 3/4 \")",
//     "material": "Bedside: Particleboard, Fibreboard, Acrylic paint, Acrylic paint, , Headboard/ Footboard: Particleboard, Fibreboard, Acrylic paint, Acrylic paint, , Midbeam: Laminated veneer lumber",
//     "category": "bed",
//     "images": [
//       "/furnitures/p81/img1.jpg",
//       "/furnitures/p81/img4.jpg",
//       "/furnitures/p81/img5.jpg",
//       "/furnitures/p81/img6.jpg",
//       "/furnitures/p81/img7.jpg",
//       "/furnitures/p81/img8.jpg"
//     ]
//   },
//   {
//     "id": 82,
//     "title": "NESTTUN Bed frame",
//     "price": "₹15990",
//     "description": "160x200 cm (63x78 3/4 \")",
//     "material": "Bed slats: Layer-glued wood veneer, Adhesive resin as coating, Ribbon: 100 % polyester, Steel, Steel, Steel, coated steel, Galvanized steel",
//     "category": "bed",
//     "images": [
//       "/furnitures/p82/img1.jpg",
//       "/furnitures/p82/img4.jpg",
//       "/furnitures/p82/img5.jpg",
//       "/furnitures/p82/img6.jpg",
//       "/furnitures/p82/img7.jpg",
//       "/furnitures/p82/img8.jpg"
//     ]
//   },
//   {
//     "id": 83,
//     "title": "TUFJORD Upholstered bed frame",
//     "price": "₹41990",
//     "description": "160x200 cm (63x78 3/4 \")",
//     "material": "Base fabric: 78% cotton, 22 % polyester (100% recycled), Headboard: 100% polyester (recycled), coated steel, Plywood, Laminat, Bottom headboard rail: 100% polyester (recycled), Fibreboard, Plywood, Laminated, Footboard/ Bedside: 100% polyester (recyc",
//     "category": "bed",
//     "images": [
//       "/furnitures/p83/img1.jpg",
//       "/furnitures/p83/img4.jpg",
//       "/furnitures/p83/img5.jpg",
//       "/furnitures/p83/img6.jpg",
//       "/furnitures/p83/img7.jpg",
//       "/furnitures/p83/img8.jpg"
//     ]
//   },
//   {
//     "id": 84,
//     "title": "SLÄKT Bed frame w storage+slatted bedbase",
//     "price": "₹26990",
//     "description": "90x200 cm (35 3/8x78 3/4 \")",
//     "material": "Bed slats: Layer-glued wood veneer, Adhesive resin as coating, Ribbon: 100 % polyester, Footboard/ Headboard/ Drawer front: Fibreboard, Acrylic paint, Bedside: Particleboard, Acrylic paint, Acrylic paint, Paper foil, ",
//     "category": "bed",
//     "images": [
//       "/furnitures/p84/img1.jpg",
//       "/furnitures/p84/img4.jpg",
//       "/furnitures/p84/img5.jpg",
//       "/furnitures/p84/img6.jpg",
//       "/furnitures/p84/img7.jpg",
//       "/furnitures/p84/img8.jpg"
//     ]
//   },
//   {
//     "id": 85,
//     "title": "BRIMNES Day-bed frame with 2 drawers",
//     "price": "₹24990",
//     "description": "80x200 cm (31 1/2x78 3/4 \")",
//     "material": "Bed frame panel/ Front frame/ Drawer front panel: Particleboard, Paper foil, Plastic edging, Bed end filling: Fibreboard, Paper foil, Bottom rail: Particleboard, Paper foil, Drawer sides/ Drawer back: Particleboard, Plastic foil, Paper foil",
//     "category": "bed",
//     "images": [
//       "/furnitures/p85/img1.jpg",
//       "/furnitures/p85/img4.jpg",
//       "/furnitures/p85/img5.jpg",
//       "/furnitures/p85/img6.jpg",
//       "/furnitures/p85/img7.jpg",
//       "/furnitures/p85/img8.jpg"
//     ]
//   },
//   {
//     "id": 86,
//     "title": "TONSTAD Bed frame with storage",
//     "price": "₹57990",
//     "description": "180x200 cm (70 7/8x78 3/4 \")",
//     "material": "Top panel: Recycled board, Oak veneer, Oak veneer, Clear acrylic lac, Bottom panel/ Panel: Recycled board, Oak veneer, Clear acrylic lacquer, Paper , Spacer: Solid pine, Side panel: Particleboard, Fibreboard, Oak veneer, Clear acrylic lacq",
//     "category": "bed",
//     "images": [
//       "/furnitures/p86/img1.jpg",
//       "/furnitures/p86/img4.jpg",
//       "/furnitures/p86/img5.jpg",
//       "/furnitures/p86/img6.jpg",
//       "/furnitures/p86/img7.jpg",
//       "/furnitures/p86/img8.jpg"
//     ]
//   },
//   {
//     "id": 87,
//     "title": "IDANÄS Bed frame with storage",
//     "price": "₹47990",
//     "description": "180x200 cm (70 7/8x78 3/4 \")",
//     "material": "Midbeam: Galvanized steel, Headboard leg/ Top headboard rail/ Middle headboard rail/ Footboard leg/ Top footboard rail/ Top side rail: Solid pine, Stain, Clear acrylic lacquer, Headboard/ Footboard/ Drawer front: Particleboard, Beech veneer, Stain, C",
//     "category": "bed",
//     "images": [
//       "/furnitures/p87/img1.jpg",
//       "/furnitures/p87/img4.jpg",
//       "/furnitures/p87/img5.jpg",
//       "/furnitures/p87/img6.jpg",
//       "/furnitures/p87/img7.jpg",
//       "/furnitures/p87/img8.jpg"
//     ]
//   },
//   {
//     "id": 88,
//     "title": "BRIMNES Bed frame with storage",
//     "price": "₹20990",
//     "description": "140x200 cm (55 1/8x78 3/4 \")",
//     "material": "Bedside/ Bottom rail: Particleboard, Paper foil, Drawer bottom: Fibreboard, Printed and embossed acrylic paint, Paper foi, Bed end filling: Fibreboard, Paper foil, Bed slats: Layer-glued wood veneer, Adhesive resin as coating",
//     "category": "bed",
//     "images": [
//       "/furnitures/p88/img1.jpg",
//       "/furnitures/p88/img4.jpg",
//       "/furnitures/p88/img5.jpg",
//       "/furnitures/p88/img6.jpg",
//       "/furnitures/p88/img7.jpg",
//       "/furnitures/p88/img8.jpg"
//     ]
//   },
//   {
//     "id": 89,
//     "title": "MALM Bed frame, high",
//     "price": "₹20990",
//     "description": "160x200 cm (63x78 3/4 \")",
//     "material": "Head/footboard: Particleboard, Fibreboard, Fibreboard, Printed and emboss, Bedside: Particleboard, Fibreboard, Printed and embossed acrylic p, Bed slats: Layer-glued wood veneer, Adhesive resin as coating, Ribbon: 100 % polyester",
//     "category": "bed",
//     "images": [
//       "/furnitures/p89/img1.jpg",
//       "/furnitures/p89/img4.jpg",
//       "/furnitures/p89/img5.jpg",
//       "/furnitures/p89/img6.jpg",
//       "/furnitures/p89/img7.jpg",
//       "/furnitures/p89/img8.jpg"
//     ]
//   },
//   {
//     "id": 90,
//     "title": "HEMNES Bed frame",
//     "price": "₹26990",
//     "description": "160x200 cm (63x78 3/4 \")",
//     "material": "Leg/ Headboard/ Bedside/ Top rail/ Middle rail: Solid pine, Adhesive, Solid pine, Stain, Clear acrylic la, Footboard/ Rail/ Bottom rail/ Bed end filling with bars: Solid pine, Adhesive, Stain, Clear acrylic lacquer, Bed slats: Layer-glued wood veneer",
//     "category": "bed",
//     "images": [
//       "/furnitures/p90/img1.jpg",
//       "/furnitures/p90/img4.jpg",
//       "/furnitures/p90/img5.jpg",
//       "/furnitures/p90/img6.jpg",
//       "/furnitures/p90/img7.jpg",
//       "/furnitures/p90/img8.jpg"
//     ]
//   },
//   {
//     "id": 91,
//     "title": "SANDSBERG Table",
//     "price": "₹3990",
//     "description": "110x67 cm (43 1/4x26 3/8 \")",
//     "material": "Under frame/ Leg: Steel, coated steel, Foot: Polypropylene plastic, Particleboard, Melamine foil, Plastic edging, Plastic edg",
//     "category": "table",
//     "images": [
//       "/furnitures/p91/img1.jpg",
//       "/furnitures/p91/img4.jpg",
//       "/furnitures/p91/img5.jpg",
//       "/furnitures/p91/img6.jpg",
//       "/furnitures/p91/img7.jpg",
//       "/furnitures/p91/img8.jpg"
//     ]
//   },
//   {
//     "id": 92,
//     "title": "LINNMON / ADILS Table",
//     "price": "₹3490",
//     "description": "100x60 cm (39 3/8x23 5/8 \")",
//     "material": "Top: Fibreboard, Acrylic paint, Frame: Particleboard, Plastic edging, Filling material: Recycled paper, Bottom: Fibreboard",
//     "category": "table",
//     "images": [
//       "/furnitures/p92/img1.jpg",
//       "/furnitures/p92/img4.jpg",
//       "/furnitures/p92/img5.jpg",
//       "/furnitures/p92/img6.jpg",
//       "/furnitures/p92/img7.jpg",
//       "/furnitures/p92/img8.jpg"
//     ]
//   },
//   {
//     "id": 93,
//     "title": "TORALD Desk",
//     "price": "₹1990",
//     "description": "65x40 cm (25 5/8x15 3/4 \")",
//     "material": "Particleboard, Melamine foil, Plastic edging",
//     "category": "table",
//     "images": [
//       "/furnitures/p93/img1.jpg",
//       "/furnitures/p93/img4.jpg",
//       "/furnitures/p93/img5.jpg",
//       "/furnitures/p93/img6.jpg",
//       "/furnitures/p93/img7.jpg",
//       "/furnitures/p93/img8.jpg"
//     ]
//   },
//   {
//     "id": 94,
//     "title": "KNARREVIK Bedside table",
//     "price": "₹899",
//     "description": "37x28 cm (14 5/8x11 \")",
//     "material": "Steel, coated steel",
//     "category": "table",
//     "images": [
//       "/furnitures/p94/img1.jpg",
//       "/furnitures/p94/img4.jpg",
//       "/furnitures/p94/img5.jpg",
//       "/furnitures/p94/img6.jpg",
//       "/furnitures/p94/img7.jpg",
//       "/furnitures/p94/img8.jpg"
//     ]
//   },
//   {
//     "id": 95,
//     "title": "TROTTEN Desk",
//     "price": "₹5990",
//     "description": "120x60 cm (47 1/4x23 5/8 \")",
//     "material": "Particleboard, Melamine foil, Plastic edging",
//     "category": "table",
//     "images": [
//       "/furnitures/p95/img1.jpg",
//       "/furnitures/p95/img4.jpg",
//       "/furnitures/p95/img5.jpg",
//       "/furnitures/p95/img6.jpg",
//       "/furnitures/p95/img7.jpg",
//       "/furnitures/p95/img8.jpg"
//     ]
//   },
//   {
//     "id": 96,
//     "title": "LAGKAPTEN / ADILS Desk",
//     "price": "₹4990",
//     "description": "140x60 cm (55 1/8x23 5/8 \")",
//     "material": "Basematerial: Steel, coated steel, Foot: Polypropylene plastic, Fibreboard, Acrylic paint, Plastic edging, Recycled paper",
//     "category": "table",
//     "images": [
//       "/furnitures/p96/img1.jpg",
//       "/furnitures/p96/img4.jpg",
//       "/furnitures/p96/img5.jpg",
//       "/furnitures/p96/img6.jpg",
//       "/furnitures/p96/img7.jpg",
//       "/furnitures/p96/img8.jpg"
//     ]
//   },
//   {
//     "id": 97,
//     "title": "VIHALS Table",
//     "price": "₹5990",
//     "description": "125x74 cm (49 1/4x29 1/8 \")",
//     "material": "Leg/ Side rail: Steel, coated steel, Inside leg: Steel, Particleboard, Melamine foil, Plastic edging, Plastic edg",
//     "category": "table",
//     "images": [
//       "/furnitures/p97/img1.jpg",
//       "/furnitures/p97/img4.jpg",
//       "/furnitures/p97/img5.jpg",
//       "/furnitures/p97/img6.jpg",
//       "/furnitures/p97/img7.jpg",
//       "/furnitures/p97/img8.jpg"
//     ]
//   },
//   {
//     "id": 98,
//     "title": "MICKE Desk",
//     "price": "₹4990",
//     "description": "73x50 cm (28 3/4x19 5/8 \")",
//     "material": "Table top/ Side panel/ Bottom panel: Particleboard, Recycled board, Fibreboard, Acrylic paint,, Supporting leg: Recycled board, Fibreboard, Acrylic paint, Plastic edging, Cable management/ Back rail/ Shelf/ Front: Particleboard, Paper foil, Plastic e",
//     "category": "table",
//     "images": [
//       "/furnitures/p98/img1.jpg",
//       "/furnitures/p98/img4.jpg",
//       "/furnitures/p98/img5.jpg",
//       "/furnitures/p98/img6.jpg",
//       "/furnitures/p98/img7.jpg",
//       "/furnitures/p98/img8.jpg"
//     ]
//   },
//   {
//     "id": 99,
//     "title": "MICKE Desk",
//     "price": "₹7990",
//     "description": "142x50 cm (55 7/8x19 5/8 \")",
//     "material": "Table top/ Side panel/ Bottom panel: Particleboard, Recycled board, Fibreboard, Acrylic paint,, Supporting leg: Fibreboard, Acrylic paint, Plastic edging, Plastic edging, Cable management/ Back rail/ Shelf/ Front: Particleboard, Paper foil, Plastic e",
//     "category": "table",
//     "images": [
//       "/furnitures/p99/img1.jpg",
//       "/furnitures/p99/img4.jpg",
//       "/furnitures/p99/img5.jpg",
//       "/furnitures/p99/img6.jpg",
//       "/furnitures/p99/img7.jpg",
//       "/furnitures/p99/img8.jpg"
//     ]
//   },
//   {
//     "id": 100,
//     "title": "FEJAN Table, outdoor",
//     "price": "₹1690",
//     "description": "50x44 cm (19 5/8x17 3/8 \")",
//     "material": "Table top/ Mounting plate/ Leg: Steel, Polyester powder coating, Feet: Polyamide plastic",
//     "category": "table",
//     "images": [
//       "/furnitures/p100/img1.jpg",
//       "/furnitures/p100/img4.jpg",
//       "/furnitures/p100/img5.jpg",
//       "/furnitures/p100/img6.jpg",
//       "/furnitures/p100/img7.jpg",
//       "/furnitures/p100/img8.jpg"
//     ]
//   },
//   {
//     "id": 101,
//     "title": "BOLLSIDAN Laptop stand",
//     "price": "₹6990",
//     "description": "68x36 cm (26 3/4x14 1/8 \")",
//     "material": "Table top: Particleboard, Melamine foil, Plastic edging, Supporting rail/ Inner tube/ Outer tube/ Foot: Steel, Powder coating, Handle: ABS plastic, Wheel/ Tube caps: Reinforced polyamide plastic",
//     "category": "table",
//     "images": [
//       "/furnitures/p101/img1.jpg",
//       "/furnitures/p101/img4.jpg",
//       "/furnitures/p101/img5.jpg",
//       "/furnitures/p101/img6.jpg",
//       "/furnitures/p101/img7.jpg",
//       "/furnitures/p101/img8.jpg"
//     ]
//   },
//   {
//     "id": 102,
//     "title": "LAGKAPTEN / ALEX Desk",
//     "price": "₹10490",
//     "description": "120x60 cm (47 1/4x23 5/8 \")",
//     "material": "Basematerial/ Front: Particleboard, Acrylic paint, Paper foil, Plastic edging, Drawer side/ Drawer back: Particleboard, Plastic foil, Drawer bottom: Fibreboard, Acrylic paint, Basematerial: Steel, coated steel",
//     "category": "table",
//     "images": [
//       "/furnitures/p102/img1.jpg",
//       "/furnitures/p102/img4.jpg",
//       "/furnitures/p102/img5.jpg",
//       "/furnitures/p102/img6.jpg",
//       "/furnitures/p102/img7.jpg",
//       "/furnitures/p102/img8.jpg"
//     ]
//   },
//   {
//     "id": 103,
//     "title": "UTESPELARE Gaming desk",
//     "price": "₹13990",
//     "description": "160x80 cm (63x31 1/2 \")",
//     "material": "Top panel: Particleboard, Melamine foil, Polycarbonate/ABS plastic, , Wire mesh/ Ladder frame: Steel, coated steel, Cable management: 100 % polyester (100% recycled), Tube cap: Polypropylene plastic",
//     "category": "table",
//     "images": [
//       "/furnitures/p103/img1.jpg",
//       "/furnitures/p103/img4.jpg",
//       "/furnitures/p103/img5.jpg",
//       "/furnitures/p103/img6.jpg",
//       "/furnitures/p103/img7.jpg",
//       "/furnitures/p103/img8.jpg"
//     ]
//   },
//   {
//     "id": 104,
//     "title": "LINNMON / SPÄND Desk",
//     "price": "₹3490",
//     "description": "100x60 cm (39 3/8x23 5/8 \")",
//     "material": "Top: Fibreboard, Acrylic paint, Frame: Particleboard, Plastic edging, Filling material: Recycled paper, Bottom: Fibreboard",
//     "category": "table",
//     "images": [
//       "/furnitures/p104/img1.jpg",
//       "/furnitures/p104/img4.jpg",
//       "/furnitures/p104/img5.jpg",
//       "/furnitures/p104/img6.jpg",
//       "/furnitures/p104/img7.jpg",
//       "/furnitures/p104/img8.jpg"
//     ]
//   },
//   {
//     "id": 105,
//     "title": "BJÖRKÅSEN Laptop stand",
//     "price": "₹2690",
//     "description": "",
//     "material": "Table top/ Supporting rail/ Inner tube/ Outer tube/ Base: Steel, coated steel, Cover cap/ Foot: Reinforced polyamide plastic, Holder: Polypropylene plastic, Bushing/ Tube cap: Acetal plastic",
//     "category": "table",
//     "images": [
//       "/furnitures/p105/img1.jpg",
//       "/furnitures/p105/img4.jpg",
//       "/furnitures/p105/img5.jpg",
//       "/furnitures/p105/img6.jpg",
//       "/furnitures/p105/img7.jpg",
//       "/furnitures/p105/img8.jpg"
//     ]
//   },
//   {
//     "id": 106,
//     "title": "LAGKAPTEN / ADILS Desk",
//     "price": "₹4490",
//     "description": "120x60 cm (47 1/4x23 5/8 \")",
//     "material": "Basematerial: Steel, coated steel, Foot: Polypropylene plastic, Fibreboard, Acrylic paint, Plastic edging, Recycled paper",
//     "category": "table",
//     "images": [
//       "/furnitures/p106/img1.jpg",
//       "/furnitures/p106/img4.jpg",
//       "/furnitures/p106/img5.jpg",
//       "/furnitures/p106/img6.jpg",
//       "/furnitures/p106/img7.jpg",
//       "/furnitures/p106/img8.jpg"
//     ]
//   },
//   {
//     "id": 107,
//     "title": "MALM Desk",
//     "price": "₹13990",
//     "description": "140x65 cm (55 1/8x25 5/8 \")",
//     "material": "Table top: Recycled board, Acrylic paint, Paper foil, Plastic edging, Side frame/ Door/ Drawer front: Particleboard, Acrylic paint, Paper foil, Plastic edging, Side panel: Recycled board, Acrylic paint, Plastic edging, Back panel/ Bottom panel/ Adjus",
//     "category": "table",
//     "images": [
//       "/furnitures/p107/img1.jpg",
//       "/furnitures/p107/img4.jpg",
//       "/furnitures/p107/img5.jpg",
//       "/furnitures/p107/img6.jpg",
//       "/furnitures/p107/img7.jpg",
//       "/furnitures/p107/img8.jpg"
//     ]
//   },
//   {
//     "id": 108,
//     "title": "LAGKAPTEN / ALEX Desk",
//     "price": "₹18490",
//     "description": "200x60 cm (78 3/4x23 5/8 \")",
//     "material": "Basematerial: Steel, coated steel, Foot: Polypropylene plastic, Basematerial/ Front: Particleboard, Acrylic paint, Paper foil, Plastic edging, Drawer side/ Drawer back: Particleboard, Plastic foil",
//     "category": "table",
//     "images": [
//       "/furnitures/p108/img1.jpg",
//       "/furnitures/p108/img4.jpg",
//       "/furnitures/p108/img5.jpg",
//       "/furnitures/p108/img6.jpg",
//       "/furnitures/p108/img7.jpg",
//       "/furnitures/p108/img8.jpg"
//     ]
//   },
//   {
//     "id": 109,
//     "title": "MICKE Desk",
//     "price": "₹9990",
//     "description": "105x50 cm (41 3/8x19 5/8 \")",
//     "material": "Table top/ Side panel/ Bottom panel: Particleboard, Recycled board, Fibreboard, Acrylic paint,, Supporting leg: Recycled board, Fibreboard, Acrylic paint, Plastic edging, Cable management/ Back rail/ Shelf/ Front: Particleboard, Paper foil, Plastic e",
//     "category": "table",
//     "images": [
//       "/furnitures/p109/img1.jpg",
//       "/furnitures/p109/img4.jpg",
//       "/furnitures/p109/img5.jpg",
//       "/furnitures/p109/img6.jpg",
//       "/furnitures/p109/img7.jpg",
//       "/furnitures/p109/img8.jpg"
//     ]
//   },
//   {
//     "id": 110,
//     "title": "TROTTEN Desk sit/stand",
//     "price": "₹19990",
//     "description": "160x80 cm (63x31 1/2 \")",
//     "material": "Feet: Steel, Steel, coated steel, Midbeam/ Leg/ Side rail/ Crank: Steel, coated steel, Handle: Reinforced polyamide plastic, Shaft: Steel, Galvanized",
//     "category": "table",
//     "images": [
//       "/furnitures/p110/img1.jpg",
//       "/furnitures/p110/img4.jpg",
//       "/furnitures/p110/img5.jpg",
//       "/furnitures/p110/img6.jpg",
//       "/furnitures/p110/img7.jpg",
//       "/furnitures/p110/img8.jpg"
//     ]
//   },
//   {
//     "id": 111,
//     "title": "SANDSBERG Table and 4 chairs",
//     "price": "₹7390",
//     "description": "110x67 cm (43 1/4x26 3/8 \")",
//     "material": "Under frame/ Leg: Steel, coated steel, Foot: Polypropylene plastic, Leg frame/ Cross rail: Steel, coated steel, Seat/ Backrest: Polypropylene (recycled)",
//     "category": "table",
//     "images": [
//       "/furnitures/p111/img1.jpg",
//       "/furnitures/p111/img4.jpg",
//       "/furnitures/p111/img5.jpg",
//       "/furnitures/p111/img6.jpg",
//       "/furnitures/p111/img7.jpg",
//       "/furnitures/p111/img8.jpg"
//     ]
//   },
//   {
//     "id": 112,
//     "title": "GUNDE Folding table",
//     "price": "₹2990",
//     "description": "67x67 cm (26 3/8x26 3/8 \")",
//     "material": "Table top: Particleboard, Melamine foil, Melamine foil, Plastic edgi, Mounting plate/ Leg frame/ Fixing plate: Steel, Polyester powder coating, End cap: Polypropylene plastic, Stop ring: Steel, coated steel",
//     "category": "table",
//     "images": [
//       "/furnitures/p112/img1.jpg",
//       "/furnitures/p112/img4.jpg",
//       "/furnitures/p112/img5.jpg",
//       "/furnitures/p112/img6.jpg",
//       "/furnitures/p112/img7.jpg",
//       "/furnitures/p112/img8.jpg"
//     ]
//   },
//   {
//     "id": 113,
//     "title": "SANDSBERG Table and 2 chairs",
//     "price": "₹5190",
//     "description": "67x67 cm (26 3/8x26 3/8 \")",
//     "material": "Under frame/ Leg: Steel, coated steel, Foot: Polypropylene plastic, Leg frame/ Cross rail: Steel, coated steel, Seat/ Backrest: Polypropylene (recycled)",
//     "category": "table",
//     "images": [
//       "/furnitures/p113/img1.jpg",
//       "/furnitures/p113/img4.jpg",
//       "/furnitures/p113/img5.jpg",
//       "/furnitures/p113/img6.jpg",
//       "/furnitures/p113/img7.jpg",
//       "/furnitures/p113/img8.jpg"
//     ]
//   },
//   {
//     "id": 114,
//     "title": "VIHALS Table",
//     "price": "₹4990",
//     "description": "74x74 cm (29 1/8x29 1/8 \")",
//     "material": "Leg/ Side rail: Steel, coated steel, Inside leg: Steel, Particleboard, Melamine foil, Plastic edging, Plastic edg",
//     "category": "table",
//     "images": [
//       "/furnitures/p114/img1.jpg",
//       "/furnitures/p114/img4.jpg",
//       "/furnitures/p114/img5.jpg",
//       "/furnitures/p114/img6.jpg",
//       "/furnitures/p114/img7.jpg",
//       "/furnitures/p114/img8.jpg"
//     ]
//   },
//   {
//     "id": 115,
//     "title": "VITTSJÖ Laptop stand",
//     "price": "₹1990",
//     "description": "35x65 cm (13 3/4x25 5/8 \")",
//     "material": "Basematerial: Steel, coated steel, Top panel: Tempered glass",
//     "category": "table",
//     "images": [
//       "/furnitures/p115/img1.jpg",
//       "/furnitures/p115/img4.jpg",
//       "/furnitures/p115/img5.jpg",
//       "/furnitures/p115/img6.jpg",
//       "/furnitures/p115/img7.jpg",
//       "/furnitures/p115/img8.jpg"
//     ]
//   },
//   {
//     "id": 116,
//     "title": "NODELAND Bedside table",
//     "price": "₹1290",
//     "description": "37x39 cm (14 5/8x15 3/8 \")",
//     "material": "Top panel/ Fixed shelf/ Side panel: Particleboard, Melamine foil, ABS plastic, Feet: Polypropylene plastic",
//     "category": "table",
//     "images": [
//       "/furnitures/p116/img1.jpg",
//       "/furnitures/p116/img4.jpg",
//       "/furnitures/p116/img5.jpg",
//       "/furnitures/p116/img6.jpg",
//       "/furnitures/p116/img7.jpg",
//       "/furnitures/p116/img8.jpg"
//     ]
//   },
//   {
//     "id": 117,
//     "title": "LACK Coffee table",
//     "price": "₹2990",
//     "description": "90x55 cm (35 3/8x21 5/8 \")",
//     "material": "Leg: Particleboard, Particleboard, Fibreboard, Paper foil, Panel: Particleboard, Paper foil, Melamine foil, Paper foil, Pla, Top: Particleboard, Honeycomb structure paper filling (100% re",
//     "category": "table",
//     "images": [
//       "/furnitures/p117/img1.jpg",
//       "/furnitures/p117/img4.jpg",
//       "/furnitures/p117/img5.jpg",
//       "/furnitures/p117/img6.jpg",
//       "/furnitures/p117/img7.jpg",
//       "/furnitures/p117/img8.jpg"
//     ]
//   },
//   {
//     "id": 118,
//     "title": "TROTTEN Desk",
//     "price": "₹8990",
//     "description": "140x80 cm (55 1/8x31 1/2 \")",
//     "material": "Leg/ Hook: Steel, coated steel, Particleboard, Melamine foil, Plastic edging",
//     "category": "table",
//     "images": [
//       "/furnitures/p118/img1.jpg",
//       "/furnitures/p118/img4.jpg",
//       "/furnitures/p118/img5.jpg",
//       "/furnitures/p118/img6.jpg",
//       "/furnitures/p118/img7.jpg",
//       "/furnitures/p118/img8.jpg"
//     ]
//   },
//   {
//     "id": 119,
//     "title": "LINNMON Table top",
//     "price": "₹1490",
//     "description": "100x60 cm (39 3/8x23 5/8 \")",
//     "material": "Top: Fibreboard, Acrylic paint, Frame: Particleboard, Plastic edging, Filling material: Recycled paper, Bottom: Fibreboard",
//     "category": "table",
//     "images": [
//       "/furnitures/p119/img1.jpg",
//       "/furnitures/p119/img4.jpg",
//       "/furnitures/p119/img5.jpg",
//       "/furnitures/p119/img6.jpg",
//       "/furnitures/p119/img7.jpg",
//       "/furnitures/p119/img8.jpg"
//     ]
//   },
//   {
//     "id": 120,
//     "title": "LAGKAPTEN / MITTBACK Desk",
//     "price": "₹8990",
//     "description": "140x60 cm (55 1/8x23 5/8 \")",
//     "material": "Fibreboard, Acrylic paint, Plastic edging, Recycled paper, Solid birch, Adhesive",
//     "category": "table",
//     "images": [
//       "/furnitures/p120/img1.jpg",
//       "/furnitures/p120/img4.jpg",
//       "/furnitures/p120/img5.jpg",
//       "/furnitures/p120/img6.jpg",
//       "/furnitures/p120/img7.jpg",
//       "/furnitures/p120/img8.jpg"
//     ]
//   }
// ];


// function App() {
//   return (
//     <>
//       <Header />
//       <Furniture products={products} />
//     </>
//   );
// }

// export default App;

import Todo from "./to-do/Todo.jsx"
function App(){
    return(
        <Todo/>
    );
}
export default App;



