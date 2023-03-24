import { createWebHistory, createRouter} from "vue-router";
import Home from './pages/Home'
import Filme from './pages/Filme'
import MeusFilmes from './pages/MeusFilmes'
import Erro from './pages/Erro'

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
        component: MeusFilmes,
        name: 'MeusFilmes',
    },
    {
        path: '/*/*',
        component: Erro,
        name: 'Erro',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
 
export default router;




