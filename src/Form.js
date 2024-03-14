import React from 'react';

const Form = () => {
    const [value, setFormValue] = React.useState(null);
    const onInputChange = (e) => {
        setFormValue(e.target.value)
      }
    return (<>
      <div className='form-top'>
          <form onChange={onInputChange}>
            <input value={value} />
          </form>
        </div>
    </>)
}
export default Form