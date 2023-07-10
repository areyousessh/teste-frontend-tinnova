import { Route, Routes } from "react-router-dom";
import React from "react";
import { List } from "../pages/list";
import { Register } from "../pages/register";

export function Router() {
    return (
        <Routes>
            <Route index element={<List/>}/>
            <Route path="Register" element={<Register/>}/>
        </Routes>
    )
}