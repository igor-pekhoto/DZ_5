import { useEffect, useRef } from 'react'

const Form = ({
  onSubmit, name = '', phone = '', pic = '',
}) => {
  const formRef = useRef(null)

  useEffect(() => {
    formRef.current.elements.name.value = name
    formRef.current.elements.phone.value = phone
    formRef.current.elements.pic.value = pic
  }, [])

  return (
    <form ref={formRef} className="d-flex flex-column align-items-center" onSubmit={onSubmit}>
      <div className="mb-3">
        <input type="text" name="name" placeholder="Name..." className="form-control" id="exampleInputEmail1" />
      </div>
      <div className="mb-3">
        <input type="text" name="phone" placeholder="Phone..." className="form-control" id="exampleInputEmail1" />
      </div>
      <div className="mb-3">
        <input type="text" name="pic" placeholder="Picture url" className="form-control" id="exampleInputEmail1" />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Form
