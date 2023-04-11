import { extendTheme, IconButton, Button } from '@chakra-ui/react';
import {  MultiSelectTheme } from 'chakra-multiselect'


const theme = extendTheme({
    styles: {
        global: {
            'html, body': {
                backgroundColor: '#BCC1D8',
            }

        }
       
    },
    components: {
        MultiSelect: MultiSelectTheme,
        IconButton: {
            isActive: {
                backgroundColor: 'red',
            }
        },
        Input: {
            // variants: {
            //     outline: {
            //         backgroundColor: 'red',
            //         borderWidth:'1px',  
            //         borderColor: 'gray.500'
            //     }
            // }

            defaultProps: {
                border: '1px solid red'
            }
        }

        // Button: {
        //     variant: {
        //         'futuro': {
        //             backgroundColor: '#474343'
                
        //         }
        //     }
        // }
    }
});


export default theme;