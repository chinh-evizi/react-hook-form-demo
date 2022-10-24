import React from "react";

export function HookInput({ register, name, label, ...props }: any) {
    const reg = register(name);
    return (
        <div style={formItemStyle}>
            <label htmlFor="">{label}</label>
            <input  {...reg} {...props} width="100%"/>
        </div>
    )
}

const formItemStyle: any = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    // alignItems: "start",
    justifyContent: "center",
    marginTop: "10px",
    textAlign: "left",
    width:"100%",
}