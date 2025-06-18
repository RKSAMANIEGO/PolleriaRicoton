import { useState, useEffect } from 'react';
import { message, Button, Image, Modal } from 'antd';

export const useProductAdmin = (form) => {
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0); // Add a refresh key
  const [isLoading, setIsloading] = useState(false);

  const loadBlogs = async () => {
    try {
      const [blogsResponse, categoriesData] = await Promise.all([
        // getAllBlogs(),
        // getCategories()
      ]);

      if (blogsResponse?.data && categoriesData?.data) {
        setBlogs(Array.isArray(blogsResponse.data) ? blogsResponse.data : []);
        setCategories(categoriesData.data);
      }
    } catch (error) {
      message.error('Error al cargar los blogs');
    }
  };

  useEffect(() => {
    loadBlogs();
  }, [refreshKey]);

  const handleEdit = (blog) => {
    setCurrentBlog(blog);
    form.setFieldsValue({
      title: blog?.title,
      description: blog?.description,
      category: blog?.category?.id,
      imagen: blog?.image?.url ? [{
        uid: '-1',
        name: 'image',
        status: 'done',
        url: blog.image.url,
      }] : []
    });
    setIsModalVisible(true);
  };

  const showModal = (blog = null) => {
    setCurrentBlog(blog);
    setIsModalVisible(true);
    if (blog) {
      form.setFieldsValue({
        title: blog.title,
        description: blog.description,
        category: blog.category?.id,
        imagen: blog.image?.url ? [{
          uid: '-1',
          name: 'image',
          status: 'done',
          url: blog.image.url,
        }] : []
      });
    } else {
      form.resetFields();
    }
  };

  const convertFileToUrl = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
    });
  };

  const handleSubmit = async (values) => {
    try {
      const imagenUrl = values.imagen?.[0]?.url || 
                        (values.imagen?.[0]?.originFileObj && await convertFileToUrl(values.imagen?.[0]?.originFileObj));

      console.log(values);
                      
      const blogData = {
        title: values.title,
        description: values.description,
        category_id: values.category,
        image: imagenUrl
      };

      let response;

      if (currentBlog) {
        // response = await updateBlog(currentBlog.id, blogData);
        
        // Update locally for immediate UI update
        if (response && response.data) {
          setBlogs(prev => prev.map(blog => 
            blog.id === currentBlog.id ? { ...response.data } : blog
          ));
        }
      } else {
        // response = await createBlog(blogData);
        
        // Add to beginning of array for immediate UI update
        if (response && response.data) {
          setBlogs(prev => [response.data, ...prev]);
        }
      }

      message.success(`¡Entrada ${currentBlog ? 'actualizada' : 'creada'}!`);
      setIsModalVisible(false);
      form.resetFields();
      
      // Refresh data from API to ensure consistency
      setRefreshKey(prev => prev + 1);
    } catch (error) {
      message.error(error.response?.data?.message || 'Error al guardar');
    }
  };

  const handleDelete = async (id) => {
    Modal.confirm({
      title: '¿Eliminar Blog?',
      content: 'Esta acción no se puede deshacer',
      okText: 'Eliminar',
      okType: 'danger',
      cancelText: 'Cancelar',
      async onOk() {
        try {
          // await deleteBlog(id);
          setBlogs(prev => prev.filter(blog => blog.id !== id));
          message.success('¡Entrada eliminada!');
        } catch (error) {
          message.error(error.message);
        }
      }
    });
  };

  return {
    product,
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
  };
};