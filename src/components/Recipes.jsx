import React, { useEffect, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import Loading from './Loading'
import Searchbar from './SearchBar'
import RecipeCard from './RecipeCard'
import { fetchRecipes } from '../utils'
import Button from './Button'

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('Vegan')
    const [limit, setLimit] = useState(30)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const fetchRecipe = async () => {
        try {
            const data = await fetchRecipes({ query, limit })
            setRecipes(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const handleSearchedRecipe = async (e) => {
        e.preventDefault()
        setLoading(true)
        fetchRecipe()
    }

    const showMore = () => {
        setLimit(prev => prev + 10)
        fetchRecipe()
    }

    useEffect(() => {
        setLoading(true)
        fetchRecipe()
    }, [])

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div className='w-full'>
            <div className='w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10'>
                <form className='w-full lg:w-2/4' onSubmit={handleSearchedRecipe}>
                    <Searchbar
                        placeholder="Search Recipes"
                        handleInputChange={handleChange}
                        rightIcon={
                            <BiSearchAlt2 className='text-gray-600' onClick={handleSearchedRecipe} />
                        }
                    />
                </form>
            </div>

            {recipes?.length > 0 ? (
                <>
                    <div className='w-full flex flex-wrap gap-6 justify-center px-4 lg:px-10 py-6'>
                        {recipes?.map((item, index) => (
                            <RecipeCard recipe={item} key={index} />
                        ))}
                    </div>

                    <div className='flex items-center justify-center py-6'>
                        <Button
                            title="Show More"
                            containerStyle="bg-orange-800 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-700"
                            handleClick={showMore}
                        />
                    </div>
                </>
            ) : (
                <div className='text-white w-full flex items-center justify-center py-10'>
                    <p className='text-center'>No Recipe Found</p>
                </div>
            )}
        </div>
    )
}

export default Recipes
