import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function ContentTabs() {
    return (
            <div className="flex-md-row">
        <Tabs defaultActiveKey="one" id="uncontrolled-tab-example">
            <Tab eventKey="one" title="First">
                Tab 1
            </Tab>
            <Tab eventKey="two" title="Second">
                Tab 2
            </Tab>
            <Tab eventKey="three" title="Third">
                Tab 3
            </Tab>
        </Tabs>
            </div>
    );
}

export default ContentTabs;