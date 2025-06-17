import React from 'react';
import { Modal, Form, Input, InputNumber, Button } from 'antd';

const ProductModal = ({ 
  isOpen, 
  onCancel, 
  onSave, 
  form, 
  isEditing 
}) => {
  const handleSubmit = () => {
    form.validateFields().then((values) => {
      onSave(values);
    });
  };

  return (
    <Modal
      title={isEditing ? "Editar Pollo" : "Añadir Nuevo Pollo"}
      open={isOpen}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancelar
        </Button>,
        <Button 
          key="submit" 
          type="primary" 
          onClick={handleSubmit}
        >
          {isEditing ? "Actualizar" : "Crear"}
        </Button>
      ]}
    >
      <Form
        form={form}
        layout="vertical"
      >
        <Form.Item
          name="title"
          label="Nombre del Pollo"
          rules={[{ required: true, message: 'Por favor ingrese el nombre' }]}
        >
          <Input placeholder="Ej: 1/4 de Pollo con papas" />
        </Form.Item>
        
        <Form.Item
          name="price"
          label="Precio (S/)"
          rules={[{ required: true, message: 'Por favor ingrese el precio' }]}
        >
          <InputNumber 
            min={0} 
            step={0.1} 
            className="w-full"
            formatter={value => `S/ ${value}`}
            parser={value => value.replace('S/ ', '')}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ProductModal;