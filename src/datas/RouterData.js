import Branches from '../components/Branches/Branches.jsx'
import Catolog from '../components/Catalog/Catolog.jsx'
import Categories from '../components/Categories/Categories.jsx'
import Customers from '../components/Customers/Customers.jsx'
import Orders from '../components/Orders/Orders.jsx'
import Products from '../components/Products/Products.jsx'
import Report from '../components/Report/Report.jsx'

export const RouterData = [
    {
        id:1, path:"/order", element:<Orders/>
    },
    {
        id:2, path:"/products", element:<Products/>
    },
    {
        id:3, path:"/categories", element:<Categories/>
    },
    {
        id:4, path:"/branches", element:<Branches/>
    },
    {
        id:5, path:"/customers", element:<Customers/>
    },
    {
        id:6, path:"/report", element:<Report/>
    },
    {
        id:7, path:"/catolog", element:<Catolog/>
    }
]