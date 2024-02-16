import React, { useState } from 'react'
import { IFormValues } from '../Setting'
import { Button, Modal } from 'antd'

interface IComponentProps {
	formValues: IFormValues
}

export const Component: React.FC<IComponentProps> = ({ formValues }) => {
	const { container, data } = formValues || {}
  const { type, openText, modalTitle, modalContent } = data || {}

  const [isModalOpen, setIsModalOpen] = useState(false);

	return (
    <div style={{ display: 'flex', justifyContent: 'center', ...container }}>
      <Button type={type} onClick={() => setIsModalOpen(true)}>
        {openText}
      </Button>
      <Modal title={modalTitle} open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}>
        {modalContent}
      </Modal>
    </div>
  )
}
