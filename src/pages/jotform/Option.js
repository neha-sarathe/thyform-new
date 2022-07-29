import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'email', label: 'Email' },
  { value: 'Name', label: 'Name' },
  { value: 'vanilla', label: 'Vanilla' }
]

const MyComponent = () => (
  <Select options={options} />
)
export default MyComponent;