import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { updateUser } from '../../firebase/index';

const AdminToggle = ({ userDoc }) => {

  const [checked, setChecked] = useState(userDoc.isAdmin)

  function handleChange(){

    setChecked(oldState => !oldState)
    return updateUser(userDoc.uid, {
      ...userDoc,
      isAdmin: !userDoc.isAdmin
    })
  }
  
  
  return (<div>
    <label>
      Admin: 
      <input 
        type="checkbox" 
        onChange={handleChange} 
        checked={checked}
        className="h-4 w-4 rounded-full shadow mx-5"
      />
    </label>
  </div>)
}

export default AdminToggle;