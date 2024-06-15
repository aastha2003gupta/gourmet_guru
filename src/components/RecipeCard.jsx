import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
    const { image, label, cuisineType, dietLabel, mealType, uri } = recipe?.recipe

    const id = uri?.split("#")[1]

    return (
        <Link to={`/recipes/${id}`} className='w-full md:w-[240px] mb-6'>
            <div className='bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105'>
                <img src={image} alt={label} className='h-[200px] md:h-[160px] w-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300' />

                <div className='p-4'>
                    <h3 className='text-white font-semibold text-lg mb-3 truncate'>{label}</h3>

                    <div className='flex flex-wrap gap-2'>
                        <span className='px-3 py-1 text-sm capitalize bg-gray-700 text-orange-400 rounded-full'>
                            {cuisineType}
                        </span>
                        <span className='px-3 py-1 text-sm capitalize bg-gray-700 text-green-400 rounded-full'>
                            {mealType}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RecipeCard

