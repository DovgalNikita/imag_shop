type Icon = 'Favorite' | 'ShoppingCart' | 'Auth';

interface IHeaderMenuItem{
    path:Icon;
    alt:string;
    caption:string;
    counter?:string;
}