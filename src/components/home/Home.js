import React from "react";
import Container from "react-bootstrap/Container";
import ContentTabs from "./ContentTabs";
import ContentAccordion from "./ContentAccordion";
import ContentCarousel from "./Carousel";


function Home() {
    return (
    <>
      <main>
        <ContentCarousel />

        <Container className="container-lg">
            <h1 className="py-4 mt-4 header-h1">We do YAY things</h1>
            <p className="pb-4 paragraphs">Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
        </Container>

        <Container className="mt-5">
            <ContentAccordion className="d-md-none" />
            <div className="d-none d-md-block">
                <ContentTabs />
            </div>
        </Container>
    </main>
    </>
);
}

export default Home;