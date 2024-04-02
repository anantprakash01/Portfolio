import { Box, Modal } from '@mui/material'
import React from 'react'

const isMobile = window.innerWidth <= 600;

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: isMobile ? '90%' : '70%',
  height:  isMobile ? '80%' : '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  };



  const imgStyle = {
    width: '100%',
    height: '75%',
    display: 'block',
    margin: 'auto',
  };
const ModalImg = ({open,handleClose,imageSrc,title}) => {


  return (
    <div>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
          <img src={imageSrc} style={imgStyle} className="img-fluid" alt="" />
          <div className="container">
            <h4 className='m-3' style={{textAlign:'center'}}>{title}</h4>
            <h6><b>Description:</b></h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, dolore.</p>
          </div>
      </Box>
    </Modal>
    </div>
  )
}

export default ModalImg
