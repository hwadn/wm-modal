import { useState } from 'react'
import { Layout } from 'antd'
import { FormProps } from 'antd/lib/form'
import Config from './Config'
import { StyledHeader, StyledSider } from './style'
import { Component, Setting, IFormValues, defaultFormValues } from './exports'

const { Content } = Layout

function App() {
  const [formValues, setFormValues] = useState<IFormValues>(defaultFormValues)

	const handleFormValueChange: FormProps['onValuesChange'] = (_, values) => {
		console.log('values:', values)
    setFormValues((prevValues) => ({ ...prevValues, ...values }))
	}

  return (
    <Layout style={{ height: '100%' }}>
			<StyledHeader>小蜜蜂</StyledHeader>
			<Layout style={{ height: '100%', backgroundColor: 'gray' }}>
				<StyledSider width={300}>
					<Config/>
				</StyledSider>
				<Content style={{ padding: '20px 60px' }}>
					<div style={{ backgroundColor: 'white', height: '100%' }}>
						<Component formValues={formValues} />
					</div>
				</Content>
				<StyledSider width={400}>
					<Setting onValuesChange={handleFormValueChange} initialValues={defaultFormValues} />
				</StyledSider>
			</Layout>
    </Layout>
  )
}

export default App
