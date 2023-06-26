import { Box, Button, Divider, InputAdornment, Modal, TextField } from "@mui/material"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Wrapper } from "@googlemaps/react-wrapper";
import { useEffect, useRef } from "react";

type props = {open:boolean, handleClose:()=>void}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 530,
    height: 720,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '2rem',
    textAlign:"center",
    p: 4,
  };

function MapComponent() {
    const ref = useRef<HTMLElement>();
    let map: google.maps.Map;
    useEffect(() => {
      const lat = 37.5407622; //hosting.location.lat;
      const lng = 127.0706095; //hosting.location.lng;
      map = new google.maps.Map(ref.current!, {
        center: { lat, lng },
        zoom: 17,
        zoomControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
      });
      const image = "/icons/marker.png";
      const marker = new google.maps.Marker({
        position: { lat, lng },
        map: map,
        icon: image,
      });
    }, []);
    return (
      <>
        <Box
          ref={ref}
          sx={style}
        ></Box>
      </>
    );
  }

 
export default function MapModal({open, handleClose}: props) {
    
    return (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
            <Wrapper apiKey={"AIzaSyCp6ntFLjQNdUVEIQ_FUTsyJn79NHh2xww"} >
               <MapComponent />
            </Wrapper>
        </Modal>        
    );
}