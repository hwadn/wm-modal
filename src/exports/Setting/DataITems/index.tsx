import React from 'react'
import { Form, Input, Select, ButtonProps } from 'antd'

const antdButtonTypes: ButtonProps['type'][] = ['dashed', 'default', 'link', 'primary', 'text']

const DataItems: React.FC = () => {
  return (
    <>
      <Form.Item label='打开按钮文案' name={['data', 'openText']} >
        <Input/>
      </Form.Item>
      <Form.Item label='打开按钮样式' name={['data', 'type']} >
        <Select options={antdButtonTypes.map((type) => ({
          value: type,
          label: type
        }))}/>
      </Form.Item>
      <Form.Item label='弹窗标题' name={['data', 'modalTitle']} >
        <Input/>
      </Form.Item>
      <Form.Item label='弹窗内容' name={['data', 'modalContent']} >
        <Input/>
      </Form.Item>
    </>
  )
}

export default DataItems
