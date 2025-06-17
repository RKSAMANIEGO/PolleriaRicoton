import { Modal } from "antd"
const CustomModal = ({isOpen,onClose,children,footer,title}) => {
  return (
    <Modal
        open={isOpen}
        onCancel={onClose}
        centered={true}
        footer={footer || null}
        maskClosable={false}
    >
    <div className="flex flex-col gap-2">
        <h4 className="text-2xl font-bold capitalize text-gray-600">{title}</h4>
        {children}
    </div>
    </Modal>
  )
}

export default CustomModal