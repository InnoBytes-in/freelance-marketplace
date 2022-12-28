import { createContext, useState, useEffect } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const title = {
    0: 'Project Details',
    1: 'Skills',
    2: 'Budget and Duration'
}


  return (
    <FormContext.Provider value={{}}>
      {children}
    </FormContext.Provider>
  )
}

export default FormContext