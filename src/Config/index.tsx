import React from 'react'
import { Descriptions, DescriptionsProps } from 'antd'
import pkgJson from '../../package.json'

const items: DescriptionsProps['items'] = [
  {
    key: 'name',
    label: 'Name',
    children: pkgJson.name,
  },
  {
    key: 'version',
    label: 'Version',
    children: pkgJson.version,
  },
  {
    key: 'author',
    label: 'Author',
    children: pkgJson.author,
  },
  {
    key: 'description',
    label: 'Description',
    children: pkgJson.description,
  },
  {
    key: 'dependencies',
    label: 'Dependencies',
    children: Object.keys(pkgJson.dependencies).length > 0 ? Object.keys(pkgJson.dependencies).join(', ') : '-',
  },
  {
    key: 'peerDependencies',
    label: 'PeerDependencies',
    children: '',
  },
  {
    key: 'peerDependencies-value',
    span: 1,
    children: Object.keys(pkgJson.peerDependencies).join(', '),
  },
];

const Config: React.FC = () => {
  return (
    <Descriptions
      title='package.json'
      column={1}
      items={items}
    />
  )
}

export default Config
