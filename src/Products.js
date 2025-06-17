const products = [
    {
        id: 1,
        name: "gallon maple syrup",
        category: "syrup",
        family: "jug",
        grades: ["Golden", "Amber", "Dark", "Very Dark"],
        size: "128 fl oz",
        price: 50.00,
        description: "A jug of maple syrup",
        image: "./images/1.jpg"
    },   
    {
        id: 2,
        name: "half-gallon maple syrup",
        category: "syrup",
        family: "jug",
        grades: ["Golden", "Amber", "Dark", "Very Dark"],
        size: "64 fl oz",
        price: 28.00,
        description: "A jug of maple syrup",
        image: "./images/1.jpg"
    },  
    {
        id: 3,
        name: "quart maple syrup",
        category: "syrup",
        family: "jug",
        grades: ["Golden", "Amber", "Dark", "Very Dark"],
        size: "32 fl oz",
        price: 18.00,
        description: "A jug of maple syrup",
        image: "./images/1.jpg" 
    },  
    {
        id: 4,
        name: "pint maple syrup",
        category: "syrup",
        family: "jug",
        grades: ["Golden", "Amber", "Dark", "Very Dark"],
        size: "16 fl oz",
        price: 10.00,
        description: "A jug of maple syrup",
        image: "./images/1.jpg" 
    },  
    {
        id: 5,
        name: "half-pint maple syrup",
        category: "syrup",
        family: "jug",
        grades: ["Golden", "Amber", "Dark", "Very Dark"],
        size: "8 fl oz",
        price: 6.50,
        description: "A jug of maple syrup",
        image: "./images/1.jpg" 
    },  
    {
        id: 6,
        name: "3.4 oz maple syrup",
        category: "syrup",
        family: "jug",
        grades: ["Golden", "Amber", "Dark", "Very Dark"],
        size: "3.4 fl oz",
        price: 3.50,
        description: "A jug of maple syrup",
        image: "./images/1.jpg" 
    },  
    {
        id: 7,
        name: "small glass leaf",
        category: "syrup",
        family: "glass leaf",
        grades: ["Amber"],
        size: "1.7 fl oz",
        price: 3.50,
        description: "A decorative glass maple leaf filled with pure maple syrup",
        image: "./images/leaf_sml.jpg"
    },  
    {
        id: 8,
        name: "medium glass leaf",
        category: "syrup",
        family: "glass leaf",
        grades: ["Amber"],
        size: "3.4 fl oz",
        price: 5.75,
        description: "A decorative glass maple leaf filled with pure maple syrup",
        image: "./images/leaf_med.jpg" 
    },  
    {
        id: 9,
        name: "large glass leaf",
        category: "syrup",
        family: "glass leaf",
        grades: ["Amber"],
        size: "8.5 fl oz",
        price: 10.50,
        description: "A decorative glass maple leaf filled with pure maple syrup",
        image: "./images/leaf_lg.jpg"
    }, 
    {
        id: 10,
        name: "plain glass bottle",
        category: "syrup",
        family: "glass bottle",
        grades: ["Golden", "Amber", "Dark", "Very Dark"],
        size: "12 fl oz",
        price: 9.00,
        description: "A glass bottle filled with pure maple syrup",
        image: "./images/glass_plain.jpg"
    }, 
    {
        id: 11,
        name: "mini glass bottle",
        category: "syrup",
        family: "glass bottle",
        grades: ["Amber"],
        size: "1.7 fl oz",
        price: 2.50,
        description: "A glass bottle filled with pure maple syrup",
        image: "./images/glass_mini.jpg"
    }, 
    {
        id: 12,
        name: "plastic dispenser bottle",
        category: "syrup",
        family: "plastic bottle",
        grades: ["Golden", "Amber", "Dark", "Very Dark"],
        size: "13 fl oz",
        price: 9.00,
        description: "A plastic squeeze bottle filled with pure maple syrup",
        image: "./images/ketchup_bottle.jpg"
    }, 
    {
        id: 13,
        name: "bourbon barrel aged syrup",
        category: "syrup",
        family: "specialty syrup",
        size: "12.5 fl oz",
        price: 17.00,
        description: "Pure maple syrup that has been aged in a bourbon barrel",
        image: "./images/1.jpg"
    }, 
    {
        id: 14,
        name: "cinnamon infused syrup",
        category: "syrup",
        family: "specialty syrup",
        size: "12 fl oz",
        price: 10.00,
        description: "Pure maple syrup that has been infused with a cinnamon stick. Cinnamon stick remains in final product.",
        image: "./images/1.jpg"
    }, 
    {
        id: 15,
        name: "vanilla infused syrup",
        category: "syrup",
        family: "specialty syrup",
        size: "12 fl oz",
        price: 11.00,
        description: "Pure maple syrup that has been infused with vanilla beans. Vanilla beans remain in final product.",
        image: "./images/1.jpg"
    }, 
    {
        id: 16,
        name: "3 piece molded maple sugar",
        category: "other",
        family: "molded maple sugar",
        size: "1 oz",
        price: 1.50,
        description: "3 pieces of molded maple sugar",
        image: "./images/candy_three_piece.jpg"
    },
    {
        id: 17,
        name: "6 piece molded maple sugar",
        category: "other",
        family: "molded maple sugar",
        size: "2 oz",
        price: 3.00,
        description: "6 pieces of molded maple sugar",
        image: "./images/candy_six_piece.jpg"
    },
    {
        id: 18,
        name: "large single piece molded maple sugar",
        category: "other",
        family: "molded maple sugar",
        size: "3/4 oz",
        price: 1.00,
        description: "A large single piece of molded maple sugar",
        image: "./images/candy_single.jpg"
    }, 
    {
        id: 19,
        name: "small bag maple coated peanuts",
        category: "other",
        family: "maple coated peanuts",
        size: "2 oz",
        price: 2.00,
        description: "Dry roasted peanuts coated with pure maple syrup",
        image: "./images/peanuts_sml.jpg"
    },
    {
        id: 20,
        name: "large bag maple coated peanuts",
        category: "other",
        family: "maple coated peanuts",
        size: "4.8 oz",
        price: 4.00,
        description: "Dry roasted peanuts coated with pure maple syrup",
        image: "./images/peanuts_lg.jpg"
    },  
    {
        id: 21,
        name: "tub of maple coated peanuts",
        category: "other",
        family: "maple coated peanuts",
        size: "1 lb",
        price: 10.00,
        description: "Dry roasted peanuts coated with pure maple syrup",
        image: "./images/peanuts_tub.jpg"
    }, 
    {
        id: 22,
        name: "small maple cream",
        category: "other",
        family: "cream",
        size: "4 oz",
        price: 5.00,
        description: "A pure maple spread in a glass jar",
        image: "./images/1.jpg"
    },  
    {
        id: 23,
        name: "medium maple cream",
        category: "other",
        family: "cream",
        size: "1/2 lb",
        price: 8.00,
        description: "A pure maple spread in a glass jar",
        image: "./images/1.jpg"
    },  
    {
        id: 24,
        name: "large maple cream",
        category: "other",
        family: "cream",
        size: "1 lb",
        price: 14.00,
        description: "A pure maple spread in a glass jar",
        image: "./images/cream_lg.jpg"
    },  
    {
        id: 25,
        name: "small granulated maple sugar",
        category: "other",
        family: "sugar",
        size: "5 oz",
        price: 6.00,
        description: "Pure granulated maple sugar in a shaker bottle",
        image: "./images/sugar_sml.jpg"
    },  
    {
        id: 26,
        name: "large granulated maple sugar",
        category: "other",
        family: "sugar",
        size: "9 oz",
        price: 9.00,
        description: "Pure granulated maple sugar in a shaker bottle",
        image: "./images/sugar_lg.jpg"
    },  
    {
        id: 27,
        name: "cinnamon maple granulated sugar",
        category: "other",
        family: "sugar",
        size: "3 oz",
        price: 4.00,
        description: "Pure granulated maple sugar mixed with cinnamon in a shaker bottle",
        image: "./images/sugar_cinn.jpg"
    },  
    {
        id: 28,
        name: "maple cotton candy bag",
        category: "other",
        family: "cotton-candy",
        price: 4.00,
        description: "A bag of maple cotton candy",
        image: "./images/cotton_candy_bag.jpg"
    },  
    {
        id: 29,
        name: "maple cotton candy tub",
        category: "other",
        family: "cotton-candy",
        size: "2 oz",
        price: 2.00,
        description: "A tub of maple cotton candy",
        image: "./images/cotton_candy_tub.jpg"
    },  
]

export default products;