import { Route, Routes } from "react-router-dom"
import { Favorites } from "./views/Favorites"
import { Home } from "./views/Home"
import { MovieDetail } from "./views/MovieDetail"

export const AplicationRouters = () => (
    <>
        <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/movie/:id" element={<MovieDetail />}></Route>
        <Route exact path="/favorites" element={<Favorites />}></Route>
        </Routes>
    
    </>
)