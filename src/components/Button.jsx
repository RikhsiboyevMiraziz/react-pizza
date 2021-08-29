import React from 'react'
import classNames from "classnames";

function Button({children , className}) {
    return (
        <button
        className={classNames('button', className)}
        >
            {children}
        </button>
    )
}

export default Button
