const products = [
  {
    id: 1,
    name: "Modern Chair",
    image: "/images/modernchair.jpg",
    price: 10000,
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    category: "Furniture",
    discount: "18% OFF",
    shipping: "Free Shipping",
    reviews: [
      { user: "Alice", comment: "Loved it!", rating: 5 },
      { user: "John", comment: "Very comfortable.", rating: 4 }
    ]
  },
  {
    id: 2,
    name: "Wooden table",
    image: "/images/table.jpg",
    price: 35000,
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    category: "Furniture",
    discount: "18% OFF",
    shipping: "Free Shipping",
    reviews: [
      { user: "Maria", comment: "Exactly as shown!", rating: 5 }
    ]
  },
  {
    id: 3,
    name: "Sofa set",
    image: "/images/sofa.jpg",
    price: 25000,
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    category: "Furniture",
    discount: "18% OFF",
    shipping: "Free Shipping",
    reviews: [
      { user: "Maria", comment: "Exactly as shown!", rating: 5 }
    ]
  },
  {
    id: 4,
    name: "bed frame",
    image: "/images/bedframe.jpg",
    price: 40000,
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    category: "Furniture",
    discount: "18% OFF",
    shipping: "Free Shipping",
    reviews: [
      { user: "Maria", comment: "Exactly as shown!", rating: 5 }
    ]
  },
  {
    id: 5,
    name: "Desk lamp",
    image: "/images/desklamp.jpg",
    price: 7000,
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    category: "Furniture",
    discount: "18% OFF",
    shipping: "Free Shipping",
    reviews: [
      { user: "Maria", comment: "Exactly as shown!", rating: 5 }
    ]
  },
  {
    id: 6,
    name: "Book shelf",
    image: "/images/bookshelf.jpg",
    price: 4000,
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    category: "Furniture",
    discount: "18% OFF",
    shipping: "Free Shipping",
    reviews: [
      { user: "Maria", comment: "Exactly as shown!", rating: 5 }
    ]
  },
  {
    id: 7,
    name: "Wall clock",
    image: "/images/wallclock.jpg",
    price: 4500,
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    category: "Furniture",
    discount: "18% OFF",
    shipping: "Free Shipping",
    reviews: [
      { user: "Maria", comment: "Exactly as shown!", rating: 5 }
    ]
  },
  {
    id: 8,
    name: "Cushion set",
    image: "/images/cushionset.jpg",
    price: 6500,
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    category: "Furniture",
    discount: "18% OFF",
    shipping: "Free Shipping",
    reviews: [
      { user: "Maria", comment: "Exactly as shown!", rating: 5 }
    ]
  },
  {
    id: 9,
    name: "Dining table",
    image: "/images/diningtable.jpg",
    price: 50000,
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    category: "Furniture",
    discount: "18% OFF",
    shipping: "Free Shipping",
    reviews: [
      { user: "Maria", comment: "Exactly as shown!", rating: 5 }
    ]
  },
  {
    id: 10,
    name: "Accent chair",
    image: "/images/chair2.jpg",
    price: 18000,
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    category: "Furniture",
    discount: "18% OFF",
    shipping: "Free Shipping",
    reviews: [
      { user: "Maria", comment: "Exactly as shown!", rating: 5 }
    ]
  },
  {
    id: 11,
    name: "Night stand",
    image: "/images/nightstand.jpg",
    price: 5000,
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    category: "Furniture",
    discount: "18% OFF",
    shipping: "Free Shipping",
    reviews: [
      { user: "Maria", comment: "Exactly as shown!", rating: 5 }
    ]
  },
  {
    id: 12,
    name: "Storage cabinet",
    image: "/images/storagecabinet.jpg",
    price: 35000,
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    category: "Furniture",
    discount: "18% OFF",
    shipping: "Free Shipping",
    reviews: [
      { user: "Maria", comment: "Exactly as shown!", rating: 5 }
    ]
  },
];

export default products;
