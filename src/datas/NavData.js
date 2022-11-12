import styled from 'styled-components'

import {ReactComponent as check} from '../assets/icon/check-circle.svg'
import {ReactComponent as users} from '../assets/icon/users.svg'
import {ReactComponent as layers} from '../assets/icon/layers.svg'
import {ReactComponent as barChart} from '../assets/icon/bar-chart.svg'
import {ReactComponent as settings} from '../assets/icon/settings.svg'
import {ReactComponent as archive} from '../assets/icon/archive.svg'
import {ReactComponent as mapPin} from '../assets/icon/map-pin.svg'

const Check = styled(check)` `;
const Users = styled(users)` `;
const Layers = styled(layers)` `;
const Archive = styled(archive)` `;
const BarChart = styled(barChart)` `;
const Settings = styled(settings)` `;
const MapPin  = styled(mapPin)` `;

export const Navbar = [
    {id:1, name:'Buyurtmalar', link:"/order", icon:Check},
    {id:2, name:'Mahsulotlar', link:"/products", icon:Archive},
    {id:3, name:'Kategoriyalar', link:"/categories", icon:Layers},
    {id:4, name:'Filiallar', link:"/branches", icon:MapPin},
    {id:5, name:'Mijozlar', link:"/customers", icon:Users},
    {id:6, name:'Hisobot', link:"/report", icon:BarChart},
    {id:7, name:'Katalog', link:"/catolog", icon:Settings}
]