import React from "react";

function ContactDetails() {
    return (
        <>
            <div className="pb-3">
                <span className="flex-row">
                    <i className="fa fa-envelope mr-5"></i>
                    hello@yay.com
                        </span>
            </div>

            <div className="pb-3">
                <span className="flex-row">
                    <i className="fa fa-phone mr-5"></i>
                            123 456 7890
                </span>
            </div>

            <div className="flex-row">
                <i className="fa fa-map-marker mr-5"></i>
                <span>123</span><br />
                <span className="address-margin">Some Street</span><br />
                <span className="address-margin">Some City</span><br />
                <span className="address-margin">10000</span><br />
            </div>
        </>
    );
}

export default ContactDetails;
