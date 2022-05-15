import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    footers:[

        <span>Tesla &copy; 2022</span>,
        "Privacy & Legal",
        "Vehicle Recall",
        "Contact",
        "Careers",
        "News",
        "Engage",
        "Location",
        "Developers",
        
       

    ]

}

const footerSlice =  createSlice({

    name:"footer",
    initialState,
    reducers:{}
})

export const selectFooter = state=>state.footer.footers

export default footerSlice.reducer