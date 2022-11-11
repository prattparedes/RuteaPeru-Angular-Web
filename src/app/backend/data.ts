import { Product } from '../models/product';
import { Tag } from '../models/tag';

export const sample_products: Product[] = [
  {
    id: '1',
    name: 'Fjällräven Gorra 1960 Logo Långtradarkeps',
    brand: 'Fjällräven',
    price: 120,
    tags: ['gorras', 'ropa'],
    color: 'black',
    favorite: true,
    stars: 4.0,
    imageUrl:
      'https://www.tradeinn.com/f/13801/138013361/fjallraven-gorra-1960-logo-langtradarkeps.jpg',
  },
  {
    id: '2',
    name: 'Columbia Chaleco Silver Ridge II',
    brand: 'Columbia',
    price: 180,
    tags: ['chalecos', 'ropa'],
    color: 'blue',
    favorite: false,
    stars: 3.0,
    imageUrl:
      'https://www.tradeinn.com/f/13789/137897877/columbia-chaleco-silver-ridge-ii.jpg',
  },
  {
    id: '3',
    name: 'TwoNav GPS Aventura 2',
    brand: 'TwoNav',
    price: 1200,
    tags: ['gps', 'electrónica'],
    color: 'metal',
    favorite: true,
    stars: 50,
    imageUrl:
      'https://www.tradeinn.com/f/13748/137488838/twonav-gps-aventura-2.jpg',
  },
  {
    id: '4',
    name: 'Botas Senderismo Terrex Swift R2 Mid Goretex',
    brand: 'Adidas',
    price: 460,
    tags: ['botas','zapatos', 'ropa'],
    color: 'blue',
    favorite: true,
    stars: 4.0,
    imageUrl:
      'https://www.tradeinn.com/f/13671/136718599/adidas-botas-senderismo-terrex-swift-r2-mid-goretex.jpg',
  },
  {
    id: '5',
    name: 'Brandit Pantalones Pure Vintage',
    brand: 'Brandit',
    price: 145.99,
    tags: ['pantalones', 'ropa'],
    color: 'green',
    favorite: false,
    stars: 5.0,
    imageUrl:
      'https://www.tradeinn.com/f/13802/138023065/brandit-pantalones-pure-vintage.jpg',
  },
];

export const sample_tags: Tag[] = [
  { name: 'Todos', count: 5 },
  { name: 'Ropa', count: 4 },
  { name: 'Pantalones', count: 1 },
  { name: 'Zapatos', count: 1 },
  { name: 'Electrónica', count: 1 },
];
