import { Button } from '@mui/material';
import React, {useState } from 'react'
import ModalImg from './ModalImg';
import AddIcon from '@mui/icons-material/Add';
import LinkIcon from '@mui/icons-material/Link';
import './style.css';

const PortfolioItem = ({images,title,description}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const primaryImage = images.length > 0 ? images[0] : null;

  return (
    <div className={`col-lg-4 col-md-6 portfolio-item filter-app`}>
      <div className="portfolio-wrap">
      {primaryImage && <img src={primaryImage} className="img-fluid" alt="" />}
        <div className="portfolio-links">
          {!open && <Button title='details' onClick={handleOpen}><i><AddIcon /></i></Button>}
          {!open && <Button title='Take a Tour'><i><LinkIcon /></i></Button>}
        </div>
      </div>
      <ModalImg open={open} handleClose={handleClose} images={images} title={title} description={description}/>
    </div>
  )
}

export default PortfolioItem
