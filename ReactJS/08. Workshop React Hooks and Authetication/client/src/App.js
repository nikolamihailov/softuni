import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { gameServiceFactory } from './services/gameService';
import { authServiceFactory } from './services/authService';
import { AuthContext } from './contexts/AuthContext';

import { Header } from "./components/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { Register } from "./components/Register/Register";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Catalog } from "./components/Catalog/Catalog";
import { GameDetails } from './components/GameDetails/GameDetails';
import { EditGame } from './components/EditGame/EditGame';

function App() {
    const navigate = useNavigate();
    const [games, setGames] = useState([]);
    const [auth, setAuth] = useState({});
    const gameService = gameServiceFactory(auth.accessToken);
    const authService = authServiceFactory(auth.accessToken)

    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result)
            })
    }, []);

    const onCreateGameSubmit = async (data) => {
        const newGame = await gameService.create(data);

        setGames(state => [...state, newGame]);

        navigate('/catalog');
    };

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);

            setAuth(result);

            navigate('/catalog');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        if (confirmPassword !== registerData.password) {
            return;
        }

        try {
            const result = await authService.register(registerData);

            setAuth(result);

            navigate('/catalog');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
    };

    const onGameEditSubmit = async (values) => {
        const result = await gameService.edit(values._id, values);

        setGames(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/catalog/${values._id}`);
    }

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={contextValues}>
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/create-game' element={<CreateGame onCreateGameSubmit={onCreateGameSubmit} />} />
                        <Route path='/catalog' element={<Catalog games={games} />} />
                        <Route path='/catalog/:gameId' element={<GameDetails />} />
                        <Route path='/catalog/:gameId/edit' element={<EditGame onGameEditSubmit={onGameEditSubmit} />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
