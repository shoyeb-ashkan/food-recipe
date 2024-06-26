import React from 'react'
import { MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardGroup } from 'mdb-react-ui-kit'

interface PropsFunction {
  toggleShow: (item: any) => void;
  recipe: any
}
const Cards: React.FC<PropsFunction> = ({ recipe, toggleShow }) => {
  return (
    <>
      <MDBCol>
        <MDBCardGroup>
          <MDBCard className='h-100 mt-2 d-sm-flex'>
            <MDBCardImage
              src={recipe.image}
              alt={recipe.label}
              position='top'
              style={{ cursor: 'pointer' }}
              onClick={()=>toggleShow(recipe)}
            />
            <MDBCardBody>
              <h5 className="fw-bold">{recipe.label}</h5>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
      </MDBCol>
    </>
  )
}

export default Cards