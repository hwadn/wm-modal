import React from 'react'
import { Form, Input, ColorPicker } from 'antd'

const ContainerItems: React.FC = () => {
  return (
    <>
    <Form.Item label='margin' name={['container', 'margin']} >
      <Input/>
    </Form.Item>
    <Form.Item label='padding' name={['container', 'padding']} >
      <Input/>
    </Form.Item>
    <Form.Item label='color' normalize={(color) => color.metaColor.a === 0 ? undefined :  color.toHexString()} name={['container', 'backgroundColor']} >
      <ColorPicker format='rgb' allowClear />
    </Form.Item></>
  )
}

export default ContainerItems
