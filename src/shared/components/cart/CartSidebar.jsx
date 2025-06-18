import React, { useState } from 'react';
import { FaTimes, FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { MdOutlineDeliveryDining } from "react-icons/md";
import { Switch } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import Chicken from '../../../assets/chicken-icon.png'
import Yape from '../../../assets/yape-icon.png';
import Transfer from '../../../assets/transfer-icon.png';
import Plin from '../../../assets/plin-icon.png';
import Efectivo from '../../../assets/efectivo-icon.png';
import { useCart } from './CartContext';

const methodPays = [
  { id: 'yape', name: 'Yape', logo: Yape },
  { id: 'efectivo', name: 'Efectivo', logo: Efectivo },
  { id: 'plin', name: 'Plin', logo: Plin },
  { id: 'transferencia', name: 'Transferencia', logo: Transfer },
];

const CartSidebar = () => {
  const {
    isCartOpen,
    closeCart,
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart
  } = useCart();

  // Estado para formulario
  const [paymentMethod, setPaymentMethod] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isDelivery, setIsDelivery] = useState(false);
  const [address, setAddress] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [observations, setObservations] = useState('');

  // Subtotales
  const subtotal = cartItems.reduce((acc, item) =>
    acc + (item.price * item.quantity), 0);
  const discount = cartItems.reduce((acc, item) =>
    acc + (item.price * (item.discount / 100) * item.quantity), 0);
  const total = subtotal - discount;

  // Handler para Ordenar
  const handleOrder = () => {
    // Construir mensaje
    const itemsMsg = cartItems.map(item =>
      `✅ ${item.quantity}x ${item.name} de S/${item.price} = *${(item.price * item.quantity).toFixed(2)}*`
    ).join('\n');
    const pagoTexto = `*Pagare por:* ${paymentMethod}`;
    const nombreTexto = `*Mi Nombre es:* ${name}`;
    const numeroTexto = `*Mi Número:* ${number}`;
    let lugarTexto = '';
    if (isDelivery) {
      lugarTexto = `*Enviar a domicilio:* Sí\n*Dirección:* ${address}`;
    } else {
      lugarTexto = `*Entregar en la mesa:* ${tableNumber}`;
    }
    const obsTexto = observations.trim()
      && `*Observaciones:* ${observations.trim()}`;
      
    const mensaje = 
      `*¡Hola Polleria El Ricoton 👋!* quiero realizar el siguiente pedido:\n\n📝 *PEDIDO:*\n\n${itemsMsg}\n\n` +
      `*Sub Total: S/${subtotal.toFixed(2)}*\n` +
      (discount > 0 ? `*Descuento: -S/${discount.toFixed(2)}*\n` : '') +
      `*Total: S/${total.toFixed(2)}*\n\n` +
      `👤 *Datos:*\n\n${nombreTexto}\n\n${pagoTexto}\n\n${numeroTexto}\n\n${lugarTexto}\n\n${obsTexto}`;
    const encodedText = encodeURIComponent(mensaje);
    window.open(`https://wa.me/+51901009929?text=${encodedText}`, '_blank');
  };

  // Validación de formulario
  const isFormValid = 
    paymentMethod.trim() &&
    name.trim() &&
    number.trim() &&
    (isDelivery ? address.trim() : tableNumber.trim());

  return (
    <div 
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      onClick={closeCart}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Sidebar */}
      <div 
        className="absolute overflow-y-auto top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col"
        style={{ transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header fijo */}
        <div className="bg-gray-800 text-white p-3 flex justify-between items-center flex-shrink-0">
          <div>
            <h2 className="text-lg font-bold">Mesa</h2>
            <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">#FISOS</div>
          </div>
          <button 
            onClick={closeCart}
            className="text-white hover:text-gray-300"
          >
            <FaTimes className="h-4 w-4" />
          </button>
        </div>

        {/* Zona scrollable de items */}
        <div className="p-3 border-b border-gray-200 flex-1 ">
          <h3 className="text-base font-semibold mb-2">Tu Carrito</h3>
          {cartItems.length === 0 ? (
            <div className="text-center py-4 ">
              
                <img src={Chicken} alt="chicken"  className='mx-auto' />
              
              <p className="text-gray-600 mb-3 text-sm">Ops! Aún No hay Pedidos</p>
              <button 
                onClick={closeCart}
                className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-700 transition-colors"
              >
                Continuar Comprando
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-3 pb-3 border-b last:border-b-0">
                  {/* Imagen */}
                  <div className="w-24 h-24 rounded overflow-hidden flex-shrink-0 border">
                    <img
                      src={item.img_url}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <h3 className="font-medium text-sm line-clamp-2">{item.name}</h3>
                    <div className="flex items-center text-xs">
                      <span className="font-semibold text-gray-800">S/ {item.price.toFixed(2)}</span>
                      {item.discount !== 0 && (
                        <span className="ml-2 text-red-600 font-medium">
                          -S/{((item.price * (item.discount / 100)) * item.quantity).toFixed(2)}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 mt-1.5">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className={`w-6 h-6 rounded-l flex items-center justify-center border text-sm ${
                          item.quantity <= 1
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        <FaMinus className="w-2.5 h-2.5" />
                      </button>
                      <span className="w-8 h-6 flex items-center justify-center border text-xs">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-r flex items-center justify-center border bg-gray-100 hover:bg-gray-200 text-sm"
                      >
                        <FaPlus className="w-2.5 h-2.5" />
                      </button>
                      <button
                        className="ml-2 w-6 h-6 rounded flex items-center justify-center bg-red-100 text-red-600 hover:bg-red-200"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FaTrash className="w-3 h-3" />
                      </button>
                    </div>
                    {item.discount !== 0 && (
                      <div className="text-right text-xs font-semibold text-green-700 mt-1">
                        S/ {((item.price - (item.price * (item.discount / 100))) * item.quantity).toFixed(2)}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Totales: sin flex-1 para que no crezca */}
        {cartItems.length > 0 && (
          <div className="m-5 p-5 rounded-lg bg-[#f6f6f6] flex-shrink-0">
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
        )}

        {/* Métodos de pago */}
        {cartItems.length > 0 && (
          <div className="p-3 border-t border-gray-200 flex-shrink-0">
            <h3 className="font-semibold text-gray-800 text-sm mb-3 text-center">Métodos de Pago</h3>
            <div className="grid grid-cols-4 gap-3 justify-items-center">
              {methodPays.map(mt => (
                <label
                  key={mt.id}
                  className={`flex flex-col items-center cursor-pointer p-1 rounded 
                    border-2 ${paymentMethod === mt.id ? 'border-blue-500' : 'border-transparent'} 
                    hover:border-blue-300`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={mt.id}
                    className="hidden"
                    checked={paymentMethod === mt.id}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <img 
                    src={mt.logo} 
                    alt={mt.name} 
                    className="w-10 h-10 rounded-full shadow-md object-cover"
                  />
                  <p className="mt-1 text-xs font-medium text-center">{mt.name}</p>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Formulario */}
        {cartItems.length > 0 && (
          <div className="p-3 border-t border-gray-200 space-y-3 flex-shrink-0">
            <div>
              <label className="block text-xs font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Tu nombre"
                className="mt-1 w-full border rounded px-2 py-1 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">Número</label>
              <input
                type="text"
                value={number}
                onChange={e => setNumber(e.target.value)}
                placeholder="Teléfono o referencia"
                className="mt-1 w-full border rounded px-2 py-1 text-sm"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-gray-700">Enviar a domicilio?</span>
              <Switch
                checked={isDelivery}
                checkedChildren={<MdOutlineDeliveryDining className='size-5' />}
                unCheckedChildren={<CloseOutlined/>}
                onChange={checked => {
                  setIsDelivery(checked);
                  if (checked) {
                    setTableNumber('');
                  } else {
                    setAddress('');
                  }
                }}
              />
            </div>
            {isDelivery ? (
              <div>
                <label className="block text-xs font-medium text-gray-700">Ingrese dirección</label>
                <input
                  type="text"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  placeholder="Calle, número, referencia..."
                  className="mt-1 w-full border rounded px-2 py-1 text-sm"
                />
              </div>
            ) : (
              <div>
                <label className="block text-xs font-medium text-gray-700">Nº de mesa</label>
                <input
                  type="text"
                  value={tableNumber}
                  onChange={e => setTableNumber(e.target.value)}
                  placeholder="Ej. 12"
                  className="mt-1 w-full border rounded px-2 py-1 text-sm"
                />
              </div>
            )}
            <div>
              <label className="block text-xs font-medium text-gray-700">Algunas observaciones?</label>
              <input
                type="text"
                value={observations}
                onChange={e => setObservations(e.target.value)}
                placeholder="Ej. Sin cebolla, gratinado extra..."
                className="mt-1 w-full border rounded px-2 py-1 text-sm"
              />
            </div>
          </div>
        )}

        {/* Botón Ordenar */}
        {cartItems.length > 0 && (
          <div className="p-3 bg-white border-t border-gray-200 flex-shrink-0">
            <button
              onClick={handleOrder}
              disabled={!isFormValid}
              className={`w-full py-2 px-3 rounded text-sm font-medium transition-colors
                ${isFormValid 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
            >
              Ordenar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
