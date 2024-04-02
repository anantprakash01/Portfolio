import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ModalImg from './ModalImg';
import AddIcon from '@mui/icons-material/Add';
import LinkIcon from '@mui/icons-material/Link';
import './style.css';

const PortfolioItem = ({imageSrc,title}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


  return (
    <div className={`col-lg-4 col-md-6 portfolio-item filter-app`}>
      <div className="portfolio-wrap">
        <img src={imageSrc} className="img-fluid" alt="" />
        <div className="portfolio-links">
          {!open && <Button title='details' onClick={handleOpen}><i><AddIcon /></i></Button>}
          {!open && <Button title='Take a Tour'><i><LinkIcon /></i></Button>}
        </div>
      </div>
      <ModalImg open={open} handleClose={handleClose} imageSrc={imageSrc} title={title} />
    </div>
  )
}

export default PortfolioItem
