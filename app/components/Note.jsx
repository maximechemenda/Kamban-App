import React from 'react';


export default ({children, ...props}) => (
    <div {...props}>
      {children}
    </div>
  );
  


/*
import React from 'react';


export default ({children, ...props}) => (
    <div {...props}>
      {children}
    </div>
  );
  */