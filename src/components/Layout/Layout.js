import React from 'react'

import Ax from '../../hoc/Ax'

const layout=(props)=>(
    <Ax>
        <div>Toolbar,sidedrawer,backdrop </div>
        <main>
            {props.children}
        </main>
    </Ax>

);
export default layout;