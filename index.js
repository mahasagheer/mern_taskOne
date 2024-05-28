let laptopAccesoriesStock = [
  {
    name: "laptop",
    quantity: 0,
    price: 112000,
    id: 1,
    image: "laptop.jpg",
    description:
      "Think of the Lenovo V15 as your office manager, executing your everyday tasks with efficiency. It will keep your business productive and your data secure, while its thinner, smaller design and narrower side bezels put a clean, professional look on your desk—or wherever you choose to use it.Intel® Core™ i3-1215U, 6C 15.6 FHD (1920x1080) TN 250nits",
  },
  {
    name: "Laptop Sleeve",
    quantity: 0,
    price: 1400,
    id: 2,
    image: "laptopcover.jpg",
    description:
      "Wrap your laptop in a colourful, comfortable sleeve. The durable neoprene material helps protect your personal computer from the elements, as well as bumps and scratches. Easily reversible so you can change colors to suit your mood 14 Reversible Sleeve Colour Grey PC and Mac Fits up to 35.56 cm (14?) Diagonal Laptops",
  },
  {
    name: "Laptop Stand",
    quantity: 5,
    id: 3,

    price: 2900,
    image: "laptopStand_.jpg",
    description:
      "This Wooden Laptop Table will protect both the laptop from overheating and the user from suffering heat-related discomfort. In addition, it can also be used as a coffee table/study table. You can play card games, study, write a diary and do much more with this Laptop Desk on your lap. Length: 23.6 - Width: 15.7 - Height: 11 Anti-Skid Foam Gripping Sturdy Powder-Coated Metal Tubes Laminated Ergonomically Designed Edges",
  },
  {
    name: "Cable Organizer",
    quantity: 5,
    id: 4,

    price: 950,
    image: "cableorganizer.webp",
    description:
      "Ugreen Cable Organizer is designed to make your desk and office tidy and organized. It can keep all your cables within arm's reach while in use and also remain in place while disconnected.You will never lose your cable at the floor or behind the desk when you own a cable organizer like this.Also this cable organizer will easily make you win time and money by increasing lifetime of cables and saving time for searching them",
  },
  {
    name: "Laptop Backpack",
    quantity: 1,
    id: 5,

    price: 3000,
    image: "laptopBackpack.jpg",
    description:
      "The Lenovo 15.6 Casual Backpack B210 utilizes a water-repellent fabric and a clean, streamlined design to create a case that's perfectly suited to modern life.Integrated laptop compartment Internal pockets for those must-have accessories Spacious main compartment for books and other items Casual and stylish design",
  },
  {
    name: "Cooling Pad",
    quantity: 5,
    id: 6,

    price: 3900,
    image: "coolingpad.jpg",
    description:
      "The efficient cooling channel directs heat away from your notebook. Designed for desk or lap use - just turn 90 degrees. Built-in height adjustment provides added comfort. Efficient cooling channel directs heat away Contoured for lap use Flip down the stand for desk use USB powered",
  },
  {
    name: "Light Keyboard",
    quantity: 5,
    id: 7,

    price: 7799,
    image: "lightkeyboard.jpg",
    description:
      "The latest A4Tech Bloody B500N Mechanical light switch Gaming Keyboard price in Pakistan is 7,799 - PKR which was recently updated on May 2024.",
  },
  {
    name: "Laptop Skin Sticker",
    quantity: 5,
    id: 8,

    price: 650,
    image: "laptopSticker.webp",
    description:
      "Step 1:- Product Title: We Bare Bears Laptop Skin Vinyl Sticker Decal- Graphics Memory: HD- Category Path: Computers & Laptops>Computer Accessories>Mac AccessoriesStep 2:- Additional Keywords: Laptop Skin, Vinyl Sticker, Decal, Mac AccessoriesStep 3:• High-definition graphics memory for clear and vibrant visuals.• Fits all laptops from 12 to 15.6 inches in size.• We Bare Bears design adds a fun and stylish touch.• Vinyl sticker decal for easy application and removal.• Protects your laptop from scratches and dust.• Perfect for Mac accessories and computer customization.Step 4:- N/AStep 5:- N/A",
  },
];
let cart = [];
let deletedStock = [];
const addCart = (product) => {
  if (cart.some((products) => products.id == product.id)) {
    cart = cart.map((products) =>
      products.id == product.id
        ? { ...products, quantity: products.quantity + 1 }
        : products
    );
    laptopAccesoriesStock = laptopAccesoriesStock.map((stock) =>
      stock.id == product.id
        ? { ...stock, quantity: stock.quantity - product.quantity }
        : stock
    );
  } else {
    if (
      laptopAccesoriesStock.some(
        (products) =>
          products.quantity > product.quantity && product.quantity <= 0
      )
    ) {
      console.log("Product", product.name, "is Out of stock");
      deletedStock.push(product);
    }

    if (product.quantity != 0) {
      cart.push(product);
      laptopAccesoriesStock = laptopAccesoriesStock.map((stock) =>
        stock.id == product.id
          ? { ...stock, quantity: stock.quantity - product.quantity }
          : stock
      );
    }
  }
};
const removeCart = (product) => {
  if (cart.some((products) => products.id == product.id)) {
    cart = cart.map((products) =>
      products.id == product.id
        ? { ...products, quantity: products.quantity - product.quantity }
        : products
    );
    laptopAccesoriesStock = laptopAccesoriesStock.map((stock) =>
      stock.id == product.id
        ? { ...stock, quantity: stock.quantity + product.quantity }
        : stock
    );
  }
  cart = cart.filter((products) => products.quantity > 0);
};
let sum = 0;
const total = () => {
  cart.map((products) => {
    sum = sum + products.price * products.quantity;
    return sum;
  });
};

const updateStock = (obj) => {
  if ("id" in obj) {
    laptopAccesoriesStock = laptopAccesoriesStock.map((stock) => {
      if (stock.id == obj.id) {
        stock.quantity = stock.quantity + obj.quantity;
        console.log(laptopAccesoriesStock);
      } else {
        console.log("Id don't exist");
      }
    });
  } else {
    let maxId = Math.max.apply(
      0,
      laptopAccesoriesStock.map((stock) => stock.id)
    );

    obj.id = ++maxId;
    laptopAccesoriesStock.push(obj);
    console.log("New Item in Stock: ", obj);
  }
};
const removeStock = (obj) => {
  if ("id" in obj) {
    laptopAccesoriesStock = laptopAccesoriesStock.filter(
      (stock) => stock.id != obj.id
    );
    let id = 1;
    laptopAccesoriesStock = laptopAccesoriesStock.map(
      (stock) => (stock = { ...stock, id: (stock.id = id++) })
    );
  } else {
    console.log("To remove item from stock Id must exist");
  }
};
updateStock({
  name: "Mouse for Laptop",
  quantity: 400,
  price: 2576,
  image: "laptopSticker.webp",
  description:
    "Three Connection Modes:BT 3.0 + BT 5.0 + 2.4G wireless connection modes deliver fast transmission mode of data, allowing you to connect to a computer via 2.4G wireless, connect to another computer via BT 3.0 and to a third computer via BT 5.0, and simply switches by mode button, for more convenience.Silent Design:The button is designed without noise and makes click silent without disturbing others.",
});
removeStock({
  name: "Mouse for Laptop",
  quantity: 400,
  id: 4,
  price: 2576,
  image: "laptopSticker.webp",
  description:
    "Three Connection Modes:BT 3.0 + BT 5.0 + 2.4G wireless connection modes deliver fast transmission mode of data, allowing you to connect to a computer via 2.4G wireless, connect to another computer via BT 3.0 and to a third computer via BT 5.0, and simply switches by mode button, for more convenience.Silent Design:The button is designed without noise and makes click silent without disturbing others.",
});
removeStock({
  name: "Laptop Backpack",
  quantity: 1,
  id: 5,

  price: 3000,
  image: "laptopBackpack.jpg",
  description:
    "The Lenovo 15.6 Casual Backpack B210 utilizes a water-repellent fabric and a clean, streamlined design to create a case that's perfectly suited to modern life.Integrated laptop compartment Internal pockets for those must-have accessories Spacious main compartment for books and other items Casual and stylish design",
});

updateStock({
  name: "Portable SSD",
  quantity: 3,
  price: 13000,
  description:
    "Capacity: 512GB Interface USB 3.1 Micro Rotational speed 5Gbps System supports Windows/Mac/Linux",
});

// updateStock({
//   name: "Cable Organizer",
//   quantity: 70,
//   id: 4,
//   price: 950,
//   image: "cableorganizer.webp",
//   description:
//     "Ugreen Cable Organizer is designed to make your desk and office tidy and organized. It can keep all your cables within arm's reach while in use and also remain in place while disconnected.You will never lose your cable at the floor or behind the desk when you own a cable organizer like this.Also this cable organizer will easily make you win time and money by increasing lifetime of cables and saving time for searching them",
// });
addCart({
  name: "laptop",
  quantity: 0,
  price: 112000,
  id: 1,
  image: "laptop.jpg",
  description:
    "Think of the Lenovo V15 as your office manager, executing your everyday tasks with efficiency. It will keep your business productive and your data secure, while its thinner, smaller design and narrower side bezels put a clean, professional look on your desk—or wherever you choose to use it.Intel® Core™ i3-1215U, 6C 15.6 FHD (1920x1080) TN 250nits",
});
addCart({
  name: "Cable Organizer",
  quantity: 2,
  id: 4,

  price: 950,
  image: "cableorganizer.webp",
  description:
    "Ugreen Cable Organizer is designed to make your desk and office tidy and organized. It can keep all your cables within arm's reach while in use and also remain in place while disconnected.You will never lose your cable at the floor or behind the desk when you own a cable organizer like this.Also this cable organizer will easily make you win time and money by increasing lifetime of cables and saving time for searching them",
});

addCart({
  name: "Laptop Stand",
  quantity: 5,
  id: 3,

  price: 2900,
  image: "laptopStand_.jpg",
  description:
    "This Wooden Laptop Table will protect both the laptop from overheating and the user from suffering heat-related discomfort. In addition, it can also be used as a coffee table/study table. You can play card games, study, write a diary and do much more with this Laptop Desk on your lap. Length: 23.6 - Width: 15.7 - Height: 11 Anti-Skid Foam Gripping Sturdy Powder-Coated Metal Tubes Laminated Ergonomically Designed Edges",
});
addCart({
  name: "Laptop Sleeve",
  quantity: 0,
  price: 1400,
  id: 2,
  image: "laptopcover.jpg",
  description:
    "Wrap your laptop in a colourful, comfortable sleeve. The durable neoprene material helps protect your personal computer from the elements, as well as bumps and scratches. Easily reversible so you can change colors to suit your mood 14 Reversible Sleeve Colour Grey PC and Mac Fits up to 35.56 cm (14?) Diagonal Laptops",
});
addCart({
  name: "Light Keyboard",
  quantity: 3,
  id: 7,

  price: 7799,
  image: "lightkeyboard.jpg",
  description:
    "The latest A4Tech Bloody B500N Mechanical light switch Gaming Keyboard price in Pakistan is 7,799 - PKR which was recently updated on May 2024.",
});

removeCart({
  name: "Laptop Stand",
  quantity: 3,
  id: 3,

  price: 2900,
  image: "laptopStand_.jpg",
  description:
    "This Wooden Laptop Table will protect both the laptop from overheating and the user from suffering heat-related discomfort. In addition, it can also be used as a coffee table/study table. You can play card games, study, write a diary and do much more with this Laptop Desk on your lap. Length: 23.6 - Width: 15.7 - Height: 11 Anti-Skid Foam Gripping Sturdy Powder-Coated Metal Tubes Laminated Ergonomically Designed Edges",
});
total();
console.log("Cart: ", cart);
console.log("Updated Stock After purchase: ", laptopAccesoriesStock);
console.log("Total: ", sum);
console.log("Deleted Products: ", deletedStock);
