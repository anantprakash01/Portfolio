import { Box, Modal } from '@mui/material'
import React from 'react'
import MainCarousel from './MainCarousel';
const isMobile = window.innerWidth <= 600;

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: isMobile ? '90%' : '70%',
  height:  isMobile ? '70%' : '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  overflow:'hidden'
  };

  const cntrStyle={
    height:isMobile?'50%':'70%',
  }



const ModalImg = ({open,handleClose,images,title,description}) => {

  return (
    <div>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
          <div className="container" style={cntrStyle}>
          <MainCarousel images={images}/>
          </div>
          <div className="container my-3">
            <h4 className='m-3' style={{textAlign:'center'}}>{title}</h4>
            <h6><b>Description:</b></h6>
            <p>{description}</p>
          </div>
      </Box>
    </Modal>
    </div>
  )
}

export default ModalImg
