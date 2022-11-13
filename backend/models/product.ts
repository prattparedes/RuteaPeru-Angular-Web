export class Product {
    id!: string;
    name!: string;
    brand!: string;
    color!: string;
    price!: number;
    tags?: string[];
    favorite!:boolean;
    stars!: number;
    imageUrl!: string;
}