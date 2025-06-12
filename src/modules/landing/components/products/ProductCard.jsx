import React from 'react'
import { useCart } from '../../../../shared/components/cart/CartContext'


const ProductCard = ({product}) => {
    const { addToCart } = useCart(); 

    return (
        <div className='card bg-white max-w-72 p-5 hover:scale-105 transition
        rounded-xl shadow-lg'>
            <div className='card-body flex flex-col gap-5'>
                <img className='bg-[#f1f1f1] rounded-lg' src={product.img_url} width={250} alt="pollo" />
                <div className='flex flex-col gap-2'>
                    <h2 className='font-semibold'>{product.name}</h2>
                    <p className='text-gray-500'>S/ 
                        <span className='text-sm'>{product.price}</span>
                    </p>
                </div>
            </div>
            <div className='card-footer mt-5'>
                <button className=' bg-red-600 p-4 items-center text-center 
                text-xs rounded-lg w-full text-white hover:bg-red-700' onClick={() => addToCart(product)}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
            
    )
}

export default ProductCard