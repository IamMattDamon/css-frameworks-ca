import React from "react";
import Pagination from "react-bootstrap/Pagination";

function Pagination () {
    return (
        <>
        <Pagination className="ml-3">
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>    
        </Pagination>
        </>
    );
}

export default Pagination; 
