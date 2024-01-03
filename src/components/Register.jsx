import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Popup from "./Popup";
// import $ from "jquery";

function Register() {
  const [section, setSection] = useState(1);
  const totalSections = 2; // Total number of sections in the form

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popUpMsg, setPopUpMsg] = useState("");
  const [btnMsg, setBtnMsg] = useState("");

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    document.getElementById("backBtn").disabled = true;
  }, []);

  return (
    <Container id="register">
      <Heading>
        <span class="fancy">Register</span>
      </Heading>

      <RegForm>
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSfhj7QxTZyc6bfbziFKpiAn9t2U8EpAciMfx4byZEZY349f3g/formResponse"
          target="_self"
          id="bootstrapForm"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <InputFields>
            <div className={`section ${section === 1 ? "active" : ""}`}>
              <p>Team Details</p>

              {/* Team Name */}
              <div className="group">
                <input
                  id="1783007250"
                  type="text"
                  name="entry.1783007250"
                  class="form-control"
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>
                  Team Name<span> *</span>
                </label>
              </div>
              {/* Team Leader Name */}
              <div className="group">
                <input
                  id="481144994"
                  type="text"
                  name="entry.481144994"
                  class="form-control"
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>
                  Team Leader Name<span> *</span>
                </label>
              </div>
              {/* Team Email */}
              <div className="group">
                <input
                  id="906048821"
                  type="email"
                  name="entry.906048821"
                  class="form-control"
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>
                  Email<span> *</span>
                </label>
              </div>
              {/* Team Contact Number */}
              <div className="group">
                <input
                  id="930683255"
                  type="number"
                  name="entry.930683255"
                  class="form-control"
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>
                  Contact Number<span> *</span>
                </label>
              </div>
            </div>
            <div className={`section ${section === 2 ? "active" : ""}`}>
              <p>Members Details</p>

              {/* Member 1 */}
              <div className="member">
                <div className="group">
                  <input
                    id="1159576944"
                    type="text"
                    name="entry.1159576944"
                    class="form-control"
                    required
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>
                    Member 1<span> *</span>
                  </label>
                </div>
                <div className="group">
                  <input
                    id="313829387"
                    type="text"
                    name="entry.313829387"
                    class="form-control"
                    required
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>
                    Member 1 Email<span> *</span>
                  </label>
                </div>
              </div>
              {/* Member 2 */}
              <div className="member">
                <div className="group">
                  <input
                    id="1898053825"
                    type="text"
                    name="entry.1898053825"
                    class="form-control"
                    required
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>
                    Member 2<span> *</span>
                  </label>
                </div>
                <div className="group">
                  <input
                    id="854381478"
                    type="text"
                    name="entry.854381478"
                    class="form-control"
                    required
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>
                    Member 2 Email<span> *</span>
                  </label>
                </div>
              </div>
              {/* Member 3 */}
              <div className="member">
                <div className="group">
                  <input
                    id="233607411"
                    type="text"
                    name="entry.233607411"
                    class="form-control"
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Member 3</label>
                </div>
                <div className="group">
                  <input
                    id="1630433861"
                    type="text"
                    name="entry.1630433861"
                    class="form-control"
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label>Member 3 Email</label>
                </div>
              </div>
              {/* Member 4 */}
              {/* <div className="member">
                  <div className="group">
                    <input
                      id="1489785759"
                      type="text"
                      name="entry.1489785759"
                      class="form-control"
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Member 4</label>
                  </div>
                  <div className="group">
                    <input
                      id="375608239"
                      type="text"
                      name="entry.375608239"
                      class="form-control"
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Member 4 Email</label>
                  </div>
              </div> */}
            </div>
            {/* Team Details */}
          </InputFields>
          {/* <input type="hidden" name="fvv" value="1" />
          <input type="hidden" name="fbzx" value="-104354605009253379" />
          <input type="hidden" name="pageHistory" value="0,1" /> */}
          <div class="buttons">
            <button
              //   disabled
              id="backBtn"
              onClick={(e) => {
                console.log(section);
                e.preventDefault();
                if (section > 1) {
                  document.getElementById("backBtn").disabled = true;
                  document.getElementById("nextBtn").innerHTML = "Next";
                  setSection(section - 1);
                }
              }}
            >
              Back
            </button>
            <button
              type="submit"
              id="nextBtn"
              form="bootstrapForm"
              value="Submit"
              onClick={(e) => {
                e.preventDefault();
                if (section < totalSections) {
                  document.getElementById("backBtn").disabled = false;
                  document.getElementById("nextBtn").innerHTML = "Submit";
                  setSection(section + 1);
                } else {
                  let valid = true;
                  $("[required]").each(function () {
                    if ($(this).is(":invalid") || !$(this).val()) valid = false;
                  });
                  if (!valid) {
                    // alert("error please fill all fields!");
                    setPopUpMsg("Please fill all the required fields");
                    setBtnMsg("Okay");
                    openPopup();
                  } else {
                    var extraData = {};
                    $("#bootstrapForm").ajaxSubmit({
                      data: extraData,
                      dataType: "jsonp",
                      error: function () {
                        setPopUpMsg("Your Team has been registered");
                        setBtnMsg("Yaaay");
                        openPopup();
                      },
                    });
                  }
                }
              }}
            >
              Next
            </button>
          </div>
          {/* <input className="btn btn-primary" type="submit" value="Submit" /> */}
        </form>
      </RegForm>
      {isPopupOpen && (
        <Popup message={popUpMsg} onClose={closePopup} btnMsg={btnMsg} />
      )}
    </Container>
  );
}

export default Register;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 80px;
`;

const Heading = styled.h1.attrs({ className: "heading" })``;

const RegForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InputFields = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.25);
  /* width: 75%; */
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
