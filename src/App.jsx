import { Formik, Form } from "formik";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;
const Section = styled.section`
  background-color: #eee;
  border-top: solid 2px palegoldenrod;
  padding: 20px 25px;
  width: 500px;
  box-shadow: 0px 2px 3px rgb(0, 0, 0, 0.3);
`;

const App = () => {
  const handleSubmit = () => {
    /*  */
  };

  return (
    <Container>
      <Section>
        <Formik
          initialValues={{ deposit: "", contribution: "", years: "", rate: "" }}
          onSubmit={handleSubmit}
        >
          <Form>
          {/*  */}
          </Form>
        </Formik>
      </Section>
    </Container>
  );
};

export default App;
