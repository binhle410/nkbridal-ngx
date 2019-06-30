export class Info {
    id: number;
    name: string;
    img: string;
    price: number;
    imgThumb: string[];
    content: string;
    category: string;
}
export class MainCollections {
    id: number;
    route: string;
    name: string;
    img: string;
}
export class Introduce {
    id: number;
    title: string;
    content: string;
    img: string;
    nameBtn: string;
    routeName: string;
}
export class UploadProducts {
    id: number;
    name: string;
    price: string;
    content: string;
    image: string;
    category: string;
}
export class uploadThumb {
    id: number;
    image: string;
    id_product: number;
}
export class Login{
    userName: string;
    password: string;
}
export class Footer{
    Title:string;
    Address:string;
    NumPhone:number;
    Email:string;
    Copyright:string;
}