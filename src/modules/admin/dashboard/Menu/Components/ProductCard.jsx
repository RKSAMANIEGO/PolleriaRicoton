import React from 'react';
import { Card, Button, Tooltip } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import AnimationIn from '../../../../../shared/animations/AnimationIn';

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <AnimationIn direction="bottom">
      <Card
        hoverable
        cover={
          <div className="h-40 bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-lg">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-3/4 object-contain transition-transform duration-300 hover:scale-110"
            />
          </div>
        }
        actions={[
          <Tooltip title="Editar" key="edit">
            <Button 
              type="text" 
              icon={<EditOutlined className="text-blue-500" />} 
              onClick={() => onEdit(product)}
            />
          </Tooltip>,
          <Tooltip title="Eliminar" key="delete">
            <Button 
              type="text" 
              icon={<DeleteOutlined className="text-red-500" />} 
              onClick={() => onDelete(product.id)}
            />
          </Tooltip>
        ]}
        className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        <div className="p-4">
          <h3 className="font-bold text-base mb-1">{product.title}</h3>
          <div className="flex justify-between items-center">
            <span className="text-green-600 font-semibold">
              S/{product.price.toFixed(2)}
            </span>
            <span className="text-xs text-gray-500">ID: {product.id}</span>
          </div>
        </div>
      </Card>
    </AnimationIn>
  );
};

export default ProductCard;