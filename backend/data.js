import bcrypt from 'bcryptjs';
const data ={
    users:[
        {
            name: 'Silent',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
            isSeller: true,
            seller: {
              name: 'Nike',
              logo: '/images/logo1.png',
              description: 'best seller',
              rating: 4.5,
              numReviews: 120,
            },
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
    ],
    products:[
        {
           
            name:'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/p11.jpg',
            price: 120, countInStock: 0,
            brand: 'Nike',
            rating: 4.5,
            numReviews:10,
            description:'high quality product',
        },
        {
            
            name:'Nike Cool Pants',
            category: 'Pants',
            image: '/images/p6.jpg',
            price: 500,countInStock: 10,
            brand: 'Nike',
            rating: 5.0,
            numReviews:10,
            description:'high quality product',
        },
        {
            
            name:'Piroros Fit Pants',
            category: 'Pants',
            image: '/images/p5.jpg',
            price: 250, countInStock: 20,
            brand: 'Piroros',
            rating: 4.5,
            numReviews:17,
            description:'high quality product',
        },
        {
           
            name:'Nike Slim Pants',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 178, countInStock: 0,
            brand: 'Nike',
            rating: 4.0,
            numReviews:18,
            description:'high quality product',
        },
        {
           
            name:'Blue Thin Leather Jacket',
            category: 'Jackets',
            image: '/images/p2.jpg',
            price: 120,countInStock: 15,
            brand: 'Silent',
            rating: 4.8,
            numReviews:10,
            description:'high quality product',
        },
        {
            
            name:'Office Shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 65,countInStock: 5,
            brand: 'Nike',
            rating: 3.5,
            numReviews:13,
            description:'high quality product',
        },
    ]
};
export default data;