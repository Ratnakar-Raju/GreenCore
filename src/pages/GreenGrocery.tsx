import React, { useState } from 'react';
import { Search, ShoppingCart, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  organic: boolean;
  stock: number;
}

const GreenGrocery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);

  // Updated products data with Indian Rupee prices including organic pesticides
  const products: Product[] = [
    {
      id: 1,
      name: 'Organic Tomatoes',
      price: 80,
      category: 'vegetables',
      image: 'https://th.bing.com/th/id/OIP.zDh6o1K1_v_RrSJcp30tqQHaFd?rs=1&pid=ImgDetMain',
      rating: 4.5,
      organic: true,
      stock: 50
    },
    {
      id: 2,
      name: 'Fresh Apples',
      price: 120,
      category: 'fruits',
      image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb',
      rating: 4.8,
      organic: true,
      stock: 30
    },
    {
      id: 3,
      name: 'Organic Spinach',
      price: 60,
      category: 'vegetables',
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb',
      rating: 4.2,
      organic: true,
      stock: 25
    },
    {
      id: 4,
      name: 'Fresh Bananas',
      price: 40,
      category: 'fruits',
      image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224',
      rating: 4.6,
      organic: false,
      stock: 40
    },
    {
      id: 5,
      name: 'Organic Carrots',
      price: 50,
      category: 'vegetables',
      image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979',
      rating: 4.3,
      organic: true,
      stock: 35
    },
    {
      id: 6,
      name: 'Fresh Mangoes',
      price: 150,
      category: 'fruits',
      image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716',
      rating: 4.9,
      organic: false,
      stock: 20
    },
    {
      id: 7,
      name: 'Organic Potatoes',
      price: 45,
      category: 'vegetables',
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655',
      rating: 4.4,
      organic: true,
      stock: 60
    },
    {
      id: 8,
      name: 'Fresh Oranges',
      price: 90,
      category: 'fruits',
      image: 'https://images.unsplash.com/photo-1547514701-42782101795e',
      rating: 4.7,
      organic: false,
      stock: 30
    },
    {
      id: 9,
      name: 'Organic Broccoli',
      price: 70,
      category: 'vegetables',
      image: 'https://th.bing.com/th/id/OIP.hwuIOzywtBBoON1LnjAKpQHaE8?rs=1&pid=ImgDetMain',
      rating: 4.5,
      organic: true,
      stock: 25
    },
    {
      id: 10,
      name: 'Fresh Grapes',
      price: 180,
      category: 'fruits',
      image: 'https://images.freeimages.com/images/large-previews/e6f/fresh-grapes-1-1326112.jpg',
      rating: 4.8,
      organic: false,
      stock: 15
    },
    {
      id: 11,
      name: 'Organic Cauliflower',
      price: 65,
      category: 'vegetables',
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb',
      rating: 4.3,
      organic: true,
      stock: 30
    },
    {
      id: 12,
      name: 'Fresh Pomegranates',
      price: 200,
      category: 'fruits',
      image: 'https://www.kidsworldfun.com/blog/wp-content/uploads/2018/03/pomegranate.jpg',
      rating: 4.7,
      organic: false,
      stock: 20
    },
    {
      id: 13,
      name: 'Organic Neem Oil',
      price: 350,
      category: 'oil',
      image: 'https://th.bing.com/th/id/OIP.Sg0ryyeV3uCnG7vad-zYOQHaHa?rs=1&pid=ImgDetMain',
      rating: 4.8,
      organic: true,
      stock: 25
    },
    {
      id: 14,
      name: 'Organic Garlic',
      price: 280,
      category: 'vegetables',
      image: 'https://thumbs.dreamstime.com/z/organic-garlic-26864085.jpg',
      rating: 4.6,
      organic: true,
      stock: 20
    },
    {
      id: 15,
      name: 'Organic Chili',
      price: 320,
      category: 'vegetables',
      image: 'https://thumbs.dreamstime.com/b/chilli-isolated-white-background-close-up-111171350.jpg',
      rating: 4.7,
      organic: true,
      stock: 15
    },
    {
      id: 16,
      name: 'Organic star fruit',
      price: 250,
      category: 'fruits',
      image: 'https://th.bing.com/th/id/OIP.UZ3aCQFmj4GnHromeBBaWwHaJ3?rs=1&pid=ImgDetMain',
      rating: 4.5,
      organic: true,
      stock: 30
    }
  ];

  const categories = ['all', 'fruits', 'vegetables', 'pesticides', 'organic'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'organic' ? product.organic : product.category === selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 pt-24">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Green Grocery</h1>
          <button
            onClick={() => setShowCart(!showCart)}
            className="relative p-2 rounded-full bg-green-100 hover:bg-green-200"
          >
            <ShoppingCart className="w-6 h-6 text-green-600" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.organic && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    Organic
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">{product.rating}</span>
                </div>
                <p className="text-green-600 font-bold mt-2">₹{product.price}</p>
                <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Shopping Cart Modal */}
        {showCart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
                {cart.length === 0 ? (
                  <p className="text-gray-500">Your cart is empty</p>
                ) : (
                  <div className="space-y-4">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-500">₹{item.price}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <div className="border-t pt-4">
                      <div className="flex justify-between font-bold">
                        <span>Total:</span>
                        <span>₹{getTotalPrice()}</span>
                      </div>
                      <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                        Checkout
                      </button>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => setShowCart(false)}
                  className="mt-4 text-gray-500 hover:text-gray-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GreenGrocery; 