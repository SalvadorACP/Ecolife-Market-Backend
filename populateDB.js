const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('./models/Product');

const products = [
  {
    name: 'Organic Lavender Soap',
    price: 5.99,
    description: 'A soothing lavender soap made with organic ingredients.',
    image: 'https://mionartisansoap.com/cdn/shop/products/VIC_6360copy3.jpg?v=1676344299'
  },
  {
    name: 'Natural Bamboo Toothbrush',
    price: 3.49,
    description: 'Eco-friendly bamboo toothbrush with soft bristles.',
    image: 'https://ynrinstruments.co.uk/cdn/shop/products/image340002185.png?v=1655283330'
  },
  {
    name: 'Herbal Shampoo Bar',
    price: 7.99,
    description: 'Shampoo bar made with organic herbs and essential oils.',
    image: 'https://www.moonvalleyorganics.com/cdn/shop/files/1MoonValleyOrganicsHerbalShampooBarFrontBoxandBarSiberianFir.png?v=1696952906&width=1946'
  },
  
  {
    name: 'Reusable Cotton Rounds',
    price: 10.99,
    description: 'Reusable cotton rounds for makeup removal and cleansing.',
    image: 'https://m.media-amazon.com/images/I/71VYU7XvXML.jpg'
  },
  {
    name: 'Aloe Vera Gel',
    price: 8.99,
    description: 'Pure aloe vera gel for soothing skin care.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwiDjL-s19LO9L-qi6atfO1xNMXgOz4iuXHg&usqp=CAU'
  },
  {
    name: 'Organic Deodorant Stick',
    price: 6.99,
    description: 'Natural deodorant stick made with organic ingredients.',
    image: 'https://m.media-amazon.com/images/I/81oQ2vzuryL.jpg'
  },
  {
    name: 'Charcoal Face Mask',
    price: 12.99,
    description: 'Detoxifying charcoal face mask with organic ingredients.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiGVJlMRdj9QB6x7HGUyvF2QGYYfDjdO6xmA&usqp=CAU'
  },
  {
    name: 'Lavender Bath Salts',
    price: 9.99,
    description: 'Relaxing bath salts infused with organic lavender essential oil.',
    image: 'https://i0.wp.com/loesshillslavender.com/wp-content/uploads/2022/11/lavender-bath-salts-large.jpg?fit=512%2C512&ssl=1'
  },
  {
    name: 'Organic Lip Balm',
    price: 4.99,
    description: 'Hydrating lip balm made with organic beeswax and oils.',
    image: 'https://mumanu.com/wp-content/uploads/2021/11/Mumanu-organic-lip-balm-original.jpg'
  },
  {
    name: 'Coconut Oil Moisturizer',
    price: 11.99,
    description: 'Organic coconut oil moisturizer for skin and hair.',
    image: 'https://cdn11.bigcommerce.com/s-17vlohgn/images/stencil/1280x1280/products/799/5764/cocoj17__43134.1613414431.jpg?c=2'
  }
];

const populateDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    await Product.deleteMany(); // Limpiar la colección antes de poblarla
    await Product.insertMany(products);

    console.log('Products inserted successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error populating products:', error);
    mongoose.connection.close();
  }
};

populateDB();
