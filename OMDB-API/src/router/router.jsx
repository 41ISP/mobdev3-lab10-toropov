import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import { createBrowserRouter } from "react-router-dom"
export const router = createBrowserRouter([

    {
        path: "/mobdev3-lab10-toropov/",
        element: <SearchPage />
    },
    {
        path: "/mobdev3-lab10-toropov/movie/:id",
        element: <MovieDetailsPage />
    }
]
)
export default router