import type { ButtonProps } from 'antd'

interface IContainerForm {
  margin: string
  padding: string
  backgroundColor: string
}

interface IDataForm {
	openText: string
	type: ButtonProps['type']
  modalTitle: string
  modalContent: string
}

export interface IFormValues {
  container: IContainerForm
  data: IDataForm
}

export const defaultFormValues: IFormValues = {
	container: {
    margin: '0',
    padding: '20px 0',
    backgroundColor: '#eeeeee'
  },
  data: {
    openText: '打开弹窗',
    type: 'primary',
    modalTitle: '标题',
    modalContent: '内容'
  }
}
