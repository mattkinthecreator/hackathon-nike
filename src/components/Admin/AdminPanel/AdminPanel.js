import React, { useState } from 'react'
import AddProduct from '../AddProduct/AddProduct'
import EditProduct from '../EditProduct/EditProduct'

const AdminPanel = () => {
  const [switchPanel, setSwitchPanel] = useState('add')

  return (
    <div className="admin">
      <div className="admin-header">
        <p onClick={() => setSwitchPanel('add')}>Add product</p>
        <p onClick={() => setSwitchPanel('edit/delete')}>Edit/Delete product</p>
      </div>
      {switchPanel === 'add' ? <AddProduct /> : <EditProduct />}
    </div>
  )
}

export default AdminPanel
