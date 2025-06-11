import React from 'react';
import { FaTimes, FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { MdOutlineDeliveryDining } from "react-icons/md";
import Yape from '../../../assets/yape-icon.png';
import Transfer from '../../../assets/transfer-icon.png';
import Plin from '../../../assets/plin-icon.png';
import Efectivo from '../../../assets/efectivo-icon.png';
import { useCart } from './MockCartContext';

const CartSidebar = () => {
  const {
    isCartOpen,
    cartItems,
    getCartTotal,
    removeFromCart,
    updateQuantity,
    clearCart
  } = useCart();

  const handleWhatsappCheckout = () => {
    const total = getCartTotal();
    const message = cartItems.map(item =>
      `• ${item.quantity}x ${item.name} - S/${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');

    const text = `¡Hola! Me gustaría hacer el siguiente pedido:\n\n${message}\n\n*Total: S/${total.toFixed(2)}*`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/+51927987259?text=${encodedText}`, '_blank');
  };

  // Calculate subtotal and discount for the invoice section
  const subtotal = cartItems.reduce((acc, item) => 
    acc + (item.price * item.quantity), 0);
  const discount = cartItems.reduce((acc, item) => 
    acc + (item.price * (item.discount / 100) * item.quantity), 0);
  const total = subtotal - discount;

  return (
    <div
      className={`bg-white rounded-l-2xl overflow-hidden shadow-xl
      transition-all duration-300 ${isCartOpen ?  'w-80' : 'w-0'}`}
    >
      
        {/* Header */}
        <div className="bg-gray-800 text-white p-3 flex justify-between items-center">
          <div className='flex flex-col'>
            <h2 className="font-semibold">Norme de ordre</h2>
            <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">#FISOS</div>
          </div>
          <div className='flex flex-col'>
            <h2 className="font-semibold">Mesa</h2>
            <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">#FISOS</div>
          </div>
        </div>

        {/* Cart Items */}
        <div className="p-3 border-b border-gray-200 flex-grow overflow-y-auto">
          <h3 className="text-base font-semibold mb-2">Tu Carrito</h3>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-4">
              <p className="text-gray-600 mb-3 text-sm">Ops! Aún No hay Productos</p>
              <button 
                onClick={closeCart}
                className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-700 transition-colors"
              >
                Continuar Comprando
              </button>
            </div>
          ) : (
            <div className="space-y-3 max-h-[30vh] overflow-y-auto pr-1">
              {cartItems.map(item => (
                <div key={item.id} className="flex pb-3">
                  {/* Product Image */}
                  <div 
                    className="w-14 h-14 bg-cover bg-center rounded mr-2 flex-shrink-0"
                    style={{ backgroundImage: `url(${item.image[0].url})` }}
                  ></div>
                  
                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm truncate">{item.name}</h3>
                    <div className="flex items-center mt-1">
                      <span className="font-medium text-xs">S/ {item.price.toFixed(2)}</span>
                      {item.discount !== 0 && (
                        <span className="ml-1 text-red-600 text-xs">
                          -S/{((item.price * (item.discount / 100)) * item.quantity).toFixed(2)}
                        </span>
                      )}
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center mt-1.5">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className={`w-6 h-6 rounded-l flex items-center justify-center border ${
                          item.quantity <= 1 
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        <FaMinus className="w-2.5 h-2.5" />
                      </button>
                      
                      <span className="w-8 h-6 flex items-center justify-center border-t border-b text-xs">
                        {item.quantity}
                      </span>
                      
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-r flex items-center justify-center border bg-gray-100 hover:bg-gray-200"
                      >
                        <FaPlus className="w-2.5 h-2.5" />
                      </button>
                      
                      <button
                        className="ml-1 w-6 h-6 rounded flex items-center justify-center bg-red-100 text-red-600 hover:bg-red-200"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FaTrash className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Item Total */}
                  {item.discount !== 0 && (
                    <div className="font-medium text-xs ml-1 min-w-[60px] text-right">
                      S/ {((item.price - (item.price * (item.discount / 100))) * item.quantity).toFixed(2)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Totals Section */}
        <div className="p-3 bg-gray-50 border-y border-gray-200">
          <div className="flex justify-between mb-1 text-sm">
            <span className="font-medium text-gray-700">Sub Total</span>
            <span className="font-medium">S/ {subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between mb-1 text-sm">
            <span className="text-red-600 font-medium">Descuento</span>
            <span className="text-red-600 font-medium">-S/ {discount.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between mt-2 pt-2 border-t border-gray-300">
            <span className="font-bold">Total</span>
            <span className="font-bold">S/ {total.toFixed(2)}</span>
          </div>
        </div>

      {/* Payment Methods with Rounded Icons */}
      <div className="p-3 border-b border-gray-200">
        <h3 className="font-semibold text-gray-800 text-sm mb-3 text-center">Métodos de Pago</h3>
        <div className="grid grid-cols-4 gap-3 justify-items-center">
          <div className="flex flex-col items-center">
            <img 
              src={Yape} 
              alt="Yape" 
              className="w-10 h-10 rounded-full shadow-md object-cover border-2 border-white"
            />
            <p className="mt-1 text-xs font-medium">Yape</p>
          </div>
          
          <div className="flex flex-col items-center">
            <img 
              src={Efectivo} 
              alt="Efectivo" 
              className="w-10 h-10 rounded-full shadow-md object-cover border-2 border-white"
            />
            <p className="mt-1 text-xs font-medium">Efectivo</p>
          </div>
          
          <div className="flex flex-col items-center">
            <img 
              src={Plin} 
              alt="Plin" 
              className="w-10 h-10 rounded-full shadow-md object-cover border-2 border-white"
            />
            <p className="mt-1 text-xs font-medium">Plin</p>
          </div>
          
          <div className="flex flex-col items-center">
            <img 
              src={Transfer} 
              alt="Transferencia" 
              className="w-10 h-10 rounded-full shadow-md object-cover border-2 border-white"
            />
            <p className="mt-1 text-xs font-medium">Transferencia</p>
          </div>
        </div>
      </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="p-3 bg-white border-t border-gray-200">
            <div className="flex justify-between items-center mb-3">
              <span className="font-medium text-gray-700 text-sm">Total a Pagar:</span>
              <span className="font-bold text-gray-900">S/ {getCartTotal().toFixed(2)}</span>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={clearCart}
                className="flex-1 py-2 px-3 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors flex items-center justify-center text-sm font-medium"
              >
                Ordenar
              </button>
              
              <button
                onClick={handleWhatsappCheckout}
                className="flex-1 py-2 px-3 bg-green-600 text-white rounded hover:bg-green-700 transition-colors flex items-center justify-center text-sm font-medium gap-1"
              >
                <MdOutlineDeliveryDining className="text-base" />
                Delivery
              </button>
            </div>
          </div>
        )}
      </div>
  );
};

export default CartSidebar;