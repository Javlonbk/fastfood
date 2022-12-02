
import {ReactComponent as check} from '../assets/icon/check-circle.svg'
import {ReactComponent as users} from '../assets/icon/users.svg'
import {ReactComponent as layers} from '../assets/icon/layers.svg'
import {ReactComponent as barChart} from '../assets/icon/bar-chart.svg'
import {ReactComponent as settings} from '../assets/icon/settings.svg'
import {ReactComponent as archive} from '../assets/icon/archive.svg'
import {ReactComponent as mapPin} from '../assets/icon/map-pin.svg'


export const Navbar = [
    {id:1, name:'Buyurtmalar', link:"/order", icon:check},
    {id:2, name:'Mahsulotlar', link:"/products", icon:archive},
    {id:3, name:'Kategoriyalar', link:"/categories", icon:layers},
    {id:4, name:'Filiallar', link:"/branches", icon:mapPin},
    {id:5, name:'Mijozlar', link:"/customers", icon:users},
    {id:6, name:'Hisobot', link:"/report", icon:barChart},
    {id:7, name:'Katalog', link:"/catolog", icon:settings}
]