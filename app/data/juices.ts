export interface JuiceItem {
  id: string;
  name: string;
  category: 'cold-pressed' | 'smoothies' | 'wellness-shots' | 'cleanses';
  tagline: string;
  price: number;
  size: string;
  image: string;
  ingredients: string[];
  benefits: string[];
  calories: number;
  badge?: string;
  popular?: boolean;
  colorScheme: {
    bg: string;
    text: string;
    border: string;
    accent: string;
    pillBg: string;
  };
}

export const JUICES: JuiceItem[] = [
  {
    id: 'green-revive',
    name: 'Green Revive Detox',
    category: 'cold-pressed',
    tagline: 'Deep alkalizing cellular refresh & hydration',
    price: 149,
    size: '350ml Glass Bottle',
    image: '/images/green-revive.jpg',
    ingredients: ['Organic Kale', 'Granny Smith Apple', 'Cucumber', 'Celery', 'Fresh Mint', 'Lemon'],
    benefits: ['Cellular Detox', 'Rich in Chlorophyll', 'Digestion Support'],
    calories: 120,
    badge: 'Bestseller',
    popular: true,
    colorScheme: {
      bg: 'from-emerald-50 to-teal-50',
      text: 'text-emerald-800',
      border: 'border-emerald-200',
      accent: 'bg-emerald-600 hover:bg-emerald-700',
      pillBg: 'bg-emerald-100 text-emerald-800',
    },
  },
  {
    id: 'berry-bliss',
    name: 'Dragon Berry Bliss',
    category: 'smoothies',
    tagline: 'Antioxidant superblend with pink pitaya & chia',
    price: 179,
    size: '350ml Glass Bottle',
    image: '/images/berry-bliss.jpg',
    ingredients: ['Red Pitaya (Dragonfruit)', 'Strawberries', 'Blueberries', 'Organic Chia Seeds', 'Coconut Water', 'Lime'],
    benefits: ['Radiant Skin Glow', 'Antioxidant Powerhouse', 'Heart Health'],
    calories: 165,
    badge: 'Trending',
    popular: true,
    colorScheme: {
      bg: 'from-rose-50 to-pink-50',
      text: 'text-rose-800',
      border: 'border-rose-200',
      accent: 'bg-rose-600 hover:bg-rose-700',
      pillBg: 'bg-rose-100 text-rose-800',
    },
  },
  {
    id: 'citrus-sunrise',
    name: 'Turmeric Citrus Sunrise',
    category: 'cold-pressed',
    tagline: 'Golden anti-inflammatory immunity booster',
    price: 159,
    size: '350ml Glass Bottle',
    image: '/images/citrus-sunrise.jpg',
    ingredients: ['Nagpur Orange', 'Crisp Carrot', 'Raw Ginger Root', 'Organic Turmeric', 'Lemon', 'Black Pepper'],
    benefits: ['Immunity Shield', 'Anti-Inflammatory', 'Natural Energy'],
    calories: 135,
    badge: 'Immunity Boost',
    popular: true,
    colorScheme: {
      bg: 'from-amber-50 to-orange-50',
      text: 'text-amber-900',
      border: 'border-amber-200',
      accent: 'bg-amber-600 hover:bg-amber-700',
      pillBg: 'bg-amber-100 text-amber-800',
    },
  },
  {
    id: 'tropical-harvest',
    name: 'Tropical Harvest Splash',
    category: 'cold-pressed',
    tagline: 'Sun-drenched Alphonso mango, passion fruit & crisp citrus',
    price: 169,
    size: '350ml Glass Bottle',
    image: '/images/hero-juice.jpg',
    ingredients: ['Ratnagiri Alphonso Mango', 'Passion Fruit', 'Mosambi', 'Pineapple Core', 'Wild Mint'],
    benefits: ['Vitamin C Blast', 'Electrolyte Replenish', 'Natural Mood Lift'],
    calories: 150,
    badge: "Chef's Special",
    popular: true,
    colorScheme: {
      bg: 'from-orange-50 to-amber-50',
      text: 'text-orange-900',
      border: 'border-orange-200',
      accent: 'bg-orange-500 hover:bg-orange-600',
      pillBg: 'bg-orange-100 text-orange-800',
    },
  },
  {
    id: 'ruby-roots',
    name: 'Ruby Vitality Beet',
    category: 'cold-pressed',
    tagline: 'Stamina powerhouse with beet root & crisp ginger',
    price: 149,
    size: '350ml Glass Bottle',
    image: '/images/berry-bliss.jpg',
    ingredients: ['Organic Red Beets', 'Shimla Apple', 'Baby Spinach', 'Lemon', 'Fresh Ginger'],
    benefits: ['Stamina & Blood Flow', 'Liver Cleansing', 'Iron Rich'],
    calories: 140,
    badge: 'Pre-Workout',
    popular: false,
    colorScheme: {
      bg: 'from-pink-50 to-red-50',
      text: 'text-red-900',
      border: 'border-red-200',
      accent: 'bg-red-600 hover:bg-red-700',
      pillBg: 'bg-red-100 text-red-800',
    },
  },
  {
    id: 'ginger-fire-shot',
    name: 'Fire Immunity Elixir',
    category: 'wellness-shots',
    tagline: 'Potent concentrated kick to reset your system',
    price: 79,
    size: '60ml Wellness Shot',
    image: '/images/citrus-sunrise.jpg',
    ingredients: ['Raw Ginger Juice (70%)', 'Fresh Lemon', 'Oregano Oil', 'Cayenne Pepper', 'Raw Forest Honey'],
    benefits: ['Rapid Immune Response', 'Throat Soother', 'Metabolism Kick'],
    calories: 45,
    badge: 'Power Shot',
    popular: false,
    colorScheme: {
      bg: 'from-yellow-50 to-amber-50',
      text: 'text-yellow-950',
      border: 'border-yellow-200',
      accent: 'bg-amber-500 hover:bg-amber-600',
      pillBg: 'bg-yellow-100 text-yellow-800',
    },
  },
  {
    id: 'pure-celery-cleanse',
    name: 'Morning Pure Celery',
    category: 'cold-pressed',
    tagline: '100% straight cold-pressed celery juice with a twist of lime',
    price: 139,
    size: '350ml Glass Bottle',
    image: '/images/green-revive.jpg',
    ingredients: ['100% Crisp Celery', 'Key Lime'],
    benefits: ['Gut Lining Support', 'Electrolyte Balance', 'Bloat Relief'],
    calories: 70,
    badge: 'Low Sugar',
    popular: false,
    colorScheme: {
      bg: 'from-emerald-50 to-green-50',
      text: 'text-emerald-900',
      border: 'border-emerald-200',
      accent: 'bg-emerald-600 hover:bg-emerald-700',
      pillBg: 'bg-emerald-100 text-emerald-800',
    },
  },
  {
    id: 'reset-cleanse-box',
    name: '3-Day Signature Reset Box',
    category: 'cleanses',
    tagline: '12 artisan bottles + 6 ginger shots curated by certified nutritionists',
    price: 1499,
    size: '12 Bottles + 6 Shots',
    image: '/images/hero-juice.jpg',
    ingredients: ['4x Green Revive', '4x Citrus Sunrise', '4x Ruby Beet', '6x Fire Immunity Shots'],
    benefits: ['Full Body Reset', 'Digestive Rest', 'Includes Cleanse Guide'],
    calories: 820,
    badge: 'Save ₹350',
    popular: true,
    colorScheme: {
      bg: 'from-teal-50 to-emerald-50',
      text: 'text-teal-900',
      border: 'border-teal-200',
      accent: 'bg-teal-700 hover:bg-teal-800',
      pillBg: 'bg-teal-100 text-teal-800',
    },
  },
];

export const CAFE_INFO = {
  name: 'Zest & Bloom Juice Co.',
  tagline: 'Cold-Pressed Juices, Bowls & Botanical Cafe',
  phone: '6360538862',
  displayPhone: '+91 6360538862',
  email: 'hello@zestbloomcafe.com',
  address: {
    street: '4th Cross, Bhagya Nagar',
    district: 'Bhagya Nagar',
    city: 'Belgaum',
    state: 'Karnataka',
    zip: '590010',
    full: '4th Cross, Bhagya Nagar, Belgaum, Karnataka 590010',
    landmark: 'Near Bhagya Nagar Circle, Belgaum',
  },
  hours: [
    { day: 'Monday – Sunday', time: '10:00 AM – 9:00 PM', status: 'Open Daily (Fresh Cold-Press & Bowls)' },
    { day: 'Weekend Special', time: '10:00 AM – 9:00 PM', status: 'Cleanse Boxes & Smoothie Bowls' },
  ],
  generalHours: '10:00 am to 9:00pm',
  socials: [
    { name: 'Instagram', handle: '@zestbloomjuice', url: 'https://instagram.com' },
    { name: 'WhatsApp', handle: '+91 6360538862', url: 'https://wa.me/916360538862' },
    { name: 'Facebook', handle: 'Zest & Bloom Juice Co.', url: 'https://facebook.com' },
  ],
};
