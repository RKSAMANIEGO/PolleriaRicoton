import React from 'react';
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form } from 'antd';
import TitleSection from "../../../../shared/components/Title/TitleSection";
import SearchAdmin from "../../../../shared/components/search/SearchAdmin";
import ProductCard from "./Components/ProductCard";
import ProductModal from "./Components/ProductModal";
import { useProductAdmin } from './hooks/useProductAdmin';

const ChickenPage = () => {

  const form = Form.useForm();
  const {
    blogs,
    isModalVisible,
    currentBlog,
    categories,
    isLoading,
    loadBlogs,
    showModal,
    handleEdit,
    handleSubmit,
    handleDelete,
    convertFileToUrl,
    setIsModalVisible,
  } = useProductAdmin(form);

  return (
    <div className="flex flex-col gap-4 max-w-7xl m-auto px-4">
      {/* Encabezado */}
      <div className={`flex justify-between items-center`}>
        <TitleSection title="Lista de Pollos" />
        <Button 
          type="primary" 
          icon={<PlusOutlined />}
          onClick={() => openModal()}
        >
          Añadir Pollo
        </Button>
      </div>

      {/* Búsqueda */}
      <SearchAdmin 
        placeholder="Buscar pollos..." 
        onSearch={handleSearch}
      />

      {/* Lista de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-5">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id}
            product={product} 
            onEdit={openModal} 
            onDelete={handleDelete} 
          />
        ))}
      </div>

      {/* Modal para crear/editar */}
      <ProductModal
        isOpen={isModalOpen}
        onCancel={closeModal}
        onSave={handleSave}
        form={form}
        isEditing={!!currentProduct}
      />
    </div>
  );
};

export default ChickenPage;