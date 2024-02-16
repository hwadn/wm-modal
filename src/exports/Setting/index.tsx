import React from 'react'
import { Form } from 'antd'
import { FormProps } from 'antd/lib/form'

export type { IFormValues } from './default'
export { defaultFormValues } from './default'
import ContainerItems from './ContainerItems'
import DataItems from './DataITems'

interface ISettingProps {
	initialValues: FormProps['initialValues']
	onValuesChange: FormProps['onValuesChange']
}

export const Setting: React.FC<ISettingProps> = ({ onValuesChange, initialValues }) => {
	return (
		<Form onValuesChange={onValuesChange} initialValues={initialValues}>
      <h3>Container</h3>
      <ContainerItems/>
      <h3>Data</h3>
      <DataItems/>
		</Form>
	)
}
