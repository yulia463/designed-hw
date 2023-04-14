import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 150,
                mb: 1,
                color: '#00CC22',
                '& .MuiSlider-rail': {
                    backgroundColor: 'black'
                },
                '& .MuiSlider-thumb': {
                    position: "absolute",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: 'translate(-50%, -50%)',
                        height: 5,
                        width: 5,
                        borderRadius: "50%",
                        backgroundColor: '#00CC22',

                    },
                    borderRadius: '50%',
                    width: '18px',
                    height: '18px',
                    border: 1,
                    borderColor: '#00CC22',
                    backgroundColor: 'white '


                },
            }}
            size={'small'}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange;


