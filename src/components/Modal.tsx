import React from 'react'
import { MDBModal, MDBModalDialog, MDBModalContent, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn } from 'mdb-react-ui-kit'

interface PropsFunction {
  toggleShow: (item: any) => void;
  recipe: any;
  setShow: any;
  show: boolean;
}
const Modal: React.FC<PropsFunction> = ({ toggleShow, recipe, setShow, show }) => {
  return (
    <>
      <MDBModal open={show} setOpen={setShow}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <h5 className="fw-bold">{recipe.label}</h5>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow} />
            </MDBModalHeader>
            <MDBModalBody>
              <img src={recipe.image} alt={recipe.lable} />
              <div className="mt-2">
                <h5 className="text-start text-muted fw-bold">
                  Calories
                </h5>
                <h5 className="text-start">{recipe.calories} Kcal</h5>
                <h5 className="text-start text-muted fw-bold">
                  Ingrediants
                </h5>
                {
                  recipe.ingredientLines.map((item:any)=>(
                    <li className="text-start" key={item}>{item}</li>
                  ))}
              </div>
            </MDBModalBody>
            <MDBModalFooter >
              <MDBBtn className="danger" onClick={toggleShow}>Close</MDBBtn>
              </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}

export default Modal