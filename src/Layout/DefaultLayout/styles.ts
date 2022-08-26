import styled from "styled-components";

export const PageContainer = styled.div`
display: grid;
grid-template-areas:
"Sidebar Content";
grid-template-columns: auto 1fr;
transition: grid-template-columns 0.2s;
`