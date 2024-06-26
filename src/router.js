import { createWebHistory, createRouter} from "vue-router";
import Home from './pages/Home'
import Filme from './pages/Filme'
import Salvos from './pages/Salvos'
import Erro from './pages/Erro'
import Contato from './pages/Contato'


const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home',
    },
    {
        path: '/filme/:id',
        component: Filme,
        name: 'Filme',
        props: true,
    },
    {
        path: '/favoritos',
        component: Salvos,
        name: 'Salvos',
    },
    {
        path: "/:pathMatch(.*)*", 
        component: Erro,
        name: 'Erro',
    },
    {
        path: '/contato',
        component: Contato,
        name: 'Contact'
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
 
export default router;




